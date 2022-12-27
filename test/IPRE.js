function getCookie(Name) {
	//document.cookie="radio_central=It works, woo-hoo!";
	cookies = document.cookie.split(';');
	for (i = 0; i < cookies.length; i++) {
		//document.write(cookies[i] + "<br />");
		isthere = cookies[i].indexOf(Name + "=");
		if (isthere != -1) {
			//document.write("Aha! I have found it! At " + cookies[i] + "<br />");
			right_number = i;
			cookie_u_want = cookies[right_number].split("=");
			cookie_content = cookie_u_want[1];
			return cookie_content;
		}
	}
}

class Cat {
constructor(name) {
this.name = name;
this.rating = 0;
}
}
settings = [];
settings[0] = 0;
settingstext = [];
settingstext[0] = "EXPLICIT_FILTER";
// 0 = explicit

if(parseInt(getCookie("EXPLICIT_FILTER")) > -1) {
settings[0] = parseFloat(getCookie("EXPLICIT_FILTER"));
}
else {
volume = 1;
document.cookie = "EXPLICIT_FILTER=" + '0; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}


if(parseInt(getCookie("VOLUME_LEVEL")) > -1) {
volume = parseFloat(getCookie("VOLUME_LEVEL"));
}
else {
volume = 1;
document.cookie = "VOLUME_LEVEL=" + '0; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}

currentID = -1
hasPlayed = 0;
a = 0;
while(channels[a]) {
channels[a].id = a;
if(parseInt(getCookie("S_" + a + "_IS_LIKED")) > -1) {
channels[a].liked = parseInt(getCookie("S_" + a + "_IS_LIKED"));
}
if(parseInt(getCookie("S_" + a + "_ORDER")) > -2) {
channels[a].order = parseInt(getCookie("S_" + a + "_ORDER"));
}
a = a + 1;
}
categoryList = []
a = 0;
b = 0;
while(channels[a]) {
while(channels[a].category.split(", ")[b]) {
categoryList.push(channels[a].category.split(", ")[b])
b = b + 1;
}
a = a + 1;
b = 0;
}

categoryList = Array.from(new Set(categoryList)).sort();

TopCatList = []
a = 0;
while(categoryList[a]) {
TopCatList.push(new Cat(categoryList[a]))
a = a + 1;
}

warningList = []
a = 0;
while(channels[a]) {
warningList.push(channels[a].warning)
a = a + 1;
}

warningList = Array.from(new Set(warningList)).sort();

warnFilter = [];
hideFilter = [];
a = 0;
while(a < warningList.length) {
if(parseInt(getCookie("FILTER_" + warningList[a])) > -1) {
hideFilter[a] = parseFloat(getCookie("FILTER_" + warningList[a]));
}
else {
warnFilter[a] = 0;
document.cookie = "FILTER_" + warningList[a] + "=" + '0; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
if(parseInt(getCookie("WARN_" + warningList[a])) > -1) {
//alert(getCookie("WARN_" + warningList[a]))
warnFilter[a] = parseFloat(getCookie("WARN_" + warningList[a]));
}
else {
hideFilter[a] = 0;
document.cookie = "WARN_" + warningList[a] + "=" + '0; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
a = a + 1;
}

//QUALITY CONTROL
a = 0;
while(a < warningList.length) {
if(warnFilter[a] == 1 && hideFilter[a] == 1) {
warnFilter[a] = 0;
document.cookie = "FILTER_" + warningList[a] + "=" + '0; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
hideFilter[a] = 0;
document.cookie = "WARN_" + warningList[a] + "=" + '0; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
a = a + 1;
}
//END QUALITY CONTROL

function getLikes() {
a = 0;
tempChans = [];
while(channels[a]) {
if(channels[a].liked == 1) {
tempChans.push(channels[a]);
}
a = a + 1;
}
return tempChans;
}

function catArray(cat) {
tempChans = []
a = 0;
while(channels[a]) {
b = 0;
while(channels[a] && channels[a].category.split(", ")[b]) {
if(channels[a].category.split(", ")[b] == cat && channels[a].status == "live") {
tempChans.push(channels[a]);
b = b + 1;
}
else {
b = b + 1;
}
}
a = a + 1;
}
return Array.from(new Set(tempChans))
//return tempChans;
}

function searchResults(q) {
q = q.toLowerCase()
tempChans = []
a = 0;
while(channels[a]) {
if(channels[a].description.toLowerCase().includes(q) || channels[a].name.toLowerCase().includes(q) || channels[a].name.toLowerCase() == q || channels[a].description.toLowerCase() == q || channels[a].category.toLowerCase().includes(q) || channels[a].category.toLowerCase() == q) {
tempChans.push(channels[a])
}
a = a + 1;
}
return tempChans;
}

function addRating() {
z = 0;
while(channels[z]) {
if(parseInt(getCookie("STATION_" + z + "_RATING")) > -1) {
channels[z].rating = parseInt(getCookie("STATION_" + z + "_RATING"));
}
else {
channels[z].rating = 0;
}
z = z + 1;
}
myString = "STATION_" + currentID + "_RATING"
if(document.getElementsByTagName("audio")[0].paused == false) {
if(parseInt(getCookie(myString)) > -1) {
newRating = parseInt(getCookie(myString)) + 1;
document.cookie = myString + "=" + newRating + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
else {
document.cookie = myString + "=0" + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
}
console.log(getCookie(myString));
}
function clearAllRatings() {
z = 0;
while(channels[z]) {
document.cookie = "STATION_" + z + "_RATING=0" + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
channels[z].rating = 0;
z = z + 1;
}
}
addRating();

tc2 = byRating2(channels);
function TopChan() {
return tc2;
//return topchannels;
}

function byRating2(chanlist) {
chanlist2 = chanlist
return chanlist2.slice().sort((a, b) => a.rating < b.rating ? 1 : -1);
}

topchannels = [];

topchannels = byRating2(channels);

a = 0;
while(TopCatList[a]) {
//console.log(TopCatList[a])
b = 0;
while(TopChan()[b]) {
c = 0;
//console.log(TopChan()[b])
while(TopChan()[b].category.split(", ")[c]) {
if(TopCatList[a].name == TopChan()[b].category.split(", ")[c]) {
//console.log(TopCatList[a].name);
//console.log(TopChan()[b].name);
TopCatList[a].rating = TopCatList[a].rating + TopChan()[b].rating
//console.log(TopCatList[a].rating);

}
c = c + 1;
}
b = b + 1;
}
a = a + 1;
}

TopCatList = byRating2(TopCatList);

function GetSug() {
disChan = [];
a = 0;
d = 0;
while(TopCatList[a] && a < 5) {
b = 0;
while(channels[b]) {
c = 0;
while(channels[b].category.split(", ")[c]) {
if(channels[b].category.split(", ")[c] == TopCatList[a].name && channels[b].id >= d) {
disChan.push(channels[b]);
d = channels[b].id + 1;
}
c = c + 1;
}
b = b + 1;
}
a = a + 1;
}
disChan = disChan.slice().sort((a, b) => 0.5 - Math.random())
console.log(disChan[0]);
//disChan.sort((a, b) => (a.id > b.id) ? 1 : -1).reverse()
disChan = byRating2(disChan).reverse();

return disChan;
}

function retry() {
playPause();
playPause();
hideMessage();
}

// This code also shouldn't be part of IPRE

//

function warnState(a) {
if(hideFilter[a] == 0 && warnFilter[a] == 0) {
return "Off";
}
if(hideFilter[a] == 1 && warnFilter[a] == 0) {
return "Hide";
}
if(hideFilter[a] == 0 && warnFilter[a] == 1) {
return "Warn";
}
return "Off";
}

//Interface code

//
function Like(a) {
if(channels[a].liked == 0) {
channels[a].liked = 1;
document.cookie = "S_" + a + "_IS_LIKED=1; expires=Tue, 19 Jan 2038 04:14:07 GMT";

}
else {
channels[a].liked = 0;
document.cookie = "S_" + a + "_IS_LIKED=0; expires=Tue, 19 Jan 2038 04:14:07 GMT";
}
}

//Interface code 2

//
function openLink(url) {
window.open(url, '_blank')
}

//Interface code 3

//

setInterval(addRating, 1000);

function getWarnID(q) {
console.log("WARNID");
console.log(q);
console.log(warningList[b]);
b = 0;
while(b < warningList.length) {
if(warningList[b] == q) {
console.log(b);
return b;
}
b = b + 1;
}
}
