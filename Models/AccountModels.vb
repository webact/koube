Imports System.ComponentModel
Imports System.ComponentModel.DataAnnotations
Imports System.Globalization

Public Class ChangePasswordModel
    Private oldPasswordValue As String
    Private newPasswordValue As String
    Private confirmPasswordValue As String

    <Required()> _
    <DataType(DataType.Password)> _
    <Display(Name:="現在のパスワード")> _
    Public Property OldPassword() As String
        Get
            Return oldPasswordValue
        End Get
        Set(ByVal value As String)
            oldPasswordValue = value
        End Set
    End Property

    <Required()> _
    <StringLength(100, ErrorMessage:="{0} の長さは {2} 文字以上である必要があります。", MinimumLength:=6)> _
    <DataType(DataType.Password)> _
    <Display(Name:="新しいパスワード")> _
    Public Property NewPassword() As String
        Get
            Return newPasswordValue
        End Get
        Set(ByVal value As String)
            newPasswordValue = value
        End Set
    End Property

    <DataType(DataType.Password)> _
    <Display(Name:="新しいパスワードの確認入力")> _
    <Compare("NewPassword", ErrorMessage:="新しいパスワードと確認のパスワードが一致しません。")> _
    Public Property ConfirmPassword() As String
        Get
            Return confirmPasswordValue
        End Get
        Set(ByVal value As String)
            confirmPasswordValue = value
        End Set
    End Property
End Class

Public Class LogOnModel
    Private userNameValue As String
    Private passwordValue As String
    Private rememberMeValue As Boolean

    <Required()> _
    <Display(Name:="ユーザー名")> _
    Public Property UserName() As String
        Get
            Return userNameValue
        End Get
        Set(ByVal value As String)
            userNameValue = value
        End Set
    End Property

    <Required()> _
    <DataType(DataType.Password)> _
    <Display(Name:="パスワード")> _
    Public Property Password() As String
        Get
            Return passwordValue
        End Get
        Set(ByVal value As String)
            passwordValue = value
        End Set
    End Property

    <Display(Name:="このアカウントを記憶する")> _
    Public Property RememberMe() As Boolean
        Get
            Return rememberMeValue
        End Get
        Set(ByVal value As Boolean)
            rememberMeValue = value
        End Set
    End Property
End Class

Public Class RegisterModel
    Private userNameValue As String
    Private passwordValue As String
    Private confirmPasswordValue As String
    Private emailValue As String

    <Required()> _
    <Display(Name:="ユーザー名")> _
    Public Property UserName() As String
        Get
            Return userNameValue
        End Get
        Set(ByVal value As String)
            userNameValue = value
        End Set
    End Property

    <Required()> _
    <DataType(DataType.EmailAddress)> _
    <Display(Name:="電子メール アドレス")> _
    Public Property Email() As String
        Get
            Return emailValue
        End Get
        Set(ByVal value As String)
            emailValue = value
        End Set
    End Property

    <Required()> _
    <StringLength(100, ErrorMessage:="{0} の長さは {2} 文字以上である必要があります。", MinimumLength:=6)> _
    <DataType(DataType.Password)> _
    <Display(Name:="パスワード")> _
    Public Property Password() As String
        Get
            Return passwordValue
        End Get
        Set(ByVal value As String)
            passwordValue = value
        End Set
    End Property

    <DataType(DataType.Password)> _
    <Display(Name:="パスワードの確認入力")> _
    <Compare("Password", ErrorMessage:="パスワードと確認のパスワードが一致しません。")> _
    Public Property ConfirmPassword() As String
        Get
            Return confirmPasswordValue
        End Get
        Set(ByVal value As String)
            confirmPasswordValue = value
        End Set
    End Property
End Class
