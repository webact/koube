<!-- 食数報告・発注 -->
 <script src="@Url.Content("~/Scripts/gridSetting/syokuhoukokuTbl.js")" type="text/javascript"></script>
 <div id="contents">
    <div class="lead">
		<h1>@ViewData("Title")</h1>
	</div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01">
                <dl>
                    <dt class="keyid">
                        @Html.Label("listbox1", "学校名")
                        <input type="text" value="" size="5"/>
	                    @Html.DropDownList("listbox1")
                    </dt>
                    <dt class="keyid">
                        @Html.Label("textbox", "　対象年月")
	                    @Html.TextBox("textbox")

	                    <input type="submit" value="表示" name="submit" class="submit3" />
                    </dt>
                </dl>
            </fieldset>
        </form>
    </div>

    <br />
    <br />

    <div class="detailList1">
        <fieldset class="group01">
            <label for="Grid1">主食</label>
            <table id="Grid1"></table>
            <br /><br />
            <table class="cleartbl" width="1300">
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
            <font class="error">@ViewData("message")</font>
        </fieldset>
    </div>

    <br />

    <div class="detailList1">
        <fieldset class="group01">
                <table class="cleartbl" width="1150"> 
                    <tr>
                        <td>開始日</td>
                        <td></td>
                        <td>終了日</td>
                        <td></td>
                        <td width="70">学年</td>
                        <td width="5"></td>
                        <td width="50">クラス</td>
                        <td></td>
                        <td></td>
                        <td>児童</td>
                        <td></td>
                        <td>職員</td>
                        <td></td>
                        <td>牛ア</td>
                        <td></td>
                        <td>変更理由</td>
                    </tr>
                    <tr>
                        <td class="toptbl">@Html.DropDownList("listbox4")</td>
                        <td class="toptbl">～</td>
                        <td class="toptbl">@Html.DropDownList("listbox4")</td>
                        <td class="toptbl">　</td>
                        <td class="toptbl">@Html.DropDownList("listbox6")</td>
                        <td class="toptbl">年</td>
                        <td class="toptbl">@Html.DropDownList("listbox3")</td>
                        <td class="toptbl">組</td>
                        <td class="toptbl"></td>
                        <td class="toptbl"><input type="text" value="" size="10" /></td>
                        <td class="toptbl"></td>
                        <td class="toptbl"><input type="text" value="" size="10" /></td>
                        <td class="toptbl"></td>
                        <td class="toptbl"><input type="text" value="" size="10" /></td>
                        <td class="toptbl"></td>
                        <td class="toptbl">
                            @Html.DropDownList("listbox8")<br />
                            @Html.DropDownList("listbox8")<br />
                            <input type="text" value="" size="20" />
                        </td>
                    </tr>
                </table>
            <form method="post" action="">
                <table class="cleartbl" width="1100">
                    <tr>
                        <td colspan="5">曜日選択</td>
                        <td width="10px"></td>
                        <td>主食</td>
                        <td width="10px"></td>
                        <td>牛乳</td>
                        <td width="10px"></td>
                        <td>副食</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td width="40px">月</td>
                        <td width="40px">火</td>
　                      <td width="40px">水</td>
　　                    <td width="40px">木</td>
　　                    <td width="40px">金</td>
                        <td rowspan="2"></td>
                        <td rowspan="2"><table id="Grid6"></table></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"><table id="Grid7"></table></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"><table id="Grid8"></table></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"></td>
                        <td rowspan="2"><input type="submit" value="変更" name="submit" class="submit3" /></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="q1" value="月" checked/></td>
                        <td><input type="checkbox" name="q1" value="火" checked/></td>
　                      <td><input type="checkbox" name="q1" value="水" checked/></td>
　　                    <td><input type="checkbox" name="q1" value="木" checked/></td>
　　                    <td><input type="checkbox" name="q1" value="金" checked/></td>
                    </tr>
                </table> 
            </form>
        </fieldset>
    </div>
    <br/>

    <div class="detailList1">
        <fieldset class="group01">
            <form method="post" action="">   
                <label for="Grid9">日次詳細</label>
                <table id="Grid9"></table><br/>
                <br/>
	            <input type="submit" value="担当者" name="submit" class="submit3" />
                <input type="submit" value="確認者" name="submit" class="submit3"  /><br />
            </form>
        </fieldset>
    </div>

　　<hr /><br/>

    <div class="detailList1">
        <fieldset class="group01">
            <form method="post" action="">   
                <label >副食報告回数</label>
                <font id="subcnt">　　　　　</font>回　@ViewData("subLastupdt")
                <br/>
                <input type="submit" value="副食報告" name="submit" class="submit" />
            </form>
        </fieldset>
    </div>

　　<hr /><br/>

    <div class="detailList1">
        <fieldset class="group01">
            <form method="post" action=""> 
                <label >主食発注回数</label>
                 <font id="maincnt">　　　　　</font>回　@ViewData("mainLastupdt")
                <br/><br/>
        	    <label for="content1">主食備考</label><br/>
                <textarea name="content1" rows="5" cols="180"></textarea><br/>
                 <br/>
                 <input type="submit" value="主食発注" name="submit" class="submit" />
            </form>
        </fieldset>
    </div>

　　<hr /><br/>

    <div class="detailList1">
        <fieldset class="group01">
            <form method="post" action=""> 
                <label >牛乳発注回数</label>
                <font id="milkcnt">　　　　　</font>回　@ViewData("milkLastupdt")
                <br/><br/>
	            <label for="content1">牛乳備考</label><br />
                <textarea name="content1" rows="5" cols="180"></textarea><br />
                <br/>
                <input type="submit" value="牛乳発注" name="submit" class="submit" /><br/>
            </form>
        </fieldset>
    </div>

    <br/>


</div>