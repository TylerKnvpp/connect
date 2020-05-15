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
        .mobile-menu-container {
          padding: 1em;
        }

        // @media only screen and (max-width: 320px) {
        //   .mobile-menu-container {
        //     padding: 0.5em;
        //   }
        // }
      `}</style>
    </div>
  );
}
