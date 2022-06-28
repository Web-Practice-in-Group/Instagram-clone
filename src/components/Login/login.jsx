import React from "react";
import Letra from "../../components/Breadcrumbs/Icons/Letra";
import ImgLogin from "../../components/Breadcrumbs/Icons/ImgLogin";

function Login() {
  return (
    <div>
      <hr />
      <section>
        <article>
          <div className="imgLogin">
            <ImgLogin/>
          </div>
          <div>
            <div>
              login
              <div className="letras">
                <Letra />
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
