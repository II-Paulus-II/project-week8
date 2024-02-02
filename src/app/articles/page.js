/* ----- Third Party Imports ----- */
import Link from "next/link";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import "./articles.css";

export async function ArticlesPage() {
  const articles = await sql`SELECT * FROM pw8_articles`
  return (
    <div>
      <h2>Articles</h2>
      <div>
        {articles.rows.map((article) => { return (
          <div key={article.id}>
            <Link href={`/articles/${article.id}`}><h3 key={article.title}>{article.title}</h3></Link>
          </div>
        )
        })}
      </div>
    </div>
  );
}

export default ArticlesPage;
