Dependency Wheel
================

This is a fork from the MooWheel Class version 0.2 from unwieldy studios <http://unwieldy.net>. Written by Augusto Becciu. You can get more information to MooWheel here <http://unwieldy.net/web/moowheel>

This fork is customized to visualize dependencies for software libraries.
It is used on <https://www.versioneye.com> to show recursive dependencies for Java and Ruby Projects.

This fork is very strongly customized for VersionEye. But anyway! Feel free to take a look and get some inspiration :-)

Images
==
Some of the dependency wheels created at VersionEye are on [Pinterest.com](http://pinterest.com/versioneye/pins/). This image below is one example.

![](http://robertreiz.files.wordpress.com/2013/05/screen-shot-2013-05-22-at-3-39-17-pm.png "Dependency Wheel")

Code Example
==
It is very easy to use the library. All you need is HTML div.

```html
<div id="canvas-container"></div>
```

And a little bit JavaScript.

```JavaScript
<script type="text/javascript">
  function render_wheel(){
    canvas_container = document.getElementById("canvas-container")
    if (canvas_container){
      alert("Canvas element is missing!")
      return ;
    }
    var wheel = new DependencyWheel.Remote(false, canvas_container, {
      url: 'YOUR_RESOURCE_RETURNING_JSON.json',
      width: "605",
      height: "605",
      infoBox: "infoBox",
      canvas_id: "canvas",
      canvas_hover_id: "canvas_hover",
      onItemClick: function(item, event){
        window.location.href = "YOUR_NEW_RESOURCE";
      }
    } );
  }
</script>
```

The server resource has to deliver a JSON string with this structure:

```JSON
[
  {
    connections: [
      "id_to_another_node_1"
      "id_to_another_node_1"
      ],
    dependencies: [
      "id_to_another_node_1"
    ],
    text: "Label text of this node",
    id: "id_of_this_node",
    version: "version string"
  }
]
```

Here is a short example:

```JSON
[
  {
    connections: [ "node_2" ],
    dependencies:[ "node_2" ],
    text: "node_1",
    id: "node_1",
    version: "1.0.0"
  },
  {
    connections: [ "node_1" ],
    text: "node_2",
    id: "node_2",
    version: "1.0.0"
  }
]
```

The example above will render 2 nodes who are connected with each other.

License
==
MIT License <http://www.opensource.org/licenses/MIT>
