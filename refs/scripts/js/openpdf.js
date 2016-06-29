function getLink(ind) {
	var c = new Object() ;
	c["o1"] = "3-4-Bioequivalence.pdf" ; // Final version of Study report
	c["o2"] = "5-6-7-ACC-AHA-Guidelines.pdf" ; // 2013 ACC-AHA-Guidelines
	c["o3"] = "8-9-10-NICE-Guidelines-July-2014.pdf" ;
	c["o4"] = "11-Nawrocki-et-al.pdf" ;
	c["o5"] = "12-Sever-ASCOT.pdf" ;
	c["o6"] = "13-CARDS.pdf" ;
	c["o7"] = "14-PROVE-IT.pdf" ;
	c["o8"] = "15-1-Safety_of_44_trials-ref-10-o.pdf" ;
	c["o9"] = "15-2-Data-on-File-lipitor.pdf" ;
 	var t = c[ind] ;
	return t ; 			
} // getLink 

function createViewer(stg) {
	var rv = document.createElement('div') ;
	rv.setAttribute("id", "ref_viewer") ;
	rv.style="display:none" ;
	document.body.appendChild(rv) ;
	var im = document.createElement('img') ;
	im.setAttribute("id", "viewPDF-close") ;
	im.src="../refs/imgs/btn_overlay_close.png" ;
	im.onclick = function() { closePdf(stg) ; };
	im.style="z-index: 0; position:absolute; left: 900px; top: 0px" ;
	rv.appendChild(im) ;
	var ifr = document.createElement("iframe") ;
	ifr.setAttribute("id", "pdf1") ;
	ifr.style = "display: block; width: 1024px; height:658px" ;
	ifr.src = "../refs/scripts/pdf/viewer.html?file=" ;
	ifr.frameborder = "0" ;
	rv.appendChild(ifr) ;
}

function openPdf(ind,stg) {
	$("div#"+stg).css({ 'display': 'none' });
	//$("div#index_root").css({ 'display': 'none' });
	$("div#ref_viewer").css({ 'display': 'block' });
	$('#pdf1').attr('src', '../refs/scripts/pdf/viewer.html?file=' + getLink(ind));
	$('#viewPDF-close').css({display:'block'}) ;	
}

function closePdf(stg) {
	//$('#viewPDF-close').on('click', function() {
		$('#ref_viewer').css({display:'none'}) ;	
		$('#viewPDF-close').css({display:'none'}) ;	
		$("div#"+stg).css({ 'display': 'block' });
//});
}
