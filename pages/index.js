import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Products from '../components/Products'
import { Team } from '../components/Team'

export default function Home() {
  return (
    <>
      <LandingPage />
      <Products />
      <Team/> 
      <Footer/>
    </>
  )
}