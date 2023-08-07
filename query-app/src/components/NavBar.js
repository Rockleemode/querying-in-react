const NavBar = ({ setpage }) => {
    return ( 
        <div className="nav-bar">
            <button onClick={() => setpage("people")}>People</button>
            <button onClick={() => setpage("planets")}>Planets</button>
        </div>
     );
}
 
export default NavBar;
