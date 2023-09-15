import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Sign';
import Loginsuc from './Loginsuc';

function App() {
  return (
    <div>
    <BrowserRouter>
   <Routes>
   <Route path='/' element={<Login />}></Route>
   <Route path='/Login' element={<Login />}></Route>
   <Route path='/Sign' element={<Signup />}></Route>
   <Route path="/empty " element={<Loginsuc />}></Route>
   </Routes>
   </BrowserRouter>
</div>
  );
}

export default App;