@If Request.IsAuthenticated Then
    @<text>ようこそ <strong>@User.Identity.Name</strong> さん!
    [ @Html.ActionLink("Log Off", "LogOff", "Account") ]</text>
Else
    @:[ @Html.ActionLink("ログオン", "LogOn", "Account") ]
End If
