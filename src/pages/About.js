import logo from "../enthu-logo.png";
import styles from "./About.module.css";

function About() {
  return (
    <div className="about-container">
    <div className="py-10">
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className="text-5xl font-bold">ENTHUSIA, VJTI</h1>
      <div className="flex box-content px-6 md:w-1/2 mx-auto text-center justify-center">
      <h2 className="text-xl text-slate-200 font-sans font-semibold">Enthusia is VJTI’s annual sports festival, 
      generally held in the month of December. Enthusia has inter-college as well as intra-college events in
a variety of sports. Enthusia provides the students with the much-needed
physical activity amidst their busy academic schedule. We, at VJTI, are
fortunate to have a basketball court, cricket ground, football ground,
and an indoor and outdoor Gymnasium.</h2> </div>
    </div>
    </div>
  );
}

export default About;
