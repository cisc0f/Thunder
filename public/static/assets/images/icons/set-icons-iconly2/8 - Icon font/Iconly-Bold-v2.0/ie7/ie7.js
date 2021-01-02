/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Iconly---Bold\'">' + entity + '</span>' + html;
	}
	var icons = {
		'iconly-boldActivity': '&#xe900;',
		'iconly-boldUser': '&#xe901;',
		'iconly-boldUser1': '&#xe902;',
		'iconly-boldAdd-User': '&#xe903;',
		'iconly-boldArrow---Down-2': '&#xe904;',
		'iconly-boldArrow---Down-3': '&#xe905;',
		'iconly-boldArrow---Down-Circle': '&#xe906;',
		'iconly-boldArrow---Down-Square': '&#xe907;',
		'iconly-boldArrow---Down': '&#xe908;',
		'iconly-boldArrow---Left-2': '&#xe909;',
		'iconly-boldArrow---Left-3': '&#xe90a;',
		'iconly-boldArrow---Left-Circle': '&#xe90b;',
		'iconly-boldArrow---Left-Square': '&#xe90c;',
		'iconly-boldArrow---Left': '&#xe90d;',
		'iconly-boldArrow---Right-2': '&#xe90e;',
		'iconly-boldArrow---Right-3': '&#xe90f;',
		'iconly-boldArrow---Right-Circle': '&#xe910;',
		'iconly-boldArrow---Right-Square': '&#xe911;',
		'iconly-boldArrow---Right': '&#xe912;',
		'iconly-boldArrow---Up-2': '&#xe913;',
		'iconly-boldArrow---Up-3': '&#xe914;',
		'iconly-boldArrow---Up-Circle': '&#xe915;',
		'iconly-boldArrow---Up-Square': '&#xe916;',
		'iconly-boldArrow---Up': '&#xe917;',
		'iconly-boldBag-2': '&#xe918;',
		'iconly-boldBag': '&#xe919;',
		'iconly-boldBookmark': '&#xe91a;',
		'iconly-boldBuy': '&#xe91b;',
		'iconly-boldCalendar': '&#xe91c;',
		'iconly-boldCall-Missed': '&#xe91d;',
		'iconly-boldCall-Silent': '&#xe91e;',
		'iconly-boldCall': '&#xe91f;',
		'iconly-boldCalling': '&#xe920;',
		'iconly-boldCamera': '&#xe921;',
		'iconly-boldCategory': '&#xe922;',
		'iconly-boldChart': '&#xe923;',
		'iconly-boldChat': '&#xe924;',
		'iconly-boldClose-Square': '&#xe925;',
		'iconly-boldDanger': '&#xe926;',
		'iconly-boldDelete': '&#xe927;',
		'iconly-boldDiscount': '&#xe928;',
		'iconly-boldDiscovery': '&#xe929;',
		'iconly-boldDocument': '&#xe92a;',
		'iconly-boldDownload': '&#xe92b;',
		'iconly-boldEdit-Square': '&#xe92c;',
		'iconly-boldEdit': '&#xe92d;',
		'iconly-boldFilter-2': '&#xe92e;',
		'iconly-boldFilter': '&#xe92f;',
		'iconly-boldFolder': '&#xe930;',
		'iconly-boldGame': '&#xe931;',
		'iconly-boldGraph': '&#xe932;',
		'iconly-boldHeart': '&#xe933;',
		'iconly-boldHide': '&#xe934;',
		'iconly-boldHome': '&#xe935;',
		'iconly-boldImage-2': '&#xe936;',
		'iconly-boldImage': '&#xe937;',
		'iconly-boldInfo-Circle': '&#xe938;',
		'iconly-boldInfo-Square': '&#xe939;',
		'iconly-boldLocation': '&#xe93a;',
		'iconly-boldLock': '&#xe93b;',
		'iconly-boldLogin': '&#xe93c;',
		'iconly-boldLogout': '&#xe93d;',
		'iconly-boldMessage': '&#xe93e;',
		'iconly-boldMore-Circle': '&#xe93f;',
		'iconly-boldMore-Square': '&#xe940;',
		'iconly-boldNotification': '&#xe941;',
		'iconly-boldPaper-Download': '&#xe942;',
		'iconly-boldPaper-Fail': '&#xe943;',
		'iconly-boldPaper-Negative': '&#xe944;',
		'iconly-boldPaper-Plus': '&#xe945;',
		'iconly-boldPaper-Upload': '&#xe946;',
		'iconly-boldPaper': '&#xe947;',
		'iconly-boldPassword': '&#xe948;',
		'iconly-boldPlay': '&#xe949;',
		'iconly-boldPlus': '&#xe94a;',
		'iconly-boldProfile': '&#xe94b;',
		'iconly-boldScan': '&#xe94c;',
		'iconly-boldSearch': '&#xe94d;',
		'iconly-boldSend': '&#xe94e;',
		'iconly-boldSetting': '&#xe94f;',
		'iconly-boldShield-Done': '&#xe950;',
		'iconly-boldShield-Fail': '&#xe951;',
		'iconly-boldShow': '&#xe952;',
		'iconly-boldStar': '&#xe953;',
		'iconly-boldSwap': '&#xe954;',
		'iconly-boldTick-Square': '&#xe955;',
		'iconly-boldTicket-Star': '&#xe956;',
		'iconly-boldTicket': '&#xe957;',
		'iconly-boldTime-Circle': '&#xe958;',
		'iconly-boldTime-Square': '&#xe959;',
		'iconly-boldUnlock': '&#xe95a;',
		'iconly-boldUpload': '&#xe95b;',
		'iconly-boldVideo': '&#xe95c;',
		'iconly-boldVoice-2': '&#xe95d;',
		'iconly-boldVoice': '&#xe95e;',
		'iconly-boldVolume-Down': '&#xe95f;',
		'iconly-boldVolume-Off': '&#xe960;',
		'iconly-boldVolume-Up': '&#xe961;',
		'iconly-boldWallet': '&#xe962;',
		'iconly-boldWork': '&#xe963;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/iconly-bold[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
