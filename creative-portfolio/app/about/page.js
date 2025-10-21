export default function AboutPage() {
  return (
    <section className="section about-page">
      <h2 className="about-page__title">ABOUT ME</h2>
      <div className="about-page__content">
        <div className="about-page__image">
          <div className="about-page__portrait-placeholder">
            <span className="placeholder-text">Portrait Image</span>
          </div>
        </div>
        <div className="about-page__text">
          <div className="about-page__left-column">
            <div className="about-section">
              <h3 className="about-section__title">PERSONAL INFO</h3>
              <div className="about-section__content">
                <p>Name: Nikila S</p>
                <p>Email: nikilasraja@gmail.com</p>
                <p>Address: Dublin, Ireland</p>
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section__title">ABOUT ME</h3>
              <div className="about-section__content">
                <p>
                  I am a visual storyteller with a passion for art and design. I hold a Bachelor's degree in Visual Communication and am currently pursuing a Master's in Digital Marketing. My journey in the creative field began over a decade ago, and since then, I've had the privilege of working on a diverse range of projects, from brand identities to captivating visual narratives.
                </p>
                <p>
                  I believe that art is a powerful form of expression and creativity is the bridge that connects us all. Whether I'm behind the lens or in front of a blank canvas, my goal is to craft experiences that resonate and inspire. Have a project in mind? Let's create something amazing together.
                </p>
              </div>
            </div>
          </div>

          <div className="about-page__right-column">
            <div className="about-section">
              <h3 className="about-section__title">EDUCATION</h3>
              <div className="about-section__content">
                <p>B.Sc. Visual Communication</p>
                <p>M.O.P. Vaishnav College | Chennai, India</p>
                <p>M.Sc. Digital Marketing Strategy</p>
                <p>Trinity College Dublin | Dublin, Ireland</p>
              </div>
            </div>

            <div className="about-section">
              <h3 className="about-section__title">SKILLS</h3>
              <div className="about-section__content">
                <p>Photography, Photo Editing</p>
                <p>Adobe Photoshop</p>
                <p>Adobe Lightroom</p>
                <p>Adobe Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
