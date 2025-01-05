import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import IconLinkedin from '@components/icons/linkedin';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 500px;
  margin: 0 auto;
  
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    width: 150px;
  }
 
  .connect-link {
  display: flex;
  align-items: center; /* Aligns all items in the center vertically */
  justify-content: center;
  margin-top: 30px;
  font-size: var(--fz-lg);
  line-height: var(--fz-lg);

  a {
    display: flex;
    align-items: center; /* Ensures the icon aligns with the text */
    color: var(--green);
    text-decoration: none;
    margin-left: 5px;
    margin-top: -10px;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-left: 2px;
      vertical-align: text-top; /* Ensures proper vertical alignment */
    }
  }
}


`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
      I’m actively seeking full-stack and AI internship opportunities! My inbox is always open, so if you have an opportunity or just want to connect, feel free to reach out—I’ll do my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
      <div className="connect-link">
        Or connect with me at
        <a href="https://www.linkedin.com/in/siddhi-dabholkar10/" target="_blank" rel="noopener noreferrer">
          <IconLinkedin />
        </a>
      </div>
      </StyledContactSection>
  );
};

export default Contact;
