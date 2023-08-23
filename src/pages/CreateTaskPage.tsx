import React, {FC} from 'react';
import {Box, InputBase, Paper, Stack, Typography} from "@mui/material";
import {grey, indigo} from "@mui/material/colors";
import MainField from "../layout/MainField.tsx";
import Header from "../components/Header.tsx";

const CreateTaskPage: FC = () => {
    return (
        <>
            <Header/>
            <Stack direction="column">
                <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                    <Typography variant="h3" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>Create
                        Task</Typography>
                    <Stack direction="column" sx={{marginTop: 2}}>
                        <Paper sx={{
                            bgcolor: grey[50],
                            marginX: 1,
                            padding: 3,
                            borderRadius: 5,
                            display: 'flex',
                            flexDirection: 'column'
                        }} elevation={5}>
                            <InputBase placeholder="Untitled" sx={{
                                fontSize: '50px', color: grey[800], borderRadius: 5, paddingX: 2,
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    boxShadow: 12,
                                },
                                '&:focus-within, &:focus-visible': {
                                    boxShadow: 12,
                                },
                            }}/>
                            <Box sx={{marginY: 1}}></Box>
                            <InputBase placeholder="Type something" minRows={5} multiline
                                       inputProps={{'aria-label': 'Type something'}} sx={{
                                fontSize: '24px', color: grey[800], borderRadius: 5, padding: 2,
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    boxShadow: 12,
                                },
                                '&:focus-within, &:focus-visible': {
                                    boxShadow: 12,
                                },
                            }}/>
                        </Paper>
                    </Stack>
                </Paper>
            </Stack>
        </>
    );
};

export default CreateTaskPage;