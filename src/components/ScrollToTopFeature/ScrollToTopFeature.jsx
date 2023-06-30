import { useState } from 'react';
import "./ScrollToTopFeature.css";

export default function ScrollToTopFeature () {
    const [visible, setVisible] = useState(false);
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    }
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  window.addEventListener("scroll", toggleVisible);
  return (
    <button aria-label="Scroll To Top" title="Scroll To Top" class="top" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>&uarr;</button>
  )
}