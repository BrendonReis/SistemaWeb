import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svg from '../Cadastro/svg.png';
import Axios from 'axios';


function Cadastro() {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3001';
 
  const clickRegister = async (event) => {
    event.preventDefault();

    const form = { email, password };
    const result = await Axios.post(baseUrl + '/register', form);
  
    alert(result.data.msg);
    navigate("/Login", { replace: true });
    limparFormulario();
  }

  const possuiConta = async () => {
    navigate("/Login", {replace: true});
  }

  const limparFormulario = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <div class="limiter">
        <div class="container-login100">
        <div class="wrap-login100">
        <span class="login100-form-title p-b-26">CADASTRO</span>
        <span class="login100-form-title p-b-48">
        <i class="zmdi zmdi-font"></i>
        <img src={svg} class="imgcad" type="image/png" alt="svg"/>
        </span>


        <div data-validate = "E-mail valido: a@b.c">
        <span class="btn-show-pass">
        <i class="zmdi zmdi-eye"></i>
        </span>


        <form onSubmit={clickRegister}>
          <div class="wrap-input100 validate-input" >
          <input type="text" class="input100"  name="email" required placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}  />
          </div>
          <div class="wrap-input100 validate-input" data-validate="Entre com a Senha">
            <span class="btn-show-pass">
            <i class="zmdi zmdi-eye"></i>
            </span>
            <input type="password" class="input100" name="password" required placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
            <div class="login100-form-bgbtn"></div>
          <button type="submit" class="login100-form-btn" onSubmit={clickRegister}>Cadastrar</button>
          </div>
          </div>

          <div class="text-center p-t-115">
            <span class="txt1">
							Já possui uma conta?
						</span>

          <button type="submit" class="txt2" href="#" onClick={possuiConta}>Clique aqui.</button>
          </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
     
      
  )
};

export default Cadastro;