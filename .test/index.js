import parse from "./parse.js"
import base from "./base.js"
import prefix from "./prefix.js"
import collection from "./collection.js"

export {
	parse,
	base,
	prefix,
	collection
}

export function all(){
	parse()
	base()
	prefix()
	collection()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
