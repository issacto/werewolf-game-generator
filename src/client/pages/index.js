import Head from 'next/head'
import Image from "next/image"
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import WolfLogo from "../components/images/werewolf.svg"

function navigate(name){
  Router.push('/'+name)
}
export default function Home() {
  return (
    <div className = "container">
        {/* <title>Werewolf Game Generator</title> */}
        {/* <link xrel="icon" href="../components/images/werewolf.svg" /> */}

      <main className={styles.main}>
        <div className = {styles.titleBox}>
          <p className = {styles.desc}>To start a game of werewolf, press the buttons below to either open or enter a room</p>
          {/* <p className= "mainTitle"> Werewolf Game Generator</p> */}
          <WolfLogo className={styles.mainLogo}/>
        </div>
        <p className = {styles.regText}>
          If you need a refresher on the rules of werewolf, click 
          <a className = {styles.highlightLink} href = "https://www.kcl.ac.uk/" target = "_blank"> here </a>
          for the rule set
        </p>
        <br></br>
        <div>
        <div className = {styles.homeButtonContainer}>
          <button className = {styles.naviButton} onClick={()=>navigate('room/player/info')}>Enter a room</button>
          <button className = {styles.naviButton} onClick={()=>navigate('menu')}>Open a room</button>
        </div>
        
        </div>
        
      </main>

     
    </div>
  )
}
