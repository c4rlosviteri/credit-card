$( document ).ready(function() {
    $("#back, #front").click(function () {
        if (this.id == "back") {
            $(".flip-container").addClass("flip");
        }
        else if (this.id == "front") {
            $(".flip-container").removeClass("flip");
        }
    });
    $("#name, #number, #month, #cvv, #year").bind("change paste keyup", function() {
        if (this.id == "name") {
            $(".card__name").text($(this).val());
        }
        else if (this.id == "number") {
            var VISA_PREFIXES = ["4539", "4556", "4916", "4532", "4929", "4485", "4716"]; // Prefixes for VISA cards
            var MC_PREFIXES = ["51", "52", "53", "54", "55"]; // Prefixes for Master Card cards
            var field_value = $(this).val();

            if (field_value.charAt(0) === "4" && field_value.length >= 4) {
                var prefix = field_value.slice(0, 4);

                if (VISA_PREFIXES.includes(prefix)) {
                    $("#card__image").attr("src", "assets/images/visa.png");
                }
            } else if (field_value.charAt(0) === "5" && field_value.length >= 2) {
                var prefix = field_value.slice(0, 2);

                if (MC_PREFIXES.includes(prefix)) {
                    $("#card__image").attr("src", "assets/images/master.png");
                }
            } else {
                $("#card__image").attr("src", "");
            }

            $(".card__number").text(field_value);
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