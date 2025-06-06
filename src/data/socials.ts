import { AiFillInstagram } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import type { IconLink } from "../types/link";

export const FinleyEmail = "fin.stein02@gmail.com";

export const FinleySocials: IconLink[] = [
  {
    url: `mailto:${FinleyEmail}`,
    icon: IoMailOutline,
  },
  {
    url: "https://www.instagram.com/finley_stein_/",
    icon: AiFillInstagram,
  },
];
