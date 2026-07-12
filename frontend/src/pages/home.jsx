import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, TextField, Box, Typography, Paper, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RestoreIcon from '@mui/icons-material/Restore';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../contexts/AuthContext';

const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#1565c0',
        },
        background: {
            default: '#ffffff',
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
                        '&:hover': {
                            backgroundColor: '#ffffff',
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#ffffff',
                        }
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
                }
            }
        }
    }
});

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        if (!meetingCode.trim()) return;
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
                <div className="navBar">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h2 style={{ margin: 0 }}>Zoomix</h2>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <Button 
                            startIcon={<RestoreIcon />} 
                            onClick={() => navigate("/history")}
                            sx={{ color: '#475569', '&:hover': { color: '#0f172a' } }}
                        >
                            History
                        </Button>
                        <Button 
                            startIcon={<LogoutIcon />} 
                            variant="outlined" 
                            color="primary"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/auth");
                            }}
                            sx={{ borderColor: 'rgba(0,0,0,0.15)', '&:hover': { borderColor: 'var(--primary)' } }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>

                <div className="meetContainer">
                    <div className="leftPanel">
                        <Paper elevation={0} sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            background: '#ffffff',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.04)',
                            width: '100%',
                            maxWidth: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        }}>
                            <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.25, color: '#0f172a' }}>
                                Start or Join a Secure Meeting
                            </Typography>
                            
                            <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.5 }}>
                                Experience high-definition peer-to-peer connection with complete end-to-end security. 
                            </Typography>

                            <Box sx={{ display: 'flex', gap: "12px", width: '100%', mt: 1 }}>
                                <TextField 
                                    fullWidth
                                    onChange={e => setMeetingCode(e.target.value)} 
                                    id="outlined-basic" 
                                    label="Enter Meeting Code" 
                                    variant="outlined" 
                                />
                                <Button 
                                    onClick={handleJoinVideoCall} 
                                    variant='contained'
                                    disabled={!meetingCode.trim()}
                                    sx={{ 
                                        px: 4, 
                                        background: 'var(--primary)',
                                        boxShadow: '0 4px 10px var(--primary-glow)',
                                        '&:hover': {
                                            background: 'var(--secondary)',
                                            boxShadow: '0 6px 16px var(--secondary-glow)'
                                        }
                                    }}
                                >
                                    Join
                                </Button>
                            </Box>
                        </Paper>
                    </div>

                    
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default withAuth(HomeComponent)