import { ICharacter } from './ICharacter';

export interface ICharacterResponse {
	count: number;
	next: null;
	previous: null;
	results: ICharacter[];
}
