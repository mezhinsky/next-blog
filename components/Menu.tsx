import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul className="flex space-x-4 py-2 justify-center text-lg font-mono font-semibold tracking-normal ">
        <li>
          <Link href={`/`} className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link href={`/`} className="text-gray-500 hover:text-gray-700">
            About
          </Link>
        </li>
        <li>
          <Link href={`/`} className="text-gray-500 hover:text-gray-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
