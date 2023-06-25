import { NavLink, useLoaderData } from "react-router-dom"
import PreviewCard from "../components/PreviewCard"

interface RootObject {
  userId: number
  id: number
  title: string
  body: string
}

const News = () => {
  const content = useLoaderData() as RootObject[]
  return (
    <main>
      <section className="mb-5 w-fit cursor-pointer rounded-md p-3 text-lg font-semibold transition duration-300 ease-in-out hover:bg-violet-900">
        <NavLink to={"category"}>Category</NavLink>
      </section>
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {content.map((data) => (
          <PreviewCard key={data.id}>
            <NavLink to={data.id.toString()}>
              <header className="mb-2">
                <h1 className="cursor-pointer text-lg font-semibold">
                  {data.title}
                </h1>
              </header>
            </NavLink>
            <section className="line-clamp-3">
              <p>{data.body}</p>
            </section>
          </PreviewCard>
        ))}
      </section>
    </main>
  )
}

export default News

export const newsLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok)
    throw new Error(
      "Failed to fetch data. Try to refresh the page. If this continues, please contact support."
    )
  return res.json()
}
