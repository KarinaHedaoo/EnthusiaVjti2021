import logo from "../enthu-logo.png";
import styles from "./About.module.css";
import Member from "../UI/Member.js";

function About() {
  return (
    <div className="about-container w-full">
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

    <div className="m-4">
      <h1 className="text-2xl">Upcoming events<span className="text-pink-700"> (Open to all)</span></h1>
      
      <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <a href="/marathon"><Member name="Marathon" alt="enthusia-marathon-poster"
        src=""/></a>
        <a href="/valorant"><Member name="Valorant" alt="enthusia-valorant-poster"
        src=""/></a>
        <a href="/bgmi"><Member name="BGMI" alt="enthusia-bgmi-poster"
        src=""/></a>
        <a href="/online-chess"><Member name="Chess" alt="enthusia-chess-poster"
        src=""/></a>

      </div>
      </div>
    </div>
  );
}

export default About;
