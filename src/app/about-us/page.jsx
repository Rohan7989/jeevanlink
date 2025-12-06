"use client";

// "use client";

// import Image from "next/image";
// import "./emer.css";

// export default function AboutUs() {
//   return (
//     <div className="about-container">
//       {/* Welcome Section */}
//       <section className="welcome-section">
//         <h1 className="headline">Meet the Visionaries Behind JeevanLink</h1>
//         <p className="tagline">
//           Driven by passion, united by purpose, creating solutions for a better tomorrow.
//         </p>
//         <div className="welcome-visual">
//           {/* <Image
//             src="/images/team-group.jpg"
//             alt="Our Team"
//             width={700}
//             height={350}
//             className="team-photo"
//           /> */}
//         </div>
//       </section>

//       {/* Team Profiles */}
//       <section className="team-section">
//         <h2>👥 Our Team</h2>
//         <div className="team-grid">
//           <div className="profile-card">
//             <Image
//               src="/images/sudeep.jpg"
//               alt="Sudeep - Co-Founder"
//               width={150}
//               height={150}
//               className="profile-img"
//             />
//             <h3>Sudeep</h3>
//             <p>Visionary Leader & Strategist – solving real-life problems with tech.</p>
//             <div className="social-links">
//               <a href="https://www.linkedin.com/in/sudeep" target="_blank" rel="noopener noreferrer">
//                 LinkedIn
//               </a>
//             </div>
//           </div>

//           <div className="profile-card">
//             <Image
//               src="/images/shivaputra.jpg"
//               alt="Shivaputra - Co-Founder"
//               width={150}
//               height={150}
//               className="profile-img"
//             />
//             <h3>Shivaputra</h3>
//             <p>Operations & Community Builder – growing the donor community.</p>
//             <div className="social-links">
//               <a href="https://www.linkedin.com/in/shivaputra" target="_blank" rel="noopener noreferrer">
//                 LinkedIn
//               </a>
//             </div>
//           </div>

//           <div className="profile-card">
//             <Image
//               src="/images/yogesh.jpg"
//               alt="Yogesh - Developer"
//               width={150}
//               height={150}
//               className="profile-img"
//             />
//             <h3>Yogesh</h3>
//             <p>Full Stack Developer – building flawless features end-to-end.</p>
//             <div className="social-links">
//               <a href="https://github.com/yogesh" target="_blank" rel="noopener noreferrer">
//                 GitHub
//               </a>
//             </div>
//           </div>

//           <div className="profile-card">
//             <Image
//               src="/images/rohan.jpg"
//               alt="Rohan - Developer"
//               width={150}
//               height={150}
//               className="profile-img"
//             />
//             <h3>Rohan</h3>
//             <p>UI/UX & Backend Specialist – user-friendly design & secure systems.</p>
//             <div className="social-links">
//               <a href="https://github.com/rohan" target="_blank" rel="noopener noreferrer">
//                 GitHub
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="story-section">
//         <h2>📖 Our Story</h2>
//         <p>
//           JeevanLink was founded with a mission to save lives by connecting donors and recipients instantly.
//           From our first prototype to a growing community of donors, we’ve achieved milestones that inspire us
//           to keep innovating for the future.
//         </p>
//         <div className="story-visual">
//           {/* <Image
//             src="/images/workspace.jpg"
//             alt="Team working together"
//             width={600}
//             height={300}
//             className="story-photo"
//           /> */}
//         </div>
//       </section>

//       {/* Call-to-Action */}
//       <section className="cta-section">
//         <h2>🚀 Inspired by our journey?</h2>
//         <p>Let’s connect and create something amazing together!</p>
//         <a href="/contact" className="cta-button">Contact Us</a>
//       </section>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import "./eme.css";
import { FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";


export default function AboutUs() {
  return (
    <div className="about-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1 className="headline">Meet the Visionaries Behind JeevanLink</h1>
        <p className="tagline">
          Driven by passion, united by purpose, creating solutions for a better tomorrow.
        </p>
        
      </section>

      {/* Team Profiles */}
      <section className="team-section">
        <h2>👥 Our Team</h2>
        <div className="team-grid">
          {/* Example Profile Card */}
          <div className="profile-card">
            <div className="photo-container">
              <Image
                src="/images/sudeep.jpg"
                alt="Sudeep - Co-Founder"
                width={150}
                height={150}
                className="profile-img"
              />
            </div>
            <h3>Sudeep</h3>
            <p>Visionary Leader & Strategist – solving real-life problems with tech.</p>
            <div className="social-links">
              <a href="https://instagram.com/sudeep_nandur_" target="_blank" rel="noopener noreferrer" className="social-icon insta"><FaInstagram /></a>
              <a href="https://t.me/sudeep" target="_blank" rel="noopener noreferrer" className="social-icon telegram"><FaTelegramPlane /></a>
              <a href="https://linkedin.com/in/sudeep" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"> <FaLinkedin /></a>
            </div>
          </div>
          <div className="profile-card">
            <div className="photo-container">
              <Image
                src="/images/shivaputra.jpg"
                alt="Sudeep - Co-Founder"
                width={150}
                height={150}
                className="profile-img"
              />
            </div>
            <h3>Shivaputra</h3>
            <p>Operations & Community Builder – growing the donor community.</p>
            <div className="social-links">
              <a href="https://instagram.com/shivaputrakadla_" target="_blank" rel="noopener noreferrer" className="social-icon insta"><FaInstagram /></a>
              <a href="https://t.me/shivaputra" target="_blank" rel="noopener noreferrer" className="social-icon telegram"><FaTelegramPlane /></a>
              <a href="https://linkedin.com/in/shivaputra" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"> <FaLinkedin /></a>
            </div>
          </div>
          <div className="profile-card">
            <div className="photo-container">
              <Image
                src="/images/yogesh.jpg"
                alt="Sudeep - Co-Founder"
                width={150}
                height={150}
                className="profile-img"
              />
            </div>
            <h3>yogesh</h3>
            <p>Full Stack Developer – building flawless features end-to-end.</p>
            <div className="social-links">
              <a href="https://instagram.com/yogesh.dombale.96" target="_blank" rel="noopener noreferrer" className="social-icon insta"><FaInstagram /></a>
              <a href="https://t.me/yogesh" target="_blank" rel="noopener noreferrer" className="social-icon telegram"><FaTelegramPlane /></a>
              <a href="https://linkedin.com/in/yogesh" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"> <FaLinkedin /></a>
            </div>
          </div>
          
          <div className="profile-card">
            <div className="photo-container">
              <Image
                src="/images/rohan.jpg"
                alt="Sudeep - Co-Founder"
                width={150}
                height={150}
                className="profile-img"
              />
            </div>
            <h3>Rohan</h3>
            <p>UI/UX & Backend Specialist – user-friendly design & secure systems.</p>
            <div className="social-links">
              <a href="https://instagram.com/rohan" target="_blank" rel="noopener noreferrer" className="social-icon insta"><FaInstagram /></a>
              <a href="https://t.me/rohan" target="_blank" rel="noopener noreferrer" className="social-icon telegram"><FaTelegramPlane /></a>
              <a href="https://linkedin.com/in/rohan" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"> <FaLinkedin /></a>
            </div>
          </div>
          {/* Repeat same structure for Shivaputra, Yogesh, Rohan */}
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <h2>📖 Our Story</h2>
        <p>
          JeevanLink was founded with a mission to save lives by connecting donors and recipients instantly.
          From our first prototype to a growing community of donors, we’ve achieved milestones that inspire us
          to keep innovating for the future.
        </p>
      </section>

      {/* Call-to-Action */}
      {/* <section className="cta-section">
        <h2>🚀 Inspired by our journey?</h2>
        <p>Let’s connect and create something amazing together!</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section> */}
    </div>
  );
}
