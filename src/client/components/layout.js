import styles from '../styles/Home.module.css'

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  
};
const headerStyle={
  minHeight: "10vh",
  backgroundColor:"grey",
}
const footerStyle={
  minHeight: "10vh",
  backgroundColor:"grey",
}

const contentStyle = {
  flex: 1,
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(7, 62, 114, 0.733)",
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <div style={headerStyle}>
      <p>Werewold Game Generator</p>
      <a href="/">Back</a>
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


