import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Portfolio from "../components/portfolio/portfolio";

export default component$(() => {
  return (
    <>
      <Portfolio />
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "danny's portfolio",
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],
  }
};
