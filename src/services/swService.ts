import { ICharacter } from '../models/response/ICharacter';
import { ICharacterResponse } from '../models/response/ICharacterResponse';

export class SWService {
	public static async getCharacters(name: string | undefined): Promise<ICharacter[]> {
		const url = `https://swapi.py4e.com/api/people/${name ? `?search=${name}` : ''}`;

		const { results } = (await fetch(url, { method: 'GET' }).then((e) => e.json())) as ICharacterResponse;

		return results;
	}
}
