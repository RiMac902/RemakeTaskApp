import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import {firebaseAuth} from "../../firebase.ts";
import {AuthState, SignInCredentials, SignUpCredentials} from "../../types/authType.ts";
import {IUser} from "../../types/userType.ts";
import { getDatabase, ref, set } from "firebase/database";

export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({email, password, redirectToHome}: SignInCredentials, {dispatch, rejectWithValue}) => {
        try {
            const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const user = response.user;
            const {email: userEmail, displayName} = user;
            if (redirectToHome) {
                redirectToHome();
            }
            return {email: userEmail, displayName} as IUser;
        } catch (error) {
            return rejectWithValue('Authentication failed');
        }
    }
);

export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({email, password, displayName, redirectToHome}: SignUpCredentials, {dispatch, rejectWithValue}) => {
        try {
            const {user} = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            await updateProfile(user, {displayName});

            const db = getDatabase();
            set(ref(db, 'users/' + user.uid), {
                userId: user.uid,
                displayName,
            });

            if (redirectToHome) {
                redirectToHome();
            }
            return {email, displayName} as IUser;
        } catch (error) {
            return rejectWithValue('Authentication failed');
        }
    }
);

export const signOutAccount = createAsyncThunk(
    'auth/signOut',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            signOut(firebaseAuth);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.payload as string;
            })
            .addCase(signUp.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.payload as string;
            })
            .addCase(signOutAccount.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signOutAccount.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.error = null;
            })
            .addCase(signOutAccount.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
});


export const authReducer = authSlice.reducer;