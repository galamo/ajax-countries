(function() {

    //es6 Arrow Function
    // $("#all").click(()=>{

    // })


    //es5 Anonymus function
    $("#all").click(function() {
        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/all",
            success: (response) => {
                $("#res1").html(JSON.stringify(response));
            },
            error: (error) => {
                $("#res1").html(error.toString());
            }
        })
    })

    $("#byName").click(function() {
        let paramName = $("#inputName").val();
        $.ajax({
            type: "GET",
            url: `https://restcountries.eu/rest/v2/name/${paramName}`,
            success: (response) => {
                $("#res2").html(JSON.stringify(response));
            },
            error: (error) => {
                $("#res2").html(error.toString());
            }
        })
    })

    $("#playlist").click(function() {
        $.ajax({
            type: "GET",
            url: "http://localhost/cars/controller/PlayListController.php",
            success: (response) => {

                $("#res3").html(response);
            },
            error: (error) => {
                $("#res3").html(error.toString());
            }
        })
    })



})();