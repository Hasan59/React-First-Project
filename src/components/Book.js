import React from "react";
import '../stylesheet/datum.css';



const Book = props => {
    return (

        <div className="datum">
            <h2 onClick={props.change}>Book:{props.BookName}</h2>
            <h5>Writer:{props.Writer}</h5>




        </div>




    );
    ``
}
export default Book;