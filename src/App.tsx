import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import Content from "./components/Content";
import './style/App.css'

const CategoryArr = ['Home', 'Ootd', 'etc', 'option1', 'option2', 'option3', 'option4', 'fads'];

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <div className="main">
          <Category CategoryArr={CategoryArr}/>
          <div className="content">
            <Routes>
              {CategoryArr.map((Category: any, index) => (
                <Route path={`/category/${Category}`} key={index}
                       element={<Content content={Category}/>}>
                </Route>
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
