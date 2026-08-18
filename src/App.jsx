import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Herosection/HeroSection.jsx'
import GamesListSection from './components/GamesListSection/GameslistSection.jsx'
import TeamSection from './components/Teamsection/TeamSection.jsx'
import NewsSection from './components/NewsSection/NewsSection.jsx'
import ChampionsSection from './components/ChampionsSection/ChampionsSection.jsx'
import Footer from './components/Footer/footer.jsx'
import GamePassGrid from './components/GamesListSection/GamePassGrid.jsx'
import OurInsights from './components/OurInsights/OurInsights.jsx'
import WhatsAppChatOverlay from './components/WhatsappChatbot/WhatsAppChatOverlay.jsx'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <GamesListSection /> */}
      <GamePassGrid />
      {/* <ChampionsSection /> */}  
      {/* <NewsSection /> */}
      {/* <TeamSection /> */}
      <OurInsights />
      <Footer />
      <WhatsAppChatOverlay />
    </>
  )
}

export default App
