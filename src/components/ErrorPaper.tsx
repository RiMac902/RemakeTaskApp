import {Box, Paper, Stack, Typography} from "@mui/material";
import {indigo} from "@mui/material/colors";
import React from "react";

interface IProps {
  error: string
}

const ErrorPaper = ({error}: IProps) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
            <Paper elevation={5} sx={{padding: 5, borderRadius: 5}}>
                <Stack direction="column">
                    <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                        <Typography variant="h3" sx={{marginX: 1, color: 'white'}}>{error}</Typography>
                    </Paper>
                </Stack>
            </Paper>
        </Box>
    );
};

export default ErrorPaper;


