import "../Assets/Styles/Navbar.scss"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        HandyHelp.
                    </a>
                    <div className="NavbarEntry">
                        <a href="#Explore">
                            Explore
                        </a>
                    </div>
                    <div className="NavbarEntry">
                        <a href="#Lang">
                            English
                        </a>
                    </div>
                    <div className="NavbarEntry">
                        <a href="#Work">
                            Offer yor services
                        </a>
                    </div>
                    <div className="right">
                        <div className="NavbarEntry">
                            <a href="#Login">
                                Log In
                            </a>
                        </div>
                        <div className="NavbarEntry">
                            <button>
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}