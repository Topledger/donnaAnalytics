import cx from "clsx";

import Button from "../Button";
import Section from "../Section";
import ContactUs from "./components/ContactUs";
import FooterLinks from "./components/FooterLinks";
import MobileOnly from "../MobileOnly";
import MobileHidden from "../MobileHidden";
import { getId } from "@/helpers/idHelper";

import styles from "./index.module.scss";

const footerLinks = [
  {
    id: 1,
    title: "Products",
    links: [
      {
        id: "sql-analytics",
        text: "SQL platform",
        href: "/web3-teams",
      },
      {
        id: "wallet-profiler",
        text: "Wallet behaviour analytics",
        href: `/web3-teams#${getId("Wallet behaviour analytics")}`,
      },
      {
        id: "research",
        text: "Solana data wizard",
        href: "/research",
      },
    ],
  },
  {
    id: 2,
    title: "Other links",
    links: [
      {
        id: "blogs",
        text: "Blogs",
        href: "https://blogs.topledger.xyz",
        target: "_blank",
      },
      {
        id: "docs",
        text: "Docs",
        href: "https://docs.topledger.xyz",
        target: "_blank",
      },
      {
        id: "github",
        text: "Github",
        href: "https://github.com/Topledger/solana-programs",
        target: "_blank",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <Section
        id="app-footer"
        style={{ backgroundColor: "#F7FAFE" }}
        component="footer"
      >
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <div className={styles.footerLinksContainer}>
              {footerLinks.map((footerLink) => (
                <FooterLinks footerLinks={footerLink} key={footerLink.id} />
              ))}
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.contactUsContainer}>
              <ContactUs />
            </div>
          </div>
        </div>
      </Section>
      <div className={styles.copyContainer}>
        <div className={styles.innerCopyContainer}>
          <Button.Link
            tertiary
            color="#b2c3ff"
            className={cx(styles.copyLink, styles.privacyPolicy)}
            href="/privacy-policy"
          >
            Privacy Policy
          </Button.Link>
          <Button.Link tertiary color="#b2c3ff" className={styles.copyLink}>
            ©2024, Donna Analytics Pvt Ltd, All Rights Reserved
          </Button.Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
