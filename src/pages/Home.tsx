import React from 'react';
import Category from '../components/Category';
import {Link, Route, Routes} from "react-router-dom";
import Header from '../components/Header';
import '../style/Home.css'

const CategoryArr = ['Home','OOTD','etc','option1','option2','option3','option4','fads']
const Home : React.FC = () => (
    <>
        <Header />
        <div className="main">
            <Category CategoryArr={CategoryArr}/>
            <div className="content">
                <Routes>
                    {CategoryArr.map((Category: any) => (
                        <Route path={`/category/${Category}`} element={<>{Category}</>}></Route>
                    ))}
                </Routes>
            </div>
        </div>
    </>
)
export default Home;