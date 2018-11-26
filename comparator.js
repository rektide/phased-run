import ExtensibleFunction from "extensible-function"

import { basis} from "./scale.js"
import Base from "./base.js"
import Prefix from "./prefix.js"

const cache= new WeakMap()

const def= {
  basis
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
	constructor( phases, { basis}= def){
		// ultimately we are a comparator!
		super( function( a, b){
			return this.value( a)- this.value( b)
		})
		// finds the "base" of any prefixed phases
		this.base= Base( phases)
		// find the value for each phase
		for( let i= 0; i< phases.length; ++i){
			const phase= phases[ i]
			this[ phase]= i* basis
		}
	}
	value( prefixedPhase){
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
export default Comparator.Factory

const factory= Comparator.Factory
