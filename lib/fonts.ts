import { Karla, Poiret_One, Poppins } from "next/font/google";

export const appFont = Poiret_One({ subsets: ["latin"], weight: ["400"] });

export const titleFont = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const textFont = Karla({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
