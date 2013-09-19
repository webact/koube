@Code
    ViewData("Title") = "調味料等の追加発注モーダル画面"
End Code

    <script src="@Url.Content("~/Scripts/gridSetting/fukusyokuTbl.js")" type="text/javascript"></script>
 <div id="contents">



    <div class="detailList1">
<form method="post" action="">

<fieldset class="group01" style="width:450px;height:250px;top:1px;left:1px;" /><legend>調味料等の追加発注情報編集</legend>
<dl><dt class="keyid">
                <input type="submit" value="取　消" name="submit" class="submit"  style="width:80px;top:1px;left: 370px;"/>
                <br />
                <br />
                <label>納入日　　　　　　平成25年08月22日</label>
                <br />
                <br />
                <label>食品／規格名　　　ＡＡＡＡ食材 規格Ａ</label>
                <br />
                <br />
                <label>荷　姿　　　　　　荷姿ＡＡＡＡＡＡ</label>
                <br />
                <br />
                @Html.Label("textbox", "発注数量　　　　　")
                <input type="text" value="" style="width:100px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                <input type="submit" value="更　新" name="submit" class="submit"  style="top:1px;left: 170px;"/>

</dt>

</dl>
</fieldset>

<br />
<br />


</form>
	</div>
<br />

</div>

