import React from "react";
import { motion as m, useScroll} from "framer-motion";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import backTour2 from "../images/bg-main.png";
import middle from "../images/middle.png";
import top from "../images/top.png";
import canopy2 from "../images/canopy2.jpg";
import Gallery from "../components/Gallery";


const Canopy = () => {
  return (
    <m.Box
    initial={{
          opacity: 0,
          // width: "10%",
          // x: "200",
          // y: "250",
        }}
        animate={{
          opacity: 1,
          // width: "100%",
          // x: "0",
          y: 0,
        }}
        transition={{ duration: 3, ease: "easeOut", type: "spring" }}>
      <m.div
        
      >
        <m.Box
          height="100px"
          width="100%"
          position="relative"

          //  initial={{
          //     opacity: 0,
          //     paddingLeft: 300,
          //   }}
          //   animate={{
          //     opacity: 1,
          //     paddingLeft: 0,
          //   }}
          //   transition={{ duration: 4, ease: "easeOut" }}
        >
          <m.div
            style={{
              position: "absolute",
              left: 19,
              top: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1.2rem",
            }}
            initial={
              {
                // x: -200,
                // opacity: 0
              }
            }
            animate={
              {
                // x: 0,
                // opacity: 1
              }
            }
            transition={{ delay: 2, duration: 2, ease: "easeOut" }}
          >
            <FaMapMarkerAlt size={50} color="black" />
            <Text fontSize="4xl" color="black" fontWeight="bold">
              London, UK
            </Text>
          </m.div>
          <Box pos="relative">
          <Image
            src={backTour2}
            height="100vh"
            width="100%"
            objectFit="cover"
            objectPosition="top center"
            z={-10}
          ></Image>
          <Image src={middle} pos="absolute" bottom={-200} width="100%" z={-5}></Image>
          <Image src={top} pos="absolute" bottom={0} width="100%" z={-2}></Image>
          </Box>
          

        </m.Box>
        <Flex p="10" bgColor="black" z={20}>
          <Box>
            <h1>The tour Canopy walkway</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Box>
          <Box w="60%" padding="3">
            <p>50000</p>
            <p>Stars</p>
            <Button/>
          </Box>
        </Flex>
        <Box>
            <h3 className="h3">What land feels like...</h3>
          {/* <Image src={canopy1} w="35rem"></Image> */}
          <Image src={canopy2} w="35rem"></Image>
        </Box>
      </m.div>
      <Box className="reviews-pics">
        <Gallery/>
      </Box>
      <Box width="100%" height="50vh">

      </Box>
    </m.Box>
  );
};

export default Canopy;
