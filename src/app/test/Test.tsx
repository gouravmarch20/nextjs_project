"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartDemo = () => {
  const sentimentData = {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    positive: [75, 68, 82, 65, 90, 78, 85, 72, 88, 76, 83, 79],
    negative: [25, 32, 18, 35, 10, 22, 15, 28, 12, 24, 17, 21],
  };

  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Sentiment Score",
    },
    subtitle: {
      text: "Positive vs Negative sentiment across months",
    },
    xAxis: {
      categories: sentimentData.categories,
      crosshair: true,
      title: {
        text: "Months",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Sentiment Score",
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: " points",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        type: "column",
        name: "Positive Sentiment",
        data: sentimentData.positive,
        color: "#14B8A6",
      },
      {
        type: "column",
        name: "Negative Sentiment",
        data: sentimentData.negative,
        color: "#f87171",
      },
    ],
  };

  return (
    <figure className="highcharts-figure">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <p className="highcharts-description">
        A basic column chart comparing positive vs negative sentiment scores
        across months. Hover a bar to see exact values.
      </p>
    </figure>
  );
};

export default ChartDemo;