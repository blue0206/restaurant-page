import iconSrc from './images/github-mark.svg';

export default function content()
{
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');
    
    
    //Attach Intro
    const intro = document.createElement('div');
    intro.classList.add('about-intro');

    const introHeading = document.createElement('h2');
    introHeading.textContent = "Welcome to Blue and Sakura's Veggie Haven!";
    intro.appendChild(introHeading);

    const introMessage = document.createElement('div');
    introMessage.textContent = (
        `We invite you to embark on a culinary journey that combines the 
        elegance of traditional Japanese cuisine with the vibrant flavors of 
        fresh, locally-sourced vegetarian ingredients. Nestled in Tokyo, our 
        serene and stylish eatery offers a tranquil escape where you can savor 
        the best of vegetarian delights.`
    );
    intro.appendChild(introMessage);
    aboutContent.appendChild(intro);


    //Attach Story
    const story = document.createElement('div');
    story.classList.add('story');

    const storyHeading = document.createElement('h2');
    storyHeading.textContent = "Our Story";
    story.appendChild(storyHeading);

    const storyContent = document.createElement('div');
    storyContent.textContent = (
        `As the owner of Blue and Sakura's Veggie Haven, I've seen our restaurant 
        blossom into a cherished sanctuary in the heart of the city. Named after 
        sakura blossoms and the ocean's serene blues, we offer dishes that blend 
        tradition with innovation, inviting guests to enjoy flavors that transcend 
        mere nourishment. Our haven isn't just about food; it's about creating a 
        tranquil escape where every meal promises moments of peace and delight, 
        reflecting our commitment to providing an unforgettable dining experience 
        centered on passion and hospitality.`
    );
    story.appendChild(storyContent);
    aboutContent.appendChild(story);


    //Attach Contact
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = "Contact Us";
    contact.appendChild(contactHeading);

    const icon = document.createElement('img');
    icon.src = iconSrc;
    icon.alt = "Github Repository";
    contact.appendChild(icon);

    const link = document.createElement('a');
    link.href = "https://github.com/blue0206/restaurant-page";
    link.textContent = "blue0206";
    contact.appendChild(link);
    aboutContent.appendChild(contact);


    return aboutContent;
};