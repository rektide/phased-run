export function increments(){
	function inc( n){
		return function(){
			this.accum+= n
		}
	}
	let o= {
	  accum: 0,
	  getAccum: function(){
		return this.accum
	  },
	  inc1: inc( 1),
	  inc2: inc( 2),
	  inc3: inc( 3)
	};
	[ "getAccum", "inc1", "inc2", "inc3"].forEach( name=> o[ name]= o[ name].bind( o))
	return o
}
export default increments
