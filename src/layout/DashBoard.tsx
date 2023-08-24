import React, {FC} from 'react';
import {Paper, Stack, Typography, useMediaQuery} from "@mui/material";
import {indigo} from "@mui/material/colors";
import ProjectBoard from "./ProjectBoard.tsx";


const DashBoard: FC = () => {
    const isCompact = useMediaQuery('(max-width:600px)');


    return (
        <Stack direction="column">
            <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, marginBottom: 2, borderRadius: 5}} elevation={5}>
                {
                    isCompact
                        ? <Typography variant="h4" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>Dashboard</Typography>
                        : <Typography variant="h3" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>Dashboard</Typography>
                }
                <ProjectBoard/>
            </Paper>
        </Stack>
    );
};

export default DashBoard;