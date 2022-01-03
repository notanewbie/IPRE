a = 0;
while(channels[a]) {
channels[a].id = a;
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
categoryList = categoryList.sort();
a = 0;
b = 1;
while(categoryList[a]) {
while(categoryList[b]) {
console.log("Comparing " + categoryList[a] + " and " + categoryList[b])
if(categoryList[a] == categoryList[b]) {
console.log("removing " + categoryList[b]);
categoryList.splice(b, 1)
}
else {
b = b + 1;
}
a = a + 1;
}
}

function catArray(cat) {
tempChans = []
a = 0;
while(channels[a]) {
b = 0;
while(channels[a] && channels[a].category.split(", ")[b]) {
if(channels[a].category.split(", ")[b] == cat) {
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
tempChans = []
a = 0;
while(channels[a]) {
if(channels[a].description.split(q)[1]) {
tempChans.push(channels[a])
}
else {
if(channels[a].name.split(q)[1]) {
tempChans.push(channels[a])
}
else {
if(channels[a].name == q) {
tempChans.push(channels[a])
}
else {
if(channels[a].description == q) {
tempChans.push(channels[a])
}
else {
if(channels[a].category.split(q)[1]) {
tempChans.push(channels[a])
}
else {
if(channels[a].category == q) {
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
function showMenu() {
document.getElementsByTagName("navmenu")[0].id="visible"
document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:hideMenu()";
}
function hideMenu() {
document.getElementsByTagName("navmenu")[0].id=""
document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:showMenu()";
}
//showMenu();
function clearChanList() {
document.getElementsByTagName("topchan")[0].innerHTML = "";
}
function addShow(name, img, url) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:playChan(' + "'" + url + "', " + "'" + name + "', " + "'" + img + "'" + ')"><chantab><img src="' + img + '"></img><chantext>' + name + '</chantext></chantab></a>';
}
function addHead(label) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<chanhead>' + label + '</chanhead>'
}
function playPause() {
if(document.getElementsByTagName("audio")[0].paused) {
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
document.getElementsByTagName("audio")[0].play();
}
else {
document.getElementsByTagName("audio")[0].pause();
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
}
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
addHead("Browse");
z = 0;
while(z < channels.length) {
if(channels[z].status == "live") {
addShow(channels[z].name, channels[z].img, channels[z].url)
}
z = z + 1
}
hideMenu();
hidePlay();
}
function showExplore() {
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
z = 0;
while(z < channels.length) {
if(channels[z].status == "live") {
addShow(channels[z].name, channels[z].img, channels[z].url)
}
z = z + 1
}
hideMenu();
hidePlay();
}
function showNP() {
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
showPlay();
}
function playChan(url, name, img) {
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
document.getElementsByTagName("audio")[0].src = url;
playPause();
document.getElementsByTagName("np")[0].innerHTML = '<npbg><img src="' + img + '"></npbg><npimg><img src="' + img + '"></npimg><nptitle>' + name + '</nptitle><npc><a href="javascript:playPause()">P</a></npc>';
showPlay();
}
clearChanList();
showBrowse();