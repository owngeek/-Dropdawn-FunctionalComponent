import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuComponent from "./Component/MenuComponent"
import menuArray from"../src/Component/menuArray"

class App extends React.Component{
  render(){
  let mainmenu =  menuArray.map(function(n,index){
      return<MenuComponent
      key={index}
      menu={n}

      />
    })
  
  return (
    <div>
      
   {mainmenu}
    </div>
  )
}
}
export default App;
