// $("navbar-toggler").click(function () {
//     alert("preeeeeeessssssss");

// });

$(function () {
    AOS.init();
})

$(".readmorebutton1").click(function () {
    $(".productDetailHidden1").toggleClass("active");
    $(".hiddendivforopacity").toggleClass("active");
    // $(".whole").toggleClass("active");
    // $(":not(.productDetailHidden1.active)").css("filter", "brightness(0.8)");
})

$(".cross1").click(function () {
    $(".productDetailHidden1").toggleClass("active");
    $(".hiddendivforopacity").toggleClass("active");
    // $(".whole").toggleClass("active");

})


$(".readmorebutton2").click(function () {
    $(".productDetailHidden2").toggleClass("active");
    $(".hiddendivforopacity").toggleClass("active");
    // $(".whole").toggleClass("active");
    // $(":not(.productDetailHidden1.active)").css("filter", "brightness(0.8)");
})

$(".cross2").click(function () {
    $(".productDetailHidden2").toggleClass("active");
    $(".hiddendivforopacity").toggleClass("active");
    // $(".whole").toggleClass("active");

})


$(".readmorebutton3").click(function () {
    $(".productDetailHidden3").toggleClass("active");
    $(".hiddendivforopacity").toggleClass("active");
    // $(".whole").toggleClass("active");
    // $(":not(.productDetailHidden1.active)").css("filter", "brightness(0.8)");
})

$(".cross3").click(function () {
    $(".productDetailHidden3").toggleClass("active");
    $(".hiddendivforopacity").toggleClass("active");
    // $(".whole").toggleClass("active");

})


$(".hiddendivforopacity").click(function () {
    if ($(".productDetailHidden1.active").length && $(".productDetailHidden1.active").length > 0) {
        $(".productDetailHidden1").toggleClass("active");
        $(".hiddendivforopacity").toggleClass("active");
    }

    // $(".whole").toggleClass("active");

})
$(".hiddendivforopacity").click(function () {
    if ($(".productDetailHidden2.active").length && $(".productDetailHidden2.active").length > 0) {
        $(".productDetailHidden2").toggleClass("active");
        $(".hiddendivforopacity").toggleClass("active");
    }

    // $(".whole").toggleClass("active");

})
$(".hiddendivforopacity").click(function () {
    if ($(".productDetailHidden3.active").length && $(".productDetailHidden3.active").length > 0) {
        $(".productDetailHidden3").toggleClass("active");
        $(".hiddendivforopacity").toggleClass("active");
    }

    // $(".whole").toggleClass("active");

})