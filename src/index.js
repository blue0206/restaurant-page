import './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import footerIconSrc from './images/github-mark-white.svg';

const content = document.querySelector('#content');
content.appendChild(home());

const nav = document.querySelector('nav');
const tabList = document.querySelectorAll('nav > button');
nav.addEventListener('click', (evnt) => {
    switch (evnt.target.classList[0])
    {
        case 'home-btn':
            tabList[1].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            tabList[2].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            evnt.target.style.backgroundColor = "hsla(225, 46%, 95%, 0.842)";

            content.removeChild(content.lastChild);
            content.appendChild(home());
            break;
        case 'menu-btn':
            tabList[0].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            tabList[2].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            evnt.target.style.backgroundColor = "hsla(225, 46%, 95%, 0.842)";

            content.removeChild(content.lastChild);
            content.appendChild(menu());
            break;
        case 'about-btn':
            tabList[0].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            tabList[1].style.backgroundColor = "hsla(258, 100%, 67%, 0.418)";
            evnt.target.style.backgroundColor = "hsla(225, 46%, 95%, 0.842)";

            content.removeChild(content.lastChild);
            content.appendChild(about());
        default:
            break;
    }
});

const footerIcon = document.querySelector('footer a > img');
footerIcon.src = footerIconSrc;