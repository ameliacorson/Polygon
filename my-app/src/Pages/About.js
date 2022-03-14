import React from "react";
import Map from "../components/Map";

export default function About() {
  return (
    <div>
       <Map />
      <section className="about container">
        <h2>
          About <span>Us</span>
        </h2>
        <div className="about-details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            impedit cumque, architecto nihil rem omnis veniam, quidem officia at
            accusamus mollitia voluptate fugiat distinctio, exercitationem
            maxime non dicta sunt placeat.
          </p>
        </div>
      </section>
    </div>
  );
}
