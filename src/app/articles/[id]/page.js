/* ----- Third Party Imports ----- */
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import "../articles.css";
import AddComment from "@/components/addcomment/AddComment";

export async function SolitaryArticlePage({params}) {
  const article = await sql`SELECT articles.title, articles.content, categories.name as category FROM articles JOIN categories ON articles.category_id = categories.id WHERE articles.id=${params.id}`;

  return (
    <>
      <h3>{article.rows[0].title}</h3>
      <p>{article.rows[0].content}</p>
      <p>Category: {article.rows[0].category}</p>
      <AddComment params={params}/>
    </>
  )
}

export default SolitaryArticlePage;