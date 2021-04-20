import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import CounterSection from '../CounterSection/CounterSection';
import Footer from '../Footer/Footer';

import HeaderBanner from '../Header/HeaderBanner/HeaderBanner';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

import RevewSection from '../RevewSection/RevewSection';
import ServiceSection from '../ServiceSection/ServiceSection';
import TeamSection from '../TeamSection/TeamSection';



const Home = () => {
    return (
        <div>
           <HeaderNavbar/>
            <HeaderBanner/>
            <ServiceSection/>
            <AboutSection/>
            <CounterSection/>
            <RevewSection/>
            <TeamSection/>
            <ContactSection />
            <Footer/>
        </div>
    );
};

export default Home;