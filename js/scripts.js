
// back-end logic

function getValues() {
  var meats = [];
  var veggies = [];
  var size = $('input[name=selectSize]:checked').val();
  $('.meat:checked').each(function(m) {
    meats[m] = $(this).val();
  });
  $('.veggie:checked').each(function(v) {
    veggies[v] = $(this).val();
  });
  var cheese = $('input[name=cheeseRadio]:checked').val();
  var crust = $('input[name=crustRadio]:checked').val();
  var sauce = $('input[name=sauceRadio]:checked').val();

  var values = [size, meats, veggies, cheese, crust, sauce];
  return values;
};

function calculateMeatVeggie(array) {
  if (array.length === 0) {
    return 0;
  } else {
    var cost = array.length -1;
    return cost;
  }
};
function calculateCheese() {
  if ($('input[name=cheeseRadio]:checked').val() === 'Extra Cheese') {
    var cost = 3;
    return cost;
  } else return 0;
};

function calculateCrust() {
  if ($('input[name=crustRadio]:checked').val() === 'Cheese Stuffed Crust') {
    var cost = 3;
    return cost;
  } else return 0;
};

function calculateSize(size) {
  if (size === "Personal") {
    return 6;
  } else if (size === "Medium") {
    return 10;
  } else if (size === "Large") {
    return 14;
  } else if (size === "X-Large") {
    return 16;
  }
};
