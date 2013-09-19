Namespace koube
    Public Class syokudailyController
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
                New SelectListItem() With {.Value = "2012", .Text = "2012"},
                New SelectListItem() With {.Value = "2013", .Text = "2013"},
                New SelectListItem() With {.Value = "2014", .Text = "2013"}
            }

            ViewBag.listbox3 = New SelectListItem() {
                New SelectListItem() With {.Value = "1", .Text = "1"},
                New SelectListItem() With {.Value = "2", .Text = "2"},
                New SelectListItem() With {.Value = "3", .Text = "3"},
                New SelectListItem() With {.Value = "4", .Text = "4"}
            }
            ViewData("reqDay") = "2013年08月08日"
            ViewData("message") = "ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"
            Return View()
        End Function

    End Class
End Namespace
