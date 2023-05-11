import {
    stringOrNull,
    characterSpecie,
    characterStatus,
    gender,
  } from "./types"

interface ICharacters {
    created: string;
    episode: string[];
    gender: gender;
    id: number;
    image: string;
    location: {
      name: string;
      url: string;
    };
    name: string;
    origin: {
      name: string;
      url: string;
    };
    species: characterSpecie;
    status: characterStatus;
    type: string;
    url: string;
  }
  
  interface IApiInformation {
    count: number;
    pages: number;
    next: stringOrNull;
    prev: stringOrNull;
  
}


export type { ICharacters, IApiInformation };