import './globals.css';

export const metadata = {
  title: 'Creative Portfolio',
  description: 'Photography & design portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h1 className="brand">Creative Portfolio</h1>
          <nav>
            <a href="/">Work</a>
            <a href="/about">About</a>
            <a href="/resume">Résumé</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main id="main" tabIndex={-1}>{children}</main>
      </body>
    </html>
  );
}
