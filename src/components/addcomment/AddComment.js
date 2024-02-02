/* ----- Third Party Imports ----- */
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/* ----- Project Imports ----- */
import "./addcomment.css";
import SaveComment from "@/components/savecomment/SaveComment";

export async function AddComment({params}) {

  async function handleAddComment(formData) {
    "use server";

    const name = formData.get("name");
    const comment = formData.get("comment");

    await sql`INSERT INTO pw8_comments (name, comment, article_id) VALUES (${name}, ${comment}, ${params.id})`;

    // revalidate the path so the new item shows
    revalidatePath(`/articles/${params.id}`);

    // take me to the home page
    redirect(`/articles/${params.id}`);
  }

  return (
    <div>
      <h3>Add Comment</h3>
      <form action={handleAddComment}>
        <label htmlFor="name">Your Name</label>
        <input name="name" id="name" placeholder="Name" />
        <label htmlFor="comment">Comment</label>
        <textarea name="comment" id="comment" placeholder="comment" />
        <SaveComment />
      </form>
    </div>
  )
}

export default AddComment;
