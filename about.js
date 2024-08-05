import { Home } from "../header/header"
import './about.css'

export function About(){
    return(
        <>
        <Home></Home>
    <div className="d-flex">    
  <div className='about'>
  </div>
  <div>
  
    <h5 class="card-title">About Me</h5>
    <p class="card-text">Tell readers who you are in the first line of your portfolio introduction. Before introducing yourself, first think about how you would do so. Mention where you are based.There’s no need to be overly formal on your online portfolio website page. Keep the page name simple. This is your own space for representing yourself on the web. Let yourself feel at home, and write your About page the same way you would normally speak.
</p>
< a href="mailto: email@example.com" className="mail">Send Email</a>
   </div> 
   </div>
 
        </>
    )
}