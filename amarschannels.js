class Channel {
constructor(name, img, url, category, description, status) {
this.name = name;
this.img = img;
this.url = url;
this.category = category;
this.description = description;
this.status = status;
this.id = 0;
this.rating = 0;
}
}

const channels = [
new Channel("20th Century Radio", "https://cdn-radiotime-logos.tunein.com/s129131q.png", "http://audioartsradio.com:6006/;", "OTR", "", "dead"),
new Channel("210 Holy Hip Hop", "https://cdn-profiles.tunein.com/s188550/images/logog.jpg", "http://108.59.11.81:8167/;", "Music, CHH, Hip-Hop", "", "dead"),
new Channel("Antioch OTR", "https://cdn-radiotime-logos.tunein.com/s50924q.png", "http://209.95.56.101:8000/listen", "OTR", "", "dead"),
new Channel("AP News", "https://cdn-radiotime-logos.tunein.com/p686763q.png", "http://apnews.streamguys1.com/apnews", "News", "", "live"),
new Channel("BBC Radio 4", "https://cdn-radiotime-logos.tunein.com/s25419q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm", "News, Talk, Comedy, Drama", "", "live"),
new Channel("BBN English", "https://cdn-radiotime-logos.tunein.com/s20438q.png", "https://stream2.bbnradio.org:8443/english", "Christianity, Talk, Music", "", "live"),
new Channel("Bloomberg TV", "https://cdn-profiles.tunein.com/s47135/images/logog.png", "http://tunein.streamguys1.com/BloombergTV", "Talk, News, Finance, TV", "", "live"),
new Channel("Bott Radio Network", "https://cdn-profiles.tunein.com/s31976/images/logog.png", "https://ic1.sslstream.com/bottradio.mp3", "Talk, Christianity", "", "live"),
new Channel("C-SPAN Radio", "https://cdn-profiles.tunein.com/s28047/images/logog.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/CSPANRADIO.mp3", "Talk, News, TV", "", "live"),
new Channel("CEDM Radio", "https://cdn-profiles.tunein.com/s269340/images/logog.png", "http://173.82.208.105:8096/stream", "Music, EDM, CEDM, Christianity", "", "live"),
new Channel("CNBC", "https://cdn-profiles.tunein.com/s110052/images/logog.png", "http://tunein.streamguys1.com/cnbc", "Talk, News, Finance, TV", "", "live"),
new Channel("CNN", "https://cdn-profiles.tunein.com/s20407/images/logog.png", "http://tunein.streamguys1.com/cnn-new", "Talk, News, TV", "", "live"),
new Channel("CNN International", "https://cdn-profiles.tunein.com/s292162/images/logog.png", "https://playerservices.streamtheworld.com/api/livestream-redirect/CSPANRADIO.mp3", "Talk, News, TV", "", "live"),
new Channel("ESPN Radio", "https://cdn-profiles.tunein.com/s25876/images/logog.jpg", "http://live.wostreaming.net/direct/espn-network-48", "Talk, Sports", "", "live"),
new Channel("ESPN TV Show Podcasts", "https://cdn-radiotime-logos.tunein.com/s224540q.png", "http://tunein.streamguys1.com/ESPNTV", "Talk, Sports, TV", "", "live"),
new Channel("ESPN2", "https://www.logolynx.com/images/logolynx/e5/e5d85d854d02d7cfa3d1139508b84c73.jpeg", "http://tunein.streamguys1.com/ESPNTV", "Talk, Sports, TV", "", "dead"),
new Channel("ESPNews", "https://www.dieselhdtv.com/wp-content/uploads/2019/06/espnews_color.png", "http://espn-news.akacast.akamaistream.net/7/44/126490/v1/espn.akacast.akamaistream.net/espn-news?c_yob=2000&c_gender=m&source=TuneIn", "Talk, Sports, TV", "", "dead"),
new Channel("ESPNU", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/ESPN_U_logo.svg/512px-ESPN_U_logo.svg.png", "http://espnu.akacast.akamaistream.net/7/313/126490/v1/espn.akacast.akamaistream.net/espnu?c_yob=2000&c_gender=m&source=TuneIn", "Talk, Sports, TV", "", "dead"),
new Channel("Evolution", "https://i.iheart.com/v3/re/new_assets/7b78fd03-66b1-4b9a-bd41-fb9638a82a24", "http://stream.revma.ihrhls.com/zc5953", "Music, EDM", "", "live")
]
