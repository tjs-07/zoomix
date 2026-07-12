import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField, Box, Typography, Paper, CssBaseline } from '@mui/material';
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
                            maxWidth: '520px',
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

                    <div className='rightPanel' style={{ position: 'relative' }}>
                        {/* Subtle background glow */}
                        <div style={{
                            position: 'absolute',
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                            filter: 'blur(30px)',
                            top: '10%',
                            right: '10%',
                            pointerEvents: 'none',
                            zIndex: 1
                        }}></div>
                        
                        {/* CSS Meeting graphic in place of logo3.png (Light theme) */}
                        <div style={{
                            position: 'relative',
                            width: '85%',
                            aspectRatio: '1.5',
                            background: '#ffffff',
                            borderRadius: '16px',
                            border: '1px solid rgba(0,0,0,0.06)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '24px',
                            gap: '16px',
                            zIndex: 2
                        }}>
                            {/* Window Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Zoomix Premium Call</span>
                            </div>
                            
                            {/* Window Grid */}
                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div style={{ background: '#f1f5f9', border: '1px solid rgba(0,0,0,0.04)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>👤</span>
                                    <span style={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '0.7rem', color: '#475569', fontWeight: '500' }}>You</span>
                                </div>
                                <div style={{ background: '#e2e8f0', border: '1px solid rgba(0,0,0,0.04)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>👥</span>
                                    <span style={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '0.7rem', color: '#475569', fontWeight: '500' }}>Room Participants</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default withAuth(HomeComponent)