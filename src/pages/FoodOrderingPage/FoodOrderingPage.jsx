import "./FoodOrderingPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function FoodOrderingPage() {
  return (
    <main className="FoodOrderingPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">Food Ordering Page</h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <hr></hr>
      <h2>HTML | CSS | JavaScript | MongoDB | Express | React | Node | Slack | Stripe Checkout</h2>
      <span className="links">
        <p>Matcha & Co. is a full-stack food ordering web application where users can browse a menu, add items to their cart, and place orders through a secure checkout flow.</p>
        <p>Built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with Stripe for payment processing, Slack Webhooks for real-time order notifications, and Grafana with OpenTelemetry for application observability. Includes a full CI/CD pipeline with ESLint, Vitest unit tests, Supertest API tests, and Playwright end-to-end tests running across Chromium, Firefox, and WebKit.</p>
        <a href="https://matcha-and-co.com/" target="_blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br />
        <a href="https://github.com/ianchan3/matcha-and-co" target="_blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
      </span>
      <div className="projects">
        <img src="https://i.imgur.com/IOS0IH9.png"></img>
        <img src="https://i.imgur.com/3puooam.png"></img>
        <img src="https://i.imgur.com/8rEklva.png"></img>
        <img src="https://i.imgur.com/EpnFPjT.png"></img>
      </div>ht
    </main>
  )
}