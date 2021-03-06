     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
		 return str.split('').reverse().join('');
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         return Math.min.apply(null, values);
      }


     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinct(values) {
         // FILL THIS IN
		  var tmp = [];
     for(var i = 0; i < values.length; i++){
        if(tmp.indexOf(values[i]) == -1){
        tmp.push(values[i]);
        }
    }
    return tmp;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
		 var result = "";
       for (var i = 1; i < 100; i = i + 1) {
         console.log(result);

    if ((i % 3 === 0) && (i % 5 === 0)) {
        result += "fizzbuzz";
    }
    else if (i % 3 === 0) {
        result += "fizz";
    }
    else if (i % 5 === 0) {
        result += "buzz";
    }
    else {
        result += i;
    }
    }  console.log(result);
    }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
		  var  newF= [],fruitsToRemove = {};
  
  for (var i = fruitsToRemove.length - 1; i >= 0; i--) {
    fruitsToRemove[fruitsToRemove [i]] = 1;
  }
  for (var i = -1; ++i < fruits.length;) {
    var fruit = fruits [i];
    if (!fruitsToRemove[fruit]) newF.push (fruit);
  }
  return newF;
}

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         if (typeof toPush === 'object') {
             array.push.apply(array, toPush);
         } else {
             array.push(toPush);
         }

         return array;
      }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
		 
  if (sourceStr == '') {
    return [];
  } else {
    return sourceStr.split (',');
  }
}

    
     // Write a function that will take any number of arguments and return their sum
   function abc(){
  var total = 0;
  for( var i = 0; i < arguments.length; i++) {
     total += arguments[i];
  }
  return total;
}

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
	return sourceStr.search (/\S/) == -1;

     }
	 
// write an example of a javascript closure
	 function sampleclosure(){
     	var str1 = 'hello world, ';
     	
     	function b(){
     		var str2 = str1 + 'welcome!';
     		return str2;
     	}
     	
     	return b();
     }
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
	 function sample_json(){
	 var human = {
    "person":[ 
        {
            "firstName": "John",
            "lastName": "Doe",
            "city": "sanjose",
            "state": "california",
            "Zip": 94086,
            "phoneNumbers": {
                "work": 510456789,
                "home": 510456789,
                "mobile": 510456789
            }
        },
        {
            "firstName": "mark",
            "lastName": "Doe",
            "city": "fremont",
            "state": "ohio",
            "Zip": 40586,
            "phoneNumbers": {
                "work": 5104567897,
                "home": 7896541236,
                "mobile": 321456987
            }
        },
		{
            "firstName": "simo",
            "lastName": "Doe",
            "city": "colombus",
            "state": "ohio",
            "Zip": 50586,
            "phoneNumbers": {
                "work": 5104567897,
                "home": 7896541236,
                "mobile": 321456987
            }
        }
      ]
	 };
	 return human;
	 }

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
	 function Dtable() {
         var cols = [],
             rows = [];

         return {
             addColumns: function(){
                 pushOntoArray(cols, arguments);
             },
             addRow: function(){
                 var array = {};

                 for (var i = 0; i < cols.length; i++) {
                     if (arguments[i]) {
                         array[cols[i]] = arguments[i];
                     }
                 }

                 rows.push(array);
             },
             getData: function(){
                 var array = {};

                 for (var i = 0; i < rows.length; i++) {
                     array[i] = rows[i];
                 }

                 return array;
             }
         }
     }

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	       /* <!DOCTYPE html>
<html>
<body>

Select your favorite fruit:
<select id="mySelect">
  <option value="v_item1">Apple</option>
  <option value="v_item2">Orange</option>
  <option value="v_item3">Pineapple</option>
  <option value="v_item4">Banana</option>
</select>

<p>Click the button to return the value of the selected fruit.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>*/
function myFunction() {
var select = document.getElementById("mySelect");
 var selectedString = select.options[select.selectedIndex].text;
    console.log(selectedString);
    var x = document.getElementById("mySelect").selectedIndex;
     console.log(document.getElementsByTagName("option")[x].value);
    
}
/*</script>

</body>
</html>*/

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	 $("a#myelement");//a tags with id 
	   $("a.myclass");// a tags with class
	   $('a.first') // a tags with class first.
	   $('a:eq(0)')//a tags by index 
       $('a[name^="H"]') // a tags title starting with H

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	     /*<html>
<head>
<title>Script Test</title>
</head>
<body>
    <ul id="list1"></ul>
</body>
<script>*/
    function additems () {
         var a = [];
            var output = '';
    for (var i = 1; i <= 5; i++) {
             a.push('Element#' + i);
         }
     a.forEach(function (value) {
             output += '<li>' + value + '</li>';
         });

         $('#list1').html(output);
     }
/*</script>
</html>*/

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	 /* <html>
<body>
<div id="foobar">
<form name="myform">

<input type="checkbox" name="check_list" value="1">item1<br>
<input type="checkbox" name="check_list" value="2">item2<br>
<input type="checkbox" name="check_list" value="3">item3<br>
<input type="checkbox" name="check_list" value="4">item4<br>
<input type="checkbox" name="check_list" value="5">item5<br>

<a href="#"><input type="button" name="Check_All" value="Check All"
onClick="CheckAll(document.myform.check_list)"></a>
<a href="#"><input type="button" name="Un_CheckAll" value="Uncheck All"
onClick="UnCheckAll(document.myform.check_list)"></a>
<br>
</form>
</div>
<script>*/
function CheckAll(chk)
{
for (i = 0; i < chk.length; i++)
	chk[i].checked = true ;
//document.myform.CheckAll.value="uncheck all";
}

function UnCheckAll(chk)
{
for (i = 0; i < chk.length; i++)
	chk[i].checked = false ;
}
/*</script>
</body>
</html>*/
