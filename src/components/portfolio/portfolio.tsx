import { component$ } from "@builder.io/qwik";
//import styles from "./portfolio.module.css";
import { userArticles } from '../../routes/layout';

export default component$(() => {
    const articlesData = userArticles();
    console.log(articlesData);
    console.log(articlesData.value);
    //  return <footer>Product name: {signal.value.product.name}</footer>;
    return (
        <>
        <div>
            <section>
                <h1>hoge</h1>
                <p>Welcome to my portfolio</p>
            </section>

            <section>
                <h2>Experience</h2>

            </section>

            <section>
                <h2>Top 10 Articles</h2>
                <ul>
                {articlesData.value.map(({ title, id, url }) => (
                    <li key={id}>
                        <a href={url} target="_blank">{title}</a>
                    </li>
                ))}
                </ul>
            </section>

            <section>
                <h2>Certificates</h2>
            </section>
        </div>
        </>
    );
});
