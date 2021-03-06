import ExtensibleFunction from "extensible-function"

import { basis} from "./scale.js"
import Base from "./base.js"
import Prefix from "./prefix.js"

const cache= new WeakMap()

export function insertLast( a, b){
	return a> b? 1: -1
}

export function insertFirst( a, b){
	return a- b
}

export function phasePicker( a){
	return (a&& a.phase)? a.phase: a
}

const def= {
  basis,
  comparison: insertLast,
  phasePicker
}

export class Comparator extends ExtensibleFunction.Bound{
	static Factory( phasesOrCompartor){
		if( this instanceof factory){
			throw new Error( "Do not instantiate")
		}
		// check if we already are a Compartor
		if( phasesOrCompartor instanceof Comparator){
			return phasesOrCompartor
		}
		// check if we have a cached copy of this phase
		const cached= cache.get( phasesOrCompartor)
		if( cached){
			return cached
		}
		// cache this comparator
		const comparator= new Comparator( phasesOrCompartor)
		cache.set( phasesOrCompartor, comparator)
		return comparator
	}
	constructor( phases, { basis, comparison, phasePicker}= def){
		// ultimately we are a comparator!
		super( function( a, b){
			return this.comparison(
			  this.value( this.phasePicker( a)),
			  this.value( this.phasePicker( b)))
		})
		// determine sort order of the two given values
		this.comparison= comparison
		// finds the "base" of any prefixed phases
		this.base= Base( phases)
		// find the "phase" in a state
		this.phasePicker= phasePicker
		// find the value for each phase
		for( let i= 0; i< phases.length; ++i){
			const phase= phases[ i]
			this[ phase]= i* basis
		}
	}
	value( prefixedPhase){
		// state might either be the phase string, or an object with phase.
		if( prefixedPhase&& prefixedPhase.phase){
			return prefixedPhase.phase
		}
		// perhaps we already know the value?
		const current= this[ prefixedPhase]
		if( current){
			return current
		}
		// ok, find the un-prefixed base
		const base= this.base( prefixedPhase)
		if( !base){
			return
		}
		// already was unprefixed, return
		if( base.length=== prefixedPhase){
			return base
		}
		// find prefix's value, & add to base
		const
		  prefixes= prefixedPhase.substring( 0, prefixedPhase.length- base.length),
		  modifier= Prefix( prefixes),
		  value= modifier+ this[ base]
		return this[ prefixedPhase]= value
	}
}

export const
  comparator= Comparator,
  factory= Comparator.Factory,
  Factory= Comparator.factory
export default Comparator.Factory
