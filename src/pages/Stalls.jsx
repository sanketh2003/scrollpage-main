import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Stalls = () => {
    return (
        <div className='con' >
            <h1>Stalls</h1>
            <div className='con'>
                <PageScrollnfinite text="Tandoori Treats"
                    text1="123 Spice Street, Wedding Venue, Celebration City"
                    src={require('../images/stalls/img1.jpeg')} />
                <PageScrollnfinite text="Chaats Corner"
                    text1="456 Chatpati Lane, Wedding Venue, Flavor Town"
                    src={require('../images/stalls/img2.jpg')} />
                <PageScrollnfinite text="Paneer Palace"
                    text1="789 Cottage Avenue, Wedding Venue,Aroma City" src={require('../images/stalls/img3.jpg')} />
                <PageScrollnfinite text="Biryani Bazaar"
                    text1="321 Fragrance Road, Wedding Venue,  Tasteville" src={require('../images/stalls/img4.jpg')} />
                <PageScrollnfinite text="Dosa Delight"
                    text1="567 Masala Lane, Wedding Venue, Spice Heights" src={require('../images/stalls/img5.jpg')} />
                <PageScrollnfinite text="Samosa Square"
                    text1="890 Crispy Street, Wedding Venue, Flavor City" src={require('../images/stalls/img6.jpg')} />
                <PageScrollnfinite text="Gulab Jamun Garden"
                    text1="234 Sweetness Avenue, Wedding Venue, Aroma Town"
                    src={require('../images/stalls/img7.jpg')} />
                <PageScrollnfinite text="Lassi Lounge"
                    text1="678 Refreshment Road, Wedding Venue, Taste Town" src={require('../images/stalls/img8.jpg')} />

            </div>
        </div>
    )
}

export default Stalls