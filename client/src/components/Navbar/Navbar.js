import React from "react";
import "../Navbar/navbar.css"
import logo from "../Navbar/green-rub-logo.png"
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";

class Navbar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleMouseHover = this.handleMouseHover.bind(this);
    //     this.state = {
    //         isHovering: false,
    //     };
    // }

    // handleMouseHover() {
    //     this.setState(this.toggleHoverState);
    // }

    // toggleHoverState(state) {
    //     return {
    //         isHovering: !state.isHovering,
    //     };
    // }


    render() {
        return (

            <nav className="navbar">
                <div
                    className="container"
                >
      
                    <img className="logo" src={logo} alt=" "/>

            


                <ul className="nav-things">
                    <li className="prof"><Link to="/profile">PROFILE</Link></li>
                    <li className="wall"><Link to="/wall">WALL</Link></li>
                    <li className="notif"><Link to="/notifications">NOTIFICATIONS</Link></li>
                    <li className="mes"><Link to="/messages">MESSAGES</Link></li>

                    <li className=" login-button"><Link to="/login" >LOGIN</Link></li>
                </ul>
    </div>


            </nav>

        )
    }
}

export default Navbar;
// render(<HoverExample />, document.getElementById('root'));

// ReactDOM.render(
//     <Navbar />, document.getElementById('root')
// );
