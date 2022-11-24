import { Box, Flex, Image, Img, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import './slider.css'
const PopularItems = () => {
  const [cardata, setCardata] = useState([]);
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <h1 style={{ color: "black", fontSize: "45px" }}> <GrFormPrevious /> </h1>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <Box className={className} onClick={onClick} display="none">
            <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}> <GrFormNext />  </h1>
        </Box>

    );
};

  useEffect(() => {
    const getCarosuledata = () => {
      fetch(`https://zappos-server.herokuapp.com/popularitems`)
        .then((res) => res.json())
        .then((data) => setCardata(data))
        .catch((err) => {
          console.log(err);
        });
    };

    getCarosuledata();
  }, []);
  var settings = {
    prevArrow: <PreviousBtn />,
     nextArrow: <NextBtn />,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Box
   h={{
              base: "305px",
              sm: "300px",
              md: "320px",
              lg: "400px",
              xl: "400px",
            }}display='block' pt="-150px">
      <Text ml="50px" fontSize="30px" fontWeight="bold.500" mb="20px" mt="80px">
        Popular Items
      </Text>
      <Slider {...settings}>
        {cardata.map((elem) => (
          <Box
            key={elem.id}
            // mr="20px"
             bg="#FFFFFF"
             h={"300px"}
             boxShadow={'2xl'}
             border="1px solid silver"
            // h={{
            //   base: "405px",
            //   sm: "420px",
            //   md: "420px",
            //   lg: "400px",
            //   xl: "400px",
            // }}
            // w={{ base: "50%", sm: "28%", md: "20%", lg: "13%", xl: "13%" }}
          >
            <Img
            display={'block'}
              width={'100x'}
           
              // mh={{
              //   base: "290px",
              //   sm: "290px",
              //   md: "300px",
              //   lg: "280px",
              //   xl: "280px",
              // }}
              
               maxH={"180px"}
            //  w={{ base: "70%", sm: "70%", md: "70%", lg: "70%", xl: "100%" }}
             
              src={elem.imgurl}
              alt="img"
            />

            <Flex m="10px" mb="-5px" alignItems="center">
              <AiOutlineHeart /> {elem.favourites}
            </Flex>
            <Text m="10px" mb="-5px">
              {elem.name}
            </Text>
            <Text m="10px" mb="-5px">
              $ {elem.price}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PopularItems;
