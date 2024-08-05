import './contact.css'
import { Home } from "../header/header"
export function Contact(){
    return(

        <>
        <Home></Home>
        <div className="d-flex gap-5 " > 
        <div className='backimage'>        </div>
        <div className="border 1px">
            
            <h2>TO Contact</h2>
            <h5><input placeholder="Full Name"></input></h5>
            <h5><input placeholder="Email"></input></h5>
            <h5><button>To contact</button></h5>
            </div>
            <div className="d-flex">
            <center>Zamehra</center>
            <div> <center>Zamehra@gmail.com</center></div>
            </div>
            
        </div>
        </>
    )
}