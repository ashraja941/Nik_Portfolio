import Link from 'next/link';

export default function Resume() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">NIKILA SHANMUGA RAJA</h1>
        <p className="text-gray-600 mb-6">
          nikilasraja@gmail.com · +353 083 195 1588 ·{' '}
          <a href="https://www.linkedin.com/in/nikila-s" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            LinkedIn
          </a>{' '}
          · Behance
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            Proactive and creative Digital Marketing Masters student at Trinity College Dublin. Strong background in the creative arts like photography and graphic design, with hands-on experience creating and managing social media accounts. Strong communication and decision making skills developed through college programs and leadership experience, I am consistently willing to take initiative and drive projects forward in a professional environment. I'm passionate about building powerful stories crafted with compelling visuals that effectively drive audience engagement and resonate with people long after they've seen them.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">M.Sc. Digital Marketing Strategy, Trinity College Dublin</h3>
              <p className="text-gray-600">September 2025 - September 2026</p>
            </div>
            <p className="text-gray-600 mb-2">Dublin, Ireland</p>
            <p className="text-gray-700">Modules - Marketing Intelligence and Analysis, Social Media Marketing, Digital Marketing Practice, Digital Design and User Experience, Digital Marketing Communication, Entrepreneurship, Creativity and Innovation</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">B.Sc. Visual Communication, M.O.P. Vaishnav College</h3>
              <p className="text-gray-600">August 2022 - April 2025</p>
            </div>
            <p className="text-gray-600 mb-2">Chennai, India | CGPA: 8.695</p>
            <p className="text-gray-700">Modules - Media Management, Ad Strategy and Campaign, Photography, Digital Graphic Design, Video Production</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Social Media Intern at Be and Beyond</h3>
              <p className="text-gray-600">May 2025 - July 2025</p>
            </div>
            <p className="text-gray-600 mb-2">Chennai, India</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Generated over 60,000+ views in three months on Instagram through the design and production of compelling static and video content.</li>
              <li>Monitored audience interactions and analyzed Key Performance metrics to successfully optimize engagement and expand organic reach by 10% over three months.</li>
              <li>Conducted comprehensive keyword research for organic SEO performance and Search Ads ranking of the website, leveraging AI tools to enhance data quality and streamline the research process.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Design Management and Branding Intern at RK Swamy Ltd.</h3>
              <p className="text-gray-600">April 2024 - May 2024</p>
            </div>
            <p className="text-gray-600 mb-2">Chennai, India</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Collaborated with clients including Parry (sugar) and AFAA to design branded visuals such as social media posts, brochures, logos, and mailers using Adobe Illustrator and Photoshop.</li>
              <li>Wrote and edited articles for client websites (Aditya Birla Group), conducted keyword research and implementation to drive better organic SEO results.</li>
              <li>Analyzed and reported Market Research and Audience Segmentation for EvaGirl's new product launch. Collaborated with senior designers to create concepts and moodboards for the campaign.</li>
              <li>Presented comprehensive findings and creative assets to key client teams, including high-profile groups like Orient and Birla Group, securing project alignment and confidence in proposed strategy.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Digital Design Intern at The Madras Branding Company</h3>
              <p className="text-gray-600">April 2023 - May 2023</p>
            </div>
            <p className="text-gray-600 mb-2">Chennai, India</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Developed and executed creative content for multiple client social media campaigns, informed by market trend research and assisted in the development of overall branding.</li>
              <li>Worked on the development and promotion of the agency's professional portfolio, elevating the firm's visibility and expanding the client base.</li>
              <li>Actively participated in the production of the company's community engagement initiative, developing compelling content, capturing local culture to successfully promote and demonstrate agency values.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">LEADERSHIP EXPERIENCE</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Head of Publicity for Positives - Photography Exhibition</h3>
              <p className="text-gray-600">March 2025</p>
            </div>
            <p className="text-gray-600 mb-2">M.O.P. Vaishnav College, Chennai</p>
            <p className="text-gray-700">Lead a team of 10 to promote the event on digital and print media, and designed invites, posters, banners and social media posts.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Vice President of Create Club</h3>
              <p className="text-gray-600">July 2023 - April 2024</p>
            </div>
            <p className="text-gray-600 mb-2">M.O.P. Vaishnav College, Chennai, India</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Organized college-wide events, secured sponsorships to support initiatives and coordinated with industry leaders to deliver guest sessions.</li>
              <li>Created promotional assets including posters, videos and invites for social media and print media.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Digital Marketing</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Google Ads</li>
                <li>Microsoft Excel</li>
                <li>SPSS</li>
                <li>Search Engine Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Graphic Design</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe InDesign</li>
                <li>3DS Max (3D Modelling)</li>
                <li>Canva</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Photography & Editing</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Adobe Lightroom</li>
                <li>Adobe Photoshop</li>
                <li>Video Editing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">ADDITIONAL INFORMATION</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Received several awards that include 'Best Outgoing Student', 'Overall Proficiency', and 'Best Entrepreneur at M.O.P. Bazaar' at M.O.P. Vaishnav College, Chennai.</li>
            <li>Earned a diploma in Fashion Design in August, 2024 from M.O.P. Vaishnav College, Chennai.</li>
            <li>Avid reader who enjoys dancing, baking, fashion, and pop culture.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}