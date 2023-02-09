import "./ContactInformation.css"

export default function ContactInformation() {
  return (
    <div id="contact">
      <h1>Contact Details</h1>
      <h3>Phone Number: (626)888-0881</h3>
      <h3>Email Address: ianchan3138@gmail.com</h3>
      <h3>Location: Los Angeles, CA</h3>
      <h3>Check Me Out on These Platforms!</h3>
      <a href="https://github.com/ianchan3/" target="blank" className="icon icon--github">
        <i className="ri-github-line"></i>
      </a>
      <a href="https://www.linkedin.com/in/ianchan-/" target= "blank" className="icon icon--linkedin">
        <i className="ri-linkedin-line"></i>
      </a>
    </div>
  )
}