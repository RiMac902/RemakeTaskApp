import {Box, Button, Paper, Skeleton, Stack} from "@mui/material";
import React from "react";
import {grey, indigo} from "@mui/material/colors";
import {signOutAccount} from "../store/features/authSlice.ts";
import {useAppDispatch} from "../hooks/reduxHooks.ts";


const Profile = () => {
    const dispatch = useAppDispatch();

    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
            <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center",}}
                   elevation={24}>
                <Paper elevation={5} sx={{borderRadius: 5, bgcolor: indigo[500], margin: 2}}>
                    <Stack direction="row" justifyContent="space-between" sx={{padding: 2}} spacing={0}>
                        <Button onClick={() => dispatch(signOutAccount())} variant="outlined" sx={{
                            borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', ":hover": {
                                bgcolor: grey[300],
                            }}}>Sign Out</Button>
                        <Stack direction="row" alignItems="center">
                                    <Skeleton variant="circular" width={40} height={40} sx={{marginX: 2}}/>
                                    <Skeleton width={90} height={40} sx={{marginX: 2}}/>
                        </Stack>
                    </Stack>

                </Paper>
            </Paper>
        </Box>
    );
};

export default Profile;