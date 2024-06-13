import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const BridalMakeup = () => {
    return (

        <div className='con' >
            <h1>BridalMakeup</h1>
            <div className='con'>
                <PageScrollnfinite text="Glamour Glow Makeup Studio"
                    text1="123 Radiant Road, Beautyville, Glam City"
                    src={require('../images/Bridal Makeup/img1.jpg')} />
                <PageScrollnfinite text="Elegant Elegance Bridal Beauty"
                    text1="456 Blossom Boulevard, Bridal Bliss, Beauty Bay"
                    src={require('../images/Bridal Makeup/img2.jpg')} />
                <PageScrollnfinite text="Radiant Brides Makeup Artistry"
                    text1="789 Shine Street, Bridal Heights, Beautyville" src={require('../images/Bridal Makeup/img3.jpg')} />
                <PageScrollnfinite text="Enchanting Beauty Bridal Makeup"
                    text1="234 Enchantment Avenue, Bridal Haven, Beautyland" src={require('../images/Bridal Makeup/img4.jpg')} />
                <PageScrollnfinite text="Pearl Perfection Bridal Makeup"
                    text1="567 Pearl Parkway, Bridal Breeze, Beautytown" src={require('../images/Bridal Makeup/img5.jpg')} />
                <PageScrollnfinite text="Bridal Bliss Beauty Boutique"
                    text1="101 Blissful Boulevard, Bridal Glow, Beautyville" src={require('../images/Bridal Makeup/img6.jpg')} />
                <PageScrollnfinite text="Dreamy Day Bridal Makeup"
                    text1="222 Dreamland Drive, Bridal Dreams, Beauty Bay" src={require('../images/Bridal Makeup/img7.jpg')} />
                <PageScrollnfinite text="Forever Bridal Makeup Artistry"
                    text1="333 Forever Road, Bridal Forever, Beautyland" src={require('../images/Bridal Makeup/img8.jpg')} />

            </div>
        </div>
    )
}

export default BridalMakeup