# Tesla

Tesla is a light weight, responsive,predictive UI framework
that can be used to build web and mobile applications UI rapidly.

## Concepts
	Tesla Follows a Matter concepts to build UI.  

## Setup


To include Stylesheet alone
```html
 <link rel="stylesheet" href="/path/to/dist/css/tesla.min.css"/>
```

To include along with script

```html
 <script src="path/to/dist/js/tesla.min.js"></script>
```
To build after editing the source code
```sh
npm run build
```

## Components of Tesla

- static part (comprised of css & sass)
  - Layouts
    - Based on Property(Solid & Fluid)
    - Based on Orientation (Row & Columns)
    - Based on Distribution (space-between,center,space-aroound,start,end)
    - Based on Distribution of lines ()
    - Based on wrapping Properties (Wrap,Nowrap,Wrapreverse)
    - Sizing 
      - Flex sizing
      - Span sizing
  - Colors
    - Material Colors
    - Html colors
  - Components
    - Loader
    - Modal
    - Tabs
    - Can be extended to Buttons,forms,etc...
  - Misc
    - Animation Stacks
      - Left,Right,Top,Bottom animation
      - Zoom animation
      - Fading animation
    - Font Stacks
      - Transform (uppercase,lowercase,Underline)
      - Alignment (left,right,center,justify)
    - Visibility Stack(Hide,Show,desktop,mobile)
  - Responsiveness
- Dynamic Part (comprised of js)
  - Ts-open
  - Ts-close
  - Ts-toggle
  - And more ....

## Guide to Tesla

### Adjustment Properties
Basic containers consist of  **Fluid** and **solid**  components. Fluid acts as a real life fluid i.e it adjust itself to the width of the container. Solid is a rigid one.
```html
<div class="fluid">
	<div class="solid">HI</div>
	<div class="solid">HI</div>
	<div class="solid">HI</div>
</div>
```
### Orientation

By default every element is oriented horizontally i.e row . Tesla provides Horizontal and vertical orientations namely **row** and **column**. 
```html
<div class="row">
	<div>Left</div>
	<div>Middle</div>
	<div>Right</div>
</div>

<div class="column">
	<div>Top</div>
	<div>Middle</div>
	<div>Bottom</div>
</div>

```
### To be continued...