import { Game } from '../../pages/Home'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Banner, Infos } from './style'

import { FormatPrice } from '../ProductsList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <>
      <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.discount && (
                <span>De {FormatPrice(game.prices.old)}</span>
              )}
              {game.prices.current && (
                <>Por {FormatPrice(game.prices.current)}</>
              )}
            </p>
            {game.prices.current && (
              <Button
                variant="primary"
                type="button"
                title="Clique para adicionar ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            )}
          </Infos>
        </div>
      </Banner>
    </>
  )
}
