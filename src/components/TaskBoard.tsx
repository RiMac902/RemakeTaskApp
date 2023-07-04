import React, {FC} from 'react';
import {Paper, Stack, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import TaskItem from "./TaskItem.tsx";

const TaskBoard: FC = () => {
    return (
        <Stack direction="column" sx={{marginTop: 2}}>
            <Paper sx={{bgcolor: grey[50], marginX: 1, padding: 2, borderRadius: 5}} elevation={5}>
                <Typography variant="h4" sx={{marginX: 1, userSelect: 'none'}}>Task List</Typography>
                <Stack direction={'row'} justifyContent={'space-between'}  sx={{margin: 3}}>
                    <Typography variant="h6" sx={{marginX: 1, userSelect: 'none'}}>Task Name</Typography>
                    <Typography variant="h6" sx={{marginX: 1, marginRight: 17, userSelect: 'none'}}>Assign</Typography>
                    <Typography variant="h6" sx={{marginX: 1, userSelect: 'none'}}>Status</Typography>
                    <Typography variant="h6" sx={{marginX: 1, marginLeft: 17, userSelect: 'none'}}>Date</Typography>
                    <Typography variant="h6" sx={{marginX: 1, userSelect: 'none'}}>Action</Typography>
                </Stack>
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
            </Paper>
        </Stack>
    );
};

export default TaskBoard;