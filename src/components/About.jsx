// About Section
import React from "react";

import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section>
      <SectionTitle command="cat">about.txt</SectionTitle>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          About CyDef Club
        </h2>
        <p className="text-lg mb-8">
          CyDef Club is a student-run organization dedicated to promoting and
          enhancing cybersecurity awareness and skills within our college
          community. We believe that cybersecurity is not just a technical
          field, but a crucial aspect of modern life that everyone should
          understand and engage with.
        </p>
        <p className="text-lg mb-8">
          Through our regular meetings, workshops, and Capture the Flag (CTF)
          events, we aim to provide a supportive and inclusive environment for
          students to learn, collaborate, and challenge themselves in the world
          of cybersecurity.
        </p>
      </div>
    </section>
  );
};

export default About;
