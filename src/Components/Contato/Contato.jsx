import React from 'react'
import './Contato.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contato = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8a0a13fa-d192-44da-8478-03a3793a1ade");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("O formulário foi enviado com sucesso!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Mande uma mensagem <img src={msg_icon} alt="" /></h3>
        <p>
        Sinta-se à vontade para entrar em contato através do formulário de contato ou encontre nossas informações de contato abaixo. 
        Seus comentários, perguntas e sugestões são importantes para nós, 
        pois nos esforçamos para fornecer um serviço excepcional à nossa comunidade universitária.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />gugagantois@gmail.com</li>
            <li><img src={phone_icon} alt="" />+55 (71) 99958-8246</li>
            <li><img src={location_icon} alt="" />32 Rua das Ruas, Salvador <br/> BA 02313, Brasil </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Seu nome</label>
            <input type="text" name='name' placeholder='Digite o seu nome' required/>
            <label>Telefone</label>
            <input type="tel" name='phone' placeholder='Digite o seu número de telefone ' required />
            <label>Digite sua mensagem aqui</label>
            <textarea name="message" rows={6} placeholder='Digite sua mensagem' required></textarea>
            <button type='submit' className='btn dark-btn'>Envie agora <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contato



