

import BridalMakeup from './pages/BridalMakeup';
import Cake from './pages/Cake';
import Caterers from './pages/Caterers';
import Clothings from './pages/Clothings';
import Decoration from './pages/Decoration';
import Entertainment from './pages/Entertainment';
import Funeralservices from './pages/Funeralservices';
import Invitaioncards from './pages/Invitaioncards';
 import Venues  from './pages/Venues';
import Jewellery from './pages/Jewellery';
import Linghtings from './pages/Linghtings';
import Mehendi from './pages/Mehendi';
import Photographs from './pages/Photographs';
import Preist from './pages/Preist';
import Stalls from './pages/Stalls';
import Vintagecars from './pages/Vintagecars';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Struct from './Info/Struct';


function App() {
  // const router=createBrowserRouter([
  //   {path:'/',
  //     element:<Venuesinfo/>

  //   },

  //   {
  //     path:'/venues',
  //     element:<Venues/>
  //   },

  //   {
  //     path:'/Bridal',
  //     element:<BridalMakeup/>
  //   },

  //   {
  //     path:'/cake',
  //     element:<Cake/> 
  //   },

  //   {
  //     path:'/caterers',
  //     element:<Caterers/>
  //   },

  //   {
  //     path:'/Clothings',
  //     element: <Clothings/>
  //   },

  //   {
  //     path:'/Decoration',
  //     element:<Decoration/>
  //   },

  //   {
  //     path:'/Enetertainment',
  //     element:<Entertainment/>,
      
  //   },

  //   {
  //     path:'/Funeral',
  //     element:<Funeralservices/>
  //   },

  //   {
  //     path:'/Jewellery',
  //     element: <Jewellery/>
  //   },

  //   {
  //     path:'/Lightings',
  //     element:<Linghtings/>
  //   },

  //   {
  //     path:'/Mehendi',
  //     element: <Mehendi/>
  //   },

  //   {
  //     path:'/Photograph',
  //     element: <Photographs/>
  //   },

  //   {
  //     path:'/Preist',
  //     element:<Preist/>
  //   },

  //   {
  //     path:'/Stalls',
  //     element:<Stalls/>
  //   },

  //   {
  //     path:'/Vintagecars',
  //     element:<Vintagecars/> 
  //   },

    

  // ])
  return (
    <div className="App">
      
      {/* <RouterProvider router={router}/> */}
      <Struct/>
      
    </div>
  );
}

export default App;
