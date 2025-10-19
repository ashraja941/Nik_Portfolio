import Link from 'next/link';

export default function Resume() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <p className="mb-8">
        You can download my full resume{' '}
        <Link href="/resume.pdf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          here
        </Link>
        .
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">University of Example</h3>
          <p className="text-gray-600">Bachelor of Science in Computer Science, 2018 - 2022</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div>
          <h3 className="text-xl font-semibold">Software Engineer at Tech Company</h3>
          <p className="text-gray-600">2022 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed and maintained web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
            <li>Implemented new features and fixed bugs in existing codebase.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>JavaScript (React, Node.js)</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}
