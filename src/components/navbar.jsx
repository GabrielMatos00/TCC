import './navbar.css'
import { Link } from 'react-router-dom';


function Navbar(){
    return(
     <div class="header">
  <Link to="/" class="Navbtn">Home |</Link>
  <button class="Rbtn">| Retrô </button>
  

  <div class="dropdown">
  <button class="dropbtn">Ligas</button>
  <div class="dropdown-content">
   <Link to='/Brasileirão'>Brasileirão</Link>
   <Link to="/PremierLeague">Premier League</Link>
   <Link to="/SerieA">Serie A</Link>
  </div>   
</div>
   
   

     </div>
    )
}
export default Navbar;