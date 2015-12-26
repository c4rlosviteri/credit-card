$( document ).ready(function() {
    $("#back, #front").click(function () {
        if (this.id == "back") {
            $(".flip-container").addClass("flip");    
        }
        else if (this.id == "front") {
            $(".flip-container").removeClass("flip");    
        }
    });
    $("#visa, #master").click(function () {
        if (this.id == "visa") {
            $("#card__image").attr("src", "assets/images/visa.png");
        }
        else if (this.id == "master") {
            $("#card__image").attr("src", "assets/images/master.png");
        }
    });
    $("#name, #number, #month, #cvv, #year").bind("change paste keyup", function() {
        if (this.id == "name") {
            $(".card__name").text($(this).val());
        }
        else if (this.id == "number") {
            $(".card__number").text($(this).val());
        }
        else if (this.id == "month") {
            $(".card__month").text($(this).val());
        }
        else if (this.id == "cvv") {
            $(".card__cvv").text($(this).val());
        }
        else if (this.id == "year") {
            $(".card__year").text($(this).val());
        }
    });
});