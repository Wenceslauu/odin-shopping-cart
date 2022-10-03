import { Link, Outlet } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiCartVariant } from '@mdi/js'

function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>Colorful</h1>
        <nav>
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart"><Icon path={mdiCartVariant} title="Shopping Cart" size={1.1} /></Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
