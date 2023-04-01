import { useEffect } from "react";
import { useLocation } from "react-router";

const AutoScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {props.children}
    </>
  )
};

export default AutoScrollToTop;