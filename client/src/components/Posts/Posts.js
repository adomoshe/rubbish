import React from 'react';
import ReactDOM from 'react-dom';

var headline = "HELP NEEDED!"

var photo = <img className="photo" src="#"></img>

var description = <p className ="description">lorem ipsum dolor sit ;alskdjfa;lsjkdfalskdjfasdfl;sakjfas;lkdfja;klsdjf;alksjdf;kladsjf;adlkfj</p>

var contact = <button className="contact-btn">CONTACT</button>

ReactDOM.render(
    <div>
    <h1>{headline}</h1>
    <br />
    <p>{photo}</p>
    <br />
    <p>{description}</p>
    <br />
    <button>
        {contact}
    </button>
</div>
)



    // document.getElementById('wall'))








    // <span id="wall"></span>

