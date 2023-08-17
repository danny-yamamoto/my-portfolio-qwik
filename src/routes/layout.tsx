import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Footer from "../components/footer/footer";
import styles from "./styles.css?inline";
import { routeLoader$ } from '@builder.io/qwik-city';

type ExperienceItem = {
  id: string;
  company: string;
  position: string;
}

type QiitaItem = {
  title: string;
  url: string;
  id: string;
};

type CertItem = {
  blockchainId: string;
  title: string;
}

export const userExperience = routeLoader$(async () => {
  const res: ExperienceItem[] = [
    {
        id: '2022-09',
        company: 'Retail AI X Inc.',
        position: 'Lead Engineer',
    },
    {
        id: '2021-06',
        company: 'Retail AI X Inc.',
        position: 'Software Engineer',
    },
    {
        id: '2020-06',
        company: 'Retail AI Engineering Inc.',
        position: 'Software Engineer',
    }
  ]
  return res;
});

export const userArticles = routeLoader$(async () => {
  const response = await fetch(`https://qiita.com/api/v2/users/daisuke-yamamoto/items?page=1&per_page=10`);
  const qiitaItems: any[] = await response.json();
  const res: QiitaItem[] = qiitaItems.map(item => ({
    title: item.title,
    url: item.url,
    id: item.id,
  }));
  return res;
});

export const userCertificates = routeLoader$(async () => {
  const res: CertItem[] = [
    {
        blockchainId: '732838',
        title: 'Google Cloud Certified - Professional Cloud Developer',
    },
    {
        blockchainId: '672721',
        title: 'Google Cloud Certified - Professional Cloud Architect',
    }
  ];
  return res;
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const signal = userArticles();
  console.log(signal);
  useStyles$(styles);
  return (
    <>
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
