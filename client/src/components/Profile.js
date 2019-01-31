import React from "react";

const Profile = () => {

    const profileStyle = {
        width: "18rem"
    };

    return (
        <div>
            <div class="card" style={profileStyle}>
                <img class="card-img-top" src="https://photos.gograph.com/thumbs/CSP/CSP657/cartoon-garbage-can-vector-stock_k22277118.jpg" alt="Card image cap" />
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: Oscar</li>
                        <li class="list-group-item">Date of Birth: 1/1/2010</li>
                        <li class="list-group-item">Address: 123 Dumpster Blvd.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Profile;
