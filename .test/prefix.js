import prefix from "../prefix.js"
import test from "./util/test-factory.js"

export const pre= test( "prefix of pre-", function( t){
	t.equal( prefix( "pre") , -0.4)
	t.end()
})

export const post= test( "prefix of post-", function( t){
	t.equal( prefix( "post"), 0.4)
	t.end()
})

export const prepost= test( "prefix of prepost-", function( t){
	t.equal( prefix( "prepost"), 0.3)
	t.end()
})

export const postprepost= test( "prefix of postprepost-", function( t){
	t.equal( prefix( "postprepost"), 0.35)
	t.end()
})

export const empty= test( "prefix of empty string", function( t){
	t.equal( prefix( ""), 0)
	t.end()
})

export const nonMatching= test( "prefix of non-matching", function( t){
	t.equal( prefix( "nonMatching"), 0)
	t.end()
})

export function all(){
	pre()
	post()
	prepost()
	postprepost()	
	empty()
	nonMatching()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
