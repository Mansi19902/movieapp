import { IoMdHome } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";


export const navigation = [
    {
      label: "TV SHows",
      href: "tv",
      icon : <PiTelevisionFill />
    },
    {
      label: "Movies",
      href: "movie",
      icon : <BiSolidMoviePlay />
    }
  ]

  export const mobileNavigation = [
    {
        label : "Home",
        href : "/",
        icon : <IoMdHome />
    },
    ...navigation,
    {
        label : "search",
        href : "/search",
        icon : <CiSearch/>
    }
  ]