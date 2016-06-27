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
      
      
      Symbol.bindElementAction(compId, symbolName, "${slide-17-objects}", "click", function(sym, e) {
         sym.$("slide-17-objects").hide();
         sym.getSymbol("Lipo").play("In");
         sym.$("slide-17-back-clear").show();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Lipo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${slide-17-objects2}", "click", function(sym, e) {
         if(sym.getPosition() == 1000)
         {
         	sym.play("Out");
         	sym.getParentSymbol().$("slide-17-back-clear").hide();
         }
         else
         {
         	sym.getParentSymbol().$("slide-17-back-clear").show();
         	sym.play("In");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop(2000);
         sym.show();

      });
      //Edge binding end

   })("Lipo");
   //Edge symbol end:'Lipo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-65126757");