import './navbar.css'
import { Link } from 'react-router-dom';


function Navbar(){
    return(
     <div class="header">
  <button class="Navbtn">Home |</button>
  <button class="Rbtn">| Retrô </button>
  

  <div class="dropdown">
  <button class="dropbtn">Ligas</button>
  <div class="dropdown-content">
   <a href='./Brasileirão'>Brasileirão</a>
   <a href="./PremierLeague">Premier League</a>
   <a href="./SerieA">Serie A</a> 
  </div>   
</div>
   
   

     </div>
    )
}
export default Navbar;