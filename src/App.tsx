

import Footer from "./components/Footer"

import NewsLetter from "./components/NewsLetter"
import TopNav from "./components/TopNav"

import { Outlet} from  "react-router-dom"


function App() {


  return (
    <div>
      
      <TopNav />
     
      <Outlet />
      <NewsLetter />
      <Footer />
    
    </div>
  )
}

export default App
