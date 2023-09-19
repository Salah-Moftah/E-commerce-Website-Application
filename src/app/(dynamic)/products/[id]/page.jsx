
import ContentPost from 'src/app/(dynamic)/products/[id]/contentPost.jsx'

export async function generateMetadata({ params }) {
  
  const postId = params.id;

  const response = await fetch(`https://dummyjson.com/products/${postId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const product = await response.json();

  return {
    title: product.title,
    description: product.description,
  };
}

export default function Post({ params }) {
  const postId = params.id;

  return (
    <>
    <ContentPost postId={postId}/>
    </>
  )
}
