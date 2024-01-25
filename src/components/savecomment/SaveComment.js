"use client";

/* ----- Third Party Imports ----- */
import { useFormStatus } from "react-dom";

/* ----- Project Imports ----- */
import "./savecomment.css";

export function SaveComment() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "Adding your comment" : "Save Comment"}
    </button>
  );
}

export default SaveComment;