import React, {FC} from 'react';
import {Button, Paper, Stack, Typography} from "@mui/material";
import {indigo} from "@mui/material/colors";
import TaskBoard from "./TaskBoard.tsx";

const Dashboard: FC = () => {
    return (
        <Stack direction="column">
            <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                <Typography variant="h3" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>Dashboard</Typography>
                <TaskBoard/>
            </Paper>
        </Stack>
    );
};

export default Dashboard;