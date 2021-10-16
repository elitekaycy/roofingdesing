import React from 'react'
import { Container } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'

const DivNavlink = styled.div`
   font-size: 15px;
   color: black;
   cursor: pointer;
   margin-right: 15px;

   :hover {
       color: #0225FF;
   }

`

const HeaderDiv = styled.div`
   font-size: 40px;
   font-weight: bold;
   letter-spacing: -3px;
   margin-bottom: 0px;
`

const SubHeaderDiv = styled.div`
font-size: 30px;
font-weight: normal;
letter-spacing: -1px;
text-indent: 5px;
`

function RoofingNavigation() {
    return (
    <div className="vw-100 h-auto p-3" style={{ marginTop: 30}}>
      <Container fluid="md">
          <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
              <div className="d-flex flex-row align-items-center">

                {/*logo fade reveal */}
              <Fade left>
              <StaticImage
                src="../../images/logo.jpeg"
                alt="A dinosaur"
                placeholder="blurred"
                layout="fixed"
                width={100}
                height={100}
                />
              </Fade>
                <div className="pl-2 m-0" style={{ lineHeight: 0.9}}>
                  <Fade top>
                  <HeaderDiv>PerfectChoice </HeaderDiv>
                   <SubHeaderDiv>Roofing Systems</SubHeaderDiv>
                  </Fade>
              
                </div>
              </div>
               <div className="d-flex flex-row justify-content-start align-items-center mx-auto">
                  {['ABOUT', 'SERVICES', 'PROJECTS', 'GALLERY'].map(divnav => { return (<Fade key={divnav} top><DivNavlink>
                    <Link activeClass="active"  to={divnav} spy={true} smooth={true} duration={500}>
                    {divnav}
                    </Link>
                    </DivNavlink></Fade>)})}
               </div>
          </div>
      </Container>
    </div>
    )
}

export default RoofingNavigation
