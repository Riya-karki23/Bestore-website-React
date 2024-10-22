import React, { Suspense, lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import Login from './pages/Login/Login'
import AddToCart from './pages/AddToCart/AddToCart';
import Wishlist from './pages/Wishlist/Wishlist'


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse/TermsOfUse'));


function App() {
  return (
<Suspense fallback={<div className="fallback">Loading page, please wait...</div>}> 
<ScrollToTop/>
      <Routes>
        <Route path='/' element={ <MainLayout><HomePage /></MainLayout>} />
        <Route path='/shop' element={<MainLayout><ShopPage /></MainLayout>} />
        <Route path='/about' element={<MainLayout><About /></MainLayout>} />
        <Route path='/contact' element={<MainLayout><Contact /></MainLayout>} />
        <Route path='/termsOfUse' element={<MainLayout><TermsOfUse /></MainLayout>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/addToCart' element={<LoginLayout><AddToCart/></LoginLayout>}/>
        <Route path='/wishlist' element={<MainLayout><Wishlist/></MainLayout>}/>
      </Routes>
    </Suspense>
  )
}

export default App;
