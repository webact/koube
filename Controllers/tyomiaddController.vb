Namespace koube
    Public Class tyomiaddController
        Inherits System.Web.Mvc.Controller

        '
        ' GET: /tyomi

        Function Index() As ActionResult
            ViewData("Title") = "調味料等の追加発注報告"
            ViewBag.listbox1 = New SelectListItem() {
                New SelectListItem() With {.Value = "施設1", .Text = "施設ＡＡＡＡＡＡＡＡＡＡＡＡＡ"},
                New SelectListItem() With {.Value = "施設2", .Text = "施設ＢＢＢＢＢＢＢＢＢＢＢＢＢ"},
                New SelectListItem() With {.Value = "施設3", .Text = "施設ＣＣＣＣＣＣＣＣＣＣＣＣＣ"}
            }

            ViewBag.listbox2 = New SelectListItem() {
                New SelectListItem() With {.Value = "仕入先A", .Text = "平成25年08月20日"},
                New SelectListItem() With {.Value = "仕入先B", .Text = "平成25年08月22日"},
                New SelectListItem() With {.Value = "仕入先C", .Text = "平成25年08月24日"},
                New SelectListItem() With {.Value = "仕入先D", .Text = "平成25年08月26日"}
            }

            ViewBag.listbox3 = New SelectListItem() {
                New SelectListItem() With {.Value = "仕入先A", .Text = "醤油　　　　　　　　　　　　　　　　　　"},
                New SelectListItem() With {.Value = "仕入先B", .Text = "味噌　　　　　　　　　　　　　　　　　　"},
                New SelectListItem() With {.Value = "仕入先C", .Text = "化学調味料　　　　　　　　　　　　　　　"},
                New SelectListItem() With {.Value = "仕入先C", .Text = "食塩　　　　　　　　　　　　　　　　　　"},
                New SelectListItem() With {.Value = "仕入先C", .Text = "食塩　　　　　　　　　　　　　　　　　　"},
                New SelectListItem() With {.Value = "仕入先D", .Text = "減塩マヨネーズ　　　　　　　　　　　　　"}
            }

            ViewBag.listbox4 = New SelectListItem() {
                New SelectListItem() With {.Value = "仕入先A", .Text = "平成25年08月20日"},
                New SelectListItem() With {.Value = "仕入先B", .Text = "平成25年08月22日"},
                New SelectListItem() With {.Value = "仕入先C", .Text = "平成25年08月24日"},
                New SelectListItem() With {.Value = "仕入先D", .Text = "平成25年08月26日"}
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
