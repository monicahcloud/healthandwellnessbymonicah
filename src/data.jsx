import { nanoid } from "nanoid";
import { GiHealthPotion } from "react-icons/gi";
//import gold from "../public/gold.png"
import fourbottls from "../public/fourbottls.jpeg";
import biome from "../public/biome.jpeg";
import cleanser from "../public/cleanser.jpeg";
import cream from "../public/cream.jpeg";
import eightbottls from "../public/eightbottls.jpeg";
import lifemax from "../public/lifemax.jpeg";
import mask from "../public/mask.png";
import mood from "../public/mood.jpeg";
import omega from "../public/omega.jpeg";
import sixteenpack from "../public/sixteenpack.jpeg";
import twobottls from "../public/twobottls.jpeg";
import intenseserum from "../public/intenseserum.png";
import skincare from "../public/skincare.jpeg";
import toner from "../public/toner.jpeg";
import serum from "../public/serum.jpeg";
import variety from "../public/varietypack.jpeg";
import mind from "../public/mind.jpeg";
import radiance from "../public/radiance.jpeg";
import energy from "../public/energy.jpeg";
import source from "../public/source.jpeg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#products", text: "products" },
  { id: nanoid(), href: "#videos", text: " videos" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const services = [
  {
    id: nanoid(),
    title: "ASEA",
    icon: <GiHealthPotion className="h-16 w-16 text-sky-500" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rem eum. Mollitia, saepe sint hic, quaerat aut omnis voluptates amet, nam dolores molestiae consequatur expedita iure quas error deleniti odit.",
  },
];

export const products = [
  // {
  //   id: nanoid(),
  //   img: gold,
  //   url: "https://1800807234.myasealive.com/",
  //   title: "REDOXGold™ Massage + Soothing Gel",
  //   text: "ASEA is a wellness company driven by the power of human potential. Headquartered in Utah and serving a global community, ASEA is a trailblazer in cellular health. As the first to introduce groundbreaking redox signaling molecules, ASEA helps your cells function in harmony, as they were designed to. With each product and every opportunity, ASEA is committed to empowering individuals and enhancing lives.",
  //   retail: "$70.00",
  //   subscription: "$55.00",
  // },
  {
    id: nanoid(),
    img: fourbottls,
    url: "https://shop.aseaglobal.com/products/3155?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "4 Bottles of ASEA Redox Supplement",
    text: "Help your body’s natural process for cell communication, protection, and balance with active redox signaling molecules.",
    retail: "$172.50",
    subscription: "$140.00",
  },
  {
    id: nanoid(),
    img: sixteenpack,
    url: "https://shop.aseaglobal.com/products/2393?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "16 Pouches of ASEA Redox Supplement",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$178.00",
    subscription: "$145.00",
  },
  {
    id: nanoid(),
    img: twobottls,
    url: "https://shop.aseaglobal.com/products/2365?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "2 Bottles of ASEA Redox Supplement",
    text: "ASEA is a wellness company driven by the power of human potential. Headquartered in Utah and serving a global community, ASEA is a trailblazer in cellular health. As the first to introduce groundbreaking redox signaling molecules, ASEA helps your cells function in harmony, as they were designed to. With each product and every opportunity, ASEA is committed to empowering individuals and enhancing lives.",
    retail: "$95.00",
    subscription: "$75.00",
  },
  {
    id: nanoid(),
    img: eightbottls,
    url: "https://shop.aseaglobal.com/products/2365?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "8 Pouches of ASEA Redox Supplement",
    text: "Help your body’s natural process for cell communication, protection, and balance with active redox signaling molecules.",
    retail: "$100.00",
    subscription: "$78.00",
  },
  {
    id: nanoid(),
    img: mask,
    url: "https://shop.aseaglobal.com/products/4850?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "Redox Clay Mask",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$50.00",
    subscription: "$40.00",
  },
  {
    id: nanoid(),
    img: intenseserum,
    url: "https://shop.aseaglobal.com/products/2423?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "Intensive Redox Serum",
    text: "ASEA is a wellness company driven by the power of human potential. Headquartered in Utah and serving a global community, ASEA is a trailblazer in cellular health. As the first to introduce groundbreaking redox signaling molecules, ASEA helps your cells function in harmony, as they were designed to. With each product and every opportunity, ASEA is committed to empowering individuals and enhancing lives.",
    retail: "$100.00",
    subscription: "$80.00",
  },
  {
    id: nanoid(),
    img: skincare,
    url: "https://shop.aseaglobal.com/products/4312?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "RENUAdvanced® Skin Care System",
    text: "Help your body’s natural process for cell communication, protection, and balance with active redox signaling molecules.",
    retail: "$181.25",
    subscription: "$145.00",
  },
  {
    id: nanoid(),
    img: cream,
    url: "https://shop.aseaglobal.com/products/4311?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "RENUAdvanced® Hydrating Cream",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$75.00",
    subscription: "$60.00",
  },
  {
    id: nanoid(),
    img: toner,
    url: "https://shop.aseaglobal.com/products/4305?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "RENUAdvanced® Balancing Toner",
    text: "ASEA is a wellness company driven by the power of human potential. Headquartered in Utah and serving a global community, ASEA is a trailblazer in cellular health. As the first to introduce groundbreaking redox signaling molecules, ASEA helps your cells function in harmony, as they were designed to. With each product and every opportunity, ASEA is committed to empowering individuals and enhancing lives.",
    retail: "$37.50",
    subscription: "$30.00",
  },
  {
    id: nanoid(),
    img: cleanser,
    url: "https://shop.aseaglobal.com/products/4302?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "RENUAdvanced® Foaming Cleanser",
    text: "Help your body’s natural process for cell communication, protection, and balance with active redox signaling molecules.",
    retail: "$31.25",
    subscription: "$25.00",
  },
  {
    id: nanoid(),
    img: serum,
    url: "https://shop.aseaglobal.com/products/4308?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "RENUAdvanced® Glow Serum",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$87.50",
    subscription: "$70.00",
  },
  {
    id: nanoid(),
    img: energy,
    url: "https://shop.aseaglobal.com/products/4313?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "REDOXEnergy",
    text: "ASEA is a wellness company driven by the power of human potential. Headquartered in Utah and serving a global community, ASEA is a trailblazer in cellular health. As the first to introduce groundbreaking redox signaling molecules, ASEA helps your cells function in harmony, as they were designed to. With each product and every opportunity, ASEA is committed to empowering individuals and enhancing lives.",
    retail: "$62.50",
    subscription: "$50.00",
  },
  {
    id: nanoid(),
    img: mood,
    url: "https://shop.aseaglobal.com/products/4314?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "REDOXMood",
    text: "Help your body’s natural process for cell communication, protection, and balance with active redox signaling molecules.",
    retail: "$62.50",
    subscription: "$50.00",
  },
  {
    id: nanoid(),
    img: mind,
    url: "https://shop.aseaglobal.com/products/4315?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "REDOXMind",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$62.50",
    subscription: "$50.00",
  },
  {
    id: nanoid(),
    img: radiance,
    url: "https://shop.aseaglobal.com/products/4911?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "REDOXRadiance",
    text: "ASEA is a wellness company driven by the power of human potential. Headquartered in Utah and serving a global community, ASEA is a trailblazer in cellular health. As the first to introduce groundbreaking redox signaling molecules, ASEA helps your cells function in harmony, as they were designed to. With each product and every opportunity, ASEA is committed to empowering individuals and enhancing lives.",
    retail: "$67.50",
    subscription: "$55.00",
  },
  {
    id: nanoid(),
    img: variety,
    url: "https://shop.aseaglobal.com/products/4443?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "Cell Performance Variety Pack",
    text: "Help your body’s natural process for cell communication, protection, and balance with active redox signaling molecules.",
    retail: "$62.50",
    subscription: "$50.00",
  },
  {
    id: nanoid(),
    img: biome,
    url: "https://shop.aseaglobal.com/products/2401?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "VIA™ Biome",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$65.00",
    subscription: "$50.00",
  },
  {
    id: nanoid(),
    img: lifemax,
    url: "https://shop.aseaglobal.com/products/2403?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "VIA™ LifeMax",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$85.00",
    subscription: "$70.00",
  },
  {
    id: nanoid(),
    img: source,
    url: "https://shop.aseaglobal.com/products/2402?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "VIA™ Source",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$70.00",
    subscription: "$55.00",
  },
  {
    id: nanoid(),
    img: omega,
    url: "https://shop.aseaglobal.com/products/2773?sponsorId=A8SSHBGEAA&m=7&st=ps",
    title: "VIA™ Omega",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    retail: "$55.00",
    subscription: "$45.00",
  },
];

export const videos = [
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=tdbbrK25pQc&t=121s",
    title: "ASEA: Genesis / Founders Video",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=dejnTwI96yo",
    title: "ASEA Redox Usage Guide",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },

  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=8TLen6kPNJg&t=500s",
    title: " The ASEA REDOX Breakthrough",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },

  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=QndF3n0STFI",
    title: "The science behind Cell Performance | ASEA",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=TnxDE4zqR-k",
    title: "Learn More About ASEA",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=0gDrFrPGEbY&t=365s",
    title: "The Ultimate Guide to ASEA Redox: Answering Your Common Questions",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=n-zLN_hvwNg&t=28s",
    title: "Introducing ASEA Redox Gold",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=DYDpVk4R03U&t=9s",
    title: "Breakthrough: ASEA REDOX Cell Signaling Supplement",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "  https://www.youtube.com/watch?v=rHewUQxYsNA&t=121s",
    title: "ASEA Via - Pathways to Wellness",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: " https://www.youtube.com/watch?v=W3mrRZfob2I",
    title: "Announcing new ASEA Cell Performance products",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: " https://www.youtube.com/watch?v=9zvm-gYRM1k",
    title: "Signal Your Health",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: " https://www.youtube.com/watch?v=kNAsCtJesjI",
    title: "Go Boldd. Get REDOXGold",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: " https://www.youtube.com/watch?v=ra2hpDFIUdA",
    title: "ASEA Production Facility Tour",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=XS6TEeEARMg",
    title:
      "Asea Athletes: Groundbreaking Achievements with Groundbreaking Products",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=DISVBD90xkc",
    title: "Introducing the new ASEA RENUAdvanced Skin Care System",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=mgBKQ9I7fgE",
    title: "How RENUAdvanced Skin Care System powers your skin's potential",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },

  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=w9r_9fBD7Mo",
    title: "REDOXRadiance Explainer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=T7ogt8WExk8",
    title: "REDOXMind recipe: Berry good brain | ASEA",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=OCXGS4Q_4qo",
    title: "Introducing ASEA Redox Clay Mask",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=Bc8LedIdalc",
    title: "ASEA Essentials Bundle",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: "https://www.youtube.com/watch?v=wRS4zmFajaQ",
    title: "RENU28®­ Revitalizing REDOX Gel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    url: " https://www.youtube.com/watch?v=HQZEXiJhsRc",
    title: "Asea RENU 28 ... Miraculous indeed!",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
