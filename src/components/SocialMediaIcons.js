import React from "react";
import { Flex } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const SocialMediaIcons = () => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      bg={"whiteAlpha.300"}
      position={"absolute"}
      bottom="0"
      left="0"
      zIndex={2}
      px={2}
      py={5}

    >
      <RiTwitterFill />
      <RiInstagramFill />
      <RiFacebookFill />
    </Flex>
  );
};

export default SocialMediaIcons;
