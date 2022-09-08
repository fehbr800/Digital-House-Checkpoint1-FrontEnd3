import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
 

  document.addEventListener("keydown",(e)=>{ 
    let barState= estadoAtualSideBar ==="--open" ? "" : "--open" 
    if (e.target != document.querySelector("body") || e.code != "Space")  return
    e.preventDefault()
    alterarEstadoSideBar(barState)
  })  


  document.addEventListener("dblclick",(e)=>{ 
    e.preventDefault()
    alterarEstadoSideBar("")
  })  
  const [estadoAtualSideBar, alterarEstadoSideBar] = useState("");

  return (
    <div>
      <button
        className="l-sidebar__btn"
        type="button"
        onClick={() => alterarEstadoSideBar("--open")}
      >
        <MenuIcon />
      </button>

      <div className={`l-sidebar${estadoAtualSideBar}`}>
        <button
          type="button"
          className="button-Close"
          aria-label="Close"
          onClick={() => alterarEstadoSideBar("")}
        >
          
          <CloseIcon />
        </button>
        <div>
          <h1 className="l-logo">Matheus Emanoel</h1>
          <nav className="sidebar__text">
            <a className="sidebar__item " href="#sobre-mim">
              Sobre mim
            </a>
            <a className="sidebar__item " href="#contatos">
              Contatos
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
