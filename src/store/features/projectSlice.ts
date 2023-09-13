import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProjectValues} from "../../types/formType.ts";
import {ProjectState} from "../../types/projectType.ts";
import {getDatabase, push, ref, child, get} from "firebase/database";


export const createProject = createAsyncThunk(
    'project/create',
    async ({user, title, description}: ProjectValues, {dispatch, rejectWithValue}) => {
        try {
            const db = getDatabase();
            const newProjectRef = await push(ref(db, `users/${user!.uid}/projects/`), {
                title,
                description,
            });
            const projectId = newProjectRef.key;
            return {projectId} as ProjectState;
        } catch (error) {
            return rejectWithValue('CreateProject failed');
        }
    }
);

export const getProject = createAsyncThunk(
    'project/get',
    async ({ projectId }: { projectId: string }, {dispatch, rejectWithValue}) => {
        try {
            const dbRef = ref(getDatabase());
            const readOnceProject = await get(child(dbRef, `users/4HV0YZhqU6YvO62RyOO8klmf5W82/projects/${projectId}`));

            if (readOnceProject.exists()) {
                const {title, description} = await readOnceProject.val();

                return {title, description} as ProjectState;
            }
        } catch (error) {
            return rejectWithValue('GetProject  failed');
        }
    }
);


export const editProject = createAsyncThunk(
    'project/edit',
    async ({title, description}: ProjectValues, {dispatch, rejectWithValue}) => {
        try {

        } catch (error) {
            return rejectWithValue('editProject failed');
        }
    }
);

export const deleteProject = createAsyncThunk(
    'project/delete',
    async ({title, description}: ProjectValues, {dispatch, rejectWithValue}) => {
        try {

        } catch (error) {
            return rejectWithValue('CreateProject failed');
        }
    }
);


const initialState: ProjectState = {
    title: '',
    description: '',
    projectId: '',
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
                const { title, description } = action.payload as ProjectState;
                state.isLoading = false;
                state.title = title;
                state.description = description;
                state.projectId = null;
                state.error = null;
            })
            .addCase(getProject.rejected, (state, action) => {
                state.isLoading = false;
                state.title = 'Project not found';
                state.description = 'This project does not exist';
                state.error = action.payload as string;
            })
            .addCase(createProject.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createProject.fulfilled, (state, action) => {
                const { projectId } = action.payload as ProjectState;
                state.isLoading = false;
                state.projectId = projectId;
                state.error = null;
            })
            .addCase(createProject.rejected, (state, action) => {
                state.isLoading = false;
                state.title = null;
                state.description = null;
                state.projectId = null;
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

// export const {setProjectId} = projectSlice.actions;
export const projectReducer = projectSlice.reducer;