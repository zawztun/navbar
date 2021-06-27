import './topbar.css';

const Topbar = () => {
    return (
       
            <div className="top">
                <div className="topLeft">               
                    <i className = "topIcon fab fa-facebook-square"></i>
                    <i className = "topIcon fab fa-twitter-square"></i>
                    <i className = "topIcon fab fa-instagram-square"></i>

                </div>
                <div className="topCenter">
                    <ul className = "topList">
                        <li className= "topListItem">
                            HOME
                        </li>
                        <li className= "topListItem">
                           ABOUT
                        </li>
                        <li className= "topListItem">
                            SERVICES
                        </li>
                        <li className= "topListItem">
                            LOGOUT
                        </li>
                    </ul>         
                </div>
                <div className="topRight">
                  <img className = "topImg" src ="https://avatars.githubusercontent.com/u/33265355?s=400&u=06a87e5539fc9c357cdd3638a22f1d4b1c3efe4a&v=4" alt=""/>
                <ul className = "topList">
                    <li className= "topListItem">
                        LOGIN
                    </li>
                    <li className= "topListItem">
                        REGISTER
                    </li>
                </ul>
                <i className="topSearchIcon fas fa-search"></i>
                    </div>             
            </div>
     
    )
}

export default Topbar
