import React from "react";
import { motion as m } from "framer-motion";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import {FaMapMarkerAlt} from "react-icons/fa";
import walkwayVideo from '../images/pexels-pat-whelen-5738617.mp4'

import tour2 from "../images/tour2.jpg";

const Canopy = () => {
  return (
    <Box>
      <m.div
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
          // y: 0,
        }}
        transition={{ duration: 3, ease: "easeOut", type: "spring" }}
      >
        <m.Box height="100px" width="100%" position="relative"
        
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
            <m.div style={{position: 'absolute', left: 19, top: 10, display: 'flex', flexDirection: 'row', alignItems:'center', gap:'1.2rem'}}
             initial={{
          // x: -200,
          // opacity: 0
        }}
        animate={{
          // x: 0,
          // opacity: 1

        }}
        transition={{ delay: 2, duration: 2, ease: "easeOut" }}>
          <FaMapMarkerAlt size={50} color='black'/>
          <Text fontSize='4xl' color='black' fontWeight='bold'>London, UK</Text>
         </m.div><Image
            src={tour2}
            height="100vh"
            width="100%"
            objectFit="cover"
          ></Image>
         
        </m.Box>
        <Box p='10'>
          <h1>The tour canopy walkway</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Box>
      </m.div>
      <Box className="reviews-pics">

      </Box>
      <Box width='100%' height='100vh'>
        <video autoPlay muted width='60%'>
        <source src={walkwayVideo} type="video/mp4"  />
        </video>
      </Box>
    </Box>
  );
};

export default Canopy;
