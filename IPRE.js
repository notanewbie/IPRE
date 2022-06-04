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

document.title = site.name;
document.getElementsByTagName("navbutton")[0].getElementsByTagName("img")[0].src = site.logo
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[0].src = site.homeimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[1].src = site.exploreimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[2].src = site.heartimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[3].src = site.searchimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[4].src = site.npimg
document.body.getElementsByTagName("link")[0].href=site.logo

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
TopCatList =[]
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

categoryList = new Set(categoryList);
categoryList = Array.from(categoryList).sort();

a = 0;
while(categoryList[a]) {
TopCatList.push(new Cat(categoryList[a]))
a = a + 1;
}

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
return tempChans;
}

function searchResults(q) {
q = q.toLowerCase()
tempChans = []
a = 0;
while(channels[a]) {
if(channels[a].description.toLowerCase().includes(q)) {
tempChans.push(channels[a])
}
else {
if(channels[a].name.toLowerCase().includes(q)) {
tempChans.push(channels[a])
}
else {
if(channels[a].name.toLowerCase() == q) {
tempChans.push(channels[a])
}
else {
if(channels[a].description.toLowerCase() == q) {
tempChans.push(channels[a])
}
else {
if(channels[a].category.toLowerCase().includes(q)) {
tempChans.push(channels[a])
}
else {
if(channels[a].category.toLowerCase() == q) {
tempChans.push(channels[a])
}
}
}
}
}
}
a = a + 1;
}
return tempChans;
}

function checkMessages() {
if(Date.parse(startup.date) > Date.parse(new Date())) {
showMessage(startup.img, startup.header, startup.message, startup.button_text, startup.button_action)
count = 0;
count = parseInt(getCookie("RADIO_MESSAGE_COUNT"));
}
else {
count = 0;
if(parseInt(getCookie("RADIO_MESSAGE_COUNT")) == -1) {
count = parseInt(getCookie("RADIO_MESSAGE_COUNT"))
}
else {
count = parseInt(getCookie("RADIO_MESSAGE_COUNT")) - 1;
}
if(parseInt(getCookie("RADIO_MESSAGE_COUNT")) >= -1 || parseInt(getCookie("RADIO_MESSAGE_COUNT")) < -1) {
if(parseInt(getCookie("RADIO_MESSAGE_COUNT")) != 0) {
showMessage(startup.img, startup.header, startup.message, startup.button_text, startup.button_action)
document.cookie = "RADIO_MESSAGE_COUNT=" + count + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
}
else {
document.cookie = "RADIO_MESSAGE_COUNT=" + startup.x + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
checkMessages();
}
}
}
function resetMessages() {
document.cookie = "RADIO_MESSAGE_COUNT=" + startup.x + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}
checkMessages();
//resetMessages();
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


topchannels = [];

function TopChan0() {
TOP = [];
//alert("TopChan");
v = 0;
a = 0;
maxval = 0;
while(channels[a]) {
console.log(channels[a].rating)
if(channels[a].rating > maxval) {
maxval = channels[a].rating;
}
a = a + 1;
}
a = 0;
v = maxval;
while(v >= 0) {
if(channels[a].rating == v) {
TOP.push(channels[a])
console.log("Added " + channels[a].name);
}
if(channels[a + 1]) {
a = a + 1;
}
else {
a = 0;
v = v - 1;
}
}
if(TOP[0]) {
topchannels = TOP;
}
else {
topchannels = channels;
}
}

TopChan0();

function TopChan() {
return topchannels;
}

function byRating(chanlist) {
TOP = [];
//alert("TopChan");
v = 0;
a = 0;
maxval = 0;
while(chanlist[a]) {
console.log(chanlist[a].rating)
if(chanlist[a].rating > maxval) {
maxval = chanlist[a].rating;
}
a = a + 1;
}
a = 0;
v = maxval;
while(v >= 0) {
if(chanlist[a].rating == v) {
TOP.push(chanlist[a])
console.log("Added " + chanlist[a].name);
}
if(chanlist[a + 1]) {
a = a + 1;
}
else {
a = 0;
v = v - 1;
}
}
return TOP;

}

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

TopCatList.sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse()

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

disChan.sort((a, b) => (a.id > b.id) ? 1 : -1).reverse()
disChan.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
//disChan.sort((a, b) => (a.rating > b.rating) ? 1 : -1).reverse()

return disChan;
}

function retry() {
playPause();
playPause();
hideMessage();
}
function showMenu() {
document.getElementsByTagName("navmenu")[0].id="visible"
//document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:hideMenu()";
}
function hideMenu() {
document.getElementsByTagName("navmenu")[0].id=""
//document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:showMenu()";
}
//showMenu();
function clearChanList() {
document.getElementsByTagName("topchan")[0].innerHTML = "";
}
function addShow(name, img, url) {
if(currentID == searchResults(name)[0].id) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:showNP()"><chantab><img src="' + img + '"></img><chantext>' + name + '</chantext></chantab></a>';
}
else {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:playChan2(' + searchResults(name)[0].id + ')"><chantab><img src="' + img + '"></img><chantext>' + name + '</chantext></chantab></a>';
}
}
function addCat(label) {
linkstring = 'javascript:showCategory("' + label + '")';
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<chanhead><a href=' + "'" + linkstring + "'>" + label + '</a></chanhead>'
}
function addHead(label) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<chanhead>' + label + '</chanhead>'
}
function playPause() {
hasPlayed = 1;
document.getElementsByTagName("navcenter")[0].getElementsByTagName("a")[4].href = "javascript:showNP()";
if(document.getElementsByTagName("audio")[0].paused) {
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
document.getElementsByTagName("audio")[0].play();
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[1].src = site.stopimg;
}
else {
document.getElementsByTagName("audio")[0].pause();
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[1].src = site.playimg;
}
}

function checkLike() {
if(channels[currentID].liked == 0) {
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[2].src = site.heartimg;
}
else {
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[2].src = site.heartaltimg;
}
}

function setLike(a) {
Like(a)
checkLike()
}

function showPlay() {
document.getElementsByTagName("npbg")[0].id = "visible";
document.getElementsByTagName("npimg")[0].id = "visible";
document.getElementsByTagName("nptitle")[0].id = "visible";
document.getElementsByTagName("npc")[0].id = "visible";
}
function hidePlay() {
document.getElementsByTagName("npbg")[0].id = "";
document.getElementsByTagName("npimg")[0].id = "";
document.getElementsByTagName("nptitle")[0].id = "";
document.getElementsByTagName("npc")[0].id = "";
}
function showBrowse() {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Browse");
z = 0;
while(z < 20 && z < TopChan().length) {
if(TopChan()[z].status == "live") {
addShow(TopChan()[z].name, TopChan()[z].img, TopChan()[z].url)
}
z = z + 1
}
hideMenu();
hidePlay();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function showRecc() {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Discover");
z = 0;
while(z < 20 && z < GetSug().length) {
if(GetSug()[z].status == "live") {
addShow(GetSug()[z].name, GetSug()[z].img, GetSug()[z].url)
}
z = z + 1
}
hideMenu();
hidePlay();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function doSearch() {
w = document.getElementsByTagName("input")[0].value;
arr = byRating(searchResults(w));
if(document.getElementsByTagName("input")[0] == document.activeElement && event.keyCode != 27 && arr.length < channels.length * .5) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("<br>")[0] + "<br>";
mySearchResults = arr;
a = 0;
console.log(w);
console.log(searchResults(w)[0]);
console.log(mySearchResults);
if(mySearchResults[0]) {
a = 0;
while(a < mySearchResults.length) {
b = a;
a = b;
//console.log(a)
//console.log(mySearchResults.length)
if(mySearchResults[a].status == "live") {
addShow(mySearchResults[a].name, mySearchResults[a].img, mySearchResults[a].url)
}
a = b + 1;
//console.log("Test: " + mySearchResults[a])
//console.log("Test: " + a)
}
}
else {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("<br>")[0] + "</input><br />No results found.";
}
document.getElementsByTagName("input")[0].value = w;
document.getElementsByTagName("input")[0].addEventListener("keyup", doSearch);
}
if(document.getElementsByTagName("input")[0] == document.activeElement && event.keyCode != 27 && arr.length >= channels.length * .5) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("<br>")[0] + "</input><br />Too many results! Narrow your search.";
document.getElementsByTagName("input")[0].value = w;
document.getElementsByTagName("input")[0].addEventListener("keyup", doSearch);
}
document.getElementsByTagName("chanhead")[0].scrollIntoView();
document.getElementsByTagName("input")[0].focus();
}
function showSearch() {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Search");
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("</input>")[0] + '<input type="text" value="Search for genres, stations, or podcasts" onclick="this.select()"></input><br />';
document.getElementsByTagName("input")[0].addEventListener("keyup", doSearch);
hideMenu();
hidePlay();
}

function showCategory(cat) {
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
z = 0;
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + "<chanhead>" + cat + "</chanhead>";
while(byRating(catArray(cat))[z]) {
addShow(byRating(catArray(cat))[z].name, byRating(catArray(cat))[z].img, byRating(catArray(cat))[z].url)
z = z + 1;
}
hideMenu();
hidePlay();
document.getElementsByTagName("chanhead")[0].scrollIntoView()
}

function showLikes() {
window.history.replaceState(null, null, window.location.pathname);
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
z = 0;
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + "<chanhead>Likes</chanhead>";
while(getLikes()[z]) {
addShow(getLikes()[z].name, getLikes()[z].img, getLikes()[z].url)
z = z + 1;
}
hideMenu();
hidePlay();
if(z == 0) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + 'You like nothing.';
}
document.getElementsByTagName("chanhead")[0].scrollIntoView()
}

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

function showExplore() {
window.history.replaceState(null, null, window.location.pathname);
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
linkstring = 'javascript:showRecc()';
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<chanhead><a href=' + "'" + linkstring + "'>Discover</a></chanhead>"
z = 0;
while(categoryList[z]) {
x = 0;
if(catArray(categoryList[z])[0]) {
addCat(categoryList[z]);
}
z = z + 1
}
hideMenu();
hidePlay();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function openLink(url) {
window.open(url, '_blank')
}
function showMessage(hero, header, message, options, functions) {
t = [];
t.push("t");
//console.log(options[0]);
document.getElementsByTagName("msgspace")[0].id = "visible";
document.getElementsByTagName("msgspace")[0].getElementsByTagName("msg")[0].innerHTML = '<img src="' + hero + '" id="msg"></img>' + '<h2 id="msg">' + header + '</h2>' + '<p id="msg">' + message + '<br />' + '</p><a href="javascript:hideMessage()"><img src="https://js-cdn.music.apple.com/musickit/v3/components/musickit-components/assets/icons/web-VideoPlayer-close.svg" id="close"></img></a>';;
x = 0;
newstring = "";
while(options[x] && functions[x]) {
newstring = newstring + '<a href="javascript:' + functions[x] + '"><coolbutton>' + options[x] + '</coolbutton></a>';
x = x + 1;
}
document.getElementsByTagName("msgspace")[0].getElementsByTagName("msg")[0].getElementsByTagName("p")[0].innerHTML = document.getElementsByTagName("msgspace")[0].getElementsByTagName("msg")[0].getElementsByTagName("p")[0].innerHTML + "<br />" + newstring;
}
//showMessage("https://cdn-web.tunein.com/assets/img/default-item-v2.png", "TuneIn Bad", "TuneIn freaking sucks dude.", ["You Right You Right", "But I Like TuneIn"], ["hideMessage()", "openLink('http://tunein.com')"])
function hideMessage() {
document.getElementsByTagName("msgspace")[0].id = "";
}
//hideMessage()
function showNP() {
window.history.replaceState(null, null, "?s=" + currentID.toString());
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
showPlay();
}
function playChan(url, name, img) {
hideMenu();
currentID = searchResults(name)[0].id;
document.getElementsByTagName("topchan")[0].innerHTML = "";
document.getElementsByTagName("audio")[0].src = url;
document.getElementsByTagName("np")[0].innerHTML = '<npbg><img src="' + img + '"></npbg><npimg><img src="' + img + '"></npimg><nptitle>' + name + '<br /><img src="' + site.heartimg + '"></nptitle><npc><a href="javascript:playPause()"><img src="' + site.stopimg + '" id="icon2"></img></a></npc>';
showPlay();
}
function playChan2(ID) {
hideMenu();
currentID = ID;
hideMessage()
window.history.replaceState(null, null, "?s=" + ID.toString());
document.getElementsByTagName("topchan")[0].innerHTML = "";
document.getElementsByTagName("audio")[0].src = channels[ID].url;
document.getElementsByTagName("np")[0].innerHTML = '<npbg><img src="' + channels[ID].img + '"></npbg><npimg><img src="' + channels[ID].img + '"></npimg><nptitle>' + channels[ID].name + '</nptitle><npc><a href="javascript:Share(' + currentID + ')"><img src="' + site.shareimg + '" id="icon2"></img></a><a href="javascript:playPause()"><img src="' + site.stopimg + '" id="icon2"></img></a><a href="javascript:setLike(' + ID + ')"><img src="' + site.heartimg + '" id="icon2"></img></a></npc>';
playPause();
checkLike();
showPlay();
}

if(location.search.indexOf("s=") > -1) {
playChan2(parseInt(location.search.split("s=")[1]))
playPause();
playPause();
}

else {
clearChanList();
showBrowse();
}

function Share(a) {
shareInfo = {
title: channels[a].name,
text: "Listen to " + channels[a].name + " on " + site.name + "!",
url: location.href
}
try {
navigator.share(shareInfo);
}
catch {
navigator.clipboard.writeText(shareInfo.url)
showMessage(channels[a].img, "Link copied!", "Share the link to share the station!", ["Okay"], ["hideMessage()"])
}
}
setInterval(addRating, 1000);
