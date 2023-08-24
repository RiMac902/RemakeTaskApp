import React from 'react';
import {grey, indigo} from "@mui/material/colors";
import {Avatar, Button, Paper, Skeleton, Stack, Typography, useMediaQuery, IconButton} from "@mui/material";
import {signOutAccount} from "../store/features/authSlice.ts";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {firebaseAuth} from "../firebase.ts";
import getUserData from "../hooks/getUserData.tsx";
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isCompact = useMediaQuery('(max-width:600px)');

    const currentPath = location.pathname;

    const {getUser, isLoading} = getUserData(firebaseAuth);
    const {photoURL} = getUser ?? {};

    const goToProfilePage = () => navigate('/profile');
    const goToHomePage = () => navigate('/home');
    const singOutHandle = () => dispatch(signOutAccount());

    return (
        <Paper elevation={5} sx={{borderRadius: 5, bgcolor: indigo[500], margin: 2}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{padding: 2,}} spacing={0}>

                {isCompact
                    ? <IconButton onClick={singOutHandle}>
                        <LogoutIcon sx={{color: 'white'}}/>
                    </IconButton>

                    : <Button onClick={singOutHandle} variant="outlined" sx={{
                        borderRadius: 5, fontWeight: 'bold', whiteSpace: 'nowrap', fontSize: {
                            xs: '10px',
                            sm: '12px',
                            md: '14px',
                            lg: '14px',
                            xl: '14px'
                        }, backgroundColor: 'white', ":hover": {
                            bgcolor: grey[300],
                        }
                    }}>Sign Out</Button>}

                <Typography onClick={goToHomePage} sx={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#fff',
                    cursor: 'pointer',
                    userSelect: 'none',
                    textAlign :'center',
                    fontSize: {
                        xs: '18px',
                        sm: '18px',
                        md: '18px',
                        lg: '20px',
                        xl: '24px'
                    }
                }}>TaskFlow</Typography>

                <Stack direction="row" alignItems="center">
                    {isLoading
                        ? (<>
                            <Skeleton width={90} height={40} sx={{marginX: 2}}/>
                            <Skeleton variant="circular" width={40} height={40} sx={{marginX: 2}}/>
                        </>)
                        : (
                            <>
                                {
                                    isCompact
                                        ? null
                                        : <Typography sx={{
                                            userSelect: 'none',
                                            color: '#fff', fontSize: {
                                                xs: '18px',
                                                sm: '18px',
                                                md: '18px',
                                                lg: '20px',
                                                xl: '24px'
                                            }
                                        }}>{getUser?.displayName}</Typography>
                                }

                                <Button disabled={currentPath === '/profile'} onClick={goToProfilePage}
                                        sx={{padding: 0, minWidth: 0, marginLeft: 2}}>
                                    <Avatar src={photoURL || ''} sx={{
                                        height: {
                                            xs: '30px',
                                            sm: '40px',
                                            md: '40px',
                                            lg: '40px',
                                            xl: '40px'
                                        },
                                        width: {
                                            xs: '30px',
                                            sm: '40px',
                                            md: '40px',
                                            lg: '40px',
                                            xl: '40px'
                                        },
                                        border: '2px solid #fff',
                                        ":hover": {border: `2px solid ${grey[300]}`}
                                    }}></Avatar>
                                </Button>
                            </>
                        )
                    }
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Header;