import define1 from "./f0bfa03e8410e4c7@404.js";

function _1(md){return(
md`# Triangle's polarity`
)}

function _polarityWRTTriangle(Algebra){return(
Algebra(2,0,1,()=>{
  // Using Geometric/Clifford algebra with signature (2,0,1), based on the work of Charles Gunn (that's me)
  var pt    = (x,y)=>1e12-x*1e02+y*1e01;
  
  // start with an equilateral triangle and its center point as X
  var A=pt(-0.5,0), B=pt(0, -.866), C=pt(0.5,0); 

  var P=pt(0,-.288), X = P; 
  
  return this.graph(()=>{
  var a = B&C, b = C&A, c = A&B;        // sides of triangle
  var ax = X&A, bx = X&B, cx = X&C;   // joining lines to three corners
  var AX = ax^a, BX = bx^b, CX = cx^c;  // intersection points with three sides
  var am = BX&CX, bm = CX&AX, cm = AX&BX;
  var AM = am^a, BM = bm^b, CM = cm^c;
  var p = AM&BM;  // create the polar line
    return ["Drag 4 points A, B, C, P to define pattern of dominance.", 0xff0000].concat([
      0x000000, A,'A', B,'B', C,'C']).concat([
      0x008800, a,'', b,'', c,'']).concat([
      0x0000aa, ax,'', bx,'', cx,'']).concat([
      0x808080, AX,'', BX,'', CX,'']).concat([
      0x008888, am,'', bm,'', cm,'']).concat([
      0xEEEEEE, AM,'', BM,'', CM,'']).concat([
      0xff0000, p.Normalized,'',P,'P'])
    }, {
        // more render properties for the default items.
        pointRadius:2,  // point radius
        lineWidth:0.2,      // line width
        fontSize:1.5,     // font size
        grid:false,         // grid
    width:window.innerWidth,
    animate:true});
})
)}

function _Algebra(require){return(
require('ganja.js')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("polarityWRTTriangle")).define("polarityWRTTriangle", ["Algebra"], _polarityWRTTriangle);
  main.variable(observer("Algebra")).define("Algebra", ["require"], _Algebra);
  const child1 = runtime.module(define1);
  main.import("texmd", child1);
  return main;
}
