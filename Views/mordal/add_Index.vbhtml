@Code
    ViewData("Title") = "「困ったときは」のアップロード"
End Code

    <script src="@Url.Content("~/Scripts/gridSetting/fukusyokuTbl.js")" type="text/javascript"></script>
 <div id="contents">



    <div class="detailList1">
<form method="post" action="">

<fieldset class="group01" style="width:450px;height:250px;top:1px;left:1px;" /><legend>調味料等の追加発注報告内容</legend>
<dl><dt class="keyid">
                <label>納入日　　　　　　平成25年08月22日</label>
                <br />
                <br />
                <label>食品／規格名　　　ＡＡＡＡ食材 規格Ａ</label>
                <br />
                <br />
                @Html.Label("textbox", "荷姿　　　　　　　")
                @Html.DropDownList("listbox1",  "")
                <br />
                <br />
                @Html.Label("textbox", "発注数量　　　　　")
                <input type="text" value="" style="width:100px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                <input type="submit" value="更　新" name="submit" class="submit"  style="top:1px;left: 100px;"/>

</dt>

</dl>
</fieldset>

<br />
<br />


</form>
	</div>
<br />

</div>

