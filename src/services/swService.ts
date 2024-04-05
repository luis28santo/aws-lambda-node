import { ICharacter } from '../models/response/ICharacter';
import { ICharacterResponse } from '../models/response/ICharacterResponse';

export class SWService {
	public static async getCharacters(): Promise<ICharacter[]> {
		const { results } = (await fetch('https://swapi.py4e.com/api/people/', { method: 'GET' }).then((e) => e.json())) as ICharacterResponse;

		return results;
	}
}
