import Header from './Components/layout/Header'
import Footer from './Components/layout/Footer'
import Home from './Pages/Home'
import TopicsCovered from './Pages/TopicsCovered'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/topicscovered' element={<TopicsCovered/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App