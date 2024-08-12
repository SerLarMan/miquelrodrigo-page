import Link from "next/link";

export default function IconButton({ icon, url }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="text-black bg-[var(--secondary)] w-[2em] h-[2em] flex items-center justify-center rounded-2xl"
    >
      {icon}
    </Link>
  );
}
