import { Game } from '../../pages/Home'
import { Product } from '../Product'
import { Container, List } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id: string
}

export const FormatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTag = (game: Game) => {
    const tags = []

    if (game.realese_date) {
      tags.push(game.realese_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(FormatPrice(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((games) => (
            <li key={games.id}>
              <Product
                id={games.id}
                key={games.id}
                category={games.details.category}
                description={games.description}
                image={games.media.thumbnail}
                infos={getGameTag(games)}
                system={games.details.system}
                title={games.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
