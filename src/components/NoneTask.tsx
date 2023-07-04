import React, {FC} from 'react';
import {Box, Button, Paper, Stack, Typography} from "@mui/material";
import {indigo} from "@mui/material/colors";


const NoneTask: FC = () => {
    return (
        <Box>
            <Stack direction="column" sx={{alignItems: 'center'}}>
                <Paper sx={{bgcolor: indigo[500], marginX: 3, padding: 2, borderRadius: 5}} elevation={10}>
                    <Typography variant="h4"sx={{marginX: 3, color: 'white'}}>Create New Task</Typography>
                    <Button variant="contained" sx={{borderRadius: 5}}>Create</Button>
                </Paper>
            </Stack>
        </Box>
    );
};

export default NoneTask;