import { APIGatewayProxyHandler } from 'aws-lambda';
import { SWService } from '../../services/swService';

import { SWCharacterMapper } from '../../mappers/SWCharacterMapper';

export const getSWCharacters: APIGatewayProxyHandler = async (event) => {
	const name = event.queryStringParameters?.name;

	const characters = await SWService.getCharacters(name);

	const charactersEsp = SWCharacterMapper.changeKeysEnToKeysEsp(characters);

	return {
		statusCode: 200,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(charactersEsp),
	};
};
