import React, {FC} from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import {greeting} from "../helpers/dynamicTitle.ts";
import {deepOrange} from "@mui/material/colors";

const CreateTask: FC = () => {
    return (
        <Box>
            <Stack direction="column" sx={{alignItems: 'center'}}>
                <Paper sx={{bgcolor: deepOrange[500], marginX: 3, padding: 2}}>
                    <Typography variant="h4" sx={{marginX: 3}}>{greeting}</Typography>
                </Paper>
            </Stack>
        </Box>
    );
};

export default CreateTask;