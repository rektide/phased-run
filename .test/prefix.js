import isMain from "is-main"
import prefix from "../prefix.js"
import { testFactory as test, testMatrixFactory} from "./util/test-factory.js"
import PrefixFixture from "./fixture/phases.js"

export const [
	run,
	post,
	pre,
	prepre,
	postpre,
	prepostpre,
	postprepostpre
]= testMatrixFactory( "prefix", prefix, PrefixFixture())

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
	run()
	post()
	pre()
	prepre()
	postpre()
	prepostpre()
	postprepostpre()
	empty()
	badStart()
	badMiddle()
	badEnd()
}
export default all

if( isMain( import.meta)){
	all()
}
