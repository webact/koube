﻿var products = [];
products[0] = { "仕入先": "ＡＡＡＡＡＡフーヅ", "食品名": "ＡＡＡＡＡＡ", "納入日": "平成25年08月22日", "時間": "13:01:57", "実施日": "平成25年08月23日", "食品コード": "0001", "規格": "ＡＡＡＡ規格", "荷姿": "荷姿A", "単価": "1,100", "発注数量": "2", "発注金額": "2,200", "仕入先への指示": "指示A", "合算方法": "合算方法A" };
products[1] = { "仕入先": "ＢＢＢＢＢＢ食品店", "食品名": "ＢＢＢＢＢＢ", "納入日": "平成25年08月22日", "時間": "18:31:12", "実施日": "平成25年08月23日", "食品コード": "0002", "規格": "ＢＢＢＢ規格", "荷姿": "荷姿B", "単価": "1,200", "発注数量": "5", "発注金額": "6,000", "仕入先への指示": "指示B", "合算方法": "合算方法B" };
products[2] = { "仕入先": "ＣＣＣＣＣＣＣ食品", "食品名": "ＣＣＣＣＣＣ", "納入日": "平成25年08月22日", "時間": "13:01:57", "実施日": "平成25年08月23日", "食品コード": "0003", "規格": "ＣＣＣＣ規格", "荷姿": "荷姿A", "単価": "1,300", "発注数量": "2", "発注金額": "2,600", "仕入先への指示": "指示A", "合算方法": "合算方法A" };
products[3] = { "仕入先": "ＤＤＤＤＤＤ青果店", "食品名": "ＤＤＤＤＤＤ", "納入日": "平成25年08月22日", "時間": "18:31:12", "実施日": "平成25年08月23日", "食品コード": "0004", "規格": "ＤＤＤＤ規格", "荷姿": "荷姿B", "単価": "1,400", "発注数量": "10", "発注金額": "14,000", "仕入先への指示": "指示B", "合算方法": "合算方法B" };
products[4] = { "仕入先": "ＥＥＥＥＥＥＥ商店", "食品名": "ＥＥＥＥＥＥ", "納入日": "平成25年08月22日", "時間": "18:31:12", "実施日": "平成25年08月23日", "食品コード": "0005", "規格": "ＥＥＥＥ規格", "荷姿": "荷姿B", "単価": "1,500", "発注数量": "15", "発注金額": "22,500", "仕入先への指示": "指示B", "合算方法": "合算方法B" };
products[5] = { "仕入先": "ＦＦＦＦＦＦＦ商店", "食品名": "ＦＦＦＦＦＦ", "納入日": "平成25年08月22日", "時間": "18:31:12", "実施日": "平成25年08月23日", "食品コード": "0006", "規格": "ＦＦＦＦ規格", "荷姿": "荷姿B", "単価": "1,600", "発注数量": "22", "発注金額": "35,200", "仕入先への指示": "指示B", "合算方法": "合算方法B" };
products[6] = { "仕入先": "ＧＧＧＧＧＧ食品店", "食品名": "ＧＧＧＧＧＧ", "納入日": "平成25年08月22日", "時間": "18:31:12", "実施日": "平成25年08月23日", "食品コード": "0007", "規格": "ＧＧＧＧ規格", "荷姿": "荷姿B", "単価": "1,700", "発注数量": "9", "発注金額": "15,300", "仕入先への指示": "指示B", "合算方法": "合算方法B" };
products[7] = { "仕入先": "ＨＨＨＨＨＨＨ商店", "食品名": "ＨＨＨＨＨＨ", "納入日": "平成25年08月22日", "時間": "18:31:12", "実施日": "平成25年08月23日", "食品コード": "0008", "規格": "ＨＨＨＨ規格", "荷姿": "荷姿B", "単価": "1,800", "発注数量": "12", "発注金額": "69,600", "仕入先への指示": "指示B", "合算方法": "合算方法B" };

$.ig.loader({
    scriptPath: "../../Scripts/",
    cssPath: "../../Content/",
    resources: "igGrid.Updating"
});

$.ig.loader(function () {
    $("#grid1").live("iggridrendered", function (event, args) {
        // right-justify text in the third column 
        args.owner.element.find("tr td:nth-child(7)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(8)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(9)").css("text-align", "right");
    });

    $("#grid1").igGrid({
        primaryKey: "食品コード",
        height: "100%",
        width: "100%",
        autoGenerateColumns: false,
        editMode: "Cell",
        columns: [
            { headerText: "食品コード", key: "食品コード", dataType: "string", width: "70px" },
            { headerText: "食品名", key: "食品名", dataType: "string", width: "100px" },
            { headerText: "納入日", key: "納入日", dataType: "string", width: "140px" },
            { headerText: "実施日", key: "実施日", dataType: "string", width: "140px" },
            { headerText: "規格", key: "規格", dataType: "string", width: "90px" },
            { headerText: "荷姿", key: "荷姿", dataType: "string", width: "90px" },
            { headerText: "仕入先", key: "仕入先", dataType: "string", width: "170px" },
            { headerText: "単価", key: "単価", dataType: "string", width: "60px" },
            { headerText: "発注数量", key: "発注数量", dataType: "string", width: "80px" },
            { headerText: "発注金額", key: "発注金額", dataType: "string", width: "80px" },
        ],
        dataSource: products,
        features: [
        {
            name: 'Updating',
            columnSettings: [{
                columnKey: "単価",
                editorType: 'string'
            }]
        }
    ]
    });
});