var Item = parse.Object.extend("Item");
var query = new Parse.Query(Item);
query.equalTo("Lost", true);
query.find({
  success:funtion(results) {

    }


    
  })
}
