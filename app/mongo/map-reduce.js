// Commands of fields of the system
mr = db.runCommand({
  "mapreduce" : "book",
  "map" : function() {
    for (var key in this) { emit(key, null); }
  },
  "reduce" : function(key, stuff) { return null; },
  "out": "my_collection" + "_keys"
})

db[mr.result].distinct("_id")
