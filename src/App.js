import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path={`/movie/:movieId`}
          element={<Detail />}
        />
        <Route
          path={`/`}
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
