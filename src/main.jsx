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
import UserDetails from './components/UserDetails/UserDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetail from './components/PostDetail/PostDetail.jsx'



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
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      }
      // chaile ekhane o 404 status dekhano jabe, but ager components gula show korbe 
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
  },
  // ekhane dekhale just eta e show korbe 
  {
    path: '*', //baki path gula, all 
    element: <p>Not Found: 404 Status</p>
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)