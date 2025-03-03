import {Route, Routes } from 'react-router'

import TradeBooths from './pages/trade-booths'
import Suport from './pages/suport'
import ListsTradeBooths from './pages/lists-trade-booths'
import UserManagement from './pages/user-management'
import Sidebar from './component/sidebar'

const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigate to="/user-management"/>} /> */}
      <Route path='/' element={<UserManagement/>} />
      <Route path='/trade-booths' element={<TradeBooths/>} />
      <Route path='/support' element={<Suport/>} />
      <Route path='/list-trade-booths' element={<ListsTradeBooths/>} />
    </Routes>
  )
}

export default App
