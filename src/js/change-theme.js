const Cookie = require('js-cookie'),
			config = require('../../data/config.json'),
			themeList  = config.themes,
			cookieName = config.cookieName,
			defaultTheme = config.defaultTheme,
			cookieValue = Cookie.get(cookieName),
			cookieMoreOptions = {
				expires: 7,
			};

// load the theme
function themeLoader(themeName = defaultTheme) {
	if (! themeName) {
		themeName = defaultTheme
	}
	require(`!style-loader!css-loader!less-loader!../less/themes/theme.${themeName}.less`);
}

// load theme & set into cookie
function changeTheme(themeColor) {
	if (themeColor != cookieValue) {
		themeLoader(themeColor);
		Cookie.set(cookieName, themeColor, cookieMoreOptions);
	}
}

// check if cookie is exist
function cookieExist() {
	return cookieValue != undefined || cookieValue != '';
}

// hide the cookie popup
const cookiePopup = document.getElementById('cookie-msg'),
			cookiePopupBtn = cookiePopup.querySelector('button'),
			hideCookiePopup = () => {
				cookiePopup.classList.add('hide');
			};

if (cookieExist()) {
	hideCookiePopup();
} else {
	cookiePopupBtn.onclick = hideCookiePopup();
}

if (cookieExist()) {
	themeLoader(cookieValue);
} else {
	themeLoader();
}

window.onload = () => {
	const colors = document.getElementById('change-theme').querySelectorAll('.theme-item');

	if (colors && themeList) {
		colors.forEach((color) => {
			color.onclick = function() {
				let themeColor = this.getAttribute('data-theme');
				if (themeList.includes(themeColor)) {
					changeTheme(themeColor);
				} else {
					changeTheme(defaultTheme);
				}
			}
		});
	}
}
