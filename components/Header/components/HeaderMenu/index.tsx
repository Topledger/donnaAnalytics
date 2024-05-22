import { useCallback, useEffect, useRef, useState } from "react";
import cx from "clsx";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";


import Icon from "@/components/Icon";

import styles from "./index.module.scss";


const MenuItem = ({
  icon,
  title,
  description,
  href,
  target,
  comingSoon,
  onClick,
}: any) => {
  return (
    <Link href={comingSoon ? "" : href} className={styles.headerMenuItem} target={target} onClick={onClick}>
        <Image
          className={styles.headerMenuItemIcon}
          src={`/assets/images/header/menu-item-${icon}.svg`}
          width={64}
          height={64}
          alt={icon}
        />
        <div className={styles.headerMenuItemContent}>
          <span
            className={styles.menuItemTitle}
            // href={href}
            style={{ padding: 0 }}
          >
            {title}{" "}
            {comingSoon && (
              <span className={styles.comingSoon}>Coming soon</span>
            )}
          </span>
          <p className={styles.headerMenuItemDescription}>{description}</p>
        </div>
    </Link>
  );
};

const HeaderMenu = ({ children, menuItems }: any) => {
  const containerRef = useRef<any>();
  const anchorRef = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>();
  const [isActive, setIsActive] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   setIsActive(
  //     menuItems?.some((item: any) => router.pathname?.includes(item.href))
  //   );
  // }, [router.pathname]);

  const handleClick = useCallback(
    (e: any) => {
      if (e.currentTarget === anchorRef.current) {
        setIsOpen(!isOpen);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      const handleClick = (e: any) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [isOpen]);

  return (
    <>
      <span
        className={cx(styles.headerLink, { [styles.headerLinkOpen]: isOpen })}
        ref={containerRef}
      >
        <span
          style={{ display: "inline-flex" }}
          onClick={handleClick}
          ref={anchorRef}
          className={cx({ [styles.active]: false && isActive })}
        >
          {children}{" "}
          <Icon
            className={cx(styles.chevron, "chevron-icon")}
            // style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }}
            name="chevron"
          />
        </span>
        <div className={cx(styles.headerMenu, "header-menu")}>
          <ul className={styles.headerMenuItems}>
            {menuItems.map((menuItem: any) => (
              <li key={menuItem.id}>
                <MenuItem
                  {...menuItem}
                  onClick={() => {
                    // if (menuItem.href?.includes(router.pathname)) {
                    //   setIsOpen(false);
                    // }
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </span>
    </>
  );
};

export default HeaderMenu;
