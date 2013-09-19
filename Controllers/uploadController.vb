Namespace koube
    Public Class uploadController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /tyomi

        Function Index() As ActionResult
            ViewData("Title") = "「困ったときは」のアップロード"
            ViewBag.listbox1 = New SelectListItem() {
                New SelectListItem() With {.Value = "仕入先A", .Text = "平成25年07月"},
                New SelectListItem() With {.Value = "仕入先B", .Text = "平成25年08月"},
                New SelectListItem() With {.Value = "仕入先C", .Text = "平成25年09月"},
                New SelectListItem() With {.Value = "仕入先D", .Text = "平成25年10月"}
            }
            ViewData("message") = "ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"
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
