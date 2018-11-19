import ExtensibleFunction from "extensible-function"
import base from "./base.js"
import prefix from "./prefix.js"

export const
  $phases= Symbol.for("phased-run:comparator:phases"),
  $phaseValues= Symbol.for("phased-run:comparator:phaseValues")

function comparator( self, a, b){
	let value= self[ $phaseValues]
	if( !value){
		
	}
}

export class PhasedRunComparator extends ExtensibleFunction{
	constructor( phases){
		// super restrictive es classes strike again. :( i find this ugly.
		super(( a, b)=> comparator(self, a, b))
		// lift array of phases to a valuation
		this[ $phases]= Array.isArray( phases)? new Valuation( phases): phases
	}
}
