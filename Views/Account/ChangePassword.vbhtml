@ModelType koube.ChangePasswordModel

@Code
    ViewData("Title") = "パスワードの変更"
End Code

<h2>パスワードの変更</h2>
<p>
    パスワードを変更するには、次のフォームを使用します。 
</p>
<p>
    新しいパスワードは、@Membership.MinRequiredPasswordLength 文字以上であることが必要です。
</p>

<script src="@Url.Content("~/Scripts/jquery.validate.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/jquery.validate.unobtrusive.min.js")" type="text/javascript"></script>

@Using Html.BeginForm()
    @Html.ValidationSummary(True, "パスワードの変更に失敗しました。エラーを修正し、再試行してください。")
    @<div>
        <fieldset>
            <legend>アカウント情報</legend>

            <div class="editor-label">
                @Html.LabelFor(Function(m) m.OldPassword)
            </div>
            <div class="editor-field">
                @Html.PasswordFor(Function(m) m.OldPassword)
                @Html.ValidationMessageFor(Function(m) m.OldPassword)
            </div>

            <div class="editor-label">
                @Html.LabelFor(Function(m) m.NewPassword)
            </div>
            <div class="editor-field">
                @Html.PasswordFor(Function(m) m.NewPassword)
                @Html.ValidationMessageFor(Function(m) m.NewPassword)
            </div>

            <div class="editor-label">
                @Html.LabelFor(Function(m) m.ConfirmPassword)
            </div>
            <div class="editor-field">
                @Html.PasswordFor(Function(m) m.ConfirmPassword)
                @Html.ValidationMessageFor(Function(m) m.ConfirmPassword)
            </div>

            <p>
                <input type="submit" value="パスワードの変更" />
            </p>
        </fieldset>
    </div>
End Using
