export default function AboutPage() {
  return (
    <section className="section about-page">
      <h2 className="about-page__title">ABOUT ME</h2>
      <div className="about-page__content">
        <div className="about-page__image">
          <div className="about-page__portrait-placeholder">
            <div className="portrait-circle"></div>
            <span className="placeholder-text">Portrait</span>
          </div>
        </div>
        <div className="about-page__text">
          <div className="about-page__left-column">
            <div className="about-section about-card">
              <h3 className="about-section__title">PERSONAL INFO</h3>
              <div className="about-section__content">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">Nikila S</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <a href="mailto:nikilasraja@gmail.com" className="info-value info-link">nikilasraja@gmail.com</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">Dublin, Ireland</span>
                </div>
              </div>
            </div>

            <div className="about-section about-card">
              <h3 className="about-section__title">ABOUT ME</h3>
              <div className="about-section__content">
                <p>
                  Hey! I'm Nikila, a visual storyteller at heart with a passion for bringing ideas to life through art and design. I completed my Bachelor's degree in Visual Communication, where I explored everything from fine arts and graphic design to photography and video production. I'm now pursuing my Master's in Digital Marketing, blending creativity with strategy to tell impactful stories that connect with people.
                </p>
                <p>
                  Art has always been my way of expression and I'm always eager to learn and evolve. To me, creativity is about connection - taking a concept and telling a story, something that stays with people long after they've seen them.
                </p>
              </div>
            </div>
          </div>

          <div className="about-page__right-column">
            <div className="about-section about-card">
              <h3 className="about-section__title">EDUCATION</h3>
              <div className="about-section__content">
                <div className="education-item">
                  <p className="degree">B.Sc. Visual Communication</p>
                  <p className="school">M.O.P. Vaishnav College, Chennai, India</p>
                </div>
                <div className="education-item">
                  <p className="degree">M.Sc. Digital Marketing Strategy</p>
                  <p className="school">Trinity College Dublin, Dublin, Ireland</p>
                </div>
              </div>
            </div>

            <div className="about-section about-card">
              <h3 className="about-section__title">SKILLS</h3>
              <div className="about-section__content">
                <div className="skills-chips">
                  <span className="skill-chip">Photography</span>
                  <span className="skill-chip">Photo Editing</span>
                  <span className="skill-chip">Adobe Photoshop</span>
                  <span className="skill-chip">Adobe Lightroom</span>
                  <span className="skill-chip">Adobe Illustrator</span>
                </div>
              </div>
            </div>

            <div className="about-section about-card">
              <h3 className="about-section__title">FLOW</h3>
              <div className="about-section__content">
                <div className="flow-items">
                  <span className="flow-item">Product</span>
                  <span className="flow-item">Macro</span>
                  <span className="flow-item">Landscape</span>
                  <span className="flow-item">Portraiture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
