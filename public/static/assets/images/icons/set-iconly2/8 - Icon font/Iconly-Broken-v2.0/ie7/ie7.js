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
		el.innerHTML = '<span style="font-family: \'Iconly-Broken\'">' + entity + '</span>' + html;
	}
	var icons = {
		'iconly-brokenUser': '&#xe900;',
		'iconly-brokenUser1': '&#xe901;',
		'iconly-brokenActivity': '&#xe902;',
		'iconly-brokenAdd-User': '&#xe903;',
		'iconly-brokenArrow---Down-2': '&#xe904;',
		'iconly-brokenArrow---Down-3': '&#xe905;',
		'iconly-brokenArrow---Down-Circle': '&#xe906;',
		'iconly-brokenArrow---Down-Square': '&#xe907;',
		'iconly-brokenArrow---Down': '&#xe908;',
		'iconly-brokenArrow---Left-2': '&#xe909;',
		'iconly-brokenArrow---Left-3': '&#xe90a;',
		'iconly-brokenArrow---Left-Circle': '&#xe90b;',
		'iconly-brokenArrow---Left-Square': '&#xe90c;',
		'iconly-brokenArrow---Left': '&#xe90d;',
		'iconly-brokenArrow---Right-2': '&#xe90e;',
		'iconly-brokenArrow---Right-3': '&#xe90f;',
		'iconly-brokenArrow---Right-Circle': '&#xe910;',
		'iconly-brokenArrow---Right-Square': '&#xe911;',
		'iconly-brokenArrow---Right': '&#xe912;',
		'iconly-brokenArrow---Up-2': '&#xe913;',
		'iconly-brokenArrow---Up-3': '&#xe914;',
		'iconly-brokenArrow---Up-Circle': '&#xe915;',
		'iconly-brokenArrow---Up-Square': '&#xe916;',
		'iconly-brokenArrow---Up': '&#xe917;',
		'iconly-brokenBag-2': '&#xe918;',
		'iconly-brokenBag': '&#xe919;',
		'iconly-brokenBookmark': '&#xe91a;',
		'iconly-brokenBuy': '&#xe91b;',
		'iconly-brokenCalendar': '&#xe91c;',
		'iconly-brokenCall-Missed': '&#xe91d;',
		'iconly-brokenCall-Silent': '&#xe91e;',
		'iconly-brokenCall': '&#xe91f;',
		'iconly-brokenCalling': '&#xe920;',
		'iconly-brokenCamera': '&#xe921;',
		'iconly-brokenCategory': '&#xe922;',
		'iconly-brokenChart': '&#xe923;',
		'iconly-brokenChat': '&#xe924;',
		'iconly-brokenClose-Square': '&#xe925;',
		'iconly-brokenDanger': '&#xe926;',
		'iconly-brokenDelete': '&#xe927;',
		'iconly-brokenDiscount': '&#xe928;',
		'iconly-brokenDiscovery': '&#xe929;',
		'iconly-brokenDocument': '&#xe92a;',
		'iconly-brokenDownload': '&#xe92b;',
		'iconly-brokenEdit-Square': '&#xe92c;',
		'iconly-brokenEdit': '&#xe92d;',
		'iconly-brokenFilter-2': '&#xe92e;',
		'iconly-brokenFilter': '&#xe92f;',
		'iconly-brokenFolder': '&#xe930;',
		'iconly-brokenGame': '&#xe931;',
		'iconly-brokenGraph': '&#xe932;',
		'iconly-brokenHeart': '&#xe933;',
		'iconly-brokenHide': '&#xe934;',
		'iconly-brokenHome': '&#xe935;',
		'iconly-brokenImage-2': '&#xe936;',
		'iconly-brokenImage': '&#xe937;',
		'iconly-brokenInfo-Circle': '&#xe938;',
		'iconly-brokenInfo-Square': '&#xe939;',
		'iconly-brokenLocation': '&#xe93a;',
		'iconly-brokenLock': '&#xe93b;',
		'iconly-brokenLogin': '&#xe93c;',
		'iconly-brokenLogout': '&#xe93d;',
		'iconly-brokenMessage': '&#xe93e;',
		'iconly-brokenMore-Circle': '&#xe93f;',
		'iconly-brokenMore-Square': '&#xe940;',
		'iconly-brokenNotification': '&#xe941;',
		'iconly-brokenPaper-Download': '&#xe942;',
		'iconly-brokenPaper-Fail': '&#xe943;',
		'iconly-brokenPaper-Negative': '&#xe944;',
		'iconly-brokenPaper-Plus': '&#xe945;',
		'iconly-brokenPaper-Upload': '&#xe946;',
		'iconly-brokenPaper': '&#xe947;',
		'iconly-brokenPassword': '&#xe948;',
		'iconly-brokenPlay': '&#xe949;',
		'iconly-brokenPlus': '&#xe94a;',
		'iconly-brokenProfile': '&#xe94b;',
		'iconly-brokenScan': '&#xe94c;',
		'iconly-brokenSearch': '&#xe94d;',
		'iconly-brokenSend': '&#xe94e;',
		'iconly-brokenSetting': '&#xe94f;',
		'iconly-brokenShield-Done': '&#xe950;',
		'iconly-brokenShield-Fail': '&#xe951;',
		'iconly-brokenShow': '&#xe952;',
		'iconly-brokenStar': '&#xe953;',
		'iconly-brokenSwap': '&#xe954;',
		'iconly-brokenTick-Square': '&#xe955;',
		'iconly-brokenTicket-Star': '&#xe956;',
		'iconly-brokenTicket': '&#xe957;',
		'iconly-brokenTime-Circle': '&#xe958;',
		'iconly-brokenTime-Square': '&#xe959;',
		'iconly-brokenUnlock': '&#xe95a;',
		'iconly-brokenUpload': '&#xe95b;',
		'iconly-brokenVideo': '&#xe95c;',
		'iconly-brokenVoice-2': '&#xe95d;',
		'iconly-brokenVoice': '&#xe95e;',
		'iconly-brokenVolume-Down': '&#xe95f;',
		'iconly-brokenVolume-Off': '&#xe960;',
		'iconly-brokenVolume-Up': '&#xe961;',
		'iconly-brokenWallet': '&#xe962;',
		'iconly-brokenWork': '&#xe963;',
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
		c = c.match(/iconly-broken[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
