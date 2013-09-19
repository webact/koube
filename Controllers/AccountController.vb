Imports System.Diagnostics.CodeAnalysis
Imports System.Security.Principal
Imports System.Web.Routing

Public Class AccountController
    Inherits System.Web.Mvc.Controller

    '
    ' GET: /Account/LogOn

    Public Function LogOn() As ActionResult
        Return View()
    End Function

    '
    ' POST: /Account/LogOn

    <HttpPost()> _
    Public Function LogOn(ByVal model As LogOnModel, ByVal returnUrl As String) As ActionResult
        If ModelState.IsValid Then
            If Membership.ValidateUser(model.UserName, model.Password) Then
                FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe)
                If Url.IsLocalUrl(returnUrl) AndAlso returnUrl.Length > 1 AndAlso returnUrl.StartsWith("/") _
                   AndAlso Not returnUrl.StartsWith("//") AndAlso Not returnUrl.StartsWith("/\\") Then
                    Return Redirect(returnUrl)
                Else
                    Return RedirectToAction("Index", "Home")
                End If
            Else
                ModelState.AddModelError("", "指定されたユーザー名またはパスワードが正しくありません。")
            End If
        End If

        ' ここで問題が発生した場合はフォームを再表示します
        Return View(model)
    End Function

    '
    ' GET: /Account/LogOff

    Public Function LogOff() As ActionResult
        FormsAuthentication.SignOut()

        Return RedirectToAction("Index", "Home")
    End Function

    '
    ' GET: /Account/Register

    Public Function Register() As ActionResult
        Return View()
    End Function

    '
    ' POST: /Account/Register

    <HttpPost()> _
    Public Function Register(ByVal model As RegisterModel) As ActionResult
        If ModelState.IsValid Then
            ' ユーザーの登録を試みます
            Dim createStatus As MembershipCreateStatus
            Membership.CreateUser(model.UserName, model.Password, model.Email, Nothing, Nothing, True, Nothing, createStatus)

            If createStatus = MembershipCreateStatus.Success Then
                FormsAuthentication.SetAuthCookie(model.UserName, False)
                Return RedirectToAction("Index", "Home")
            Else
                ModelState.AddModelError("", ErrorCodeToString(createStatus))
            End If
        End If

        ' ここで問題が発生した場合はフォームを再表示します
        Return View(model)
    End Function

    '
    ' GET: /Account/ChangePassword

    <Authorize()> _
    Public Function ChangePassword() As ActionResult
        Return View()
    End Function

    '
    ' POST: /Account/ChangePassword

    <Authorize()> _
    <HttpPost()> _
    Public Function ChangePassword(ByVal model As ChangePasswordModel) As ActionResult
        If ModelState.IsValid Then
            ' 特定のエラー シナリオでは、ChangePassword は
            ' false を返す代わりに例外をスローします。
            Dim changePasswordSucceeded As Boolean

            Try
                Dim currentUser As MembershipUser = Membership.GetUser(User.Identity.Name, True)
                changePasswordSucceeded = currentUser.ChangePassword(model.OldPassword, model.NewPassword)
            Catch ex As Exception
                changePasswordSucceeded = False
            End Try

            If changePasswordSucceeded Then
                Return RedirectToAction("ChangePasswordSuccess")
            Else
                ModelState.AddModelError("", "現在のパスワードが正しくないか、新しいパスワードが無効です。")
            End If
        End If

        ' ここで問題が発生した場合はフォームを再表示します
        Return View(model)
    End Function

    '
    ' GET: /Account/ChangePasswordSuccess

    Public Function ChangePasswordSuccess() As ActionResult
        Return View()
    End Function

#Region "Status Code"
    Public Function ErrorCodeToString(ByVal createStatus As MembershipCreateStatus) As String
        ' すべてのステータス コードの一覧については、http://go.microsoft.com/fwlink/?LinkID=177550 を
        ' 参照してください。
        Select Case createStatus
            Case MembershipCreateStatus.DuplicateUserName
                Return "このユーザー名は既に存在します。別のユーザー名を入力してください。"

            Case MembershipCreateStatus.DuplicateEmail
                Return "その電子メール アドレスのユーザー名は既に存在します。別の電子メール アドレスを入力してください。"

            Case MembershipCreateStatus.InvalidPassword
                Return "指定されたパスワードは無効です。有効なパスワードの値を入力してください。"

            Case MembershipCreateStatus.InvalidEmail
                Return "指定された電子メール アドレスは無効です。値を確認してやり直してください。"

            Case MembershipCreateStatus.InvalidAnswer
                Return "パスワードの回復用に指定された回答が無効です。値を確認してやり直してください。"

            Case MembershipCreateStatus.InvalidQuestion
                Return "パスワードの回復用に指定された質問が無効です。値を確認してやり直してください。"

            Case MembershipCreateStatus.InvalidUserName
                Return "指定されたユーザー名は無効です。値を確認してやり直してください。"

            Case MembershipCreateStatus.ProviderError
                Return "認証プロバイダーからエラーが返されました。入力を確認してやり直してください。問題が解決しない場合は、システム管理者に連絡してください。"

            Case MembershipCreateStatus.UserRejected
                Return "ユーザーの作成要求が取り消されました。入力を確認してやり直してください。問題が解決しない場合は、システム管理者に連絡してください。"

            Case Else
                Return "不明なエラーが発生しました。入力を確認してやり直してください。問題が解決しない場合は、システム管理者に連絡してください。"
        End Select
    End Function
#End Region

End Class
