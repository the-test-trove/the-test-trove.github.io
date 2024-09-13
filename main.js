import './styles.css';
import { setupHero } from './src/components/hero';
import { setupAbout } from './src/components/about';
import { setupSpeakers } from './src/components/speakers';

setupHero(document.querySelector('#hero'));
setupAbout(document.querySelector('#about'));
setupSpeakers(document.querySelector('#speakers'));
