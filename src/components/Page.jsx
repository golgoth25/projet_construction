import Link from "next/link"
const Page = (props) => {
  const { title, children, className } = props
  return (
    <div>
      <header>
        <h1 className="text-4xl">Cinema Cinema</h1>
        <nav>
          <ul className="flex justify-around">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/films">Films</Link>
            </li>
            <li>
              <Link href="/films/new">Add new film</Link>
            </li>
            <li>
              <Link href="/cinemas">Cinema</Link>
            </li>
            <li>
              <Link href="/cinemas/new">Add new cinema</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <h2 className="text-2xl">{title}</h2>
      <div className={className}>{children}</div>
    </div>
  )
}
export default Page