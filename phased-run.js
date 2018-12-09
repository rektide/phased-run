import SelfSortingArray, { _speciesHack} from "self-sorting-array"
import Comparator from "./comparator.js"
import NotImplemented from "./not-implemented.js"
import { $state, $comparator} from "./symbol.js"

function makeComparator( comparatorOrPhases){
	if( comparatorOrPhases instanceof Function){
		// looks like a comparator
		return comapratorOrPhases
	}
	return Comparator( comparatorOrPhases)
}

export class PhasedRun extends SelfSortingArray{
	static get [ Symbol.species](){
		return _speciesHack? Array: PhasedRun
	}
	constructor( comparatorOrPhases, ...items){
		super( makeComparator( comparatorOrPhases))
	}
}
export default PhasedRun
