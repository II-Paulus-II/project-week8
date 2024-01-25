/* ----- Third Party Imports ----- */
import Link from "next/link";
import { sql } from "@vercel/postgres";

export async function Home() {

  return (
    <>
    <h1>Welcome to the Order of Tea</h1>
    <p>Soon to be home page here!</p>
    <Link href="/articles">Articles</Link>
    </>
  );
}

export default Home;
