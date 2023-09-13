import { useState } from 'react'
import Layout from './Layout';
import MyPicture from './assets/img/IMG_3870.jpg'


function Owner() {
    return (
        <Layout>
            <h1>thanachot(pp) - Group G/project7 - 49</h1>
            <img src={MyPicture} alt="" style={{ width: '200px',}}/>
            <p>Dynamic and versatile software engineer with a rich background in robotics, automation, and full-stack web development. Proven expertise in robot programming, image processing, and enterprise software development. Demonstrated ability to adapt, learn, and excel in diverse technical environments. Eager to leverage my multifaceted skill set in a forward-thinking organization.</p>
        </Layout>
    );
  }
  
  export default Owner
  