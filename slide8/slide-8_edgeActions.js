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
      
      
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         sym.getSymbol("symText").play("In");
         sym.stop(500);
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);
         
         var createScript = function(url, callback) {
         	var script = document.createElement( 'script' );
         	script.type = 'text/javascript';
         
         	if(callback) {
         	if (script.readyState){  //IE
                 script.onreadystatechange = function(){
                     if (script.readyState == "loaded" ||
                             script.readyState == "complete"){
                         script.onreadystatechange = null;
                         callback();
                     }
                 };
             } else {  //Others
                 script.onload = function(){
                     callback();
                 };
             }
         	}
         
         	script.src = url;
         	document.getElementsByTagName('head')[0].appendChild( script );
         };
         
         createScript('refs/scripts/js/jquery-3.0.0.min.js') ;
         createScript('refs/scripts/js/openpdf.js', function() { createViewer('Stage'); }) ;
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         openPdf('o3', 'Stage') ;

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'symText'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 795, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("symText");
   //Edge symbol end:'symText'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-99540478");