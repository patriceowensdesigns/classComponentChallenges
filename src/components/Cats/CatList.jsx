  
import React, { Component } from 'react';
 
const CatList = (props) => {
// console.log(props);
 return (
   <div>
     <h1>CatList</h1>
     {props.breeds.map(cat => <li>{cat}</li> )}
   </div>
 )
}
 
export default CatList;