function handleAPILoaded() {
    document.getElementById("search-button").setAttribute('disable', 'false');
}
//search for string
function search() {
    var q = document.getElementById('query').value;
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });
    this.request.execute(function (response) {
        var str = JSON.stringify(response.result);
        document.getElementById("search-container").innerHTML(str);
    });
}
