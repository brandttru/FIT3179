var vis_1 = "visualisation.vg.json";

vegaEmbed("#map", vis_1).then(function(result) {
    result.view;
}).catch(console.error);