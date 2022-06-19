import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
import {
  faHouse,
  faUser,
  faFileContract,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
    to: "/",
    section: "",
  },
  {
    display: "Prestador",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/prestador",
    section: "prestador",
  },
  {
    display: "Contrato",
    icon: <FontAwesomeIcon icon={faFileContract} />,
    to: "/contratos",
    section: "contratos",
  },
  {
    display: "Lista",
    icon: <FontAwesomeIcon icon={faList} />,
    to: "/lista_contrato",
    section: "lista_contrato",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <>
      <div className="sidebar">
        <div className="logo">SOGO</div>
        <div className="menu">
          {sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div className={`item ${activeIndex === index ? "active" : ""}`}>
                <div className="icon">{item.icon}</div>
                <div className="text">{item.display}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <>
          <div className="sidebarMobile">
            <div className="menuMobileClose">
              <div className="barsClose" onClick={() => setIsopen(false)}>
                X
              </div>
            </div>
            <div className="logo">SOGO</div>
            <div className="menu">
              {sidebarNavItems.map((item, index) => (
                <Link to={item.to} key={index}>
                  <div
                  onClick={() => setIsopen(false)}
                    className={`item ${activeIndex === index ? "active" : ""}`}
                  >
                    <div className="icon">{item.icon}</div>
                    <div className="text">{item.display}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="menuMobile">
            <div className="bars">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setIsopen(!isOpen)}
                className="iconMoblie"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
