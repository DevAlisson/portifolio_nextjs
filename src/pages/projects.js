import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import {
  Section,
  ProjectsContainer,
  Row,
  BrandsContainer,
} from '~/styles/pages/projects';

const ProjectsPage = () => (
  <>
    <Section id="projects">
      <h1>PROJETOS</h1>
      <ProjectsContainer>
        <Row>
          <img src="/static/tests/corona.png" alt="Logo" />
          <span>COVID AGORA</span>
          <BrandsContainer>
            <a href="###" rel="noopener noreferrer" target="_blank">
              <FaGithub color="#000" size="3.5rem" />
            </a>
            <a href="###" rel="noopener noreferrer" target="_blank">
              <FiSend color="#000" size="3.5rem" />
            </a>
          </BrandsContainer>
        </Row>
        <Row>
          <img src="/static/tests/rsxp.png" alt="Logo" />
          <span>RSXP</span>
          <BrandsContainer>
            <a href="###" rel="noopener noreferrer" target="_blank">
              <FaGithub color="#000" size="3.5rem" />
            </a>
            <a href="###" rel="noopener noreferrer" target="_blank">
              <FiSend color="#000" size="3.5rem" />
            </a>
          </BrandsContainer>
        </Row>
      </ProjectsContainer>
    </Section>
  </>
);

export default ProjectsPage;
