import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAction } = useGetActionGamesQuery()
  const { data: gamesFight } = useGetFightGamesQuery()
  const { data: gamesRPG } = useGetRpgGamesQuery()
  const { data: gamesSimulator } = useGetSimulationGamesQuery()
  const { data: gamesSports } = useGetSportGamesQuery()

  if (gamesAction && gamesFight && gamesRPG && gamesSimulator && gamesSports) {
    return (
      <>
        <ProductsList
          games={gamesAction}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesFight}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={gamesSports}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={gamesSimulator}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={gamesRPG}
          title="RGP"
          background="black"
          id="rpg"
        />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Categories
