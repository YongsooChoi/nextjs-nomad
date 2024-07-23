import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </p>
    </div>
  );
}
