import React from 'react';
import {Paper, Stack, Typography} from "@mui/material";
import {indigo} from "@mui/material/colors";
import Team from "../components/Team.tsx";
import ProjectForm from "../components/ProjectForm.tsx";
import Header from "../components/Header.tsx";
import MainLayout from "../layout/MainLayout.tsx";

const CreateProjectPage = () => {
    return (
        <MainLayout>
                <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                    <Typography variant="h3" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>Create Project</Typography>
                    <Stack sx={{marginTop: 2, flexDirection: 'row',}}>
                        <ProjectForm/>
                        <Team/>
                    </Stack>
                </Paper>
        </MainLayout>
    );
};

export default CreateProjectPage;