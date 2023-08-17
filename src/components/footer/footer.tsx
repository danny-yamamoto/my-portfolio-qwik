import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
      <p>&copy; 2023 hoge. All rights reserved.</p>
      <div class={styles["social-links"]}>
        <a href="https://github.com/danny-yamamoto" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/dai_s_a_n" target="_blank"><i class="fab fa-twitter"></i></a>
      </div>
    </footer>
  );
});
