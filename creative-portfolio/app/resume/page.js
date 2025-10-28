import Link from 'next/link';

export default function Resume() {
  return (
    <section className="section">
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="resume-name">NIKILA SHANMUGA RAJA</h1>
          <div className="resume-contact">
            <a href="mailto:nikilasraja@gmail.com" className="contact-link">
              nikilasraja@gmail.com
            </a>
            <span className="divider">·</span>
            <a href="tel:+3530831951588" className="contact-link">
              +353 083 195 1588
            </a>
            <span className="divider">·</span>
            <a href="https://www.linkedin.com/in/nikila-s" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
            <span className="divider">·</span>
            <a href="https://www.behance.net/nikilasraja" target="_blank" rel="noopener noreferrer" className="contact-link">Behance</a>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">PROFESSIONAL SUMMARY</h2>
          <div className="resume-card">
            <p className="resume-summary">
              Proactive and creative Digital Marketing Masters student at Trinity College Dublin. Strong background in the creative arts like photography and graphic design, with hands-on experience creating and managing social media accounts. Strong communication and decision making skills developed through college programs and leadership experience, I am consistently willing to take initiative and drive projects forward in a professional environment. I'm passionate about building powerful stories crafted with compelling visuals that effectively drive audience engagement and resonate with people long after they've seen them.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">EDUCATION</h2>
          
          <div className="resume-card">
            <div className="education-header">
              <h3 className="education-title">M.Sc. Digital Marketing Strategy, Trinity College Dublin</h3>
              <span className="education-dates">September 2025 - September 2026</span>
            </div>
            <p className="education-location">Dublin, Ireland</p>
            <p className="education-modules">Modules - Marketing Intelligence and Analysis, Social Media Marketing, Digital Marketing Practice, Digital Design and User Experience, Digital Marketing Communication, Entrepreneurship, Creativity and Innovation</p>
          </div>

          <div className="resume-card">
            <div className="education-header">
              <h3 className="education-title">B.Sc. Visual Communication, M.O.P. Vaishnav College</h3>
              <span className="education-dates">August 2022 - April 2025</span>
            </div>
            <p className="education-location">Chennai, India | CGPA: 8.695</p>
            <p className="education-modules">Modules - Media Management, Ad Strategy and Campaign, Photography, Digital Graphic Design, Video Production</p>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">PROFESSIONAL EXPERIENCE</h2>
          
          <div className="resume-card">
            <div className="experience-header">
              <h3 className="experience-title">Social Media Intern at Be and Beyond</h3>
              <span className="experience-dates">May 2025 - July 2025</span>
            </div>
            <p className="experience-location">Chennai, India</p>
            <ul className="experience-list">
              <li>Generated over 60,000+ views in three months on Instagram through the design and production of compelling static and video content.</li>
              <li>Monitored audience interactions and analyzed Key Performance metrics to successfully optimize engagement and expand organic reach by 10% over three months.</li>
              <li>Conducted comprehensive keyword research for organic SEO performance and Search Ads ranking of the website, leveraging AI tools to enhance data quality and streamline the research process.</li>
            </ul>
          </div>

          <div className="resume-card">
            <div className="experience-header">
              <h3 className="experience-title">Design Management and Branding Intern at RK Swamy Ltd.</h3>
              <span className="experience-dates">April 2024 - May 2024</span>
            </div>
            <p className="experience-location">Chennai, India</p>
            <ul className="experience-list">
              <li>Collaborated with clients including Parry (sugar) and AFAA to design branded visuals such as social media posts, brochures, logos, and mailers using Adobe Illustrator and Photoshop.</li>
              <li>Wrote and edited articles for client websites (Aditya Birla Group), conducted keyword research and implementation to drive better organic SEO results.</li>
              <li>Analyzed and reported Market Research and Audience Segmentation for EvaGirl's new product launch. Collaborated with senior designers to create concepts and moodboards for the campaign.</li>
              <li>Presented comprehensive findings and creative assets to key client teams, including high-profile groups like Orient and Birla Group, securing project alignment and confidence in proposed strategy.</li>
            </ul>
          </div>

          <div className="resume-card">
            <div className="experience-header">
              <h3 className="experience-title">Digital Design Intern at The Madras Branding Company</h3>
              <span className="experience-dates">April 2023 - May 2023</span>
            </div>
            <p className="experience-location">Chennai, India</p>
            <ul className="experience-list">
              <li>Developed and executed creative content for multiple client social media campaigns, informed by market trend research and assisted in the development of overall branding.</li>
              <li>Worked on the development and promotion of the agency's professional portfolio, elevating the firm's visibility and expanding the client base.</li>
              <li>Actively participated in the production of the company's community engagement initiative, developing compelling content, capturing local culture to successfully promote and demonstrate agency values.</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">LEADERSHIP EXPERIENCE</h2>
          
          <div className="resume-card">
            <div className="leadership-header">
              <h3 className="leadership-title">Head of Publicity for Positives - Photography Exhibition</h3>
              <span className="leadership-dates">March 2025</span>
            </div>
            <p className="leadership-location">M.O.P. Vaishnav College, Chennai</p>
            <ul className="experience-list">
              <li> Lead a team of 10 to promote the event on digital and print media, and designed invites, posters, banners and social media posts. </li> 
            </ul>
          </div>

          <div className="resume-card">
            <div className="leadership-header">
              <h3 className="leadership-title">Chief Journal Editor for department journal</h3>
              <span className="leadership-dates">July 2024 - April 2025</span>
            </div>
            <p className="leadership-location">M.O.P. Vaishnav College, Chennai</p>
            <ul className="experience-list">
              <li> Managed the editorial team of 7 to collect, review and edit articles, artwork and photographs by students.  </li>
              <li> Compiled and designed the annual department journal ‘Thumbnail’ using Adobe Photoshop and InDesign.  </li>
            </ul>
          </div>

          <div className="resume-card">
            <div className="leadership-header">
              <h3 className="leadership-title">Vice President of Create Club</h3>
              <span className="leadership-dates">July 2023 - April 2024</span>
            </div>
            <p className="leadership-location">M.O.P. Vaishnav College, Chennai, India</p>
            <ul className="experience-list">
              <li>Organized college-wide events, secured sponsorships to support initiatives and coordinated with industry leaders to deliver guest sessions.</li>
              <li>Created promotional assets including posters, videos and invites for social media and print media.</li>
            </ul>
          </div>

        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">SKILLS</h2>
          <div className="resume-card">
            <div className="skill-category">
              <h3 className="skill-category-title">Digital Marketing</h3>
              <div className="skills-chips">
                <span className="skill-chip">Google Ads</span>
                <span className="skill-chip">Microsoft Excel</span>
                <span className="skill-chip">SPSS</span>
                <span className="skill-chip">Search Engine Optimization</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Graphic Design</h3>
              <div className="skills-chips">
                <span className="skill-chip">Adobe Illustrator</span>
                <span className="skill-chip">Adobe Photoshop</span>
                <span className="skill-chip">Adobe InDesign</span>
                <span className="skill-chip">3DS Max (3D Modelling)</span>
                <span className="skill-chip">Canva</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Photography & Editing</h3>
              <div className="skills-chips">
                <span className="skill-chip">Adobe Lightroom</span>
                <span className="skill-chip">Adobe Photoshop</span>
                <span className="skill-chip">Video Editing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="resume-section-title">ADDITIONAL INFORMATION</h2>
          <div className="resume-card">
            <ul className="info-list">
              <li>Received several awards that include 'Best Outgoing Student', 'Overall Proficiency', and 'Best Entrepreneur at M.O.P. Bazaar' at M.O.P. Vaishnav College, Chennai.</li>
              <li>Earned a diploma in Fashion Design in August, 2024 from M.O.P. Vaishnav College, Chennai.</li>
              <li>Avid reader who enjoys dancing, baking, fashion, and pop culture.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
