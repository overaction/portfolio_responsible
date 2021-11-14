import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
    const [open,setOpen] = useState(false);
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
                    <Link href="/contact">컨택</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={e => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul onClick={e => setOpen(false)} className={styles.menu} style={{right: open ? "0" : "-50vw"}}>
                <li className={styles.menuItem}>
                    <Link href="/products/design">디자인</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/development">개발</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/production">제품</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/photography">포토그래피</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact">컨택</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
