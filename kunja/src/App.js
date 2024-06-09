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
// import Individual from './Authentication/individual/Individual'
import Preview1 from './Authentication/preview1/Preview1'
import Addskills from './components/addskills/Addskills'



const App = () => {
  return (
   
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Registration />} />
      {/* <Route path="/individual" element={<Individual />} /> */}
      <Route path="/about" element={<About/>} />
      <Route path="/preview" element={<PreView/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/video-gallery" element={<Gallery/>} />
      <Route path="/org-search" element={<OrgSearch/>} />
      <Route path="/people" element={<People/>} />
      <Route path="/preview1" element={<Preview1/>} />
      <Route path="/add-skill" element={<Addskills/>} />

    </Routes>
  </Router>

  )
}

export default App