import React, { Suspense } from 'react'
import HeroSection from '../components/HeroSection'
import SubSection from '../components/SubSection'
import BestSeller from '../components/BestSeller'
import LatestCollection from '../components/LatestCollection'
import Features from '../components/Features'


const Home = () => {
  return (
    <>
    <HeroSection />
    <SubSection />
    <LatestCollection />
    <BestSeller />
    <Features/>
    </>
  )
}

export default Home;