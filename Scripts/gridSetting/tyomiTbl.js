var products = [];
products[0] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0001", "食品/規格名": "規格名ＡＡＡＡＡ", "荷姿": "荷姿A", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＡＡＡＡＡ商店", "ボタン": "　　" };
products[1] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0002", "食品/規格名": "規格名ＢＢＢＢＢ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＢＢＢＢＢ商店", "ボタン": "　　" };
products[2] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0003", "食品/規格名": "規格名ＣＣＣＣＣ", "荷姿": "荷姿A", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＣＣＣＣＣ物産", "ボタン": "　　" };
products[3] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0004", "食品/規格名": "規格名ＤＤＤＤＤ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＤＤＤＤＤ商社", "ボタン": "　　" };
products[4] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0005", "食品/規格名": "規格名ＥＥＥＥＥ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＥＥＥＥＥ食品", "ボタン": "　　" };
products[5] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0006", "食品/規格名": "規格名ＦＦＦＦＦ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＦＦＦＦＦ食品", "ボタン": "　　" };
products[6] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0007", "食品/規格名": "規格名ＧＧＧＧＧ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＧＧＧＧＧ物産", "ボタン": "　　" };
products[7] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0008", "食品/規格名": "規格名ＨＨＨＨＨ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＨＨＨＨＨ食品", "ボタン": "　　" };
products[8] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0009", "食品/規格名": "規格名ＩＩＩＩＩ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＩＩＩＩＩ商店", "ボタン": "　　" };
products[9] = { "納入日": "平成25年08月22日", "食品/規格コード": "0001-0010", "食品/規格名": "規格名ＪＪＪＪＪ", "荷姿": "荷姿B", "発注数量": "999,999", "発注量計算時数量": "999,999", "仕入先": "ＪＪＪＪＪ食品", "ボタン": "　　" };

$.ig.loader({
    scriptPath: "../../Scripts/",
    cssPath: "../../Content/",
    resources: "igGrid.Updating"
});

$.ig.loader(function () {
    $("#grid1").live("iggridrendered", function (event, args) {
      // right-justify text in the third column 
        args.owner.element.find("tr td:nth-child(5)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(6)").css("text-align", "right");
    });

    $("#grid1").igGrid({
        primaryKey: "仕入先",
       // height: "300px",
        width: "1000px",
        height: "100%",
        //width: "100%",

        autoGenerateColumns: false,
        editMode: "Cell",
        columns: [

            { headerText: "納入日", key: "納入日", dataType: "string", width: "150px" },
            { headerText: "食品/規格コード", key: "食品/規格コード", dataType: "string", width: "120px" },
            { headerText: "食品/規格名", key: "食品/規格名", dataType: "string", width: "200px" },
            { headerText: "荷姿", key: "荷姿", dataType: "string", width: "100px" },
            { headerText: "発注量計算時数量", key: "発注量計算時数量", dataType: "string", align: "right", width: "120px" },
            { headerText: "発注数量", key: "発注数量", dataType: "string", align: "right", width: "100px" },
            { headerText: "仕入先", key: "仕入先", dataType: "string", width: "200px" },
        ],
        dataSource: products,
        features: [
        {
            name: 'Updating',
            enableAddRow: false,
            enableDeleteRow: false,
            columnSettings: [{
                columnKey: "食品コード",
                editorType: 'string'
            }]
        }
    ]
    });
});