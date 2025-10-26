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
                  Hey! I'm Nikila, a visual storyteller at heart with a passion for bringing ideas to life through art and design. I completed my Bachelor's degree in Visual Communication, where I explored everything from fine arts and graphic design to photography and video production. I'm now pursuing my Master's in Digital Marketing, blending creativity with strategy to tell impactful stories that connect with people.
                </p>
                <p>
                  Art has always been my way of expression and I'm always eager to learn and evolve. To me, creativity is about connection - taking a concept and telling a story, something that stays with people long after they've seen them.
                </p>
              </div>
            </div>
          </div>

          <div className="about-page__right-column">
            <div className="about-section">
              <h3 className="about-section__title">EDUCATION</h3>
              <div className="about-section__content">
                <p>B.Sc. Visual Communication, M.O.P. Vaishnav College | Chennai, India</p>
                <p>M.Sc. Digital Marketing Strategy, Trinity College Dublin | Dublin, Ireland</p>
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

            <div className="about-section">
              <h3 className="about-section__title">FLOW</h3>
              <div className="about-section__content">
                <p>Product</p>
                <p>Macro</p>
                <p>Landscape</p>
                <p>Portraiture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
