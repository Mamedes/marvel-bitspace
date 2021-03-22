import md5 from 'blueimp-md5';
import dotenv from 'dotenv';

dotenv.config();

const API_PUBLIC = process.env.REACT_APP_API_PUBLIC;
const API_PRIVATE = process.env.REACT_APP_API_PRIVATE!;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const ITEMS_PAGE = 48;


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
    limit: ITEMS_PAGE,
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