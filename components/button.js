import Link from "next/link";

export default function Button({ text, icon, url }) {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 bg-secondary-500 border border-2 border-secondary-400 font-bold py-2 px-4 rounded w-fit text-white"
    >
      {text} {icon}
    </Link>
  );
}
