import React from 'react'
import carousel2 from '../../images/carousel2.jpg'
import carousel1 from '../../images/carousel1.jpg'
import carousel3 from '../../images/carousel3.jpg'
import Fade from 'react-reveal/Fade'
import ReactHoverObserver from 'react-hover-observer';
import { aboutdata } from '../../Data/DataHelper'
import { Element } from 'react-scroll'

function AboutComponent({ ElementComponent }) {
      const { about, detail1, detail2, detail3} = aboutdata

      const AboutImageObservable = ({ title, paragraph, img , height }) => {
          return (
            <ReactHoverObserver>
            {({ isHovering }) => (
                <div className="rounded border mb-2 border-1" style={{ width: 300, height: height || 200, position: 'relative', overflow: 'hidden'}}>
                  <div style={{ position: 'absolute', zIndex: 5}} className="p-3 text-white mt-5 text-bottom">
                      {isHovering ? <div style={{ transition: '500ms ease-in all'}}>
                          <div className="h5 font-weight-bold">{title}</div>
                          <p>{paragraph}</p>
                      </div> : ''}</div>
                <img src={img} style={{ position: 'relative', filter: isHovering ? 'brightness(50%)': 'brightness(100%)', transition: '300ms ease-in all', transform: isHovering ? 'scale(1.09)': 'scale(1)' }}alt="firstimage" className="img-fluid w-100 h-100" />
                </div>
            )}
            </ReactHoverObserver>
          )
      }

    return (
        <Element name="ABOUT">
     <div className="w-100 h-auto p-5 d-flex flex-row flex-wrap justify-content-center align-items-center" style={{ backgroundColor: '#F5FAFE'}}>
      
      {/*About us div */}
      <div>
          <Fade left> <div className="h5" style={{ color: '#0225FF'}}>{about.title}</div></Fade>
          <Fade left> <div className="text-wrap w-100 h1" style={{ maxWidth: 400 }}>{about.subtitle}</div> </Fade>
          <Fade left>  <p className="lead text-wrap" style={{ maxWidth: 600 }}>{about.paragraph}</p></Fade>
      </div>

     <div className="d-flex flex-row align-items-center p-5">

         {/*first image div block */}
         <div className="d-none d-md-block d-sm-block" style={{ marginRight: 7}}>
            <Fade top><AboutImageObservable title={detail1.title} paragraph={detail1.paragraph} img={detail1.img}/></Fade>
            <Fade bottom><AboutImageObservable title={detail2.title} paragraph={detail2.paragraph} img={detail2.img}/></Fade>
         </div>
          
          {/**second image div */}
          <Fade right>
         
          <ReactHoverObserver>
                {({ isHovering }) => (
                    <div className="rounded d-none d-md-block d-sm-block border border-1" style={{ width: 300, height: 410, position: 'relative', overflow: 'hidden'}}>
                      <div style={{ position: 'absolute', zIndex: 5}} className="p-3 text-white mt-5 text-bottom">
                          {isHovering ? <div style={{ transition: '500ms ease-in all'}}>
                              <div className="h5 font-weight-bold">{detail3.title}</div>
                              <p>{detail3.paragraph}</p>
                          </div> : ''}</div>
                    <img src={detail3.img} style={{ position: 'relative', filter: isHovering ? 'brightness(50%)': 'brightness(70%)', transition: '300ms ease-in all', transform: isHovering ? 'scale(1.09)': 'scale(1)' }}alt="firstimage" className="img-fluid w-100 h-100" />
                    </div>
                )}
                </ReactHoverObserver>
          </Fade>
     </div>


     </div>
     </Element>
    )
}

export default AboutComponent
