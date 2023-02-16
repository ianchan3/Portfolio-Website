import "./TypingFeature.css";
import Typed from 'react-typed'

export default function TypingFeature() {

  return (
    <div className="container">
    <p>
      <Typed 
        strings={[
          "I am a Software Engineer.", 
          "I am a Web Developer.", 
          "I love to code and solve problems!"
        ]}
          typeSpeed={75}
          backSpeed={50}
          backDelay={1750}
          loop
      />
    </p>
  </div>
  )
}