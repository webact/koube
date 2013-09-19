var products = [];
products[0] = { "納付日": "平成25年08月22日", "銀行名": "ＡＡＡＡＡ銀行", "支店名": "ＡＡＡＡＡ支店", "納付金額": 111110, "振込手数料": 210, "ボタン": "変更" };
products[1] = { "納付日": "平成25年08月22日", "銀行名": "ＢＢＢＢＢＢ銀行", "支店名": "ＢＢＢ支店", "納付金額": 22220, "振込手数料": 310, "ボタン": "変更" };
products[2] = { "納付日": "平成25年08月22日", "銀行名": "ＣＣＣＣＣＣ信用金庫", "支店名": "ＣＣＣＣ支店", "納付金額": 33330, "振込手数料": 0, "ボタン": "変更" };
products[3] = { "納付日": "平成25年08月22日", "銀行名": "ＤＤＤＤＤＤ銀行", "支店名": "ＤＤＤＤＤ支店", "納付金額": 4440, "振込手数料": 210, "ボタン": "変更" };
products[4] = { "納付日": "平成25年08月22日", "銀行名": "ＥＥＥＥＥＥＥ信用金庫", "支店名": "ＥＥＥ支店", "納付金額": 55550, "振込手数料": 0, "ボタン": "変更" };
products[5] = { "納付日": "平成25年08月22日", "銀行名": "ＦＦＦＦＦＦＦ銀行", "支店名": "ＦＦＦＦ支店", "納付金額": 666660, "振込手数料": 210, "ボタン": "変更" };

$.ig.loader({
    scriptPath: "../../Scripts/",
    cssPath: "../../Content/",
    // resources: "igGrid.Updating"
    resources: "igGrid.MultiColumnHeaders,CellMerging.Updating"
});

$.ig.loader(function () {
    $("#grid1").live("iggridrendered", function (event, args) {
        // right-justify text in the third column 
        args.owner.element.find("tr td:nth-child(5)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(6)").css("text-align", "right");
    });

    $("#grid1").igGrid({
        primaryKey: "施設名",
        // height: "300px",
        // width: "1100px",
        height: "100%",
        // width: "100%",
        width: "900px",
        autoGenerateColumns: false,
        editMode: "Cell",
        columns: [
            { headerText: "納付日", key: "納付日", dataType: "string", width: "160px" },
            { headerText: "銀行名", key: "銀行名", dataType: "string", width: "250px" },
            { headerText: "支店名", key: "支店名", dataType: "string", width: "250px" },
            { headerText: "納付金額", key: "納付金額", dataType: "number", width: "120px" },
            { headerText: "振込手数料", key: "振込手数料", dataType: "number", width: "80px" },
        ],
        dataSource: products,
        features: [
        {

            // name: 'MultiColumnHeaders'
            name: 'Updating',
            columnSettings: [{
                columnKey: "銀行名",
                editorType: 'string'
            }]
        }
    ]
    });
});