<!-- 「困ったときは」のアップロード -->

    <script src="@Url.Content("~/Scripts/gridSetting/fukusyokuTbl.js")" type="text/javascript"></script>
 <div id="contents">

	<div class="lead">
		<h1>@ViewData("Title")</h1>

	</div>

    <div class="detailList1">
<form method="post" action="">

<fieldset class="group01"><legend>@ViewData("Title")</legend>
<dl><dt class="keyid">
			    <input type="text" value="NEWXXXXXXXXXXXXXXXXXXXXXXXX.pdf" style="width:300px;height:15px;top:1px;left:1px;" />
                <input type="submit" value="参照" name="submit" class="submit"  style="top:1px;left: 140px;"/>
                <input type="submit" value="アップロード" name="submit" class="submit"  style="top:1px;left: 140px;"/>
</dt>

</dl>
</fieldset>

<br />
<br />

<fieldset class="group01"><legend>「システムからのメッセージ」のアップロード</legend>
<dl><dt class="keyid">
			    <textarea name="komatta" rows="4" cols="42">お知らせ：
&nbsp; 9/1 3:00～5:00はメンテナンスのためシステムを休止します。</textarea>
                <input type="submit" value="更新" name="submit" class="submit"  style="top:1px;left: 140px;"/>
</dt>

</dl>
            <br />
            <font class="error">@ViewData("message")</font>  
</fieldset>
</form>
	</div>
<br />

</div>

