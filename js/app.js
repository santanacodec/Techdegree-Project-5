$(document).ready(function () {
    $('.container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true 
        },
        image: {
            titleSrc: function (item) {
                return item.el.find('img').attr('title');
            }
        },
        showCloseBtn: false
    });
});
