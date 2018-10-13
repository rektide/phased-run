import parse from "./parse"

export function all(){
	parse()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
