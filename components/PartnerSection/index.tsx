import Section from "@/components/Section";

import styles from "./index.module.scss";
import { getAction } from "@/components/ArticleCard/ArticleFooter";
import { getId } from "@/helpers/idHelper";

const PartnerSection = ({}: any) => {
  return (
    <Section
      className={styles.cultureSection}
      id={getId("Start building a data culture")}
      containerClassName={styles.container}
    >
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>
          Donna analytics is your partner in data culture
        </h3>
        <p className={styles.contentDescription}>
          We collaborate with various teams in an organization to identify their
          specific data and analytics needs, aiming to improve operational
          efficiency and decision-making across all verticals.
        </p>
      </div>
      <div className={styles.cultureAction}>
        {getAction({
          type: "link",
          text: "Try it out",
          href: "/web3-teams",
          primary: true,
          forwardArrow: true,
        })}
      </div>
    </Section>
  );
};

export default PartnerSection;
