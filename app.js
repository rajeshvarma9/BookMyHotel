$(document).ready(function() {
  
    $.getJSON("data/hotels.json", function(hotels){
      var photoHTML = '';
        $.each(hotels,function(i,hotel) {
          photoHTML += '<div class="myClass">' + '<div class="photo slide">' + '<img src="' + hotel.image + '">' + '<div class="photo-overlay">' + '<h3>' + hotel.a9 + '</h3>' + '<p>' + hotel.a10 + '</p>' + '</div></div>';
          photoHTML += '<h5 style="margin-top:3%;">Room Amenities</h5>' + '<ul style="font-size:80%;">' + '<li><h6>' + hotel.a1 + '</h6></li>' + '<li><h6>' + hotel.a2 + '</h6></li>' + '<li><h6>' + hotel.a3 + '</h6></li>' +
          '<li><h6>' + hotel.a4 + '</h6></li>' + '<li><h6>' + hotel.a5 + '</h6></li>' + '<li><h6>' + hotel.a6 + '</h6></li>' + '<li><h6>&#8377 ' + hotel.a7 + '</h6></li></ul>' + '<button id="'+ hotel.a8 + '"' + ' style="width:25%; padding:2% 0%; background-color:#f26722; color:white";>Book Now</button>' + '</div>';
        }); // end each
      $('#myDiv').html(photoHTML);
        $.each(hotels,function(i,hotel) {
      	     document.getElementById(hotels[i].a8).onclick = function(){
      	     document.getElementById("id01").style.display= "block";
      	    };
        }); // end each
    }); // end getJSON
}); // end ready