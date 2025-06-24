'use client'



import AboutPage from "./Components/about";
import Contact from "./Components/contact";
import Header from "./Components/header";
import { HeroSection } from "./Components/hero/hero1";
import InternationalProjectShowcase from "./Components/project/page";
import SkillsPage from "./Components/skill";

export default function Home() {
  return (
    <div>
   
    <Header/>
    <HeroSection/>
    <SkillsPage/>
    <InternationalProjectShowcase/>
    <Contact/>
    <AboutPage/>
   
    </div>
  )}