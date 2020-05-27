import React from 'react';

import Link from '~/components/Link';

import { Section, Head, FormContainer, Inputs } from '~/styles/pages/contact';

const ContactPage = () => (
  <>
    <Section id="contact">
      <Head>
        <h1>CONTATO</h1>
      </Head>
      <FormContainer>
        <Inputs>
          <form>
            <input type="text" placeholder="Seu Nome" />
          </form>
        </Inputs>
      </FormContainer>
    </Section>
  </>
);

export default ContactPage;
