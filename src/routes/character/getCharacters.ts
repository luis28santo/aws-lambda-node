import { APIGatewayProxyHandler } from 'aws-lambda';
import { CharacterService } from '../../services/characterService';

export const getCharacters: APIGatewayProxyHandler = async (event) => {
	const items = await CharacterService.getCharacters();

	return {
		statusCode: 200,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(items),
	};
};
