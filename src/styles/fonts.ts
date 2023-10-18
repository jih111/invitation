import { Inter, Lora, Source_Sans_3 } from "next/font/google";

// define your variable fonts
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: "400", subsets: ["latin"] });
const sourceCodePro500 = Source_Sans_3({ weight: "500", subsets: ["latin"] });
const sourceCodePro700 = Source_Sans_3({ weight: "700", subsets: ["latin"] });

export { inter, lora, sourceCodePro400, sourceCodePro500, sourceCodePro700 };
