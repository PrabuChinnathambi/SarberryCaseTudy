import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import LoginPage from './components/LoginPage';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { set_property_data } from './redux/actions/propertyActions';




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      axios.get('https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50')
        .then((res) => {
          dispatch(set_property_data(res.data));
        })
    }

    getData();

  })


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
