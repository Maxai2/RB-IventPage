class Client {
    constructor(name, email, address, mainImage, lat, long, openTime, closeTime, isParking, isWifi, isLiveMusic, isOpenSpace, isChildrenZone, additionalInfo) {
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
    }
}

function start() {
    document.getElementById("fPage").style.display = "none"

    document.getElementById("bPage").style.display = "block";
}

function cancel() {
    document.getElementById("fPage").style.display = "block"

    document.getElementById("bPage").style.display = "none";
}

function save() {
    var cl = new Client(document.getElementById("name").value, document.getElementById("email").value, document.getElementById("address").value, document.getElementById("mainImage").value, document.getElementById("lat").value, document.getElementById("long").value, document.getElementById("openTime").value, document.getElementById("closeTime").value, document.getElementById("isParking").value, document.getElementById("isWifi").value, document.getElementById("isLiveMusic").value, document.getElementById("isOpenSpace").value, document.getElementById("isChildrenZone").value, document.getElementById("additionalInfo").value);

    var str = JSON.stringify(cl);
    console.log(str);
}