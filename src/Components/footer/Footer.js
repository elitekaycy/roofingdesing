import { Button } from 'react-bootstrap'
import React from 'react'

function Footer() {
    return (
        <div className="p-5" style={{ background: '#1F3AFE'}}>
            <div className="container-md d-flex flex-row flex-wrap justify-content-between align-items-center">
            <div className="mb-3">
                <div className="text-white h4 mb-3">PerfectChoice Rs</div>
                <div className="text-wrap text-white" style={{ maxWidth: 300}}>Our installers are well trained for roofing leakages and quality installation</div>
            </div>
            <div className="p-3 border-start mb-3">
                <div className="text-white h4">Address</div>
                <div className="text-wrap text-white" style={{ maxWidth: 300}}>Budduburam, Accra, Ghana</div>
            </div>
            <div className=" p-3 border-start mb-3">
                <div className="text-white h4">Contact</div>
                <div className="text-wrap text-white h4" style={{ maxWidth: 300}}>0244955839</div>
                <div className="text-wrap text-white h5" style={{ maxWidth: 300}}>0247909576</div>
            </div>
            <div className="border-start p-3 mb-3">
                <div className="text-white h4">Social media</div>
                <div className="d-flex flex-row align-items-center justify-content-center">
                   <Button className="rounded-1 btn btn-outline-light w-auto h-auto p-2" style={{ cursor: 'pointer', marginRight: 5}}>
                      <p className="display-4 ">F</p> 
                   </Button>
                   <Button className="rounded-1 btn btn-outline-light w-auto h-auto p-2" style={{ cursor: 'pointer', marginRight: 5}}>
                      <p className="display-4 ">i</p> 
                   </Button>
                   <Button className="rounded-1 btn btn-outline-light w-auto h-auto p-2" style={{ cursor: 'pointer', marginRight: 5}}>
                      <p className="display-4 ">We</p> 
                   </Button>
                </div>
            </div>
            </div>
            <div className="container-md pt-5">
                <hr className="text-white" />
                <div className="text-white text-center h6">Kingsleytt@2021.All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer
