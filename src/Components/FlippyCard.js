import React, { useState } from 'react';
import '../Components/FlippyCard.css';


const FlippyCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='outer'>
      
          <div className='heading1' > Value we are offering ... </div>
    
    < div className={`flippy-card ${isFlipped ? 'flipped' : ''}`} onClick={handleToggle}>
              <div className="front">
                {/* Content for the front side of the card */}
                
                            <div className='imgbox'>
                              {/* Your image component goes here */}
                              <img src='../images/Plantation/01.jpg' className='imgcard'/>
                            
                          </div>
                          <div className='toggleclick'><h6>Empowerment</h6></div>
              </div>
      <div className="back">
        {/* Content for the back side of the card */}
        <div className='text-content'>
         
          <p>
            Believe in Smiles is that teacher of yours who makes you realize your purpose of life.
            My journey in BIS started with minimal progress but then I have learned to feel the beauty of chaos here with that only.
            Life seems to have worth when you work for others and yourself, all of these things which I have mentioned above are taught to me by BELIEVE IN SMILES and that makes me more proud.
          </p>
        </div>
      </div>
    </div>

    
    </div>
      
    
    
  );
};

export default FlippyCard;
