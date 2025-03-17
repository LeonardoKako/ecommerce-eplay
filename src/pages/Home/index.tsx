import { Banner } from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  realese_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: [GalleryItem]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          title="Em Breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  } else {
    return <h3>Carregando...</h3>
  }
}

export default Home
