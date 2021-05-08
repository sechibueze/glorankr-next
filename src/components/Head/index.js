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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;600&display=swap"
        rel="stylesheet"
      />

      <link rel="icon" href="/glorankr_icon.PNG" />
    </Head>
  );
};

export default SEO;
