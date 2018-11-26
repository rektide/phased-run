import binarySearch from "binary-search"

import Comparator from "./comparator.js"
import NotImplemented from "./not-implemented.js"
import { $phases, $comparator} from "./symbol.js"

export class PhasedRun extends Array{
	constructor( valuationOrPhases){
		super()
		Object.defineProperties( this, {
			// store the comparator we use for binary search
			[ $comparator]: {
				value: Comparator( valuationOrPhases)
			},
			// store what phase each item is in
			[ $phases]: {
				value: [],
				writable: true
			}
		})
	}
	get comparator(){
		return this[ $comparator]
	}
	get phases(){
		return this[ $phases]
	}

	install( phase, item){
		const
		  phases= this[ $phases],
		  i= binarySearch( this[ $phases], phase, this[ $comparator])
		Array.prototype.splice.call( this, i, 0, item)
		phases.splice( i, 0, phase)
		return this
	}

	clone(){
		const clone= new PhasedRun( this[ $valuation])
		Array.prototype.splice.call( clone, 0, 0, this)
		// hazard: we're using existing pieces!
		clone[ $comparator]= this[ $comparator]
		clone[ $phases]= this[ $phases]
		return clone
	}

	// conventional mutations aren't applicable, since they don't declare a phase
	concat(){
		NotImplemented()
	}
	copyWithin(){
		NotImplemented()
	}
	fill(){
		NotImplemented()
	}
	push(){
		NotImplemented()
	}
	unshift(){
		NotImplemented()
	}
	splice(){
		NotImplemented()
	}
}
export default PhasedRun
