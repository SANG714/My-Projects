import DataFetcher from "./DataFetcher";
import FormHandling from "./Colorapp/FormHandling";
import ThemeToggler from "./ThemeToggler";
import Timer from "./Timer";
import MouseEvent from "./MouseEvent";
import Welcome from "./Welcome";
// import Counter from "./Counter";
import VisibilityToggle from "./VisibilityToggle";
import AutoIncrement from "./AutoIncrement";
import FormHandling2 from "./Colorapp/FormHandling-2";
import FocusInput from "./FocusInput";
import ColorApp from "./Colorapp/ColorApp";
import TemperatureComponent from "./TemperatureConverter/TemperatureComponent";
import TodoApp from "./TodoApp/TodoApp";
import CounterApp from './CounterApp/CounterApp'
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ThemeTogglerApp from "./ContextThemeToggler/ThemeTogglerApp";
import AuthenticationApp from "./AuthenticationApp/AuthenticationApp";
import LanguageSwitcherApp from "./LanguageSwitcherApp/LanguageSwitcherApp";
import WindowResizerApp from "./UseEffect/WindowResizerApp";
import NavBar from "./Pages/NavBar";
// import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NotFound from "./Pages/NotFound";
import Parent from "./ReactMemoApp/Parent";
import Home from './Dashboard/Home.js'
import UserDetails from "./Dashboard/UserDetails.js";


function App() {
  return (
    <>
    {/* <h1>Hello</h1> */}
    {/* <DataFetcher/> */}
    {/* <Timer/> */}
    {/* <ThemeToggler/> */}
    {/* <MouseEvent/> */}
    {/* <FormHandling/> */}
    {/* <Welcome name='Alex'/>
    <Welcome name ="Aisha"/> */}
    {/* <Counter/> */}
    {/* <VisibilityToggle/> */}
    {/* <AutoIncrement/> */}
    {/* <FormHandling2/> */}
    {/* <FocusInput/> */}
    {/* <ColorApp/> */}
    {/* <TemperatureComponent/> */}
    {/* <TodoApp/> */}
    {/* <CounterApp/> */}
    {/* <ShoppingCart/> */}
    {/* <ThemeTogglerApp/> */}
    {/* <AuthenticationApp/> */}
    {/* <LanguageSwitcherApp/> */}
      {/* <DataFetcher/> */}
      {/* <WindowResizerApp/> */}
      {/* <Parent/> */}
      {/* <Home/>
      <UserDetails/> */}

       <Router>
        {/* <NavBar/> */}
        <Routes>
          {/* <Route path="/" element={<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="*" element={<NotFound/>}/> */}
          <Route path="/" element={<Home/>} />
          <Route path="/user/:id" element={<UserDetails/>} />
        </Routes>
      </Router>
    </>
  )
}


export default App;
