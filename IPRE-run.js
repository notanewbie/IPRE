//This is an example utilization of IPRE.
//Much of this utilization was previously in the IPRE document. It will now no longer run proactively, but the functions will remain at the disposal of anyone who wishes to use this engine.

//You can use the site parameters to customize your webpage.
document.title = site.name;
document.getElementsByTagName("navbutton")[0].getElementsByTagName("img")[0].src = site.logo
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[0].src = site.homeimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[1].src = site.exploreimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[2].src = site.heartimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[3].src = site.searchimg
document.getElementsByTagName("navcenter")[0].getElementsByTagName("img")[4].src = site.npimg
document.getElementsByTagName("navbutton2")[0].getElementsByTagName("img")[0].src = site.setimg
document.body.getElementsByTagName("link")[0].href=site.logo

// Messages really shouldn't be part of IPRE, will need to remove this later.
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
setCookie("RADIO_MESSAGE_COUNT", count)
}
}
else {
setCookie("RADIO_MESSAGE_COUNT", startup.x)
}
}
}
function resetMessages() {
setCookie("RADIO_MESSAGE_COUNT", startup.x)
}
checkMessages();
//End message code

// This code also shouldn't be part of IPRE
function showMenu() {
document.getElementsByTagName("navmenu")[0].id="visible"
//document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:hideMenu()";
}
function hideMenu() {
document.getElementsByTagName("encased1")[0].innerHTML = "";
document.getElementsByTagName("encased1")[0].id = "";
document.getElementsByTagName("navmenu")[0].id=""
//document.getElementsByTagName("navbutton")[0].getElementsByTagName("a")[0].href="javascript:showMenu()";
}
//showMenu();
function clearChanList() {
document.getElementsByTagName("topchan")[0].innerHTML = "";
}
function addItem(text, command, subtext="") {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:' + command + '"><chantab2><chantext2>' + text + '</chantext2><br /><chantext3>' + subtext + '</chantext3></chantab2></a>';
}
function addToggle(text, command, id) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:' + command + '"><chantab2 id="set' + id + '"><chantext>' + text + '</chantext><img src="' + site.toggle1img + '" id="setpic"></img></chantab2></a>';
}
function addShow(name, img, url, id, row) {
//alert(row > -1)
if(currentID == id) {
if(row > -1) {
//alert(row)
document.getElementsByTagName("chanrow")[row].innerHTML = document.getElementsByTagName("chanrow")[row].innerHTML + '<a href="javascript:showNP()"><chantab><img id="c_icon" src="' + img + '"></img><br /><chantext>' + name + '</chantext></chantab></a>';
}
else {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:showNP()"><chantab><img id="c_icon" src="' + img + '"></img><br /><chantext>' + name + '</chantext></chantab></a>';
}
}
else {
if(row > -1) {
document.getElementsByTagName("chanrow")[row].innerHTML = document.getElementsByTagName("chanrow")[row].innerHTML + '<a href="javascript:playChan2(' + id + ')"><chantab><img id="c_icon" src="' + img + '"></img><br /><chantext>' + name + '</chantext></chantab></a>';
}
else {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href="javascript:playChan2(' + id + ')"><chantab><img id="c_icon" src="' + img + '"></img><br /><chantext>' + name + '</chantext></chantab></a>';
}
}
}
function addCat(label) {
linkstring = 'javascript:showCategory("' + label + '")';
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href=' + "'" + linkstring + "'>" + '<chanhead>' + label + '</chanhead></a>'
}
function addHead(label) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<chanhead>' + label + '</chanhead>'
}
function addHead2(label, link) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + '<a href=javascript:' + encodeURIComponent(link) + '><chanhead2>' + label + '</chanhead2></a>'
}
//

//


//Interface code
function contentOptions() {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Content Options");
z = 0;
while(z < warningList.length) {
if(warningList[z] != "") {
addItem(warningList[z], "setAdvisory(" + z + ")", warnState(z));
}
if(warningList[z] == "") {
addItem("[Blank]", "setAdvisory(" + z + ")", warnState(z));
}
z = z + 1;
}

}

function setAdvisory(id) {
if(warnFilter[id] == 0 && hideFilter[id] == 0) {
document.getElementsByTagName("chantext3")[id].innerHTML = "Warn";
//set this content advisory to "warn";
warnFilter[id] = 1;
hideFilter[id] = 0;
setCookie("WARN_" + warningList[id],'1')
setCookie("FILTER_" + warningList[id],'0')
}
else if(warnFilter[id] == 1 && hideFilter[id] == 0) {
document.getElementsByTagName("chantext3")[id].innerHTML = "Hide";
//set this content advisory to "hide";
warnFilter[id] = 0;
hideFilter[id] = 1;
setCookie("WARN_" + warningList[id],'0')
setCookie("FILTER_" + warningList[id],'1')
}
else if(warnFilter[id] == 0 && hideFilter[id] == 1) {
document.getElementsByTagName("chantext3")[id].innerHTML = "Off";
//set this content advisory to "no warning";
warnFilter[id] = 0;
hideFilter[id] = 0;
setCookie("WARN_" + warningList[id],'0')
setCookie("FILTER_" + warningList[id],'0')
}
}

function playPause() {
ID = currentID;
hasPlayed = 1;
document.getElementsByTagName("navcenter")[0].getElementsByTagName("a")[4].href = "javascript:showNP()";
if(document.getElementsByTagName("audio")[0].paused) {
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
document.getElementsByTagName("audio")[0].play();
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[0].src = site.stopimg;
document.getElementsByTagName("link")[0].href = channels[ID].img;
document.title = channels[ID].name;
if('mediaSession' in navigator) {
navigator.mediaSession.metadata = new MediaMetadata({
title: channels[ID].name,
artist: site.name,
album: '',
artwork: [
{ src: channels[ID].img},
]
});
}

}
else {
document.getElementsByTagName("link")[0].href = site.logo;
document.title = site.name;
document.getElementsByTagName("audio")[0].pause();
document.getElementsByTagName("audio")[0].src = document.getElementsByTagName("audio")[0].src;
document.getElementsByTagName("npc")[0].getElementsByTagName("img")[0].src = site.playimg;

}
}

function checkLike() {
if(currentID > -1) {
if(channels[currentID].liked == 0) {
document.getElementsByTagName("menuitem")[2].getElementsByTagName("img")[0].src = site.heartimg;
}
else {
document.getElementsByTagName("menuitem")[2].getElementsByTagName("img")[0].src = site.heartaltimg;
}
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
function showPlays() {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Listen Now");
addRow("", TopChan().slice(0, 25), "", "tall");
hideMenu();
hidePlay();
hideOptions();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}

function unfurl(PassTitle, PassChan) {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead(PassTitle);
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + "";
z = 0;
c = 0;
while(c < 51 && z < PassChan.length) {
if(PassChan[z].status == "live") {
if(warnState(getWarnID(PassChan[z].warning)) != "Hide" || PassChan[z].warning == "") {
addShow(PassChan[z].name, PassChan[z].img, PassChan[z].url, PassChan[z].id)
c = c + 1;
}
}
z = z + 1
}
}

function addRow(listName, chanList, listFunc, thisHeight) {
if(thisHeight == undefined) {
thisHeight = ""
climit = 25;
}
if(thisHeight == "tall") {
climit = channels.length;
}
addHead2(listName, listFunc);
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + "<chanrow id='" + thisHeight + "'></chanrow>";
z = 0;
c = 0;
while(c < climit && z < chanList.length) {
if(chanList[z].status == "live") {
if(warnState(getWarnID(chanList[z].warning)) != "Hide" || chanList[z].warning == "") {
addShow(chanList[z].name, chanList[z].img, chanList[z].url, chanList[z].id, document.getElementsByTagName("chanrow").length - 1)
c = c + 1;
}
}
z = z + 1
}
}

function showBrowse() {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Browse");
addRow("Listen Now", TopChan().slice(0, 25), "showPlays()");
addRow("Something New", GetSug().slice(0, 25), "showRecc()");
addRow(TopCatList[0].name, byRating2(catArray(TopCatList[0].name)).slice(0, 25), "showCategory('" + TopCatList[0].name + "')");
addRow(TopCatList[1].name, byRating2(catArray(TopCatList[1].name)).slice(0, 25), "showCategory('" + TopCatList[1].name + "')");
addRow(TopCatList[2].name, byRating2(catArray(TopCatList[2].name)).slice(0, 25), "showCategory('" + TopCatList[2].name + "')");
addRow(TopCatList[3].name, byRating2(catArray(TopCatList[3].name)).slice(0, 25), "showCategory('" + TopCatList[3].name + "')");
addRow(TopCatList[4].name, byRating2(catArray(TopCatList[4].name)).slice(0, 25), "showCategory('" + TopCatList[4].name + "')");
addRow(TopCatList[5].name, byRating2(catArray(TopCatList[5].name)).slice(0, 25), "showCategory('" + TopCatList[5].name + "')");
addRow(TopCatList[6].name, byRating2(catArray(TopCatList[6].name)).slice(0, 25), "showCategory('" + TopCatList[6].name + "')");
addRow(TopCatList[7].name, byRating2(catArray(TopCatList[7].name)).slice(0, 25), "showCategory('" + TopCatList[7].name + "')");
addRow(TopCatList[8].name, byRating2(catArray(TopCatList[8].name)).slice(0, 25), "showCategory('" + TopCatList[8].name + "')");
addRow(TopCatList[9].name, byRating2(catArray(TopCatList[9].name)).slice(0, 25), "showCategory('" + TopCatList[9].name + "')");
hideMenu();
hidePlay();
hideOptions();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function showRecc() {
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Discover");
addRow("", GetSug().slice(0, 25), "", "tall");
hideMenu();
hidePlay();
hideOptions();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
function doSearch() {
w = document.getElementsByTagName("input")[0].value;
arr = byRating2(searchResults(w));
if(document.getElementsByTagName("input")[0] == document.activeElement && event.keyCode != 27 && arr.length < channels.length * .5) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML.split("<br>")[0] + "<br>";
mySearchResults = arr;
a = 0;
console.log(w);
console.log(searchResults(w)[0]);
console.log(mySearchResults);
//mySearchResult
if(mySearchResults[0]) {
addRow("", mySearchResults, "", "tall");
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
cat = decodeURIComponent(cat)
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead(cat);
addRow("", byRating2(catArray(cat)), "", "tall");
hideMenu();
hidePlay();
hideOptions();
document.getElementsByTagName("chanhead")[0].scrollIntoView()
}

function showLikes() {
window.history.replaceState(null, null, window.location.pathname);
hideMenu();
document.getElementsByTagName("topchan")[0].innerHTML = "";
z = 0;
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + "<chanhead>Likes</chanhead>";
while(getLikes()[z]) {
if(warnState(getWarnID(channels[z].warning)) != "Hide") {
addShow(getLikes()[z].name, getLikes()[z].img, getLikes()[z].url, getLikes()[z].id)
}
z = z + 1;
}
hideMenu();
hidePlay();
hideOptions();
if(z == 0) {
document.getElementsByTagName("topchan")[0].innerHTML = document.getElementsByTagName("topchan")[0].innerHTML + 'You like nothing.';
}
document.getElementsByTagName("chanhead")[0].scrollIntoView()
}
//

//Interface code 2
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
hideOptions();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}
//

//Interface code 3
function showMessage(hero, header, message, options, functions) {
hideOptions();
t = [];
t.push("t");
//console.log(options[0]);
document.getElementsByTagName("msgspace")[0].id = "visible";
document.getElementsByTagName("msgspace")[0].getElementsByTagName("msg")[0].innerHTML = '<img src="' + hero + '" id="msg"></img>' + '<h2 id="msg">' + header + '</h2>' + '<p id="msg">' + message + '<br />' + '</p><a href="javascript:hideMessage()"><img src="' + site.closeimg + '" id="close"></img></a>';;
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
hideOptions();
document.getElementsByTagName("topchan")[0].innerHTML = "";
showPlay();
}
function playChan(url, name, img) {
hideMenu();
currentID = searchResults(name)[0].id;
document.getElementsByTagName("topchan")[0].innerHTML = "";
document.getElementsByTagName("audio")[0].src = url;
document.getElementsByTagName("np")[0].innerHTML = '<npbg><img src="' + img + '"></npbg><npimg><img src="' + img + '"></npimg><nptitle>' + name + '<img src="' + site.heartimg + '"><br /><img src="' + site.heartimg + '"></nptitle><npc><a href="javascript:playPause()"><img src="' + site.stopimg + '" id="icon2"></img></a></npc>';
showPlay();
}
function setVol(myVol) {
volume = myVol / 100;
if(document.getElementsByTagName("audio").length > 0) {
document.getElementsByTagName("audio")[0].volume = volume;
}
document.getElementsByTagName("input")[0].value = myVol;
setCookie("VOLUME_LEVEL",volume.toString())
}
function playChan2(ID, audioBypass = 0) {
//alert(channels[ID].warning);
if(warnState(getWarnID(channels[ID].warning)) == "Off" || channels[ID].warning == "") {
audioBypass = 1;
}
if(warnState(getWarnID(channels[ID].warning)) == "Warn") {
showMessage(channels[ID].img, "This station is " + channels[ID].warning + ".", "This channel includes " + channels[ID].warning + " content. Are you sure you would like to play it?", ["Yes", "No"], ["playChan2(" + ID + ", 1)", "hideMessage()"])
}
//alert(warnState(getWarnID(channels[ID].warning)))
//alert(audioBypass)
if(audioBypass == 1) {
hideMenu();
currentID = ID;
window.history.replaceState(null, null, "?s=" + ID.toString());
document.getElementsByTagName("topchan")[0].innerHTML = "";
document.getElementsByTagName("audio")[0].src = channels[ID].url;
playPause();
//alert("Hide!");
hideMessage();
document.getElementsByTagName("np")[0].innerHTML = '<npbg><img src="' + channels[ID].img + '"></npbg><npimg><img src="' + channels[ID].img + '"></npimg><nptitle>' + channels[ID].name + '<a href="javascript:showOptions(' + ID + ')"><img src="' + site.menuimg + '" id="menu"></a></nptitle><br /><npc><a href="javascript:playPause()"><img src="' + site.stopimg + '" id="icon2"></img></a></npc>';
document.getElementsByTagName("audio")[0].volume = volume;
if(document.getElementsByTagName("input").length > 0) {
document.getElementsByTagName("input")[0].value = volume * 100;
document.getElementsByTagName("input")[0].onchange = function() {setVol(this.value);}
}
showPlay();
}
//checkLike();
}

function showSettings() {
clearChanList();
window.history.replaceState(null, null, window.location.pathname);
document.getElementsByTagName("topchan")[0].innerHTML = "";
addHead("Settings");
//addToggle("test", "toggleSetting(0)", 0);
addItem("Content Settings", "contentOptions()");
addItem("Radio Recap", "RadioRecap()");
hideMenu();
hidePlay();
hideOptions();
document.getElementsByTagName("chanhead")[0].scrollIntoView();
}

function toggleSetting(a) {
console.log(this);
console.log(this.src);
if(settings[a] == 0) {
settings[a] = 1;
document.getElementById("set" + a).getElementsByTagName("img")[0].src =site.toggle2img;
}
else {
settings[a] = 0;
document.getElementById("set" + a).getElementsByTagName("img")[0].src =site.toggle1img;
}
setCookie(settingstext[a],settings[a])
}

if(location.search.indexOf("s=") > -1) {
temp1 = location.search.split("s=")[1];
console.log("clearing");
clearChanList();
console.log("browsing");
showBrowse();
console.log("playing");
playChan2(parseInt(temp1))
}

else {
if(location.search=="?recap") {
RadioRecap();
}

else {
if(location.search=="?settings") {
showSettings();
}

else {
clearChanList();
showBrowse();
}
}
}

function Share(a) {
shareInfo = {
title: channels[a].name,
text: "Listen to " + channels[a].name + " on " + site.name + "!",
url: location.href.split("?")[0] + "?s=" + a,
}
try {
navigator.share(shareInfo);
}
catch {
navigator.clipboard.writeText(shareInfo.url)
showMessage(channels[a].img, "Link copied!", "Share the link to share the station!", ["Okay"], ["hideMessage()"])
}
}

function RadioRecap() {
showPanel1();
}

function showPanel1() {
hideMenu();
document.getElementsByTagName("encased1")[0].innerHTML = '<bigwords>We got your ' + new Date().getFullYear() + ' Radio Recap on tap! Are you ready?</bigwords><a href="javascript:showPanel2()"><coolbutton id="panel2">Yep</coolbutton></a>';
document.getElementsByTagName("encased1")[0].id = "show";
}

function showPanel2() {
hideMenu();
document.getElementsByTagName("encased1")[0].innerHTML = '<midwords>Your top station is ' + TopChan()[0].name + '.</midwords><mid_desc>Do you need to favorite this channel? Nope! Cuz you have it on speed dial!<br />You have listened to this channel for ' + TopChan()[0].rating + ' seconds!<br />How many minutes is that? Hours? Days? IDK dude :P Sounds like a lot tho!</mid_desc><img src="' + TopChan()[0].img + '" id="en_photo"><a href="javascript:showPanel1()"><coolbutton id="panel1">Back</coolbutton></a><a href="javascript:showPanel3()"><coolbutton id="panel2">Next</coolbutton></a>';
document.getElementsByTagName("encased1")[0].id = "show";
}

function showPanel3() {
hideMenu();
document.getElementsByTagName("encased1")[0].innerHTML = '<midwords>Your Top Stations</midwords><img src="' + TopChan()[0].img + '" id="ch1"><img src="' + TopChan()[1].img + '" id="ch2"><img src="' + TopChan()[2].img + '" id="ch3"><img src="' + TopChan()[3].img + '" id="ch4"><img src="' + TopChan()[4].img + '" id="ch5"><ch1>' + TopChan()[0].name + '<br />' + TopChan()[0].rating + ' Seconds</ch1><ch2>' + TopChan()[1].name + '<br />' + TopChan()[1].rating + ' Seconds</ch2><ch3>' + TopChan()[2].name + '<br />' + TopChan()[2].rating + ' Seconds</ch3><ch4>' + TopChan()[3].name + '<br />' + TopChan()[3].rating + ' Seconds</ch4><ch5>' + TopChan()[4].name + '<br />' + TopChan()[4].rating + ' Seconds</ch5><a href="javascript:showPanel2()"><coolbutton id="panel1">Back</coolbutton></a><a href="javascript:showPanel4()"><coolbutton id="panel2">Next</coolbutton></a>';
document.getElementsByTagName("encased1")[0].id = "show";
}

function showPanel4() {
hideMenu();
document.getElementsByTagName("encased1")[0].innerHTML = '<midwords>' + TopCatList[0].name + ' is dope but you like other genres too.</midwords><mid_desc>Like look at these genres!<br />' + TopCatList[0].name + '<br />' + TopCatList[1].name + '<br />' + TopCatList[2].name + '<br />' + TopCatList[3].name + '<br />' + TopCatList[4].name + '<a href="javascript:showPanel3()"><coolbutton id="panel1">Back</coolbutton></a><a href="javascript:showBrowse()"><coolbutton id="panel2">Home</coolbutton></a>';
document.getElementsByTagName("encased1")[0].id = "show";
}
//

//Interface code 4
function hideOptions() {
document.getElementsByTagName("menuspace")[0].id = "";
document.getElementsByTagName("menuitems")[0].innerHTML = "";
}
function showOptions(ID) {
document.getElementsByTagName("menuspace")[0].id = "show";
document.getElementsByTagName("menuitems")[0].innerHTML = '<a href="javascript:hideOptions()"><menuitem><img src="' + site.closeimg + '" id="menu"></img>Close<br /></menuitem></a><a href="javascript:showInfo(' + ID + ')"><menuitem><img src="' + site.infoimg + '" id="menu"></img>Info<br /></menuitem></a><a href="javascript:setLike(' + ID + ')"><menuitem><img src="' + site.heartimg + '" id="menu"></img>Like<br /></menuitem></a><a href="javascript:Share(' + ID + ')"><menuitem><img src="share.png" id="menu"></img>Share<br /></menuitem></a><menuitem><input type="range" draggable="false" id="vol2"></input><br /></menuitem>';
checkLike();
if(document.getElementsByTagName("input").length > 0) {
document.getElementsByTagName("input")[0].onchange = function() {setVol(this.value);}
document.getElementsByTagName("input")[0].value = volume * 100;
}
if(document.getElementsByTagName("input").length > 1) {
document.getElementsByTagName("input")[1].onchange = function() {setVol(this.value);}
document.getElementsByTagName("input")[1].value = volume * 100;
}
}
function showInfo(ID) {
showMessage("https://cdn-web.tunein.com/assets/img/default-item-v2.png", "TuneIn Bad", "TuneIn freaking sucks dude.", ["You Right You Right", "But I Like TuneIn"], ["hideMessage()", "openLink('http://tunein.com')"])
showMessage(channels[ID].img, channels[ID].name, channels[ID].description, ["Close"], ["hideMessage()"])
}
//
