# IPRE
IP Radio Engine
<h1>Abstract</h1>
<p>TuneIn Radio is nice, but the free service has ads, and you cannot add whatever stations you want arbitrarily. Thus, I am creating this engine which one can use to browse and play their own list of stations.</p>
<h1>Documentation</h1>
<h2>channels.js API</h2>
<p>The channels API allows for the addition of a large amount of data using multiple fields. I will add more documentation in the future, but the key fact to remember is that stations are identified by their order in the station list. This means that you really should not remove stations from the list once you add them. (This should not be a big deal, you can remove stations from the interface by marking them as "dead", as I do.) However, this means you can change the name, image logo, description, and URL of any station, and references to them will remain the same. Stats will not be lost when station info is changed.</p>
