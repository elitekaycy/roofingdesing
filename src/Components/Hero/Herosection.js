import React from 'react'
import { Carousel } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { carouseldata } from '../../Data/DataHelper'


function Herosection() {
    return (
          <Carousel>
              {
                  carouseldata.map(content => { return (
                    <Carousel.Item key={content.id}>
                  
                    <div className="d-flex flex-row justify-content-center align-items-center w-100 p-5" style={{
                         background:  `linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(${content.img})`,
                         backgroundSize: '100%', 
                         backgroundPosition: 'center' , 
                         overflow: 'hidden', 
                         overflowX: 'hidden',
                         height: 700
                    }}>
                    
                       <div>
                        <Fade top>
                        {/* <div className="h3 text-white text-center">{content.subtitle}</div> */}
                        <div className="text-white text-center" style={{ letterSpacing: '-1px', fontWeight: 'bold', fontSize: 60}}>{content.title}</div>
                        <p className="text-white text-center lead" style={{maxWidth: 1000}}>{content.paragraph}</p>
                        </Fade>
                        </div>
                        </div>
               
                      </Carousel.Item>
                      
                  )})
              }   
          </Carousel>
   
    )
}

export default Herosection
