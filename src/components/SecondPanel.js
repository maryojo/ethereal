import React, {useState} from "react";
import tour2 from "../images/tour2.jpg";
import tour1 from "../images/tour3.jpg";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SecondPanel = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  function handleSelectTour(tour) {
    setSelectedTour(tour);

  }
  return (
    <Flex   height='100%' justify='center' align='center'>
      <Flex direction="row" justify="center" align="center" height='100%'>
      <Spacer/>
        {/* <Box w='35%' className={selectedTour === 'tour1'? 'expand' :''}> */}
        <Box w='45%' className={selectedTour === 'tour2' ? 'expand' : ' '}>
        <Link to='/canopy'>

          <img src={tour2} />
          </Link>
        </Box>
        
        <Spacer/>
        <Box w='45%'>
          <img src={tour1} />
        </Box>
        <Spacer/>
      </Flex>
    </Flex>
  );
};

export default SecondPanel;
