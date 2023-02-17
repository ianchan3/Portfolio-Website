import "./TypingFeature.css";
import Typewriter from "typewriter-effect";

export default function TypingFeature() {

  return (
    <div className="container">
      <Typewriter
        options={{
          strings: [
            'I am a Software Engineer.', 
            'I am a Web Developer.',
            'I love to code and solve problems!',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}