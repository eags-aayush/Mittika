// components/HeroSection.jsx
import React from 'react';
import HeroBg from '../../assets/images/Hero/hero-bg.png'

const HeroSection = () => {
    return (
        <section className="hero-section relative h-screen flex items-center justify-center text-white text-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HeroBg})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 p-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Handcrafted Elegance for Your Home
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                    Discover Unique Vases, Lamps & Wall Art, Made with Passion
                </p>
            </div>
        </section>
    );
};

export default HeroSection;