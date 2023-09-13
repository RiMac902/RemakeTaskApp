import React, {useEffect} from 'react';
import MainLayout from "../layout/MainLayout.tsx";
import {useParams} from "react-router-dom";
import {grey, indigo} from "@mui/material/colors";
import {Paper, Stack, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {getProject} from "../store/features/projectSlice.ts";

const ProjectPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { title, description, isLoading, error} = useAppSelector(state => state.project);

    useEffect(() => {
        if (id !== undefined) {
            const projectId: string = id;
            dispatch(getProject({ projectId }));
        }
    }, [id, dispatch]);

    console.log(`Project:${id}`, `title: ${title}`, `description: ${description}`);

    return (
        <MainLayout>
            <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                {
                    isLoading ? <>Loading or {error}</> :
                        <>
                            <Typography variant="h3" sx={{marginX: 1, color: 'white', userSelect: 'none'}}>{title}</Typography>
                            <Stack direction="column" sx={{marginTop: 2}}>
                                <Paper sx={{bgcolor: grey[50], marginX: 1, borderRadius: 5}} elevation={5}>
                                    {description}
                                </Paper>
                            </Stack>
                        </>
                }
            </Paper>
        </MainLayout>
    );
};

export default ProjectPage;