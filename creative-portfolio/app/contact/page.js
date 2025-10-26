import EmailIcon from '../components/EmailIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import BehanceIcon from '../components/BehanceIcon';

export default function Contact() {
  return (
    <section className="section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">GET IN TOUCH</h1>
          <p className="contact-intro">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Whether you're looking for photography, design work, or marketing expertise, let's bring your vision to life.
          </p>
        </div>

        <div className="contact-grid">
          <a href="mailto:nikilasraja@gmail.com" className="contact-card">
            <div className="contact-icon">
              <EmailIcon />
            </div>
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-value">nikilasraja@gmail.com</p>
            <p className="contact-card-description">Send me a message anytime</p>
          </a>

          <a href="tel:+3530831951588" className="contact-card">
            <div className="contact-icon contact-icon-phone">
              📞
            </div>
            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-value">+353 083 195 1588</p>
            <p className="contact-card-description">Available for calls</p>
          </a>

          <a href="https://www.linkedin.com/in/nikila-s" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <LinkedInIcon />
            </div>
            <h3 className="contact-card-title">LinkedIn</h3>
            <p className="contact-card-value">@nikila-s</p>
            <p className="contact-card-description">Connect professionally</p>
          </a>

          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <BehanceIcon />
            </div>
            <h3 className="contact-card-title">Behance</h3>
            <p className="contact-card-value">View my work</p>
            <p className="contact-card-description">Explore my portfolio</p>
          </a>
        </div>

        <div className="contact-availability">
          <h3 className="availability-title">Current Availability</h3>
          <p className="availability-text">
            Currently based in Dublin, Ireland. Open to freelance projects, collaborations, and full-time opportunities in digital marketing and creative design.
          </p>
        </div>
      </div>
    </section>
  );
}