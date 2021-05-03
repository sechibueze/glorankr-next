import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1> Oooops! </h1>
      <h3> The page you requested was not found </h3>
      <Link href="/">
        <a>Back to safety :)</a>
      </Link>
    </>
  );
};

export default NotFound;
