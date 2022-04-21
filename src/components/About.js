import React,{useState} from 'react'

export default function About() {

const [myStyle, setMyStyle] = useState({
  color: 'black',
  backgroundColor: 'white'
})

const [btntext, setBtnText] = useState("Enable Dark Mode")

const toggleStyle = ()=>{
  if (myStyle.color === 'black') {
    setMyStyle ({
      color: 'white',
      backgroundColor: 'black',
      border:"2px solid white"
    })
    setBtnText("Enable Light Mode")
  }
else  {  
  setMyStyle ({
  color: 'black',
  backgroundColor: 'white' 
              })
      setBtnText("Enable Dark Mode");
            }
}
  return (
    <div className ="container" style={myStyle}>
    <h2 className ="my-3">About Us </h2>
          <div className ="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's.</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<code>.item1-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>This is the second item's.</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <code>.item2-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's.</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<code>.item3-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className = "container my-3">
      <button onClick ={toggleStyle} type="button" class="btn btn-light">{btntext}</button>
      </div>
    </div>
  )
}
