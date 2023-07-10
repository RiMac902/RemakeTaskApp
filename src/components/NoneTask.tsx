import React, {FC} from 'react';
import {Button, Paper, Stack, Typography} from "@mui/material";
import {grey, indigo} from "@mui/material/colors";


const NoneTask: FC = () => {
    return (
        <Stack direction="column">
            <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                <Typography variant="h4" sx={{marginX: 1, color: 'white'}}>Create New Task</Typography>
                <Button variant="outlined" sx={{
                    borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', ":hover": {
                        bgcolor: grey[300],
                    }
                }}>Create</Button>
            </Paper>
        </Stack>
    );
};

export default NoneTask;