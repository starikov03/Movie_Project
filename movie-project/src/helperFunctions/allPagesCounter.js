import { FILMS} from "../Consts"

function allPagesCounter() {
	return Math.ceil(FILMS.length / 10);
}

export { allPagesCounter };