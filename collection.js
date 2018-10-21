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
		this[ $keys]= null
		this[ $map]= new Map()
	}
	splice( i, del, ...added){
		const
		  map= this[ $map],
		  end= i+ del
		for( let j= i; j< end; ++j){
			const phase= findPhase( 
			this.keys(
		}
		for( let k of added){
			const
			  phase= this.findPhase( k),
			  value= this.parse( phase),
			  existing= map.get( value)
			if( !existing){
				map.set( value, [ phase])
			}else{
				existing.push( phase)
			}
		}
		if( del>= 0|| added&& added.length){
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
