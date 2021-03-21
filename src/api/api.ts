import md5 from 'blueimp-md5';

const API_PUBLIC = '64ac6a623922a82cd3b446816a6445ae';
const API_PRIVATE = '8c5e1834586e9261b33c996b1336c847f806b694';
const BASE_URL = 'https://gateway.marvel.com';

export interface CharacterCategory {
  available: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
      type?: string;
    }
  ];
  returned: number;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: CharacterCategory;
  series: CharacterCategory;
  stories: CharacterCategory;
  events: CharacterCategory;
  urls: [
    {
      type: string;
      url: string;
    }
  ];

  [index: string]:
    | CharacterCategory
    | string
    | number
    | Record<string, unknown>
    | Record<string, unknown>[];
}

export type Characters = Character[];

export function getQueryParams(offset?: number) {
  const ts = Date.now();

  const params = {
    ts,
    apikey: API_PUBLIC,
    hash: md5(ts + API_PRIVATE + API_PUBLIC),
    limit: 50,
    offset
  };
 
  return Object.keys(params)
    .filter(key => (params as any)[key] !== undefined)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent((params as any)[key])}`)
    .join('&');
}

export async function fetchCharacters(offset: number) {
  const response = await fetch(`${BASE_URL}/v1/public/characters?${getQueryParams(offset)}`);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data.data.results as Characters;
}

export async function fetchCharacter(id: string) {
  const response = await fetch(`${BASE_URL}/v1/public/characters/${id}?${getQueryParams()}`); 
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data.data.results[0] as Character;
}