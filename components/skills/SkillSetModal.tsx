/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import styles from "./skills.module.css";
import { Skills, splitSkills } from "../../data/Skills";
import SkillList from "./SkillList";

type ISkillSetModal = {
  isOpen: boolean;
  onClose(): void;
};

const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const languageCols = splitSkills(Skills.languages);
  const backendCols = splitSkills(Skills.backend);
  const frontendCols = splitSkills(Skills.frontend);
  const cicdCols = splitSkills(Skills.cicd);
  const dataBaseCols = splitSkills(Skills.database);
  const uiFrameWorkCols = splitSkills(Skills["ui frameworks"]);
  const productivityCols = splitSkills(Skills["productivity boost"]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Languages" columns={languageCols} />
          <SkillList title="Frontend Centric" columns={frontendCols} />
          <SkillList title="Backend Centric" columns={backendCols} />
          <SkillList title="CICD centric" columns={cicdCols} />
          <SkillList title="Database and Streams" columns={dataBaseCols} />
          <SkillList title="Ui Frameworks" columns={uiFrameWorkCols} />
          <SkillList title="Productivity boosts" columns={productivityCols} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SkillSetModal;
