import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return visible ? (
    <a href="#top" className="fixed right-3 bottom-3">
      <ArrowCircleUpIcon fontSize="large" color="primary" />
    </a>
  ) : null;
};

export default TopButton;
