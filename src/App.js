// =================FUNCTIONAL COMPONENT=================
// export default function App() {
//     return (
//         <h1>Functional component</h1>
//     )
// }




// =================CLASS COMPONENT=================
// import { Component } from "react";
// export default class App extends Component {
//     render() {
//         return (
//             <h1>Class component</h1>
//         )
//     }
// }


// =================PROPS WITH FUNCTIONAL COMPONENT =================
// export default function App(prop) {
//     return (
//         <div>
//             <h1>Props with Functional component</h1> // props is used for dynamic data 
//             <h1>{prop.firstname} {prop.lastname} </h1>
//         </div>

//     )
// }


// =================PROPS WITH CLASS COMPONENT =================
// import { Component } from "react";
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Props with class component</h1>
//                 <h1>{this.props.firstname}</h1>
//             </div>
//         )
//     }
// }


// =================useState WITH FUNCTIONAL COMPONENT================= 
// import { useState } from "react"

// export default function App(prop) {

//     const [name, setName] = useState(prop.firstname);// UseState is used for rerendring component

//     function chanegeName() {
//         setName('Sheikh');
//     }

//     console.log(name);
//     return (
//         <div>
//             <h1>useState with functional component</h1>
//             <h1>{name}</h1>
//             <button onClick={chanegeName}>Click</button>
//         </div>

//     )
// }

// =================useState WITH CLASS COMPONENT =================
// import { Component } from "react";

// export default class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             name: 'Tausif'
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h1>useState with class component</h1>
//                 <h1>{this.state.name}</h1>
//                 <button>Click</button>
//             </div>
//         );
//     }
// }


// =================get input data =================
// import { useState } from "react"
// export default function App() {
//     const [data, setData] = useState();

//     return (
//         <div><h2>Get data input data while typing</h2>
//             <p>{data}</p>
//             <input type="text" name="" id="" onChange={(e) => (setData(e.target.value))} />
//         </div>
//     )
// }


// =================hide and show div =================

import React, { useState } from 'react'
function App() {

    const [status, setStatus] = useState(1);

    return (
        <div>
            {status ? <h1>hide and show</h1> : null}

            <div className=''>
                <button onClick={() => setStatus(0)}>Hide</button>
                <button className='' onClick={() => setStatus(1)}>show</button>
                <button className='' onClick={() => setStatus(!status)}>Toggle</button>
            </div>
        </div>
    )
}
export default App



// =================form handling =================




// =================form validation =================