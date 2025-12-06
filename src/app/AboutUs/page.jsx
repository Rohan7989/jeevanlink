"use client"
import Image from "next/image";
import "./photo.css";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="font-bold">About Us – JeevanLink</h1>
        <p>
          JeevanLink is a platform that quickly connects people in need with blood donors. Our goal is to not waste even a single second during emergencies — because we know that every moment matters.
        </p>
      </section>

      {/* Co-Founders */}
      <section className="team-section">
        <h2>👑 Co-Founders</h2>
        <div className="team-members">
          <div className="member">
            <div className="photo-container">
              <Image
                src="/images/sudeep.jpg"
                alt="Co-Founder 1"
                width={150}
                height={150}
                className="profile-img"
              />
              <div className="photo-actions">
                <a
                  className="social-icon instagram"
                  href="https://www.instagram.com/sudeep_nandur_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram profile of Sudeep"
                >
                  <span className="tooltip">Instagram</span>
                  {/* Inline SVG to avoid extra deps */}
                  <svg
                    className="icon-svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h3>Sudeep</h3>
            <p>"Visionary Leader & Strategist – Someone who solves real-life problems using technology.</p>
          </div>

          <div className="member">
            <div className="photo-container">
              <Image
                src="/images/shivaputra.jpg"
                alt="Co-Founder 2"
                width={150}
                height={150}
                className="profile-img"
              />
              <div className="photo-actions">
                <a
                  className="social-icon instagram"
                  href="https://www.instagram.com/shivaputrakadla_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram profile of Shivaputra"
                >
                  <span className="tooltip">Instagram</span>
                  <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h3>Shivaputra</h3>
            <p>Operations & Community Builder – Ensures smooth operations and helps grow the donor community</p>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="team-section">
        <h2>💻 Developers</h2>
        <div className="team-members">
          <div className="member">
            <div className="photo-container">
              <Image
                src="/images/yogesh.jpg"
                alt="Developer 1"
                width={150}
                height={150}
                className="profile-img"
              />
              <div className="photo-actions">
                <a
                  className="social-icon instagram"
                  href="https://www.instagram.com/yogesh.dombale.96"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram profile of Yogesh"
                >
                  <span className="tooltip">Instagram</span>
                  <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h3>Yogesh</h3>
            <p>"Full Stack Developer – Expert in building flawless features from frontend to backend.</p>
          </div>

          <div className="member">
            <div className="photo-container">
              <Image
                src="/images/rohan.jpg"
                alt="Developer 2"
                width={150}
                height={150}
                className="profile-img"
              />
              <div className="photo-actions">
                <a
                  className="social-icon instagram"
                  href="https://www.instagram.com/id_hi_nahi_hai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram profile of Rohan"
                >
                  <span className="tooltip">Instagram</span>
                  <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h3>Rohan</h3>
            <p>UI/UX & Backend Specialist – User-friendly design aur secure backend systems banane mein mahir.</p>
          </div>
        </div>
      </section>

       {/* Technologies Used */}
      {/* <section className="icons-loop">
       <h2 className="font-bold">🛠️ Tools used</h2> 
  <div className="marquee">
    <div className="marquee-content">
      <img src="/icons/react.svg" alt="react" className="icon-white"/>
      <img src="/icons/github.svg" alt="github" className="icon-white"/>
      <img src="/icons/vercel.svg" alt="vercel" className="icon-white"/>
      <img src="/icons/tailwindcss.svg" alt="tailwindcss" className="icon-white" />
      <img src="/icons/next.svg" alt="nextjs" className="icon-white"/>
      <img src="/icons/mongodb.svg" alt="monodb" className="icon-white"/>
      <img src="/icons/js.svg" alt="nodejs" className="icon-white"/>
       <img src="/icons/figma.svg" alt="figma" /> 
    </div>
  </div>
</section> */}


      {/* Why We Started */}
      {/* <section className="mission-section">
        <h2 className="font-bold">💡 Why We Started</h2>
        <p>
          Hamne JeevanLink shuru kiya ek simple lekin powerful soch ke saath —
          "Jab kisi ki jaan daav par ho, technology ko uski madad karni chahiye."
        </p>
      </section> */}

      {/* Values */}
      {/* <section className="values-section">
        <h2 className="font-bold">📍 Our Values</h2>
        <ul>
          <li><strong>Speed</strong> – Emergency mein har second important hai.</li>
          <li><strong>Trust</strong> – Verified donors aur secure data handling.</li>
          <li><strong>Community</strong> – Har user ek life-saver ban sakta hai.</li>
        </ul>
      </section> */}
    </div>
  );
}



