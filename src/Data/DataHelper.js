import React from 'react'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import flyer from '../images/flyere.jpeg'
import roofinghero1 from '../images/roofinghero1.jpg'
import roofinghero2 from '../images/roofinghero2.jpg'
import projectimg1 from '../images/projectimg1.jpeg'
import projectimg2 from '../images/projectimg2.jpeg'
import projectimg3 from '../images/projectimg3.jpeg'


const Iconstyle={
    width: 25, 
    height: 25, 
    color: 'white'
  }


export const bannerdata = {
    email: 'Kingsleytt@gmail.com',
    emailIcon: <MdEmail style={Iconstyle} />,
    phone: '+233 24 790 9576',
    phoneIcon: <AiFillPhone style={Iconstyle} />,
    location:  'Buduburam',
    locationIcon: <HiLocationMarker style={Iconstyle} />
}


//carousel data
export const carouseldata = [
    {
        id: 1,
        img: roofinghero1,
        title: 'PerfectChoice Roofing Systems',
        subtitle: 'PFCRS',
        paragraph: 'Make the best decisions for your roofs and houses, we are here not only for new roofs but also for all your roofing needs'
    },
    {
        id: 2,
        img: roofinghero2,
        title: 'WHY US',
        subtitle: 'WELCOME TO PFCRS',
        paragraph: 'Our installers are well trained for roofing leakages and Quality installation'
    }
]


export const aboutdata = {
    about: {
        title: '- ABOUT US',
        subtitle: 'Who we are and what we do',
        paragraph: 'Perfectchoice roofing systems is the perfect choice of a roofing system for you. Located in Ghana specifically Buduburam. We provide a range of services from shingles to trusses (more information at services). Make The Best Decision For Your Roof And Home. PerfectChoice roofing sytems Stands Behind Their Work, So You Can Stand Under It.'
    },
    detail1: {
        id: 1,
        title: 'Togo',
        img: projectimg1,
        paragraph: 'Roofing project undertaken in Togo'
    },
    detail2: {
        id: 2,
        title: 'Tamale',
        img: projectimg2,
        paragraph: 'Roofing project undertaken in tamale, Ghana'
    },
    detail3: {
        id: 3,
        title: 'flyer',
        img: flyer,
        paragraph: 'PerfectChoice roofing systems flyer'
    }
}


export const socialmedia = [
    {
        id: 1,
        icon: 'icon',
        name: 'facebook',
        link: 'http://facebook.com/Kingsleytt'
    },
    {
        id: 2,
        icon: 'icon' ,
        name: 'instagram',
        link: 'http://Instagram.com/Kingsleytt'
    },
    {
        id: 3,
        icon: 'icon',
        name: 'website',
        link: 'http//constructiondev.com/'
    }


]