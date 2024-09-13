import Link from "next/link";

export default function IconButton({ icon, url }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="text-white bg-primary-600 border border-2 border-primary-300 hover:bg-primary-400 w-fit h-[2.5rem] py-4 px-2 flex items-center justify-center rounded-3xl"
    >
      {icon}
    </Link>
  );
}
