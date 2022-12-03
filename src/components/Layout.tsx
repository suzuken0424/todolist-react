import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">ホーム</NavLink>
      </li>
      <li>
        <NavLink to="/posts">記事一覧</NavLink>
      </li>
      <li>
        <NavLink to="/calendar">カレンダー</NavLink>
      </li>
    </ul>
    <Outlet />
  </div>
)

export default Layout
