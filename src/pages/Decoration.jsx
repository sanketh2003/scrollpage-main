import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Decoration = () => {
    return (
        <div className='con' >
            <h1>Decoration</h1>
            <div className='con'>
                <PageScrollnfinite text="Decor Emporium"
                    text1="789 Fashion St, Trendville, CA 90210"
                    src={require('../images/Decoration/img1.jpg')} />
                <PageScrollnfinite text="Decorative Delights"
                    text1="123 Festive Avenue, Celebration City, CA 90210"
                    src={require('../images/Decoration/img2.jpg')} />
                <PageScrollnfinite text="Artistic Accents"
                    text1="456 Festivity Boulevard, Festoon Town, California, 90210" src={require('../images/Decoration/img3.jpg')} />
                <PageScrollnfinite text="Home Styling Solutions"
                    text1="789 Celebration Street, Partyville, CA, 90210" src={require('../images/Decoration/img4.jpg')} />
                <PageScrollnfinite text="Chic Décor"
                    text1="101 Festival Lane, Jubilee Junction, 90210" src={require('../images/Decoration/img5.jpg')} />
                <PageScrollnfinite text="Modern Home Accents"
                    text1="1111 Party Plaza, Festive Village, 90210, USA" src={require('../images/Decoration/img6.jpg')} />
                <PageScrollnfinite text="Trendy Interiors"
                    text1="2222 Celebration Circle, Merriment City, CA, USA"
                    src={require('../images/Decoration/img7.jpg')} />
                <PageScrollnfinite text="Elegant Décor"
                    text1="3333 Festivity Road, Merrymaking Town, California, USA" src={require('../images/Decoration/img8.jpg')} />

            </div>
        </div>
    )
}

export default Decoration