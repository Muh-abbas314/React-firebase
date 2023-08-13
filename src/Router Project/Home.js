import React from 'react'
import './Home.css'
import logo1 from '../Assets/logog.svg'
export default function Home()
{
    return(<div>
      <nav>
        <img src={logo1} width={"144px"}/>
        <div className='Links'>
           <li>About</li>
           <li>Vans</li>
        </div>
      </nav>
      <div className='main-body'>
        <h1>HELLLO MAIN BODY</h1>
      </div>

    </div>)
}