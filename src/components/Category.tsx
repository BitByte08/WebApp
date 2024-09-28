import React from "react";
import {Link, useLocation, } from "react-router-dom";
import '../style/Category.css'


type NodeInfo = { name: string; index: number; };
type Categorys = { CategoryArr: any[]; }
const Node:React.FC<NodeInfo> = ({name, index})=>{
    const location = useLocation();
    const currentPath = location.pathname;
    let select = '';
    if(currentPath === `/category/${name}`) select = "selected";
    return (
        <li key = {index}>
            <Link to={`/category/${name}`} className= {`cate-name ${select}`} ><span>{name}</span></Link>
        </li>
    )
}
const Category:React.FC<Categorys> = (Categorys) => {
    if (Categorys.CategoryArr===undefined) Categorys.CategoryArr = ['Load...'];
    return (
        <>
            <nav className='category'>
                <ul>
                    {
                        Categorys.CategoryArr.map((Cat: any, index) => (
                        <Node name={Cat} index = {index} key = {index} />
                    ))}
                </ul>
            </nav>
        </>
    )
}
export default Category