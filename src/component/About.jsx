import React from 'react'
import '../assets/sass/about.scss';
const About = () => {
  return (
    <div>
      <section className="about container-fluid p-0">
        <div className="row m-0 p-0 ">
          <div className="col-lg-12 p-0 m-0">
            <img src="/Portfolio-AV/img/pic1.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="abouttext">
        <div className="text container-fluid">
          <h1>/ ABOUT</h1>
          <p>John Likens is a director and designer based in New York City. Recognized with winning an Emmy Award
            for Outstanding Graphic Design and Art Direction, a SXSW Title Design Award, and a spot on Shots’
            Rising Stars list, he’s well known for crafting memorable visuals.</p>
          <p>John started his career in New York creating stunning motion graphics for commercial, film, and
            gaming clients. His passion for film has led him to design cinematic title sequences for Deadpool 2,
            Marvel’s Eternals, HBO’s “The Night Of,” HBOMax’s “Warrior,” and the award-winning titles for
            Netflix’s “Godless,” among others.</p>
          <p>John’s work also includes the holographic UI designs that appear in “Iron Man 3,” “RoboCop,” and
            “Transformers: Age of Extinction.” He provided design direction for the Netflix documentary “Mission
            Blue,” and art directed Red Bull’s first feature documentary “Blood Road.” Before Method, John
            worked as a freelancer in many top NY studios including The Mill and Framestore.</p>
          <p>If you would like to collaborate on a project, have an inquiry, or just want to say hello – please
            get in touch here.</p>
        </div>
      </section>

    </div>
  )
}

export default About
