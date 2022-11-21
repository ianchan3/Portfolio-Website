import "./GrowGreenPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";


export default function GrowGreenPage() {
  return (
    <main className="GrowGreenPage">
        <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1>Grow Green </h1>
      <h2>HTML | CSS | JavaScript | MongoDB | Express | React | Node</h2>
      <p>Grow Green is a donation website where users may donate money to plant trees and help the environment by fighting climate change.</p>
      <p>Implemented CRUD features so user may donate money to plant trees. Users are able to view only their donation history and delete their donations.</p>
      <a href="https://grow-green-p4.herokuapp.com/" target="blank" class="icon icon--link--growgreen">
        <i class="em em-link" ></i>
      </a>
      <br/>
      <a href="https://github.com/ianchan3/Grow-Green" target="blank" class="icon icon--github--growgreen">
        <i class="ri-github-line"></i>
      </a>
    </main>
  )
}