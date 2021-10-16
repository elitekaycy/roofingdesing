import React, { useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import { indexgalleryimages } from '../../Data/DataHelper'
import ImageViewer from 'react-simple-image-viewer';
import ReactHoverObserver from 'react-hover-observer';



function GalleryComponent() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };

 

      const [ p6, p7, p8, p9, p10, p11, p12,] = indexgalleryimages
       const MainImages = [ p6, p7, p8, p9, p10, p11, p12]


    return (
        <Element name="GALLERY">
        <div className='w-100 h-auto pt-3 pb-3' style={{ backgroundColor: '#F5FAFE'}}>
        <Container fluid="lg" >
            <Fade bottom><div className="h1 font-weight-bold text-center mb-2" style={{ fontSize: 50}}> Gallery </div></Fade>
            <Fade bottom><div className="h5 text-center mb-5" style={{ fontWeight: 'lighter'}}>PerfectChoice Roofing systems gallery</div></Fade>

            <div className="container-lg mb-5">
            <div className="row ">     
                
                {
                    MainImages.map((mainimage, index) => { 
                        return ( 
                            <div key={index} className="p-1 col-sm-3 mx-auto" style={{ maxWidth: 400, maxHeight: 400, position: 'relative', cursor: 'pointer'}}>
                                
                            <ReactHoverObserver>
                            {({ isHovering }) => (
                            <div onClick={() => { openImageViewer(index)}} className="w-100 h-100"  style={{  filter: !isHovering ? 'brightness(90%)' : 'brightness(60%)', transition: '300ms ease-in all'}}>
                            <div className="w-100 h-100">
                                 <div className="caption text-white text-center p-3 display-4" style={{ position: 'absolute', opacity: isHovering ? 1 : 0, margin: 0, zIndex: 2,}}>Open image </div>
                                <img className="img-fluid w-100 h-100 rounded-2" src={mainimage} alt={"image gallery"} />
                            </div>
                         
                            </div> )}
                         </ReactHoverObserver>
                         </div>
                        )
                    })
                }

           <Fade bottom> 
            <div onClick={() => { openImageViewer(7)}} className="p-1 col-sm-3 mx-auto h-100" style={{ maxWidth: 400, maxHeight: 400, cursor: 'pointer' }}>
            <div className="d-flex flex-row justify-content-center align-items-center w-100 h-100 rounded-2" style={{ background: 'gray'}}>
             <div className="display-2 text-white text-center p-3 h-100 w-100 ">More..</div>
            </div>
            </div>
            </Fade>

                {isViewerOpen && (
                <div style={{ zIndex: 100}}>
                <ImageViewer
                    src={ indexgalleryimages }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                  
                /></div>
                )}
            </div>
            </div>

       </Container>
       </div>
       </Element>
    )
}

export default GalleryComponent
