import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProjectValues} from "../../types/formType.ts";
import {ProjectState} from "../../types/projectType.ts";
import {getDatabase, ref, set, push} from "firebase/database";

export const getProject = createAsyncThunk(
    'project/get',
    async ({title, description}: ProjectValues, {dispatch, rejectWithValue}) => {
        try {

        } catch (error) {
            return rejectWithValue('CreateProject failed');
        }
    }
);


export const createProject = createAsyncThunk(
    'project/create',
    async ({user, title, description, redirectToProjectPage}: ProjectValues, {dispatch, rejectWithValue}) => {
        try {
            const db = getDatabase();
            const newProjectRef = push(ref(db, `users/${user!.uid}/projects/${title}`), {
                title,
                description,
            });

            const projectKey = newProjectRef.key;

            if (redirectToProjectPage) {
                redirectToProjectPage(projectKey);
            }

        } catch (error) {
            return rejectWithValue('CreateProject failed');
        }
    }
);

export const editProject = createAsyncThunk(
    'project/edit',
    async ({title, description, redirectToProjectPage}: ProjectValues, {dispatch, rejectWithValue}) => {
        try {

        } catch (error) {
            return rejectWithValue('CreateProject failed');
        }
    }
);

export const deleteProject = createAsyncThunk(
    'project/delete',
    async ({title, description, redirectToProjectPage}: ProjectValues, {dispatch, rejectWithValue}) => {
        try {

        } catch (error) {
            return rejectWithValue('CreateProject failed');
        }
    }
);


const initialState: ProjectState = {
    title: '',
    description: '',
    isLoading: false,
    error: null,
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProject.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getProject.rejected, (state, action) => {
                state.isLoading = false;
                state.title = null;
                state.description = null;
                state.error = action.payload as string;
            })
            .addCase(createProject.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createProject.fulfilled, state => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(createProject.rejected, (state, action) => {
                state.isLoading = false;
                state.title = null;
                state.description = null;
                state.error = action.payload as string;
            })
            .addCase(editProject.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editProject.fulfilled, state => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(editProject.rejected, (state, action) => {
                state.isLoading = false;
                state.title = null;
                state.description = null;
                state.error = action.payload as string;
            })
            .addCase(deleteProject.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteProject.fulfilled, state => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteProject.rejected, (state, action) => {
                state.isLoading = false;
                state.title = null;
                state.description = null;
                state.error = action.payload as string;
            })
    }
});


export const projectReducer = projectSlice.reducer;