/* ----- Third Party Imports ----- */
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import "../articles.css";

export async function SolitaryArticlePage() {

  return (
    <>
      <p>There be one article here.</p>
    </>
  )
}

export default SolitaryArticlePage;