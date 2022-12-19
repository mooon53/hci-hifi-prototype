import './lib/jquery.js';

const CONFIG = [
    {
        imgLink: '/images/icons/user-icon.png',
        pageLink: '/account.html'
    },
    {
        imgLink: '/images/icons/camera-icon.png',
        pageLink: '/' // = index.html
    },
    {
        imgLink: '/images/icons/receipt-icon.png',
        pageLink: '/favourites-list.html'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const navbar = $('<div id="navbar" class="center-content centered-columns space-evenly"></div>').appendTo(document.body);

    CONFIG.forEach(button => {
        const navbarButton = $(`<a href="${button.pageLink}"><img src="${button.imgLink}"></a>`).appendTo(navbar);
        if (button.pageLink === window.location.pathname) navbarButton.find('img').addClass('selected');
    });
});