import Splicer from "splicer"
import parse from "./parse.js"

const
  $collection= Symbol.for( "PhaseRunner:collection"),
  $keys= Symbol.for( "PhaseRunner:keys"),
  $map= Symbol.for( "PhaseRunner:map")

export const Symbols= {
	collection: $collection,
	keys: $keys
}

export class PhaseRunnerCollection extends Splicer{
	constructor({ phases, findPhase }={}, ...phases){
		this[ $map]= new Map() // phase-number => array of values for that phase
		this[ $keys]= null // sorted array of phase-numbers
	}
	splice( i, del, ...added){
		const map= this[ $map]
		let rekey= false
		if( del){
			let
			  skip= i // we have to advance to advance this many steps
			  remove= del, // have this many left to remove
			  major= 0, // which key we are on
			  minor= 0, // which element in the current array we are on
			  key,
			  arr
			function update(){
				key= this[ $keys][ major],
				arr= this[ $map].get( key)
			}
			update()
			// advance through skip
			while( arr.length< skip){
				skip-= arr.length
				major++
				update()
			}
			minor= skip

			// delete
			while( arr&& remove> 0){
				// remove whole arrays as fast as possible
				while( minor=== 0&& arr.length<= remove){
					this[ $map].delete( key)
					rekey= true
					remove-= arr.length
					major++
					update()
				}
				if( !arr){
					break
				}
				// remove pieces
				const
				  capacity= arr.length- minor,
				  removal= Math.min( remove, capacity)
				arr.splice( minor, removal)
				remove-= removal
				if( remove){
					major++
					minor= 0
					update()
				} // else { minor += removal } // unnecessary since we're done
			}
		}
		for( let k of added){
			const
			  phase= this.findPhase( k),
			  value= this.parse( phase),
			  existing= map.get( value)
			if( !existing){
				rekey= true
				map.set( value, [ phase])
			}else{
				existing.push( phase)
			}
		}
		if( rekey){
			this[ $keys]= null
		}
	}
	keys(){
		const current= this[ $keys]
		if( current){
			return current
		}
		const keys= Array.from( this[ $map].keys())
		return this[ $keys]= keys.sort()
	}
	*phases(){
		yield *this[Symbol.iterator]()
	}
	*[ Symbol.iterator](){
		for( var key of this.keys){
			var phase= this[ $map].get( key)
			yield *phase
		}
	}
}
