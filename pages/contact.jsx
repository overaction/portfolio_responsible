import styles from "../styles/Contact.module.css"
import Circle from "../components/Circle"

const contact = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="green" left="-40vh" top="-20vh"/>
            <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh"/>
            <h1 className={styles.title}>GET IN TOUCH</h1>
            <form className={styles.form}>
                <input className={styles.inputS} placeholder="이름" />
                <input className={styles.inputS} placeholder="전화번호" />
                <input className={styles.inputL} placeholder="이메일" />
                <input className={styles.inputL} placeholder="제목" />
                <textarea className={styles.textarea} placeholder="내용" rows={6} />
                <button className={styles.button}>제출</button>
            </form>
        </div>
    )
}


export default contact
