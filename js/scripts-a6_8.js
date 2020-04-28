let widthProgress = 0;

function clickButtonPlus_1() {
    widthProgress += 1;
    progressBar(widthProgress);

};
function clickButtonPlus_3() {
    widthProgress += 3;
    progressBar(widthProgress);
};
function clickButtonPlus_7() {
    widthProgress += 7;
    progressBar(widthProgress);
};

function progressBar(width) {
    $("#my-progress-bar").width(width + "%");
};

function init() {
    $('[name="+1%"]').click(clickButtonPlus_1);
    $('[name="+3%"]').click(clickButtonPlus_3);
    $('[name="+7%"]').click(clickButtonPlus_7);
}

$(document).ready(init);
