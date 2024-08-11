"use server";
import { revalidateTag } from "next/cache";

const API = `${process.env.NEXT_PUBLIC_API}/api/comments`;

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
    const res = await fetch(API, {
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
