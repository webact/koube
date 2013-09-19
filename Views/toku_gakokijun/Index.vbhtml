<!-- 学校基準人数登録(特支) -->
<div id="contents">
 	<div class="lead">
		<h1>@ViewData("Title")</h1>
    </div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01">
                <dl>
                    <dt class="keyid1">
                        <label for="noufukingaku">&nbsp;学校名</label>&nbsp;
                        <input type="text" value="" style="width:35px;height:15px;top:1px;left:1px;" />
                 	    @Html.DropDownList("schoolName", "")
                        <input type="submit" value="表示" name="submit" class="submit" style="top:1px;left: 50px;" />
                    </dt>
                </dl>
                <label for="Grid1">主食</label>
                <table id="Grid1"></table>
                <script src="@Url.Content("~/Scripts/gridSetting/toku_gakokijunTbl.js")" type="text/javascript"></script>
                <dl>
                    <dt></dt>
                </dl>
                <table width="100%" class="cleartbl">
                    <tr>
                        <td>
                            <table id="Grid2"></table>
                        </td>
                        <td class="righttbl">
                            <table id="Grid3"></table>
                        </td>
                    </tr>
                </table>
                <dl>
                    <dt></dt>
                </dl>
                <table width="100%" class="cleartbl">
                    <tr>
                        <td>
                            <label for="Grid4">牛乳</label>
                            <table id="Grid4"></table>
                        </td>
                        <td>
                            <label for="Grid5">副食</label>
                            <table id="Grid5" align="right"></table>
                        </td>
                    </tr>
                </table>
                <br /><br />
	            <label for="content1">主食備考</label><br />
                <textarea name="content1" rows="5" cols="180"></textarea>
                <br /><br />
 	            <input type="submit" value="登録" name="hokoku" class="submit" />
                 <br /><br />
                <table width="100%" class="cleartbl"><tr><td  align="right">2012年12月20日 14:38</td></tr></table><br />
                <font class="error">@ViewData("message")</font>
            </fieldset>
        </form>
    </div>
</div>