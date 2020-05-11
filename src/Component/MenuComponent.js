import React,{useState} from"react"
import DmenuComponent from"./DmenuComponent"
import menuArray from "../Component/menuArray"
 
function MenuComponent(props){

const[dropmenu,setdropmenu]=useState(false)
    

     let dmenu = props.menu.submenu.map(function(n,index){
            return<DmenuComponent
            key={index}
            dmenu={n}
            />
        })
 if (dropmenu === false){ 
        return(
            <div>

<h3 onClick={(e)=>{setdropmenu(true)}}>{props.menu.title}</h3>
           </div>
        )
}
else{
    return(
        <div>

<h3 onClick={(e)=>{setdropmenu(false)}}>{props.menu.title}
{dmenu}

</h3>
       </div>
    )


}




    
}
export default MenuComponent