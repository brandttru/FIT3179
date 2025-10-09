var vis_1 = "../Week 9/visualisation.vg.json";
var vis_2 = "week10.vg.json"

vegaEmbed("#week9", vis_1).then(function(result) {
    result.view;
}).catch(console.error);

vegaEmbed("#week10", vis_2).then(function(result) {
    result.view;
}).catch(console.error);