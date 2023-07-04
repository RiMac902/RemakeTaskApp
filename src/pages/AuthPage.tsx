import {Box, Button, CircularProgress, Paper, TextField, Typography} from "@mui/material";
import {FC, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {greeting} from "../helpers/dynamicTitle.ts";
import {signIn, signUp} from "../store/features/authSlice.ts";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";

const AuthPage: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const [isSignInMode, setIsSignInMode] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isLoading, error} = useAppSelector((state) => state.auth);

    const redirectToHome = () => {
        navigate('/home')
    }

    const onSubmitHandler = async (event: FormEvent) => {
        event.preventDefault();
        if (!isSignInMode) {
            await dispatch(signIn({email, password, redirectToHome}));
        } else {
            await dispatch(signUp({email, password, displayName, redirectToHome}));
        }
    };

    const toggleMode = () => {
        setIsSignInMode(!isSignInMode);
    }

    return (
        <Box display="flex"
             justifyContent="center"
             alignItems="center"
             minHeight="100vh"
             flexDirection="column">
            <>{ isLoading ? <CircularProgress/> :
            <Paper elevation={5} sx={{padding: 5, borderRadius: 5,}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant="h4">{isSignInMode ? 'Create Account' : greeting}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '300px',
                }}>
                    <form onSubmit={onSubmitHandler}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '300px'
                        }}>
                            {isSignInMode ? <TextField
                                fullWidth={true}
                                label="Nickname"
                                placeholder="Enter your nickname"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                value={displayName}
                                onChange={(event) => setDisplayName(event.target.value)}
                            /> : null}
                            <TextField
                                fullWidth={true}
                                label="Email"
                                placeholder="Enter your email"
                                margin="normal"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <TextField
                                fullWidth={true}
                                label="Password"
                                placeholder="Enter your password"
                                margin="normal"
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <Button
                                type={'submit'}
                                variant="contained"
                                sx={{margin: 2, borderRadius: 5,}}
                                fullWidth={true}>
                                {isSignInMode ? 'Sign Up' : 'Sign In'}
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {isSignInMode ? (
                        <Typography variant="subtitle1" color="primary" sx={{
                            marginTop: 1,
                            textDecoration: 'none',
                            '&:hover': {textDecoration: 'underline'},
                            cursor: 'pointer'
                        }} onClick={toggleMode}>
                            Already have an account?
                        </Typography>
                    ) : (
                        <Typography variant="subtitle1" color="primary" sx={{
                            marginTop: 1,
                            textDecoration: 'none',
                            '&:hover': {textDecoration: 'underline'},
                            cursor: 'pointer'
                        }} onClick={toggleMode}>
                            Need an account?
                        </Typography>
                    )}
                </Box>
            </Paper>
                }</>
        </Box>
    );
};

export default AuthPage;