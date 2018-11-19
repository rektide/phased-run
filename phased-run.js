import { SelfSortingArray, $comparator} from "self-sorting-array"
import { $comparator, $phases} from "./symbol.js"
import Comparator from "./comparator.js"

export class PhasedRun extends SelfSortingArray{
	constructor( valuationOrPhases, ...items){
		super( Valuation.Factory( valuationOrPhases).comparator, ...items)
	}
	get phases(){
		return this[ $comparator][ $phases]
	}
}
