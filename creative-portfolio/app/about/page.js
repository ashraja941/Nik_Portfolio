import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="section about-page">
      <h1 className="about-page__title">ABOUT ME</h1>
      <div className="about-page__content">
        <div className="about-card about-page__image-card">
          <div className="about-page__image-container">
            <Image
              src="https://res.cloudinary.com/dzc77rfds/image/upload/v1761617472/My_picture_jz8zam.jpg"
              alt="Portrait of Nikila"
              layout="fill"
              objectFit="cover"
              className="portrait-image"
            />
          </div>
        </div>
        <div className="about-page__text">
          <div className="about-page__left-column">
            <div className="about-section about-card">
              <h3 className="about-section__title">PERSONAL INFO</h3>
              <div className="about-section__content">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">Nikila Shanmuga Raja</span>
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
                  <span className="skill-chip">Digital Marketing</span>
                  <span className="skill-chip">Search Engine Optimization</span>
                  <span className="skill-chip">Google Ads</span>
                  <span className="skill-chip">UI/UX Design</span>
                  <span className="skill-chip">Social Media Marketing</span>
                  <span className="skill-chip">Photography</span>
                  <span className="skill-chip">Photo Editing</span>
                  <span className="skill-chip">Graphic Design</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
