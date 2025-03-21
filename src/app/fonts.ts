import { Cormorant_Garamond, Poiret_One, Quicksand } from "next/font/google";

export const appFont = Poiret_One({ subsets: ["latin"], weight: ["400"] });

export const titleFont = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const textFont = Quicksand({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
