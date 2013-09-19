
@Code
    ViewData("Title") = "Index"
End Code
<br /><br />
<div id="contents">
    <div class="detailList1">
        <fieldset class="group01"><legend>報告内容編集</legend>
           <form method="post" action="">
                <label for="ginko">銀行名</label>
                <input type="text" value="" id="ginko" size="50" /><br /><br />
                <label for="shiten">支店名</label>
                <input type="text" value="" id="shiten" size="50" /><br /><br />
                <label for="nouhu">納付金額　</label>
                <input type="text" value="" id="nouhu" size="30" /><br /><br />
                <label for="tesuu">振込手数料</label>
                <input type="text" value="" id="tesuu" size="30" />
            </form>
        </fieldset>
        <form method="post" action="">
            <input type="submit" value="登録" name="submit" class="submit" style="top:1px;left: 300px;"/>
        </form>
    </div>
</div>