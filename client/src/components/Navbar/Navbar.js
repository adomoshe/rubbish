import React from "react";
import "../Navbar/navbar.css"
import logo from "../Navbar/rubbish-logo_1.png"
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

            // <div className="row">
                <nav className="navbar">
                    <div
                        className="container"
                    >
                        <Link to="/" className="navbar-brand">
                            <img className="logo" src={logo} alt=" " 
                        //         onMouseEnter={this.handleMouseHover}
                        // onMouseLeave={this.handleMouseHover}
                            />
                        </Link>
                    </div>

                    {/* {this.state.hovering && */}
                  <div className="dropdown">
                        <ul>
                            <li className="navThing"><Link to="/profile">Profile</Link></li>
                            <li className="navThing"><Link to="/wall">Wall</Link></li>
                            <li className="navThing"><Link to="/notifications">Notifications</Link></li>
                            <li className="navThing"><Link to="/messages">Messages</Link></li>
                            <li className="navThing"><Link to="/login" className="login-button">Login</Link></li>
                        </ul> 
                        </div>
                    {/* } */}


                </nav>
            // </div>
        )
    }
}

export default Navbar;
// render(<HoverExample />, document.getElementById('root'));

// ReactDOM.render(
//     <Navbar />, document.getElementById('root')
// );
