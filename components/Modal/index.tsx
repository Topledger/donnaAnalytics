"use client";

import { PropsWithChildren } from "react";
import ReactDom from "react-dom";

import Card from "../Card";
import styles from "./index.module.scss";
import { createRoot } from "react-dom/client";

const Modal = ({ children, onShadowClick }: PropsWithChildren<any>) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.shadow} onClick={onShadowClick}></div>
      <Card className={styles.modal} contentClassName={styles.modalContent}>
        {children}
      </Card>
    </div>
  );
};

export const lockBackgroundScroll = () => {
  document.body.style.overflow = "hidden";
};

export const unlockBackgroundScroll = () => {
  document.body.style.overflow = "auto";
};

export const WrapModal = (name: string, Component: any) => {
  let root: ReturnType<typeof createRoot> | null = null;
  const rootId = `modal-root-${name}`;
  let rootDiv: HTMLDivElement | null = null;
  const transitionTime = 500;
  function init() {
    if (!root) {
      rootDiv = document.createElement("div");
      rootDiv.id = rootId;
      rootDiv.style.transition = `all ${transitionTime}ms ease`;
      rootDiv.style.opacity = "1";
      document.body.append(rootDiv);
      root = createRoot(rootDiv);
    }
  }

  Component.show = (props: any) => {
    init();
    root?.render(null);
    lockBackgroundScroll();
    root?.render(
      <Modal onShadowClick={Component.hide}>
        <Component {...props} hide={Component.hide} />
      </Modal>
    );
  };
  Component.hide = () => {
    init();
    if (rootDiv) {
      rootDiv.style.opacity = "0";
      rootDiv.style.zIndex = "100";
      rootDiv.style.position = "absolute";
    }
    setTimeout(() => {
      root?.render(null);
      unlockBackgroundScroll();

      if (rootDiv) {
        rootDiv.style.opacity = "1";
        rootDiv.style.zIndex = "unset";
        rootDiv.style.position = "relative";
      }
    }, transitionTime);
  };

  return Component;
};

export default Modal;
