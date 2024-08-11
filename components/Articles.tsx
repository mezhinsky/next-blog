import ArticleItem from "@/components/Article";
import NoContent from "@/components/NoContent";

import { IArticle } from "@/interfaces/IArticle";

export default function Articles({ items }: { items: IArticle[] }) {
  let content;

  if (items.length) {
    content = items.map((articleItem: IArticle) => {
      return <ArticleItem item={articleItem} key={articleItem.id} />;
    });
  } else {
    content = <NoContent />;
  }

  return (
    <div className="px-2 my-10 sm:px-0 flex flex-col gap-4">{content}</div>
  );
}
