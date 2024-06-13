import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Photographs = () => {
    return (
        <div className='con' >
            <h1>Photographs</h1>
            <div className='con'>
                <PageScrollnfinite text="LensCraft"
                    text1="123 Shutter Street, Aperture Town, Lensville"
                    src={require('../images/photographs/img1.jpg')} />
                <PageScrollnfinite text="Focus Frames"
                    text1="456 Snapshot Lane, Capture City, Shutterland"
                    src={require('../images/photographs/img2.jpg')} />
                <PageScrollnfinite text="Shutter Speed"
                    text1="789 Flash Avenue, Lensville, Snapville" src={require('../images/photographs/img3.jpg')} />
                <PageScrollnfinite text="Picture Perfect"
                    text1="321 Frame Road, Exposure Town, Captureland" src={require('../images/photographs/img4.jpg')} />
                <PageScrollnfinite text="Capture Moments"
                    text1="567 Aperture Boulevard, Focus City, Lensborough" src={require('../images/photographs/img5.jpg')} />
                <PageScrollnfinite text="Frame Focus"
                    text1="890 Viewpoint Street, Camera Town, Lensfield" src={require('../images/photographs/img6.jpg')} />
                <PageScrollnfinite text="Lens Legends"
                    text1="234 Flash Lane, Snapshot Village, Snapfield"
                    src={require('../images/photographs/img7.jpg')} />
                <PageScrollnfinite text="Snapshot Studio"
                    text1="678 Lens Avenue, Picture City, Focusville" src={require('../images/photographs/img8.jpg')} />

            </div>
        </div>
    )
}

export default Photographs