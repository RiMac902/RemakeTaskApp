import React from 'react';
import {grey} from "@mui/material/colors";
import {Avatar, Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";

const Team = () => {
    return (
        <Paper sx={{bgcolor: grey[50], marginX: 1, padding: 3, borderRadius: 5, display: 'flex', flexDirection: 'column', width: '30%',}} elevation={5}>
            <Stack direction={'row'} sx={{justifyContent: 'space-between'}}>
                <Typography variant="h4" sx={{marginX: 1, color: grey[800], userSelect: 'none'}}>Team</Typography>
                <Button variant="outlined" sx={{borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', ":hover": {bgcolor: grey[300]}}}>Manage Team</Button>
            </Stack>

            <Box sx={{marginY: 1}}/>
            <Stack direction={'row'} sx={{alignItems: 'center'}}>
                <Avatar sx={{ width: 46, height: 46, marginRight: 2}}/>
                <Stack>
                    <Typography variant="h5"  sx={{marginX: 1, color: grey[800]}}>Roman S'K</Typography>
                    <Typography sx={{marginX: 1, color: grey[500]}}>God</Typography>
                </Stack>
            </Stack>

            <Box sx={{marginY: 1}}/>
            <Stack direction={'row'} sx={{alignItems: 'center'}}>
                <Avatar sx={{ width: 46, height: 46, marginRight: 2}}/>
                <Stack>
                    <Typography variant="h5"  sx={{marginX: 1, color: grey[800]}}>Annie</Typography>
                    <Typography sx={{marginX: 1, color: grey[500]}}>UX/UI Designer</Typography>
                </Stack>
            </Stack>

            <Box sx={{marginY: 1}}/>
            <Stack direction={'row'} sx={{alignItems: 'center'}}>
                <Avatar sx={{ width: 46, height: 46, marginRight: 2}}/>
                <Stack>
                    <Typography variant="h5"  sx={{marginX: 1, color: grey[800]}}>Morgan Freeman</Typography>
                    <Typography sx={{marginX: 1, color: grey[500]}}>Actor</Typography>
                </Stack>
            </Stack>

            <Box sx={{marginY: 1}}/>
            <Stack direction={'row'} sx={{alignItems: 'center'}}>
                <Avatar sx={{ width: 46, height: 46, marginRight: 2}}/>
                <Stack>
                    <Typography variant="h5"  sx={{marginX: 1, color: grey[800]}}>Furion</Typography>
                    <Typography sx={{marginX: 1, color: grey[500]}}>MoneyTaker</Typography>
                </Stack>
            </Stack>

            <Box sx={{marginY: 1}}/>
            <Stack direction={'row'} sx={{alignItems: 'center'}}>
                <Avatar sx={{ width: 46, height: 46, marginRight: 2}}/>
                <Stack>
                    <Typography variant="h5"  sx={{marginX: 1, color: grey[800]}}>Remmy Malek</Typography>
                    <Typography sx={{marginX: 1, color: grey[500]}}>Team Lead</Typography>
                </Stack>
            </Stack>

        </Paper>
    );
};

export default Team;