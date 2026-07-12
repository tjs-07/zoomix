/* eslint-disable */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';



const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
        },
        secondary: {
            main: '#9c27b0',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#0f172a',
            secondary: '#475569',
        }
    },
    typography: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                            backgroundColor: '#ffffff',
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#ffffff',
                            boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.15)',
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: '#475569',
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '10px 24px',
                    transition: 'all 0.25s ease',
                }
            }
        }
    }
});

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setPassword("");
                setName("");
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
            }
        } catch (err) {
            console.log(err);
            let message = (err.response?.data?.message || err.message || "An error occurred");
            setError(message);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Box sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at 50% 50%, #f1f5f9 0%, #f8fafc 100%)',
                overflow: 'hidden',
                padding: '24px'
            }}>
                {/* Decorative background glow circles */}
                <Box sx={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    top: '10%',
                    left: '10%',
                    pointerEvents: 'none'
                }} />

                <Paper elevation={0} sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '460px',
                    padding: '40px',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar sx={{ 
                        m: 1, 
                        bgcolor: 'primary.main', 
                        width: 56, 
                        height: 56,
                        boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
                        mb: 3
                    }}>
                        <LockOutlinedIcon sx={{ fontSize: 28 }} />
                    </Avatar>

                    <Typography component="h1" variant="h5" sx={{ fontWeight: 800, mb: 3, letterSpacing: '-0.02em', color: '#0f172a' }}>
                        Welcome to Zoomix
                    </Typography>

                    {/* Tab Selection */}
                    <Box sx={{ 
                        display: 'flex', 
                        width: '100%', 
                        background: 'rgba(0, 0, 0, 0.02)', 
                        padding: '4px', 
                        borderRadius: '8px',
                        border: '1px solid rgba(0, 0, 0, 0.04)',
                        mb: 4
                    }}>
                        <Button 
                            fullWidth
                            variant={formState === 0 ? "contained" : "text"} 
                            onClick={() => { setFormState(0); setError(""); }}
                            sx={{ 
                                borderRadius: '6px',
                                py: 1,
                                color: formState === 0 ? '#fff' : '#475569',
                                background: formState === 0 ? 'var(--primary)' : 'transparent',
                                boxShadow: formState === 0 ? '0 2px 8px rgba(25, 118, 210, 0.25)' : 'none',
                                '&:hover': {
                                    background: formState === 0 ? 'var(--primary)' : 'rgba(0,0,0,0.04)'
                                }
                            }}
                        >
                            Sign In
                        </Button>
                        <Button 
                            fullWidth
                            variant={formState === 1 ? "contained" : "text"} 
                            onClick={() => { setFormState(1); setError(""); }}
                            sx={{ 
                                borderRadius: '6px',
                                py: 1,
                                color: formState === 1 ? '#fff' : '#475569',
                                background: formState === 1 ? 'var(--primary)' : 'transparent',
                                boxShadow: formState === 1 ? '0 2px 8px rgba(25, 118, 210, 0.25)' : 'none',
                                '&:hover': {
                                    background: formState === 1 ? 'var(--primary)' : 'rgba(0,0,0,0.04)'
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>

                    <Box component="form" noValidate sx={{ width: '100%' }}>
                        {formState === 1 && (
                            <TextField
                                key="name-input"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                        )}

                        <TextField
                            key="username-input"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        
                        <TextField
                            key="password-input"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            sx={{ mb: 1 }}
                        />

                        {error && (
                            <Typography sx={{ 
                                color: '#ef4444', 
                                fontSize: '0.875rem', 
                                mt: 1.5, 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px',
                                background: 'rgba(239, 68, 68, 0.05)',
                                padding: '10px 14px',
                                borderRadius: '6px',
                                border: '1px solid rgba(239, 68, 68, 0.15)'
                            }}>
                                ⚠️ {error}
                            </Typography>
                        )}

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={handleAuth}
                            sx={{ 
                                mt: 4, 
                                py: 1.4,
                                fontSize: '0.95rem',
                                background: 'var(--primary)',
                                boxShadow: '0 4px 10px var(--primary-glow)',
                                '&:hover': {
                                    background: 'var(--secondary)',
                                    boxShadow: '0 6px 16px var(--secondary-glow)',
                                    transform: 'translateY(-0.5px)'
                                }
                            }}
                        >
                            {formState === 0 ? "Login" : "Register"}
                        </Button>
                    </Box>
                </Paper>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message}
            />
        </ThemeProvider>
    );
}