import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import {firebaseAuth} from "../../firebase.ts";
import {AuthState, SignInCredentials, SignUpCredentials} from "../../types/authType.ts";
import {User} from "../../types/userType.ts";


export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({email, password, redirectToHome}: SignInCredentials, {dispatch}) => {
        try {
            dispatch(authSlice.actions.setLoading(true));
            const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
            const user = response.user;
            const {email: userEmail, displayName} = user;
            if (redirectToHome) {
                redirectToHome();
            }
            return {email: userEmail, displayName} as User;
        } catch (error: any) {
            throw new Error(error.message);
        } finally {
            dispatch(authSlice.actions.setLoading(false));
        }
    }
);

export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({email, password, displayName, redirectToHome}: SignUpCredentials, {dispatch}) => {
        try {
            dispatch(authSlice.actions.setLoading(true));
            const {user} = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            await updateProfile(user, {displayName});
            if (redirectToHome) {
                redirectToHome();
            }
            return {email, displayName} as User;
        } catch (error: any) {
            throw new Error(error.message);
        } finally {
            dispatch(authSlice.actions.setLoading(false));
        }
    }
);

export const signOutAccount = createAsyncThunk(
    'auth/signOut',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            dispatch(authSlice.actions.setLoading(true));
            signOut(firebaseAuth);
        } catch (error: any) {
            return rejectWithValue(error.message);
        } finally {
            dispatch(authSlice.actions.setLoading(false));
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
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
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
                state.error = action.payload as string | null;
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
                state.error = action.payload as string | null;
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
                state.error = action.error.message as string;
            });
    }
});


export const authReducer = authSlice.reducer;