import Link from "next/link";

export default function Nav() {
  return (
    <nav className="p-s">
      <Link href="/">
        <a>Claire Rieusset</a>
      </Link>
      <Link href="/works">
        <a>WORKS</a>
      </Link>
      <Link href="/lab">
        <a>LE LAB</a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/contact">
        <a>CONTACT</a>
      </Link>
    </nav>
  );
}
