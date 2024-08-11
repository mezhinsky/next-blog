import { IArticle } from "@/interfaces/IArticle";
import Image from "next/image";
import Link from "next/link";

const API = `http://localhost:1337`;

export default function ArticleItem({ item }: { item: IArticle }) {
  console.log(
    `${API}${item.attributes.cover.data.attributes.formats.thumbnail.url}`
  );

  const date = new Date(item.attributes.publishedAt);

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="w-full h-96 relative">
        <Image
          src={`${API}${item.attributes.cover.data.attributes.url}`}
          placeholder="blur"
          fill
          layout={"fill"}
          blurDataURL="https://image-component.nextjs.gallery/placeholder"
          alt={item.attributes.cover.data.attributes.caption}
          style={{
            borderRadius: "0",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {item.attributes.title}
        </h2>
        <p className="text-gray-600 mb-4">{item.attributes.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{date.toLocaleString()}</span>
          <Link
            className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600"
            href={`/articles/${item.attributes.slug}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
