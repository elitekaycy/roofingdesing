import React from 'react'
import Fade from 'react-reveal'
import quality from '../../images/quality.png'

function QualityComponent() {

    const Qualitydata = [
        {
            id: 1,
            title: 'We Offer Unbeatable Value',
            icon: quality,
            paragraph: 'Although we do not claim to always have the lowest prices, we do claim to always provide the best value. Plus, the leverage we have with our product partners allows us to offer our clients a roof that can actually save them money for years to come.'
        },
        {
            id: 2,
            title: 'Quality Materials',
            icon: quality,
            paragraph: 'As experienced roofers we know that a quality roofing job starts with the right materials. That’s why we begin each roofing project with top grade materials with a proven track record for excellence.'
        },
        {
            id: 3,
            title: 'OUTSTANDING VALUE',
            icon: quality,
            paragraph: 'Our goal is to offer outstanding value for your money.'
        },
    ]

    const QualityInfo = ({ title, paragraph, icon }) => {
        return  (
            <Fade right>
            <div className="m-5">
            <div className="d-flex flex-row align-items-end justify-content-start m-3">
                <div style={{ width: 50, height: 50, marginRight: 10}}>
                    <img src={icon} alt="quality insurance" className="img-fluid" />
                </div>
                <div className="h2">{title}</div>
            </div>
            <div className="lead text-wrap" style={{ maxWidth: 500 }}>{paragraph}</div>
        </div>
        </Fade>
        )
    }


    return (
        <div className="container-md d-flex flex-row flex-wrap align-items-center justify-content-center p-5 mb-5">
        <div>
            <Fade left>
            <div className="h5" style={{ color: '#0225FF'}}>- WHY US</div>
            <div className="text-wrap w-100 h1" style={{ maxWidth: 400, fontSize: 60 }}>WHY CHOOSE US</div> 
            <p className="lead text-wrap" style={{ maxWidth: 600 }}>Best Service equals satisfied customers.Count On Us To Cover For You</p>
            </Fade>
        </div>
        <div>
            {Qualitydata.map(data => { return ( <QualityInfo key={data.id} title={data.title} paragraph={data.paragraph} icon={data.icon} />)})}
        </div>
        </div>
    )
}

export default QualityComponent
