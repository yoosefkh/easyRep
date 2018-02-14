import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import CategoryForm from './containers/CategoryForm';
import SymptomsForm from './containers/SymptomsForm';
import LocationForm from './containers/LocationForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/categories" component={CategoryForm} />
        <Route exact path="/location" component={LocationForm} />
        <Route exact path="/symptoms" component={SymptomsForm} />4
      </div>
    </BrowserRouter>
  );
};

export default App;