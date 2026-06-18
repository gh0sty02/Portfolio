import { Container } from '@/components/ui/container';
import { Divider } from '@/components/ui/divider';
import React from 'react';
import Logo from 'components/utils/Logo';
import { FaGithub } from 'react-icons/fa';
import { socials } from 'data/Socials';

const Footer = () => {
  return (
    <footer role="contentinfo" className="mx-auto max-w-7xl py-12 px-4 md:px-8">
      <Container maxW="container.lg">
        <div className="flex flex-row items-center justify-between space-x-4 pb-5">
          <Logo />
          <div className="flex space-x-2">
            {socials.map((social) => (
              <a
                href={social.href}
                aria-label={social.name}
                key={social.name}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <Divider my={2} />
        <div className="flex flex-row items-center justify-between pt-5">
          <p className="text-base">
            Pranay Yadav &copy; {new Date().getFullYear()}{' '}
          </p>
          <a
            href="https://github.com/gh0sty02/"
            aria-label="Github"
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub fontSize="18px" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
