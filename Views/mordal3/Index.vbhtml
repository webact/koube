@Code
    ViewData("Title") = "調味料等の変更・中止報告画面"
End Code

    <script src="@Url.Content("~/Scripts/gridSetting/fukusyokuTbl.js")" type="text/javascript"></script>
 <div id="contents">



    <div class="detailList1">
<form method="post" action="">

<fieldset class="group01" style="width:450px;height:350px;top:1px;left:1px;" /><legend>調味料等の変更・中止情報編集</legend>
<dl><dt class="keyid">
                <input type="submit" value="取　消" name="submit" class="submit"  style="width:80px;top:1px;left: 370px;"/>
                <br />
                <br />
                <label>納入日　　　　　　平成25年08月22日</label>
                <br />
                <br />
                <label>食品／規格コード　0001-0001</label>
                <br />
                <br />
                <label>食品／規格名　　　規格名ＡＡＡＡＡ</label>
                <br />
                <br />
                @Html.Label("textbox", "荷姿　　　　　　　")
                @Html.DropDownList("listbox1",  "")
                <br />
                <br />
                <label>発注時計算数量　　999999</label>
                <br />
                <br />
                @Html.Label("textbox", "発注数量　　　　　")
                <input type="text" value="" style="width:100px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                <label>仕入先　　　　　　ＡＡＡＡＡ商店</label>
                <br />
                <br />
                <input type="submit" value="更　新" name="submit" class="submit"  style="top:1px;left: 20px;"/>
                <input type="submit" value="複　写" name="submit" class="submit"  style="top:1px;left: 50px;"/>
                <input type="submit" value="削　除" name="submit" class="submit"  style="top:1px;left: 80px;"/>
                <br />
                <br />
</dt></dl>
</fieldset>

<br />
<br />


</form>
	</div>
<br />

</div>

