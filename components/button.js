import Link from "next/link";

export default function Button({ text, url }) {
  return (
    <Link href={url} className="bg-secondary-500 py-2 px-4 rounded w-fit text-text">
      {text}
    </Link>
  );
}
