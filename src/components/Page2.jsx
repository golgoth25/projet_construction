import classNames from "classnames"
import Link from "next/link"

const Page = (props) => {
  const { title, children, className } = props

  return (
    <div>
      <header>
        <h1 className="text-2xl">Appli Laurent</h1>
        <nav>
          <ul className="flex justify-around">
            <li>
              <Link href="/home">HOME</Link>
            </li>
            <li>
              <Link href="/sign-in">PROFILE</Link>
            </li>                        
          </ul>
        </nav>
      </header>
      <hr />
      <h2 className="p-5 text-2xl">{title}</h2>
      <div className={classNames("container p-5", className)}>{children}</div>
    </div>
  )
}

export default Page