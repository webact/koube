@ModelType koube.LogOnModel

@Code
    ViewData("Title") = "ログオン"
End Code

<h2>ログオン</h2>
<p>
    ユーザー名とパスワードを入力してください。アカウントをお持ちでない場合は、@Html.ActionLink("登録", "Register")。
</p>

<script src="@Url.Content("~/Scripts/jquery.validate.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/jquery.validate.unobtrusive.min.js")" type="text/javascript"></script>

@Html.ValidationSummary(True, "ログインに失敗しました。エラーを修正し、再試行してください。")

@Using Html.BeginForm()
    @<div>
        <fieldset>
            <legend>アカウント情報</legend>

            <div class="editor-label">
                @Html.LabelFor(Function(m) m.UserName)
            </div>
            <div class="editor-field">
                @Html.TextBoxFor(Function(m) m.UserName)
                @Html.ValidationMessageFor(Function(m) m.UserName)
            </div>

            <div class="editor-label">
                @Html.LabelFor(Function(m) m.Password)
            </div>
            <div class="editor-field">
                @Html.PasswordFor(Function(m) m.Password)
                @Html.ValidationMessageFor(Function(m) m.Password)
            </div>

            <div class="editor-label">
                @Html.CheckBoxFor(Function(m) m.RememberMe)
                @Html.LabelFor(Function(m) m.RememberMe)
            </div>

            <p>
                <input type="submit" value="ログオン" />
            </p>
        </fieldset>
    </div>
End Using
