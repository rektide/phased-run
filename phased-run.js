import SelfSortingArray from "self-sorting-array"
import Comparator from "./comparator.js"

export const
  $phases= Symbol.for("phased-run:phases")

export class PhasedRun extends SelfSortingArray{
	constructor( valuationOrPhases, ...items){
		super( Valuation.Factory( valuationOrPhases).comparator)
		this[ $phases]= phases
		this.splice( this.length, 0, ...items)
	}
	get phases(){
		return this[ $phases]
	}
}
