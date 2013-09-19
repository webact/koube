@Code
    ViewData("Title") = "「困ったときは」のアップロード"
End Code

    <script src="@Url.Content("~/Scripts/gridSetting/fukusyokuTbl.js")" type="text/javascript"></script>
 <div id="contents">



    <div class="detailList1">
<form method="post" action="">

<fieldset class="group01" style="width:450px;height:250px;top:1px;left:1px;" /><legend>報告内容編集</legend>
<dl><dt class="keyid">
                @Html.Label("textbox", "振込日　　")
                <input type="text" value="" style="width:300px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
			    @Html.Label("textbox", "銀行名　　")
                <input type="text" value="" style="width:300px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                @Html.Label("textbox", "支店名　　")
                <input type="text" value="" style="width:300px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                @Html.Label("textbox", "振込金額　")
                <input type="text" value="" style="width:120px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                @Html.Label("textbox", "振込手数料")
                <input type="text" value="" style="width:100px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                <input type="submit" value="更　新" name="submit" class="submit"  style="top:1px;left: 20px;"/>
                <input type="submit" value="追　加" name="submit" class="submit"  style="top:1px;left: 50px;"/>
                <input type="submit" value="削　除" name="submit" class="submit"  style="top:1px;left: 80px;"/>

</dt>

</dl>
</fieldset>

<br />
<br />


</form>
	</div>
<br />

</div>

