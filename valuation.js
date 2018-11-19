import Base from "./base.js"
import Prefix from "./prefix.js"

export const $base= Symbol.for("PhasedRunValuation:base")

const cache= new WeakMap()

export class PhasedRunValuation{
	static Factory( phasesOrValuation){
		const cached= cache.get( phasesOrValuation)
		if( cached){
			return cached
		}
		if( Array.isArray( phasesOrValuation)){
			const valuation= new PhasedRunValuation( phasesOrValuation)
			cache.set( phasesOrValuation, valuation)
			return valuation
		}else{
			return phasesOrValuation
		}
	}
	constructor( phases, { basis}= { basis: 10}){
		this[ $base]= base( phases)
		for( let i= 0; i< phases.length; ++i){
			const phase= phases[ i]
			this[ phase]= i* basis
		}
		this.comparator= this.comparator.bind( this)
	}
	value( prefixedPhase){
		const current= this[ prefixedPhase]
		if( current){
			return current
		}
		const base= this[ $base]( prefixedPhase)
		if( !base){
			return
		}
		const
		  prefixes= prefixedPhase.substring( 0, prefixedPhase.length- base.length),
		  modifier= Prefix( prefixes)
		  value= modifier+ this[ base]
		return this[ prefixedPhases]= value
	}
	comparator(){
	}
}
export default PhasedRunValuation.Factory
