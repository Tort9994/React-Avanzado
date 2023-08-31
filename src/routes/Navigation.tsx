import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';

import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/Shopping" className={({ isActive }) =>
                isActive ? "nav-active" : ""
              } >Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/About" className={({ isActive }) =>
                isActive ? "nav-active" : ""
              } >About</NavLink>
            </li>
            <li>
              <NavLink to="/Users" className={({ isActive }) =>
                isActive ? "nav-active" : ""
              } >Users</NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/Shopping" element={<ShoppingPage />} />
          <Route path="/About" element={<h1>About</h1>} />
          <Route path="/Users" element={<h1>Users</h1>} />

          <Route path="/*" element={<Navigate to={"/Shopping"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}