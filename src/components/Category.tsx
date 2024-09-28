import React from "react";
import {Link, useLocation, } from "react-router-dom";
import '../style/Category.css'


type NodeInfo = { name: string; };
type Categorys = { CategoryArr: any[]; }
const Node:React.FC<NodeInfo> = ({name})=>{
    const location = useLocation();
    const currentPath = location.pathname;
    let select = '';
    if(currentPath === `/category/${name}`) select = "selected";
    return (
        <li>
            <Link to={`/category/${name}`} className= {`cate-name ${select}`} ><span>{name}</span></Link>
        </li>
    )
}
const Category:React.FC<Categorys> = (Categorys) => {
    return (
        <>
            <nav className='category'>
                <ul>
                    {
                        Categorys.CategoryArr.map((Cat: any) => (
                        <Node name={Cat}/>
                    ))}
                </ul>
            </nav>
        </>
    )
}
export default Category