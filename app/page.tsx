import styles from './page.module.css';
import { Advantages } from './sections/advantages/Advantages';
import { Header } from './sections/header/Header';
import { Nav } from './sections/nav/Nav';
import { OurStory } from './sections/our-story/OurStory';
import { Photots } from './sections/photos/Photots';
import { Prices } from './sections/prices/Prices';
import { Teachers } from './sections/teachers/Teachers';
import { WhyUs } from './sections/why-us/WhyUs';
import { Reviews } from './sections/reviews/Reviews';
import { Career } from './sections/career/Career';
import { Gift } from './sections/gift/Gift';
import { Contacts } from './sections/contacts/Contacts';
import { QA } from './sections/qa/QA';
import { Form } from './sections/form/Form';

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <main className={styles.main}>
        <WhyUs />
        <OurStory />
        <Advantages />
        <Teachers />
        <Career />
        <Prices />
        <Form />
        <Gift />
        <QA />
        <Reviews />
        <Contacts />
        <Photots />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
