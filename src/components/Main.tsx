import Navbar from "./Navbar"
import Menubar from './Menubar'
import { useEffect, useState } from "react"
import Home from "./Home"
import Footer from "./Footer"
const Main = () => {
    // const[prod,setProd] = useState([])
    // const[search,setSearch] = useState("")
    // const [menu,setMenu] = useState("")
    // const getProducts = () => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>setProd(json))
    // }
    // useEffect(()=>{
    //     getProducts()
    // },[])
  return (
    <>
     {/* <Navbar setSearch/>
     <Menubar setMenu={setMenu}/>
     <Home products={prod} search={search} menu={menu}/>
     <Footer/> */}
     <Navbar/>
     <Menubar/>
     <Home/>
     <Footer/>
    </>
     
      
    
  )
}

export default Main
