import { Character } from './Character';

export interface CharacterFullEsp extends Character {
	peliculas: string;
	especies: string;
	vehiculos: string;
	naves_estelares: string;
	creado: string;
	editado: string;
	url: string;
}
