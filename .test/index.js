import parse from "./parse.js"
import base from "./base.js"
import prefix from "./prefix.js"

export {
	parse,
	base,
	prefix,
}

export function all(){
	parse()
	base()
	prefix()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
