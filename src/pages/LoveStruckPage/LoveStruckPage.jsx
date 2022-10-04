import "./LoveStruckPage.css"

export default function LoveStruckPage() {
  return (
    <main className="LoveStruckPage">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1>Love Struck </h1>
      <h2>Python | Django | Materialize</h2>
      <p>Don't know where to go on your next date? We got you! Lovestruck is a date planning website that provides fantasic date ideas recommended by other users.</p>
      <p>Implemented CRUD features so users may create dates, partners, and locations. However, users are only able to edit any partner, location, or dates that they made |</p>
      <a href="https://lovestruck.herokuapp.com/" target="blank" class="icon icon--link--lovestruck">
        <i class="em em-link" ></i>
      </a>
      <br/>
      <a href="https://github.com/mkbozai/lovestruck" target="blank" class="icon icon--github--lovestruck">
        <i class="ri-github-line"></i>
      </a>
    </main>
  )
}