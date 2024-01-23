// import React, { useState } from 'react'
import React from 'react'


export default function About(props) {

// const[myStyle,setMyStyle] =useState({
//     color : "black",
//     backgroundColor : "white"
//  })

// const [btnText,setBtnText] = useState("Enable Dark Mode")
//  const toggleStyle = () =>{
//     if(myStyle.color === 'black'){
//         setMyStyle({
//             color: 'white',
//             backgroundColor : 'black',
//             border : '0.5px solid black',borderRadius : '3px'
//         })
//         setBtnText("Enable Light Mode");
//     }
//     else{
//         setMyStyle({
//             color: 'black',
//             backgroundColor : 'white'
//         })
//         setBtnText ("Enable Dark Mode");
//     }
// }
 
  return (
    <div className="container" style={{color : props.mode ==='dark'?'white':'black'}}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample" style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',border:'0.5px solid black',borderRadius : '3px'}}>
        <div className="accordion-item" style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',border:'0.5px solid black',borderRadius : '3px'}}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',color : props.mode ==='dark'?'white':'black', border : '0.5px solid black',borderRadius : '3px'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor : props.mode ==='dark'?'grey':'white',color : props.mode ==='dark'?'white':'black' ,border : '0.5px solid black',borderRadius : '3px'}}>
                TextUtils gives you a way to analyze your test quickly and efficiently. Be it word count, character count 
            </div>
            </div>
        </div>
        <div className="accordion-item"style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',border:'0.5px solid black',borderRadius : '3px'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',color : props.mode ==='dark'?'white':'black', border : '0.5px solid black',borderRadius : '3px'}}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor : props.mode ==='dark'?'grey':'white',color : props.mode ==='dark'?'white':'black', border : '0.5px solid black',borderRadius : '3px'}}>
                TextUtils is a free character counter tool that provides instant character count and word count statistics
                for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/ charecter limit
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',border:'0.5px solid black',borderRadius : '3px'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={{backgroundColor : props.mode ==='dark'?'#343a40':'white',color : props.mode ==='dark'?'white':'black' ,border : '0.5px solid black',borderRadius : '3px'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong> Browser Compatible</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor : props.mode ==='dark'?'grey':'white',color : props.mode ==='dark'?'white':'black', border : '0.5px solid black',borderRadius : '3px'}}>
               This is a word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera. It suits to count charecters in facebook,blogs,excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>     
    </div>
  )
}
