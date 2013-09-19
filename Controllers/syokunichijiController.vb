Namespace koube
    Public Class syokunichijiController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /getsujihokoku

        Function Index() As ActionResult
            ViewData("Title") = "食数日次確認"
            ViewBag.listbox1 = New SelectListItem() {
                New SelectListItem() With {.Value = "施設1", .Text = "学校ＡＡＡＡＡＡＡＡＡＡＡＡＡ"},
                New SelectListItem() With {.Value = "施設2", .Text = "学校ＢＢＢＢＢＢＢＢＢＢＢＢＢ"},
                New SelectListItem() With {.Value = "施設3", .Text = "学校ＣＣＣＣＣＣＣＣＣＣＣＣＣ"}
            }

            ViewBag.listbox2 = New SelectListItem() {
                New SelectListItem() With {.Value = "2011", .Text = "平成23"},
                New SelectListItem() With {.Value = "2012", .Text = "平成24"},
                New SelectListItem() With {.Value = "2013", .Text = "平成25"},
                New SelectListItem() With {.Value = "2014", .Text = "平成26"}
            }

            ViewBag.listbox3 = New SelectListItem() {
                New SelectListItem() With {.Value = "01", .Text = "01"},
                New SelectListItem() With {.Value = "02", .Text = "02"},
                New SelectListItem() With {.Value = "03", .Text = "03"},
                New SelectListItem() With {.Value = "04", .Text = "04"},
                New SelectListItem() With {.Value = "05", .Text = "05"},
                New SelectListItem() With {.Value = "06", .Text = "06"},
                New SelectListItem() With {.Value = "07", .Text = "07"},
                New SelectListItem() With {.Value = "08", .Text = "08"},
                New SelectListItem() With {.Value = "09", .Text = "09"},
                New SelectListItem() With {.Value = "10", .Text = "10"},
                New SelectListItem() With {.Value = "11", .Text = "11"},
                New SelectListItem() With {.Value = "12", .Text = "12"}
            }

            ViewBag.listbox4 = New SelectListItem() {
                New SelectListItem() With {.Value = "01", .Text = "01日"},
                New SelectListItem() With {.Value = "02", .Text = "02日"},
                New SelectListItem() With {.Value = "03", .Text = "03日"},
                New SelectListItem() With {.Value = "04", .Text = "04日"},
                New SelectListItem() With {.Value = "05", .Text = "05日"},
                New SelectListItem() With {.Value = "06", .Text = "06日"},
                New SelectListItem() With {.Value = "07", .Text = "07日"},
                New SelectListItem() With {.Value = "08", .Text = "08日"},
                New SelectListItem() With {.Value = "09", .Text = "09日"},
                New SelectListItem() With {.Value = "10", .Text = "10日"},
                New SelectListItem() With {.Value = "11", .Text = "11日"},
                New SelectListItem() With {.Value = "12", .Text = "12日"},
                New SelectListItem() With {.Value = "13", .Text = "13日"},
                New SelectListItem() With {.Value = "14", .Text = "14日"},
                New SelectListItem() With {.Value = "15", .Text = "15日"},
                New SelectListItem() With {.Value = "16", .Text = "16日"},
                New SelectListItem() With {.Value = "17", .Text = "17日"},
                New SelectListItem() With {.Value = "18", .Text = "18日"},
                New SelectListItem() With {.Value = "19", .Text = "19日"},
                New SelectListItem() With {.Value = "20", .Text = "20日"},
                New SelectListItem() With {.Value = "21", .Text = "21日"},
                New SelectListItem() With {.Value = "22", .Text = "22日"},
                New SelectListItem() With {.Value = "23", .Text = "23日"},
                New SelectListItem() With {.Value = "24", .Text = "24日"},
                New SelectListItem() With {.Value = "25", .Text = "25日"},
                New SelectListItem() With {.Value = "26", .Text = "26日"},
                New SelectListItem() With {.Value = "27", .Text = "27日"},
                New SelectListItem() With {.Value = "28", .Text = "28日"},
                New SelectListItem() With {.Value = "29", .Text = "29日"},
                New SelectListItem() With {.Value = "30", .Text = "30日"},
                New SelectListItem() With {.Value = "31", .Text = "31日"}
            }

            ViewBag.listbox5 = New SelectListItem() {
                New SelectListItem() With {.Value = "学年01", .Text = "小学1"},
                New SelectListItem() With {.Value = "学年02", .Text = "小学2"},
                New SelectListItem() With {.Value = "学年03", .Text = "小学3"},
                New SelectListItem() With {.Value = "学年04", .Text = "小学4"},
                New SelectListItem() With {.Value = "学年05", .Text = "小学5"},
                New SelectListItem() With {.Value = "学年06", .Text = "小学6"},
                New SelectListItem() With {.Value = "学年07", .Text = "中学1"},
                New SelectListItem() With {.Value = "学年08", .Text = "中学2"},
                New SelectListItem() With {.Value = "学年09", .Text = "中学3"},
                New SelectListItem() With {.Value = "学年10", .Text = "高等1"},
                New SelectListItem() With {.Value = "学年11", .Text = "高等2"},
                New SelectListItem() With {.Value = "学年12", .Text = "高等3"},
                New SelectListItem() With {.Value = "学年13", .Text = "特　別"},
                New SelectListItem() With {.Value = "学年14", .Text = "職員室"}
            }

            ViewBag.listbox6 = New SelectListItem() {
                New SelectListItem() With {.Value = "種別1", .Text = "小学部"},
                New SelectListItem() With {.Value = "種別2", .Text = "中学部"},
                New SelectListItem() With {.Value = "種別3", .Text = "高等部"},
                New SelectListItem() With {.Value = "種別4", .Text = "特　別"},
                New SelectListItem() With {.Value = "種別5", .Text = "職員室"}
            }

            ViewBag.listbox7 = New SelectListItem() {
                New SelectListItem() With {.Value = "クラス01", .Text = "1組"},
                New SelectListItem() With {.Value = "クラス02", .Text = "2組"},
                New SelectListItem() With {.Value = "クラス03", .Text = "3組"},
                New SelectListItem() With {.Value = "クラス04", .Text = "4組"},
                New SelectListItem() With {.Value = "クラス05", .Text = "5組"},
                New SelectListItem() With {.Value = "クラス06", .Text = "6組"},
                New SelectListItem() With {.Value = "クラス07", .Text = "A組"},
                New SelectListItem() With {.Value = "クラス08", .Text = "B組"},
                New SelectListItem() With {.Value = "クラス09", .Text = "C組"},
                New SelectListItem() With {.Value = "クラス10", .Text = "D組"},
                New SelectListItem() With {.Value = "クラス11", .Text = "E組"},
                New SelectListItem() With {.Value = "クラス12", .Text = "F組"},
                New SelectListItem() With {.Value = "クラス13", .Text = " - "}
            }

            ViewBag.listbox8 = New SelectListItem() {
                New SelectListItem() With {.Value = "変更理由01", .Text = "ALT - サポーター等"},
                New SelectListItem() With {.Value = "変更理由02", .Text = "学級閉鎖"},
                New SelectListItem() With {.Value = "変更理由03", .Text = "全校中止"},
                New SelectListItem() With {.Value = "変更理由04", .Text = "校外学習"},
                New SelectListItem() With {.Value = "変更理由04", .Text = "アレルギー対応献立"},
                New SelectListItem() With {.Value = "変更理由04", .Text = "その他"},
                New SelectListItem() With {.Value = "変更理由05", .Text = " - "}
           }
            ViewData("reqDay") = "2013年08月08日"
            ViewData("message") = "ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"

            ' add
            Dim model1 As New syokunichijiModels(Session("OraDatabase"))
            model1.SetData()
            ViewData("Title") = model1.ht(0, 0)
            'ViewData("HT") = model1.ht

            Return View()
        End Function

    End Class
End Namespace
