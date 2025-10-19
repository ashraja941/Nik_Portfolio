import EmailIcon from '../components/EmailIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import BehanceIcon from '../components/BehanceIcon';

export default function Contact() {
  return (
    <section className="section">
      <div className="container mx-auto text-center py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="mb-8 text-lg">
          Thank you for visiting my portfolio. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. If you'd like to collaborate, please don't hesitate to get in touch.
        </p>
        
        <div className="flex flex-col items-center space-y-6">

          <div className="flex items-center text-xl space-x-4">
            <EmailIcon />
            <span className="w-24 text-left">Email</span>
            <span>:</span>
            <a href="mailto:myemail@gmail.com" className="text-blue-500 hover:underline">
              myemail@gmail.com
            </a>
          </div>

          <div className="flex items-center text-xl space-x-4">
            <LinkedInIcon />
            <span className="w-24 text-left">LinkedIn</span>
            <span>:</span>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              /in/your-profile
            </a>
          </div>

          <div className="flex items-center text-xl space-x-4">
            <BehanceIcon />
            <span className="w-24 text-left">Behance</span>
            <span>:</span>
            <a href="https://www.behance.net/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              /your-profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}