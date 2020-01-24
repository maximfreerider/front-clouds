import React from 'react';
import './App.css';
import FetchData from "./components/FetchData";
import {BrowserRouter, Route} from "react-router-dom";
import Form from "./components/Form";
import Input from "./components/Input";
import Default from "./components/Default";

const App = (props) => {
  return(
      <div>
          <BrowserRouter>
              <Route path={"/"} exact component={() => <Default/>}/>
              <Route path="/data" component={() => <FetchData/>}/>
              <Route path="/form" component={() => <Form/>}/>
              <Route path="/input" component={() => <Input/>}/>
          </BrowserRouter>
      </div>
  );
};

export default App;

