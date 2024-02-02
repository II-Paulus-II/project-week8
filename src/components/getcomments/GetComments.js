/* ----- Third Party Imports ----- */
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import "./getcomments.css";

export async function GetComments({params}) {
  const comments = await sql`SELECT pw8_comments.id, pw8_comments.name, pw8_comments.comment FROM pw8_comments WHERE article_id=${params.id}`;

  return (
    <div>
      <h3>Comments</h3>
      {comments.rows.map((item) => {
        return (
          <div key={`${item.id}-${item.name}`} className="item">
            <h4>{item.name}</h4>
            <p>{item.comment}</p>
          </div>
        );
      })}
    </div>
  )
}

export default GetComments;
