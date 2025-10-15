function embed(selector, path) {
    vegaEmbed(selector, path).then(result => {
        result.view;
    }).catch(console.error);
}

embed("#line_chart", "line_chart.vg.json");
embed("#bubble_chart", "bubble_chart.vg.json");
embed("#heatmap", "heatmap.vg.json");
embed("#line_chart_gdp", "line_chart_gdp.vg.json");
embed("#map", "map.vg.json");