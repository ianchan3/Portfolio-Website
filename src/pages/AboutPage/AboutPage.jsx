import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main class="AboutPage">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <h1>About Me</h1>
      <h3>I'm a Full Stack Software Engineer who is passionate about utilizing different technologies to make a positive impact in the world. </h3>
      <h3>With my background in finance and customer service, I am detailed-oriented, well organized, and always have a strategic planning mindset.</h3>
      <span className="AboutMe">
        <h2>Contact Details</h2>
        <h3>Phone Number: 1(626)888-0881</h3>
        <h3>Email Address: ianchan3138@gmail.com</h3>
        <h3>Location: Los Angeles, CA</h3>
        <h3>Check Me Out on These Platforms!</h3>
        <a href="https://github.com/ianchan3/" target="blank" class="icon icon--github">
          <i class="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/ianchan-/" target= "blank" class="icon icon--linkedin">
          <i class="ri-linkedin-line"></i>
        </a>
      </span>
    </main>
  )
}
