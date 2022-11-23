import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { pokeApi } from '../../api';
import { PokemonDetail, PokemonListResponse } from "../../interfaces";



interface Props {
  pokemon: PokemonDetail
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {

  //const router = useRouter();
  // router.query.id es la ruta dinámica que se define en el archivo [id].tsx
  // en este caso, el id del pokemon
  //const { id } = router.query;
  //console.log(router.query, "router.query");

  console.log(pokemon)


  return (
    <Layout title="Any Pokemon">
        {/* <h1>{ id } - { name }</h1> */}
        <h1>{pokemon.name}</h1>

    </Layout>
  )
};


// You should use getStaticPaths if you’re statically pre-rendering
// pages that use dynamic routes.

// Se utiliza getStaticPaths para cuando se quiere renderizar
// de manera statica con rutas dinamicas.
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value , index) => `${ index + 1}`);

  // getStaticPaths se ejecuta solo del lado del servidor.
  console.log(pokemon151, "Esto es pokemon151")

  return {
    paths: pokemon151.map( id => ({

      params: { id }

    })),

    //El falback si esta en false dara una respuesta 404
    //Si la ruta no esta definida en las paths
    fallback: false,  
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Puedo pasar en el paratemetro de esta funcion el contexto
  // pero esta vez utilizamos la destructuracion de ese contexto
  // para usar solo los paramsen esta funcion
  // console.log(ctx.params, `Estos son los params del ctx`)

  const { id } = params as { id: string };
  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${id}`)


  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonDetail;