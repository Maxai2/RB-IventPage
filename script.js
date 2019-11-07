class Number {
    constructor(type, number) {
        this.type = type;
        this.number = number;
    }
}

class Client {
    numbers = [];
    cuisines = [];
    paymentTypes = [];
    restaurantTypes = [];

    constructor(name, email, address, mainImage, lat, long, openTime, closeTime, isParking, isWifi, isLiveMusic, isOpenSpace, isChildrenZone, additionalInfo, maxReserveDay, numbers, cuisines, paymentTypes, restaurantTypes) {
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
        this.isLiveMusic = isLiveMusic;
        this.isOpenSpace = isOpenSpace;
        this.isChildrenZone = isChildrenZone;
        this.additionalInfo = additionalInfo;
        this.maxReserveDay = maxReserveDay;
        this.numbers = numbers;
        this.cuisines = cuisines;
        this.paymentTypes = paymentTypes;
        this.restaurantTypes = restaurantTypes;
    }
}

var numberTypeArr = [
    "Mobile",
    "Work"
];
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

function start() {
    document.getElementById("fPage").style.display = "none"

    document.getElementById("bPage").style.display = "block";

    var selNum = document.getElementById("selNum1");

    for (var i = 0; i < numberTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = numberTypeArr[i];

        selNum.appendChild(opt);
    }

    var selCuis = document.getElementById("selCuis1");

    for (var i = 0; i < cuisinesArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = cuisinesArr[i];

        selCuis.appendChild(opt);
    }

    var selPayT = document.getElementById("selPayT1");

    for (var i = 0; i < paymentTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = paymentTypeArr[i];

        selPayT.appendChild(opt);
    }

    var selRestT = document.getElementById("selRestT1");

    for (var i = 0; i < restaurantTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = restaurantTypeArr[i];

        selRestT.appendChild(opt);
    }
}

function cancel() {
    document.getElementById("fPage").style.display = "block"

    document.getElementById("bPage").style.display = "none";
}

function save() {
    var numbers = [];

    for(var i = 0; i < countNumbers; i++) {
        numbers.push(new Number(document.getElementById("selNum" + (i + 1)).selectedIndex, document.getElementById("number" + (i + 1)).value));
    }

    var cuisines = [];

    for (var i = 0; i < countCuisines; i++) {
        cuisines.push(document.getElementById("selCuis" + (i + 1)).selectedIndex);
    }

    var paymentTypes = [];

    for (var i = 0; i < countPaymentType; i++) {
        paymentTypes.push(document.getElementById("selPayT" + (i + 1)).selectedIndex);
    }

    var restaurantTypes = [];

    for (var i = 0; i < countRestaurantType; i++) {
        restaurantTypes.push(document.getElementById("selRestT" + (i + 1)).selectedIndex);
    }

    var cl = new Client(document.getElementById("name").value, document.getElementById("email").value, document.getElementById("address").value, document.getElementById("mainImage").value, document.getElementById("lat").value, document.getElementById("long").value, document.getElementById("openTime").value, document.getElementById("closeTime").value, document.getElementById("isParking").checked, document.getElementById("isWifi").checked, document.getElementById("isLiveMusic").checked, document.getElementById("isOpenSpace").checked, document.getElementById("isChildrenZone").checked, document.getElementById("additionalInfo").value, document.getElementById("maxReserveDay").value, numbers, cuisines, paymentTypes, restaurantTypes);

    var str = JSON.stringify(cl);
    console.log(str);
}

function addNumber() {
    var divCont = document.getElementById("idNumberContainer");
    
    var div = document.createElement('div');
    div.setAttribute('class', 'numberContainer');
    var divId = "divNum" + ++countNumbers;
    div.setAttribute('id', divId);
    
    var select = document.createElement('select');
    var sel = "selNum" + countNumbers;
    select.setAttribute('id', sel);
    
    for (var i = 0; i < numberTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = numberTypeArr[i];

        select.appendChild(opt);
    }
    
    div.appendChild(select);
    
    var input = document.createElement('input');
    input.type = "text";
    var num = "number" + countNumbers;
    input.setAttribute('id', num);

    div.appendChild(input);

    var buttonA = document.createElement('button');
    buttonA.innerHTML = "+";
    buttonA.addEventListener("click", addNumber);

    div.appendChild(buttonA);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countNumbers);
    buttonD.addEventListener("click", deleteNumber);

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

    var select = document.createElement('select');
    var sel = "selCuis" + countCuisines;
    select.setAttribute('id', sel);

    for (var i = 0; i < cuisinesArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = cuisinesArr[i];

        select.appendChild(opt);
    }

    div.appendChild(select);

    var buttonA = document.createElement('button');
    buttonA.innerHTML = "+";
    buttonA.addEventListener("click", addCuisine);

    div.appendChild(buttonA);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countCuisines);
    buttonD.addEventListener("click", deleteCuisine);

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

    var select = document.createElement('select');
    var sel = "selPayT" + countPaymentType;
    select.setAttribute('id', sel);

    for (var i = 0; i < paymentTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = paymentTypeArr[i];

        select.appendChild(opt);
    }

    div.appendChild(select);

    var buttonA = document.createElement('button');
    buttonA.innerHTML = "+";
    buttonA.addEventListener("click", addPaymentType);

    div.appendChild(buttonA);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countPaymentType);
    buttonD.addEventListener("click", deletePaymentType);

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

    var select = document.createElement('select');
    var sel = "selRestT" + countRestaurantType;
    select.setAttribute('id', sel);

    for (var i = 0; i < restaurantTypeArr.length; i++) {
        var opt = document.createElement('option');
        opt.text = restaurantTypeArr[i];

        select.appendChild(opt);
    }

    div.appendChild(select);

    var buttonA = document.createElement('button');
    buttonA.innerHTML = "+";
    buttonA.addEventListener("click", addRestaurantType);

    div.appendChild(buttonA);

    var buttonD = document.createElement('button');
    buttonD.innerHTML = "-";
    buttonD.setAttribute('id', countRestaurantType);
    buttonD.addEventListener("click", deleteRestaurantType);

    div.appendChild(buttonD);

    divRestT.appendChild(div);
}

function deleteRestaurantType() {
    var divPar = document.getElementById("idRestaurantTypeContainer");
    var div = document.getElementById("divRestT" + this.getAttribute('id'));

    divPar.removeChild(div);
    countRestaurantType--;
}