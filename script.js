class Phone {
    constructor(number, isShow) {
        this.number = number;
        this.isShow = isShow;
    }
}

class Client {
    phones = [];
    cuisineIds = [];
    paymentTypeIds = [];
    clientTypeIds = [];
    mealTypeIds = [];
    socialLinks = [];

    constructor(name, email, address, mainImage, lat, long, openTime, closeTime, isParking, isWifi, isLiveMusic, isOpenSpace, isChildrenZone, isBusinessLunch, additionalInfo, maxReserveDays, phones, cuisineIds, paymentTypeIds, clientTypeIds, mealTypeIds, socialLinks) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.mainImage = mainImage;
        this.lat = lat;
        this.long = long;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.isParking = isParking;
        this.isWifi = isWifi;
        this.isOpenSpace = isOpenSpace;
        this.isChildrenZone = isChildrenZone;
        this.isBusinessLunch = isBusinessLunch;
        this.additionalInfo = additionalInfo;
        this.maxReserveDays = maxReserveDays;
        this.phones = phones;
        this.isLiveMusic = isLiveMusic;
        this.cuisineIds = cuisineIds;
        this.paymentTypeIds = paymentTypeIds;
        this.clientTypeIds = clientTypeIds;
        this.mealTypeIds = mealTypeIds;
        this.socialLinks = socialLinks;
    }
}

var countNumbers = 1;

var cuisinesArr = [
    "Fusion",
    "Author's",
    "Abkhazian",
    "Adyghe",
    "Austrian",
    "Azerbaijani",
    "American",
    "Asian",
    "English",
    "Arabian",
    "Assyrian",
    "Bavarian",
    "Belgian",
    "Brazilian",
    "Bulgarian",
    "Vegan",
    "Hungarian",
    "Eastern",
    "Hawaiian",
    "Greek",
    "Grill",
    "Georgian",
    "Danish",
    "Home",
    "Jewish",
    "European",
    "Jordanian",
    "Indian",
    "Iranian",
    "Irish",
    "Spanish",
    "Italian",
    "Caucasian",
    "Cossack",
    "Chinese",
    "Thai",
    "Kuban",
    "Korean",
    "Cuban",
    "Latin american",
    "Lebanese",
    "BBQ",
    "Mexican",
    "Sea and seafood",
    "German",
    "Ossetian",
    "Pan-asian",
    "Peruvian",
    "Russian",
    "Serbian",
    "Scandinavian",
    "Mixed",
    "Mediterranean",
    "Tajik",
    "Turkish",
    "Uzbek",
    "Fast food",
    "French",
    "Ukrainian",
    "Czech",
    "Japanese food"
];
var cuisinesDict = [];
var countCuisines = 1;

var paymentTypeArr = [
    "Cash",
    "Card",
    "Qr code"
];
var paymentTypeDict = [];
var countPaymentType = 1;

var restaurantTypeArr = [
    "Restaurant",
    "Cafe",
    "Dining room",
    "Snack bar",
    "Bar",
    "Buffet",
    "Cafeteria",
    "Fast food"
];
var restaurantTypeDict = [];
var countRestaurantType = 1;

var countSocialLink = 1;

var mealTypeArr = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Coffee & Tea",
    "Night Life",
    "Things to do"
];
var mealTypeDict = [];
var countMealType = 1;

var maxLat = Math.atan(Math.sinh(Math.PI)) * 180 / Math.PI;

var map;
var marker;

function scrollToForm() {
    var elem = document.getElementById("clForm");

    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

function placeMarkerAndPanTo(latLng, map) {
    marker.setMap(null);
    marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    
    document.getElementById('lat').value = latLng.lat();
    document.getElementById('long').value = latLng.lng();

    // console.log(latLng.lat(), latLng.lng());

    map.panTo(latLng);
}

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // console.log(latitude, longitude);

    document.getElementById('lat').value = latitude;
    document.getElementById('long').value = longitude;

    var center = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        zoom: 16,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // map.addMarker({
    //     lat: latitude,
    //     lng: longitude
    // });

    marker = new google.maps.Marker({
        position: center
    });

    marker.setMap(map);
    
    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });
}

function curLoc() {    
    initMap();
}

function errorHandler(err) {
    if(err.code == 1) {
        alert("Error: Access is denied!");
    } else if( err.code == 2) {
        alert("Error: Position is unavailable!");
    }
}

function initMap() {
    if(navigator.geolocation){
        // timeout at 60000 milliseconds (60 seconds)
        var options = {timeout:60000};
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
}

function correctText(text) {
    var newString = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    return newString;
}

var expCuis = false;
var expPayT = false;
var expResT = false;
var expMealT = false;

function showCheckboxes(id, sw) {
    var checkboxes = document.getElementById(id);

    switch(sw) {
        case 'cuis':
            checkboxes.style.display = !expCuis ? "block" : "none";
        
            expCuis = !expCuis;
            break;
        case 'payT':
            checkboxes.style.display = !expPayT ? "block" : "none";
        
            expPayT = !expPayT;
            break;
        case 'resT':
            checkboxes.style.display = !expResT ? "block" : "none";
        
            expResT = !expResT;
            break;
        case 'mealT':
            checkboxes.style.display = !expMealT ? "block" : "none";
        
            expMealT = !expMealT;
            break;
    }
}

var cuisString = [];
var paymentTypeString = [];
var restTypeString = [];
var mealTypeString = [];

function selBox(sel, arr, idForString, idForTitle) {
    sel.checked ? arr.push(sel.value) : arr.splice(arr.indexOf(sel.value), 1);
    
    var workStr = document.getElementById(idForString);
    var title = document.getElementById(idForTitle);
    title.text = "";
    workStr.text = "";
    
    for (var i = 0; i < arr.length; i++) {
        workStr.text += arr[i] + ";\xa0";
    }

    if (workStr.text == "") {
        workStr.text = "Select an option";
        title.removeAttribute('title');
    } else {   
        title.setAttribute('title', workStr.text);
    }
}

function fillCheboxes(cbId, sDict, dict, type) {

    var i = 0;
    var selCuis = document.getElementById(cbId);

    for (var key in sDict) {
        dict.push({
            key: key,
            value: correctText(sDict[key])
        });

        var inp = document.createElement('input');
        inp.setAttribute('type', 'checkbox');
        inp.setAttribute('id', dict[i].value);
        inp.setAttribute('value', dict[i].value);

        switch(type) {
            case 'cuis': 
                inp.setAttribute('onchange', "selBox(this, cuisString, 'cuisString',  'cuisTitle')");
                break;
            case 'payT':
                inp.setAttribute('onchange', "selBox(this, paymentTypeString, 'payTString', 'payTTitle')");
                break;
            case 'resT':
                inp.setAttribute('onchange', "selBox(this, restTypeString, 'resTString', 'resTTitle')");
                break;
            case 'mealT':
                inp.setAttribute('onchange', "selBox(this, mealTypeString, 'mealTString', 'mealTTitle')");
                break;
        }
        
        var lbl = document.createElement('label');
        lbl.setAttribute('for', dict[i].value);
        
        lbl.appendChild(inp);
        lbl.appendChild(document.createTextNode(dict[i++].value));
        lbl.setAttribute('class', 'noselect');

        selCuis.appendChild(lbl);
    }
}

function start() {

    fetch('https://rbwebapp.azurewebsites.net/api/parameter')
    .then(response => response.json())
    .then(arr => {
        var cui = arr["cuisines"];

        fillCheboxes('cuisCheckboxes', cui, cuisinesDict, 'cuis');

        var pay = arr["paymentTypes"];

        fillCheboxes('payTypeCheckboxes', pay, paymentTypeDict, 'payT');

        var res = arr["clientTypes"];

        fillCheboxes('resTypeCheckboxes', res, restaurantTypeDict, 'resT');
        
        var mea = arr["mealTypes"];

        fillCheboxes('mealTypeCheckboxes', mea, mealTypeDict, 'mealT');
    });
}

function showPic(input) {
    document.getElementById('imgViewId').style.display = "grid";

    document.getElementById('imageViewer').setAttribute("src", URL.createObjectURL(input.target.files[0]));

    var fileList = document.getElementById("mainImage").files;

    var fileReader = new FileReader();

    if (fileReader && fileList && fileList.length) {
       fileReader.readAsArrayBuffer(fileList[0]);
       fileReader.onload = function () {
          var imageData = fileReader.result;
          var binary = '';

            var bytes = new Uint8Array( imageData );
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode( bytes[ i ] );
            }
            
            document.getElementById('imageByteArr').value = window.btoa( binary );
       };
    }
}

function getKeyByVal(dict, val) {
    for (var key in dict) {
        if (dict[key].value == val) {
            return dict[key].key;
        }
    }
}

function save() {
    event.preventDefault();

    let form = document.forms["newClient"];

    var phones = [];

    for(var i = 0; i < countNumbers; i++) {
        phones.push(new Phone("+994" + form.elements["number" + (i + 1)].value, form.elements["isShow" + (i + 1)].checked));
    }

    var cuisineIds = [];
    for (var i = 0; i < cuisString.length; i++) {
        cuisineIds.push(getKeyByVal(cuisinesDict, cuisString[i]));
    }

    var paymentTypeIds = [];

    for (var i = 0; i < countPaymentType; i++) {
        paymentTypeIds.push(getKeyByVal(paymentTypeDict, paymentTypeString[i]));
    }

    var clientTypeIds = [];

    for (var i = 0; i < countRestaurantType; i++) {
        clientTypeIds.push(getKeyByVal(restaurantTypeDict, restTypeString[i]));
    }

    var mealTypeIds = [];

    for (var i = 0; i < countMealType; i++) {
        mealTypeIds.push(getKeyByVal(mealTypeDict, mealTypeString[i]));
    }

    var socialLinks = [];

    for (var i = 0; i < countSocialLink; i++) {
        socialLinks.push(form.elements["socLink" + (i + 1)].value);
    }

    var lmV;
    switch (form.elements["isLiveMusic"].value) {
        case "null":
            lmV = null;
            break;
        case "true":
            lmV = true;
            break;
        case "false":
            lmV = false;
            break;
    }

    var ot = form.elements["openTime"].value;
    var otf = parseInt(ot.substring(0, 2)) * 60 + parseInt(ot.substring(3));

    var ct = form.elements["closeTime"].value;
    var ctf = parseInt(ct.substring(0, 2)) * 60 + parseInt(ct.substring(3));

    var cl = new Client(form.elements["name"].value, form.elements["email"].value, form.elements["address"].value, form.elements["imageByteArr"].value, form.elements["lat"].value, form.elements["long"].value, otf, ctf, form.elements["isParking"].checked, form.elements["isWifi"].checked, lmV, form.elements["isOpenSpace"].checked, form.elements["isChildrenZone"].checked, 
    form.elements["isBusinessLunch"].checked, form.elements["additionalInfo"].value, form.elements["maxReserveDays"].value, phones, cuisineIds, paymentTypeIds, clientTypeIds, mealTypeIds, socialLinks);

    var str = JSON.stringify(cl);

    console.log(str);

    (async () => {
        const rawResponse = await fetch('https://rbwebapp.azurewebsites.net/api/request', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: str
        });
        const content = await rawResponse.status;
      
        console.log(content);

        if (content == 200) {
            alert('Your response was successfully sent!');

            setTimeout(() => {}, 5000);

            document.location.reload(true);
        } else {
            alert('Something went wrong!');
        }
    })();
}

function addNumber() {
    if (countNumbers == 4) {
        return;
    }

    var divCont = document.getElementById("idNumberContainer");
    
    var div = document.createElement('div');
    div.setAttribute('class', 'numberContainer');
    var divId = "divNum" + ++countNumbers;
    div.setAttribute('id', divId);
    
    var label = document.createElement('label');
    label.textContent = "+994";
    
    div.appendChild(label);
    
    var input = document.createElement('input');
    input.type = "text";
    var numIN = "number" + countNumbers;
    input.setAttribute('id', numIN);
    input.setAttribute('name', numIN);

    div.appendChild(input);

    var labelShow = document.createElement('label');
    labelShow.textContent = "Show for user: ";

    div.appendChild(labelShow);

    var inputShow = document.createElement('input');
    var showIN = "isShow" + countNumbers;
    inputShow.setAttribute('id', showIN);
    inputShow.setAttribute('name', showIN);
    inputShow.type = "checkbox";

    div.appendChild(inputShow);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countNumbers);
    buttonD.addEventListener("click", deleteNumber);
    buttonD.type = "button";

    div.appendChild(buttonD);

    divCont.appendChild(div);
}

function deleteNumber() {
    var divPar = document.getElementById("idNumberContainer");
    var div = document.getElementById("divNum" + this.getAttribute('id'));

    divPar.removeChild(div);
    countNumbers--;
}

function addSocLink() {
    if (countSocialLink == 4) {
        return;
    }

    var divSocLink = document.getElementById("idSocialLinksContainer");

    var div = document.createElement('div');
    var divId = "divSocLink" + ++countSocialLink;
    div.setAttribute('id', divId);
    div.setAttribute('class', 'typesContainer');

    var input = document.createElement('input');
    var inpIN = "socLink" + countSocialLink;
    input.setAttribute('id', inpIN);
    input.setAttribute('name', inpIN);
    input.type = "text";

    div.appendChild(input);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countSocialLink);
    buttonD.addEventListener("click", deleteSocLink);
    buttonD.type = "button";

    div.appendChild(buttonD);

    divSocLink.appendChild(div);
}

function deleteSocLink() {
    var divPar = document.getElementById("idSocialLinksContainer");
    var div = document.getElementById("divSocLink" + this.getAttribute('id'));

    divPar.removeChild(div);
    countSocialLink--;
}