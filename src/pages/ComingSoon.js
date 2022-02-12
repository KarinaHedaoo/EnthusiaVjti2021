import logo from "../enthuLogo.jpeg";
import styles from "./ComingSoon.module.css";

function ComingSoon() {
  return (
    <div>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className="text-5xl font-bold">ENTHUSIA, VJTI 2K21-22</h1>
      <h2 className="text-3xl font-semibold">Coming Soon!</h2>
    </div>
  );
}

export default ComingSoon;
