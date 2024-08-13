import Link from "next/link";

export default function IconButton({ icon, text, url }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="text-white bg-primary-600 border border-2 border-primary-300 hover:bg-primary-400 w-[9rem] h-[2.5rem] py-4 flex items-center justify-center rounded-2xl"
    >
      {icon}
      <span className="ms-2">{text}</span>
    </Link>
  );
}
