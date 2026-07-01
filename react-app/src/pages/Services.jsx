import React from 'react';


const Services = () => {
    return (
        <>
            
    

    <header className="services-page-header"
        style={{ position: "relative", backgroundImage: "url('assets/images/services banner.png')", backgroundSize: "cover", backgroundPosition: "center", padding: "8rem 0 4rem", color: "white" }}>
        <div className="overlay"
            style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(17, 17, 17, 0.7)", zIndex: "1" }}>
        </div>
        <div className="container" style={{ position: "relative", zIndex: "2" }}>
            <h4 className="section-eyebrow" style={{ color: "var(--color-orange)" }}>OUR SERVICES</h4>
            <h1 className="section-heading" style={{ fontSize: "4rem", maxWidth: "800px", color: "white", marginBottom: "1.5rem" }}>
                Practical Solutions for Lasting Impact</h1>
            <p className="services-intro" style={{ fontSize: "1.2rem", maxWidth: "600px", color: "rgba(255,255,255,0.9)" }}>We work
                across three core practice areas, each designed to create measurable value for your organization and the
                people within it.</p>
        </div>
    </header>

    {/*  5.1 Organizational Development  */}
    <section className="service-detail-section">
        <div className="container">
            <div className="service-detail-grid">
                <div className="service-detail-image">
                    <img src="assets/images/r4.jpeg" alt="Organizational Development" className="service-img" style={{ display: "block", borderRadius: 8 }} />
                </div>
                <div className="service-detail-content">
                    <h2 style={{ color: "var(--color-orange)" }}>Organizational Development</h2>
                    <p>Is your organization generating more questions than answers? Are your teams misaligned, your
                        processes fragmented or your leadership stretched thin? ProBiz partners with leadership teams to
                        diagnose the root causes of underperformance and design targeted interventions that restore
                        clarity, build motivated teams and establish sustainable operational systems.</p>

                    <blockquote className="service-quote">
                        <p>"Our approach focuses on the human capital and existing systems of every client. We work to
                            ensure that when we disengage, your people carry the capability forward independently."</p>
                    </blockquote>

                    <ul className="service-feature-list two-columns">
                        <li>Organizational restructuring and process redesign</li>
                        <li>Leadership alignment and executive coaching</li>
                        <li>Team effectiveness and employee engagement</li>
                        <li>Change management and transformation advisory</li>
                        <li>HR systems and talent development frameworks</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/*  5.2 Business Excellence  */}
    <section className="service-detail-section alt-bg">
        <div className="container">
            <div className="service-detail-grid reverse-layout">
                <div className="service-detail-image">
                    <img src="assets/images/img6.jpeg" alt="Business Excellence" className="service-img" style={{ display: "block", borderRadius: 8 }} />
                </div>
                <div className="service-detail-content">
                    <h2 style={{ color: "var(--color-orange)" }}>Business Excellence</h2>
                    <p>Business Excellence is not a destination. It is a continuous commitment to improving performance
                        across every dimension of your organization. ProBiz guides businesses through the
                        internationally benchmarked Business Excellence framework, helping leadership teams move from
                        ambition to measurable outcomes.</p>

                    <p style={{ marginBottom: "2rem" }}>We structure the Business Excellence journey Into three stages:</p>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-left">
                                <span className="step-num">01</span>
                                <div className="step-text">
                                    <span className="step-title"
                                        style={{ fontWeight: "600", color: "var(--color-black)", display: "block" }}>Deciding to
                                        begin</span>
                                    <span className="step-desc" style={{ fontSize: "0.9rem", color: "#666" }}>Assessing readiness,
                                        setting strategic intent and building internal alignment.</span>
                                </div>
                            </div>
                            <div className="step-icon" style={{ flexShrink: "0" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-left">
                                <span className="step-num">02</span>
                                <div className="step-text">
                                    <span className="step-title"
                                        style={{ fontWeight: "600", color: "var(--color-black)", display: "block" }}>Starting
                                        the journey</span>
                                    <span className="step-desc" style={{ fontSize: "0.9rem", color: "#666" }}>Implementing the
                                        framework, embedding new practices and tracking early wins.</span>
                                </div>
                            </div>
                            <div className="step-icon" style={{ flexShrink: "0" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 22l10-4 10 4L12 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-left">
                                <span className="step-num">03</span>
                                <div className="step-text">
                                    <span className="step-title"
                                        style={{ fontWeight: "600", color: "var(--color-black)", display: "block" }}>Sustaining
                                        the journey</span>
                                    <span className="step-desc" style={{ fontSize: "0.9rem", color: "#666" }}>Building a culture
                                        of continuous improvement that endures beyond the engagement.</span>
                                </div>
                            </div>
                            <div className="step-icon" style={{ flexShrink: "0" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.92-10.26l3.08 3.19"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <p style={{ marginTop: "2rem" }}>Whether you are a growing enterprise seeking operational efficiency or
                        an established organization pursuing best-in-class performance, ProBiz will be your guide and
                        partner at every stage.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  5.3 Experiential Learning  */}
    <section className="service-detail-section">
        <div className="container">
            <div className="service-detail-grid">
                <div className="service-detail-image">
                    <img src="assets/images/exp.jpeg" alt="Experiential Learning" className="service-img" style={{ display: "block", height: "100%", borderRadius: 8 }} />
                    <div className="impact-overlay-box">
                        <h3>Impact</h3>
                        <p>Beyond the classroom learning models.</p>
                    </div>
                </div>
                <div className="service-detail-content">
                    <h2 style={{ color: "var(--color-orange)" }}>Experiential Learning</h2>
                    <p>ProBiz Knowledge Center believes that the most powerful learning happens outside the classroom.
                        Through our Experiential Learning division, we bring Model United Nations simulations,
                        structured debates and other active learning formats to schools and colleges across India and
                        beyond.</p>

                    <p>We help institutions establish Model UN societies, design and conduct debate competitions and
                        deliver structured workshops that build critical thinking, public speaking, leadership and
                        global awareness in students.</p>

                    <div style={{ marginTop: "2rem" }}>
                        <a href="learning.html" className="btn-text">Visit our dedicated Experiential Learning page <svg
                                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg></a>
                    </div>
                </div>
            </div>
        </div>
    </section>



    

    

        </>
    );
};

export default Services;
