import React from 'react';
import Dal from '../images/made.jpg';
import './image.css';



 function Image() {
    return(
        <div>
            <p>INPUT IMAGE</p>
              <img src={Dal} alt='' className='image' />
        </div>
    )
}

export default Image;