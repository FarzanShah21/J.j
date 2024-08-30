import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
// import Products from './Pages/Product';



const App = ()=>{
  return(
 <div>
 <Navbar1/>
 <Navbar/>
 
   <Routes>
<Route path='/' element={<Home/>}></Route>

   </Routes>
 
 </div>
 
  )
}
export default App;
