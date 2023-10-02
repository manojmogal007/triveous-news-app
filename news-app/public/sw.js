
let cachedata="appdata"

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cachedata).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js', 
                '/index.js',
                '/',
                '/allnews',
                '/signup',
                '/singlenews',
                '/favoritesinglenews',
                '/favoritenews',
                '/manifest.json'            
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((res)=>{
                if(res){
                    return res
                }
                let requrl=event.request.clone()
                fetch(requrl)
            })
        )
    }
})