import "./FeelTheHeatPage.css"

export default function FeelTheHeatPage() {
  return (
    <main className="FeelTheHeatPage">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1>Feel the Heat? </h1>
      <h2>Project Information</h2>
      <h2>HTML, CSS, JavaScript, MongoDB, Express.js, Node.js</h2>
      <p>Feel The Heat is a CRUD blog where users may post interesting articles to inform others about climate change and global warning. Users may post comments to other users articles and update comments.</p>
      <p> Feel the Heat is built primarily using MongoDB, Express, Node, HTML, CSS, and JavaScript.</p>
      <a href="https://climate-change-blogproject.herokuapp.com//" target="blank" class="icon icon--link--feeltheheat">
      <i class="em em-link" ></i>
      </a>
      <br/>
      <a href="https://github.com/ianchan3/Climate-Change-Blog" target="blank" class="icon icon--github--feeltheheat">
      <i class="ri-github-line"></i>
      </a>
    </main>
  )
}