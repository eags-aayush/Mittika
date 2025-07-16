import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <div>
      <HeroSection />
      <FeaturedProducts />
    </div>
    <Footer />
    </>
  )
}

export default Home
