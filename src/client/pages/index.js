import Head from 'next/head'
import Layout from "../components/layout"
import styles from '../styles/Home.module.css'
import Router from 'next/router'

function navigate(){
  Router.push('/menu')

}
export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Werewolf</title>
        <link xrel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Werewold Game
        </h1>
        <button onClick={()=>navigate()}>Start</button>
      </main>

     
    </div>
    </Layout>
  )
}
