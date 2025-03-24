import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  nome: string = '';
  email: string = '';
  assunto: string = '';
  mensagem: string = '';

  enviarMensagem() {
    if (!this.nome || !this.email || !this.assunto || !this.mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const serviceID = 'service_7o3jo7c'; // Substitua pelo seu Service ID
    const templateID = 'template_xkmufce'; // Substitua pelo seu Template ID
    const publicKey = 'RmLN0xYrgJ5H1uFjv'; // Substitua pela sua chave pública

    const templateParams = {
      nome: this.nome,
      email: this.email,
      assunto: this.assunto,
      mensagem: this.mensagem
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');

        // Limpar os campos após o envio bem-sucedido
        this.nome = '';
        this.email = '';
        this.assunto = '';
        this.mensagem = '';
      })
      .catch(error => {
        console.error('Erro ao enviar email:', error);
        alert('Erro ao enviar mensagem.');
      });
  }
}
