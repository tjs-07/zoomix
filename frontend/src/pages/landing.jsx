import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Zoomix</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => router("/aljk23")}>Join as Guest</p>
                    <p onClick={() => router("/auth")}>Register</p>
                    <div onClick={() => router("/auth")} role='button'>
                        <p style={{ margin: 0 }}>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  }}
>
                    <h1>
                        <span style={{ 
                            background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "800"
                        }}>Connect</span> with your loved ones
                    </h1>
                    <p>Experience seamless video calls with crystal-clear audio and zero latency. Cover any distance instantly with Zoomix.</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                
                {/* <div className="uiMockupContainer" style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}> */}
                    {/* Subtle light glow circle behind mockup */}
                    {/* <div style={{
                        position: "absolute",
                        width: "350px",
                        height: "350px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
                        filter: "blur(30px)",
                        zIndex: 1
                    }}></div> */}

                    {/* Premium CSS Video Meeting Mockup (Light theme) */}
                    {/* <div style={{
                        position: "relative",
                        width: "90%",
                        maxWidth: "450px",
                        aspectRatio: "1.4",
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border-glass)",
                        borderRadius: "16px",
                        padding: "16px",
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.06)",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "12px",
                        zIndex: 2
                    }}> */}
                        {/* Stream 1 */}
                        {/* <div style={{
                            position: "relative",
                            background: "linear-gradient(45deg, #f1f5f9, #e2e8f0)",
                            borderRadius: "10px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(0, 0, 0, 0.04)"
                        }}>
                            <div style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                color: "white",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                            }}>JD</div>
                            <span style={{
                                position: "absolute",
                                bottom: "8px",
                                left: "8px",
                                padding: "4px 8px",
                                background: "rgba(255,255,255,0.85)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-glass)",
                                borderRadius: "6px",
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></span>
                                Rakesh Mishra
                            </span>
                        </div> */}

                        {/* Stream 2 */}
                        {/* <div style={{
                            position: "relative",
                            background: "linear-gradient(45deg, #f8fafc, #f1f5f9)",
                            borderRadius: "10px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(0, 0, 0, 0.04)"
                        }}>
                            <div style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, var(--secondary) 0%, #64b5f6 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                color: "white",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                            }}>AS</div>
                            <span style={{
                                position: "absolute",
                                bottom: "8px",
                                left: "8px",
                                padding: "4px 8px",
                                background: "rgba(255,255,255,0.85)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-glass)",
                                borderRadius: "6px",
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                            }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></span>
                                Rohan Sharma
                            </span>
                        </div> */}

                        {/* Stream Controls Overlay */}
                        {/* <div style={{
                            gridColumn: "span 2",
                            display: "flex",
                            justifyContent: "center",
                            gap: "12px",
                            paddingTop: "4px"
                        }}>
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f1f5f9", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>🎤</div>
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f1f5f9", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>📹</div>
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#ef4444", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>📞</div>
                        </div> */}
                    {/* </div>
                </div> */}
            </div>
        </div>
    )
}

