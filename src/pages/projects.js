import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import websites from '~/data/weblinks';

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
        {websites.map(project => (
          <Row key={project.id}>
            <img src={project.image} alt="Project Logo" />
            <span>{project.name}</span>
            <BrandsContainer>
              <a
                href={project.github_repo}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub color="#000" size="3.5rem" />
              </a>
              <a
                href={project.website_link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiSend color="#000" size="3.5rem" />
              </a>
            </BrandsContainer>
          </Row>
        ))}
      </ProjectsContainer>
    </Section>
  </>
);

export default ProjectsPage;
