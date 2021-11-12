import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from './Circle';
const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh"/>
            <Circle backgroundColor="#01c686" right="-40vh"/>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>avocado</span> DIGITAL
                    PRODUCT AGENCY
                </h1>
                <p className={styles.desc}>
                    안녕하세요 kmc의 포트폴리오 사이트 입니다.
                </p>
                <button className={styles.button}>discover</button>
            </div>
            <div className={styles.card}>
                <Image
                    src="/img/Avocado.png"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                ></Image>
            </div>
        </div>
    )
}

export default Intro
