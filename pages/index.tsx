import type { NextPage } from 'next'
import Head from 'next/head'
import styled from "styled-components";
import Navbar from '../components/landing/navbar'
import Body from '../components/landing/body'

const Main = styled.div`
  padding: 10px 5% 0;
  margin: auto;
  max-width: 1200px;
`
const Container = styled.div`
// background:linear-gradient(to right,rgb(34 90 255 / 95%),rgb(6 1 52));
height:100vh;
`
const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Resume Builder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Navbar/>
        <Body/>
      </Main>
     

   
    </Container>
  )
}

export default Home
