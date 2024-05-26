import Image from "next/image";
import cx from "clsx";

import Section from "@/components/Section";

import { getId } from "@/helpers/idHelper";

import styles from "./index.module.scss";
import MobileHidden from "../MobileHidden";
import MobileOnly from "../MobileOnly";

const ImageSegment = ({ className, ...props }: any) => (
  <div className={cx(styles.image, className)} {...props}>
    <Image
      src="/assets/images/about-section-2.svg"
      width={410}
      height={351}
      alt="Advancing your goals"
    />
    <span className={styles.imageText1}>
      Why we do
      <br />
      what we do
    </span>
    <span className={styles.imageText2}>
      Fueling Data-Driven Decisions for a Smarter Tomorrow
    </span>
  </div>
);

const AboutSection2 = ({}: {}) => {
  return (
    <Section
      className={styles.cultureSection}
      id={getId("Advancing your goals")}
    >
      <div className={styles.sectionBody}>
        <MobileHidden>
          <ImageSegment />
        </MobileHidden>
        <div className={styles.sectionHead}>
          <div className={styles.quote}>
            <p className={styles.quoteText}>
              &quot;Without data, you&apos;re just another person with an
              opinion.&quot;
            </p>
            <p className={styles.quoteAuthor}>W. Edwards Deming</p>
          </div>
          <MobileOnly>
            <ImageSegment />
          </MobileOnly>
          <div className={styles.description}>
            At Donna Analytics, we&apos;re passionate about transforming data
            into actionable insights. We empower businesses to make smarter
            decisions, drive growth, and innovate by uncovering hidden patterns
            and predicting future trends. With cutting-edge technology and
            expert analysis, we turn complex data into clear, strategic assets.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection2;
