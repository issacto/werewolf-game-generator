import Head from 'next/head'
import Image from "next/image"
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import WolfLogo from "../components/images/wolf.svg"

function navigate(name){
  Router.push('/'+name)
}
export default function Home() {
  return (
  
    <div  >
      <Head>
        <title>Werewolf</title>
        <link xrel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Werewold Game Generator
        </h1>
        
        <WolfLogo width="20%" style={{marginTop:"1%"}}/>
        <br></br>
        <div>
        <button onClick={()=>navigate('room/player/info')}>Enter a room</button>
        <button onClick={()=>navigate('menu')}>Open a room</button>
        </div>
        
      </main>

     
    </div>
  )
}
