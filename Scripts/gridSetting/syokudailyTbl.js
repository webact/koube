
var products4 = [];
products4[0] = { "年": "小学部", "組": 1, "児童1": 22, "職員1": 1, "児童2": 21, "職員2": 1, "児童3": 22, "職員3": 1, "児童4": 21, "職員4": 1, "児童5": 22, "職員5": 1, "児童6": 21, "職員6": 1, "児童7": 0, "職員7": 0, "児童8": 0, "職員8": 0, "児童9": 0, "職員9": 0, "児童10": 0, "職員10": 0, "児童11": 0, "職員11": 0, "児童T": 129, "職員T": 6 };
products4[1] = { "年": "小学部", "組": 2, "児童1": 21, "職員1": 1, "児童2": 20, "職員2": 1, "児童3": 21, "職員3": 1, "児童4": 21, "職員4": 1, "児童5": 21, "職員5": 1, "児童6": 20, "職員6": 1, "児童7": 0, "職員7": 0, "児童8": 0, "職員8": 0, "児童9": 0, "職員9": 0, "児童10": 0, "職員10": 0, "児童11": 0, "職員11": 0, "児童T": 124, "職員T": 6 };
products4[2] = { "年": "小学部", "組": 3, "児童1": 22, "職員1": 1, "児童2": 22, "職員2": 1, "児童3": 23, "職員3": 1, "児童4": 22, "職員4": 1, "児童5": 23, "職員5": 1, "児童6": 22, "職員6": 1, "児童7": 0, "職員7": 0, "児童8": 0, "職員8": 0, "児童9": 0, "職員9": 0, "児童10": 0, "職員10": 0, "児童11": 0, "職員11": 0, "児童T": 133, "職員T": 6 };
products4[3] = { "年": "小学部", "組": 4, "児童1": 20, "職員1": 1, "児童2": 20, "職員2": 1, "児童3": 21, "職員3": 1, "児童4": 20, "職員4": 1, "児童5": 21, "職員5": 1, "児童6": 20, "職員6": 1, "児童7": 0, "職員7": 0, "児童8": 0, "職員8": 0, "児童9": 0, "職員9": 0, "児童10": 0, "職員10": 0, "児童11": 0, "職員11": 0, "児童T": 120, "職員T": 6 };
products4[4] = { "年": "小学部", "組": 5, "児童1": 22, "職員1": 1, "児童2": 22, "職員2": 1, "児童3": 22, "職員3": 1, "児童4": 21, "職員4": 1, "児童5": 22, "職員5": 1, "児童6": 22, "職員6": 1, "児童7": 0, "職員7": 0, "児童8": 0, "職員8": 0, "児童9": 0, "職員9": 0, "児童10": 0, "職員10": 0, "児童11": 0, "職員11": 0, "児童T": 131, "職員T": 6 };
products4[5] = { "年": "小学部", "組": 6, "児童1": 22, "職員1": 1, "児童2": 23, "職員2": 1, "児童3": 23, "職員3": 1, "児童4": 22, "職員4": 1, "児童5": 23, "職員5": 1, "児童6": 23, "職員6": 1, "児童7": 0, "職員7": 0, "児童8": 0, "職員8": 0, "児童9": 0, "職員9": 0, "児童10": 0, "職員10": 0, "児童11": 0, "職員11": 0, "児童T": 136, "職員T": 6 };
products4[6] = { "年": "職員室", "組": "", "児童1": null, "職員1": 5, "児童2": null, "職員2": null, "児童3": null, "職員3": null, "児童4": null, "職員4": null, "児童5": null, "職員5": null, "児童6": null, "職員6": null, "児童7": null, "職員7": null, "児童8": null, "職員8": null, "児童9": null, "職員9": null, "児童10": null, "職員10": null, "児童11": null, "職員11": null, "児童T": 0, "職員T": 5 };

var products2 = [];
products2[0] = { "低学年": 253, "中学年": 253, "高学年": 267,"職員": 77 };

var products3 = [];
products3[0] = { "総計": 1623 };


var products1 = [];
products4[0] = { "乳アレルギー数": 4, "基準本数": 811 };

var products5 = [];
products5[0] = { "基本": 811, "代替": 0 };


$.ig.loader({
    scriptPath: "../../Scripts/",
    cssPath: "../../Content/",
    resources: "igGrid.MultiColumnHeaders,CellMerging.Updating,igCombo",
    theme: "infragistics"
});

$.ig.loader(function () {
    $("#Grid1").live("iggridrendered", function (event, args) {
        // right-justify text in the third column 
        args.owner.element.find("tr td:nth-child(2)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(3)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(4)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(5)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(6)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(7)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(8)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(9)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(10)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(11)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(12)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(13)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(14)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(15)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(16)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(17)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(18)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(19)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(20)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(21)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(22)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(23)").css("text-align", "right");
        args.owner.element.find("tr td:nth-child(24)").css("text-align", "right");
    });

    $("#Grid1").igGrid({
        primaryKey: "年",
        autoGenerateColumns: false,
        width: "100%",
        hight: "100%",
        columns: [
            { headerText: "年", key: "年", dataType: "string", width: "90px" },
            { headerText: "組", key: "組", dataType: "string", width: "90px" },
            { headerText: "1",
                group: [
                 { headerText: "児", key: "児童1", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員1", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "2",
                group: [
                 { headerText: "児", key: "児童2", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員2", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "3",
                group: [
                 { headerText: "児", key: "児童3", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員3", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "4",
                group: [
                 { headerText: "児", key: "児童4", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員4", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "5",
                group: [
                 { headerText: "児", key: "児童5", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員5", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "6",
                group: [
                 { headerText: "児", key: "児童6", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員6", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "7",
                group: [
                 { headerText: "児", key: "児童7", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員7", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "8",
                group: [
                 { headerText: "児", key: "児童8", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員8", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "9",
                group: [
                 { headerText: "児", key: "児童9", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員9", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "10",
                group: [
                 { headerText: "児", key: "児童10", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員10", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "11",
                group: [
                 { headerText: "児", key: "児童11", dataType: "number", width: "40px" },
                 { headerText: "職", key: "職員11", dataType: "number", width: "40px" }
            ]
            },
            { headerText: "計",
                group: [
                 { headerText: "児", key: "児童T", dataType: "number", width: "45px" },
                 { headerText: "職", key: "職員T", dataType: "number", width: "45px" }
            ]
            },
        ],
        dataSource: products4,
        features: [
        {
            name: 'MultiColumnHeaders'
        },
        {
            name: 'CellMerging',
            cellsMerging: function (evt, ui) {
                if (ui.value != "小学部" && ui.value != "中学部" && ui.value != "高等部") {
                    return false;
                }
            },
            initialState: "merged"
        },
                    {
                name : 'Updating',
                enableAddRow: false,
                enableDeleteRow: false,
                columnSettings: [
                    {
                        columnKey: "年",
                        editorOptions: { readOnly: true }
                    },
                    {
                        columnKey: "組", 
                        editorOptions: { readOnly: true }
                    },
                ]
            }
    ]
    });
});

$.ig.loader(function () {
    $("#Grid2").igGrid({
        primaryKey: "低学年",
        autoGenerateColumns: false,
        editmode: 'none',
        columns: [
            { headerText: "低学年", key: "低学年", dataType: "number", width: "100px" },
            { headerText: "中学年", key: "中学年", dataType: "number", width: "100px" },
            { headerText: "高学年", key: "高学年", dataType: "number", width: "100px" },
            { headerText: "職員数", key: "職員", dataType: "number", width: "100px" },
        ],
        dataSource: products2,
        features: [
           {
               name: 'MultiColumnHeaders'
           },
        ]
    });
});

$.ig.loader(function () {
    $("#Grid3").igGrid({
        primaryKey: "総計",
        autoGenerateColumns: false,
        editmode: 'none',
        columns: [
            { headerText: "総計", key: "総計", dataType: "number", width: "100px" },
        ],
        dataSource: products3,
        features: [
           {
               name: 'MultiColumnHeaders'
           },
        ]
    });
});

$.ig.loader(function () {
    $("#Grid4").igGrid({
        primaryKey: "乳アレルギー数",
        autoGenerateColumns: false,
        editmode: 'none',
        columns: [
            { headerText: "乳アレルギー数", key: "乳アレルギー数", dataType: "number", width: "120px" },
            { headerText: "基準本数", key: "基準本数", dataType: "number", width: "100px" },
        ],
        dataSource: products1,
        features: [
           {
               name: 'MultiColumnHeaders'
           },
        ]
    });
});

$.ig.loader(function () {
    $("#Grid5").igGrid({
        primaryKey: "基本",
        autoGenerateColumns: false,
        editmode: 'none',
        columns: [
            { headerText: "基本", key: "基本", dataType: "number", width: "100px" },
            { headerText: "代替", key: "代替", dataType: "number", width: "100px" },
        ],
        dataSource: products5,
        features: [
           {
               name: 'MultiColumnHeaders'
           },
        ]
    });
   });
