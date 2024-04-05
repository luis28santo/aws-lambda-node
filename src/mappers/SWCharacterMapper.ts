import { CharacterFullEsp } from '../models/CharacterFullEsp';
import { ICharacter } from '../models/response/ICharacter';
import { KEYS_CHARACTER_ESP } from '../utils/keys_character_esp';

export class SWCharacterMapper {
	public static changeKeysEnToKeysEsp(characters: ICharacter[]): CharacterFullEsp[] {
		const charactersEsp = characters.map((character) => {
			return this.changeKeysEnToEsp(character);
		});

		return charactersEsp;
	}

	private static changeKeysEnToEsp(character: ICharacter): CharacterFullEsp {
		const newCharacter: CharacterFullEsp = <any>{};

		for (const key in character) {
			if (Object.prototype.hasOwnProperty.call(character, key)) {
				const newKey = KEYS_CHARACTER_ESP[key] ?? key;

				newCharacter[newKey] = character[key];
			}
		}

		return newCharacter;
	}
}
