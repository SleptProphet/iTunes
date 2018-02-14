$(document).ready( function(){
    $("#numResults").on('change', function () {
        numResults = parseInt($(this).val());
    });
    $("#artists").on('change',function (){
        var url = "https://itunes.apple.com/search?term=" + $(this).val();
        console.log($(this).val());
        $.ajax({
            url: url,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                getArtist(result,numResults);
                console.log(result);
            },
            error: function() { alert('Failed!'); }
    });
    })
});
function getArtist(result,numResults){
    var output = "<tr class='box'><td class='box'>Artist</td><td class='box'>Track</td><td class='box'>Album</td>"+
        "<td class='box'>Album Art</td></tr>";
    for (var i = 0; i < numResults; i++) {
        output += "<tr id='" + i + 1 + "'>";
    }
    $("#daBoxes").html(output);
    for (var i = 0; i < numResults; i++) $("#" + i + 1).html("<td class='box'>" + result.results[i].artistName + "</td><td class='box'>" +
        result.results[i].trackName + "</td><td class='box'>" + result.results[i].collectionName + "</td><td class='box'><img src='"+
        result.results[i].artworkUrl100 +"'</td>");
}