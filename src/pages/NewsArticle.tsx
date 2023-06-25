import { useLoaderData } from "react-router-dom"

interface RootObject {
  userId: number
  id: number
  title: string
  body: string
}

const NewsArticle = () => {
  const article = useLoaderData() as RootObject
  return (
    <article key={article.id}>
      <header className="pointer-events-none w-fit rounded-t-lg border border-b-0 bg-white/5 p-2">
        <h1 className="text-2xl font-semibold">{article.title}</h1>
      </header>
      <section className="rounded-none rounded-b-lg border bg-white/5 p-5 md:rounded-tr-lg">
        <p>{article.body}</p>
      </section>
    </article>
  )
}

export default NewsArticle

export const articleLoader = async ({ params }: any) => {
  const { id } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
  if (!res.ok)
    throw new Error(
      "Failed to fetch data. Try to refresh the page. If this continues, please contact support."
    )
  return res.json()
}
