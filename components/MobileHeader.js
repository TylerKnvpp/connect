import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import MobileLinkContainer from "./MobileLinkContainer";

export default function MobileHeader(props) {
  const [menuHover, setMenuHover] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="mobile-menu-container">
      {menuOpened ? (
        <div>
          <MobileLinkContainer
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        </div>
      ) : (
        <MdMenu
          onClick={() => setMenuOpened(!menuOpened)}
          onMouseOver={() => setMenuHover(!menuHover)}
          fontSize="3em"
          color={menuHover ? "blue" : "black"}
        />
      )}
      <style jsx>{`
        .testing {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 300ms, transform 300ms;
        }
        .mobile-menu-container {
          padding: 1em;
        }
      `}</style>
    </div>
  );
}
