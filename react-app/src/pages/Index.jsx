import React from 'react';
import SplitText from '../components/SplitText';
import CircularText from '../components/CircularText';
import TextType from '../components/TextType';

import MagicBento from '../components/MagicBento';

const svg1 = <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>;
const svg2 = <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
const svg3 = <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12 2.1 7.1"></path><path d="M12 12l9.9 4.9"></path></svg>;

const serviceCards = [
  {
    color: '#120F17',
    customClass: 'card-wide-left',
    title: 'Organizational Development',
    description: 'Aligning people, processes, and leadership to create resilient, high-performing organizations that drive sustainable growth and long-term success.',
    label: '01',
    icon: svg1,
    link: { text: 'Get Started \u2192', url: '/services' }
  },
  {
    color: '#120F17',
    customClass: 'card-narrow-right',
    title: 'Business Excellence',
    description: 'Driving continuous improvement through strategic alignment, operational excellence, and performance-focused frameworks that enable sustainable growth and lasting business success.',
    label: '02',
    icon: svg2,
    link: { text: 'Learn More \u2192', url: '/services' }
  },
  {
    color: '#120F17',
    customClass: 'card-narrow-left',
    title: 'Experiential Learning',
    description: 'Transformative training programs that prioritize hands-on experience and behavioral change over theory.',
    label: '03',
    icon: svg3,
    link: { text: 'Our Approach \u2192', url: '/learning' }
  },
  {
    color: 'var(--color-orange)',
    customClass: 'card-wide-right orange-card',
    title: 'Ready for a custom strategy?',
    description: 'Our experts are available for a 30-minute consultation to map out your organization\'s unique challenges.',
    link: { text: 'CONTACT US', url: '/contact' }
  }
];

const Index = () => {
    return (
        <>
            
    

    <header id="home" className="hero-section">

        <div className="overlay"></div>
        
        <div className="container hero-container">
            <div className="hero-content">
                <h1 className="hero-headline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span className="desktop-nowrap" style={{ display: 'inline-flex', marginLeft: '-0.06em' }}>
                        <SplitText tag="span" text="Transforming Businesses." delay={30} textAlign="left" />
                    </span>
                    <span className="desktop-nowrap" style={{ display: 'inline-flex' }}>
                        <SplitText tag="span" text="Empowering People." delay={30} textAlign="left" />
                    </span>
                    <span className="desktop-nowrap" style={{ display: 'inline-flex', gap: '8px' }}>
                        <SplitText tag="span" text="Delivering" delay={30} textAlign="left" />
                        <SplitText tag="span" text="Excellence." delay={30} className="highlight italic" textAlign="left" />
                    </span>
                </h1>
                <p className="hero-subheadline">
                    Bridging global strategy and local agility. As your boutique consultancy partner, we drive sustainable growth through people-centric excellence.
                </p>
                <div className="hero-buttons">
                    <a href="/contact" className="btn btn-primary">CONTACT US</a>
                    <a href="/services" className="btn btn-secondary">EXPLORE WHAT WE DO</a>
                </div>
            </div>
            
            <div className="hero-stats-card-wrapper">
                <div className="hero-stats-card glass-panel-dark">
                    <div className="stat-item border-bottom">
                        <div className="stat-icon orange-bg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-3 3-3-3m6 0V3m0 12l3-3 3 3"></path><circle cx="12" cy="10" r="4"></circle><path d="M12 2v2"></path><path d="M12 16v6"></path><path d="M8 18h8"></path></svg>
                        </div>
                        <div className="stat-text">
                            <h2>15+</h2>
                            <p>YEARS COMBINED</p>
                        </div>
                    </div>
                    <div className="stat-item border-bottom">
                        <div className="stat-icon dark-bg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div className="stat-text">
                            <h2>500+</h2>
                            <p>IMPACT STORIES</p>
                        </div>
                    </div>
                    <div className="stat-quote">
                        "Crafting legacy organizations through precision strategy."
                    </div>
                </div>
                <div className="card-edge-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
            </div>
        </div>
    </header>
    


    <section id="about" className="about-section">
        <div className="container about-container">
            <div className="about-image-column">
                <div className="image-wrapper">
                    <div className="image-backdrop"></div>
                    <img src="assets/images/who_we_are.png" alt="Strategy Documents" className="about-img" />
                    <div className="bespoke-badge">
                        <h3>100%</h3>
                        <p>BESPOKE</p>
                    </div>
                </div>
            </div>
            
            <div className="about-content-column">
                <h4 className="section-eyebrow">WHO WE ARE</h4>
                <h2 className="section-heading">
                    <TextType 
                        text="A Different Kind of Consulting Partner"
                        typingSpeed={50}
                        loop={false}
                        showCursor={false}
                        as="span"
                        startOnVisible={true}
                    />
                </h2>
                
                <div className="about-text" style={{ minHeight: '350px' }}>
                    <TextType 
                        text={`ProBiz Knowledge Center was founded on a simple belief: real change does not happen through slide decks delivered and forgotten. It happens when consultants roll up their sleeves alongside their clients and work through every challenge together.\n\nWe are a Trivandrum-based consulting practice with deep roots in organizational development and a growing footprint in business excellence and experiential learning. Drawing on lateral thinking methodologies and cross-cultural expertise across India and the GCC region, we bring a perspective that is both globally informed and locally grounded.\n\nWhen you engage ProBiz, we do not arrive with a generic playbook. We take time to understand your business, your people and your systems before we co-design solutions with you. Our goal is to leave your organization stronger, more agile and fully equipped to continue growing without us.`}
                        typingSpeed={15}
                        loop={false}
                        showCursor={false}
                        hideCursorWhileTyping={false}
                        as="p"
                        startOnVisible={true}
                    />
                </div>
            </div>
        </div>
    </section>

    <section className="leaders-section">
        <div className="container leaders-container">
            <div className="leader-card card-light">
                <div className="leader-image-wrapper">
                    <img src="assets/images/img11.jpeg" alt="Rajit Karunakaran" className="leader-img" />
                </div>
                <div className="leader-info">
                    <h3>Rajit Karunakaran</h3>
                    <h5 className="role-title">FOUNDER & LEAD CONSULTANT</h5>
                    <p>Specializing in Strategic OD and GCC market operations with a focus on sustainable growth and people excellence.</p>
                </div>
            </div>
            
            <div className="leader-card card-light">
                <div className="leader-image-wrapper">
                    <img src="assets/images/img12.PNG" alt="Abhav R Nair" className="leader-img" />
                </div>
                <div className="leader-info">
                    <h3>Abhav R Nair</h3>
                    <h5 className="role-title">CO-FOUNDER & HEAD OF OPERATIONS</h5>
                    <p>Expert in Business Excellence and Lean methodologies, transforming complex operational hurdles into competitive advantages.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="services" className="services-section">
        <div className="container services-container">
            <div className="services-header">
                <div className="services-header-left">
                    <h4 className="section-eyebrow">Our Services</h4>
                    <h2 className="section-heading">Practical Solutions for Lasting Impact</h2>
                    <p className="services-intro">We work across three core practice areas, each designed to create measurable value for your organization and the people within it.</p>
                </div>
                <div className="services-header-right">
                    <a href="/services" className="btn btn-outline">VIEW ALL SERVICES</a>
                </div>
            </div>

            <div className="services-grid" style={{ display: 'block', padding: '0', maxWidth: '100%' }}>
                <MagicBento 
                    cards={serviceCards}
                    textAutoHide={false}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="255, 122, 0"
                />
            </div>
        </div>
    </section>

    <section id="industries" className="industries-section">
        <div className="container">
            <div className="industries-header">
                <h4 className="section-eyebrow">INDUSTRIES WE SERVE</h4>
                <h2 className="section-heading">Across Sectors. Across Borders.</h2>
                <p className="section-intro">ProBiz has delivered consulting engagements across a wide range of industries. Our collective team expertise spans almost every major sector, and we tailor our approach to the specific operating context of each client.</p>
            </div>
            
            <div className="industries-grid">
                <div className="industry-item">
                    <div className="industry-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                    </div>
                    <h3>Logistics and Supply Chain</h3>
                </div>
                
                <div className="industry-item">
                    <div className="industry-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </div>
                    <h3>Banking and Financial Services</h3>
                </div>
                
                <div className="industry-item">
                    <div className="industry-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <h3>Education and Training</h3>
                </div>
                
                <div className="industry-item">
                    <div className="industry-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                    </div>
                    <h3>Healthcare</h3>
                </div>
                
                <div className="industry-item">
                    <div className="industry-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                    </div>
                    <h3>Investments and Asset Management</h3>
                </div>
                
                <div className="industry-item">
                    <div className="industry-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </div>
                    <h3>Retail and Consumer Services</h3>
                </div>
            </div>
        </div>
    </section>

    <section id="impact" className="impact-section">
        <div className="container impact-container">
            <div className="impact-top">
                <div className="impact-content">
                    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>

                        <div style={{ position: 'absolute', right: '0', top: '-60px', zIndex: 10 }} className="desktop-only">
                            <CircularText
                                text="* THE * PROBIZ * APPROACH "
                                onHover="speedUp"
                                spinDuration={20}
                                className=""
                            />
                        </div>
                    </div>
                    <h2 className="section-heading">We Partner. We Execute. <span style={{ whiteSpace: "nowrap" }}>We Deliver.</span></h2>
                    <div className="impact-text">
                        <p>Our approach is built on a straightforward philosophy: your people and your systems are your greatest assets. Every ProBiz engagement begins with listening, not prescribing.</p>
                        <p>We partner with you to identify the real problems beneath the surface, co-design solutions that fit your culture and resource context, and then work shoulder to shoulder with your team to bring those solutions to life. When the engagement concludes, your executives and systems are capable of sustaining and building on everything we have built together.</p>
                    </div>
                </div>
                <div className="impact-stats">
                    <div className="stat-box">
                        <h3 className="stat-number">12+</h3>
                        <p>Industries served across India and the GCC</p>
                    </div>
                    <div className="stat-box">
                        <h3 className="stat-number">50+</h3>
                        <p>Organizational transformations delivered</p>
                    </div>
                    <div className="stat-box">
                        <h3 className="stat-number">25+</h3>
                        <p>Years of combined consulting experience</p>
                    </div>
                    <div className="stat-box">
                        <h3 className="stat-number">5+</h3>
                        <p>Countries of cross-cultural project exposure</p>
                    </div>
                </div>
            </div>

            <div className="testimonial-block">
                <div className="quote-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--color-orange)" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p className="testimonial-text">"OCS recognizes the continuous evolution of the logistics industry and acknowledged the urgency to plan, develop and deploy the best practices to ensure the highest levels of competitiveness and customer experience standards. We are honored to have partnered with Rajit Karunakaran from ProBiz Knowledge Center to develop and deploy an agile organizational structure to empower the company with the required ecosystem to innovate and excel."</p>
                <div className="testimonial-author">
                    <img src="assets/images/partnership_globe.png" alt="Partnership Graphic" className="testimonial-graphic" />
                    <h4>OCS Kuwait</h4>
                    <p>Client Partnership</p>
                </div>
            </div>
        </div>
    </section>

    <section id="leaders" className="leaders-detailed-section">
        <div className="container">
            <div className="leaders-header">
                <h4 className="section-eyebrow">Meet the Team</h4>
                <h2 className="section-heading">Led by Experience. Driven by Purpose.</h2>
                <p className="leaders-intro">ProBiz Knowledge Center is led by professionals who have not just studied organizational development and business excellence but have lived it across industries and geographies.</p>
            </div>

            {/*  Rajit Profile  */}
            <div className="leader-profile">
                <div className="leader-profile-image framed">
                    <img src="assets/images/img11.jpeg" alt="Rajit Karunakaran" className="leader-portrait" />
                    <div className="leader-badge right-badge">★</div>
                </div>
                <div className="leader-profile-content">
                    <TextType as="h3" className="leader-name" text="Rajit Karunakaran" loop={false} startOnVisible={true} showCursor={false} />
                    <h5 className="leader-title">FOUNDER & CEO, PROBIZ KNOWLEDGE CENTER</h5>
                    <div className="leader-short-bio">
                        <p>Rajit is a seasoned organizational development consultant with over 32 years of experience across Asia and the Middle East. He has successfully led large-scale transformation projects for Fortune 500 companies, focusing on leadership alignment and operational excellence.</p>
                        <p className="small-text">His philosophy centers on empowering human capital to drive sustainable growth. Under his guidance, ProBiz has evolved into a powerhouse for corporate strategy and cultural transformation.</p>
                        
                        <ul className="short-bio-list">
                            <li>32+ Years Cross-Industry Expertise</li>
                            <li>Global Strategic Advisor</li>
                            <li>Leadership Transformation Architect</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  Abhav Profile  */}
            <div className="leader-profile reverse-layout">
                <div className="leader-profile-image framed">
                    <img src="assets/images/img12.PNG" alt="Abhav R Nair" className="leader-portrait" />
                    <div className="leader-badge left-badge">⚡</div>
                </div>
                <div className="leader-profile-content">
                    <TextType as="h3" className="leader-name" text="Abhav R Nair" loop={false} startOnVisible={true} showCursor={false} />
                    <h5 className="leader-title">CHIEF OPERATING OFFICER, PROBIZ KNOWLEDGE CENTER</h5>
                    <div className="leader-short-bio">
                        <p>Abhav brings a wealth of operational expertise to ProBiz, specializing in scaling business engagements and managing complex delivery frameworks. With a background in business excellence and strategic operations, he ensures that ProBiz's internal systems are as robust and efficient as the solutions provided to clients.</p>
                        <p className="small-text">His focus on operational integrity allows the consulting teams to deliver exceptional value seamlessly, maintaining the high standards ProBiz is known for.</p>
                        
                        <ul className="short-bio-list">
                            <li>Operational Strategy Specialist</li>
                            <li>Complex Delivery Frameworks</li>
                            <li>Certified Business Excellence Professional</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="value" className="value-section">
        <div className="container value-container">
            <div className="value-content">
                <h4 className="section-eyebrow">OUR VALUE PROPOSITION</h4>
                <h2 className="section-heading">Why ProBiz?</h2>
                <p className="value-intro">ProBiz is built on a co-design and co-execution model. We don't leave you with just a report and wish you good luck. We stay involved through implementation, ensuring that every solution we design together is successfully delivered.</p>
                
                <p className="value-subheading">Our value is created through:</p>
                
                <ul className="value-list">
                    <li>
                        <div className="list-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
                        <span>Bottom-line growth through targeted operational improvement</span>
                    </li>
                    <li>
                        <div className="list-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="14" x2="21" y2="3"></line><polyline points="8 21 3 21 3 16"></polyline><line x1="20" y1="10" x2="3" y2="21"></line></svg></div>
                        <span>Agile systems and processes that adapt to change rather than resist it</span>
                    </li>
                    <li>
                        <div className="list-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                        <span>Motivated employees through structured engagement and recognition frameworks</span>
                    </li>
                    <li>
                        <div className="list-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                        <span>Cross-cultural perspectives from extensive work across India and the GCC</span>
                    </li>
                    <li>
                        <div className="list-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21h6"></path><path d="M12 21v-4"></path><path d="M12 17A7 7 0 1 0 5 10c0 2 1.2 3.8 3 4.9v2.1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.1c1.8-1.1 3-2.9 3-4.9A7 7 0 0 0 12 3z"></path></svg></div>
                        <span>Innovation and collaboration embedded into teams through the latest OD techniques</span>
                    </li>
                </ul>
                
                <div className="value-conclusion">
                    <p>ProBiz brings in-depth industry knowledge, technical expertise and transformational change insights to every engagement. We are practitioners first and consultants second.</p>
                </div>
            </div>
            
            <div className="value-image">
                <img src="assets/images/value_prop.png" alt="Transformation and Growth" className="value-img" />
            </div>
        </div>
    </section>

    

    

        </>
    );
};

export default Index;
