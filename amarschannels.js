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
new Channel("BBC Radio 4", "https://cdn-radiotime-logos.tunein.com/s25419q.png", "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm", "News, Talk, Comedy, Drama", "", "live")
]