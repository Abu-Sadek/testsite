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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Link1}", "click", function(sym, e) {
		if(window.parent.navigateToSequence)
			window.parent.navigateToSequence('slide3')
		else
			window.location="../slide3/slide-3.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Link2}", "click", function(sym, e) {
		if(window.parent.navigateToSequence)
			window.parent.navigateToSequence('slide5')
		else
			window.location="../slide-5/slide-5.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Link3}", "click", function(sym, e) {
		if(window.parent.navigateToSequence)
			window.parent.navigateToSequence('slide11')
		else
			window.location="../slide-11/slide-11.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Link4}", "click", function(sym, e) {
		if(window.parent.navigateToSequence)
			window.parent.navigateToSequence('slide16')
		else
			window.location="../slide-16/slide-16.html";
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-103132596");