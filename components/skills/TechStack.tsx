'use client';

import { memo } from 'react';
import { useDisclosure } from '@/hooks/use-disclosure';
import TechStack from 'components/skills/Stack';
import SkillSetModal from 'components/skills/SkillSetModal';

const AboutSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TechStack onOpen={onOpen} />
      <SkillSetModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default memo(AboutSection);
