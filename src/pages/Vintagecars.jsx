import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Vintagecars = () => {
    return (
        <div className='con' >
            <h1>Vintagecars</h1>
        <div className='con'>
            <PageScrollnfinite text="Classic Cruisers"
                text1="123 Nostalgia Street, Vintage Car Rentals, Retro City"
                src={require('../images/vintage cars/img1.jpg')} />
            <PageScrollnfinite text="Retro Rides"
                text1="456 Memory Lane, Vintage Car Rentals, Old Town"
                src={require('../images/vintage cars/img2.jpg')} />
            <PageScrollnfinite text="Antique Autos"
                text1="789 Heritage Avenue, Vintage Car Rentals, Historic Ville" src={require('../images/vintage cars/img3.jpg')} />
            <PageScrollnfinite text="Nostalgic Navigators"
                text1="567 Retro Lane, Vintage Car Rentals, Vintage Village" src={require('../images/vintage cars/img4.jpg')} />
            <PageScrollnfinite text="Vintage Voyages"
                text1="890 Classic Street, Vintage Car Rentals, Antique Town" src={require('../images/vintage cars/img5.jpg')} />
            <PageScrollnfinite text="Old-fashioned Wheels"
                text1="234 Retro Avenue, Vintage Car Rentals, Timeless City" src={require('../images/vintage cars/img6.jpg')} />
            <PageScrollnfinite text="Heritage Haulers"
                text1="678 Vintage Boulevard, Vintage Car Rentals, Nostalgia Town"
                src={require('../images/vintage cars/img7.jpg')} />
            <PageScrollnfinite text="Timeless Transportation"
                text1="321 Vintage Road, Vintage Car Rentals, Classic City" src={require('../images/vintage cars/img8.jpg')} />

        </div>
        </div>
    )
}

export default Vintagecars