import React from "react";
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import rootReducer from './store/store';

import './App.css';
import List from "./components/List";
import Item from "./components/Item";


function App() {
  return (
      <BrowserRouter>
          <Provider store={rootReducer}>
              <div id="container">

                  <Routes>

                     <Route
                        path="/"
                        element={<Navigate to="/services" replace />}
                     />

                     <Route path='/services' element={<List />} />
                     <Route path='/services/:id' element={<Item />} />

                  </Routes>

              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
