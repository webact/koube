<!-- 副食食数出力 -->

<script src="@Url.Content("~/Scripts/gridSetting/fukusyokuTbl.js")" type="text/javascript"></script>
<div id="contents">
	<div class="lead">
		<h1>@ViewData("Title")</h1>
	</div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01"><legend>ＣＳＶ出力</legend>
                <dl>
                    <dt class="keyid">
		                @Html.Label("listbox1", "実施年月")
			            @Html.DropDownList("listbox1",  "")
                        <input type="submit" value="ＣＳＶ出力" name="submit" class="submit"  style="top:1px;left: 140px;"/>
                    </dt>
                </dl>
                <font class="error">@ViewData("message")</font>
            </fieldset>
        </form>
	</div>
    <br />
</div>