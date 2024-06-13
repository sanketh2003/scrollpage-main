import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Jewellery = () => {
    return (
        <div className='con' >
            <h1>Jewellery</h1>
            <div className='con'>
                <PageScrollnfinite text="GlamourGems"
                    text1="123 Sparkle Blvd, Shimmering City, CA 90210"
                    src={require('../images/jewellery/img1.jpg')} />
                <PageScrollnfinite text="LuxuryLusters"
                    text1="456 Shine Street, Glitterville, California, 90210"
                    src={require('../images/jewellery/img2.jpg')} />
                <PageScrollnfinite text="RadiantRocks"
                    text1="789 Gleam Lane, Sparkle Town, CA, 90210" src={require('../images/jewellery/img3.jpg')} />
                <PageScrollnfinite text="DazzleDesigns"
                    text1="101 Spark Ave, Gleaming Heights, 90210" src={require('../images/jewellery/img4.jpg')} />
                <PageScrollnfinite text="EleganceEmbrace"
                    text1="1111 Luminous Plaza, Radiant Junction, 90210, USA" src={require('../images/jewellery/img5.jpg')} />
                <PageScrollnfinite text="OpulenceOrnaments"
                    text1="2222 Glittering Circle, Shinytown, CA, USA" src={require('../images/jewellery/img6.jpg')} />
                <PageScrollnfinite text="ChicCharms"
                    text1="3333 Twinkle Road, Sparkle City, California, USA"
                    src={require('../images/jewellery/img7.jpg')} />
                <PageScrollnfinite text="SleekStyles"
                    text1="4444 Shimmer Path, Gleamville, CA" src={require('../images/jewellery/img8.jpg')} />

            </div>
        </div>
    )
}

export default Jewellery