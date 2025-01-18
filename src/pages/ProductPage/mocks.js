import {
  customizeComputer,
  europeanUnionSmall,
  materialCardImageOne,
  materialCardImageTwo,
  mugHotAltIcon,
  packetStatsIcon,
  pickingBoxIcon,
  productFrame,
  shieldCheckIcon,
} from "../../constant";

export const productPageMocks = {
  hero: {
    frame: productFrame,
    title: "FLAt bottom bags",
    description:
      "The bag is perfect for coffee roasters, offering various form factors, EU-made materials, and extensive customization options. With our configurator, you can create the package of your dreams 🤩",
    details: [
      {
        icon: customizeComputer,
        label: "Customization options",
      },
      {
        icon: europeanUnionSmall,
        label: "Made in Europe",
      },
      {
        icon: mugHotAltIcon,
        label: "Innovative materials",
      },
      {
        icon: shieldCheckIcon,
        label: "Best coffee protection",
      },
    ],
    statistics: [
      {
        icon: packetStatsIcon,
        title: "MOQ (minimum order quantity)",
        stats: "1500 pcs",
      },
      {
        icon: pickingBoxIcon,
        title: "Production time from",
        stats: "4 weeks",
      },
    ],
  },
  customizationOptions: {
    heading: "Customization options",
    materials: {
      heading: "Materials",
      cards: [
        {
          image: materialCardImageOne,
          heading: "Performance series",
          list: [
            "Extended coffee shelf life",
            "100% recyclable material",
            "Materials sourced from Europe",
          ],
        },
        {
          image: materialCardImageTwo,
          heading: "Barrier Series",
          list: [
            "Regular barrier",
            "100% recyclable material",
            "Materials sourced from Europe",
          ],
        },
      ],
    },
    chooseABagSizeBlock: {
      heading: "Choose a bag size",
      description:
        "This product is perfectly tailored for display on shelves and transportation. It is suitable for all types of coffee beans (from small to very large).",
      sizes: ["250g", "500g", "1000g", "Custom size"],
    },
    touchAndFeelCustomization: {
      heading: "TOUCH & FEEL CUSTOMIZATION",
      description:
        "Indulge in a sensory experience with various tactile effects. Customize the touch and feel of your bag with options such as:",
      tabs: [
        {
          icon: "",
          label: "Matte",
        },
        {
          icon: "",
          label: "Premium Matte",
        },
        {
          icon: "",
          label: "Soft touch",
        },
        {
          icon: "",
          label: "Sandy touch",
        },
      ],
    },
  },
};
