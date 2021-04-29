import styles from '../styles/Home.module.css'

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  
};
const headerStyle={
  minHeight: "10vh",
}
const footerStyle={
  minHeight: "10vh",
}

const contentStyle = {
  flex: 1,
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <div style={headerStyle}>
      <p>NOthing serious</p>
      <a href="/">Back</a>
    </div>
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <footer className={styles.footer}>
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