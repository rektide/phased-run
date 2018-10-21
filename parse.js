import { Scale, ScaleFactor} from "./scale.js"

const
  $pre= "pre",
  $post= "post"

export function parse( string){
	let
	  modifier= 0,
	  scale= Scale,
	  pre= string.lastIndexOf( $pre),
	  post= string.lastIndexOf( $post),
	  cursor,
	  root
	if( pre> post){
		cursor= pre+ $pre.length
		root= string.substring( cursor)
	}else if( post== -1){
		return { root: string, modifier: 0}
	}else{
		cursor= post+ $post.length
		root= string.substring( cursor)
	}
	while( pre!== -1|| post!== -1){
		const wasPre= pre> post,
		  len= wasPre? $pre.length: $post.length,
		  val= wasPre? pre: post

		cursor-= len
		if( val!= cursor){
			return { root: string, modifier: 0}
		}
		const mod= wasPre? -scale: scale
		modifier+= mod
		if( val=== 0){
			return { root, modifier}
		}
		const
		  literal= wasPre? $pre: $post,
		  lastIndex= string.lastIndexOf( literal, val- 1)
		if( wasPre){
			pre= lastIndex
		}else{
			post= lastIndex
		}
		scale/= ScaleFactor
	}
	return { root: string, modifier: 0}
}
export default parse
