import { NextResponse } from "next/server";
import { getPostBySlug, getPostContentHTML } from "../../../../lib/blog";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const htmlContent = await getPostContentHTML(post.content);

    return NextResponse.json({
      ...post,
      htmlContent,
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
