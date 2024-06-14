import './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import footerIconSrc from './images/github-mark-white.svg';

const content = document.querySelector('#content');
content.appendChild(home());

const nav = document.querySelector('nav');
nav.addEventListener('click', (evnt) => {
    switch (evnt.target.classList[0])
    {
        case 'home-btn':
            content.removeChild(content.lastChild);
            content.appendChild(home());
            break;
        case 'menu-btn':
            content.removeChild(content.lastChild);
            content.appendChild(menu());
            break;
        case 'about-btn':
            content.removeChild(content.lastChild);
            content.appendChild(about());
        default:
            break;
    }
});

const footerIcon = document.querySelector('footer a > img');
footerIcon.src = footerIconSrc;