import React, { useEffect } from 'react';
import './App.css'; // For your custom styles

const App = () => {
  useEffect(() => {
    const text = "Welcome to Seth Wijeratne's Website!";
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust speed here (milliseconds)
      }
    }

    typeWriter(); // Call typewriter effect when component mounts
  }, []);

  return (
    <div className="container">
      <h1 id="typewriter"></h1>
      <div className="image">
        <img src="https://via.placeholder.com/150" alt="Seth's Profile Picture" />
      </div>
      <h2>About</h2>
      <p>Hello, I'm Seth Wijeratne! I’m currently a senior at Newbury Park High School (NPHS) and excited to be finishing this chapter of my life. Here, you'll find a little bit about me, my interests, and what I hope to do in the future.</p>
      <p>Connect with me below:</p>
      
      <h2>Experiences</h2>
      <div className="experience-section">
        <div className="experience">
          <h3>Chief, Ventura County Medical Explorer Post</h3>
          <p>As the Chief of the Ventura County Medical Explorer Post, I manage a team of over 60 explorers and coordinate activities such as surgery shadowing, speaker sessions, and workshops with healthcare professionals. Under my leadership, the program has expanded from 30 to 60 members. I also oversee the week-long Explorer Academy for new members and represent the program at community events such as the Los Robles CEO welcome function and Boys Scout events.</p>
        </div>
        
        <div className="experience">
          <h3>Intern, Primary Care Physician’s Clinic</h3>
          <p>In this role, I shadow an internal medicine doctor weekly to gain insights into how a family medicine practice operates. I observe patient screenings and the overall doctor-patient relationship. Additionally, I help with front-office tasks such as checking in patients, directing them to procedure rooms, and supporting nursing staff. This experience has strengthened my understanding of healthcare from both a medical and administrative perspective.</p>
        </div>

        <div className="experience">
          <h3>Director, Short Film</h3>
          <p>I directed a short film, where I built homemade camera equipment such as stands and mounts out of PVC pipes and wood to capture specific shots. I also used DaVinci Resolve to edit the footage, utilized green screens for special effects, and managed all aspects of production, including scriptwriting, casting, and finding filming locations. This project helped me develop creative problem-solving and leadership skills.</p>
        </div>

        <div className="experience">
          <h3>Intern, Kratos Energy Solutions</h3>
          <p>As an intern at Kratos Energy Solutions, I worked with a consultant to measure harmful ultraviolet and infrared wavelengths in lights. My role involved charting the collected data and developing a repeatable procedure for future use. This internship allowed me to apply scientific concepts to real-world challenges, enhancing my skills in research and data analysis.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
