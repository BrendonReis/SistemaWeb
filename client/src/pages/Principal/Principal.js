import React from "react";
import { useNavigate } from "react-router-dom";



const Principal = () => {
  const navigate = useNavigate();

  const criarCadastro = async () => {
    navigate("/Login", { replace: true });
  };

  return (
    <div class="op">
      <div class="titlerapidez">
        <h1 class="rapidez">RAPIDEZ E</h1>
        <h1 class = "agilidade">FACILIDADE</h1>
      </div>

      <div>
        <nav class="acessosprin">
          <div class="acessos">
            <a href="#inicio" onClick={criarCadastro}>
              <li>ACESSO</li>
            </a>
            <a href="#servico">
              <li>SERVIÇOS</li>
            </a>
            <a href="#sobre">
              <li>SOBRE</li>
            </a>
            <a href="#contato">
              <li>CONTATO</li>
            </a>
          </div>
        </nav>
      </div>

      <section class="inscreva-seagora" id="inicio">
        <aside>
          <div>
            <h2>
              <span>Inscreva-se agora</span>
            </h2>
            <h2>na SWMPACH</h2>

            <p class="mensagemenc">
              "Há quanto tempo você não vai ao médico saber como está a sua
              saúde, hein? Não deixe mais para depois, se coloque como
              prioridade! Aqui na SWMPACH a gente tem uma equipe capacitada e
              preços justos para você fazer a sua revisão. Cadastre-se agora e
              agende sua consulta!"
           
            </p>
          </div>
        </aside>
      </section>

      <section class="servicosesp" id="servico" >
        <aside class="descricaone">
          <p>CLÍNICA MEDICA</p>
          <p>CLÍNICO GERAL</p>
          <p>OFTALMOLOGISTA</p>
          <p>CARDIOLOGISTA</p>
          <p>PSIQUIATRA</p>
          <p>DERMATOLOGISTA</p>
          <p>ENDOCRINOLOGISTA</p>
          <p>OUTRAS ESPECIALIDADES</p>
       
        </aside>
      </section>

      <section class="sobreswmpach"  id="sobre">
        <div >
          <p class="sobretext">
            Agenda médica na palma da mão: "Programe os atendimentos e o tempo
            específico para cada procedimento! Com a agenda médica online do
            MedPlus, sua equipe controla agendamentos, diminui faltas por meio
            do envio de SMS e e-mail e ganha tempo para realizar o que realmente
            importa: o atendimento ao paciente."
          </p>
         
        </div>

        <section class="contatotel"  id="contato">
          <div>
            <p class="telswmpach">SWMPACH TELEFONE: (61) 3000-3030<br/>(61) 3003-3131<br/></p>
          
          </div>
        </section>
      </section>
    </div>
  );
};

export default Principal;
