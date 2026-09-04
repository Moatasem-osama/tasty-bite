
import './App.css'
import ChefChoice from './components/ChefChoice'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import RecipeList from './components/RecipeList'
function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <RecipeList/>
     <ChefChoice/>
     <Footer/>
    </>
  )
}

export default App
