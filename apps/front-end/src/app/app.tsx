// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/page-2">Account</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
