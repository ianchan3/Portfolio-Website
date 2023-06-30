import "./ContactInformation.css"
import { useState } from "react";

export default function ContactInformation() {
  let [response, setResponse] = useState("")

  let handleSubmit = () => {
    setResponse("Thank You For Your Response. I will respond as soon I can!")
  }

  return (
    <div>
      {/* <div class="container-form">
        <div class="contact-form">
          <form action="https://formsubmit.co/4f1ac02d2904fffb3d028bcc5e802dda" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://ianchanportfolio.com" />
            <label>First Name</label>
            <input type="text" name="Name" id="firstName" />
            <label>Last Name</label>
            <input type="text" name="Last&nbsp;Name" id="lastName" />
            <label for="emailInfo" class="form-label">E-mail</label>
            <input type="email" class="form-control" name="Email" id="emailInfo" required />
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input type="text" class="form-control" name="Phone" id="phoneNumber" placeholder="+1 (415) 867-5309" />
            <label for="comments" class="form-label">Inquiry</label>
            <input id="comments" name="Comments/Questions" rows="3" required></input>
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form> 
        </div>
      </div>
      <div id="response">{response}</div>
      <hr></hr> */}
    <div id="contact">
      <h1>Contact Details</h1>
      <h3>Phone Number: (626)888-0881</h3>
      <h3>Email Address: ianchan3138@gmail.com</h3>
      <h3>Location: Los Angeles, CA</h3>
      <h3>Check Me Out on These Platforms!</h3>
      <a href="https://github.com/ianchan3/" aria-label="Github" title="Github" target="blank" id="contact-github" class="icon icon--github--contact">
        <i class="ri-github-line" ></i>
      </a>
      <a href="https://www.linkedin.com/in/ianchan-/" aria-label="Linkedin" title="Linkedin" target= "blank" id="contact-linkedin" className="icon icon--linkedin--contact">
        <i className="ri-linkedin-line" ></i>
      </a>
    </div>
    </div>
  )
}