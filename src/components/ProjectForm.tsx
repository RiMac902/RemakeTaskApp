import React from 'react';
import {Box, Button, InputBase, Paper, Stack} from "@mui/material";
import {grey, indigo} from "@mui/material/colors";
import {Controller, useForm} from "react-hook-form";
import {ProjectValues} from "../types/formType.ts";
import getUserData from "../hooks/getUserData.tsx";
import {firebaseAuth} from "../firebase.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {createProject} from "../store/features/projectSlice.ts";

const ProjectForm = () => {
    const {getUser, isLoading} = getUserData(firebaseAuth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {control, handleSubmit, formState: {errors}} = useForm<ProjectValues>({
        defaultValues: {
            title: '',
            description: '',
        }
    });


    const redirectToProjectPage = (projectId: string | null) => {
        if (projectId !== null) {
            navigate(`/project/${projectId}`);
        }
    }

    const onSubmit = handleSubmit(async (data) => {
        const { title, description } = data;
        dispatch(createProject({user: getUser, title, description, redirectToProjectPage}));
    });

    return (
        <Paper sx={{
            bgcolor: grey[50],
            marginX: 1,
            padding: 3,
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
        }} elevation={5}>
            <form onSubmit={onSubmit}>
                <Controller
                    name={'title'}
                    control={control}
                    render={({field}) => (
                        <InputBase
                            placeholder="Title"
                            {...field}
                            sx={{
                                fontSize: '50px', color: grey[800], borderRadius: 5, paddingX: 2, width: '100%',
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    boxShadow: 12,
                                },
                                '&:focus-within, &:focus-visible': {
                                    boxShadow: 12,
                                },
                            }}/>
                    )}/>
                <Box sx={{marginY: 2}}></Box>
                <Controller
                    name={'description'}
                    control={control}
                    render={({field}) => (
                        <InputBase
                            placeholder="Description"
                            minRows={5}
                            multiline
                            {...field}
                            sx={{
                                fontSize: '24px', color: grey[800], borderRadius: 5, padding: 2, width: '100%',
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    boxShadow: 12,
                                },
                                '&:focus-within, &:focus-visible': {
                                    boxShadow: 12,
                                },
                            }}/>
                    )}/>
                <Stack direction={'row'} sx={{marginY: 2}}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                        borderRadius: 5, backgroundColor: indigo[500],
                        '&:hover': {
                            backgroundColor: indigo[600],
                        },
                    }}>Create</Button>
                </Stack>
            </form>
        </Paper>
    );
};

export default ProjectForm;