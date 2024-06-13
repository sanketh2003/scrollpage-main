import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Mehendi = () => {
    return (
        <div className='con' >
            <h1> Mehendi Artists</h1>
            <div className='con'>
                <PageScrollnfinite text="Henna Dreams"
                    text1="789 Jasmine Avenue, Mehendi Meadows, Artistania"
                    src={require('../images/Mehendi Artist/img1.jpg')} />
                <PageScrollnfinite text="Mehendi Mirage"
                    text1="234 Lotus Lane, Henna Haven, Artistania"
                    src={require('../images/Mehendi Artist/img2.jpg')} />
                <PageScrollnfinite text="Artistic Henna"
                    text1="567 Blossom Boulevard, Mehendi Village, Artistania" src={require('../images/Mehendi Artist/img3.jpg')} />
                <PageScrollnfinite text="Henna Harmony"
                    text1="890 Lily Street, Henna Hills, Artistania" src={require('../images/Mehendi Artist/img4.jpg')} />
                <PageScrollnfinite text="Mehendi Muse"
                    text1="432 Rosewood Road, Henna Haven, Artistania" src={require('../images/Mehendi Artist/img5.jpg')} />
                <PageScrollnfinite text="Henna Haven"
                    text1="345 Magnolia Avenue, Mehendi Meadows, Artistania" src={require('../images/Mehendi Artist/img6.jpg')} />
                <PageScrollnfinite text="Mehendi Magic"
                    text1="678 Orchid Lane, Henna Hamlet, Artistania"
                    src={require('../images/Mehendi Artist/img7.jpg')} />
                <PageScrollnfinite text="Henna Heirloom"
                    text1="901 Willow Street, Mehendi Village, Artistania" src={require('../images/Mehendi Artist/img8.jpg')} />

            </div>
        </div>
    )
}

export default Mehendi