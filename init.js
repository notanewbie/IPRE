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

function loadScript(url) {
const script = document.createElement('script')
script.src = url;
document.head.append(script)
}

loadScript("config.js");
document.body.innerHTML = document.body.innerHTML + '<script src="' + site.channels + '"></script>'
document.body.innerHTML = document.body.innerHTML + '<script src="' + site.ipre + '"></script>'