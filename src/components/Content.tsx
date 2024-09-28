import React from 'react';
import Home from '../pages/Home'
type RendContent = {
    content: string;
}
const Content : React.FC<RendContent> = (Rend) => {
    if(Rend.content==='Home')return(<Home />)
    return(<p>404 Not Found</p>)
}
export default Content;