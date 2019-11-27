class Phone {
    constructor(number, isShow) {
        this.number = number;
        this.isShow = isShow;
    }
}

class Client {
    phones = [];
    cuisinesIds = [];
    paymentTypeIds = [];
    clientTypeIds = [];
    mealTypeIds = [];
    socialLinks = [];

    constructor(name, email, address, mainImage, lat, long, openTime, closeTime, isParking, isWifi, isLiveMusic, isOpenSpace, isChildrenZone, isBusinessLunch, additionalInfo, maxReserveDay, phones, cuisinesIds, paymentTypeIds, clientTypeIds, mealTypeIds, socialLinks) {
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
        this.maxReserveDay = maxReserveDay;
        this.phones = phones;
        this.isLiveMusic = isLiveMusic;
        this.cuisinesIds = cuisinesIds;
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
var countCuisines = 1;

var paymentTypeArr = [
    "Cash",
    "Card",
    "Qr code"
];
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
var countMealType = 1;

// var maxLat = Math.atan(Math.sinh(Math.PI)) * 180 / Math.PI;

// var map = 0;

function scrollToForm() {
    var elem = document.getElementById("clForm");

    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function start() {

    // document.getElementById("fPage").style.display = "none"

    // document.getElementById("bPage").style.display = "block";

    // var center = new google.maps.LatLng(0, 0);

    // var mapOptions = {
    //     zoom: 3,
    //     center: center,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    // map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var selCuis = document.getElementById("selCuis1");

    selCuis.options.length = 0;

    for (var i = 0; i < cuisinesArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = cuisinesArr[i];

        selCuis.appendChild(opt);
    }

    var selPayT = document.getElementById("selPayT1");

    selPayT.options.length = 0;

    for (var i = 0; i < paymentTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = paymentTypeArr[i];

        selPayT.appendChild(opt);
    }

    var selRestT = document.getElementById("selRestT1");

    selRestT.options.length = 0;

    for (var i = 0; i < restaurantTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = restaurantTypeArr[i];

        selRestT.appendChild(opt);
    }

    var selMealT = document.getElementById("selMealT1");

    selMealT.options.length = 0;

    for (var i = 0; i < mealTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = mealTypeArr[i];

        selMealT.appendChild(opt);
    }
}

function showPic(img) {
    document.getElementById('imgViewId').style.display = "grid";

    var src = img.files[0].name;

    // var i = new Image();

    // i.src = src;

    // console.log(getBase64Image(i));
    document.getElementById('imageViewer').setAttribute('src', src);
}

function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

// function cancel() {
//     document.getElementById("fPage").style.display = "block"

//     document.getElementById("bPage").style.display = "none";
// }

function save() {
    event.preventDefault();

    let form = document.getElementById("bPage");

    var phones = [];
    
    for(var i = 0; i < countNumbers; i++) {
        phones.push(new Phone("+994" + form.elements["number" + (i + 1)].value, form.elements["isShow" + (i + 1)].checked));
    }

    // for(var i = 0; i < countNumbers; i++) {
    //     phones.push(new Phone("+994" + document.getElementById("number" + (i + 1)).value, document.getElementById("isShow" + (i + 1)).checked));
    // }

    var cuisinesIds = [];

    for (var i = 0; i < countCuisines; i++) {
        cuisinesIds.push(form.elements["selCuis" + (i + 1)].selectedIndex);
    }

    // for (var i = 0; i < countCuisines; i++) {
    //     cuisinesIds.push(document.getElementById("selCuis" + (i + 1)).selectedIndex);
    // }

    var paymentTypeIds = [];

    for (var i = 0; i < countPaymentType; i++) {
        paymentTypeIds.push(form.elements["selPayT" + (i + 1)].selectedIndex);
    }

    // for (var i = 0; i < countPaymentType; i++) {
    //     paymentTypeIds.push(document.getElementById("selPayT" + (i + 1)).selectedIndex);
    // }

    var clientTypeIds = [];

    for (var i = 0; i < countRestaurantType; i++) {
        clientTypeIds.push(form.elements["selRestT" + (i + 1)].selectedIndex);
    }

    // for (var i = 0; i < countRestaurantType; i++) {
    //     clientTypeIds.push(document.getElementById("selRestT" + (i + 1)).selectedIndex);
    // }

    var mealTypeIds = [];

    for (var i = 0; i < countMealType; i++) {
        mealTypeIds.push(form.elements["selMealT" + (i + 1)].selectedIndex);
    }

    // for (var i = 0; i < countMealType; i++) {
    //     mealTypeIds.push(document.getElementById("selMealT" + (i + 1)).selectedIndex);
    // }

    var socialLinks = [];

    for (var i = 0; i < countSocialLink; i++) {
        socialLinks.push(form.elements["socLink" + (i + 1)].value);
    }

    // for (var i = 0; i < countSocialLink; i++) {
    //     socialLinks.push(document.getElementById("socLink" + (i + 1)).value);
    // }

    var cl = new Client(form.elements["name"].value, form.elements["email"].value, form.elements["address"].value, form.elements["mainImage"].value, form.elements["lat"].value, form.elements["long"].value, form.elements["openTime"].value, form.elements["closeTime"].value, form.elements["isParking"].checked, form.elements["isWifi"].checked, form.elements["isLiveMusic"].value, form.elements["isOpenSpace"].checked, form.elements["isChildrenZone"].checked, 
    form.elements["isBusinessLunch"].checked, form.elements["additionalInfo"].value, form.elements["maxReserveDay"].value, phones, cuisinesIds, paymentTypeIds, clientTypeIds, mealTypeIds, socialLinks);

    var str = JSON.stringify(cl);
    console.log(str);
}

function addNumber() {
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

function addCuisine() {
    var divCuis = document.getElementById("idCuisineContainer");

    var div = document.createElement('div');
    var divId = "divCuis" + ++countCuisines;
    div.setAttribute('id', divId);
    div.setAttribute('class', 'typesContainer');

    var select = document.createElement('select');
    var selIN = "selCuis" + countCuisines;
    select.setAttribute('id', selIN);
    select.setAttribute('name', selIN);

    for (var i = 0; i < cuisinesArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = cuisinesArr[i];

        select.appendChild(opt);
    }

    div.appendChild(select);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countCuisines);
    buttonD.addEventListener("click", deleteCuisine);
    buttonD.type = "button";

    div.appendChild(buttonD);

    divCuis.appendChild(div);
}

function deleteCuisine() {
    var divPar = document.getElementById("idCuisineContainer");
    var div = document.getElementById("divCuis" + this.getAttribute('id'));

    divPar.removeChild(div);
    countCuisines--;
}

function addPaymentType() {
    var divPayType = document.getElementById("idPaymentTypeContainer");

    var div = document.createElement('div');
    var divId = "divPayT" + ++countPaymentType;
    div.setAttribute('id', divId);
    div.setAttribute('class', 'typesContainer');

    var select = document.createElement('select');
    var selIN = "selPayT" + countPaymentType;
    select.setAttribute('id', selIN);
    select.setAttribute('name', selIN);

    for (var i = 0; i < paymentTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = paymentTypeArr[i];

        select.appendChild(opt);
    }

    div.appendChild(select);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countPaymentType);
    buttonD.addEventListener("click", deletePaymentType);
    buttonD.type = "button";

    div.appendChild(buttonD);

    divPayType.appendChild(div);
}

function deletePaymentType() {
    var divPar = document.getElementById("idPaymentTypeContainer");
    var div = document.getElementById("divPayT" + this.getAttribute('id'));

    divPar.removeChild(div);
    countPaymentType--;
}

function addRestaurantType() {
    var divRestT = document.getElementById("idRestaurantTypeContainer");

    var div = document.createElement('div');
    var divId = "divRestT" + ++countRestaurantType;
    div.setAttribute('id', divId);
    div.setAttribute('class', 'typesContainer');

    var select = document.createElement('select');
    var selIN = "selRestT" + countRestaurantType;
    select.setAttribute('id', selIN);
    select.setAttribute('name', selIN);

    for (var i = 0; i < restaurantTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = restaurantTypeArr[i];

        select.appendChild(opt);
    }

    div.appendChild(select);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countRestaurantType);
    buttonD.addEventListener("click", deleteRestaurantType);
    buttonD.type = "button";

    div.appendChild(buttonD);

    divRestT.appendChild(div);
}

function deleteRestaurantType() {
    var divPar = document.getElementById("idRestaurantTypeContainer");
    var div = document.getElementById("divRestT" + this.getAttribute('id'));

    divPar.removeChild(div);
    countRestaurantType--;
}

function addSocLink() {
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

function addMealType() {
    var divMealT = document.getElementById("idMealTypeContainer");

    var div = document.createElement('div');
    var divId = "divMealT" + ++countMealType;
    div.setAttribute('id', divId);
    div.setAttribute('class', 'typesContainer');

    var sel = document.createElement('select');
    var selIN = "selMealT" + countMealType;
    sel.setAttribute('id', selIN);
    sel.setAttribute('name', selIN);

    for (var i = 0; i < mealTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = mealTypeArr[i];

        sel.appendChild(opt);
    }

    div.appendChild(sel);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countMealType);
    buttonD.addEventListener("click", deleteMealType);
    buttonD.type = "button";

    div.appendChild(buttonD);

    divMealT.appendChild(div);
}

function deleteMealType() {
    var divPar = document.getElementById("idMealTypeContainer");
    var div = document.getElementById("divMealT" + this.getAttribute('id'));

    divPar.removeChild(div);
    countMealType--;
}

// function findByCoord() {
//     // Get lat and lng values from input fields
//     var lat = document.getElementById('lat').value;
//     var lng = document.getElementById('long').value;

//     // Validate user input as numbers
//     lat = (!isNumber(lat) ? 0 : lat);
//     lng = (!isNumber(lng) ? 0 : lng);

//     // Validate user input as valid lat/lng values
//     lat = latRange(lat);
//     lng = lngRange(lng);

//     // Replace input values
//     document.getElementById('lat').value = lat;
//     document.getElementById('lng').value = lng;

//     // Create LatLng object
//     var mapCenter = new google.maps.LatLng(lat, lng);
    
//     new google.maps.Marker({
//         position: mapCenter,
//         title: 'Marker title',
//         map: map
//     });

//     // Center map
//     map.setCenter(mapCenter);
// }

// function isNumber(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }

// function latRange(n) {
//     return Math.min(Math.max(parseInt(n), -maxLat), maxLat);
// }

// function lngRange(n) {
//     return Math.min(Math.max(parseInt(n), -180), 180);
// }