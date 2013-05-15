require( [ '../mootools-1.2-core-nc', '../mootools-1.2-more', '../canvastext', '../dependencywheel' ], function( load ) {
    function render_wheel() {
        var canvas_container = document.getElementById("canvas-container")
        if ( canvas_container ) {
            var wheel = new DependencyWheel.Remote(false, canvas_container, {
                url: 'dependencies.json',
                width: "605",
                height: "605",
                infoBox: "infoBox",
                infoNumber: "runtime_recursive_number",
                canvas_id: "canvas",
                canvas_hover_id: "canvas_hover",
                data_border: 70,
                show_label: false,
                resize: false,
                scope: "SCOPE",
                container_id: "canvas-container",
                onItemClick: function ( item, event ) {
                    window.location.href = "#";
                }
            } );
        }
    }

    render_wheel();
} );