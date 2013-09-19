@ModelType koube.RegisterModel

@Code
    ViewData("Title") = "登録"
End Code

<h2>アカウントの新規作成</h2>
<p>
    新しいアカウントを作成するには、以下のフォームを使用してください。 
</p>
<p>
    パスワードは、@Membership.MinRequiredPasswordLength 文字以上であることが必要です。
</p>

<script src="@Url.Content("~/Scripts/jquery.validate.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/jquery.validate.unobtrusive.min.js")" type="text/javascript"></script>

@Using Html.BeginForm()
    @Html.ValidationSummary(True, "アカウントの作成に失敗しました。エラーを修正し、再試行してください。")
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
                @Html.LabelFor(Function(m) m.Email)
            </div>
            <div class="editor-field">
                @Html.TextBoxFor(Function(m) m.Email)
                @Html.ValidationMessageFor(Function(m) m.Email)
            </div>

            <div class="editor-label">
                @Html.LabelFor(Function(m) m.Password)
            </div>
            <div class="editor-field">
                @Html.PasswordFor(Function(m) m.Password)
                @Html.ValidationMessageFor(Function(m) m.Password)
            </div>

            <div class="editor-label">
                @Html.LabelFor(Function(m) m.ConfirmPassword)
            </div>
            <div class="editor-field">
                @Html.PasswordFor(Function(m) m.ConfirmPassword)
                @Html.ValidationMessageFor(Function(m) m.ConfirmPassword)
            </div>

            <p>
                <input type="submit" value="登録" />
            </p>
        </fieldset>
    </div>
End Using
