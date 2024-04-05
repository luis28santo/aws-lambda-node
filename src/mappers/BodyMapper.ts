import { Character } from '../models/Character';

export class BodyMapper {
	public static bodyToCharacter(bodyString: string): Character {
		const { anio_nacimiento, color_ojos, genero, color_pelo, altura, mundo_natal, masa, nombre, color_piel } =
			this.bodyToObject(bodyString);

		return { anio_nacimiento, color_ojos, genero, color_pelo, altura, mundo_natal, masa, nombre, color_piel };
	}

	public static bodyToObject(bodyString: string): any {
		return JSON.parse(bodyString);
	}
}
