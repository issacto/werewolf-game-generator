import styles from '../styles/Home.module.css'

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    NOthing serious
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