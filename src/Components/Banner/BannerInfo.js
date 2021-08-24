import React from 'react'


function BannerInfo({ Icon, text, hide }) {
    return (
        <div className={`d-flex justify-content-start align-items-center`} style={{ marginRight: 10}}>
          <div className={`${hide ? 'd-none d-md-block d-lg-block' : ''}`}>{Icon}</div>
          <div className={`text-white font-monospace ${hide ? 'd-none d-md-block d-lg-block' : ''}`}>{text}</div>
        </div>
    )
}

export default BannerInfo
