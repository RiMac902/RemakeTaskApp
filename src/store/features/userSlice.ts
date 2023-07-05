import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {onAuthStateChanged, updateProfile, User} from "firebase/auth";
import {database, firebaseAuth, storage} from "../../firebase.ts";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {ref as refDB, set as setDB} from "firebase/database";


interface UserState {
    user: User | null;
    password: string,
    email: string,
    isLoading: false,
    error: string | null,
}

const initialState: UserState = {
    user: null,
    password: '',
    email: '',
    isLoading: false,
    error: '',
}

export const uploadAvatar = createAsyncThunk(
    'user/uploadAvatar',
    async (file: File, {dispatch, getState}) => {
        const {user} = <UserState>getState();
        try {
            if (user) {
                const storageRef = ref(storage, `users/${user.uid}`);
                await uploadBytes(storageRef, file);
                const photoURL = await getDownloadURL(storageRef);

                // DataBase
                // updateProfile(user, {photoURL});
                // const userRef = refDB(database, `users/${user.uid}`);
                // await setDB(userRef, updatedUser);

                dispatch(setAvatarUrl(photoURL));
            }
        } catch (error: any) {

        } finally {
            console.log('user/uploadAvatar called')
        }

    }
);

export const userData = createAsyncThunk('user/userData',
    async (_,{getState, dispatch}) => {
        try {
            onAuthStateChanged(firebaseAuth, (userData) => {
               const {user} = <UserState>getState();
               dispatch(setUserData(user));
            });
        } catch (error: any) {
            throw new Error(error);
        } finally {
            console.log('userData called')
        }
    });


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        setAvatarUrl: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.photoURL = action.payload;
            }
        },
    },
    extraReducers: builder => {

    }
});


export const {setAvatarUrl, setUserData} = userSlice.actions;
export const userReducer = userSlice.reducer;