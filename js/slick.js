$(function () {
  $(".p-p-uniqueness-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".p-p-uniqueness-list-left",
    nextArrow: ".p-p-uniqueness-list-right",
  });
});

$(function () {
  $(".p-p-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".p-p-reviews-list-left",
    nextArrow: ".p-p-reviews-list-right",
  });
});
