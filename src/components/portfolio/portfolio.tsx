import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
import { userExperience, userArticles, userCertificates } from '../../routes/layout';

export default component$(() => {
    const experienceData = userExperience();
    const articlesData = userArticles();
    const certificatesData = userCertificates();
    const head = useDocumentHead();
    return (
        <>
        <div>

            {/** Introduction Section */}
            <section id="intro">
                <h1>{head.title}</h1>
                <p>Welcome to my portfolio</p>
            </section>

            {/** Experience Section */}
            <section>
                <h2>Experience</h2>
                <ul>
                    {experienceData.value.map(({ id, company, position }) => (
                        <li key={id}>{id}: {position} @ {company}</li>
                    ))}
                </ul>
            </section>

            {/** Articles Section */}
            <section id="articles">
                <h2>Top 10 Articles</h2>
                <ul>
                {articlesData.value.map(({ title, id, url }) => (
                    <li key={id}>
                        <a href={url} target="_blank">{title}</a>
                    </li>
                ))}
                </ul>
            </section>

            {/** Certificates Section */}
            <section>
                <h2>Certificates</h2>
                <ul>
                    {certificatesData.value.map(({ blockchainId, title}) => (
                        <li key={blockchainId}>{title}</li>
                    ))}
                </ul>
            </section>

        </div>
        </>
    );
});
