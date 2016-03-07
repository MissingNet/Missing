
var Item = Parse.Object.extend("Item");

function getItems() {
  var query = new Parse.Query(Item);
  query.equalTo("lost", false);
  query.find({
    success: function(results){
        var output = "";
        for (var i in results) {
          var title = results[i].get("title");
          var description = results[i].get("description");
          var name = results[i].get("name");

          output += "<li>";
          output += "<h3 class='borttappadh3'>"+title+"</h3>";
          output += "<p class='borttappadp'>"+description+"</p>";
          output += "<p class='borttappadp'>"+"Kontakta: "+name+"</p>";
          output += "</li>";
        }
        $("#list-items").html(output);
    }, error: function(){
      console.log("Query Error"+error.message);

    }
  });
  var query = new Parse.Query(Item);
  query.equalTo("lost", true);
  query.find({
    success: function(results){
        var output = "";
        for (var i in results) {
          var title = results[i].get("title");
          var description = results[i].get("description");
          var name = results[i].get("name");

          output += "<li>";
          output += "<h3 class='borttappadh3'>"+title+"</h3>";
          output += "<p class='borttappadp'>"+description+"</p>";
          output += "<p class='borttappadp'>"+"Kontakta: "+name+"</p>";
          output += "</li>";
        }
        $("#list-lost").html(output);
    }, error: function(){
      console.log("Query Error"+error.message);

    }
  });
}

getItems();

$("#button").click(function(event){
    var title = $("#post-title").val();
    var description = $("#post-description").val();
    var name = $("#post-name").val();
    var lost;
    if ($("#post-lost").val() == "lost") {
      lost = true;
    } else {
      lost = false;
    }

    var newItem = new Item();
    newItem.set("title", title);
    newItem.set("description",description);
    newItem.set("name", name);
    newItem.set("lost", lost);

    newItem.save({
      success: function(){
        getItems();
      }, error: function(error){
        console.log("Error:"+error.message);
      }
    });
    $(".success-box").css("visibility", "visible");
    $('#post-form').trigger("reset");
  });
