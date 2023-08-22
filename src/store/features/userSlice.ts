import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {updateProfile, User} from "firebase/auth";
import {storage} from "../../firebase.ts";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {UploadAvatar} from "../../types/userType.ts";
import {getDatabase, ref as refDB, update} from "firebase/database";

interface UserState {
    user: User | null;
    photoURL: string | undefined;
    isLoading: boolean,
    error: string | null,
}

const initialState: UserState = {
    user: null,
    photoURL: undefined,
    isLoading: false,
    error: null,
}

export const uploadAvatar = createAsyncThunk(
    'user/uploadAvatar',
    async ({file, user}: UploadAvatar, {dispatch, rejectWithValue}) => {
        try {
            const storageRef = ref(storage, user!.uid);
            await uploadBytes(storageRef, file!);
            const photoURL = await getDownloadURL(storageRef);
            await updateProfile(user!, {photoURL});

            //Adding photoURL in database
            const db = getDatabase();
            await update(refDB(db, `users/${user?.uid}`), { photoURL });

            return photoURL;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(uploadAvatar.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(uploadAvatar.fulfilled, (state, action) => {
                state.isLoading = false;
                state.photoURL = action.payload;
                state.error = null;
            })
            .addCase(uploadAvatar.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
});

export const userReducer = userSlice.reducer;