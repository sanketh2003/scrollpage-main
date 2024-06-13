import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Funeralservices = () => {
  return (
    <div className='con' >
      <h1>Funeral Services</h1>
      <div className='con'>
        <PageScrollnfinite text="Eternal Rest"
          text1="123 Serenity Blvd, Tranquility Town, CA 90210"
          src={require('../images/Funeral services/img1.jpg')} />
        <PageScrollnfinite text="Remembrance Haven"
          text1="456 Peace Street, Solaceville, California, 90210"
          src={require('../images/Funeral services/img2.jpg')} />
        <PageScrollnfinite text="Varanasi"
          text1="Kashi vishvanath Temple , varanasi" src={require('../images/Funeral services/img3.jpg')} />
        <PageScrollnfinite text="Gokarna"
          text1="Gokarna , Uttarkannada District" src={require('../images/Funeral services/img4.jpg')} />
        <PageScrollnfinite text="Peaceful Reflections"
          text1="1111 Quiet Plaza, Serene Junction, 90210, USA" src={require('../images/Funeral services/img5.jpg')} />
        <PageScrollnfinite text="Tranquil Tributes"
          text1="2222 Serenity Circle, Calmville, CA, USA" src={require('../images/Funeral services/img6.jpg')} />
        <PageScrollnfinite text="Comforting Memories"
          text1="3333 Harmony Road, Solace City, California, USA"
          src={require('../images/Funeral services/img7.jpg')} />
        <PageScrollnfinite text="Final Farewell"
          text1="4444 Peace Path, Restful Corner, CA" src={require('../images/Funeral services/img8.jpg')} />

      </div>
    </div>
  )
}

export default Funeralservices