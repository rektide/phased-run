import binarySearch from "binary-search"

import Comparator from "./comparator.js"
import NotImplemented from "./not-implemented.js"
import { $state, $comparator} from "./symbol.js"

let hackSpecies= 0

export class PhasedRun extends Array{
	constructor( comparatorOrPhases){
		super()
		Object.defineProperties( this, {
			// store the comparator we use for binary search
			[ $comparator]: {
				value: Comparator( comparatorOrPhases)
			},
			// store state on each item
			[ $state]: {
				value: [],
				writable: true
			}
		})
	}
	get comparator(){
		return this[ $comparator]
	}
	get state(){
		return this[ $state]
	}
	static get [ Symbol.species](){
		return hackSpecies? Array: PhasedRun
	}

	install( item, state){
		const
		  states= this[ $state],
		  i= binarySearch( states, state, this[ $comparator]),
		  abs= i< 0? -i- 1: i
		hackSpecies++
		Array.prototype.splice.call( this, abs, 0, item)
		hackSpecies--
		states.splice( abs, 0, state)
		return abs
	}

	clone(){
		const clone= new PhasedRun( this[ $comparator])
		Array.prototype.splice.call( clone, 0, 0, this)
		// hazard: we're using existing pieces!
		clone[ $comparator]= this[ $comparator]
		clone[ $state]= this[ $state]
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
