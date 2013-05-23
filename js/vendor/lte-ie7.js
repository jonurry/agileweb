/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Agile-Web\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-agile-web-letters' : '&#xe000;',
			'icon-agile-web-hex' : '&#xe001;',
			'icon-agile-web-hex-no-border' : '&#xe002;',
			'icon-agile-web-twitter' : '&#xe003;',
			'icon-agile-web-github' : '&#xe005;',
			'icon-agile-web-apple' : '&#xe006;',
			'icon-agile-web-android' : '&#xe007;',
			'icon-agile-web-windows8' : '&#xe008;',
			'icon-agile-web-skype' : '&#xe009;',
			'icon-agile-web-linkedin' : '&#x2b;',
			'icon-agile-web-facebook' : '&#xe004;',
			'icon-agile-web-phone' : '&#xe00c;',
			'icon-agile-web-location' : '&#xe00b;',
			'icon-agile-web-mobile' : '&#xe00d;',
			'icon-agile-web-menu' : '&#xe00e;',
			'icon-agile-web-mail' : '&#xe00f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-agile-web-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};