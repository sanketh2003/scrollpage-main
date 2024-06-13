import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'



const Invitaioncards = () => {
    return (
        <div className='con' >
            <h1>Invitaion Cards</h1>
            <div className='con'>
                <PageScrollnfinite text="Charming Invites"
                    text1="123 Celebration Blvd, Party Town, CA 90210"
                    src={require('../images/Invitation cards/img1.jpg')} />
                <PageScrollnfinite text="Elegant Designs"
                    text1="456 Gala Street, Festivityville, California, 90210"
                    src={require('../images/Invitation cards/img2.jpg')} />
                <PageScrollnfinite text="Stylish Creations"
                    text1="789 Joyful Lane, Festive City, CA, 90210" src={require('../images/Invitation cards/img3.jpg')} />
                <PageScrollnfinite text="Unique Impressions"
                    text1="101 Festive Ave, Celebration Heights, 90210" src={require('../images/Invitation cards/img4.jpg')} />
                <PageScrollnfinite text="Graceful Announcements"
                    text1="1111 Merriment Plaza, Jubilee Junction, 90210, USA" src={require('../images/Invitation cards/img5.jpg')} />
                <PageScrollnfinite text="Trendy Invitations"
                    text1="2222 Cheerful Circle, Merrymakingtown, CA, USA" src={require('../images/Invitation cards/img6.jpg')} />
                <PageScrollnfinite text="Creative Cards"
                    text1="3333 Joy Road, Festive City, California, USA"
                    src={require('../images/Invitation cards/img7.jpg')} />
                <PageScrollnfinite text="Whimsical Designs"
                    text1="4444 Celebration Path, Partyville, CA" src={require('../images/Invitation cards/img8.jpg')} />

            </div>
        </div>
    )
}

export default Invitaioncards