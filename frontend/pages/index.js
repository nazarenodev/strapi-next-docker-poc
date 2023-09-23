import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const res = await fetch("http://strapi:1337/api/articles");
  const dataStrapi = await res.json();

  return {
    props: {
      articles: dataStrapi.data,
    },
  };
}

export default function Home({ articles }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Strapi Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Latest Articles</h1>
        {!articles?.length ? <h2>No articles found</h2> : (
          <div className={styles.grid}>
            {articles.map((article) => (
              <div key={article.id} className={styles.card}>
                <h2>{article.attributes.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: article.attributes.content }}></div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
