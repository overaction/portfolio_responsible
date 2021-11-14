import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">avocado</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/products/design">디자인</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/development">개발</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/production">제품</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/photography">포토그래피</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/contact">컨택</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
