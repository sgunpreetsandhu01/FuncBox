import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <>
            
            <nav className="navbar">
            <img src="./image.png" alt="FUNCBOX" className="icon" />
                <div className="btn-group">
                
                    <button className="btn btn-group__item" >Home</button>
                    <button className="btn btn-group__item" >About</button>
                    <button className="btn btn-group__item" >Shop</button>
                    <button className="btn btn-group__item" >Login/Sign Up</button>

                </div>
                <br />
                <div className="btn-group">
                    <button className="btn btn-group__item" >go to cart</button>

                </div>
            </nav>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="./kid.jfif" alt="image" className="logo" />
                    </div>

                    <div className="col-sm-6">
                        <h2>FuncBox is a box full of surprises which will teach you educational concepts and coding with a revolutionary twist.</h2>
                        <ul>
                            <li>Perfect for age-group 6-12 years.</li>
                            <li>Build your own fun games.</li>
                            <li>Learn to code and explore</li>
                            <li>Share your game with your friends</li>
                        </ul>

                    </div>
    
                </div>

            </div>
          
        </>
    );
};

export default Navbar;
