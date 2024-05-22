import { Routes, Route } from 'react-router-dom'

import { PublicLayout } from '../pages/public-routes/_layouts/PublicLayout'
import { Login } from '../pages/public-routes/Login'

import { PrivateLayout } from '../pages/private-routes/_layouts/PrivateLayout'
import { Home } from '../pages/private-routes/Home'
import { About } from '../pages/private-routes/About'

export function Router() {
  return (
    <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route  path="/" element={<Login />} />
          </Route>

          <Route path="/" element={<PrivateLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
    </Routes>
  )
}
