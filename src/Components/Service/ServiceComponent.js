import React from 'react'
import { Container } from 'react-bootstrap'
import maintenance from '../../images/maintenance.png'
import eurotiles from '../../images/eurotiles.png'
import selflock from '../../images/selflock.png'
import woodwork from '../../images/woodwork.png'
import standingsteam from '../../images/standingsteam.png'
import roof from '../../images/roof.png'
import ibrlongspand from '../../images/ibrlongspand.png'
import ReactHoverObserver from 'react-hover-observer';
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'

function ServiceComponent() {


    const Detailedservices = [
        {
            id: 1,
            fade: 'left',
            header: 'Roof Shingles',
            paragraph: 'Providing the best and quality roofshingles',
            icon: roof,
            odd: true
        },
        {
            id: 2,
            fade: 'top',
            header: 'Euro tiles',
            paragraph: 'We take pride in euro tiles installation',
            icon: eurotiles,
            odd: false
        },
        {
            id: 3,
            fade: 'top',
            header: 'Standing Steam',
            paragraph: 'A fitting service from a fitting Company',
            icon: standingsteam,
            odd: true
        },
        {
            id: 4,
            fade: 'top',
            header: 'Ibr Long Spand',
            paragraph: 'We install Ibr Long spands to your satisfaction ',
            icon: ibrlongspand,
            odd: false
        },
        {
            id: 5,
            fade: 'top',
            header: 'selflock',
            paragraph: 'We Provide installations of self lock tiles',
            icon: selflock,
            odd: true
        },
        {
            id: 6,
            fade: 'top',
            header: 'General Woodwork',
            paragraph: 'We Offer General woodwork as a service',
            icon: woodwork,
            odd: false
        },
        {
            id: 7,
            fade: 'top',
            header: 'Trusses',
            paragraph: 'We are Professioned in installing Trusses',
            icon: roof,
            odd: true
        }
    ]

    const SVcomponent = ({ header, paragraph, icon, highlight }) => {
        return (
        <ReactHoverObserver>
        {({ isHovering }) => (
        <div className={`w-100 rounded-1 p-3 mb-3 mx-auto ${ highlight ? 'bg-primary': ''}`} style={{ maxWidth: 350, height: 350, cursor: 'pointer' }}>
          <div className="text-center rounded mx-auto mt-4 p-3 mb-3" style={{ width: 100, height: 100, transform: isHovering ? 'scale(1.09)' : 'scale(1)', transition: '200ms ease-in all'}}>
            <img src={icon} alt="maintenance" className="img-fluid"/>
          </div>
          <div style={{ transform: isHovering ? 'scale(1.09, 1.09)': 'scale(1,1)'}} className={`h4 text-center ${highlight ? 'text-white' : 'text-dark'}`}>{header}</div>
          <div style={{ transform: isHovering ? 'scale(1.09, 1.09)': 'scale(1,1)'}} className={`text-wrap text-center ${highlight ? 'text-white' : 'text-dark'}`} style={{maxWidth: 500, fontSize: 18}}>{paragraph}</div>
        </div>)}
        </ReactHoverObserver>
        )
    }

    return (
        <Element name="SERVICES">
       <Container fluid="lg" className="mt-5">
            <Fade bottom><div className="h1 font-weight-bold text-center mb-2" style={{ fontSize: 50}}> SERVICES </div></Fade>
            <Fade bottom><div className="h5 text-center mb-5" style={{ fontWeight: 'lighter'}}>PerfectChoice Roofing systems at your service</div></Fade>

           <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap mt-2 mb-5">
               { Detailedservices.map(detail => { return ( <Fade key={detail.id} bottom><SVcomponent header={detail.header} paragraph={detail.paragraph} icon={detail.icon} highlight={detail.odd}/></Fade>)})}
           </div>
       </Container>
       </Element>
    )
}

export default ServiceComponent
