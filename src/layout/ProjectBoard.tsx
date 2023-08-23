import React, {FC} from 'react';
import {Button, Paper, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {grey} from "@mui/material/colors";
import ProjectCard from "../components/ProjectCard.tsx";
import {useLocation, useNavigate} from "react-router-dom";

const ProjectBoard: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const goToCreateProjectPage = () => navigate('/createProject');
    return (
        <Stack direction="column" sx={{marginTop: 2}}>
            <Paper sx={{bgcolor: grey[50], marginX: 1, borderRadius: 5}} elevation={5}>
                <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography variant="h4" sx={{
                        marginTop: 2,
                        marginLeft: 3,
                        marginBottom: 2,
                        userSelect: 'none'
                    }}>Projects</Typography>

                    <Button onClick={goToCreateProjectPage} variant="outlined" disabled={currentPath === '/createProject'} sx={{
                        marginX: 2,
                        borderRadius: 5,
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                        height: '40px',
                        ":hover": {bgcolor: grey[300]}
                    }}>Create Project</Button>

                </Stack>
                <Grid container spacing={2} sx={{paddingX: 3, paddingBottom: 2}}>

                    <Grid xl={3} md={4} sm={6} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                        <ProjectCard/>
                    </Grid>


                    <Grid xl={3} md={4} sm={6} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                        <ProjectCard/>
                    </Grid>

                    <Grid xl={3} md={4} sm={6} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                        <ProjectCard/>
                    </Grid>

                    <Grid xl={3} md={4} sm={6} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                        <ProjectCard/>
                    </Grid>

                </Grid>

            </Paper>
        </Stack>
    );
};

export default ProjectBoard;