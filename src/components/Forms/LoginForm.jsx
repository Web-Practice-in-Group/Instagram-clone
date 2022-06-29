import React from "react";
import Instagram from "../Breadcrumbs/Icons/Instagram";
import ImgLogin from "../Breadcrumbs/Icons/ImgLogin";

function Login() {
  return (
    <div>     
      <section>
        <article>
          <div className="imgLogin">
            <ImgLogin/>
          </div>
          <div>
            <div>
              login
              <div className="letras">
                <Instagram />
              </div>
              <form action="">
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
                <button type="submit">Iniciar sesión</button>
              </form>
            </div>
            <div>crear cuenta</div>
          </div>
        </article>
      </section>
      <footer></footer>
    </div>
  );
}

export default Login;
