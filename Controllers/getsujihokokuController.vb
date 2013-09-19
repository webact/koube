Namespace koube
    Public Class getsujihokokuController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /getsujihokoku

        Function Index() As ActionResult
            ViewData("Title") = "月次報告・発注状況一覧"
            ViewBag.listbox1 = New SelectListItem() {
                New SelectListItem() With {.Value = "777", .Text = "777 LLLLLLLLLL"},
                New SelectListItem() With {.Value = "888", .Text = "888 MMMMMMMMMM"},
                New SelectListItem() With {.Value = "999", .Text = "999 NNNNNNNNNN"}
            }

            ViewBag.listbox2 = New SelectListItem() {
                New SelectListItem() With {.Value = "777", .Text = "777 LLLLLLLLLL"},
                New SelectListItem() With {.Value = "888", .Text = "888 MMMMMMMMMM"},
                New SelectListItem() With {.Value = "999", .Text = "999 NNNNNNNNNN"}
            }

            ViewBag.listbox3 = New SelectListItem() {
                New SelectListItem() With {.Value = "201300", .Text = "            "},
                New SelectListItem() With {.Value = "201307", .Text = "平成25年07月"},
                New SelectListItem() With {.Value = "201306", .Text = "平成25年06月"},
                New SelectListItem() With {.Value = "201305", .Text = "平成25年05月"},
                New SelectListItem() With {.Value = "201304", .Text = "平成25年04月"}
            }
            ViewData("message") = "ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"
            Return View()
        End Function

    End Class
End Namespace
