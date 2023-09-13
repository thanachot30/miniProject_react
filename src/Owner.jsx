import { useState } from 'react'
import Layout from './Layout';
import MyPicture from './assets/img/IMG_3870.jpg'


function Owner() {
    return (
        <Layout>
            <h1>thanachot(pp) - Group G/project7 - 49</h1>
            <img src="data:image/jpeg;base64,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" alt="" style={{ width: '200px',}}/>
            <p>Dynamic and versatile software engineer with a rich background in robotics, automation, and full-stack web development. Proven expertise in robot programming, image processing, and enterprise software development. Demonstrated ability to adapt, learn, and excel in diverse technical environments. Eager to leverage my multifaceted skill set in a forward-thinking organization.</p>
        </Layout>
    );
  }
  
  export default Owner
  