import React, {FC, useState} from 'react';
import {Box, Button, Modal, Paper, Stack, TextField, Typography} from "@mui/material";
import {grey, indigo} from "@mui/material/colors";


const NoneProjects: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Stack direction="column" sx={{maxWidth: 350}}>
            <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, borderRadius: 5}} elevation={10}>
                <Typography variant="h4" sx={{marginX: 1, color: 'white'}}>Create New Project</Typography>
                <Button onClick={() => setOpen(true)} variant="outlined" sx={{borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', ":hover": {bgcolor: grey[300]}}}>
                    Create
                </Button>
            </Paper>
        </Stack>
    );
};

export default NoneProjects;