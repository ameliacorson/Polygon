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
        <h3>Hours</h3>
        <ul>
          <li>Monday: 11:30am - 9:30pm</li>
          <li>Tuesday: 11:30am - 9:30pm</li>
          <li>Wednesday: 11:30am - 9:30pm</li>
          <li>Thursday: 11:30am - 9:30pm</li>
          <li>Friday: 11:30am - 9:30pm</li>
          <li>Saturday: 11:30am - 9:30pm</li>
          <li>Sunday: 11:30am - 9:30pm</li>
        </ul>
      </section>
    </div>
  );
}
