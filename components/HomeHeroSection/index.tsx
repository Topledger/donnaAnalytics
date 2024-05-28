"use client";

import Image from "next/image";
import Section from "@/components/Section";

import { getAction } from "@/components/ArticleCard/ArticleFooter";
import { getId } from "@/helpers/idHelper";

import styles from "./index.module.scss";
import QueryFormModal from "../QueryForm/QueryFormModal";

const HomeHeroSection = ({
  tagline,
  title,
  description,
  image,
}: {
  tagline: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Section className={styles.cultureSection} id={getId("Home Hero")}>
      <div className={styles.sectionBody}>
        <div className={styles.sectionHead}>
          <div className={styles.tagline}>{tagline}</div>
          <div>
            <h2 className={styles.sectionTitle}>{title}</h2>
          </div>
          {description && (
            <p className={styles.sectionDescription}>{description}</p>
          )}
          <div className={styles.cultureAction}>
            {getAction({
              type: "link",
              text: "Try it out",
              primary: true,
              forwardArrow: true,
              onClick: () => QueryFormModal.show(),
            })}
          </div>
        </div>
        <div className={styles.image}>
          <Image src={image} width={512} height={351} alt={title} />
        </div>
      </div>
    </Section>
  );
};

export default HomeHeroSection;
