export default function content()
{
    const homeContent = document.createElement('div');

    //Attach intro
    const intro = document.createElement('div');
    intro.classList.add('intro');
    intro.textContent = (
        `Welcome to Blue and Sakura's Veggie Haven, where Japanese culinary artistry meets 
        vegetarian innovation. Discover a sanctuary of flavors inspired by the serene beauty 
        of sakura blossoms and the calming depths of ocean blues. Located in the heart of Tokyo, 
        our restaurant invites you to indulge in a menu crafted with care, offering a harmonious 
        blend of tradition and creativity. Join us for an unforgettable dining experience where 
        every dish tells a story of passion and dedication to exquisite vegetarian cuisine.`  
    );
    homeContent.appendChild(intro);


    //Attach opening hours
    const openingHours = document.createElement('div');
    openingHours.classList.add('opening-hours');

    const heading1 = document.createElement('h2');
    heading1.textContent = "Opening Hours";
    openingHours.appendChild(heading1);

    const ul = document.createElement('ul');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i=0; i<7; i++)
    {
        let li = document.createElement('li');
        li.textContent = `${days[i]}: 8am - 11pm`;
        ul.appendChild(li);
    }
    openingHours.appendChild(ul);

    homeContent.appendChild(openingHours);


    //Attach Location
    const location = document.createElement('div');
    location.classList.add('location');

    const heading2 = document.createElement('h2');
    heading2.textContent = "Location";
    location.appendChild(heading2);

    const locationText = document.createElement('div');
    locationText.textContent = "1-15-13 Sotokanda Akihabara B&V BLDG.10F, Chiyoda 101-0021 Tokyo Prefecture";
    location.appendChild(locationText);
    
    homeContent.appendChild(location);

    return homeContent;
};