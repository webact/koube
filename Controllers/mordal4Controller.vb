Namespace koube
    Public Class mordal4Controller
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /tyomi

        Function Index() As ActionResult

            ViewBag.listbox1 = New SelectListItem() {
                New SelectListItem() With {.Value = "仕入先A", .Text = "規格Ａ/荷姿なし/ＡＡＡＡ商店/9999"},
                New SelectListItem() With {.Value = "仕入先B", .Text = "規格Ｂ/荷姿なし/ＢＢＢ業者/9999"},
                New SelectListItem() With {.Value = "仕入先C", .Text = "ＣＣＣ業者/荷姿なし/9999"},
                New SelectListItem() With {.Value = "仕入先D", .Text = "ＤＤＤ業者/荷姿なし/9999"}
            }

            ViewBag.listbox2 = New SelectListItem() {
    New SelectListItem() With {.Value = "仕入先A", .Text = "0001"},
    New SelectListItem() With {.Value = "仕入先B", .Text = "0001"},
    New SelectListItem() With {.Value = "仕入先C", .Text = "0001"},
    New SelectListItem() With {.Value = "仕入先D", .Text = "0001"}
}

            Return View()
        End Function

        '
        ' GET: /tyomi/Details/5

        Function Details(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' GET: /tyomi/Create

        Function Create() As ActionResult
            Return View()
        End Function

        '
        ' POST: /tyomi/Create

        <HttpPost()> _
        Function Create(ByVal collection As FormCollection) As ActionResult
            Try
                ' TODO: Add insert logic here
                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function

        '
        ' GET: /tyomi/Edit/5

        Function Edit(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' POST: /tyomi/Edit/5

        <HttpPost()> _
        Function Edit(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
            Try
                ' TODO: Add update logic here

                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function

        '
        ' GET: /tyomi/Delete/5

        Function Delete(ByVal id As Integer) As ActionResult
            Return View()
        End Function

        '
        ' POST: /tyomi/Delete/5

        <HttpPost()> _
        Function Delete(ByVal id As Integer, ByVal collection As FormCollection) As ActionResult
            Try
                ' TODO: Add delete logic here

                Return RedirectToAction("Index")
            Catch
                Return View()
            End Try
        End Function
    End Class
End Namespace
