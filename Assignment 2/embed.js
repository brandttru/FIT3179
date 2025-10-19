function embed(selector, path) {
    vegaEmbed(selector, path).then(result => {
        result.view;
    }).catch(console.error);
}

embed("#line_chart_gender", "line_chart_gender.vg.json");
embed("#bubble_chart", "bubble_chart.vg.json");
embed("#heatmap", "heatmap.vg.json");
embed("#line_chart_expenditure", "line_chart_expenditure.vg.json");
embed("#map", "map.vg.json");