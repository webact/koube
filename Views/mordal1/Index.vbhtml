@Code
    ViewData("Title") = "学校特注モーダル画面"
End Code

    <script src="@Url.Content("~/Scripts/gridSetting/fukusyokuTbl.js")" type="text/javascript"></script>
 <div id="contents">



    <div class="detailList1">
<form method="post" action="">

<fieldset class="group01" style="width:450px;top:1px;left:1px;" /><legend>学校特注情報編集</legend>
<dl><dt class="keyid">
                <input type="submit" value="取　消" name="submit" class="submit"  style="width:80px;top:1px;left: 370px;"/>
                <br />
                <br />
                @Html.Label("textbox", "食品コード　　　")
                @Html.DropDownList("listbox2")
                <input type="submit" value="問合せ" name="submit" class="submit"  style="width:60px;top:1px;left: 10px;"/>
                <br />
                <br />
                <label>食　品　名　　　ＡＡＡＡ食材</label>
                <br />
                <br />
                <label>納　入　日　　　平成25年08月22日</label>
                <br />
                <br />
                <label>実　施　日　　　平成25年08月23日</label>
                <br />
                <br />
                @Html.Label("textbox", "規格／荷姿／仕入先／単価　")
                @Html.DropDownList("listbox1")
                <br />
                <br />
                @Html.Label("textbox", "発注数量　　　　")
                <input type="text" value="" style="width:100px;height:15px;top:1px;left:1px;" />
                <br />
                <br />
                <label>発注金額　　　　 999</label>
                <br />
                <br />
                <input type="submit" value="更　新" name="submit" class="submit"  style="top:1px;left: 20px;"/>
                <input type="submit" value="追　加" name="submit" class="submit"  style="top:1px;left: 50px;"/>
                <input type="submit" value="削　除" name="submit" class="submit"  style="top:1px;left: 80px;"/>
                <br />
                <br />
    
</fieldset>

<br />
<br />


</form>
	</div>
<br />

</div>

