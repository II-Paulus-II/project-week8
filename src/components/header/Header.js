/* ----- Third Party Imports ----- */
import Link from "next/link";

/* ----- Project Imports ----- */
import "./header.css";

export function Header() {
  return (
    <>
      <p>There be a header here.</p>
      <nav>
      <Link href="/articles">Articles</Link>
      </nav>
    </>
  )
}

export default Header;