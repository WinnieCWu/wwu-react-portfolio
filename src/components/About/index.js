import React from 'react';
import coverImage from '../../assets/cover-image.jpg';
import developerPhoto from '../../assets/developer-photo_10.jpg';

function About() {
  return (
    <section className="my-5" id="about">
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <h1>Who am I?</h1>
      <div className="my-2">
        <img src ={developerPhoto} alt="developer photo"/>
        <h3>
        Hi everyone! My name is Winnie Wu, and I am a full stack developer with 10+ years experience as a health benefit specialist and a master's degree in Public Health. Additionally, I possess strong leadership acumen with proven skills in cross-functional collaboration and problem-solving to achieve goals in local government and non-profit environments. I am also passionate in improving access to quality services, being a life-long learner, and supporting my community.
Earned a Certificate in Full Stack Web Development from UC Berkeley Extension where I developed expertise in full stack web development, database management, and design architecture. Strengths include using technical skills, such as Node.js, React, and JavaScript, to make positive impacts.
{/* include icons of each language: Node.js, React, and Javascript. */}
Excited to combine technical training and coordination experience to continue leading teams to success and in providing top-quality services to clients! Looking forward to connecting!

        </h3>
      </div>
    </section>
  );
}

export default About;