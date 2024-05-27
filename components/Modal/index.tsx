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
  /** @type {ReturnType<typeof createRoot>>} */
  let root: any = null;

  function init() {
    if (!root) {
      const div = document.createElement("div");
      div.id = `modal-root-${name}`;
      document.body.append(div);
      root = createRoot(div);
    }
  }

  Component.show = (props: any) => {
    init();
    root.render(null);
    lockBackgroundScroll();
    root.render(
      <Modal onShadowClick={Component.hide}>
        <Component {...props} />
      </Modal>
    );
  };
  Component.hide = () => {
    init();
    root.render(null);
    unlockBackgroundScroll();
  };

  return Component;
};

export default Modal;
