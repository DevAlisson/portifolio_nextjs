import React from 'react';

import { Section, Head, Form, Inputs } from '~/styles/pages/contact';

const ContactPage = () => (
  <>
    <Section id="contact">
      <Head>
       <title>CONTATOS</title>
        <h1>CONTATO</h1>
      </Head>
      <Form>
        <Inputs>
          <label>Digite seu nome</label>
          <input name="name" id="name" placeholder="Nome" />
        </Inputs>
        <Inputs>
          <label>Seu E-mail</label>
          <input name="email" id="email" placeholder="exemplo@exemplo.com.br" />
        </Inputs>
        <Inputs>
          <label>Título</label>
          <input
            name="text"
            id="text"
            placeholder="Digite o título do contato"
          />
        </Inputs>
        <Inputs>
          <label>Assunto</label>
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Digite o assunto do contato"
          />
        </Inputs>
        <button className="button" type="submit">
          Enviar !
        </button>
      </Form>
    </Section>
  </>
);

export default ContactPage;
