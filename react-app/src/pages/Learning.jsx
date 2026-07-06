import React, { useState } from 'react';
import BorderGlow from '../components/BorderGlow';
import DecayCard from '../components/DecayCard';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item">
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                {question}
                <span style={{ fontSize: "1.5rem", color: "#888", fontWeight: "300", transform: isOpen ? 'rotate(45deg)' : 'none', display: 'inline-block', transition: 'transform 0.3s ease' }}>+</span>
            </div>
            <div className="faq-answer" style={{ display: isOpen ? 'block' : 'none' }}>
                {answer}
            </div>
        </div>
    );
};

const Learning = () => {
    const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
    const [guideForm, setGuideForm] = useState({ name: '', email: '' });

    const handleGuideSubmit = (e) => {
        e.preventDefault();
        // Trigger download
        const link = document.createElement('a');
        link.href = '/Model_UN_Strategic_Playbook.pdf';
        link.download = 'Model_UN_Strategic_Playbook.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsGuideModalOpen(false);
        setGuideForm({ name: '', email: '' });
    };

    return (
        <>
            

    

    {/*  Hero Section  */}
    <section className="el-hero">
        <div className="el-hero-content">
            <div className="el-hero-badge">PROBIZ KNOWLEDGE CENTER PRESENTS</div>
            <h1>Learning That Goes Beyond the Classroom.</h1>
            <p>Equipping the next generation of leaders through premium experiential learning, simulation programs for the real world of global affairs.</p>
            <div className="el-hero-btns">
                <a href="/contact" className="btn btn-primary">Bring Experiential Learning to Your Institution</a>
                <a href="#programs" className="btn btn-secondary">Learn More About Our Programs</a>
            </div>
        </div>
    </section>

    {/*  Learning by Doing  */}
    <section className="section-padding">
        <div className="container lbd-grid">
            <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--color-orange)" }}>01 / Learning by Doing</h2>
                <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>Experiential learning is more than just a buzzword; it is the essence of real-world impact. It ensures that knowledge is created through the transformation of experience.</p>
                <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "2rem" }}>Aligned with the NEP 2020 vision, we move away from rote memorization toward critical thinking, problem-solving, and real-world application. Students don't just study theory; they live it.</p>
                
                <ul className="lbd-list">
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> NEP 2020 Compliant Pedagogy</li>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Fostering holistic development</li>
                </ul>
            </div>
            
            <div className="cycle-diagram">
                <svg className="cycle-bg-arrow" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M 50,5 C 74.8,5 95,25.2 95,50 C 95,69.3 80,85 60,85 L 60,95 L 35,80 L 60,65 L 60,75 C 75,75 85,63 85,50 C 85,30.7 69.3,15 50,15 L 50,5 Z" />
                    <path d="M 50,95 C 25.2,95 5,74.8 5,50 C 5,30.7 20,15 40,15 L 40,5 L 65,20 L 40,35 L 40,25 C 25,25 15,37 15,50 C 15,69.3 30.7,85 50,85 L 50,95 Z" />
                </svg>

                <div className="cycle-box">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M19 11v-1a3 3 0 0 0-3-3h-1"></path>
                        <path d="M20.5 13.5l-1.5-1.5"></path>
                        <circle cx="16" cy="16" r="2"></circle>
                        <path d="M19.5 17.5l1.5 1.5"></path>
                    </svg>
                    <h5>CONCRETE EXPERIENCE</h5>
                </div>
                <div className="cycle-box">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <h5>REFLECTIVE<br />OBSERVATION</h5>
                </div>
                <div className="cycle-box">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21h6"></path>
                        <path d="M10 17v1a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-1"></path>
                        <path d="M15 17h-6"></path>
                        <path d="M12 2a6 6 0 0 0-6 6c0 1.9.9 3.6 2.3 4.6l.7.5V15h6v-1.9l.7-.5A6 6 0 0 0 12 2z"></path>
                    </svg>
                    <h5>ABSTRACT<br />CONCEPTUALIZATION</h5>
                </div>
                <div className="cycle-box">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 3h6"></path>
                        <path d="M10 3v5l-6 11a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-11V3"></path>
                    </svg>
                    <h5>ACTIVE<br />EXPERIMENTATION</h5>
                </div>
            </div>
        </div>
    </section>

    {/*  The Gap Section  */}
    <section className="bg-light section-padding gap-section">
        <div className="container">
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}>The Gap That Traditional Education Cannot Fill</h2>
            <p style={{ color: "#666", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>Research consistently shows that active participation leads to significantly higher knowledge retention compared to passive learning.</p>
            
            <div className="gap-grid" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <DecayCard width={450} height={350} image="assets/images/sir.jpeg">
                    <h3 style={{ color: "var(--color-orange)", fontSize: "3rem", marginBottom: "0.5rem", fontWeight: "800" }}>75% <span style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "bold" }}>Retention</span></h3>
                    <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "700" }}>Active Debating & Roleplay</h4>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>When students participate in simulations, they internalize concepts by applying them. This active involvement maximizes engagement and embeds knowledge in long-term memory.</p>
                </DecayCard>
                <DecayCard width={450} height={350} image="assets/images/img3.JPEG">
                    <h3 style={{ color: "#bbb", fontSize: "3rem", marginBottom: "0.5rem", fontWeight: "800" }}>10% <span style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "bold" }}>Retention</span></h3>
                    <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "700" }}>Traditional Lecture Learning</h4>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>Passive listening results in rapid cognitive decay. Without immediate application, most theoretical knowledge is lost within days of the lecture.</p>
                </DecayCard>
            </div>
        </div>
    </section>

    {/*  What Students Gain  */}
    <section className="section-padding text-center">
        <div className="container">
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}>What Students Gain. What Institutions Achieve.</h2>
            <p style={{ color: "#666", fontSize: "1.1rem" }}>Measurable outcomes that elevate student success and institutional profiles.</p>
            
            <div className="gain-grid text-left">
                <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg> 
                        For Students
                    </h4>
                    <div className="student-grid">
                        <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="student-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                            <h5>Public Speaking</h5>
                            <p>Develop communication skills through structured debate.</p>
                        </div></BorderGlow>
                        <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="student-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <h5>Diplomacy & Negotiation</h5>
                            <p>Master conflict resolution and consensus building.</p>
                        </div></BorderGlow>
                        <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="student-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21h6"></path>
                                <path d="M10 17v1a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-1"></path>
                                <path d="M15 17h-6"></path>
                                <path d="M12 2a6 6 0 0 0-6 6c0 1.9.9 3.6 2.3 4.6l.7.5V15h6v-1.9l.7-.5A6 6 0 0 0 12 2z"></path>
                            </svg>
                            <h5>Critical Thinking</h5>
                            <p>Analyze complex global issues from multiple perspectives.</p>
                        </div></BorderGlow>
                        <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="student-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <h5>Global Outlook</h5>
                            <p>Understand the real-world effects of international policy.</p>
                        </div></BorderGlow>
                        <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="student-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <circle cx="10" cy="13" r="2"></circle>
                                <line x1="11.5" y1="14.5" x2="13" y2="16"></line>
                            </svg>
                            <h5>Research Skills</h5>
                            <p>Develop rigorous methodology for deep-diving into diverse subjects.</p>
                        </div></BorderGlow>
                        <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="student-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                                <line x1="4" y1="22" x2="4" y2="15"></line>
                            </svg>
                            <h5>Leadership</h5>
                            <p>Lead teams toward shared goals with empathy and authority.</p>
                        </div></BorderGlow>
                    </div>
                </div>
                
                <div className="institution-box">
                    <h4><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> For Institutions</h4>
                    <ul className="inst-list">
                        <li>
                            <h6>Institutional Prestige</h6>
                            <p>Position your school as a leader in modern pedagogy and global awareness.</p>
                        </li>
                        <li>
                            <h6>NEP 2020 Compliance</h6>
                            <p>Demonstrate tangible action toward active learning frameworks.</p>
                        </li>
                        <li>
                            <h6>Alumni Success Profiles</h6>
                            <p>Equip students with the exact competencies demanded by top universities and recruiters.</p>
                        </li>
                        <li>
                            <h6>Holistic Environment</h6>
                            <p>Foster a vibrant campus culture of intellectual curiosity and debate.</p>
                        </li>
                    </ul>
                    <div className="inst-highlight">
                        "ProBiz handles everything from program design to final execution, ensuring a frictionless experience for school administrators."
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  MUN Section  */}
    <section id="programs" className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container mun-grid">
            <div style={{ paddingRight: "2rem" }}>
                <div style={{ backgroundColor: "#fff4ed", color: "#d35400", padding: "0.4rem 1rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "800", display: "inline-block", letterSpacing: "1px", marginBottom: "1.5rem", textTransform: "uppercase" }}>
                    OUR FLAGSHIP PROGRAM
                </div>
                
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: "1.1", textTransform: "uppercase", color: "#111" }}>
                    Model United <br /><span className="text-orange">Nations (MUN)</span>
                </h2>
                
                <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "2rem", maxWidth: "90%" }}>
                    Model United Nations is an authentic simulation of the UN General Assembly and other multilateral bodies. It introduces students to diplomacy, negotiation, and decision-making on complex global issues.
                </p>
                
                <div className="mun-features mun-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
                    <div className="mun-feature">
                        <h5 style={{ fontSize: "1rem", color: "#111", marginBottom: "0.4rem", fontWeight: "700" }}>Conference Management</h5>
                        <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.5" }}>End-to-end planning and execution of large-scale MUNs.</p>
                    </div>
                    <div className="mun-feature">
                        <h5 style={{ fontSize: "1rem", color: "#111", marginBottom: "0.4rem", fontWeight: "700" }}>Secretariats</h5>
                        <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.5" }}>Curating experienced chairs to ensure authentic debate.</p>
                    </div>
                    <div className="mun-feature">
                        <h5 style={{ fontSize: "1rem", color: "#111", marginBottom: "0.4rem", fontWeight: "700" }}>Skill Building</h5>
                        <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.5" }}>Pre-conference workshops on parliamentary procedures.</p>
                    </div>
                    <div className="mun-feature">
                        <h5 style={{ fontSize: "1rem", color: "#111", marginBottom: "0.4rem", fontWeight: "700" }}>Delegate Training</h5>
                        <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.5" }}>Comprehensive coaching for top-tier performance.</p>
                    </div>
                </div>
                
                <div style={{ display: "flex", gap: "1rem" }}>
                    <a href="/contact" style={{ backgroundColor: "var(--color-orange)", color: "#fff", textDecoration: "none", fontWeight: "800", fontSize: "0.9rem", padding: "1rem 2rem", borderRadius: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>START YOUR JOURNEY</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsGuideModalOpen(true); }} style={{ backgroundColor: "transparent", border: "1px solid #111", color: "#111", textDecoration: "none", fontWeight: "800", fontSize: "0.9rem", padding: "1rem 2rem", borderRadius: "4px", textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer" }}>DOWNLOAD GUIDE</a>
                </div>
            </div>
            
            <div style={{ position: "relative" }}>
                <img src="assets/images/r2.jpeg" alt="Model UN Session" style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
                
            </div>
        </div>
    </section>

    {/*  Why Model UN Section  */}
    <section className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container">
            {/*  Header  */}
            <div style={{ borderLeft: "3px solid var(--color-orange)", paddingLeft: "1.5rem", marginBottom: "3rem" }}>
                <h6 style={{ color: "var(--color-orange)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem", fontWeight: "600" }}>The Purpose</h6>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", fontWeight: "800", color: "#111", margin: "0" }}>Why Model UN?</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "2rem" }} className="why-mun-grid">
                {/*  Left Card  */}
                <div style={{ backgroundColor: "#fff9f5", borderRadius: "8px", padding: "3rem", position: "relative", overflow: "hidden" }}>
                    <p style={{ color: "#444", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "1.5rem", position: "relative", zIndex: "2" }}>
                        In the rapidly evolving Indian educational context, MUN serves as a critical bridge between theoretical knowledge and real-world application. It focuses on <span style={{ fontWeight: "700", color: "#111", borderBottom: "2px solid var(--color-orange)", paddingBottom: "2px" }}>soft-skill development</span> that classrooms often miss: critical thinking, public speaking, and the complex art of multi-lateral negotiation.
                    </p>
                    <p style={{ color: "#777", fontSize: "1.05rem", lineHeight: "1.6", fontStyle: "italic", margin: "0", position: "relative", zIndex: "2" }}>
                        "MUN transforms quiet students into vocal leaders and passionate researchers into strategic diplomats."
                    </p>
                    
                    {/*  Watermark Icon  */}
                    <svg style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "180px", height: "180px", color: "#fcece0", zIndex: "1" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {/*  Head Profile  */}
                        <path d="M 12 21 v -2 a 4 4 0 0 0 -4 -4 H 6 a 4 4 0 0 0 -4 4 v 2"></path>
                        <circle cx="8" cy="7" r="4"></circle>
                        {/*  Gear  */}
                        <circle cx="16" cy="14" r="3"></circle>
                        <path d="M16 10v1 M16 17v1 M12 14h1 M19 14h1 M13.5 11.5l1 1 M17.5 15.5l1 1 M13.5 16.5l1-1 M17.5 12.5l1-1"></path>
                    </svg>
                </div>
                
                {/*  Right Cards  */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ backgroundColor: "#fff", border: "1px solid #eee", borderRadius: "6px", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start", boxShadow: "0 2px 10px rgba(0,0,0,0.01)" }}>
                        <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginTop: "6px", flexShrink: "0" }}></div>
                        <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}>Enhanced CV value for Ivy League & Global University admissions.</p>
                    </div>
                    <div style={{ backgroundColor: "#fff", border: "1px solid #eee", borderRadius: "6px", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start", boxShadow: "0 2px 10px rgba(0,0,0,0.01)" }}>
                        <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginTop: "6px", flexShrink: "0" }}></div>
                        <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}>Direct exposure to global policy-making frameworks.</p>
                    </div>
                    <div style={{ backgroundColor: "#fff", border: "1px solid #eee", borderRadius: "6px", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start", boxShadow: "0 2px 10px rgba(0,0,0,0.01)" }}>
                        <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginTop: "6px", flexShrink: "0" }}></div>
                        <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.5", margin: "0" }}>Building long-term professional networks across India.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
            .why-mun-grid { grid-template-columns: 1fr !important; }
            .provides-grid { grid-template-columns: 1fr !important; }
            .provides-large-card { grid-column: span 1 !important; flex-direction: column !important; }
        }
        .benefit-card {
            background-color: #f3f3f3;
            border-radius: 8px;
            padding: 2rem 1.5rem;
            transition: all 0.3s ease;
            box-shadow: none;
            transform: translateY(0);
        }
        .benefit-card:hover, .benefit-card.active {
            background-color: #fff;
            box-shadow: 0 15px 35px rgba(0,0,0,0.05);
            transform: translateY(-5px);
        }
        @media (max-width: 1200px) {
            .benefits-mun-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 992px) {
            .benefits-mun-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
            .benefits-mun-grid { grid-template-columns: 1fr !important; }
        }
    ` }} />

    {/*  Benefits of Model UN Section  */}
    <section className="section-padding" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", fontWeight: "800", color: "#111", marginBottom: "1rem" }}>
                    Benefits of <span className="text-orange">Model UN</span>
                </h2>
                <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-orange)", margin: "0 auto" }}></div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="benefits-mun-grid">
                {/*  Card 1  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card active" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
                        <path d="M17 4s2 1 2 4-2 4-2 4"></path>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Public Speaking</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Master the art of persuasive speech in front of formal assemblies.</p>
                </div></BorderGlow>
                
                {/*  Card 2  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Research Skills</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Deep-dive into foreign policies and complex geopolitical datasets.</p>
                </div></BorderGlow>
                
                {/*  Card 3  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Negotiation</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Learn the delicate balance of compromise and national interest.</p>
                </div></BorderGlow>
                
                {/*  Card 4  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Technical Writing</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Draft formal UN resolutions and working papers with precision.</p>
                </div></BorderGlow>
                
                {/*  Card 5  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Global Awareness</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Understand world crises from multiple cultural perspectives.</p>
                </div></BorderGlow>
                
                {/*  Card 6  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <path d="M 12 21 v -2 a 4 4 0 0 0 -4 -4 H 6 a 4 4 0 0 0 -4 4 v 2"></path><circle cx="8" cy="7" r="4"></circle><circle cx="16" cy="14" r="3"></circle><path d="M16 10v1 M16 17v1 M12 14h1 M19 14h1 M13.5 11.5l1 1 M17.5 15.5l1 1 M13.5 16.5l1-1 M17.5 12.5l1-1"></path>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Critical Analysis</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Analyze problems from a neutral, solution-oriented mindset.</p>
                </div></BorderGlow>
                
                {/*  Card 7  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Leadership</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Guide blocs of nations toward common humanitarian goals.</p>
                </div></BorderGlow>
                
                {/*  Card 8  */}
                <BorderGlow borderRadius={8} backgroundColor="#fff" glowColor="25 100 50"><div className="benefit-card" style={{ background: "transparent", boxShadow: "none", height: "100%" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1.5rem" }}>
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    <h5 style={{ fontSize: "1.1rem", color: "#111", marginBottom: "0.8rem", fontWeight: "600" }}>Academic Edge</h5>
                    <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Gain a distinct advantage in political science and law studies.</p>
                </div></BorderGlow>
            </div>
        </div>
    </section>

    {/*  What ProBiz Provides Section  */}
    <section className="section-padding" style={{ backgroundColor: "#2b2b2b", position: "relative", overflow: "hidden" }}>
        {/*  Optional faint background watermark on right side  */}
        <div style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "50%", background: "linear-gradient(to right, rgba(43,43,43,1) 0%, rgba(43,43,43,0.5) 100%), url('assets/images/un.png') center right / cover", opacity: "0.2", pointerEvents: "none" }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: "2" }}>
            <div style={{ marginBottom: "3rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                    <div style={{ width: "3px", height: "32px", backgroundColor: "var(--color-orange)" }}></div>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: "800", color: "#fff", margin: "0", letterSpacing: "-0.5px" }}>
                        What <span className="text-orange">ProBiz Knowledge Center</span> Provides
                    </h2>
                </div>
                <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: "1.5", maxWidth: "600px", margin: "0" }}>
                    We offer end-to-end expertise to institutionalize high-standard MUN culture in schools and universities.
                </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="provides-grid">
                {/*  Card 1  */}
                <div style={{ backgroundColor: "#fbfbfb", borderRadius: "6px", padding: "2.5rem 2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "var(--color-orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><polyline points="9 16 11 18 15 14"></polyline>
                        </svg>
                    </div>
                    <h5 style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1rem", fontWeight: "600" }}>End-to-End Conference Execution</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Complete logistical and academic management of your school's annual MUN conference.</p>
                </div>
                
                {/*  Card 2  */}
                <div style={{ backgroundColor: "#fbfbfb", borderRadius: "6px", padding: "2.5rem 2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "var(--color-orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21h18"></path><path d="M3 7v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7"></path><path d="M5 11v10"></path><path d="M19 11v10"></path><path d="M9 11v10"></path><path d="M15 11v10"></path><path d="M12 2l10 5H2z"></path>
                        </svg>
                    </div>
                    <h5 style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1rem", fontWeight: "600" }}>Model UN Society Setup</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Establishing and nurturing internal student-led MUN societies for long-term sustainability.</p>
                </div>
                
                {/*  Card 3  */}
                <div style={{ backgroundColor: "#fbfbfb", borderRadius: "6px", padding: "2.5rem 2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "var(--color-orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 13l-4 4-2-2 4-4"></path><rect x="13" y="9" width="4" height="8" transform="rotate(-45 15 13)"></rect><path d="M17 17l2 2"></path>
                        </svg>
                    </div>
                    <h5 style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1rem", fontWeight: "600" }}>Expert Executive Board</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Providing seasoned Chairs and Rapporteurs from the national circuit to ensure academic rigor.</p>
                </div>
                
                {/*  Card 4  */}
                <div style={{ backgroundColor: "#fbfbfb", borderRadius: "6px", padding: "2.5rem 2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "var(--color-orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z"></path><path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z"></path>
                        </svg>
                    </div>
                    <h5 style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1rem", fontWeight: "600" }}>Advisory & Mentoring</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Strategic guidance for institutional leaders on curriculum integration of diplomatic training.</p>
                </div>
                
                {/*  Card 5 (Spans 2 columns)  */}
                <div style={{ backgroundColor: "#fbfbfb", borderRadius: "6px", padding: "2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", gridColumn: "span 2", display: "flex", gap: "2rem", alignItems: "center" }} className="provides-large-card">
                    <div style={{ flex: "1", padding: "0.5rem 0" }}>
                        <div style={{ width: "48px", height: "48px", backgroundColor: "var(--color-orange)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                            </svg>
                        </div>
                        <h5 style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1rem", fontWeight: "600" }}>Delegate Training Workshops</h5>
                        <p style={{ fontSize: "0.9rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Intensive modules on UN Procedure, Public Speaking, and Strategic Documentation.</p>
                    </div>
                    <div style={{ flex: "1.2" }}>
                        {/*  Using the specified image for the collage  */}
                        <img src="assets/images/model united nations .png" alt="Delegate Training Workshops" style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }} />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Ready to Host MUN CTA Strip  */}
    <section style={{ backgroundColor: "var(--color-orange)", padding: "1.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <h4 style={{ color: "#fff", margin: "0", fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: "500" }}>Ready to host your own MUN?</h4>
            <a href="/contact" style={{ backgroundColor: "#fff", color: "var(--color-orange)", padding: "0.7rem 2rem", borderRadius: "4px", fontWeight: "600", textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>Consult Our Experts</a>
        </div>
    </section>

    {/*  Debate Programs New Sections  */}
    <style dangerouslySetInnerHTML={{ __html: `
        .debate-hero-grid, .why-debate-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .debate-formats-grid, .core-benefits-grid, .probiz-solutions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        @media (max-width: 1200px) {
            .debate-formats-grid, .core-benefits-grid, .probiz-solutions-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .debate-hero-grid, .why-debate-grid { grid-template-columns: 1fr; gap: 2rem; }
            .debate-formats-grid, .core-benefits-grid, .probiz-solutions-grid { grid-template-columns: 1fr !important; }
        }
    ` }} />

    {/*  Structured Debate Programs (Hero)  */}
    <section className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container debate-hero-grid">
            <div style={{ paddingRight: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", fontWeight: "800", lineHeight: "1.1", marginBottom: "1rem", color: "#111" }}>
                    Structured <span className="text-orange">Debate<br />Programs</span>
                </h2>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#333", marginBottom: "1.5rem" }}>Master the Art of Argumentation</h4>
                <p style={{ color: "#666", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                    Structured debate is a formal educational activity that develops rigorous thinking, articulate speech, and professional poise. Move beyond mere discussion and embrace a disciplined approach to exploring complex global issues.
                </p>
                <a href="#formats" style={{ display: "inline-block", backgroundColor: "var(--color-orange)", color: "#fff", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "800", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px", fontSize: "0.9rem" }}>EXPLORE OUR FORMATS</a>
            </div>
            <div>
                <img src="assets/images/img9.jpeg" alt="Structured Debate" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} />
            </div>
        </div>
    </section>

    {/*  Debate Formats  */}
    <section id="formats" className="section-padding" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", color: "#111", marginBottom: "1rem" }}>Debate Formats</h2>
                <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-orange)", margin: "0 auto" }}></div>
            </div>
            
            <div className="debate-formats-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                {/*  Format 1  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", padding: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "#fff4ed", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M3 7v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7"></path><path d="M5 11v10"></path><path d="M19 11v10"></path><path d="M9 11v10"></path><path d="M15 11v10"></path><path d="M12 2l10 5H2z"></path></svg>
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "0.5rem", fontWeight: "700" }}>Parliamentary Debate</h5>
                        <p style={{ fontSize: "0.95rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Dynamic, fast-paced format emphasizing spontaneous wit and logical structure modeled after British Parliament.</p>
                    </div>
                </div>
                
                {/*  Format 2  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", padding: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "#fff4ed", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "0.5rem", fontWeight: "700" }}>Oxford-Style Debate</h5>
                        <p style={{ fontSize: "0.95rem", color: "#666", margin: "0", lineHeight: "1.6" }}>A competitive debate format on a single motion, where the audience votes on the winning side.</p>
                    </div>
                </div>
                
                {/*  Format 3  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", padding: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "#fff4ed", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "0.5rem", fontWeight: "700" }}>Lincoln-Douglas Debate</h5>
                        <p style={{ fontSize: "0.95rem", color: "#666", margin: "0", lineHeight: "1.6" }}>One-on-one format focusing on philosophical values and ethical frameworks behind current issues.</p>
                    </div>
                </div>
                
                {/*  Format 4  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", padding: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                    <div style={{ width: "48px", height: "48px", backgroundColor: "#fff4ed", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div>
                        <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "0.5rem", fontWeight: "700" }}>Public Forum Debate</h5>
                        <p style={{ fontSize: "0.95rem", color: "#666", margin: "0", lineHeight: "1.6" }}>Accessible and persuasive team debate centered on real-world news topics and evidence-based policy.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Why Debate?  */}
    <section className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container why-debate-grid">
            <div>
                <img src="assets/images/r3.jpeg" alt="Why Debate" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} />
            </div>
            <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", fontWeight: "800", marginBottom: "1.5rem", color: "#111" }}>Why Debate?</h2>
                <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                    Debate is not just a competition; it is a laboratory for leadership. It prepares individuals to handle complexity, respect dissent, and lead with clarity in high-pressure environments.
                </p>
                
                <div style={{ backgroundColor: "#f8f9fa", borderLeft: "3px solid var(--color-orange)", padding: "1.5rem 2rem", borderRadius: "0 4px 4px 0" }}>
                    <h6 style={{ color: "var(--color-orange)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem", fontWeight: "700" }}>NOTABLE LEADERS</h6>
                    <p style={{ color: "#444", fontSize: "1rem", lineHeight: "1.6", fontStyle: "italic", margin: "0" }}>
                        "The rigor of structured argumentation has shaped the careers of visionary leaders such as <strong>Nirmala Sitharaman</strong> and <strong>Rahul Dravid</strong>, proving its value far beyond the classroom."
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/*  The Core Benefits  */}
    <section className="section-padding" style={{ backgroundColor: "#222" }}>
        <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", color: "#fff", marginBottom: "0.5rem" }}>The Core Benefits</h2>
                <p style={{ color: "#aaa", fontSize: "1rem" }}>Skills that transcend the podium</p>
            </div>
            
            <div className="core-benefits-grid">
                {/*  Benefit 1  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>SHARPER CRITICAL THINKING</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Deconstruct complex arguments with surgical precision.</p>
                </div>
                {/*  Benefit 2  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>CONFIDENT COMMUNICATION</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Command the room with vocal authority and presence.</p>
                </div>
                {/*  Benefit 3  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>STRUCTURED WRITING</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Learn to organize thoughts into high-impact documentation.</p>
                </div>
                {/*  Benefit 4  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>MULTIPLE PERSPECTIVES</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Develop deep empathy and nuanced understanding.</p>
                </div>
                {/*  Benefit 5  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>FACT-BASED RESEARCH</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Master the art of verifying and synthesizing information.</p>
                </div>
                {/*  Benefit 6  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>EMOTIONAL RESILIENCE</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Handle critique and counter-arguments with grace.</p>
                </div>
                {/*  Benefit 7  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>CRISIS LEADERSHIP</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Make calm, logical decisions under intense pressure.</p>
                </div>
                {/*  Benefit 8  */}
                <div style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2rem 1.5rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--color-orange)", marginBottom: "1rem" }}></div>
                    <h6 style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "700", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>ACTIVE LISTENING</h6>
                    <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.6", margin: "0" }}>Listen to understand, not just to respond.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  ProBiz Solutions  */}
    <section className="section-padding" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                    <h6 style={{ color: "var(--color-orange)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem", fontWeight: "600" }}>OUR EXPERTISE</h6>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", color: "#111", margin: "0" }}>ProBiz Solutions</h2>
                </div>
                <p style={{ color: "#666", fontSize: "1rem", maxWidth: "300px", margin: "0", textAlign: "right" }}>Tailored consulting for educational institutions and corporate teams.</p>
            </div>
            
            <div className="probiz-solutions-grid">
                {/*  Solution 1  */}
                <div style={{ backgroundColor: "#fff", borderLeft: "3px solid var(--color-orange)", padding: "2rem", borderRadius: "0 4px 4px 0", boxShadow: "0 5px 15px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "1rem", fontWeight: "700" }}>Debate Club<br />Establishment</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem", lineHeight: "1.6", flexGrow: "1" }}>A-to-Z setup including curriculum design, trainer onboarding, and membership pipelines.</p>
                    <a href="/contact" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>LEARN MORE &rarr;</a>
                </div>
                {/*  Solution 2  */}
                <div style={{ backgroundColor: "#fff", borderLeft: "3px solid var(--color-orange)", padding: "2rem", borderRadius: "0 4px 4px 0", boxShadow: "0 5px 15px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "1rem", fontWeight: "700" }}>Competition<br />Management</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem", lineHeight: "1.6", flexGrow: "1" }}>Logical and academic management of debate championships, from motions to brackets.</p>
                    <a href="/contact" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>LEARN MORE &rarr;</a>
                </div>
                {/*  Solution 3  */}
                <div style={{ backgroundColor: "#fff", borderLeft: "3px solid var(--color-orange)", padding: "2rem", borderRadius: "0 4px 4px 0", boxShadow: "0 5px 15px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "1rem", fontWeight: "700" }}>Training<br />Workshops</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem", lineHeight: "1.6", flexGrow: "1" }}>Intensive bootcamps for delegates and coaches focusing on rhetoric and strategic rebuttals.</p>
                    <a href="/contact" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>LEARN MORE &rarr;</a>
                </div>
                {/*  Solution 4  */}
                <div style={{ backgroundColor: "#fff", borderLeft: "3px solid var(--color-orange)", padding: "2rem", borderRadius: "0 4px 4px 0", boxShadow: "0 5px 15px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ fontSize: "1.2rem", color: "#111", marginBottom: "1rem", fontWeight: "700" }}>Expert<br />Adjudication</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem", lineHeight: "1.6", flexGrow: "1" }}>Highly qualified judges providing constructive feedback to elevate student performance.</p>
                    <a href="/contact" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>LEARN MORE &rarr;</a>
                </div>
            </div>
        </div>
    </section>

    {/*  Final CTA  */}
    <section className="section-padding" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <div style={{ backgroundColor: "var(--color-orange)", borderRadius: "0", padding: "4rem 2rem", textAlign: "center", color: "#fff" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", fontWeight: "800", marginBottom: "1rem" }}>Ready to bring debate to your<br />institution?</h2>
                <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2rem", opacity: "0.9" }}>Empower your students or team with the world's most powerful communication skill. Our experts are ready to design your roadmap.</p>
                <a href="/contact" style={{ display: "inline-block", backgroundColor: "#111", color: "#fff", padding: "1rem 2.5rem", borderRadius: "4px", fontWeight: "700", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px", fontSize: "0.9rem" }}>CONSULT OUR EXPERTS</a>
            </div>
        </div>
    </section>

    {/*  Other Experiential Learning Formats (Hero)  */}
    <section className="section-padding" style={{ backgroundColor: "#fff" }}>
        <div className="container other-formats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ paddingRight: "2rem" }}>
                <div style={{ backgroundColor: "var(--color-orange)", color: "#fff", padding: "0.3rem 0.8rem", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "800", display: "inline-block", letterSpacing: "1px", marginBottom: "1.5rem", textTransform: "uppercase" }}>
                    EXPERIENTIAL LEARNING
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: "800", lineHeight: "1.3", marginBottom: "2rem", color: "#111" }}>
                    Beyond MUN and debate, ProBiz Knowledge Center offers a growing suite of structured Experiential Learning programs designed to build specific skills through active participation.
                </h2>
                <a href="#simulations" style={{ display: "inline-block", backgroundColor: "transparent", border: "1px solid #111", color: "#111", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "800", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px", fontSize: "0.9rem" }}>EXPLORE PROGRAM DETAILS</a>
            </div>
            <div style={{ position: "relative" }}>
                {/*  Frame border decoration  */}
                <div style={{ position: "absolute", top: "-20px", left: "-20px", right: "20px", bottom: "20px", borderTop: "2px solid #ffccab", borderLeft: "2px solid #ffccab", zIndex: "1" }}></div>
                <div style={{ position: "absolute", top: "20px", left: "20px", right: "-20px", bottom: "-20px", borderBottom: "2px solid var(--color-orange)", borderRight: "2px solid var(--color-orange)", zIndex: "1" }}></div>
                
                {/*  Experiential Learning Image  */}
                <img src="assets/images/r5.jpeg" alt="Experiential Learning Formats" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "4px", position: "relative", zIndex: "2", display: "block" }} />
            </div>
        </div>
    </section>

    {/*  Transformative Educational Simulations  */}
    <section id="simulations" className="section-padding" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <div style={{ marginBottom: "3rem", position: "relative", paddingBottom: "1rem" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: "800", color: "#111", marginBottom: "0.5rem" }}>Transformative Educational Simulations</h2>
                <p style={{ color: "#666", fontSize: "1rem", maxWidth: "600px", margin: "0" }}>Designed by educators and industry experts to bridge the gap between theory and practical leadership.</p>
                <div style={{ position: "absolute", right: "0", bottom: "0", width: "100px", height: "3px", backgroundColor: "var(--color-orange)" }}></div>
            </div>
            
            <div className="simulations-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                
                {/*  Card 1  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", borderLeft: "3px solid var(--color-orange)", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "relative", height: "250px" }}>
                        <img src="assets/images/conclve.jpeg" alt="Mock Legislative Assemblies" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "#111", color: "#fff", padding: "0.3rem 0.8rem", fontSize: "0.65rem", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase" }}>LEADERSHIP</div>
                    </div>
                    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: "1" }}>
                        <h4 style={{ fontSize: "1.4rem", color: "#111", fontWeight: "700", marginBottom: "1rem" }}>Mock Legislative Assemblies</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: "1" }}>Students simulate the functioning of state or national legislative bodies, proposing bills, arguing for and against policy positions and experiencing the procedural rigors of democratic governance. An ideal program for civics education and leadership development.</p>
                        <a href="#" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>PROGRAM SYLLABUS &rarr;</a>
                    </div>
                </div>

                {/*  Card 2  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", borderLeft: "3px solid var(--color-orange)", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "relative", height: "250px" }}>
                        <img src="assets/images/img6.jpeg" alt="Case Study Competitions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "#111", color: "#fff", padding: "0.3rem 0.8rem", fontSize: "0.65rem", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase" }}>STRATEGIC THINKING</div>
                    </div>
                    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: "1" }}>
                        <h4 style={{ fontSize: "1.4rem", color: "#111", fontWeight: "700", marginBottom: "1rem" }}>Case Study Competitions</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: "1" }}>Teams work through real-world business, social or policy challenges within a defined time frame and present their analysis and recommendations to a panel of judges. Develops strategic thinking, collaborative problem-solving and executive communication skills.</p>
                        <a href="#" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>VIEW CASE DATABASE &rarr;</a>
                    </div>
                </div>

                {/*  Card 3  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", borderLeft: "3px solid var(--color-orange)", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "relative", height: "250px" }}>
                        <img src="assets/images/img9.jpeg" alt="Leadership Simulation Workshops" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "#111", color: "#fff", padding: "0.3rem 0.8rem", fontSize: "0.65rem", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase" }}>MANAGEMENT</div>
                    </div>
                    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: "1" }}>
                        <h4 style={{ fontSize: "1.4rem", color: "#111", fontWeight: "700", marginBottom: "1rem" }}>Leadership Simulation Workshops</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: "1" }}>Structured role-playing exercises place students in leadership scenarios requiring decision-making under uncertainty, team coordination and stakeholder management. Especially effective for student government and prefect bodies preparing for institutional leadership roles.</p>
                        <a href="#" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>WORKSHOP MODULES &rarr;</a>
                    </div>
                </div>

                {/*  Card 4  */}
                <div style={{ backgroundColor: "#fff", borderRadius: "6px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", borderLeft: "3px solid var(--color-orange)", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "relative", height: "250px" }}>
                        <img src="assets/images/img11.jpeg" alt="Press Conference and Media Simulation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "#111", color: "#fff", padding: "0.3rem 0.8rem", fontSize: "0.65rem", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase" }}>COMMUNICATION</div>
                    </div>
                    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: "1" }}>
                        <h4 style={{ fontSize: "1.4rem", color: "#111", fontWeight: "700", marginBottom: "1rem" }}>Press Conference and Media Simulation</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: "1" }}>Students simulate a live press conference in which some participants act as public figures or organizational spokespeople and others as journalists. Develops media literacy, message discipline and the ability to communicate clearly when challenged or under scrutiny.</p>
                        <a href="#" style={{ color: "var(--color-orange)", fontWeight: "700", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>MEDIA TOOLKIT &rarr;</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/*  Methodology Section  */}
    <section className="methodology-section" style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
        <div className="container">
            <div className="methodology-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "stretch" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ color: "var(--color-orange)", fontSize: "0.75rem", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1rem" }}>
                        OUR METHODOLOGY
                    </div>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: "800", lineHeight: "1.1", marginBottom: "1.5rem", color: "#111" }}>
                        From First<br />Conversation to<br /><span style={{ color: "var(--color-orange)" }}>Lasting Impact</span>
                    </h2>
                    <p style={{ color: "#666", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "2.5rem" }}>
                        Every engagement with ProBiz Knowledge Center begins with understanding your institution's specific goals, student profile and existing programs. There is no single template we apply to every school or college. We design every program around your context.
                    </p>

                </div>
                <div style={{ minHeight: "400px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                    <img src="assets/images/r1.jpeg" alt="Methodology" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>
        </div>
    </section>

    {/*  Continuum Timeline Section  */}
    <section className="continuum-section" style={{ padding: "6rem 0", backgroundColor: "#fcfcfc" }}>
        <div className="container text-center">
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: "800", color: "#111", marginBottom: "1rem" }}>
                The ProBiz <span style={{ color: "var(--color-orange)" }}>Continuum</span>
            </h2>
            <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-orange)", margin: "0 auto 5rem" }}></div>
            
            <div className="timeline-container" style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
                {/*  Center Line  */}
                <div className="timeline-line" style={{ position: "absolute", left: "50%", top: "0", bottom: "0", width: "1px", backgroundColor: "#ddd", transform: "translateX(-50%)", zIndex: "1" }}></div>
                
                {/*  Phase 01  */}
                <div className="timeline-item left" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "50%", position: "relative", marginBottom: "4rem" }}>
                    <div className="timeline-content" style={{ textAlign: "right", paddingRight: "4rem", position: "relative", zIndex: "2", width: "100%" }}>
                        <div style={{ color: "var(--color-orange)", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem" }}>PHASE 01</div>
                        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "#111" }}>Discovery Conversation</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", margin: "0" }}>We begin with a deep dive into your institutional ecosystem. Our consultants listen more than they talk, identifying the hidden gaps between your current performance and your strategic vision.</p>
                    </div>
                    <div className="timeline-icon black-box" style={{ position: "absolute", right: "calc(50% - 24px)", top: "0", width: "48px", height: "48px", backgroundColor: "#111", borderRadius: "8px", zIndex: "3", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div className="timeline-number" style={{ position: "absolute", right: "calc(50% - 120px)", top: "-20px", fontFamily: "var(--font-heading)", fontSize: "7rem", fontWeight: "800", color: "transparent", WebkitTextStroke: "1px #ffe6d5", zIndex: "0", pointerEvents: "none", lineHeight: "1" }}>01</div>
                </div>
                
                {/*  Phase 02  */}
                <div className="timeline-item right" style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "50%", position: "relative", marginBottom: "4rem" }}>
                    <div className="timeline-content" style={{ textAlign: "left", paddingLeft: "4rem", position: "relative", zIndex: "2", width: "100%" }}>
                        <div style={{ color: "var(--color-orange)", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem" }}>PHASE 02</div>
                        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "#111" }}>Program Design</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", margin: "0" }}>Using data gathered from discovery, we architect a bespoke curriculum or strategic framework. This is a rigorous process of iterative design ensuring every module aligns with your KPIs.</p>
                    </div>
                    <div className="timeline-icon orange-box" style={{ position: "absolute", left: "calc(50% - 24px)", top: "0", width: "48px", height: "48px", backgroundColor: "var(--color-orange)", borderRadius: "8px", zIndex: "3", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(211,84,0,0.2)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                    </div>
                    <div className="timeline-number" style={{ position: "absolute", left: "calc(50% - 120px)", top: "-20px", fontFamily: "var(--font-heading)", fontSize: "7rem", fontWeight: "800", color: "transparent", WebkitTextStroke: "1px #ffe6d5", zIndex: "0", pointerEvents: "none", lineHeight: "1" }}>02</div>
                </div>

                {/*  Phase 03  */}
                <div className="timeline-item left" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "50%", position: "relative", marginBottom: "4rem" }}>
                    <div className="timeline-content" style={{ textAlign: "right", paddingRight: "4rem", position: "relative", zIndex: "2", width: "100%" }}>
                        <div style={{ color: "var(--color-orange)", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem" }}>PHASE 03</div>
                        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "#111" }}>Delivery & Execution</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", margin: "0" }}>Precision execution of the designed program. Whether through high-impact workshops, digital platforms, or 1-on-1 mentorship, we ensure knowledge transfer is fluid and engaging.</p>
                    </div>
                    <div className="timeline-icon black-box" style={{ position: "absolute", right: "calc(50% - 24px)", top: "0", width: "48px", height: "48px", backgroundColor: "#111", borderRadius: "8px", zIndex: "3", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 2.5a5.5 5.5 0 0 1 8 8l-8 8-8-8a5.5 5.5 0 0 1 8-8z"></path><line x1="12" y1="12" x2="16" y2="16"></line></svg>
                    </div>
                    <div className="timeline-number" style={{ position: "absolute", right: "calc(50% - 120px)", top: "-20px", fontFamily: "var(--font-heading)", fontSize: "7rem", fontWeight: "800", color: "transparent", WebkitTextStroke: "1px #ffe6d5", zIndex: "0", pointerEvents: "none", lineHeight: "1" }}>03</div>
                </div>
                
                {/*  Phase 04  */}
                <div className="timeline-item right" style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "50%", position: "relative" }}>
                    <div className="timeline-content" style={{ textAlign: "left", paddingLeft: "4rem", position: "relative", zIndex: "2", width: "100%" }}>
                        <div style={{ color: "var(--color-orange)", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem" }}>PHASE 04</div>
                        <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "#111" }}>Debrief & Continuity</h4>
                        <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", margin: "0" }}>We don't just walk away. Post-delivery, we analyze the outcomes against the initial discovery targets and set up a continuity roadmap for sustained growth and cultural integration.</p>
                    </div>
                    <div className="timeline-icon orange-box" style={{ position: "absolute", left: "calc(50% - 24px)", top: "0", width: "48px", height: "48px", backgroundColor: "var(--color-orange)", borderRadius: "8px", zIndex: "3", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(211,84,0,0.2)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                    <div className="timeline-number" style={{ position: "absolute", left: "calc(50% - 120px)", top: "-20px", fontFamily: "var(--font-heading)", fontSize: "7rem", fontWeight: "800", color: "transparent", WebkitTextStroke: "1px #ffe6d5", zIndex: "0", pointerEvents: "none", lineHeight: "1" }}>04</div>
                </div>
            </div>
        </div>
    </section>

    {/*  Image CTA Banner  */}
    <section className="section-padding" style={{ backgroundColor: "#f8f9fa", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "92%", margin: "0 auto" }}>
            <div style={{ position: "relative", borderRadius: "40px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <img src="assets/images/img4.jpeg" alt="Students" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", position: "absolute", top: "0", left: "0", zIndex: "1" }} />
                <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "rgba(0, 0, 0, 0.7)", zIndex: "2" }}></div>
                
                <div style={{ position: "relative", zIndex: "3", padding: "7rem 2rem", textAlign: "center", color: "#fff", maxWidth: "900px", margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", fontWeight: "800", marginBottom: "1.5rem" }}>Ready to Transform How Your Students Learn?</h2>
                    
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "1.5rem", opacity: "0.95" }}>Whether you want to host your first Model UN conference, establish a thriving debate club or build a comprehensive Experiential Learning calendar, ProBiz Knowledge Center is ready to partner with you.</p>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "3rem", opacity: "0.95" }}>Reach out and let us design a program that fits your institution's vision.</p>

                    <div style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1rem", letterSpacing: "0.5px" }}>Get in Touch:</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.1rem", fontWeight: "600" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            info@probizindia.in
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.1rem", fontWeight: "600" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            +91 4717961112
                        </div>
                    </div>
                    
                    <a href="/contact" style={{ display: "inline-block", backgroundColor: "var(--color-orange)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem", boxShadow: "0 4px 15px rgba(255, 107, 0, 0.3)" }}>Partner with ProBiz Center</a>
                </div>
            </div>
        </div>
    </section>

    {/*  FAQ  */}
    <section className="section-padding bg-light" style={{ paddingBottom: "0" }}>
        <div className="container text-center">
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "800", marginBottom: "3rem" }}>Frequently Asked Questions</h2>
            
            <div className="faq-section text-left">
                <FAQItem 
                    question="Is MUN only for senior students?" 
                    answer="Not at all. ProBiz designs age-appropriate MUN programs for students from Class 7 onward. Junior MUN formats use simplified procedures and age-relevant topics to ensure younger participants can engage meaningfully and build confidence before progressing to more complex senior formats." 
                />
                <FAQItem 
                    question="We have never hosted a MUN before. Can you still help us?" 
                    answer="Yes. Our most common engagement is with institutions that are setting up their first conference. We handle the heavy lifting and coach your team through every stage so that by the end of the first event, your institution has the confidence and the systems to run future editions with increasing independence." 
                />
                <FAQItem 
                    question="How much time does setting up a MUN society require from our faculty?" 
                    answer="Our model is designed to minimize the faculty workload. We work primarily with a faculty coordinator and your student leadership team. The time commitment for faculty is typically limited to a few meetings and the conference day itself. We manage the rest." 
                />
                <FAQItem 
                    question="Can you provide debate training without running a full competition?" 
                    answer="Yes. Many institutions begin with a skills workshop or an internal training program before committing to a formal competition. We are happy to design a standalone workshop that introduces your students to debate and builds foundational skills at their own pace." 
                />
                <FAQItem 
                    question="Do you work with institutions outside Trivandrum?" 
                    answer="Yes. ProBiz Knowledge Center works with schools and colleges across India and beyond. We are also able to support institutions in other states for specific programs by prior arrangement. Contact us to discuss your location and requirements." 
                />
            </div>
        </div>
    </section>


    

<style dangerouslySetInnerHTML={{ __html: `
        body { padding-top: 0; background-color: #fff; }
        
        /* Navbar transparent overlay */
        .navbar { background-color: transparent !important; box-shadow: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 1.5rem 0 !important; transition: all 0.3s ease; }
        .navbar .nav-links a { color: #fff !important; }
        .navbar .nav-links a:hover, .navbar .nav-links a.active { color: var(--color-orange) !important; }
        .navbar:not(.scrolled) .nav-logo-img { filter: brightness(0) invert(1); }
        .navbar:not(.scrolled) .mobile-toggle svg { stroke: #fff; }

        .navbar.scrolled { background-color: rgba(255, 255, 255, 0.98) !important; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important; padding: 0.8rem 0 !important; border-bottom: none !important; }
        .navbar.scrolled .nav-links a { color: var(--color-black) !important; }
        .navbar.scrolled .nav-links a.active { color: var(--color-orange) !important; }

        /* Typography */
        .text-orange { color: var(--color-orange); }
        .bg-orange { background-color: var(--color-orange); }
        .bg-dark { background-color: #111; color: #fff; }
        .bg-light { background-color: #f8f9fa; }
        
        .section-padding { padding: 6rem 0; }
        
        /* Hero */
        .el-hero {
            position: relative;
            min-height: 90vh;
            display: flex;
            align-items: center;
            background-image: url('assets/images/experimental%20learning.png');
            background-size: cover;
            background-position: center;
            text-align: center;
            color: #fff;
        }
        .el-hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.5));
            z-index: 1;
        }
        .el-hero-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        .el-hero-badge {
            display: inline-block;
            background-color: var(--color-orange);
            color: #fff;
            padding: 0.4rem 1rem;
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border-radius: 4px;
            margin-bottom: 2rem;
        }
        .el-hero h1 {
            font-family: var(--font-heading);
            font-size: 4.5rem;
            line-height: 1.1;
            font-weight: 800;
            margin-bottom: 1.5rem;
        }
        .el-hero p {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #eee;
            margin-bottom: 3rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        .el-hero-btns {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
        }
        
        /* Learning by Doing */
        .lbd-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .lbd-list { list-style: none; padding: 0; margin-top: 2rem; }
        .lbd-list li {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            font-weight: 600;
            color: #333;
        }
        .lbd-list li svg { color: var(--color-orange); }
        
        .cycle-diagram {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            position: relative;
        }
        .cycle-box {
            background: transparent;
            border: 1px solid #f2e6dc;
            padding: 3rem 1.5rem;
            text-align: center;
            border-radius: 4px;
            position: relative;
            z-index: 1;
        }
        .cycle-box svg { color: var(--color-orange); margin-bottom: 1.2rem; }
        .cycle-box h5 { 
            font-size: 0.9rem; 
            text-transform: uppercase; 
            letter-spacing: 0.5px; 
            margin: 0; 
            color: #d35400; 
            line-height: 1.4;
            font-weight: 700;
        }
        
        .cycle-bg-arrow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 220px;
            height: 220px;
            z-index: 0;
            color: #f5ede5;
            pointer-events: none;
        }
        
        /* The Gap Section */
        .gap-section { text-align: center; }
        .gap-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 3rem;
        }
        .gap-card {
            background: #fff;
            padding: 3rem 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            text-align: left;
        }
        .gap-card h3 {
            font-family: var(--font-heading);
            font-size: 4rem;
            color: var(--color-orange);
            margin-bottom: 0.5rem;
            line-height: 1;
        }
        .gap-card h3 span { font-size: 1.5rem; color: #888; font-weight: 500; }
        .gap-card h4 { font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: #111; }
        .gap-card p { color: #666; font-size: 0.95rem; line-height: 1.6; margin: 0; }
        
        /* What Students Gain */
        .gain-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 4rem;
            margin-top: 4rem;
        }
        .student-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
        .student-card {
            background: #fff;
            border: 1px solid #eee;
            padding: 1.5rem;
            border-radius: 8px;
        }
        .student-card svg { color: var(--color-orange); margin-bottom: 1rem; }
        .student-card h5 { font-size: 1rem; margin-bottom: 0.5rem; color: #111; }
        .student-card p { font-size: 0.85rem; color: #666; margin: 0; line-height: 1.5; }
        
        .institution-box {
            background: #fafafa;
            border: 1px solid #eee;
            padding: 2.5rem;
            border-radius: 12px;
        }
        .institution-box h4 { font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 0.5rem; }
        .inst-list { list-style: none; margin: 0; padding: 0; }
        .inst-list li {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
            position: relative;
        }
        .inst-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-orange);
            font-weight: bold;
        }
        .inst-list li h6 { font-size: 1rem; margin-bottom: 0.3rem; color: #111; }
        .inst-list li p { font-size: 0.85rem; color: #666; margin: 0; line-height: 1.5; }
        .inst-highlight {
            background-color: #fff4ed;
            border-left: 4px solid var(--color-orange);
            padding: 1.5rem;
            margin-top: 2rem;
            font-size: 0.85rem;
            color: #d35400;
            font-weight: 600;
        }
        
        /* MUN Section */
        .mun-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .mun-images {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        .mun-img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
        .mun-img-large { grid-column: span 2; height: 250px; }
        .mun-img-small { height: 180px; }
        
        .mun-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
        }
        .mun-feature { display: grid; grid-template-columns: 140px 1fr; gap: 1rem; align-items: flex-start; }
        .mun-feature svg { color: var(--color-orange); flex-shrink: 0; margin-top: 0.2rem; }
        .mun-feature h5 { font-size: 1rem; color: #111; margin-bottom: 0.3rem; margin-top: 0; }
        .mun-feature p { font-size: 0.85rem; color: #666; margin: 0; line-height: 1.5; }
        
        /* Debate */
        .debate-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .debate-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            padding: 2rem 0;
        }
        .debate-feature h5 { color: var(--color-orange); font-size: 0.9rem; margin-bottom: 0.5rem; text-transform: uppercase; }
        .debate-feature p { font-size: 0.85rem; color: #555; margin: 0; }
        
        /* Beyond MUN */
        .beyond-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            margin-top: 3rem;
        }
        .beyond-card {
            background: #1a1a1a;
            color: #fff;
            padding: 2.5rem 2rem;
            border-radius: 12px;
            transition: transform 0.3s ease;
        }
        .beyond-card:hover { transform: translateY(-10px); }
        .beyond-card.active { background: var(--color-orange); }
        .beyond-card svg { margin-bottom: 1.5rem; color: #fff; }
        .beyond-card h4 { font-size: 1.1rem; margin-bottom: 1rem; line-height: 1.4; }
        .beyond-card p { font-size: 0.85rem; color: rgba(255,255,255,0.8); margin: 0; line-height: 1.6; }
        
        /* Framework */
        .framework-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 4rem;
            position: relative;
        }
        .framework-grid::before {
            content: '';
            position: absolute;
            top: 25px;
            left: 10%;
            right: 10%;
            height: 2px;
            background: repeating-linear-gradient(to right, var(--color-orange) 0, var(--color-orange) 10px, transparent 10px, transparent 20px);
            z-index: 0;
            opacity: 0.3;
        }
        .framework-step { text-align: center; position: relative; z-index: 1; }
        .step-number {
            width: 50px;
            height: 50px;
            background: #fff;
            border: 2px solid var(--color-orange);
            color: var(--color-orange);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-heading);
            font-size: 1.2rem;
            font-weight: 800;
            margin: 0 auto 1.5rem;
        }
        .framework-step h4 { font-size: 1.2rem; margin-bottom: 0.8rem; color: #111; }
        .framework-step p { font-size: 0.9rem; color: #666; line-height: 1.6; margin: 0; }
        
        /* CTA Banner */
        .el-cta {
            position: relative;
            padding: 6rem 2rem;
            border-radius: 16px;
            overflow: hidden;
            text-align: center;
            color: #fff;
            margin: 4rem 0;
            background-image: url('assets/images/excellence.png');
            background-size: cover;
            background-position: center;
        }
        .el-cta::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.7);
            z-index: 1;
        }
        .el-cta-content { position: relative; z-index: 2; }
        .el-cta h2 { font-family: var(--font-heading); font-size: 3.5rem; margin-bottom: 2rem; font-weight: 800; }
        .el-cta-contact { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2.5rem; font-size: 1.1rem; font-weight: 600; }
        .el-cta-contact div { display: flex; align-items: center; gap: 0.5rem; }
        
        /* FAQ */
        .faq-section { max-width: 800px; margin: 0 auto; }
        .faq-item {
            border: 1px solid #eee;
            margin-bottom: 1rem;
            border-radius: 8px;
            overflow: hidden;
        }
        .faq-question {
            padding: 1.5rem;
            background: #fff;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: #111;
        }
        .faq-answer {
            padding: 0 1.5rem 1.5rem;
            background: #fff;
            color: #666;
            font-size: 0.95rem;
            line-height: 1.6;
            display: none;
        }
        
        @media (max-width: 992px) {
            .lbd-grid, .gain-grid, .mun-grid, .debate-grid, .other-formats-grid, .methodology-grid { grid-template-columns: 1fr !important; }
            .gap-grid, .beyond-grid, .framework-grid { grid-template-columns: 1fr 1fr; }
            .framework-grid::before { display: none; }
            .el-hero h1 { font-size: 3rem; }
        }
        @media (max-width: 768px) {
            .gap-grid, .beyond-grid, .framework-grid, .student-grid, .cycle-diagram, .mun-features-grid, .simulations-grid { grid-template-columns: 1fr !important; }
            .el-hero-content { padding-top: 100px; text-align: center; }
            .el-hero h1 { font-size: 2.5rem; }
            .el-hero-btns { flex-direction: column; width: 100%; }
            .el-hero-btns .btn { width: 100%; box-sizing: border-box; }
            .mun-images { grid-template-columns: 1fr; }
            .mun-img-large { grid-column: 1; }
            .el-cta h2 { font-size: 2.5rem; }
            
            /* Timeline mobile overrides */
            .timeline-line { left: 24px !important; }
            .timeline-item { padding-left: 70px !important; padding-right: 0 !important; justify-content: flex-start !important; margin-bottom: 3rem !important; }
            .timeline-content { text-align: left !important; padding-left: 0 !important; padding-right: 0 !important; }
            .timeline-icon { left: 0 !important; right: auto !important; }
            .timeline-number { display: none !important; }
        }
    ` }} />
            {isGuideModalOpen && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999,
                    display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "8px", maxWidth: "400px", width: "90%", position: "relative" }}>
                        <button onClick={() => setIsGuideModalOpen(false)} style={{ position: "absolute", top: "10px", right: "15px", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#333" }}>&times;</button>
                        <h3 style={{ marginBottom: "1.5rem", fontFamily: "var(--font-heading)", color: "#111", fontSize: "1.5rem" }}>Download Guide</h3>
                        <style>{`
                            .guide-modal-input::placeholder {
                                color: #000;
                                opacity: 1;
                            }
                            .guide-modal-input:-webkit-autofill,
                            .guide-modal-input:-webkit-autofill:hover, 
                            .guide-modal-input:-webkit-autofill:focus, 
                            .guide-modal-input:-webkit-autofill:active{
                                -webkit-box-shadow: 0 0 0 30px white inset !important;
                                -webkit-text-fill-color: #000 !important;
                            }
                        `}</style>
                        <form onSubmit={handleGuideSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <input type="text" className="guide-modal-input" placeholder="Name" required value={guideForm.name} onChange={(e) => setGuideForm({...guideForm, name: e.target.value})} style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "4px", backgroundColor: "#fff", color: "#000" }} />
                            <input type="email" className="guide-modal-input" placeholder="Email" required value={guideForm.email} onChange={(e) => setGuideForm({...guideForm, email: e.target.value})} style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "4px", backgroundColor: "#fff", color: "#000" }} />
                            <button type="submit" style={{ backgroundColor: "var(--color-orange)", color: "#fff", padding: "1rem", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer" }}>Submit & Download</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Learning;
