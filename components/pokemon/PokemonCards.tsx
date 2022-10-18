import { Card, Col, Row, Button, Text, Grid } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { SmallPokemon } from "../../interfaces/index";

export interface Props {
  pokemon: SmallPokemon;
}


export const PokemonCards: React.FC<PropsWithChildren<Props>> = ({ pokemon }) => {
  return (

    

            <Grid xs={5} sm={3} md={2} xl={1} key={pokemon.id} >

              <Card css={{ w: "100%", h: "350px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                      {pokemon.id}
                    </Text>
                    <Text 
                      h3 
                      color="white"
                      transform="capitalize"
                      >
                      {pokemon.name}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={pokemon.img !== undefined ? pokemon.img : ''}
                    width="70%"
                    height="70%"

                    style={{ 
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      marginTop: "30px",

                      
                     }}
                    
                    alt={pokemon.name}
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
    
  )
}
