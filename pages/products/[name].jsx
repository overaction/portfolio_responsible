import {data} from "../../data"
import styles from "../../styles/Product.module.css";
import Image from "next/image"
import Link from "next/link"

const Product = ({product}) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                {product.images.map(img => (
                    <div key={img.id} className={styles.imgContainer}>
                        <Image src={img.url} width="100%" height="100%" objectFit="cover" />
                    </div>
                ))}
            </div>
            <div className={styles.cardS}></div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const products = data
    const paths = products.map(item => {
        return {
            // params가 context로 사용된다
            params: { name: item.name },
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const name = context.params.name;
    const product = data.filter(item => item.name === name)[0];
    return {
        props: {product}
    }
}

/* getStaticPaths에서 paths로 사용할 값들을 return하면
    getStaticProps에서 해당 값들을 받아와서 props로 전달한다

    fallback값은 paths페이지가 없을 경우 처리방법을 타나낸다
*/

export default Product
