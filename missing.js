
var Item = Parse.Object.extend("Item");

function getItems() {
  var query = new Parse.Query(Item);
  query.find({
    success: function(results){
        var output = "";
        for (var i in results) {
          var title = results[i].get("title");
          var description = results[i].get("description");
          var name = results[i].get("name");

          output += "<li>";
          output += "<h3>"+title+"</h3>";
          output += "<p>"+description+"</p>";
          output += "<p>"+"Kontakta: "+name+"</p>";
          output += "</li>";
        }
        $("#list-items").html(output);
    }, error: function(){
      console.log("Query Error"+error.message);

    }
  });
}

getItems();

$("#post-form").submit(function(event){
    var title = $("#post-title").val();
    var description = $("#post-description").val();
    var name = $("#post-name").val();

    var newItem = new Item();
    newItem.set("title", title);
    newItem.set("description",description);
    newItem.set("name", name);

    newItem.save({
      success: function(){
        getItems();
      }, error: function(error){
        console.log("Error:"+error.message);
      }
    });
  });
