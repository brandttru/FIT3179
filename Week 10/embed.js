var vis_1 = "../Week 9/visualisation.vg.json";

vegaEmbed("#week9", vis_1).then(function(result) {
    result.view;
}).catch(console.error);