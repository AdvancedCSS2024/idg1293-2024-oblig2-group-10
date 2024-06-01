# Report for oblig 2: Advanced CSS

## Poster Setup
We chose Poster two for the oblig

### Extracting SVGs
I started by shaping out the correct size of the elements, trimming corners, grouping things that should be grouped but weren't, for example some of the faces didn't have all the elements grouped and so on. Then removing unnecessary assets in the PDF, cleaning up paths, and layers, etc. I could've done a better job at this, it was very overwhelming and whoever jumbled it up did a good job, it was quite infuriating that every time I thought we found everything there was something else hidden there. I tried to simplify the paths but it was hard to remove enough to not affect the curves, other than that I tried to export SVGs separated from each other for more control over the positioning and the elements for animation. I tried many different ways of extracting, cleaning etc which is why there are so many versions of the PDF, I also had a lot of trouble with the opensans bold font, it wasn't available on adobe fonts (even though it's there?) and I had to ignore warnings about missing images, but I ended up removing almost everything not present in the main poster anyway so that wasn't that much of an issue.

### Implementing the Design
To implement the design I tried to follow the poster where possible, but some of the text formatting was quite nightmarish to get right, specifically on the earth surfaces. I tried to use character width to format the text, and scaled the text with view width so it should be responsive. Other than that I tried to use the correct font to maintain the funny-ish appearance of the poster, and going from top to bottom I started by placing the background elements (the waves and the globe/planet/earth) then worked my way down from the top placing the elements like the moon and the stars, the car, then the pollution clouds, children, and earth surfaces/eyes and then the footer. Then I went over and added the text, which turns out when you're positioning with relative and absolute applying the font before you start placing things is a good idea.. The font changed the sizes of the text which messed up the placement and formatting etc. I added the footer and decided to use SVG drawings to make the lines separating the text in the blue part of the footer, which I had a lot of trouble with. I spent a good 3 hours trying to figure out why it kept scaling the entire DIV only to realize that it wasn't, I had forgotten to set the font size of the text to a view width.. Once that was sorted out we could start animating things, which is detailed below

## Animation
First and foremost when working on the animation we had to decide what to animate, so to do that we first started with a very basic storyboard of 3 pictures showing some general ideas (storyboard can be seen in the documents folder). These ideas was not something we locked ourselves into as things can have the best plan ever, but execution is always an unknown when we're learning.

### GSAP Implementation
GSAP implementation was utilized on these assets:
* The moon
* Both of the stars
* Earth eyes

We started work on GSAP right after making the script.js and inserting the GSAP script into the HTML, only to meet the first hurdle: JavaScript autocomplete. This happened when trying to type `gsap.` only to have it autocomplete to `webGlSampler` which was a problem really came in the way of writing the code, but this was later fixed by downloading the Gsap GreenSock Snippets extention by Max Coding. So by finally being able to code effectivly we were able to start animating by using GSAP using the [GSAP documentation](https://gsap.com/docs/v3/).
First by animating the moon as I wanted it to move from side to side and giving it a rotation instead of animating the mouth from side to side. By doing this we also avoid making the animations overly complicated as that would also break one of the twelve animation principles, for _Staging_. Doing too much would remove focus in the poster. When I started with the animations I didn't specify with % for the values used in the positioning which is fine when making a static page, but the second we did some responsivness testing of the poster it became very obvious as the moon went crashing through the whole poster. % was applied to all position values after noticing that.
When animating the stars we do a full 360 degree rotation and added scaling which differ from the moon work. We made sure to scale the stars according to the original size making sure the largest star would always have the larger one of the two. The movement would also differ to make sure there was enough spacing between the two and finally a delay for the smaller star to not make the animation too uniform.
Animating the eyes of the earth was not that different from the rest as the movement was fairly simple having the eyes look around. We wanted to see if we could implement a random wiggle for the eye to have it move around looking the same always but we found out that this was a premium feature for GSAP.

### CSS Animation Implementation
CSS animations that was implemented was fairly simple excluding the girl, this comes of the attempt to implement SMIL in a simpler way using [SVGator](https://www.svgator.com/), trying to implement path animation and transforms (also made sure to follow the natural arc) only to realize that it just exported CSS animations inside of the SVG. This was used for the girl's:
* Eyes (having them move around on a path).
* Waving the offhand (there was an attempt to do the phone arm and animate the phone with a curve and the hand using last anchor point to move the hand, but it didn't work).

Then there was the CSS animation implemented in the SCSS code by using `@keyframes` (using pose to pose) to make the large and medium pollution cloud to float upwards. We made sure to implement different animation duration on both to make the timing for both to make sense, making the larger cloud go a little slower.

### SMIL Implementation
We went fairly simple for the implementation of SMIL as it could get overwelming quick considiring the large coordinates in the SVGs.
SMIL was used on these elements of the poster:
* Small Pollution Clouds (Path animation)
* Medium Pollution Clouds (Transformation)
* Large Pollution Cloud (Transformation)
* Car ()
    * Car wheel ()

First was the implementation of a path animation taking reference from [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL) and change the path to fit the idea we had for their movement making them float up and down like the larger ones making sure we had a vertical path using `V` but after noticing that this would crop the svg we went into _Adobe Illustrator_ to edit the artboard by extending the height allowing for more room with the animation. That also opened for some small edits in the position of all small pollution clouds making sure it wouldn't overlap with other elements.
Working on the scaling animation for the medium and large pollution cloud using transform collecting info on how to do it by referancing the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) and the [SVG animation spesification](https://svgwg.org/specs/animations/). The aspects of giving the transform several keyframes values instead of from and to as that would not allow for smooth animations.

To animate the car I applied a SMIL animate to the "chassis" part of the SVG, switching the colors between two hexes, knowing the start/ends of the tags was very difficult but after understanding where to put the animation it was fairly simple to insert the values, it's not exactly complex but I think it looks cool/eye catching. After animating the color of the car I wanted to give it more life, so I added a small scaling to the wheels with Animation Transform so it looks like they're moving up and down, and then I finished it off by adding two smoke clouds with different sizes using CSS drawing to illustrate smoke/pollution exiting the car since the animation now shows it in motion.