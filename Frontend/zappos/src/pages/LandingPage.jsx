import { Box } from "@chakra-ui/react"
import BelowNavbarBanner from "../components/LandingPage-Components/BelowNavbarBanner";
import BelowTrending from "../components/LandingPage-Components/BelowTrending";
import Bigbanner2 from "../components/LandingPage-Components/Bigbanner2";
import Bigbanners from "../components/LandingPage-Components/Bigbanners";
import PopularCategory from "../components/LandingPage-Components/PopularCategory";
import PopularItems from "../components/LandingPage-Components/PopularItems";
import TrandingBrands from "../components/LandingPage-Components/TrendingBrands";
import Zapposforgood from "../components/LandingPage-Components/Zapposforgood";


const LandingPage = ()=>{


    return(
        <Box>
            <BelowNavbarBanner/> 
            <PopularCategory/>
            <Bigbanners/>
            <PopularItems/>
            <Bigbanner2/>
            <TrandingBrands/>
            <BelowTrending/>
            <Zapposforgood/>
        </Box>
    )
}

export default LandingPage;