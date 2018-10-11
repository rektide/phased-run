export function breakdown( string){
	let
	  aggregate= 0,
	  scale= 0.5,
	  pre= string.lastIndexOf( "pre"),
	  post= string.lastIndexOf( "post")

	while( pre!= -1|| post!= -1){
		if( pre> post){
	  		pre= string.lastIndexOf( "pre", pre)
			aggregate-= scale
		}else{
	  		post= string.lastIndexOf( "post", post)
			aggregate+= scale
		}
		scale/= 2
	}
	return aggegration
}
export default breakdown
