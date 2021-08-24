import React from 'react'
import { Container } from 'react-bootstrap'
import BannerInfo from './BannerInfo'
import Fade from 'react-reveal/Fade'
import { bannerdata } from '../../Data/DataHelper'

function Banner(){
    //importing bannerdata from datahelper class
      const { email, emailIcon, location, locationIcon, phone, phoneIcon } = bannerdata

      const Iconstyle={
        width: 25, 
        height: 25, 
        color: 'white'
      }

    return (
        <Fade top>
        <div className={`vw-100 h-auto m-0 p-2`} style={{ position: 'fixed', zIndex: 10, background: '#1F3AFE'}}>
        <Container fluid="md">
            <div className="d-flex justify-content-between align-items-center w-100">
                 <div className="d-flex flex-row align-items-center">
                 <BannerInfo hide Icon={emailIcon} text={email} />
                 <BannerInfo hide Icon={locationIcon} text={location} />
                 </div>
                 <div>
                 <BannerInfo Icon={phoneIcon} text={phone} />
                 </div>
            </div>
        </Container>
        </div>
        </Fade>
    )
}

export default Banner
