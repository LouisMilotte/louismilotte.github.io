function currentActive() {
    const currentActive = $(".nav-link.active").attr("data-page");
    $(".nav-link.active").parent().addClass("custom-active");
    $("section.row").each(function () {
        if ($(this).attr("data-content") !== currentActive) {
            $(this).addClass("hidden");
        }
    });
}
$("#main_navbar .nav-link, footer .nav-link").on("click", function (e) {
    if ($(this).attr("href") === "#") {
        e.preventDefault();
        const clickedElement = $(this).attr("data-page");
        $("#main_navbar .nav-link").each(function () {
            if ($(this).attr("data-page") !== clickedElement && $(this).hasClass("active")) {
                $(this).parent().removeClass("custom-active");
                $(this).removeClass("active");
                $(this).removeAttr("aria-current");
            } else if ($(this).attr("data-page") === clickedElement && !$(this).hasClass("active")) {
                $(this).addClass("active");
                $(this).parent().addClass("custom-active");
                $(this).attr("aria-current", "active");
            }
        });


        $("section.row").each(function () {
            if ($(this).attr("data-content") !== clickedElement) {
                $(this).addClass("hidden");
            } else {
                $(this).removeClass("hidden");
            }
        });
    }
});
const BTP = $("#back_to_top button");
$("#back_to_top button").on("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function detectPageMoved() {
    var fromTop = window.scrollY;
    var mainNavbar = document.getElementById("main_navbar");
    var navbarRect = mainNavbar.getBoundingClientRect();
    if (fromTop >= (navbarRect.top + mainNavbar.offsetHeight)) {
        $("#back_to_top").removeClass("hidden");
    } else {
        $("#back_to_top").addClass("hidden");
    }
}

$("#main_navbar a").on("click", detectPageMoved);
$(window).on("scroll", detectPageMoved);

$(function () {
    currentActive();
});