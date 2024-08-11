import Articles from "@/components/Articles";
import Pagination from "@/components/Pagination";

import { IArticleResponse } from "@/interfaces/IArticle";

const API = `http://localhost:1337/api/articles`;

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: {
    page: string;
    size: string;
  };
}) {
  const q = new URLSearchParams();
  q.set(`pagination[page]`, searchParams.page ? searchParams.page : "1");
  q.set(`pagination[pageSize]`, searchParams.size ? searchParams.size : "10");
  q.set(`populate`, "cover");

  const s = decodeURIComponent(
    `${API}${q.size != 0 ? "?" : ""}${q.toString()}`
  );

  const articlesData = await fetch(s, {
    next: { revalidate: 10 },
  });
  const articles: IArticleResponse = await articlesData.json();

  return (
    <>
      <>
        <Articles items={articles.data} />
        <Pagination pagination={articles.meta.pagination} />
      </>
    </>
  );
}
