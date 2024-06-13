import React from 'react'

//VENUES PAGE
import PageScrollnfinite from '../PageScrollnfinite'

const Venues = () => {
  return (


    <div className='con' >
      <h1>Venues</h1>
      <div className='con'>
        <PageScrollnfinite text="Grand Plaza Ballroom"
          text1="An elegant venue located in the heart of the city. Perfect for weddings, galas, and corporate events."
          src={require('../images/venues/img1.jpg')} />

        <PageScrollnfinite text="Sunset Garden Pavilion"
          text1="A picturesque outdoor venue surrounded by lush gardens and scenic views. Ideal for outdoor weddings and receptions."
          src={require('../images/venues/img2.jpg')} />
        <PageScrollnfinite text="Text & Tunes Venue"
          text1="123 Melody Street, Harmonyville, Cityville" src={require('../images/venues/img2.jpg')} />
        <PageScrollnfinite text="The Artisanal Loft"
          text1="456 Canvas Avenue, Creativity Corner, Townsville" src={require('../images/venues/img3.jpg')} />
        <PageScrollnfinite text="The Playful Pavilion"
          text1="789 Imagination Lane, Wonderland Plaza, Dreamland" src={require('../images/venues/img4.jpg')} />
        <PageScrollnfinite text="Elegant Eats Banquet Hall"
          text1="234 Gourmet Avenue, Culinary Center, Foodtown" src={require('../images/venues/img5.jpeg')} />
        <PageScrollnfinite text="Serenity Gardens Event Space"
          text1="567 Tranquil Terrace, Zen City, Peaceville" src={require('../images/venues/img6.jpg')} />
        <PageScrollnfinite text="The Crystal Palace"
          text1="101 Diamond Avenue, Gemstone Plaza, Sparkle City" src={require('../images/venues/img7.jpg')} />
      </div>

    </div>


  )
}

export default Venues