export const phases= function(){
	const root= "run"
	return [
	{ args: "run", expected: { root, modifier: 0}},
	{ args: "postrun", expected: { root, modifier: 0.25}},
	{ args: "prerun", expected: { root, modifier: -0.25}},
	{ args: "preprerun", expected: { root,  modifier: -1/8.}},
	{ args: "postprerun", expected: { root, modifier: -3/8.}},
	{ args: "prepostprerun", expected: { root, modifier: -5/16.}},
	{ args: "postprepostprerun", expected: { root, modifier: -11/32.}} ]
}
export const phasesFixture= phases
export const PhasesFixture= phases
export default phases

export const prefixFixture= function(){
	const rootLen= "run".length
	return phases.map(({arg, expected})=> {arg: arg.substring(0, arg.length- expected.root.length), expected})
}
export const PrefixFixture= prefixFixture
