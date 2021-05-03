import Head from "next/head";
const SEO = ({ title }) => {
  return (
    <Head>
      <title>
        {" "}
        Glorankr | {title || "Your pocket-friend for world raking data"}{" "}
      </title>
      <meta
        name="description"
        content="Glorankr is your online lookup directory for countries information."
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
