import { notFound } from "next/navigation";
import Image from "next/image";

import { remark } from "remark";
import html from "remark-html";

import CommentForm from "@/components/CommentForm";
import CommentItem from "@/components/commentItem";
import Nocontent from "@/components//NoContent";
import { createComment } from "./actions";

import { IArticleResponse } from "@/interfaces/IArticle";
import { IComment } from "@/interfaces/IComment";
import { comment } from "postcss";

const API = `${process.env.NEXT_PUBLIC_API}/api/articles`;

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const q = new URLSearchParams();
  q.set(`filters[slug][$eq]`, params.slug);
  q.set(`populate`, "comments,cover");

  const s = decodeURIComponent(
    `${API}${q.size != 0 ? "?" : ""}${q.toString()}`
  );

  console.log(s);

  let Article;

  try {
    const articleData = await fetch(s, {
      next: { revalidate: 10, tags: ["article"] },
    });

    const response: IArticleResponse = await articleData.json();
    const article = response.data[0];
    console.log(response);

    const createCommentWithId = createComment.bind(null, article.id);

    const processedContent = await remark()
      .use(html)
      .process(article.attributes.body);
    const contentHtml = processedContent.toString();

    const date = new Date(article.attributes.publishedAt);

    Article = (
      <article>
        <div className="relative w-full h-96 mb-8">
          <Image
            src={`http://localhost:1337${article.attributes.cover.data.attributes.url}`}
            alt={article.attributes.cover.data.attributes.caption}
            layout="fill"
            objectFit="cover"
            className="sm:rounded-lg shadow-lg"
          />
        </div>

        <h1 className="text-6xl font-bold text-gray-800">
          {article.attributes.title}
        </h1>
        <time className="text-gray-500 text-md">
          {date.toLocaleDateString()}
        </time>

        <div
          className="text-gray-600 mb-8 prose max-w-none mx-auto px-10 py-10 sm:px-0"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></div>

        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Comments ({article.attributes.comments.data.length})
          </h2>
          <CommentForm createComment={createCommentWithId} />
          <div className="flex flex-col gap-2">
            {article.attributes.comments.data.length > 0 &&
              article.attributes.comments.data.map((comment: IComment) => (
                <CommentItem key={comment.id} item={comment} />
              ))}
            {article.attributes.comments.data.length === 0 && <Nocontent />}
          </div>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }

  return <>{Article}</>;
}
