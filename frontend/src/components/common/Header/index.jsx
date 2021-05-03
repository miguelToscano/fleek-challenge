import React from "react";
/* import { useHistory } from "react-router-dom"; */
import { history } from "../../utils/history";
// import { useAuth0 } from "@auth0/auth0-react";
// import Title from "../title";
// import Button from "../button";
// import SearchBar from "../search";
// import logonIcon from "../../../assets/icons/logon.svg";
// import "./header.scss";

const Header = () => {
  // const { logout } = useAuth0();
  /* const history = useHistory(); */
  // const callToLogon = () => {
  //   logout({ returnTo: `${window.location.origin}/marketing-tool/login` });
  // };

  function goCreatePage() {
    history.push("/marketing-tool/create");
  }
  return (
    <div className="headerConteiner">
      <header className="header"> HEADER
        {/* <Title level={1} content="Marketing Tool" />
        <Button
          styleButton="violet"
          valueButton="Crear"
          handleClick={goCreatePage}
        />
        <Title level={3} content="Promociones" />
        <SearchBar /> */}
      </header>
      <div
        className="Logon"
        aria-label="Close"
        // onClick={callToLogon}
        aria-hidden="true"
      >
        {/* <img className="Logon-Ico" src={logonIcon} alt="icon" /> */}
        <div className="Logon-Msg">Cerrar sesión</div>
      </div>
    </div>
  );
};

export default Header;
