import React from 'react'
import PageScrollnfinite from '../PageScrollnfinite'

const Clothings = () => {
  return (
    <div className='con' >
            <h1>Clothings</h1>
    <div className='con'>
    <PageScrollnfinite text= "Chic Avenue"
  text1= "789 Fashion St, Trendville, CA 90210"
        src={require('../images/Clothing & Apparal/img1.jpg')} />
    <PageScrollnfinite  text= "Elegant Threads"
  text1= "789 Fashion St, Trendville, CA 90210"
        src={require('../images/Clothing & Apparal/img2.jpg')} />
    <PageScrollnfinite text= "Fashionista Hub"
  text1= "789 Fashion St, Trendville, CA, 90210" src={require('../images/Clothing & Apparal/img3.jpg')} />
    <PageScrollnfinite text= "Trendy Threads"
  text1= "789 Fashion St, Trendville, 90210" src={require('../images/Clothing & Apparal/img4.jpg')} />
    <PageScrollnfinite text= "Chic Apparel"
  text1= "789 Fashion St, Trendville, 90210, USA" src={require('../images/Clothing & Apparal/img5.jpg')} />
    <PageScrollnfinite text= "Urban Style"
  text1= "789 Fashion St, Trendville, CA, USA" src={require('../images/Clothing & Apparal/img6.jpg')} />
    <PageScrollnfinite text= "Modish Clothing"
  text1= "789 Fashion St, Trendville, California, USA" src={require('../images/Clothing & Apparal/img7.jpg')} />
    <PageScrollnfinite text= "Trendsetter Boutique"
  text1= "789 Fashion St, Trendville, CA" src={require('../images/Clothing & Apparal/img8.jpg')} />

</div>
</div>
    
  )
}

export default Clothings