import React from "react";
import Card from "../Components/Card";
import '../Pages/Stories.css'

const Stories = () => {
  const memberData = [
    {
      imgSrc: '../images/Members/nainika.jpg',
      imgAlt: 'Event 1 Image',
      title: 'Nainika',
      description:"I am a member of a social group but not a social worker. I would not sugarcoat anything here, I am not a social worker because I cannot devote my time or my energy towards anything that is not related to me. Instead I want to give up my seat on metro when I see a person tired from a strict sh*tty 9-5 job, I want to feed dogs who always wag their tails at every person passing by, I want to educate the unenlightened, I want to hug every old person in whom I see the reflection of my own grandparents, I want to clean my surroundings because they make me feel good. I do all these things for myself because it makes me content. ",
    },
      
    {
      imgSrc: '../images/Members/ishika.jpg',
      imgAlt: 'Event 1 Image',
      title: 'Ishika',
      description : "Believe in Smiles is that teacher of yours who makes you realise your purpose of life. My journey in BIS started with minimal progress but then I have learned to feel the beauty of chaos here with that only.One very vital part of being with Believe in Smiles is you never feel empty and worthless, as you keep on peddling and everytime you reach a certain point, you tend to appreciate yourself because here people believe in you .Life seems to have worth when you work for others and yourself, all of these things which I have mentioned above are taught to me by BELIEVE IN SMILES and that makes me more proud.",

    },
    {
      imgSrc: '../images/Members/samyak.jpg',
      imgAlt: 'Event 1 Image',
      title: 'Samyak',
      description: 'My journey with Believe in Smiles has been one hell of a ride. I am fortunate enough to witness and cherish the success and respect that the group has earned all these years. From working day and night to prepare for an event to enjoying in the after-parties, BIS made me the person I am today.  It made me realize the importance of expressing feelings and socialize with people. BIS and I have made countless memories together, which one can only gather while working for the society. If one can truly understand the real motive behind the establishment of BIS, he/she will surely become a better version of themselves in the future.',
    },
      
    {
      imgSrc: '../images/Members/sarthak.jpg',
      imgAlt: 'Event 1 Image',
      title: 'Sarthak',
      description: "I joined the group on Christmas of 2020. After joining this group I learnt a lot about how to get things done how stuff actually works around me I learnt about organising events from level zero . When you are happy from inside then only you can put a smile on others that's probably the most important thing that I learnt. The difference between professional and personal life was a pretty important aspect too. But overall BIS helped me grow as a person taught me so much about a lot of stuff and acted as a catalyst in lots of things all I can say is I am and will be a proud believer and try to do as much as I can to make the world a better place.",
    },
    {
      imgSrc: '../images/Members/shruti.jpg',
      imgAlt: 'Event 1 Image',
      title: 'Shruti',
      description: "When I joined BIS, my sole purpose was to learn and grow as a person. I saw everyone working for the good, contributing towards a better life, not just for themselves but for each and everyone. That was my motivation too. During the start, I attended very few events due to my introvert nature. But then after some time, I started teaching kids. And even though I did it for a short period, I learnt a lot. I loved spending that one hour of my day with them and I loved how their absurd questions made me smile. On some days after completing all the work, we used to search random questions on google and surf through the articles. ",
    },
    {
      imgSrc: '../images/Members/tanishka.jpg',
      imgAlt: 'Event 1 Image',
      title: 'Tanishka',
      description: "I've been a part of the BIS for almost 4 years now. I've learnt a lot from the experiences while working with the group. Be it working on events with the group members or spending time with the kids, it always brought a new excitement and a wave of happiness and smiles with it everytime. I joined the group for a change after facing a major setback, it helped me a lot to grow out of it. Spending time with the kids was more like a therapy to me and working on events with the members taught me a lot about teamwork. We have our own disagreements as well but at the end of the day it's the efforts that we all put into it to make things work."    },
    ]

    return (
      <div className="outerClass">
        <div className='heading1' > Stories</div>
        <div className="outerFlex">
        <div className="Story">
            {memberData.map((event, index) => (
              <Card key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
        
      );
}
export default Stories;