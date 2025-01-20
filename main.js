import './styles.css';
import { setupHero } from './src/components/hero';
import { setupAbout } from './src/components/about';
import { setupSpeakers } from './src/components/speakers';
import { setupSchedule } from './src/components/schedule';
import { setupTeam } from './src/components/team';
import { setupContact } from './src/components/contact';
import { setupFooter } from './src/components/footer';

setupHero(document.querySelector('#hero'));
setupAbout(document.querySelector('#about'));
setupSpeakers(document.querySelector('#speakers'));
setupSchedule(document.querySelector('#schedule'));
setupTeam(document.querySelector('#team'));
setupContact(document.querySelector('#contact'));
setupFooter(document.querySelector('#footer'));
