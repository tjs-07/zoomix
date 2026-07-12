/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { IconButton, Box, Typography, Container, Card, CardContent, Grid, CssBaseline } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
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
    }
});

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }
        fetchHistory();
    }, []);

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ minHeight: '100vh', background: '#f8fafc', py: 4 }}>
                <Container maxWidth="md">
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, gap: 2 }}>
                        <IconButton 
                            onClick={() => routeTo("/home")}
                            sx={{ 
                                background: 'rgba(0,0,0,0.03)', 
                                border: '1px solid rgba(0,0,0,0.08)',
                                color: '#475569',
                                '&:hover': {
                                    background: 'rgba(0,0,0,0.08)',
                                    color: '#0f172a'
                                }
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a' }}>
                            Meeting History
                        </Typography>
                    </Box>

                    {/* Meeting Grid */}
                    {meetings.length !== 0 ? (
                        <Grid container spacing={3}>
                            {meetings.map((e, i) => (
                                <Grid item xs={12} sm={6} key={i}>
                                    <Card sx={{
                                        background: '#ffffff',
                                        border: '1px solid rgba(0, 0, 0, 0.08)',
                                        borderRadius: '12px',
                                        transition: 'all 0.25s ease',
                                        '&:hover': {
                                            transform: 'translateY(-1px)',
                                            borderColor: 'var(--primary)',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.04)'
                                        }
                                    }}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, '&:last-child': { pb: 2 } }}>
                                            <Box sx={{ 
                                                p: 1.5, 
                                                borderRadius: '8px', 
                                                background: 'rgba(25, 118, 210, 0.08)', 
                                                color: 'var(--primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <VideoCallIcon />
                                            </Box>
                                            
                                            <Box>
                                                <Typography sx={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', mb: 0.5 }}>
                                                    Meeting Code
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, letterSpacing: '-0.01em', color: '#0f172a' }}>
                                                    {e.meetingCode}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569' }}>
                                                    <CalendarTodayIcon sx={{ fontSize: '0.9rem' }} />
                                                    <Typography sx={{ fontSize: '0.875rem' }}>
                                                        {formatDate(e.date)}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Box sx={{ 
                            textAlign: 'center', 
                            py: 8, 
                            background: 'rgba(0,0,0,0.02)', 
                            border: '1px dashed rgba(0,0,0,0.08)',
                            borderRadius: '16px'
                        }}>
                            <Typography sx={{ fontSize: '3rem', mb: 2 }}>📅</Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a' }}>No Meetings Yet</Typography>
                            <Typography sx={{ color: '#475569' }}>Start a meeting to populate your history log!</Typography>
                        </Box>
                    )}
                </Container>
            </Box>
        </ThemeProvider>
    );
}
