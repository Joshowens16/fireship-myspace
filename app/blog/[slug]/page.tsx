import axios from "axios";

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}
export default async function BlogPostPage({ params }: Props) {
  const req = await axios.get("http://localhost:3000/api/content");
  const posts: Post[] = req.data;
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) return <h1>Post not found</h1>;
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
}
