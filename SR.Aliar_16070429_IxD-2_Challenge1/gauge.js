
<!-- amCharts javascript sources -->
<!-- amCharts javascript code -->
  AmCharts.makeChart("chartdiv",
    {
      "type": "gauge",
      "clockWiseOnly": true,
      "faceBorderWidth": 4,
      "startEffect": "easeOutSine",
      "theme": "black",
      "touchClickDuration": 1,
      "arrows": [
        {
          "alpha": 0.3,
          "borderAlpha": 0.52,
          "clockWiseOnly": true,
          "color": "#4C9EBF",
          "id": "GaugeArrow-1",
          "innerRadius": "6%",
          "nailAlpha": 1,
          "nailBorderThickness": 0,
          "nailRadius": 13,
          "value": 27153
        }
      ],
      "axes": [
        {
          "axisThickness": 1,
          "bottomText": "27,153 km/h",
          "bottomTextYOffset": -20,
          "endAngle": 130,
          "endValue": 30000,
          "id": "GaugeAxis-1",
          "startAngle": -180,
          "valueInterval": 2500,
          "bands": [
            {
              "color": "#00CC00",
              "endValue": 15000,
              "id": "GaugeBand-1",
              "startValue": 0
            },
            {
              "color": "#ffac29",
              "endValue": 25000,
              "id": "GaugeBand-2",
              "startValue": 15000
            },
            {
              "color": "#ea3838",
              "endValue": 30000,
              "id": "GaugeBand-3",
              "innerRadius": "95%",
              "startValue": 25000
            }
          ]
        }
      ],
      "allLabels": [],
      "balloon": {},
      "titles": [
        {
          "color": "#4C9EBF",
          "id": "Title-1",
          "size": 15,
          "text": "Speed"
        }
      ]
    }
  );
