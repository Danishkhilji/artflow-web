import {
  customizeComputer,
  europeanUnionSmall,
  humidityIcon,
  materialCardImageOne,
  materialCardImageTwo,
  matteCoffeeBagImage,
  matteCoffeeBagImageThree,
  matteCoffeeBagImageTwo,
  matteIcon,
  mugHotAltIcon,
  oxygenIcon,
  packetStatsIcon,
  pickingBoxIcon,
  premiumMatteIcon,
  productFrame,
  sandyTouchIcon,
  shieldCheckIcon,
  softTouchIcon,
  twoCtaCardOne,
  twoCtaCardTwo,
  uvLightIcon,
} from "../../constant";

export const standupBagsMocks = {
  hero: {
    frame: productFrame,
    title: "Standup Bags",
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
    printCustomization: {
      heading: "Print customization",
      description: "Try different print options for your package",
      cards: [
        {
          image: matteCoffeeBagImage,
          title: "Single color",
          metaTitle: "(from stock)",
        },
        {
          image: matteCoffeeBagImageTwo,
          title: "Partly printed",
          metaTitle: "(front & back)",
        },
        {
          image: matteCoffeeBagImageThree,
          title: "Fully printed",
          metaTitle: "(front & back + side gussets)",
        },
      ],
    },
    touchAndFeelCustomization: {
      heading: "TOUCH & FEEL CUSTOMIZATION",
      description:
        "Indulge in a sensory experience with various tactile effects. Customize the touch and feel of your bag with options such as:",
      tabs: [
        {
          icon: matteIcon,
          label: "Matte",
        },
        {
          icon: premiumMatteIcon,
          label: "Premium Matte",
        },
        {
          icon: softTouchIcon,
          label: "Soft touch",
        },
        {
          icon: sandyTouchIcon,
          label: "Sandy touch",
        },
      ],
    },
    features: {
      heading: "Features",
      cards: [
        {
          label: "Top-opening zipper",
        },
        {
          label: "Front zipper",
        },
        {
          label: "Tear Notch",
        },
        {
          label: "Coffee Valve",
        },
        {
          label: "Hanger with front zipper",
        },
        {
          label: "Carton box",
        },
      ],
    },
    bestCoffeeBarrier: {
      heading: "The best barrier for your coffee",
      details: [
        {
          icon: oxygenIcon,
          title: "Oxygen",
          description: "causing oxidation and staling.",
        },
        {
          icon: humidityIcon,
          title: "Humidity",
          description:
            "accelerating the moisture absorption, leading to loss of flavor and potential mold growth.",
        },
        {
          icon: uvLightIcon,
          title: "UV light",
          description:
            "accelerating the degradation of certain compounds, resulting in a loss of flavor and aroma.",
        },
      ],
      certifications: {
        heading: "Certifications",
        list: ["ISO 9001:2015", "BRC Food Certificate"],
      },
      keyFeatures: {
        heading: "Key features:",
        list: [
          "Highly recyclable materials",
          "Made in Europe",
          "Design check before print",
          "Production time from 4 - 8 weeks",
        ],
      },
    },
    twoCta: {
      cards: [
        {
          backgroundImage: twoCtaCardOne,
          title: "Still have questions?",
          buttonLabel: "Book a call",
        },
        {
          backgroundImage: twoCtaCardTwo,
          title: "enjoy the packaging",
          buttonLabel: "configure packagING ",
        },
      ],
    },
  },
};
