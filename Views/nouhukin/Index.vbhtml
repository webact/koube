<!-- 給食費納入報告" -->

<script src="@Url.Content("~/Scripts/gridSetting/nouhukinTbl.js")" type="text/javascript"></script>
<div id="contents">
	<div class="lead">
		<h1>@ViewData("Title")</h1>
	</div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01"><legend>対象選択</legend>
                <dl>
                    <dt class="keyid">
                        @Html.Label("textbox", "　")
				        @Html.Label("listbox1", "学校名")
                        <input type="text" value="" style="width:35px;height:15px;top:1px;left:1px;" />
				        @Html.DropDownList("listbox1",  "")
                        @Html.Label("listbox1", "対象年度")
			    	    @Html.DropDownList("listbox2", "")
                        <input type="submit" value="表　示" name="submit" class="submit" style="top:1px;left: 10px;" />
                    </dt>
                </dl>
            </fieldset>
        </form>
   </div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01"><legend>給食費納入情報一覧</legend>
                <table id="grid1"></table>
            <br />
            <font class="error">@ViewData("message")</font>    
            </fieldset>
        </form>
    </div>
</div>
