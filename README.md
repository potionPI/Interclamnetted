# Interclamnetted

Site created to play a bit with Jekyll. It's pretty sparse and is more beautiful than it is useful, but I guess the point of making this was just to get a little more comfortable with github pages and jekyll?

Btw the only reason there is an absurd amount of javascript is because of how badly I made the calendar. There are much, much better ways that are easily found online, but I just wanted to see if I could create something similar with the limited knowledge I had.

History :
- Need to figure out how to update these online files after changing local files (why's that harder to find than the opposite?
- ~~Need to figure out how to update my local files as I update this online thing and vice versa~~
- Want to figure out how to use {{ site.url }} in .js files instead of using https://potionpi.github.io/Interclamnetted
- ~~Need to figure out how to get js assets to load~~
- ~~Need to figure out what Mixed Content: The page at 'https://potionpi.github.io/Interclamnetted/' was loaded over HTTPS, but requested an insecure stylesheet 'http://potionpi.github.io/Interclamnetted/css/contentStylesheet.css'. This request has been blocked; the content must be served over HTTPS. means~~
- ~~Need to make _config.yml have a url thing~~

Stuff solved:
- "git pull" updates the local files
- Gave js urls https://potionpi.github.io/Interclamnetted/ in front of each url in order to get assets to be found
- Gave _config.yml an https:// in order to get rid of error messages and find the resources
