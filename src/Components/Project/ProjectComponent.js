import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'
import { Card } from 'react-bootstrap'
import ReactHoverObserver from 'react-hover-observer';
import projectimg1 from '../../images/projectimg1.jpeg'
import projectimg2 from '../../images/projectimg2.jpeg'
import projectimg3 from '../../images/projectimg3.jpeg'
import projectimg4 from '../../images/projectimg4.jpeg'
import projectimg5 from '../../images/projectimg5.jpeg'
import { Element } from 'react-scroll'


import 'swiper/swiper-bundle.min.css';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Pagination, Navigation } from 'swiper/core';


SwiperCore.use([Pagination, Navigation]);

function ProjectComponent() {
    const isResponsive = useMediaQuery({ query: '(min-width: 768px)' })
    const isMid = useMediaQuery({ query: '(min-width: 768px)' })

    console.log(isResponsive)
    

    const Projectdata = [
        {
            id: 1,
            location: 'Tamale',
            image: projectimg1,
            paragraph: 'Sample project at Tamale, Ghana'
        },
        {
            id: 2,
            location: 'Kumasi',
            image: projectimg2,
            paragraph: 'Sample Project at Kumasi, Ghana'
        },
        {
            id: 3,
            location: 'Accra',
            image: projectimg3,
            paragraph: 'Sample Project at Accra, Ghana'
        },
        {
            id: 4,
            location: 'Lom nava',
            image: projectimg4,
            paragraph: 'Sample Project at Lom nava, Togo'
        }
    ]


    return (
        <Element name="PROJECTS">
        <div className="w-100 h-auto" style={{ backgroundColor: '#F5FAFE'}}>
        <div className="container-md p-5">
          <Fade left> <div className="h5" style={{ color: '#0225FF'}}>- PROJECTS</div></Fade>
          <Fade left> <div className="text-wrap w-100 h1" style={{ maxWidth: 400 }}>RECENT WORKS</div> </Fade>
          <Fade left>  <p className="lead text-wrap" style={{ maxWidth: 600 }}>Minim nulla nulla dolor nulla fugiat non velit aute do enim. </p></Fade>
       </div>

        <Swiper
        spaceBetween={50}
        slidesPerView={isResponsive ? 2 : 1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true}}
        navigation
        centeredSlides={isResponsive}
        className="p-5"
        >

        { Projectdata.map(data => { return (
        <SwiperSlide key={data.id}>
             <ReactHoverObserver>
                {({ isHovering }) => (
            <Card className="w-100 " style={{ maxWidth: 500}}>
            <Card.Img variant="top" src={data.image} className="img-fluid" style={{height: 400, filter: isHovering ? 'brightness(90%)' : 'brightness(60%)', transition: '300ms ease-in all'}} />
            <Card.Body className={`${isHovering ? 'bg-primary' : 'bg-white'}`} style={{transition: '300ms ease-in all' }}>
            <Card.Text className="text-wrap">
            <p className={`${isHovering ? 'text-white': ''} lead`}>{data.location}</p>
            <p className={`${isHovering ? 'text-white': 'text-muted'}`}>{data.paragraph}</p>
            </Card.Text>
            </Card.Body>
            </Card>
                )}
            </ReactHoverObserver>
        </SwiperSlide>)})}

        <br />
        </Swiper> 

        </div>
        </Element>
    )
}

export default ProjectComponent
