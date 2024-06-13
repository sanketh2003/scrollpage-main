import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Entertainment = () => {
    return (
        <div className='con' >
            <h1>Entertainment</h1>
        <div className='con'>
            <PageScrollnfinite text="Joyful Moments"
                text1="567 Enjoyment Blvd, Merrymakers Town, CA 90210"
                src={require('../images/Entertainment/img1.jpg')} />
            <PageScrollnfinite text="FunFusion"
                text1="890 Celebration Street, Joyfulville, California, 90210"
                src={require('../images/Entertainment/img2.jpg')} />
            <PageScrollnfinite text="Happy Hours"
                text1="234 Festivity Lane, Funland, CA, 90210" src={require('../images/Entertainment/img3.jpg')} />
            <PageScrollnfinite text="LaughLand"
                text1="789 Laughter Ave, Happiness Heights, 90210" src={require('../images/Entertainment/img4.jpg')} />
            <PageScrollnfinite text="Cheer Carnival"
                text1="123 Playful Plaza, Jovial Junction, 90210, USA" src={require('../images/Entertainment/img5.jpg')} />
            <PageScrollnfinite text="Amuse Haven"
                text1="456 Fun Circle, Joytown, CA, USA" src={require('../images/Entertainment/img6.jpg')} />
            <PageScrollnfinite text="Smile Oasis"
                text1="789 Joy Road, Amusement City, California, USA"
                src={require('../images/Entertainment/img7.jpg')} />
            <PageScrollnfinite text="Glee Galaxy"
                text1="987 Amusement Path, Cheerful Corner, CA" src={require('../images/Entertainment/img8.jpg')} />

        </div>
        </div>
    )
}

export default Entertainment