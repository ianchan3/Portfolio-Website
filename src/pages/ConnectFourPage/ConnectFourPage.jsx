import "./ConnectFourPage.css"

export default function ConnectFourPage() {
  return (
    <main className="ConnectFourPage">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1>Connect Four</h1>
      <h2>Project Information</h2>
      <h2>HTML, CSS, JavaScript</h2>
      <p>Play a game of Connect Four with your friends or family! First to 4 in a row, diagonal, vertical or horizontal, wins the game!</p>
      <p>Utilized JavaScript to create winning game logic, vertical, horizontal, and vertical, and HTML/CSS to create a polished user-friendly web browser game</p>
      <a href="https://ianchan3.github.io/Connect-Four/" target="blank" class="icon icon--link--connectfour">
      <i class="em em-link" ></i>
      </a>
      <br/>
      <a href="https://github.com/ianchan3/Connect-Four" target="blank" class="icon icon--github--connectfour">
        <i class="ri-github-line"></i>
      </a>
    </main>
  )
  }