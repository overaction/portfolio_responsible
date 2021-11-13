import styles from "../styles/Footer.module.css"
import Circle from "./Circle"
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>제목</h1>
                <h1 className={styles.linkTitle}>
                    <a href="/contact" className={styles.link}>
                        <span className={styles.linkText}>링크</span>
                        <Image className={styles.linkImg} src="/img/link.png" width="40px" height="40px" />
                    </a>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>내용</div>
                <div className={styles.cardItem}>
                    contact me <br /> 010 1234 1234
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>내용</div>
                <div className={styles.cardItem}>
                    contact me <br /> 010 1234 1234
                </div>
            </div>
        </div>
    )
}

export default Footer
