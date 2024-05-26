import Image from "next/image";
import cx from "clsx";
import Section from "@/components/Section";

import { getAction } from "@/components/ArticleCard/ArticleFooter";
import { getId } from "@/helpers/idHelper";
import SectionHead from "../SectionHead";
import MobileHidden from "../MobileHidden";
import MobileOnly from "../MobileOnly";
import styles from "./index.module.scss";

const Culture = ({
  title,
  description,
  action,
  bottomContent: { text } = { text: "" },
}: any) => {
  return (
    <div className={styles.cultureContent}>
      <h3 className={styles.cultureTitle}>{title}</h3>
      <div className={styles.cultureDescription}>
        <span>{description}</span>
        <MobileHidden>
          <div className={styles.chartIcons}>
            {["#F1F5FF", "#F8F0FF", "#EDFAF2", "#FCF4EF", "#F2EFFF"].map(
              (color, index) => (
                <span
                  key={color}
                  className={styles.chartIcon}
                  style={{ backgroundColor: color }}
                >
                  <Image
                    src={`/assets/images/landing/culture-icon-${index + 1}.svg`}
                    width={100}
                    height={100}
                    alt={`culture-icon-${index + 1}`}
                  />
                </span>
              )
            )}
          </div>
        </MobileHidden>
      </div>
      <div className={styles.cultureAction}>{getAction(action)}</div>
    </div>
  );
};

const DataCultureSection = ({ dataCultures = [] }: any) => {
  return (
    <Section
      className={styles.cultureSection}
      id={getId("Start building a data culture")}
    >
      <SectionHead
        description="Empower Your Organization with Data-Driven Insights"
        tagline="GAIN THE EDGE"
      >
        Start building a data culture
      </SectionHead>
      <MobileOnly>
        <div className={cx(styles.chartIcons, styles.mobileOnly)}>
          {["#F1F5FF", "#F8F0FF", "#EDFAF2", "#FCF4EF", "#F2EFFF"].map(
            (color, index) => (
              <span
                key={color}
                className={styles.chartIcon}
                style={{ backgroundColor: color }}
              >
                <Image
                  src={`/assets/images/landing/culture-icon-${index + 1}.svg`}
                  width={100}
                  height={100}
                  alt={`culture-icon-${index + 1}`}
                />
              </span>
            )
          )}
        </div>
      </MobileOnly>
      <div className={styles.sectionBody}>
        <div className={styles.cultureContainer}>
          {dataCultures?.map((dataCulture: any) => (
            <Culture {...dataCulture} key={dataCulture.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default DataCultureSection;
