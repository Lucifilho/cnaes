import Link from 'next/link'

export default function Navbar(){
    return (

        <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" href="/">Home</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" href="/fotos">Fotos</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" href="/cnaes">Cnaes</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" href="/financas">Finanças</Link>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </Link>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" href="/categorias/acao">Ação</Link></li>
                    <li><Link class="dropdown-item" href="/caregorias/aventura">Aventura</Link></li>
                  
                    <li><Link class="dropdown-item" href="/caregorias/comedia">Comédia</Link></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/sobre-nos">Sobre nós</Link>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <button class="btn btn-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    )
}