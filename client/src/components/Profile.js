import React from "react";

const Profile = () => {

    const profileStyle = {
        width: "18rem"
    };

    return (
        <div>
            <div className="card" style={profileStyle}>
                <img className="card-img-top" src="https://photos.gograph.com/thumbs/CSP/CSP657/cartoon-garbage-can-vector-stock_k22277118.jpg" alt="Trash" />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: Oscar</li>
                        <li className="list-group-item">Date of Birth: 1/1/2010</li>
                        <li className="list-group-item">Address: 123 Dumpster Blvd.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Profile;
