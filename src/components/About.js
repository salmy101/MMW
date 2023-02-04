import React from 'react'
import sabrine from './images/sabrine.jpg'

import "./About.css"

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <img src={sabrine} alt='sabrine'/>
        <div className='col-2'>
          <h2>Siciida Ibrahim</h2>
          <span className='line'></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet pulvinar eros. Integer consequat mollis sem sed imperdiet. Pellentesque sapien odio, commodo at mauris id, porttitor imperdiet odio. Mauris nisl purus, egestas eget interdum vitae, sollicitudin in justo. Maecenas tempus, risus sit amet lacinia placerat, nisl lectus consectetur magna, id sodales ligula urna nec eros. In vel dolor et sem dictum aliquet sit amet ac sem. Nunc sit amet tempor dui.</p>
          <p>Morbi id neque ac ante posuere faucibus. Etiam malesuada magna quis pretium consectetur. Sed porttitor in arcu non pretium. Sed eu suscipit libero. Duis sapien diam, ultrices quis iaculis imperdiet, iaculis eget orci. Nunc in luctus felis. Suspendisse potenti. Quisque eget lacus et tellus consectetur interdum. Sed ut quam at tellus posuere vulputate vitae et nisi.</p>
          <button className='button'>Meet the Team</button>
        </div>
        

      </div>

    </div>
  )
}


export default About;