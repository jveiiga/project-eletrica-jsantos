import "./App.css"
import Header from "./components/Header"
import "./components/Header/style.css"
import Body from "./components/Body"
import Session1 from "./components/Session1"
import "./components/Session1/style.css"
import Session2 from "./components/Session2"
import "./components/Session2/style.css"
import Session3 from "./components/Session3"
import "./components/Session3/style.css"
import Session4 from "./components/Session4"
import "./components/Session4/style.css"
import Session5 from "./components/Session5"
import "./components/Session5/style.css"
import Footer from "./components/Footer"
import "./components/Footer/style.css"




const App = () => {


  return (
    <>
      <Header />
      <Body>
        <Session1 />
        <Session2 />
        <Session3 />
        <Session4 />
        <Session5 />
      </Body>
      <Footer />
    </>
  )
}

export default App
