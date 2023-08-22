import React from 'react';
import {Box, InputBase, Paper} from "@mui/material";
import {grey} from "@mui/material/colors";

const ProjectForm = () => {
    return (
        <Paper sx={{bgcolor: grey[50], marginX: 1, padding: 3, borderRadius: 5, display: 'flex', flexDirection: 'column', width: '70%',}} elevation={5}>
            <InputBase placeholder="Untitled" sx={{fontSize: '50px', color: grey[800], borderRadius: 5, paddingX: 2,
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    boxShadow: 12,
                },
                '&:focus-within, &:focus-visible': {
                    boxShadow: 12,
                },
            }}/>
            <Box sx={{marginY: 1}}></Box>
            <InputBase placeholder="Description" minRows={5} multiline inputProps={{ 'aria-label': 'Type something' }} sx={{fontSize: '24px', color: grey[800],  borderRadius: 5, padding: 2,
                transition: 'border-color 0.3s, box-shadow 0.3s',
                '&:hover': {
                    boxShadow: 12,
                },
                '&:focus-within, &:focus-visible': {
                    boxShadow: 12,
                },
            }}/>
        </Paper>
    );
};

export default ProjectForm;