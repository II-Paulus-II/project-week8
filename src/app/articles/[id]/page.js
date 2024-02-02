/* ----- Third Party Imports ----- */
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import "../articles.css";
import AddComment from "@/components/addcomment/AddComment";
import GetComments from "@/components/getcomments/GetComments";

export async function SolitaryArticlePage({params}) {
  const article = await sql`SELECT pw8_articles.title, pw8_articles.content, pw8_categories.name as category FROM pw8_articles JOIN pw8_categories ON pw8_articles.category_id = pw8_categories.id WHERE pw8_articles.id=${params.id}`;

  return (
    <>
      <h2>{article.rows[0].title}</h2>
      <p>{article.rows[0].content}</p>
      <p>Category: {article.rows[0].category}</p>
      <AddComment params={params}/>
      <GetComments params={params}/>
    </>
  )
}

export default SolitaryArticlePage;
