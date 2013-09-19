Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        ViewData("message") = "ＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮＮ"
        ViewData("Title") = "給食システムWebOrder"
        Return View()
    End Function

    Function About() As ActionResult
        Return View()
    End Function
End Class
