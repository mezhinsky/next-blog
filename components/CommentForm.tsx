"use client";
import { useState } from "react";

export default function CommentForm({ createComment }: any) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    await createComment(formData);
    setText("");
    setName("");
  };

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    // <form onSubmit={onSubmit}>
    //   <input
    //     type="text"
    //     name="name"
    //     id="name"
    //     value={name}
    //     required
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     name="body"
    //     id="body"
    //     value={text}
    //     required
    //     onChange={(e) => setText(e.target.value)}
    //   />
    //   <button type="submit">send</button>
    // </form>

    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Leave a Comment
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Comment
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            id="body"
            name="body"
            required
            value={text}
            placeholder="Your Comment"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
