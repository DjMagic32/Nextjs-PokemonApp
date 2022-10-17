import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { Card, Col, Row, Button, Text, Grid } from "@nextui-org/react";



// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'
import { PokemonListResponse, SmallPokemon } from '../interfaces/index'

const title: string = 'Listado de Pokemons'

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title = {title}>
      <Grid.Container gap={2} justify='flex-start'>

        {
          pokemons.map(({id, name, img}) => (
            <Grid xs={5} sm={3} md={2} xl={1} key={id} >

              <Card css={{ w: "100%", h: "350px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                      {id}
                    </Text>
                    <Text h3 color="white">
                      {name}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={img}
                    width="130px"
                    height="130px"
                    
                    alt={name}
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                   {/*  <Col>
                      <Text color="#000" size={12}>
                        Available soon.
                      </Text>
                      <Text color="#000" size={12}>
                        Get notified.
                      </Text>
                    </Col> */}
                    <Col>
                      <Row justify="center">
                        <Button flat auto rounded color="secondary">
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Add Favorites
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>

            </Grid>


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
