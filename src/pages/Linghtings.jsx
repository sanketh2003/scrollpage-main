import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Linghtings = () => {
    return (
        <div className='con' >
            <h1>Linghtings</h1>
            <div className='con'>
                <PageScrollnfinite text="Bright Ideas"
                    text1="456 Radiance Road, Luminaryville, Luminaire"
                    src={require('../images/lightings/img1.jpg')} />
                <PageScrollnfinite text="Glowing Elements"
                    text1="789 Illumination Street, Radiant City, Lumina"
                    src={require('../images/lightings/img2.jpg')} />
                <PageScrollnfinite text="Illuminate House"
                    text1="123 Shine Avenue, Sparkle Town, Radiance" src={require('../images/lightings/img3.jpg')} />
                <PageScrollnfinite text="Shimmering Lights"
                    text1="321 Glow Street, Luminary City, Radiant" src={require('../images/lightings/img4.jpg')} />
                <PageScrollnfinite text="Radiant Lamps"
                    text1="567 Shine Boulevard, Luminescent Town, Brightsville" src={require('../images/lightings/img5.jpg')} />
                <PageScrollnfinite text="Luminous Innovations"
                    text1="987 Illumination Lane, Glowing City, Radiant" src={require('../images/lightings/img6.jpg')} />
                <PageScrollnfinite text="Luminous Designs"
                    text1="456 Brightness Boulevard, Radiant City, Lumina"
                    src={require('../images/lightings/img7.jpg')} />
                <PageScrollnfinite text="Radiant Solutions"
                    text1="654 Glow Avenue, Illuminated Town, Luminary" src={require('../images/lightings/img8.jpg')} />

            </div>
        </div>
    )
}

export default Linghtings