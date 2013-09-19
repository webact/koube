<!-- 調味料等の変更・中止報告画面" -->

 <script src="@Url.Content("~/Scripts/gridSetting/tyomiTbl.js")" type="text/javascript"></script>
 <div id="contents">
 	<div class="lead">
		<h1>@ViewData("Title")</h1>
	</div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01"><legend>対象施設選択</legend>
                <dl>
                    <dt class="keyid">
				        @Html.Label("listbox1", "学校名")
                        <input type="text" value="" style="width:35px;height:15px;top:1px;left:1px;" />
		    		    @Html.DropDownList("listbox1",  "")
                    </dt>
                    <dt class="keyid1">
	    			    @Html.Label("listbox1", "実施年月")
		    		    @Html.DropDownList("listbox2", "")
                    </dt>
			    	<input type="submit" value="表示" name="submit" class="submit" style="top:1px;left: 60px;"/>
                </dl>
            </fieldset>
        </form>
	</div>

    
    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01"><legend>調味料仕入一覧</legend>
                <table id="grid1"></table>
                <br /><br />
       	        <input type="submit" value="報告" name="submit" class="submit" />
                <br />
                <font class="error">@ViewData("message")</font>
            </fieldset>
        </form>
    </div>
</div>
