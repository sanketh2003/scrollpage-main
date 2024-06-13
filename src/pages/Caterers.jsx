import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Caterers = () => {
    return (
        <div className='con' >
            <h1>Caterers</h1>

            <div className='con'>
                <PageScrollnfinite text="Delicious Delights Catering"
                    text1="123 Catering Court, Foodville, Gourmet City"
                    src={require('../images/caterers/img1.jpg')} />
                <PageScrollnfinite text="Gourmet Gatherings Catering"
                    text1="456 Banquet Boulevard, Feastville, Culinary Corner"
                    src={require('../images/caterers/img2.jpg')} />
                <PageScrollnfinite text="Exquisite Eats Catering"
                    text1="234 Cuisine Avenue, Gastronomy Gardens, Gourmetville" src={require('../images/caterers/img3.jpeg')} />
                <PageScrollnfinite text="Epicurean Events Catering"
                    text1="567 Savory Street, Cuisine Cove, Flavorville" src={require('../images/caterers/img4.jpg')} />
                <PageScrollnfinite text="Taste Temptations Catering"
                    text1="101 Palate Parkway, Foodie Paradise, Gourmet Bay" src={require('../images/caterers/img5.jpg')} />
                <PageScrollnfinite text="Culinary Creations Catering"
                    text1="222 Dish Drive, Culinary Corner, Flavor Bay" src={require('../images/caterers/img6.jpg')} />
                <PageScrollnfinite text="Savor the Flavor Catering"
                    text1="789 Taste Street, Foodie Heights, Flavor Town" src={require('../images/caterers/img7.jpg')} />
                <PageScrollnfinite text="Gastronomic Gala Catering"
                    text1="333 Feast Road, Gourmet Gala, Taste Town" src={require('../images/caterers/img8.jpg')} />

            </div>
        </div>
    )
}

export default Caterers