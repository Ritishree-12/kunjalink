import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Registration from './Authentication/registration/Registration'
import PreView from './Authentication/preview/PreView'
import About from './components/about/About'
import Events from './components/events/Events'
import OrgSearch from './components/organizationSearch/OrgSearch'
import Gallery from './components/gallery/Gallery'
import People from './components/people/People'



const App = () => {
  return (
   
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/about" element={<About/>} />
      <Route path="/preview" element={<PreView/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/video-gallery" element={<Gallery/>} />
      <Route path="/org-search" element={<OrgSearch/>} />
      <Route path="/people" element={<People/>} />

    </Routes>
  </Router>

  )
}

export default App