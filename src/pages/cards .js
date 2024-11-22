import React from "react";
import "./cad.css";

function Card() {
    return (
        <div className="pricing-container">
            <div className="pricing-card">
                <img src="/icon1.png" alt="Personal Plan" className="card-icon" />
                <h3 className="card-title">PERSONAL</h3>
                
                <ul className="card-details">
                    <li>Custom Domains</li>
                    <li>Sleeps after 30 mins of inactivity</li>
                </ul>
                <h2 className="card-price">FREE</h2>
                <button className="cdbutton1">SIGN UP</button>
            </div>

            <div className="pricing-card">
                <img src="/icon2.png" alt="Small Team Plan" className="card-icon" />
                <h3 className="card-title">SMALL TEAM</h3>
                <ul className="card-details">
                    <li>Never Sleeps</li>
                    <li>Multiple workers for more powerful apps</li>
                </ul>
                <h2 className="card-price">$150</h2>
                <button className="card-btn">FREE TRIAL</button>
            </div>

            <div className="pricing-card">
                <img src="/icon3.png" alt="Enterprise Plan" className="card-icon" />
                <h3 className="card-title">ENTERPRISE</h3>
                <ul className="card-details">
                    <li>Dedicated</li>
                    <li>Simple horizontal scalability</li>
                </ul>
                <h2 className="card-price">$400</h2>
                <button className="cdbutton">FREE TRIAL</button>
            </div>
        </div>
    );
}

export default Card;
