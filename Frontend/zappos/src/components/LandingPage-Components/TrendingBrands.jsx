import { Box, Flex, Image, Img, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";
import './slider.css'

const TrandingBrands = () => {
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
      fetch(`https://zappos-server.herokuapp.com/Trendingbrands`)
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
    <Box  style={{height:"210px"}} border="2px solid red">
      <Text ml="50px" fontSize="30px" fontWeight="bold.500" mb="20px">
        Trending Brands
      </Text>
      <Slider {...settings}>
        {cardata.map((elem) => (
          <Box
            key={elem.id}
            mr="20px"
          //  border="1px solid white"
            h={{
              base: "90px",
              sm: "100px",
              md: "1400px",
              lg: "160px",
              xl: "180px",
            }}
            w={{ base: "50%", sm: "28%", md: "20%", lg: "15%", xl: "15%" }}
          >
            {/* <Flex
            //  bg="#f5f5f5"
              border="1px solid #f5f5f5"
              h="85%"
              alignItems="center"
            > */}
              <Img src={elem.imgurl} alt="img" />
            {/* </Flex> */}

            <Text textAlign="center" m="10px" mb="-5px">
              {elem.name}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TrandingBrands;
