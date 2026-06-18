import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useDisclosure } from '@/hooks/use-disclosure';
import { useTheme } from '@/hooks/use-theme';
import Link from 'components/utils/Link';
import React from 'react';
import { links } from 'data/NavLinks';
import Logo from 'components/utils/Logo';
import { useRouter } from 'next/router';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';

const NavBar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { resolvedTheme, setTheme, theme } = useTheme();
  let { asPath } = router;

  const toggleTheme = () => {
    // Toggle between light and dark (system preference is default)
    if (theme === 'system') {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    } else {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }
  };

  const navItem = links.map((link) => (
    <Link
      href={link!.href}
      currentPath={asPath}
      key={link!.name}
      props={{
        rounded: 'md',
        p: '2',
        _hover: true,
        _active: true,
      }}
    >
      {link!.name}
    </Link>
  ));

  return (
    <>
      <div className="py-5 border-t-2 border-primary">
        <Container maxW="container.lg">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <button
              onClick={isOpen ? onClose : onOpen}
              aria-label="Open Menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>

            {/* Logo and Nav Items */}
            <div className="flex items-center space-x-8">
              <div>
                <Logo />
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-4">{navItem}</nav>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <Button
                onClick={toggleTheme}
                aria-label="Switch Theme"
                variant="ghost"
              >
                {resolvedTheme === 'light' ? (
                  <HiMoon size={20} />
                ) : (
                  <HiSun size={20} />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen ? (
            <div className="pb-4 mt-3">
              <nav className="flex flex-col space-y-4">{navItem}</nav>
            </div>
          ) : null}
        </Container>
      </div>
    </>
  );
};

export default NavBar;
