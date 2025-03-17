
export default function Header(props) {



    return(
        <>
        <nav className = "navbar">
            <ul className = "navbar-list">
                <h3>{props.name}</h3>
                <li>Menu</li>
            </ul>
        </nav>
         <header className = "header1">
        
            <h1>Clean Blog</h1>
            
            <h3> A blog Theme by {props.name}</h3>
         

        </header>
        </>
    )
}

