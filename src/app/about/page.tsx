import Link from "next/link";

const Home = () => {
  return (
    <>
      <h3>About Page</h3>
      <button>
        <Link href="/">Go to Home Page</Link>
      </button>
    </>
  );
};

export default Home;
