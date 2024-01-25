/* ----- Third Party Imports ----- */
import Link from "next/link";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import "./articles.css";

export async function ArticlesPage() {
  return (
    <div>
      <h2>Articles</h2>
      <div>
        <p>Soon to be some information here.</p>
      </div>
    </div>
  );
}

export default ArticlesPage;