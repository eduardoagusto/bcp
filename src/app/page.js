// import Image from 'next/image'


import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Brands from '@/components/Brands'
import Section from '@/components/Section'
import TextScroll from '@/components/ScrollVelocity'
import InteractiveBall from '@/components/InteractiveBall'

import  LazySection  from '@/components/InteractionSection'
import WhatsAppIcon from '@/components/WhatsAppFixed'
import NavBar from '@/components/Hamburguer'


export default function Home() {
  return (
    <>
      {/* <LazySection/> */}
      <NavBar/>
      <WhatsAppIcon/>
      <HeroSection/>
      {/* <AnimatedText/>
      {/* <TextScroll/>
      <Section/>
      <Brands/> */}
      {/* <InteractiveBall/> */}
    </>  

  )
}
