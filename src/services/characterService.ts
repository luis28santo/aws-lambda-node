import { DynamoDB } from 'aws-sdk';

import { Character } from '../models/Character';

export class CharacterService {
	private static TABLE_NAME = 'charactersTable';

	private static dynamodb(): DynamoDB.DocumentClient {
		return new DynamoDB.DocumentClient();
	}

	public static async getCharacters() {
		const { Items } = await this.dynamodb().scan({ TableName: this.TABLE_NAME }).promise();

		return Items;
	}

	public static async createCharacter(character: Character): Promise<void> {
		await this.dynamodb()
			.put({
				TableName: this.TABLE_NAME,
				Item: character,
			})
			.promise();
	}
}
