import React from 'react';
import DotField from '../components/DotField';

const Leaders = () => {
    return (
        <>
            
    

    <div className="leaders-page-wrapper">
        
        <section className="leaders-hero" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'auto' }}>
                <DotField
                  dotRadius={1.5}
                  dotSpacing={14}
                  bulgeStrength={67}
                  glowRadius={160}
                  sparkle={true}
                  waveAmplitude={0}
                  gradientFrom="#ffccab"
                  gradientTo="#d35400"
                  glowColor="rgba(211, 84, 0, 0.1)"
                />
            </div>
            <div className="huge-pb" style={{ zIndex: 1, position: 'absolute' }}>PB</div>
            <div className="container" style={{ position: "relative", zIndex: "2", pointerEvents: 'none' }}>
                <div style={{ maxWidth: "800px" }}>
                    <h4 style={{ color: "var(--color-orange)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2rem", fontWeight: "700" }}>Meet the Team</h4>
                    <h1 className="hero-title" style={{ fontFamily: "var(--font-heading)", lineHeight: "1", marginBottom: "0.5rem", fontWeight: "800" }}>
                        Led by<br />
                        <span className="outline-text">EXPERIENCE</span>.<br />
                        Driven by<br />
                        <span style={{ color: "var(--color-orange)" }}>Purpose</span>.
                    </h1>
                </div>

                <div className="hero-desc-container" style={{ display: "flex", position: "relative", zIndex: "2" }}>
                    <div style={{ maxWidth: "400px", borderLeft: "2px solid #111", paddingLeft: "2rem" }}>
                        <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6" }}>
                            ProBiz Knowledge Center is led by professionals who have not just studied organizational development and business excellence, but have lived it across industries and geographies.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="container" style={{ padding: "4rem 2rem 0" }}>
            
            {/*  Rajit Section  */}
            <div id="rajit" className="leader-section">
                <div className="leader-img-wrapper desktop-only">
                    <div className="vertical-text left">FOUNDER & CEO</div>
                    <img src="assets/images/img11.jpeg" alt="Rajit Karunakaran" className="leader-card-img" />
                    
                    <div style={{ marginTop: "3rem" }}>
                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "0 0 0.8rem" }}>Key Industries & Geographies Served</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Worked with organizations across Manufacturing, Education, Healthcare, Retail, Technology, Services, Startups, and Public Sector Institutions.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Extensive consulting and training experience throughout India and the MENA (Middle East & North Africa) region.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Delivered leadership development, business excellence, and organizational transformation initiatives across GCC countries and India.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Supported institutions, corporations, entrepreneurs, and educational organizations in achieving strategic objectives.</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Signature Accomplishments & Client Outcomes</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Delivered his acclaimed Steve Jobs Leadership Presentation at more than 600 venues across Kerala and the GCC.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Helped organizations strengthen leadership capability, improve operational performance, and foster innovation-driven cultures.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Recognized as Regional Mentor of Change under NITI Aayog's Atal Innovation Mission.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Featured on the prestigious GEMS Mentors List for multiple consecutive years.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Mentored students, startups, educators, and business leaders to transform ideas into practical, high-impact outcomes.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Author of three published books on consulting, leadership, ethics, and corporate culture.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="leader-content">
                    <img src="assets/images/img11.jpeg" alt="Rajit Karunakaran" className="mobile-only" style={{ width: "100%", marginBottom: "1.5rem", borderRadius: "8px" }} />
                    <h4 style={{ color: "var(--color-orange)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem", fontWeight: "700" }}>EXECUTIVE LEADERSHIP</h4>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "1.5rem", fontWeight: "800", lineHeight: "1.1" }}>Rajit Karunakaran</h2>
                    
                    <p style={{ color: "#444", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "2.5rem" }}>
                        Rajit Karunakaran brings over 32 years of experience in organizational development, business consulting, and strategic transformation, helping organizations improve performance, strengthen leadership, and build sustainable growth cultures.
                    </p>
                    
                    <div style={{ borderTop: "1px solid #ddd", paddingTop: "1.5rem", marginBottom: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                        <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--color-orange)", fontWeight: "800", lineHeight: "1" }}>32+</div>
                        <div>
                            <h5 style={{ fontSize: "0.7rem", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.5px", marginBottom: "0.3rem" }}>YEARS OF IMPACT</h5>
                            <p style={{ fontSize: "0.8rem", color: "#666", margin: "0" }}>Global consulting and strategic transformation experience.</p>
                        </div>
                    </div>

                    <div style={{ paddingRight: "1rem", borderLeft: "3px solid var(--color-orange)", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                        <p style={{ fontStyle: "italic", fontSize: "1.1rem", color: "#333", margin: "0", fontWeight: "600" }}>"Aligning people, purpose, and performance."</p>
                    </div>

                    <div className="bio-details" style={{ paddingRight: "1rem", borderTop: "1px solid #eee" }}>
                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Background in Organizational Development & Consulting</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Over 32 years of experience in management consulting, organizational development, and business transformation.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Founder & CEO of ProBiz Knowledge Center, helping organizations improve performance, leadership effectiveness, and sustainable growth.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Expertise in Organizational Development, Business Excellence, Design Thinking, Strategic Transformation, and Leadership Development.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Trusted advisor to organizations seeking to align strategy, people, and processes for long-term success.</li>
                        </ul>



                        
                        <div className="mobile-only">
                            <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Key Industries & Geographies Served</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Worked with organizations across Manufacturing, Education, Healthcare, Retail, Technology, Services, Startups, and Public Sector Institutions.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Extensive consulting and training experience throughout India and the MENA (Middle East & North Africa) region.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Delivered leadership development, business excellence, and organizational transformation initiatives across GCC countries and India.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Supported institutions, corporations, entrepreneurs, and educational organizations in achieving strategic objectives.</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Signature Accomplishments & Client Outcomes</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Delivered his acclaimed Steve Jobs Leadership Presentation at more than 600 venues across Kerala and the GCC.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Helped organizations strengthen leadership capability, improve operational performance, and foster innovation-driven cultures.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Recognized as Regional Mentor of Change under NITI Aayog's Atal Innovation Mission.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Featured on the prestigious GEMS Mentors List for multiple consecutive years.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Mentored students, startups, educators, and business leaders to transform ideas into practical, high-impact outcomes.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Author of three published books on consulting, leadership, ethics, and corporate culture.</li>
                        </ul>
                        </div>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Leadership Philosophy</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Believes in aligning people, purpose, and performance to create sustainable organizational success.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Advocates co-creation, collaboration, and design thinking as drivers of innovation and transformation.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Uses mentoring, storytelling, and experiential learning to inspire growth and leadership excellence.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Focuses on empowering individuals and teams to unlock their full potential and embrace continuous improvement.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Committed to developing future-ready leaders capable of navigating change and uncertainty.</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Educational Credentials & Professional Recognition</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Holds a Postgraduate Degree.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Certified Level 2 Adobe Creative Educator.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Awarded an Honorary Fellowship by the International Association of Accounting Professionals (IAAP), UK.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Life Member of the Indian Society for Training and Development (ISTD).</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Life Member of the National Institute of Personnel Management (NIPM).</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Life Member of the Kerala Chamber of Commerce and Industry (KCCI).</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Serves as a Cyber Ambassador under the Ministry of Electronics and Information Technology (MeitY), Government of India.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Mentor on the G20 Women Mentorship Platform and Startup Advisor to the Wadhwani Foundation.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  Abhav Section  */}
            <div id="abhav" className="leader-section reverse" style={{ marginBottom: "0", paddingBottom: "6rem" }}>
                <div className="leader-content">
                    <img src="assets/images/img12.PNG" alt="Abhav R Nair" className="mobile-only" style={{ width: "100%", marginBottom: "1.5rem", borderRadius: "8px" }} />
                    <h4 style={{ color: "var(--color-orange)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem", fontWeight: "700" }}>OPERATIONAL EXCELLENCE</h4>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "2rem", fontWeight: "800", lineHeight: "1.1" }}>Abhav R Nair</h2>
                    
                    <p style={{ color: "#444", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "3rem" }}>
                        Founder & CEO of IMF, with expertise in academic diplomacy and experiential learning. Currently pursuing a B.Tech degree at MBCET.
                    </p>

                    <div style={{ borderTop: "1px solid #ddd", paddingTop: "2rem", marginBottom: "2.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                        <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--color-orange)", fontWeight: "800", lineHeight: "1" }}>COO</div>
                        <div>
                            <h5 style={{ fontSize: "0.7rem", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.5px", marginBottom: "0.3rem" }}>STRATEGIC OPERATIONS</h5>
                            <p style={{ fontSize: "0.8rem", color: "#666", margin: "0" }}>Leading the next generation of academic diplomacy.</p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#000", padding: "1.5rem 2rem", color: "#fff", marginBottom: "2rem" }}>
                        <p style={{ fontStyle: "italic", fontSize: "1.1rem", margin: "0", fontWeight: "600" }}>"Experiential learning is the pathway to future leadership."</p>
                    </div>

                    <div className="bio-details" style={{ paddingRight: "1rem", borderTop: "1px solid #eee" }}>
                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Background in Organizational Leadership & Experiential Learning</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Chief Operating Officer, ProBiz Knowledge Center</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Founder & CEO, International Matrix Foundation (IMF)</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Expertise in organizational leadership, academic diplomacy, and experiential learning</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Experienced in conference design, governance frameworks, and leadership development</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Drives operational excellence and strategic initiatives across ProBiz's experiential learning division</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Key Industries & Geographies Served</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Education and Higher Education Institutions</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Academic Simulation and Model United Nations (MUN)</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Leadership Development and Student Engagement Programs</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> International Governance and Diplomacy Platforms</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Served institutions across India</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Collaborated with organizations and universities in Europe, the Middle East, and Southeast Asia</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Strong network across IITs, NITs, international academic ecosystems, and Southeast Asia.</li>
                        </ul>



                        
                        <div className="mobile-only">
                            <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Signature Accomplishments & Client Outcomes</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Founder and CEO of the International Matrix Foundation</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Executive Board member for 60+ Model United Nations conferences.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Served at premier institutions including IIT Bombay, IIT Kharagpur, IIT Roorkee, IIT Indore, IIIT Guwahati, NIT Rourkela, NIT Agartala, NMIMS, and KIIT</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Secretary-General of Rajadhani MUN 2025, Kerala's first internationally integrated MUN conference</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Ambassador for India at International Diplomats UAE.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Helped institutions establish and strengthen MUN and experiential learning programs</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Enabled thousands of students to develop leadership, diplomacy, negotiation, and public-speaking skills</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Leadership Philosophy</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Believes in learning through experience and practical engagement</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Focuses on developing future-ready leaders with global perspectives</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Promotes collaboration, innovation, and strategic thinking</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Encourages youth empowerment through diplomacy and leadership opportunities</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Advocates excellence, accountability, and continuous learning</li>
                        </ul>
                        </div>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Educational Credentials & Professional Recognition</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Pursuing B.Tech in Electrical and Computer Engineering, Mar Baselios College of Engineering and Technology (MBCET), Thiruvananthapuram</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> UN Diploma in International Environmental Law and Governance</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> UN Diploma in International Legal Framework on Biological Diversity</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Certified by Google Project Management</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Certifications from UNESCO MGIEP, WHO, OHCHR, and the UN Office for Disarmament Affairs</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Professional simulation certifications from Siemens Mobility, Mastercard, Deloitte, and JPMorgan Chase</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Cyber Ambassador, Ministry of Electronics and Information Technology (MeitY), Government of India</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Ambassador for India at International Diplomats UAE.</li>
                        </ul>
                    </div>
                </div>

                <div className="leader-img-wrapper desktop-only">
                    <div className="vertical-text right">CHIEF OPERATING OFFICER</div>
                    <img src="assets/images/img12.PNG" alt="Abhav R Nair" className="leader-card-img" />

                    <div style={{ marginTop: "3rem" }}>
                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "0 0 0.8rem" }}>Signature Accomplishments & Client Outcomes</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Founder and CEO of the International Matrix Foundation</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Executive Board member for 60+ Model United Nations conferences.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Served at premier institutions including IIT Bombay, IIT Kharagpur, IIT Roorkee, IIT Indore, IIIT Guwahati, NIT Rourkela, NIT Agartala, NMIMS, and KIIT</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Secretary-General of Rajadhani MUN 2025, Kerala's first internationally integrated MUN conference</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Ambassador for India at International Diplomats UAE.</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Helped institutions establish and strengthen MUN and experiential learning programs</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Enabled thousands of students to develop leadership, diplomacy, negotiation, and public-speaking skills</li>
                        </ul>

                        <h4 style={{ fontSize: "0.8rem", color: "var(--color-orange)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700", margin: "1.5rem 0 0.8rem" }}>Leadership Philosophy</h4>
                        <ul style={{ listStyle: "none", padding: "0", margin: "0 0 1.5rem" }}>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Believes in learning through experience and practical engagement</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Focuses on developing future-ready leaders with global perspectives</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Promotes collaboration, innovation, and strategic thinking</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Encourages youth empowerment through diplomacy and leadership opportunities</li>
                            <li style={{ fontSize: "0.9rem", color: "#555", marginBottom: "0.6rem", paddingLeft: "1.2rem", position: "relative", lineHeight: "1.5" }}><span style={{ color: "var(--color-orange)", position: "absolute", left: "0" }}>▪</span> Advocates excellence, accountability, and continuous learning</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

        {/*  Consulting Pillars Section  */}
        <section className="pillars-section">
            <div className="container" style={{ position: "relative" }}>
                <div style={{ maxWidth: "50%" }}>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", marginBottom: "3rem", fontWeight: "700" }}>Consulting <span style={{ color: "var(--color-orange)" }}>Pillars</span></h4>
                    
                    <div className="pillar-grid">
                        <div className="pillar-item">
                            <div style={{ color: "var(--color-orange)", fontSize: "0.7rem", fontWeight: "800", marginBottom: "0.5rem" }}>01</div>
                            <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>STRATEGIC TRANSFORMATION</h5>
                            <p style={{ fontSize: "0.8rem", color: "#888", margin: "0" }}>Rewiring organizations for sustainable future growth.</p>
                        </div>
                        <div className="pillar-item">
                            <div style={{ color: "var(--color-orange)", fontSize: "0.7rem", fontWeight: "800", marginBottom: "0.5rem" }}>02</div>
                            <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>LEADERSHIP DEVELOPMENT</h5>
                            <p style={{ fontSize: "0.8rem", color: "#888", margin: "0" }}>Cultivating the next generation of visionaries.</p>
                        </div>
                        <div className="pillar-item">
                            <div style={{ color: "var(--color-orange)", fontSize: "0.7rem", fontWeight: "800", marginBottom: "0.5rem" }}>03</div>
                            <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>ACADEMIC DIPLOMACY</h5>
                            <p style={{ fontSize: "0.8rem", color: "#888", margin: "0" }}>Bridging knowledge and international relations.</p>
                        </div>
                        <div className="pillar-item">
                            <div style={{ color: "var(--color-orange)", fontSize: "0.7rem", fontWeight: "800", marginBottom: "0.5rem" }}>04</div>
                            <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.5rem" }}>EXPERIENTIAL LEARNING</h5>
                            <p style={{ fontSize: "0.8rem", color: "#888", margin: "0" }}>Learning through high-stakes real-world application.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-box">
                    <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "2rem" }}>Ready to elevate your strategy?</p>
                    <a href="join.html" className="btn btn-primary" style={{ padding: "1rem 2rem", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", fontWeight: "700" }}>
                        WORK WITH US <span>&rarr;</span>
                    </a>
                </div>
            </div>
        </section>

        

    </div>
    
    

<style dangerouslySetInnerHTML={{ __html: `
        body {
            background-color: #ffffff;
            color: #111111;
        }
        .leaders-page-wrapper {
            background-color: #ffffff;
            padding-top: 120px;
            min-height: 100vh;
            overflow-x: hidden;
        }
        /* Transparent navbar at top with black text and logo */
        .navbar:not(.scrolled) { background-color: transparent !important; box-shadow: none !important; border-bottom: none !important; }
        .navbar:not(.scrolled) .nav-links a { color: var(--color-black) !important; }
        .navbar:not(.scrolled) .nav-links a.active { color: var(--color-orange) !important; }
        .navbar:not(.scrolled) .nav-logo-img { filter: none !important; height: 60px !important; }
        .navbar:not(.scrolled) .mobile-toggle svg { stroke: var(--color-black) !important; }
        
        .mobile-only {
            display: none;
        }

        @media (max-width: 992px) {
            .desktop-only {
                display: none !important;
            }
            .mobile-only {
                display: block;
            }
            .nav-links {
                background-color: #fff;
                border-top: 1px solid #eee;
            }
            .nav-links li a {
                color: #111;
            }
        }

        .outline-text {
            color: transparent;
            -webkit-text-stroke: 1px #111;
        }

        .huge-pb {
            position: absolute;
            top: -50px;
            right: 0;
            font-size: 35rem;
            font-family: var(--font-heading);
            font-weight: 800;
            color: #fff2eb; /* Very light peach */
            line-height: 0.8;
            z-index: 0;
            pointer-events: none;
            letter-spacing: -20px;
        }

        .leaders-hero {
            padding: 4rem 0 6rem;
            position: relative;
        }
        .hero-title {
            font-size: 5rem;
        }
        .hero-desc-container {
            justify-content: flex-end;
            margin-top: -3rem;
        }

        .vertical-text {
            position: absolute;
            top: 0;
            transform: rotate(180deg);
            writing-mode: vertical-rl;
            font-family: var(--font-heading);
            font-size: 3rem;
            font-weight: 800;
            color: #f0f0f0;
            letter-spacing: 5px;
            white-space: nowrap;
            z-index: 0;
        }
        .vertical-text.left {
            left: -4rem;
        }
        .vertical-text.right {
            right: -4rem;
            transform: rotate(0deg);
        }

        .leader-img-wrapper {
            position: relative;
        }

        .leader-card-img {
            width: 100%;
            aspect-ratio: 4/4.5;
            object-fit: cover;
            filter: grayscale(100%);
            position: relative;
            z-index: 1;
        }

        .leader-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: flex-start;
            margin-bottom: 8rem;
        }

        .leader-content {
            padding: 0 0 2rem;
        }

        .accomplishment-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.8rem;
        }
        .accomplishment-line {
            width: 25px;
            height: 1px;
            background-color: var(--color-orange);
        }
        .accomplishment-text {
            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.5px;
            color: #111;
        }

        .pillars-section {
            background-color: #000;
            color: #fff;
            padding: 6rem 0;
            position: relative;
        }

        .pillar-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-top: 3rem;
        }

        .pillar-item {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 1.5rem;
        }

        .cta-box {
            background: #fff;
            color: #111;
            padding: 4rem 3rem;
            text-align: center;
            position: absolute;
            right: 5%;
            top: 0;
            transform: translateY(-50%);
            width: 400px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .site-footer-light {
            background-color: #fff;
            border-top: 1px solid #eee;
            padding: 4rem 0 2rem;
            color: #555;
        }

        @media (max-width: 992px) {
            .leader-section {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            .leader-section.reverse .leader-img-wrapper {
                order: -1;
            }
            .cta-box {
                position: relative;
                top: 0;
                transform: none;
                right: 0;
                width: 100%;
                margin-top: 4rem;
            }
            .huge-pb {
                font-size: 20rem;
                top: 0;
            }
            .hero-title {
                font-size: 3rem;
            }
            .hero-desc-container {
                justify-content: flex-start;
                margin-top: 2rem;
            }
            .vertical-text {
                display: none;
            }
        }
        @media (max-width: 576px) {
            .hero-title {
                font-size: 2.5rem;
            }
        }
    ` }} />
        </>
    );
};

export default Leaders;
