import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
