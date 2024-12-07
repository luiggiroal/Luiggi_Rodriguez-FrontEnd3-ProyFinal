
import {Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Layout from "./Layouts/Layout";
import {useContextGlobal} from './Components/utils/global.context.jsx'


function App() {
  const {state: {theme}} = useContextGlobal()
  const myTheme = theme === "dark" && "dark"
  return (
      <div className={`App ${myTheme}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/favs" element={<Favs />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
