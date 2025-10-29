import Gallery from './components/Gallery';
import { PROJECTS, LAYOUT } from './data/projects';

export default function Page() {
  return (
    <>
      <section id="work" className="section">
        <div className="section__intro">
          <h2 className="section__title">MY WORK</h2>
          <p>
Welcome to my creative space. Here, you'll find a growing collection of my work, from graphic design concepts to photography projects. It's more than a portfolio—it's a  reflection of my artistic journey and continuous exploration across mediums.
          </p>
        </div>
        <Gallery projects={PROJECTS} layout={LAYOUT} />
      </section>

    </>
  );
}
