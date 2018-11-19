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
	clone(){
		const clone= new this.constructor( this[ $comparator])
		Array.prototype.push.call( clone, ...this)
		return clone
	}
}
