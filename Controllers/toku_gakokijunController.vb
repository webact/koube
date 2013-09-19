Namespace koube
    Public Class toku_gakokijunController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /gakokijun

        Function Index() As ActionResult
            ViewData("Title") = "学校基準人数登録"
            ViewBag.schoolName = New SelectListItem() {
                New SelectListItem() With {.Value = "AAA", .Text = "AAAAAAAAAAAAA学校"},
                New SelectListItem() With {.Value = "BBB", .Text = "BBBBBBBBBBBBB学校"},
                New SelectListItem() With {.Value = "XXX", .Text = "XXXXXXXXXXXXX学校"},
                New SelectListItem() With {.Value = "ZZZ", .Text = "ZZZZZZZZZZZZZZZZZZ学校"}
            }

            ViewBag.listbox1 = New SelectListItem() {
                New SelectListItem() With {.Value = "A", .Text = "仕入先A"},
                New SelectListItem() With {.Value = "B", .Text = "仕入先B"},
                New SelectListItem() With {.Value = "C", .Text = "仕入先C"}
            }
            ViewData("message") = "ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"
            Return View()
        End Function

    End Class
End Namespace
