import { Inter } from "next/font/google";
import Head from "next/head";
import { FeaturesCards } from "../components/Feature";
import { FooterLinks } from "../components/Footer";
import { HeroImageBackground } from "../components/Herosection";
import { HeaderMegaMenu } from "../components/Navbar";
import { FaqSimple } from "../components/Questions";

const inter = Inter({ subsets: ["latin"] });

const links = [
  {
    title: "abcd",
    links: [
      {
        label: "abcd",
        link: "asjd",
      },
    ],
  },
  {
    title: "abd",
    links: [
      {
        label: "abcd",
        link: "asjd",
      },
    ],
  },
  {
    title: "bcd",
    links: [
      {
        label: "abcd",
        link: "asjd",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavbarSimple /> */}
      <HeaderMegaMenu />
      <HeroImageBackground />
      {/* <SegmentedToggle /> */}
      <FeaturesCards />
      <FaqSimple />
      <FooterLinks data={links} />
    </>
  );
}
