Namespace koube
    Public Class toku_syokunichijiController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /getsujihokoku

        Function Index() As ActionResult
            ViewData("Title") = "食数日次確認"
            ViewBag.listbox1 = New SelectListItem() {
                New SelectListItem() With {.Value = "777", .Text = "777 LLLLLLLLLL"},
                New SelectListItem() With {.Value = "888", .Text = "888 MMMMMMMMMM"},
                New SelectListItem() With {.Value = "999", .Text = "999 NNNNNNNNNN"}
            }

            ViewBag.listbox2 = New SelectListItem() {
                New SelectListItem() With {.Value = "2012", .Text = "平成23年"},
                New SelectListItem() With {.Value = "2013", .Text = "平成24年"},
                New SelectListItem() With {.Value = "2014", .Text = "平成25年"}
            }

            ViewBag.listbox3 = New SelectListItem() {
                New SelectListItem() With {.Value = "1", .Text = "1"},
                New SelectListItem() With {.Value = "2", .Text = "2"},
                New SelectListItem() With {.Value = "3", .Text = "3"},
                New SelectListItem() With {.Value = "4", .Text = "4"},
                New SelectListItem() With {.Value = "5", .Text = "5"},
                New SelectListItem() With {.Value = "6", .Text = "6"},
                New SelectListItem() With {.Value = "7", .Text = "7"},
                New SelectListItem() With {.Value = "8", .Text = "8"},
                New SelectListItem() With {.Value = "9", .Text = "9"},
                New SelectListItem() With {.Value = "10", .Text = "10"},
                New SelectListItem() With {.Value = "11", .Text = "11"},
                New SelectListItem() With {.Value = "12", .Text = "12"}
            }
            ViewBag.listbox4 = New SelectListItem() {
                New SelectListItem() With {.Value = "1", .Text = "1"},
                New SelectListItem() With {.Value = "2", .Text = "2"},
                New SelectListItem() With {.Value = "3", .Text = "3"},
                New SelectListItem() With {.Value = "5", .Text = "5"},
                New SelectListItem() With {.Value = "6", .Text = "6"},
                New SelectListItem() With {.Value = "7", .Text = "7"},
                New SelectListItem() With {.Value = "8", .Text = "8"},
                New SelectListItem() With {.Value = "9", .Text = "9"},
                New SelectListItem() With {.Value = "10", .Text = "10"},
                New SelectListItem() With {.Value = "11", .Text = "11"},
                New SelectListItem() With {.Value = "12", .Text = "12"},
                New SelectListItem() With {.Value = "12", .Text = "13"},
                New SelectListItem() With {.Value = "12", .Text = "14"},
                New SelectListItem() With {.Value = "12", .Text = "15"},
                New SelectListItem() With {.Value = "12", .Text = "16"},
                New SelectListItem() With {.Value = "12", .Text = "17"},
                New SelectListItem() With {.Value = "12", .Text = "18"},
                New SelectListItem() With {.Value = "12", .Text = "19"},
                New SelectListItem() With {.Value = "12", .Text = "20"},
                New SelectListItem() With {.Value = "12", .Text = "21"},
                New SelectListItem() With {.Value = "12", .Text = "22"},
                New SelectListItem() With {.Value = "12", .Text = "23"},
                New SelectListItem() With {.Value = "12", .Text = "24"},
                New SelectListItem() With {.Value = "12", .Text = "25"},
                New SelectListItem() With {.Value = "12", .Text = "26"},
                New SelectListItem() With {.Value = "12", .Text = "27"},
                New SelectListItem() With {.Value = "12", .Text = "28"},
                New SelectListItem() With {.Value = "12", .Text = "29"},
                New SelectListItem() With {.Value = "12", .Text = "30"},
                New SelectListItem() With {.Value = "4", .Text = "31"}
            }
            ViewData("reqDay") = "2013年08月08日"
            ViewData("message") = "ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"
            Return View()
        End Function

    End Class
End Namespace
