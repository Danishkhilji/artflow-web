import {
  demoReview1,
  AeroPlaneIcon,
  Customize,
  Return,
  Sustain,
  Europe,
  Delivery,
  //png imports
  about1,
  about2,
  about3,
  about5,
} from "../constant";

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";

const shortAboutUs = [
  {
    id: "1",
    title: "Packaging configurator",
    description:
      "Design the packaging that suits your brand perfectly with our intuitive, step-by-step configurator. Enjoy complete freedom in selecting materials, print options, finishes, and add-ons, while controlling a price tailored to your needs.",
    link: "/",
    cta: "SIGN UP",
    img: about1,
  },
  {
    id: "2",
    title: "Test print ",
    description:
      "Want to test your design before ordering? We’ve got you covered! We'll print it and deliver it to your doorstep within 10 days so you can review and adjust it before placing your final order.",
    link: "/",
    cta: "SIGN UP",
    img: about2,
  },
  {
    id: "3",
    title: "3D previews",
    description:
      "Need pictures of your new designer bags? We’ve got you covered! Simply upload your design to our design service and receive a 3D model that can be used for any purpose.",
    link: "/",
    cta: "LEARN MORE",
    img: about3,
  },
  {
    id: "4",
    title: "Design support ",
    description:
      "Struggling with design preparation for printing? Don't worry! Our design team is ready to support you every step of the way. Just reach out to us. ",
    link: "/",
    cta: "CONTACT US",
    img: about5,
  },
];

const reviewsData = [
  {
    id: "1",
    title: "Doris Erne",
    subTitle: "Wheycation",
    img: demoReview1,
    description:
      "Packiro is a perfect fit for us: high quality products, sustainable and uncomplicated, and excellent customer service 👌",
  },
  {
    id: "2",
    title: "Doris Erne",
    subTitle: "Wheycation",
    img: demoReview1,
    description:
      "Packiro is a perfect fit for us: high quality products, sustainable and uncomplicated, and excellent customer service 👌",
  },
  {
    id: "3",
    title: "Doris Erne",
    subTitle: "Wheycation",
    img: demoReview1,
    description:
      "Packiro is a perfect fit for us: high quality products, sustainable and uncomplicated, and excellent customer service 👌",
  },
];

const socialMediaIcon = [

  { id: "2", icon: <AeroPlaneIcon size={19} /> },
  { id: "3", icon: <FaFacebookF size={19} /> },
  { id: "1", icon: <IoLogoInstagram size={19} /> },
  { id: "4", icon: <FaLinkedinIn size={19} /> },
  { id: "5", icon: <IoLogoWhatsapp size={19} /> },
];

const ourFeatures = [
  {
    icon: <Customize />,
    title: "Full customization",
    description: "create any size and add effects",
    mainTitle: "Craft your perfect packaging",
    fullDescription:
      "Get ready to bring your ideas to life with our various customization options. Choose from various customized sizes, or pick from our selection of standard sizes! Using our easy-to-use configurator, you can add your print design on every side of your packaging, making it even more special with different textures and finishes. Enjoy creating something unique!",
  },
  {
    icon: <Delivery />,
    title: "fastest DELIvery",
    description: "4-week production time",
    mainTitle: "Say goodbye to the long delivery!",
    fullTitle: "fastest DELIvery",
    fullDescription:
      "Get ready for the fastest delivery ever! Thanks to our streamlined production schedule, we’re excited to offer customized bags made just for you in just four weeks. Say goodbye to long waits and customs hassles - your bags will arrive right at your doorstep, ready to impress!",
  },
  {
    icon: <Sustain />,
    title: "Sustainable materials ",
    description: "sourced from europe",
    fullTitle: "Sustainable materials",
    mainTitle: "Certified quality for your coffee",
    fullDescription:
      "We meticulously select and source materials that comply with European Packaging Standards and collaborate with European material suppliers to consistently offer the latest sustainable packaging trends.",
  },
  {
    icon: <Europe />,
    title: "PRODUCTION BASED",
    description: "in europe",
    mainTitle: "We are the 1st European coffee packaging producer",
    fullTitle: "PRODUCTION BASED in europe",
    fullDescription:
      "Based in the Baltics, our state-of-the-art production equipment allows us to manufacture packaging quickly and with exceptional quality. Our laboratory monitors quality control at every stage, 24/7. With BRC and ISO 9001 certifications, we guarantee the highest quality standards and full packaging traceability.",
  },
  {
    icon: <Return />,
    title: "return policy",
    description: "according to European standards",
    mainTitle: "European roasters deserve European return policies",
    fullTitle: "PRODUCTION BASED",
    fullDescription:
      "You can trust in our unwavering commitment to quality and service. Unlike many non-EU packaging companies, we provide a transparent refund and re-production policy with no hidden fees or unreasonable terms",
  },
];

export { shortAboutUs, reviewsData, socialMediaIcon, ourFeatures };
