import { IComment } from "@/interfaces/IComment";
import { timeAgo } from "@/utils/timeago";

export default function CommentItem({ item }: { item: IComment }) {
  const date1 = new Date(item.attributes.createdAt);
  console.log(timeAgo(date1, "en"));

  return (
    <div className="mx-auto w-full p-4 bg-white shadow rounded-lg">
      <div className="flex items-start">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">
              {item.attributes.name}
            </h4>
            <span className="text-sm text-gray-500">
              {timeAgo(date1, "en")}
            </span>
          </div>
          <p className="mt-2 text-gray-600">{item.attributes.body}</p>
          {/* <div className="mt-3 flex space-x-4">
            <button className="text-sm text-blue-500 hover:underline">
              Reply
            </button>
            <button className="text-sm text-gray-500 hover:underline">
              Like
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
