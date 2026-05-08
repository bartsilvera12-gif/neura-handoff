import './styles.css';
import './hero.css';
import './sections.css';
import './clients.css';
import './image-slot.js';
import { createRoot } from 'react-dom/client';
import App, { WhatsAppBubble } from './app.jsx';

createRoot(document.getElementById('app')).render(
  <>
    <App />
    <WhatsAppBubble />
  </>
);
