export default function content()
{
    const homeContent = document.createElement('div');

    //Attach intro
    const intro = document.createElement('div');
    intro.classList.add('intro');
    intro.textContent = `lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 
            blandit in purus sit amet auctor. Donec laoreet lacinia
            augue, sit amet placerat risus facilisis a. Praesent interdum
             scelerisque augue, id facilisis urna ornare eget. Donec ut
            pharetra ipsum, laoreet euismod mi. Pellentesque et leo id leo 
            elementum suscipit consequat in turpis. Praesent
            imperdiet nulla nulla, vel condimentum sem malesuada quis. Nam dictum 
            neque non mi malesuada, sit amet mattis arcu
            feugiat. Maecenas quis justo vitae est rhoncus aliquam vel id mauris. 
            Ut vel tempus arcu, posuere congue nunc. Nullam euismod
            tellus dictum, auctor nisi ac, ultrices urna. In hac habitasse platea 
            dictumst.`
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