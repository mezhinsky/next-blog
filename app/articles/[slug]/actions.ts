"use server";
import { revalidateTag } from "next/cache";

export async function createComment(postId: string, formData: FormData) {
  const rawFormData = {
    data: {
      article: {
        connect: [{ id: postId, position: { end: true } }],
      },
      name: formData.get("name"),
      body: formData.get("body"),
    },
  };

  try {
    const res = await fetch(`http://localhost:1337/api/comments`, {
      method: "POST",
      body: JSON.stringify(rawFormData),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      console.log("Submitted");
    } else {
      console.log("Something is wrong.");
    }
  } catch (error) {
    console.log(error);
  }

  revalidateTag("article");
}
