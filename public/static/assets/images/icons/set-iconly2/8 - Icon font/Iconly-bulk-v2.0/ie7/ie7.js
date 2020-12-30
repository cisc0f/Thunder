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
		el.innerHTML = '<span style="font-family: \'Iconly-bulk\'">' + entity + '</span>' + html;
	}
	var icons = {
		'iconly-bulkArrow---Down': '&#xe900;',
		'iconly-bulkUser': '&#xe902;',
		'iconly-bulkUser1': '&#xe906;',
		'iconly-bulkActivity': '&#xe90c;',
		'iconly-bulkAdd-User': '&#xe90e;',
		'iconly-bulkArrow---Down-2': '&#xe911;',
		'iconly-bulkArrow---Down-3': '&#xe913;',
		'iconly-bulkArrow---Down-Circle': '&#xe915;',
		'iconly-bulkArrow---Down-Square': '&#xe917;',
		'iconly-bulkArrow---Left-2': '&#xe919;',
		'iconly-bulkArrow---Left-3': '&#xe91b;',
		'iconly-bulkArrow---Left-Circle': '&#xe91d;',
		'iconly-bulkArrow---Left-Square': '&#xe91f;',
		'iconly-bulkArrow---Left': '&#xe921;',
		'iconly-bulkArrow---Right-2': '&#xe923;',
		'iconly-bulkArrow---Right-3': '&#xe925;',
		'iconly-bulkArrow---Right-Circle': '&#xe927;',
		'iconly-bulkArrow---Right-Square': '&#xe929;',
		'iconly-bulkArrow---Right': '&#xe92b;',
		'iconly-bulkArrow---Up-2': '&#xe92d;',
		'iconly-bulkArrow---Up-3': '&#xe92f;',
		'iconly-bulkArrow---Up-Circle': '&#xe931;',
		'iconly-bulkArrow---Up-Square': '&#xe933;',
		'iconly-bulkArrow---Up': '&#xe935;',
		'iconly-bulkBag-2': '&#xe937;',
		'iconly-bulkBag': '&#xe939;',
		'iconly-bulkBookmark': '&#xe93b;',
		'iconly-bulkBuy': '&#xe93d;',
		'iconly-bulkCalendar': '&#xe93f;',
		'iconly-bulkCall-Missed': '&#xe943;',
		'iconly-bulkCall-Silent': '&#xe945;',
		'iconly-bulkCall': '&#xe948;',
		'iconly-bulkCalling': '&#xe949;',
		'iconly-bulkCamera': '&#xe94c;',
		'iconly-bulkCategory': '&#xe94e;',
		'iconly-bulkChart': '&#xe950;',
		'iconly-bulkChat': '&#xe954;',
		'iconly-bulkClose-Square': '&#xe956;',
		'iconly-bulkDanger': '&#xe958;',
		'iconly-bulkDelete': '&#xe95a;',
		'iconly-bulkDiscount': '&#xe95c;',
		'iconly-bulkDiscovery': '&#xe95e;',
		'iconly-bulkDocument': '&#xe960;',
		'iconly-bulkDownload': '&#xe962;',
		'iconly-bulkEdit-Square': '&#xe964;',
		'iconly-bulkEdit': '&#xe966;',
		'iconly-bulkFilter-2': '&#xe969;',
		'iconly-bulkFilter': '&#xe96b;',
		'iconly-bulkFolder': '&#xe96f;',
		'iconly-bulkGame': '&#xe971;',
		'iconly-bulkGraph': '&#xe973;',
		'iconly-bulkHeart': '&#xe975;',
		'iconly-bulkHide': '&#xe978;',
		'iconly-bulkHome': '&#xe97a;',
		'iconly-bulkImage-2': '&#xe97b;',
		'iconly-bulkImage': '&#xe97e;',
		'iconly-bulkInfo-Circle': '&#xe980;',
		'iconly-bulkInfo-Square': '&#xe982;',
		'iconly-bulkLocation': '&#xe984;',
		'iconly-bulkLock': '&#xe986;',
		'iconly-bulkLogin': '&#xe988;',
		'iconly-bulkLogout': '&#xe98a;',
		'iconly-bulkMessage': '&#xe98c;',
		'iconly-bulkMore-Circle': '&#xe98e;',
		'iconly-bulkMore-Square': '&#xe990;',
		'iconly-bulkNotification': '&#xe992;',
		'iconly-bulkPaper-Download': '&#xe994;',
		'iconly-bulkPaper-Fail': '&#xe997;',
		'iconly-bulkPaper-Negative': '&#xe99a;',
		'iconly-bulkPaper-Plus': '&#xe99d;',
		'iconly-bulkPaper-Upload': '&#xe9a0;',
		'iconly-bulkPaper': '&#xe9a3;',
		'iconly-bulkPassword': '&#xe9a6;',
		'iconly-bulkPlay': '&#xe9a8;',
		'iconly-bulkPlus': '&#xe9aa;',
		'iconly-bulkProfile': '&#xe9ac;',
		'iconly-bulkScan': '&#xe9ae;',
		'iconly-bulkSearch': '&#xe9b0;',
		'iconly-bulkSend': '&#xe9b2;',
		'iconly-bulkSetting': '&#xe9b4;',
		'iconly-bulkShield-Done': '&#xe9b6;',
		'iconly-bulkShield-Fail': '&#xe9b8;',
		'iconly-bulkShow': '&#xe9ba;',
		'iconly-bulkStar': '&#xe9bc;',
		'iconly-bulkSwap': '&#xe9be;',
		'iconly-bulkTick-Square': '&#xe9c2;',
		'iconly-bulkTicket-Star': '&#xe9c4;',
		'iconly-bulkTicket': '&#xe9c6;',
		'iconly-bulkTime-Circle': '&#xe9c8;',
		'iconly-bulkTime-Square': '&#xe9ca;',
		'iconly-bulkUnlock': '&#xe9cc;',
		'iconly-bulkUpload': '&#xe9ce;',
		'iconly-bulkVideo': '&#xe9d0;',
		'iconly-bulkVoice-2': '&#xe9d2;',
		'iconly-bulkVoice': '&#xe9d4;',
		'iconly-bulkVolume-Down': '&#xe9d6;',
		'iconly-bulkVolume-Off': '&#xe9d8;',
		'iconly-bulkVolume-Up': '&#xe9da;',
		'iconly-bulkWallet': '&#xe9dd;',
		'iconly-bulkWork': '&#xe9e0;',
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
		c = c.match(/iconly-bulk[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
