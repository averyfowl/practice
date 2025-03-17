
import facebook from'../assets/facebook1.png'
import github from '../assets/github1.png'
import x from'../assets/x.png'
export default function Footer() {

    return (
        <div className= "footer">
          <img className = "footer-icon" src = {facebook} />
          <img className = "footer-icon" src = {github} />
          <img className = "footer-icon" src = {x} />
            <p>Copyright &copy; Your Website</p>
            
        </div>
    )


}

