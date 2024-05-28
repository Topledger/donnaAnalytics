"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import cx from "clsx";

import { getAction } from "@/components/ArticleCard/ArticleFooter";
import { getId } from "@/helpers/idHelper";
import SectionHead from "../SectionHead";

import styles from "./index.module.scss";
import MobileHidden from "../MobileHidden";
import MobileOnly from "../MobileOnly";
import Accordion from "../Accordion";

const Journey = ({ title, description, onClick, selected }: any) => {
  return (
    <div
      className={cx(styles.cultureContent, {
        [styles.cultureContentSelected]: selected,
      })}
      onClick={onClick}
    >
      <h3 className={styles.cultureTitle}>{title}</h3>
      <div className={styles.cultureDescription}>
        <span>{description}</span>
      </div>
    </div>
  );
};

const EmpoweringJourneySection = ({ journeys = [] }: { journeys: any[] }) => {
  const [selectedJourney, setSelectedJourney] = useState(0);
  const timerRef = useRef<any>(null);
  const image = journeys[selectedJourney].image;
  const title = journeys[selectedJourney].title;
  const action = journeys[selectedJourney].action;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSelectedJourney((index) => (index + 1) % (journeys?.length ?? 1));
    }, 10000);
    return () => clearInterval(timerRef.current);
  }, [journeys]);

  const updateSelectedJourney = (index: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setSelectedJourney(index);
  };

  return (
    <Section
      className={styles.empoweringJourneySection}
      id={getId("Empowering Your Blockchain Journey")}
    >
      <SectionHead
        description="Customized Solutions to Propel Your Success in the Digital Ledger World"
        tagline="SERVICES"
      >
        Empowering Your Blockchain Journey
      </SectionHead>
      <div className={styles.sectionBody}>
        <MobileHidden>
          <div className={styles.resultsContainer}>
            {journeys?.map((journey: any, index: number) => (
              <Journey
                {...journey}
                key={journey.id}
                onClick={() => updateSelectedJourney(index)}
                selected={index === selectedJourney}
              />
            ))}
          </div>
          <div className={styles.image}>
            <Image src={image} alt={title} width={419} height={362} />
          </div>
          <div className={styles.indicators}>
            {journeys.map((journey: any, index: number) => (
              <span
                key={journey?.id}
                className={cx(styles.indicator, {
                  [styles.selectedIndicator]: index === selectedJourney,
                })}
                onClick={() => updateSelectedJourney(index)}
              />
            ))}
          </div>
        </MobileHidden>
        <MobileOnly>
          <div className={styles.accordionContainer}>
            {journeys.map((journey, index) => (
              <Accordion
                key={journey.id}
                title={journey.title}
                description={journey.description}
                image={journey.image}
                isOpen={index === selectedJourney}
                onToggle={() => updateSelectedJourney(index)}
              />
            ))}
          </div>
        </MobileOnly>
      </div>
      <div className={styles.cultureAction}>{getAction(action)}</div>
    </Section>
  );
};

export default EmpoweringJourneySection;
