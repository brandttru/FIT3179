function embed(selector, path) {
    vegaEmbed(selector, path).then(result => {
        result.view;
    }).catch(console.error);
}

embed("#week9", "../Week 9/visualisation.vg.json")
embed("#week10", "week10.vg.json")