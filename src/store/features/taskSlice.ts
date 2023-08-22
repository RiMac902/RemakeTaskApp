import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AccessLevel, TaskArgs, ITaskType} from "../../types/taskType.ts";
import {getDatabase, ref, set, update} from "firebase/database";
import {getCurrentFormattedDate} from "../../helpers/date.ts";


const initialState: ITaskType = {
    title: '',
    description: '',
    createdBy: null,
    createdAt: '',
    updatedAt: '',
    isLoading: false,
    error: null,
}

export const createTask = createAsyncThunk(
    'task/createTask',
    async ({user, title, description}: TaskArgs, {rejectWithValue}) => {
        try {
            const db = getDatabase();
            set(ref(db, `users/${user!.uid}/tasks`), {
                title,
                description,
                createdBy: user!.displayName,
                createdAt: getCurrentFormattedDate,
            });
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const readTask = createAsyncThunk(
    'task/readTask',
    async (_, {rejectWithValue}) => {
        try {
            const db = getDatabase();

        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const updateTask = createAsyncThunk(
    'task/updateTask',
    async ({user, title, description, assignedUsers, permissions}: TaskArgs, {rejectWithValue}) => {

        const db = getDatabase();
        await update(ref(db, `users/${user!.uid}/tasks`), {
            title,
            description,
            assignedUsers: assignedUsers ? assignedUsers : [],
            permissions,
            updatedAt: getCurrentFormattedDate,
        });

    }
)


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createTask.pending, (state) => {
                state.isLoading = true;
                state.createdAt = getCurrentFormattedDate();
            })
            .addCase(createTask.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
});

export const taskReducer = taskSlice.reducer