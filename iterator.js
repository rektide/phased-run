
const
  $phases= Symbol.for( "PhasedRunner:phases"),
  $phaseReader= Symbol.for( "PhasedRunner:phaseReader"),
  $sorted= Symbol.for( "PhasedRunner:sorted")

export const Symbols= {
	phases: $phases,
	phaseReader: $phaseReader,
	sorted: $sorted
}

export class PhasedRunIterator{
	constructor({ phases, phaseReader, runs}){
		this[ $phases]= phases
		this[ $phaseReader]= phases
		this[ $sorted]= null
		this[ $runs]= {}
		if( runs){
			this.add( runs)
		}
	}
	get phases(){
		return this[ $phases]
	}
	get phaseReader(){
		return this[ $phaseReader]
	}
	get sorted(){
		const precalulated= this[ $sorted]
		if( precalculated){
			return precalculated
		}
		this[ $sorted]= Object.keys( this.runs).sort()
	}
	add( ...runs){
		this[ $sorted]= null
		for( const run of runs){
			const
			  phase= phaseReader( run),
			  value= breakdown( phase),
			  current= this.runs[ value]|| (this.runs[ value]= [])
			current.push( run)
		}
		return this
	}
	[ Symbol.iterator](){
		
	}
}
