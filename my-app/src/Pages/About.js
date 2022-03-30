import React from "react";
import Map from "../components/Map";

export default function About() {
  return (
    <div>
      <Map />
      <section className="about container">
        <div className="about-details">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            impedit cumque, architecto nihil rem omnis veniam, quidem officia at
            accusamus mollitia voluptate fugiat distinctio, exercitationem
            maxime non dicta sunt placeat.
          </p>
        </div>
        <div className="about-details">
          <h2>Hours</h2>
            <h4>Open Daily</h4>
            <p className="hours">11:30am - 9:30pm</p>
        </div>
      </section>
    </div>
  );
}
