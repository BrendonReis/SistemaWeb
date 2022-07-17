import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import svg from "../Cadastro/svg.png";
import Axios from "axios";

function Login() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const navigate = useNavigate();
  const baseUrl = "http://localhost:3001";

  const clickLogin = async (event) => {
    event.preventDefault();

    const form = { emailLogin, passwordLogin };
    const result = await Axios.post(baseUrl + "/Login", form);
    alert(result.data.msg);
    
    if (result.data.ok === false) {
      return
    }
    
    limparFormulario();
    navigate("/Formulario", { replace: true });
  };

  const registreSe = async () => {
    navigate("/Cadastro", { replace: true });
  };

  const principal = async () => {
    navigate("/", { replace: true });
  };

  const limparFormulario = () => {
    setEmailLogin("");
    setPasswordLogin("");
  };

  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form
            class="login100-form validate-form"
            method="get"
            action="enviar"
            onSubmit={clickLogin}
          >
            <span class="login100-form-logo">
              <i class="zmdi zmdi-landscape"></i>
            </span>
            <div>
              <span class="login100-form-title p-b-34 p-t-27">LOGIN</span>
              <img src={svg} class="imgcadtwo" type="image/png" alt="svg" />
              <div data-validate="Enter username"></div>
              <input
                type="text"
                class="input100"
                name="email-login"
                required
                placeholder="E-mail"
                value={emailLogin}
                onChange={(event) => setEmailLogin(event.target.value)}
              />
              <div class="wrap-input100 validate-input"></div>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                type="password"
                class="input100"
                name="password-login"
                required
                placeholder="Senha"
                value={passwordLogin}
                onChange={(event) => setPasswordLogin(event.target.value)}
              />
              <span data-placeholder="&#xf191;"></span>
            </div>

            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtntwo"></div>
              <button
                type="submit"
                class="login100-form-btn"
                onSubmit={clickLogin}
              >
                Entrar
              </button>
            </div>

            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="text-center p-t-115">
                  <span class="txt1">Não possui uma conta?</span>

                  <button
                    type="submit"
                    class="txt2"
                    href="#"
                    onClick={registreSe}
                  >
                    Clique aqui.
                  </button>
                </div>

                <button
                  type="submit"
                  class="login100-form-btn"
                  onClick={principal}
                >
                  Menu Principal
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
