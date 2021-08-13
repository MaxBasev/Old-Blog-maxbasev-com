import * as React from "react"
import { Link } from "gatsby"
import AppHeader from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <AppHeader />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},{` `}
        <a href="https://maxbasev.com">Max Basev</a>
      </footer>
    </div>
  )
}

export default Layout
