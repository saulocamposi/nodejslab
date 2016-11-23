var intervalcollection =  function (){
  return   Math.floor((Math.random()*10)+1);
}

var addNo = function(){

  var students =
    [
      {name: "Dale Cooper" + intervalcollection() + 4, class: "calculus", tests:[30, 28, 45]},
      {name: "Harry Truman" + intervalcollection() + 67, class: "algebra", tests:[30, 28, 45]},
      {name: "Harry Potter" + intervalcollection() + 467, class: "boolean algebra", tests:[30, 10, 45]},
      {name: "Maria Bonita" + intervalcollection() + 4345, class: "college algebra", tests:[12, 28, 45]},
      {name: "David Copperfield" + intervalcollection() + 409, class: "geometry", tests:[30, 28, 45]},
      {name: "Gisele Bundchen" + intervalcollection() + 412334, class: "calculus", tests:[30, 34, 45]},
      {name: "Alice Cooper" + intervalcollection() + 4456, class: "geometry", tests:[20, 28, 45]}
    ];

  var element = {};

  for(i = 0 ; i < intervalcollection() ; i++){

    if(intervalcollection() > 6){
      element.book = "book1" + intervalcollection() + 4;
      element.number = "book2" + intervalcollection() + 2;
      element.id = "book3" + intervalcollection() + 3;
      element.ISBN = "book4" + intervalcollection() + 7;;
      element.CPF = "book5" + intervalcollection() + 29;
      element.CNPJ = "book6" + intervalcollection() + 2;
    }

    if(intervalcollection() < 5){
      element.cic = "book4" + intervalcollection() + 7;;
      element.codigobook = "book5" + intervalcollection() + 29;
    }

    if(intervalcollection() < 2){
      element.livro = "book4" + intervalcollection() + 7;
      element.codigoempresa = "book5" + intervalcollection() + 29;
    }

    if(intervalcollection() > 5){
      element.cic = "book4" + intervalcollection() + 7;
      element.numero = "book5" + intervalcollection() + 29;
    }
    
    students.push(element);

  }

  return students;

}

var seeddata = function(){
  db.book.insert(addNo());
}

seeddata();
//console.log(students);
//console.log(intervalcollection);
