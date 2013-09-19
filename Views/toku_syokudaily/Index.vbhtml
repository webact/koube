@Code
    ViewData("Title") = "食数日次確認"
End Code

<script src="@Url.Content("~/Scripts/gridSetting/toku_syokudailyTbl.js")" type="text/javascript"></script>

<div class="lead">
	<h1>食数日次確認</h1>
</div>

<div class="detailList1">
    <form method="post" action="">
        <fieldset class="group01">
            <dl>
                <dt class="keyid">
                    @Html.Label("gakocode1", "学校:")
                    <input type="text" value="" style="width:35px;height:15px;top:1px;left:1px;" />
	                @Html.DropDownList("listbox1")
                </dt>
                <dt class="keyid">
	                @Html.DropDownList("listbox2")
	                @Html.Label("listbox2", "年")
                    @Html.DropDownList("listbox3")
	                @Html.Label("listbox3", "月　")
	                <input type="submit" value="表示" name="submit" class="submit" />
                </dt>
            </dl>
        </fieldset>
    </form>
</div>

<div class="detailList1">
<form method="post" action="">
    <fieldset class="group01">
        <script src="@Url.Content("~/Scripts/gridSetting/toku_syokudailyTbl.js")" type="text/javascript"></script>
        <table id="Grid1"></table>
        <br />
        <br />

<table class="cleartbl" width="100%">
 <tr>
 <td>
   <table id="Grid2"></table>
 </td>
 <td>

 <table id="Grid3" style="top:1px;left: 100px;"></table>
 </td>
 </tr>
 </table> 
        <br />
        <table id="Grid4"></table>
        <br />
        <br />
	<label for="content1">備考</label><br />
    <textarea name="content1" rows="5" cols="180"></textarea>
    <br />
    <br />
    <input type="submit" value="担当者" name="tanto" class="submit2" />
    <input type="submit" value="確認者" name="kakunin" class="submit2" />
    <input type="submit" value="発注" name="hattyu" class="submit2"/>
    </fieldset>
</form>
</div>