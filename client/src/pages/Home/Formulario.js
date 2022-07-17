import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";


function Formulario() {
  const [name, setName] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [convenio, setConvenio] = useState("");
  const [medico, setMedico] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [tell, setTell] = useState("");
  const [obs, setObs] = useState("");
  
  const navigate = useNavigate();

  const baseUrl = "http://localhost:3001";

    const clickFormulario = async (event) => {

      event.preventDefault();

      const form = { name, especialidade, convenio, medico, date, hour, emailForm, tell, obs };
      const result = await Axios.post(baseUrl + "/formulario", form);
      alert(result.data.msg);
      limparFormulario();
      navigate("/Ticket", { replace: true });
    };

    const limparFormulario = () => {
        setEspecialidade("");
        setConvenio("");
        setMedico("");
        setHour("");
        setEmailForm("");
        setTell("");
        setObs("");
        setName("");
  };

  return (
      <div class="content">
      <div class="container">
      <div class="row align-items-stretch no-gutters contact-wrap">
      <div class="tamanhototal">
      <div class="col-md-12">
      <div class="form h-100">
      <h3>Agendamento médico</h3>

      <form class="mb-5">
      <div class="row">
      <div class="col-md-6 form-group mb-3">
      <label for="" class="col-form-label">Nome Completo *</label>
      <input type="text" class="form-control" required value={name} name="name" onChange={(e) => setName(e.target.value)}  onSubmit={clickFormulario}></input>
      
      <div class="col-md-6 form-group mb-3">
      <label for="" class="col-form-label">Email *</label>
      <input type="text" class="form-control" required value={emailForm} name="emailForm" onChange={(e) => setEmailForm(e.target.value)}  onSubmit={clickFormulario}></input>
      </div>
    </div>
      </div>
      <div class="col-md-6 form-group mb-3">
      <label for="" class="col-form-label">Telefone para contato *</label>
      <input type="text" class="form-control" required value={tell} name="tell" onChange={(e) => setTell(e.target.value)}  onSubmit={clickFormulario}></input>
      </div>
    </form>
    </div>

      <div class="row">
      <form onSubmit={clickFormulario}>
      <div class="col-md-12 form-group mb-3">
      <label for="budget" class="col-form-label">Selecione uma especialidade</label>
          <select class="custom-select" value={especialidade} name="especialidade" required onChange={(event) => setEspecialidade(event.target.value)}>  onSubmit={clickFormulario}
            <option value=""></option>
            <option value="OFTAMOLOGIA">OFTAMOLOGIA</option>
            <option value="CARDIOLOGIA">CARDIOLOGIA</option>
            <option value="PEDIATRIA">PEDIATRIA</option>
            <option value="ORTOPEDIA">ORTOPEDIA</option>
            <option value="CLINICOGERAL">CLINICO GERAL</option>
            <option value="OTORRINOLARINGOLOGIA">OTORRINOLARINGOLOGIA</option>
            <option value="NEUROLOGIA">NEUROLOGIA</option>
            <option value="GINECOLOGIA">GINECOLOGIA</option>
            <option value="UROLOGIA">UROLOGIA</option>
            <option value="DERMATOLOGIA">DERMATOLOGIA</option>
            <option value="CIRURGIAO">CIRURGIAO</option>
          </select>
          <p> Especialidade selecionada:{especialidade}</p><br/>

          <div class="row">
          <div class="col-md-12 form-group mb-3">
          <label for="budget" class="col-form-label">Selecione um convenio</label>
          <select class="custom-select" value={convenio}  name="convenio" required onChange={(e) => setConvenio(e.target.value)}  onSubmit={clickFormulario} >
            <option value=""></option>
            <option value="SULAMERICA">SUL AMERICA</option>
            <option value="AMILSAUDE">AMIL SAUDE</option>
            <option value="GAMASAUDE">GAMA SAUDE</option>
            <option value="SMILESAUDE">SMILE SAUDE</option>
            <option value="BRADESCO">BRADESCO</option>
            <option value="UNIMED">UNIMED</option>
            <option value="QUALITYSAUDE">QUALITY SAUDE</option>
            <option value="INTERMEDICA">INTERMEDICA</option>
          </select>
          <p> Convênio Selecionado:{convenio}</p><br/>
          </div>
          </div> 

          <div class="row">
          <div class="col-md-12 form-group mb-3">
          <label for="budget" class="col-form-label">Escolha um médico</label>
          <select class="custom-select" value={medico} name="medico" required onChange={(e) => setMedico(e.target.value)}  onSubmit={clickFormulario}>
            <option value=""></option>
            <option value="DR.MARIODESOUZA">DR.MARIO DE SOUZA</option>
            <option value="DR.ANTONIOFERREIRA">DR.ANTONIO FERREIRA</option>
            <option value="DRA.MONICAMATOS">DRA.MONICA MATOS</option>
            <option value="DRA.SEBASTIANAALMEIDA">DRA.SEBASTIANA ALMEIDA</option>
            <option value="DR.HUGOCAMPOS">DR.HUGO CAMPOS</option>
            <option value="DRA.VANESSAMATOS">DRA.VANESSA MATOS</option>
            <option value="DR.HUMBERTOOLIVEIRACOSTA">DR.HUMBERTO OLIVEIRA COSTA</option>
            <option value="DR.JOÃOLOUVADEUS">DR.JOÃO LOUVADEUS</option>
          </select>
          <p> Médico selecionado:{medico}</p><br/>
          </div>
          </div>

          <div class="row">
          <div class="col-md-12 form-group mb-3">
          <label for="budget" class="col-form-label">Escolha um horário</label>
          <select  class="custom-select" values={hour} name="hour" required onChange={(e) => setHour(e.target.value)}  onSubmit={clickFormulario}>
            <option value=""></option>
            <option value="09hrs">09:00</option>
            <option value="10hrs">10:00</option>
            <option value="11hrs">11:00</option>
            <option value="13hrs">13:00</option>
            <option value="14hrs">14:00</option>
            <option value="15hrs">15:00</option>
            <option value="16hrs">16:00</option>
            <option value="17hrs">17:00</option>
          </select>
          </div>
          </div><br/>

          <div class="row">
          <div class="col-md-12 form-group mb-3">
          <label for="budget" class="col-form-label">Escolha a data</label><br/>
          <input id="dates" value={date} name="date" required type="date" onChange={(e) => setDate(e.target.value)}  onSubmit={clickFormulario}></input>
          </div>
          </div><br/>  

          <div class="row">
          <div class="col-md-12 form-group mb-3"></div>
          <label for="message" class="col-form-label">Observação </label><br/>
          <textarea type="text" class="textarea" rows="10" cols="50" value={obs} name="obs" onChange={(e) => setObs(e.target.value)}  onSubmit={clickFormulario}></textarea>
          </div>
          </div><br/>

          <div class="row">
          <div class="col-md-12 form-group">
          <button class="btn btn-primary rounded-0 py-2 px-4" type="submit" onSubmit={clickFormulario}>
            Cadastrar
          </button>
          </div>
          </div>

      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
}

export default Formulario;
