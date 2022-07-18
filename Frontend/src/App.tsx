import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProviderContext } from './context'
import { Createusers } from './Pages/CreateUsers'
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { GlobalCSS } from './style/GlobalStyled'

function App() {

  return (
    <ProviderContext >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Createusers/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ProviderContext>
  )
}

export default App
