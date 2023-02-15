import "./TypingFeature.css";
import Typed from 'react-typed'

export default function TypingFeature() {

  return (
    <div className="container">
    <p>
      <Typed 
        strings={[
          "I am a Software Engineer", 
          "I am a Web Developer", 
          "I love to code"
        ]}
          typeSpeed={140}
          backSpeed={60}
          loop
      />
    </p>
  </div>
  )
}