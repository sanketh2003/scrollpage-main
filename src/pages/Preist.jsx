import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Preist = () => {
    return (
        <div className='con' >
            <h1>Preists</h1>
        <div className='con'>
            <PageScrollnfinite text="Pandit Ram"
                text1="123 Temple Street, Devotion Town, Karmaland"
                src={require('../images/preist/img1.jpg')} />
            <PageScrollnfinite text="Pandit Krishna"
                text1="456 Shrine Lane, Sacred City, Dharma Village"
                src={require('../images/preist/img2.jpg')} />
            <PageScrollnfinite text="Pandit Patel"
                text1="789 Puja Avenue, Divine Town, Bhakti Nagar" src={require('../images/preist/img3.jpg')} />
            <PageScrollnfinite text="Pandit Sharma"
                text1="321 Mandir Road, Spirit City, Karma Colony" src={require('../images/preist/img4.jpg')} />
            <PageScrollnfinite text="Pandit Gupta"
                text1="567 Vedanta Boulevard, Puja Town, Moksha Heights" src={require('../images/preist/img5.jpg')} />
            <PageScrollnfinite text="Pandit Singh"
                text1="890 Yagna Street, Ritual Town, Sadhana Ville" src={require('../images/preist/img6.jpg')} />
            <PageScrollnfinite text="Pandit Patel"
                text1="234 Pooja Lane, Bhakti City, Yoga Ville"
                src={require('../images/preist/img7.jpg')} />
            <PageScrollnfinite text="Pandit Mishra"
                text1="678 Aarti Avenue, Dharmic Town, Siddhi Nagar" src={require('../images/preist/img8.jpg')} />

        </div>
        </div>
    )
}

export default Preist