import Head from "next/head";
import cx from "clsx";

import Footer from "../Footer";
import Header from "../Header";

import styles from "./index.module.scss";
import { PropsWithChildren } from "react";

const Body = ({
  children,
  header,
  className,
}: PropsWithChildren<{ header?: boolean; className?: string }>) => (
  <div
    className={cx(styles.pageBody, className, { [styles.withHeader]: header })}
  >
    {children}
  </div>
);

const Page = ({
  title,
  children,
  className,
  header = true,
  footer = true,
}: PropsWithChildren<{
  title: string;
  className?: string;
  header?: boolean;
  footer?: boolean;
}>) => (
  <div className="page">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title ?? "Top Ledger | End-to-End Blockchain Analytics"}</title>
      <meta
        name="description"
        content="Top Ledger is SQL-based data discovery and analytics platform for  in-house growth, analytics & data science teams of Web3 projects & institutions."
      ></meta>
      <meta
        name="keywords"
        content="Solana Analytics, Solana Blockchain, Dune Analytics, Crypto Analytics,
  Ledger Analytics, On-Chain Data, Off-Chain Data, NFT Analytics, DeFi Analytics, Crypto Dashboard,
  Solana Dashboard, P2E Games, Magic Eden, Web3, SQL"
      ></meta>
    </Head>
    <div className="page-content">
      {header && <Header />}
      <Body className={className} header={header}>
        <div className={styles.bodyContent}>{children}</div>
        {footer && <Footer />}
      </Body>
    </div>
  </div>
);

export default Page;
