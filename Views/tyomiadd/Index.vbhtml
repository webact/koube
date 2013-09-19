<!-- 調味料等の追加発注報告 -->

    <script src="@Url.Content("~/Scripts/gridSetting/tyomiaddTbl.js")" type="text/javascript"></script>

 <div id="contents">

	<div class="lead">
		<h1>@ViewData("Title")</h1>
	</div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01"><legend>報告内容</legend>
                <dl>
                    <dt class="keyid">
				        @Html.Label("listbox1", "学校名")
                        <input type="text" value="" style="width:35px;height:15px;top:1px;left:1px;" />
			    	    @Html.DropDownList("listbox1",  "")
                    </dt>
                    <dt class="keyid1">
				        @Html.Label("listbox2", "納入日")
				        @Html.DropDownList("listbox2", "")
                    </dt>
				        <input type="submit" value="表示" name="submit" class="submit" style="top:1px;left: 50px;" />
                    </dl>
            </fieldset>
        </form>
    </div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01"><legend></legend>
                <table id="grid1"></table>
                <br /><br />
    	        <input type="submit" value="発注書削除" name="submit" class="submit2"/>
    	        <input type="submit" value="報告" name="submit" class="submit2" />
                <br />
                <font class="error">@ViewData("message")</font>
            </fieldset>
        </form>
    </div>
</div>