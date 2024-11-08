import React from 'react'
import logo from '../assets/logo3.png'
import { Widgets } from '@mui/icons-material'
import './Header.css'

const Header = ({setPageNumber}) => {
  return (
    <div className='head' style={{display:'flex', justifyContent:'space-between',padding:'auto 100px auto 100px', backgroundColor:'black'}}>
        <div><img src={logo} alt="" style={{width:"100px",margin:'auto auto auto 100px'}}/></div>
        <div>
            <ul style={{display:'flex',color:"green",listStyle:'none',margin:'auto 100px auto auto'}} className='list'>
                <li onClick={()=>setPageNumber(0)}>Home</li>
                <li onClick={()=>setPageNumber(1)}>Our Emporium</li>
                <li onClick={()=>setPageNumber(2)}>Latest</li>
            </ul>
        </div>
    </div>
  )
}

export default Header