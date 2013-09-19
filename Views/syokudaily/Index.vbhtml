<!-- 食数日次確認 -->

<div class="lead">
	<h1>@ViewData("Title")</h1>
</div>

<div class="detailList1">
    <form method="post" action="">
        <fieldset class="group01">
            <dl>
                <dt>
                対象日　
                @ViewData("reqDay")
                </dt>
            </dl>
        </fieldset>
    </form>
</div>

     <div class="detailList1">
        <fieldset class="group01">
            <label for="Grid1">主食</label>
            <table id="Grid1"></table>
            <br /><br />
            <table class="cleartbl" width="100%">
                <tr>
                    <td><table id="Grid2"></table></td>
                    <td class="righttbl"><table id="Grid3"></table></td>
                </tr>
            </table> 
            <br /><br />
            <table class="cleartbl" width="100%">
                <tr>
                    <td>
                        <label for="Grid4">牛乳</label>
                        <table id="Grid4"></table>
                    </td>
                    <td>
                        <label for="Grid5">副食</label>
                        <table id="Grid5"></table>
                    </td>
                </tr>
            </table><br />
            <form action="" id="tojiru">
                <input type="button" value="画面を閉じる" class="submit" />
            </form>
            @ViewData("message")
        </fieldset>
    </div>

