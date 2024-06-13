import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Cake = () => {
    return (
        <div className='con' >
            <h1>Cake</h1>
        <div className='con'>
            <PageScrollnfinite text="Strawberry Queen"
                text1="123 Radiant Road, Beautyville, Glam City"
                src={require('../images/cake/img1.jpg')} />
            <PageScrollnfinite text="Divine Chocolate Delight"
                text1="456 Blossom Boulevard, Bridal Bliss, Beauty Bay"
                src={require('../images/cake/img2.jpg')} />
            <PageScrollnfinite text="Pink Velvet Cake"
                text1="789 Shine Street, Bridal Heights, Beautyville" src={require('../images/cake/img3.jpg')} />
            <PageScrollnfinite text="Enchanting Beauty cake"
                text1="234 Enchantment Avenue, Bridal Haven, Beautyland" src={require('../images/cake/img4.jpg')} />
            <PageScrollnfinite text="Round Birthday Cake"
                text1="567 Pearl Parkway, Bridal Breeze, Beautytown" src={require('../images/cake/img5.jpg')} />
            <PageScrollnfinite text="Creatick Studio Cake"
                text1="101 Blissful Boulevard, Bridal Glow, Beautyville" src={require('../images/cake/img6.jpg')} />
            <PageScrollnfinite text="White Wedding Cake With Purple flower"
                text1="222 Dreamland Drive, Bridal Dreams, Beauty Bay" src={require('../images/cake/img7.jpg')} />
            <PageScrollnfinite text="Birthday Cake"
                text1="333 Forever Road, Bridal Forever, Beautyland" src={require('../images/cake/img8.jpg')} />

        </div>
        </div>
    )
}

export default Cake