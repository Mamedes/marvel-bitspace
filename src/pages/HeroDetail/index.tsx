import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as api from '../../api/api';
import Header from "../../components/header";
import {Container, HeroImg, Section}from './styles'

function renderCategory(character: api.Character, category: string) {
  return (
    <ul>
      {(character[category] as api.CharacterCategory).items.map(item => (
        <li key={item.resourceURI}>{item.name}</li>
      ))}
    </ul>
  );
}

function renderHero(character: api.Character) {
  return (
      <>
    <Header/>     
    <Container>
    <Section>    
    <HeroImg>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="img-fluid" // Resize image on mobile
      />
      </HeroImg>
      <h3>{character.name}</h3>
      <p>{character.description}</p>
      <h6>HQ Marvel Comics</h6>
      {renderCategory(character, 'comics')}
      <h6>Series</h6>
      {renderCategory(character, 'series')}
      <h6>Stories</h6>
      {renderCategory(character, 'stories')}
      </Section>
    </Container>
    </>
  );
}

export function HeroDetail() {  
  const [character, setCharacter] = useState<api.Character>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetch(_id: string) {     
      setCharacter(undefined);
      try {
        const _character = await api.fetchCharacter(_id);
        setCharacter(_character);
      } catch (e) {
        console.log(e);
      }
    }

    fetch(id);
  }, [id]);

  return character !== undefined ? renderHero(character) : <p>Aguarde Carregando...</p>;
}
