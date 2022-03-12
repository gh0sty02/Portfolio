import { AspectRatio, Image } from "@chakra-ui/react";
import { IProjects } from "data/Projects";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { variants } from "./varients";

const CoverImage: FC<{ proj: IProjects }> = ({ proj }) => {
  const MotionImage = motion(Image);
  return (
    <AspectRatio
      gridRowStart={{ base: "1", md: "1", lg: "1" }}
      gridColumnStart={{
        md: `${proj.isLeft ? "1" : "2"}`,
        lg: `${proj.isLeft ? "1" : "2"}`,
      }}
      ratio={16 / 9}
    >
      <MotionImage
        objectPosition="top"
        borderRadius={proj.isLeft ? ".5rem 0 0 .5rem" : "0 0.5rem 0.5rem 0"}
        objectFit="cover"
        src={proj.image}
        alt={proj.name}
        my="auto"
        opacity={0.75}
        whileHover={variants.hover}
        whileTap={variants.tap}
      />
    </AspectRatio>
  );
};

export default CoverImage;
