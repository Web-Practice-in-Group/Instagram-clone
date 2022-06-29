import React from "react";
import Instagram from "../Breadcrumbs/Icons/Instagram";
import ImgLogin from "../Breadcrumbs/Icons/ImgLogin";
import NavButton from "../Buttons/Button";
import {
  LoginContainer,
  Loginform,
  LoginformInput,
  LoginImagen,
} from "../../assets/Elements";

function Login() {
  return (
    <>
      <LoginContainer>
        <LoginImagen>
          <ImgLogin />
        </LoginImagen>
        <Loginform>
          <div>
            <Instagram />
          </div>
          <LoginformInput>
            <input
              type="text"
              className="usuario"
              id="usuario"
              placeholder="Usuario"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
            <NavButton
              color="#fff"
              background="#0095f6"
              name="Iniciar Sesion"
            />
          </LoginformInput>
          <div>crear cuenta</div>
        </Loginform>
      </LoginContainer>
      <footer></footer>
    </>
  );
}

export default Login;
