import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 } from 'uuid';

import { CharacterService } from '../../services/characterService';

import { Character } from '../../models/Character';
import { BodyMapper } from '../../mappers/BodyMapper';

export const createCharacter: APIGatewayProxyHandler = async (event) => {
	if (event.body == null) {
		return {
			statusCode: 400,
			body: JSON.stringify({
				message: 'Bad Request',
			}),
		};
	}

	const character: Character = { ...{ id: v4() }, ...BodyMapper.bodyToCharacter(event.body) };

	await CharacterService.createCharacter(character);

	return {
		statusCode: 200,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(character),
	};
};
