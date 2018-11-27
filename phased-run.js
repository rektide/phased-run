import binarySearch from "binary-search"

import Comparator from "./comparator.js"
import NotImplemented from "./not-implemented.js"
import { $phases, $comparator} from "./symbol.js"

let hackSpecies= 0

export class PhasedRun extends Array{
	constructor( comparatorOrPhases){
		super()
		Object.defineProperties( this, {
			// store the comparator we use for binary search
			[ $comparator]: {
				value: Comparator( comparatorOrPhases)
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
	static get [ Symbol.species](){
		return hackSpecies? Array: PhasedRun
	}

	install( phase, item){
		const
		  phases= this[ $phases],
		  i= binarySearch( this[ $phases], phase, this[ $comparator]),
		  abs= i< 0? -i- 1: i
		hackSpecies++
		Array.prototype.splice.call( this, abs, 0, item)
		hackSpecies--
		phases.splice( abs, 0, phase)
		return this
	}

	clone(){
		const clone= new PhasedRun( this[ $comparator])
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
