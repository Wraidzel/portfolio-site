import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"; // 1. Imported AiFillLinkedin here
import { IoMailOutline } from "react-icons/io5";
import type { IconLink } from "../types/link";

export const FinleyEmail = "fin.stein02@gmail.com";

export const FinleySocials: IconLink[] = [

  {
    url: `mailto:${FinleyEmail}`,
    icon: IoMailOutline,
  },
  {
    // 3. Added LinkedIn AFTER Instagram
    url: "https://www.linkedin.com/in/finley-stein-9968a0177/",
    icon: AiFillLinkedin,
  },
  {
    url: "https://www.instagram.com/finley_stein_/",
    icon: AiFillInstagram,
  },

];