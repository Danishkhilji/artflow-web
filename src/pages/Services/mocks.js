import {
  calendarStarActiveIcon,
  calendarStarIcon,
  chairOfficeActiveIcon,
  chairOfficeIcon,
  coffeeIcon,
  customizeComputer,
  dormRoomActiveIcon,
  dormRoomIcon,
  europeanUnionSmall,
  eventsAndConferencesImage,
  gasPumpActiveIcon,
  gasPumpIcon,
  gasStationsImage,
  giftActiveIcon,
  giftIcon,
  giftShopsImage,
  hotelsImage,
  houseTreeActiveIcon,
  houseTreeIcon,
  mugHotAltIcon,
  officesImage,
  onlineStoresImage,
  packetStatsIcon,
  pickingBoxIcon,
  servicesCtaImage,
  servicesHeroImage,
  servicesHeroMobileImage,
  shoppingCartActiveIcon,
  shoppingCartIcon,
  subscriptionIcon,
  touristShopsImage,
  twoCtaCardTwo,
  coffeeBeansIcon,
  envelopePapperIcon,
  coffeeHeartIcon,
  personVectorIcon,
  dripBagMainImage,
  dripCardImageOne,
  dripCardImageTwo,
} from "../../constant";

export const servicesMocks = {
  hero: {
    desktopFrame: servicesHeroImage,
    mobileFrame: servicesHeroMobileImage,
    title: "Drip Bags",
    description:
      "Drip bags are a new way for your customers to taste your coffee on the go. This service involves sending us your coffee and getting ready to sell the product.",
    details: [
      {
        icon: coffeeIcon,
        label: "Grinding & filing coffee service",
      },
      {
        icon: europeanUnionSmall,
        label: "Made in Europe",
      },
      {
        icon: mugHotAltIcon,
        label: "Sustainable materials",
      },
      {
        icon: customizeComputer,
        label: "Fully customizable",
      },
      {
        icon: subscriptionIcon,
        label: "Subscription",
      },
    ],
    statistics: [
      {
        icon: packetStatsIcon,
        title: "MOQ (minimum order quantity)",
        stats: "1000 pcs",
      },
      {
        icon: pickingBoxIcon,
        title: "Production time from",
        stats: "2 weeks",
      },
    ],
  },
  customizationOptions: {
    heading: "Customization options",
    title: "DRIP BAG",
    description: "Customize every part of your product",
    mainImage: dripBagMainImage,
    cards: [
      {
        image: dripCardImageOne,
        title: "Drip packaging",
      },
      {
        image: dripCardImageTwo,
        title: "Drip box",
      },
    ],
  },
  howItWorks: {
    heading: "HOW it works",
    title: "4 simple steps to test our service",
    description:
      "🤩 You have a unique opportunity to test your coffee in drip bags before launching it",
    cards: [
      {
        icon: coffeeBeansIcon,
        description:
          "Provide a description of your coffee profile and specify your preferred weight per filter. Send us 1 kg of coffee for testing.",
      },
      {
        icon: envelopePapperIcon,
        description: "We will prepare samples (4 or more options).",
      },
      {
        icon: coffeeHeartIcon,
        description:
          "You will receive a sample by mail, cup it, and select your favorite option.",
      },
      {
        icon: personVectorIcon,
        description:
          "We will use this choice as a quality reference before moving into production.",
      },
    ],
  },
  dripBagOfferCard: {
    heading: "Where to offer drip bags?",
    cards: [
      {
        icon: chairOfficeIcon,
        activeIcon: chairOfficeActiveIcon,
        image: officesImage,
        title: "offices",
        description:
          "A simple solution for quality coffee at work, saving time and enhancing productivity.",
      },
      {
        icon: gasPumpIcon,
        activeIcon: gasPumpActiveIcon,
        image: gasStationsImage,
        title: "Gas stations",
        description:
          "It is a perfect pick-me-up for travelers who crave fresh coffee while on the road.",
      },
      {
        icon: houseTreeIcon,
        activeIcon: houseTreeActiveIcon,
        image: touristShopsImage,
        title: "Tourist shops",
        description:
          "A memorable, easy-to-pack option for tourists seeking local flavors.",
      },
      {
        icon: dormRoomIcon,
        activeIcon: dormRoomActiveIcon,
        image: hotelsImage,
        title: "hotels",
        description:
          "A perfect addition to the in-room experience, offering guests quality coffee without additional tools.",
      },
      {
        icon: shoppingCartIcon,
        activeIcon: shoppingCartActiveIcon,
        image: onlineStoresImage,
        title: "Online stores",
        description:
          "A convenient way to offer fresh coffee as a post-workout perk.",
      },
      {
        icon: calendarStarIcon,
        activeIcon: calendarStarActiveIcon,
        image: eventsAndConferencesImage,
        title: "Events and Conferences",
        description:
          "A premium choice for event organizers to offer attendees a quick, energizing drink.",
      },
      {
        icon: giftIcon,
        activeIcon: giftActiveIcon,
        image: giftShopsImage,
        title: "Gift Shops",
        description:
          "A unique and practical gift item for coffee enthusiasts who love convenience and flavor",
      },
    ],
  },
  twoCta: {
    cards: [
      {
        backgroundImage: servicesCtaImage,

        title: ["Send us 1 kg", " of your coffee"],
        buttonLabel: "Request a test",
      },
      {
        backgroundImage: twoCtaCardTwo,
        title: ["Configure packaging", " for your coffee"],
        buttonLabel: "configure packagING",
      },
    ],
  },
};
