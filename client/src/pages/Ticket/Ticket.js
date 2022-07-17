import React from 'react'
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';


const Ticket = () => {

   const navigate = useNavigate();

   const possuiConta = async () => {
      navigate("/Login", {replace: true});
    }

  return (

     <div>
         <p class = "consultaticket">Consulta Marcada com Sucesso!</p>

        <p class = "consultaticketone">LEIA o QR Code para receber seu comprovante de marcação</p>

        <QRCodeSVG class="qrcode" value="https://reactjs.org/"/>

        <p class="consultatickettwo">Obrigado e conte sempre com a SWMPACH!</p>

        <button type="submit" class="consultaticketthree" href="#" onClick={possuiConta}>Voltar para o Menu Principal</button>
         
     </div>
     
)};


export default Ticket;