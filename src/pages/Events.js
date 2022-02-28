import logo from "../enthu-logo.png";
import styles from "./Events.module.css";

function Events() {
  return (
    <di className="py-10">
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className="text-5xl font-bold">ENTHUSIA, VJTI</h1>
      <div className="flex box-content px-6 md:w-1/2 mx-auto text-center justify-center">
      <h2 className="text-xl text-slate-200 font-sans font-semibold">Events</h2> </div>
    </di>
  );
}

export default Events;
