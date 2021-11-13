import styles from "../styles/Services.module.css"
import Link from "next/link"
import Image from "next/image"
const Services = ({services}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>제목</h1>
            <h1 className={styles.subtitle}>부제목</h1>
            <div className={styles.services}>
                {services.map(service => (
                    <Link key={service.id} href={`/products/${service.name}`}>
                        <div className={styles.service}>
                            <div className={styles.desc}>{service.desc}</div>
                            <span className={styles.cat}>{service.title}</span>
                            <div className={styles.media}>
                                {service.video ? (
                                    <video
                                        src={`/img/${service.video}`}
                                        onMouseOver={e => e.target.play()}
                                        onMouseOut={e => e.target.pause()}
                                        loop
                                        muted
                                        className={styles.video}
                                    />
                                ) : (
                                    <Image
                                        src={`/img/${service.photo}`}
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                    />
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Services
