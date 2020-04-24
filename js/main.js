$(document).ready(function () {
    const lazyLoadInstance = new LazyLoad({elements_selector: ".lazyload"});

    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js');

    const hash = window.location.hash;
    if (hash && hash.indexOf('#') > -1) {
        $('.collapse').collapse('hide');
        showCategory(hash.substring(1));
    }

    $('.exception').popup({position: 'right center', title: 'Exceptions & Restrictions'});
});

$('.cat').click(function () {
    let hash = window.location.hash;
    // Collapse all other tables.
    $('.collapse').collapse('hide');
    $('.cat').removeClass('active');

    // Check if category tables are displayed
    if (!$(`#${hash.substring(1)}-table`).hasClass('collapsing') && !$(`#${hash.substring(1)}-mobile-table`).hasClass('collapsing') || hash.substring(1) !== this.id) {
        window.location.hash = this.id;
        showCategory(this.id);
    } else {
        // Remove #category in URL
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
});

function showCategory(category) {
    $(`#${category}-table`).collapse("show");
    $(`#${category}-mobile-table`).collapse("show");
    $(`#${category}`).addClass('active');
}