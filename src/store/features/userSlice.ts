import {createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction} from "@reduxjs/toolkit";
import {onAuthStateChanged, updateProfile, User} from "firebase/auth";
import {database, firebaseAuth, storage} from "../../firebase.ts";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {ref as refDB, set as setDB} from "firebase/database";
import {UploadAvatar} from "../../types/userType.ts";

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
            const storageRef = ref(storage, user.uid);
            await uploadBytes(storageRef, file);
            const photoURL = await getDownloadURL(storageRef);
            await updateProfile(user, {photoURL});
            return photoURL;
        } catch (error) {
            return rejectWithValue(error);
        } finally {
            console.log('user/uploadAvatar called')
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
                state.isLoading = true;
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