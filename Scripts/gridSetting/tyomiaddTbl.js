var products = [];
products[0] = { "納入日": "08月22日", "食品/規格名": "ＡＡＡＡ食材 規格Ａ", "荷姿": "荷姿A", "発注数量": "999,999" };
products[1] = { "納入日": "08月22日", "食品/規格名": "ＢＢＢＢ食材 規格Ｂ", "荷姿": "荷姿B", "発注数量": "999,999" };
products[2] = { "納入日": "08月22日", "食品/規格名": "ＢＢＢＢ食材 規格Ｃ", "荷姿": "荷姿A", "発注数量": "999,999" };
products[3] = { "納入日": "08月22日", "食品/規格名": "ＣＣＣＣ食材 規格Ａ", "荷姿": "荷姿B", "発注数量": "999,999" };
products[4] = { "納入日": "08月22日", "食品/規格名": "ＤＤＤＤ食材 規格Ｂ", "荷姿": "荷姿B", "発注数量": "999,999" };

$.ig.loader({
    scriptPath: "../../Scripts/",
    cssPath: "../../Content/",
    resources: "igGrid.Updating"
});

$.ig.loader(function () {
    $("#grid1").live("iggridrendered", function (event, args) {
        // right-justify text in the third column 
        args.owner.element.find("tr td:nth-child(4)").css("text-align", "right");
        //args.owner.element.find("tr td:nth-child(9)").css("text-align", "right");
        //args.owner.element.find("tr td:nth-child(10)").css("text-align", "right");
    });

    $("#grid1").igGrid({
        primaryKey: "食品コード",
        height: "100%",
        width: "660px",
        autoGenerateColumns: false,
        editMode: "Cell",
        columns: [
            { headerText: "納入日", key: "納入日", dataType: "string", width: "110px" },
            { headerText: "食品/規格名", key: "食品/規格名", dataType: "string", width: "300px" },
            { headerText: "荷姿", key: "荷姿", dataType: "string", width: "120px" },
            { headerText: "発注数量", key: "発注数量", dataType: "string", width: "120px" },
 
        ],
        dataSource: products,
        features: [
        {
            name: 'Updating',
            enableAddRow: false,
            enableDeleteRow: false,
            columnSettings: [{
                columnKey: "単価",
                editorType: 'string'
            }]
        }
    ]
    });
});