import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, LinkItem, Links } from './style'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

export const Header = () => (
  <HeaderBar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s) <img src={carrinho} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)
