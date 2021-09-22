import Link from "next/link";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/first-post">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
