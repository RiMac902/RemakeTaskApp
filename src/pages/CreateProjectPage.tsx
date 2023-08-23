import React from 'react';
import {Box, Button, InputBase, Paper, Stack, Typography, List, ListItem, Avatar, ListItemText, Divider} from "@mui/material";
import {grey, indigo} from "@mui/material/colors";
import MainField from "../layout/MainField.tsx";
import Team from "../components/Team.tsx";
import ProjectForm from "../components/ProjectForm.tsx";
import Header from "../components/Header.tsx";

const CreateProjectPage = () => {
    return (
        <>
            <Header/>
                <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                    <Typography variant="h3" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>Create Project</Typography>
                    <Stack sx={{marginTop: 2, flexDirection: 'row',}}>
                        <ProjectForm/>
                        <Team/>
                    </Stack>
                </Paper>
        </>
    );
};

export default CreateProjectPage;