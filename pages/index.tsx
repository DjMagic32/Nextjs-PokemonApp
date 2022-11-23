import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'
import { PokemonListResponse, SmallPokemon } from '../interfaces/index'
import { PokemonCards } from '../components/pokemon/index';
import { Grid } from "@nextui-org/react";

const title: string = 'Listado de Pokemons'

export interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title = {title}>
      <Grid.Container gap={2} justify='flex-start'>

        {
          pokemons.map((pokemon: SmallPokemon) => (

            <PokemonCards key={pokemon.id} pokemon={ pokemon }  />

            ))
        }

      </Grid.Container>
      
    </Layout>
  )
}


// Nada de lo que esta en la funcion getStaticProps se ejecuta en el cliente
// getStaticProps solo se ejecuta en el servidor
// getStaticProps se ejecuta en el servidor de nextjs
// solo las props que se retornan de getStaticProps se pasan al componente
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151') 
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,

  }))

  return {
    props: {
      pokemons: pokemons,  
    }
  }
}

export default Home
