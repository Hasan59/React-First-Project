
import React, { Component } from "react";





// let Person = (props) => {
//     return (
//         <div>
//             <h4>name:{props.name},age:{props.age},{props.children}</h4>



//         </div>
//     );

// }
class Person extends Component {
    constructor(props) {

        super(props)
    }
    render() {
        return (
            <div>
                <h4>name:{this.props.name},age:{this.props.age},Extra Info:{this.props.children}</h4>



            </div>
        );

    }

}






export default Person;