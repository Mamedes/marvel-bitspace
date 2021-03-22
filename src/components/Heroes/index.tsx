import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../api/api';
import {
  Container,
  CardArea,
  CardAreaColumn,
  HeroCard,
  HeroCardWrapper,
  HeroNome,
  HeroImage,
  CardFooter,
  CardButton
} from './styles'
import dotenv from 'dotenv';

dotenv.config();
const ITEMS_PAGE = process.env.REACT_APP_ITEMS_PAGE;

function renderHeroes(characters: api.Characters) {
  return (
    <Container>
      <CardArea>
        {characters.map(character => (

          <CardAreaColumn>
            <HeroCard >
              <HeroCardWrapper key={character.id}>
                <HeroImage>
                  <img
                    src={`${character.thumbnail.path + "/portrait_fantastic"}.${character.thumbnail.extension}`}
                    alt={character.name}
                    className="heroImage"
                    style={{
                      flexShrink: 0,
                      height: 'auto'
                    }}
                  />
                </HeroImage>
                <HeroNome>
                  <h5>{character.name}</h5>
                </HeroNome>
                <CardFooter>
                  <CardButton as={Link} to={`/heroes/${character.id}`}>
                    Mais detalhes
                  {/* <Link to={`/heroes/${character.id}`}>
                    <span>Mais detalhe</span></Link> */}
                  </CardButton>

                </CardFooter>
              </HeroCardWrapper>
            </HeroCard>
          </CardAreaColumn>

        ))}
      </CardArea>
    </Container>

  );
}

interface Props {
  page: number;
}

export function Heroes(props: Props) {


  const [characters, setCharacters] = useState<api.Characters>();
  const { page } = props;

  useEffect(() => {
    async function fetch(_page: number) {

      setCharacters(undefined);
      try {
        const _characters = await api.fetchCharacters(_page * Number(ITEMS_PAGE));
        setCharacters(_characters);
      } catch (e) {
        console.log(e);
      }
    }

    fetch(page);
  }, [page]);

  if (characters === undefined) {
    return <p>Aguarde Carregando...</p>;
  }
  if (characters.length === 0) {
    return <p>Não há resultados para ser exibidos :(</p>;
  }
  return renderHeroes(characters);
}
