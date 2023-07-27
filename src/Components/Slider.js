import "./Slider.css";
import { useRef } from "react";
import { motion } from "framer-motion";


const Slider = ({image1,image2,image3,image4,image5,image6,image7,image8,title,description})=> {
  const ref = useRef(null);

  return (
    <div className="slider -body">
    <motion.div whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 2 }} className="outer-slider">
    <ul className= " my-list" ref={ref}>
        <li className="my-list-item"><img src={image1}/></li>
        <li className="my-list-item"><img src={image2}/></li>
        <li className="my-list-item"><img src={image3}/></li>
        <li className="my-list-item"><img src={image4}/></li>
        <li className="my-list-item"><img src={image5}/></li>
        <li className="my-list-item"><img src={image6}/></li>
        <li className="my-list-item"><img src={image7}/></li>
        <li className="my-list-item"><img src={image8}/></li>
        
      </ul>
    </motion.div>
    <div className="slider-content">
      <h5 className="title-slider">{title}</h5>
      <p className="desc-slider">
        {description}
      </p>
    </div>
      
    </div>
  );
}
export default Slider;
