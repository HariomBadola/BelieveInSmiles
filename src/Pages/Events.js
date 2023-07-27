import React from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar.js'
import Footer from '../Components/Footer'
import '../Pages/Events.css'
import Slider from '../Components/Slider';

const Events = () => {
  const eventData = [
    {
      imgSrc: '../images/ChaiWaterDistribution/02.jpg',
      imgAlt: 'Event 1 Image',
      title: 'Water and Tea Distribution',
      description: 'A little efforts for all those brave people working in the scorching heat of summers and chilly winter mornings, we have been distributing water, soft drinks, sharbat, juice in summ.....',
      buttonText: 'Learn More',
      link: '../Components/Slider.js',
    },
    {
      imgSrc: '../images/CleanlinessDrive/04.jpg',
      imgAlt: 'Event 2 Image',
      title: 'Cleanliness Drive',
      description: 'All the constant efforts through different schemes by government  to keep India clean states the necessity for cleanliness. All non biodigradable waste should be removed and handle .....',
      buttonText: 'Learn More',
      link: '../Components/Slider.js',
    },
    {
      imgSrc: '../images/InternationlYogaDay/02.jpg',
      imgAlt: 'Event 2 Image',
      title: 'Yoga Day',
      description: 'Rishikesh, Yoga capital of the world has one of the best spots to learn meditation and practice yoga. With Yoga in each hearts of the city, BIS celebrates Yoga Day every year on the occation of .... ',
      buttonText: 'Learn More',
      link: '../Components/Slider.js',
    },
    {
      imgSrc: '../images/Kalpana/01.jpg',
      imgAlt: 'Event 2 Image',
      title: 'Kalpana',
      description: 'Simply meaning imagination. BIS has organised this event for 2 years(2019 & 2021) specifically around the time of Holi- the festival of colours. Holi allows us to play with colours .... ',
      buttonText: 'Learn More',
      link: '../Components/Slider.js',
    },
    {
      imgSrc: '../images/KushtAshram/02.jpg',
      imgAlt: 'Event 2 Image',
      title: 'Kusht Ashram',
      description: "Kusht ashram is a leprosy center in Rishikesh. Most people that live there are elders who have been seperated from their families due to their disease. Once in a conversation with us ........ ",
      buttonText: 'Learn More',
      link: '../Components/Slider.js',
    },
    {
      imgSrc: '../images/CycleRally/02.jpg',
      imgAlt: 'Event',
      title: 'Plantation',
      description: "An oath to get nature at its best- this is not just a quote but an emotion and to keep this emotion alive, BIS team organises cycle every year on 5th of June (i.e. Environment Day), the bicycle.... ",
      buttonText: 'Learn More',
      link: '../Components/Slider.js',
    },
   
  ];

  return (
    <div>
      <Navbar/>
    <div className='outer'>
      <h5>Events</h5>

      
      <div className="Events">
        {eventData.map((event, index) => (
          <Card key={index} {...event} />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Events;
