import React from 'react';
import styled from 'styled-components';

const StyledCertificationsSection = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding: 100px 0;

  h2 {
    font-size: var(--fz-heading);
    color: var(--lightest-slate);
    margin-bottom: 40px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  li {
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    padding: 20px;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    flex: 1 1 300px;
    max-width: 300px;

    &:hover,
    &:focus {
      transform: translateY(-5px);
    }

    a {
      color: var(--lightest-slate);
      text-decoration: none;
      font-size: var(--fz-lg);
      font-weight: 600;
      transition: var(--transition);

      &:hover,
      &:focus {
        color: var(--green);
        text-decoration: none;
      }
    }
  }
`;

const certifications = [
  {
    name: 'WalkMe Digital Adoption Training Badge',
    url: 'https://drive.google.com/file/d/1t0FeV-dec3cxCA-7G6po3FlL7lOcPTAK/view',
  },
  {
    name: 'Microsoft Certified - Azure Fundamentals',
    url: 'https://learn.microsoft.com/en-us/users/siddhidabholkar-3754/credentials/a8af7e312cf4afda',
  },
  {
    name: 'Responsive Web Design - freeCodeCamp',
    url: 'https://freecodecamp.org/certification/fcc3a18a7de-b0ee-403f-b22f-2a283053742c/responsive-web-design',
  },
  {
    name: 'Technical Support Fundamentals by Google - Coursera',
    url: 'https://coursera.org/share/5ba55191a2969cce663fcfbc5b87c4ca',
  },
  {
    name: 'IT Security: Defense against the Digital Dark Arts by Google - Coursera',
    url: 'https://coursera.org/share/4211c283d8a5de43689a717b78d159d8',
  },
  {
    name: 'SQL (Basic) Certificate - HackerRank',
    url: 'https://www.hackerrank.com/certificates/734cfc4f207b',
  },
  {
    name: 'SQL (Intermediate) Certificate - HackerRank',
    url: 'https://www.hackerrank.com/certificates/db4ca387ff10',
  },
];

const Certifications = () => (
  <StyledCertificationsSection id="certifications">
    <h2>Certifications</h2>
    <ul>
      {certifications.map((cert, i) => (
        <li key={i}>
          <a href={cert.url} target="_blank" rel="noopener noreferrer">
            {cert.name}
          </a>
        </li>
      ))}
    </ul>
  </StyledCertificationsSection>
);

export default Certifications;