import type { NextPage } from "next";
import styles from "./details.module.css";

export type DetailsType = {
  className?: string;
};

const Details: NextPage<DetailsType> = ({ className = "" }) => {
  return (
    <div className={[styles.details, className].join(" ")}>
      <div className={styles.projectImageParent}>
        <div className={styles.projectImage}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </div>
        <div className={styles.parametersParent}>
          <div className={styles.parameters}>Parameters</div>
          <div className={styles.ideaAraAuroraContainer}>
            <p className={styles.ideaAraAurora}>{`Idea: <ara aurora link>`}</p>
            <p
              className={styles.detailsOfThe}
            >{`Details of the Budget spending is here in Proposal: <maydone link>`}</p>
            <p className={styles.maintainerResponsibleFor}>
              Maintainer (responsible for your success of the game): Medet
              Ahmetson
            </p>
          </div>
        </div>
        <div className={styles.whyItsSafe}>Why it’s safe to fund</div>
      </div>
      <div className={styles.funding}>
        <h1 className={styles.productName}>Frog Wars</h1>
        <div className={styles.subheading}>by Dao FrogWifCat</div>
        <div className={styles.price}>$50</div>
        <div className={styles.goal}>
          Pledged Goal to initiate: 700$, until 25th June 2024
        </div>
        <div className={styles.description}>
          <p className={styles.frogWarsIs}>
            Frog Wars is the fighting game with the Mad Frogs NFTs.
          </p>
          <p className={styles.hereWeWant}>
            Here we want for the Dao a place to play a fighting game along with
            the people using your NFTs.
          </p>
        </div>
        <button className={styles.button}>
          <div className={styles.backThisProject}>Back this project</div>
        </button>
        <div className={styles.thisProjectRequiresContainer}>
          <p className={styles.thisProjectRequires}>
            This project requires WEF crypto on Linea network.
          </p>
          <p className={styles.purchaseWefToken}>
            Purchase WEF token on Nile Exchange, after setting up your Linea
            account.
          </p>
        </div>
        <div className={styles.perksForBacking}>Perks for backing:</div>
        <div className={styles.youGetFree}>
          You get free Mad Frogs NFT. You can use this to play the game.
          Meanwhile you can invest it for a passive income at
          https://stake.frogwifcat.com/ which returns 82% of your investment
          annually.
        </div>
      </div>
    </div>
  );
};

export default Details;
