(function() {

    let placeholderDiv = document.getElementById('placeholderDiv');

    // var xmlRequest =new XMLHttpRequest()};

    // xmlRequest.open ('GET', 'http:://pushadin.dropmind.com/ api/teachers");




    var request = new Request("http:://pushadin.dropmind.com/ api/teacher");


    fetch(request)
        .then(function(response) {
            if (response.ok) {
                return reponse.json();
            } else { alert("Response error"); }
        })

    .then(function(object) {
            conslode.log(object);
        })
        .catch(function(error) {
            console.log(error);
        })
})();

(function() {

})();