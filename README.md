# jquery-gototop-plugin
jQuery plugin which generates link to slide to top of the page

This plugin is very simple to use and to adopt to your needs. Just create some link, button or any other element, which user can click to jump to beginning of the page, and attach the plugin to it. In basic usage doesn't need any CSS code to position HTML link element. Refer to demo.html to see how it works.

## Configuration options

* dist (200) - Distance from top after link will shown; if 0 then link won't be hidden when page loads 
* fadeInDelay (400) - Time to show link in ms
* fadeOutDelay (400) - Time to hide link in ms
* scrollSpeed (400) - Time to jump to top of the page in ms
* easingType (linear) - Type of transition, {see https://github.com/flesler/jquery.scrollTo}
* List of Css properties for link positioning: top (null), bottom (30px), left (null), right (30px) 

## Examples

### Using bootstrap classes

```html
<a id="totopicon" href="#" class="fa-stack fa-lg">
  <i class="fa fa-circle fa-stack-2x"></i>
  <i class="fa fa-chevron-up fa-stack-1x fa-inverse" aria-hidden="true"></i>
  <i class="sr-only">Go to top</i>
</a>
<script type="text/javascript">
$('#totopicon').gototop();
</script>
```

### Custom link position and different scroll position in which icon will be shown 

```html
<button class="gototop">Go to top</button>
<script type="text/javascript">
$('.gototop').gototop({
  dist: 300,
  css: {
    top: '50px',
    left: '30px',
    right: null,
    bottom: null,
  }
});
</script>
 ```