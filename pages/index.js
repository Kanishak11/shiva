import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Products from '../components/Products'
import { Team } from '../components/Team'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>SGBR</title>
      <meta name='description' content=" Shiv Ayurvedic Stores in Bhiwani Haryana, Bhiwani is one of the leading businesses in the Ayurvedic Medicine Shops" />
    </Head>
      <LandingPage />
      <Products />
      <Team/> 
      <Footer/>
    </>
  )
}