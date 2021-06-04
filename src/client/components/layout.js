import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { withRouter } from 'next/router';

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  
};
const headerStyle={
  minHeight: "13vh",
  maxHeight: "13vh",
  backgroundColor:"rgb(17, 3, 39,0.9)",
  color:"rgb(165, 199, 238)",
  display:"flex",
  justifyContent:"center",
  textAlign:"center",
  padding:"1vh",
  fontSize:"4vh"
}
const footerStyle={
  minHeight: "10vh",
  color:" rgb(165, 199, 238)",
  backgroundColor:"rgb(17, 3, 39,0.9)",
}

const contentStyle = {
  flex: 1,
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  backgroundColor: "rgb(0, 145, 255,0.8)",
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <div style={headerStyle}>
      <a href="/">
        <div style={{display:"flex",justifyContent:"center"}}>
          <p style={{marginRight:"1vh"}}>Werewolf Game Generator </p>
          <Image src="/logo.svg" width={"40vh"} height={"40vh"}/>
        </div>
      </a>
    </div>

    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    
    <footer className={styles.footer} style={footerStyle}>
      <a
        href="https://issacto.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Written by Issac To{' '}
      </a>
    </footer>
  </div>
);
  
export default Layout;


