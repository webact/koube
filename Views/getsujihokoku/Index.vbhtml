<!-- 月次報告・発注状況一覧 -->

 <div id="contents">

	<div class="lead">
		<h1>@ViewData("Title")</h1>
	</div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01">
                <dl>
                    <dt class="keyid">
	                    @Html.Label("listbox3", "実施年月")
	                    @Html.DropDownList("listbox3")
	                    <input type="submit" value="表示" name="submit" class="submit3"/>
                    </dt>
                </dl>
            </fieldset>
        </form>
    </div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01">
                <script src="@Url.Content("~/Scripts/gridSetting/getsujihokokuTbl.js")" type="text/javascript"></script>
                <table id="Grid1"></table><br />
                <br />
                <font class="error">@ViewData("message")</font>
            </fieldset>
        </form>
    </div>
</div>