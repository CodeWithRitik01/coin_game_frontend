import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';

const Navbar  = lazy(() => import("./navbar/navbar"))
const Home  = lazy(() => import("./home/home"))
const Footer  = lazy(() => import("./footer/footer"))
const Mine = lazy(() => import("./mine/Mine"))
const Referral = lazy(() => import("./referral/Referral"))
const Earn = lazy(() => import("./earn/Earn"))
const Airdrop = lazy(() => import("./airdrop/Airdrop"))

function MainLayout(){
  return(
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function HomePage(){
  return (
    <div>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
           <Home />
      </Suspense>
    </div>
  )
}

function App() {
  const router  = createBrowserRouter([
    {
      path:'/',
      element: (
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
           <MainLayout />
        </Suspense>
      ),
      children:[
        {path:'/',element:<HomePage />},
        {path:'/mine', element:<Mine />},
        {path:'/referral', element:<Referral />},
        {path:'/earn', element:<Earn />},
        {path:'/airdrop', element:<Airdrop />},
      ]
    }
  ])
  return (
    <div >
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
