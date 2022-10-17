import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api'


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'
import { PokemonListResponse } from '../interfaces/index'

const title: string = 'Listado de Pokemons'

const Home: NextPage = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title = {title}>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
}


// Nada de lo que esta en la funcion getStaticProps se ejecuta en el cliente
// getStaticProps solo se ejecuta en el servidor
// getStaticProps se ejecuta en el servidor de nextjs
// solo las props que se retornan de getStaticProps se pasan al componente
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151') 

  return {
    props: {
      pokemons: data.results
      
    }
  }
}

export default Home
