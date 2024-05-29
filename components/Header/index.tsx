"use client";

import { useEffect, useState } from "react";
import cx from "clsx";
import Image from "next/image";
import BarsOutlinedIcon from "@ant-design/icons/BarsOutlined";

import Button from "../Button";
import HeaderMenu from "./components/HeaderMenu";
import MobileHidden from "../MobileHidden";
import MobileOnly from "../MobileOnly";

import styles from "./index.module.scss";
import { getId } from "@/helpers/idHelper";
import { basepath } from "@/helpers/constants";

const BurgerButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: any;
}) => {
  return (
    <Button
      className={cx(styles.burgerButton, className)}
      onClick={onClick}
      noArrow
      tertiary
      color="#283D6D"
    >
      <BarsOutlinedIcon width={32} height={32} size={32} />
    </Button>
  );
};

const Header = ({ className }: { className?: string }) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggleHeader = () => {
    setIsHeaderOpen((isHeaderOpen) => !isHeaderOpen);
  };

  useEffect(() => {
    if (isHeaderOpen) {
      const handleClick = (e: any) => {
        if (!e.target.closest(`.${styles.appHeader}`)) {
          setIsHeaderOpen(false);
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [isHeaderOpen]);

  return (
    <header className={cx(styles.appHeader, className)}>
      <span className={styles.headerWrapper}>
        <Button.Link className={styles.logoContainer} href="/" tertiary>
          <Image
            src={`${basepath}/assets/images/logo/donna-analytics-full.svg`}
            width={122}
            height={24}
            alt="Top Ledger logo"
          />
        </Button.Link>
        <MobileOnly>
          <BurgerButton onClick={toggleHeader} />
        </MobileOnly>
        <nav
          className={cx(styles.headerLinks, {
            [styles.mobileHeaderOpen]: isHeaderOpen,
          })}
        >
          <Button.Link tertiary className={styles.headerLink} href="/about">
            About
          </Button.Link>
          <Button.Link tertiary className={styles.headerLink}>
            Blogs
          </Button.Link>
          <Button.Link
            tertiary
            className={cx(styles.headerLink)}
            href="https://docs.topledger.xyz/"
            target="_blank"
            noArrow
          >
            Docs
          </Button.Link>
          <Button.Link
            tertiary
            className={cx(styles.headerLink)}
            href="https://blogs.topledger.xyz/"
            target="_blank"
            noArrow
          >
            Github
          </Button.Link>
        </nav>
      </span>
    </header>
  );
};

export default Header;
