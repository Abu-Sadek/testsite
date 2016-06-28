/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var createScript = function(url) {
         	var script = document.createElement( 'script' );
         	script.type = 'text/javascript';
         	script.src = url;
         	//document.getElementById("Stage").appendChild( script );
         	document.head.appendChild( script );
         };
         
         createScript('../refs/scripts/js/openpdf.js') ;
         createScript('../refs/scripts/js/jquery-3.0.0.min.js') ;
         window.setTimeout(
         	function() { 
         		createViewer('Stage')
         		}, 1000) ;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         openPdf('o1', 'Stage') ;

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-58846788");