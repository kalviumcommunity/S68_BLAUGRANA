import React from "react";
import "./Landingpage.css";

const LandingPage = () => {
    return (
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <h1 className="header-title">LAMINES 304 - Football Community</h1>
          <p className="header-subtitle">Relive legendary moments, share insane goals, and celebrate football like never before! ⚽🔥</p>
        </header>
  
        {/* About Section */}
        <section className="about-section">
          <h2 className="about-title">What is Lamines 304?</h2>
          <p className="about-description">A passionate football community where fans unite to celebrate their favorite teams and players.</p>
          <ul className="about-list">
            <li className="about-item">⚡ Unfiltered clips of epic goals & skills</li>
            <li className="about-item">🔥 Last-minute game-changers & unforgettable moments</li>
            <li className="about-item">💬 Discuss tactics, transfers & match reactions</li>
            <li className="about-item">🎥 Share and relive your own football memories</li>
          </ul>
        </section>
  
        {/* Features Section */}
        <section className="features-section">
          <div className="feature-box">
            <h3 className="feature-title">🏆 Trending Clips</h3>
            <p className="feature-description">Watch the latest viral football moments from around the world.</p>
          </div>
          <div className="feature-box">
            <h3 className="feature-title">📸 Share Your Moments</h3>
            <p className="feature-description">Upload your favorite match highlights and become a part of the community.</p>
          </div>
          <div className="feature-box">
            <h3 className="feature-title">🔴 Live Match Updates</h3>
            <p className="feature-description">Stay updated with live scores, news, and transfer rumors.</p>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer className="footer">
          <p className="footer-text">© 2025 Lamines 304. Built by Football Fans, for Football Fans. ⚽❤️</p>
        </footer>
      </div>
    );
  };
  
  export default LandingPage;
  