import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';

import logo from '../logo.svg';

import { routes } from './routes';
import { Suspense } from 'react';






export const Navigation = () => {


  return (
    <Suspense fallback={<h1>loading...</h1>}>

      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route) => {
                return (
                  <li key={route.to}>
                    <NavLink to={route.to} className={({ isActive }) =>
                      isActive ? "nav-active" : ""
                    } >{route.name}</NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>


          <Routes>
            {routes.map((route) => {
              return (<Route key={route.to} path={route.path} element={<route.Component />} />)
            })}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}