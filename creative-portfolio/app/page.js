import Gallery from './components/Gallery';
import { PROJECTS, LAYOUT } from './data/projects';

export default function Page() {
  return (
    <>
      <section id="work" className="section">
        <div className="section__intro">
          <h2 className="section__title">MY WORK</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
          </p>
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
        </div>
        <Gallery projects={PROJECTS} layout={LAYOUT} />
      </section>

    </>
  );
}
