# LLeact
Like React but LightWeight

## dev notes

### how it should work acc

component have var for it own html code

render method basicly return html for component that hold compo.
hshsss
ˋˋˋ
body.innerHTMl = bodycom.render(

comp1.render(

comp1_1.render();

);
comp.render();
)
ˋˋˋ


## .Dev notes

when instaciating component create html from render method,
to html add component id tag.
in render somehow change component innerText and parameters

update 8/8/2021
when component inner html is rewritten in in redraw and render func event listeners are removed. so event listeners need to be reasigned or some sort of Virtual DOM system is needed or 
var string need to be extracted from render method;
also object proxyes are broken
https://gomakethings.com/how-to-detect-changes-to-nested-arrays-and-objects-inside-a-proxy/
https://www.py4u.net/discuss/281310
https://gist.github.com/jelkand/4231647570e22a5e0328d26eca7658a2
https://codepen.io/farskid/pen/YZorLG

article that cointains info ab roxy api

https://codeburst.io/understanding-javascript-proxies-by-examining-on-change-library-f252eddf76c2
