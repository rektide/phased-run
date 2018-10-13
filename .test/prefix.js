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
	t.equal( prefix( "prepost"), 0.2)
	t.end()
})

export const postprepost= test( "prefix of postprepost-", function( t){
	t.equal( prefix( "postprepost"), 0.3)
	t.end()
})

export const prepostprepost= test( "prefix of prepostprepost-", function( t){
	t.equal( prefix( "prepostprepost"), 0.25)
	t.end()
})

export const empty= test( "prefix of empty string", function( t){
	t.equal( prefix( ""), 0)
	t.end()
})

export const badStart= test( "prefix of leading bad match", function( t){
	t.equal( prefix( "Xprepre"), -1)
	t.end()
})

export const badMiddle= test( "prefix of middle bad match", function( t){
	t.equal( prefix( "preXpre"), -1)
	t.end()
})

export const badEnd= test( "prefix of middle bad match", function( t){
	t.equal( prefix( "prepreX"), -1)
	t.end()
})

export function all(){
	pre()
	post()
	prepost()
	postprepost()
	prepostprepost()	
	empty()
	badStart()
	badMiddle()
	badEnd()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
