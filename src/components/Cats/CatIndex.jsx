import React, { Component } from 'react';
import CatList from './CatList';
 
export default class CatIndex extends Component {
 constructor(props){
   super(props)
   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
 }

 render() {
   return (
      <div>
        <h1>CatIndex</h1>
        <CatList breeds={this.state.breeds}/>
      </div>
   );
  }
}

