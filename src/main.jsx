import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'



// method one - same from react roouter just copy-paste the codes from there
// react router import 
// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";

// // using 
// const router = createBrowserRouter([
//   {
//     // minimum dui ta jinish dite hobe
//     path: '/',
//     element: <div>Hello From React Router</div>
//   }
// ])


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}

//     {/* router je create kora hoyeche sheta props hishebe 'RouterProvider' er moddhe pass kore dao */}
//     <RouterProvider router={router}></RouterProvider>
//   </StrictMode>,
// )



// method 2: auto import kore o kora jay 

const users2Promise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  // multiple objects declare kora jay

  // same as documentation
  {
    path: '/', Component: Root, //root path 
    children: [
      {index:true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path: 'users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
         Component: Users},
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          {/* definition */}
          <Users2 users2Promise={users2Promise}></Users2>
        </Suspense>
      }
    ]
  },
  {
    path: 'about',
    element: <div>About Me</div>
  },
  {
    path: 'blogs',
    element: <div>All My Blogs Here</div>  //element dekhano 
  },
  {
    // component dekhano 
    path: 'app',
    Component: App
  },
  // same jinish element hishebe o boshano jabe
  {
    path: 'app2',
    element: <App></App>
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)