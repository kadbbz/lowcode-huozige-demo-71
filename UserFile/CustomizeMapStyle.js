Forguncy.Helper.preSetEchartOption = function (option, pageName, chartName) {
    if (pageName == "大屏(销售信息)" && chartName == "Chart1") {
        option.series[0].left = 0;
        option.series[0].right = 0;
        option.visualMap.left = "5%";
        option.visualMap.itemGap = 20;
    }
    else if (pageName == "图表大屏2" && chartName == "Chart7") {
        //option.series[0].radius -= 10;
        //option.series[0].labelLine = { length: 10, length2: 10 };
        option.series[0].label.position = "inside";
    }
    else if (pageName == "图表大屏2" && chartName == "Chart11") {
        //option.series[0].radius -= 10;
        //option.series[0].labelLine = { length: 10, length2: 10 };
        option.series[0].label.position = "right";
        option.series[1].label.position = "right";

        option.series[0].label.distance = 3;
        option.series[1].label.distance = 3;
    }
}
