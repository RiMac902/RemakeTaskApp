import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {FormEvent, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import {firebaseAuth} from "../firebase.ts";
import {useNavigate} from "react-router-dom";
import {greeting} from "../helpers/dynamicTitle.ts";

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isSignInMode, setIsSignInMode] = useState(false);
    const navigate = useNavigate();


    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
            console.log(response);
            navigate('/home')
        } catch (error) {
            console.log('Sign-In error:', error);
        }
    }

    interface SignUpCredentials {
        email: string;
        password: string;
        displayName: string;
    }

    const signUp = async ({email, password, displayName}: SignUpCredentials) => {
        try {
            const {user} = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            await updateProfile(user, {displayName});
            navigate('/home')
        } catch (error) {
            console.log('Sign up failed:', error);
        }
    }


    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();

        if (!isSignInMode) {
            signIn();
        } else {
            const signUpCredentials: SignUpCredentials = {
                email: email,
                password: password,
                displayName: displayName,
            };
            signUp(signUpCredentials);
        }


    }

    const toggleMode = () => {
        setIsSignInMode(!isSignInMode);
    }


    return (
        <Box display="flex"
             justifyContent="center"
             alignItems="center"
             minHeight="100vh"
             flexDirection="column">
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
        </Box>
    );
};

export default AuthPage;