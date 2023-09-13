import {Box, Button, CircularProgress, Paper, TextField, Typography} from "@mui/material";
import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {signIn, signUp} from "../store/features/authSlice.ts";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {Controller, useForm} from "react-hook-form";
import {AuthValues} from "../types/formType.ts";

const AuthPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLoading, error, user } = useAppSelector((state) => state.auth);
    const [isSignInMode, setIsSignInMode] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors } } = useForm<AuthValues>({
        defaultValues: {
            email: '',
            password: '',
            displayName: '',
        }
    });

    const redirectToHome = () => {
        navigate('/home')
    }


    const onSubmit = handleSubmit((data) => {
        const { email, password, displayName } = data;
        if (!isSignInMode) {
            dispatch(signIn({ email, password, redirectToHome }));
        } else {
            dispatch(signUp({ email, password, displayName, redirectToHome }));
        }
    });

    const toggleMode = () => {
        setIsSignInMode(!isSignInMode);
    }
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
            <>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <Paper elevation={5} sx={{ padding: 5, borderRadius: 5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography gutterBottom variant="h4">
                                {isSignInMode ? 'Create Account' : 'Welcome back'}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '300px' }}>
                            <form onSubmit={onSubmit}>
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '300px' }}>
                                    {isSignInMode && (
                                        <Controller
                                            name="displayName"
                                            control={control}
                                            rules={{
                                                required: 'Nickname is required',
                                                minLength: {
                                                    value: 2,
                                                    message: 'Nickname must be at least 2 characters long',
                                                },
                                                maxLength: {
                                                    value: 13,
                                                    message: 'Nicknames can contain a maximum of 13 characters',
                                                }
                                            }}
                                            render={({ field }) => (
                                                <TextField
                                                    fullWidth
                                                    label="Nickname"
                                                    placeholder="Enter your nickname"
                                                    margin="normal"
                                                    variant="outlined"
                                                    {...field}
                                                    error={!!errors.displayName}
                                                    helperText={errors.displayName?.message}
                                                />
                                            )}
                                        />
                                    )}
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Invalid email format',
                                            },
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                placeholder="Enter your email"
                                                margin="normal"
                                                variant="outlined"
                                                {...field}
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="password"
                                        control={control}
                                        rules={{
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters long',
                                            },
                                            validate: (value) => {
                                                if (value.trim() === value) {
                                                    return true;
                                                }
                                                return 'Password should not contain spaces';
                                            },
                                        }}

                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                label="Password"
                                                placeholder="Enter your password"
                                                margin="normal"
                                                variant="outlined"
                                                type="password"
                                                {...field}
                                                error={!!errors.password}
                                                helperText={errors.password?.message}
                                            />
                                        )}
                                    />
                                    <Button type="submit" variant="contained" sx={{ margin: 2, borderRadius: 5 }} fullWidth>
                                        {isSignInMode ? 'Sign Up' : 'Sign In'}
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            {isSignInMode ? (
                                <Typography
                                    variant="subtitle1"
                                    color="primary"
                                    sx={{
                                        marginTop: 1,
                                        textDecoration: 'none',
                                        '&:hover': { textDecoration: 'underline' },
                                        cursor: 'pointer'
                                    }}
                                    onClick={toggleMode}
                                >
                                    Already have an account?
                                </Typography>
                            ) : (
                                <Typography
                                    variant="subtitle1"
                                    color="primary"
                                    sx={{
                                        marginTop: 1,
                                        textDecoration: 'none',
                                        '&:hover': { textDecoration: 'underline' },
                                        cursor: 'pointer'
                                    }}
                                    onClick={toggleMode}
                                >
                                    Need an account?
                                </Typography>
                            )}
                            {error && (
                                <Typography variant="subtitle1" color="error" sx={{ marginTop: 1 }}>
                                    {error}
                                </Typography>
                            )}
                        </Box>
                    </Paper>
                )}
            </>
        </Box>
    );
};

export default AuthPage;
