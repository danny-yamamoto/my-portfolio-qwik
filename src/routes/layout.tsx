import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Footer from "../components/footer/footer";
import styles from "./styles.css?inline";
import { routeLoader$ } from '@builder.io/qwik-city';

type QiitaItem = {
  title: string;
  url: string;
  id: string;
};

export const userArticles = routeLoader$(async () => {
//  return "hoge";
/*
  const url = "https://qiita.com/api/v2/users/daisuke-yamamoto/items?page=1&per_page=10";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
*/

  const response = await fetch(`https://qiita.com/api/v2/users/daisuke-yamamoto/items?page=1&per_page=10`);
  const qiitaItems: any[] = await response.json();
  const filterQiitaItems: QiitaItem[] = qiitaItems.map(item => ({
    title: item.title,
    url: item.url,
    id: item.id,
  }));
  return filterQiitaItems;

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
