@Code
    ViewData("Title") = "メニュー画面"
End Code

 <div id="contents">

	<div class="lead">
		<h1>給食システムWebメニュー</h1>

	</div>

    <div class="detailList1">

<!--　<fieldset class="group01"><legend>目次・発注業務/報告</legend>
        <ul>
            <li><a href="../syokuhoukoku/">食数報告・発注</a></li>
            <li><a href="../syokudaily/">食数日次確認</a></li>
            <li><a href="../tyomi/">調味料等の変更・中止報告</a></li>
            <li><a href="../tyomiadd/">調味料等追加発注報告</a></li>
            <li><a href="../fukusyoku/">副食食数出力</a></li>
            <li><a href="../nouhukin/">納付金報告</a></li>
            <li><a href="../gatsukoutokucyu/">学校特注報告</a></li>
        </ul>
</fieldset>　-->


<fieldset class="group01"><legend>目次・発注業務/報告</legend>
    <table border="0"  cellpadding="2">
        <tr>
            <td width="240px"><a href="../syokuhoukoku/">食数報告・発注</a></td>
            <td>… スポ協への副食の食数報告、仕入先業者へ主食、牛乳の発注処理を行います。</td>
        </tr>
        <tr>
            <td width="240px"><a href="../toku_syokuhoukoku/">食数報告・発注（特支版）</a></td>
            <td>… スポ協への副食の食数報告、仕入先業者へ主食、牛乳の発注処理を行います。</td>
        </tr>

        <tr>
            <td><a href="../syokunichiji/">食数日次確認</a></td>
            <td>… 指定した実施日の副食、主食、牛乳の食数を表示します。</td>
        </tr>
        <tr>
            <td><a href="../toku_syokunichiji/">食数日次確認（特支版）</a></td>
            <td>… 指定した実施日の副食、主食、牛乳の食数を表示します。</td>
        </tr>

        <tr>
            <td><a href="../tyomi/">調味料等の変更・中止報告</a></td>
            <td>… 各学校から発注数量の修正・中止（発注数量0の場合）を実施します。</td>
        </tr>
        <tr>
            <td><a href="../tyomiadd/">調味料等の追加発注報告</a></td>
            <td>… 発注区分が発注品、適宜発注品で発注サイクルが集計毎の食品に対して調味料の追加発注データの作成（報告）を行います。</td>
        </tr>
        <tr>
            <td><a href="../fukusyoku/">副食食数出力</a></td>
            <td>… 指定した年月の各学校の副食食数のCSVを出力します。</td>
        </tr>
        <tr>
            <td><a href="../nouhukin/">給食費納入報告</a></td>
            <td>… 指定した年月日（１ヶ月以内）の納付金データの作成（報告）を行います。</td>
        </tr>
        <tr>
            <td><a href="../gatsukoutokucyu/">学校特注報告</a></td>
            <td>… 特注食品に対して、学校特注の追加発注データの作成（報告）を行います。</td>
        </tr>
        <tr>
            <td><a href="../mordal1/">学校特注報告モーダル</a></td>
            <td>… 学校特注モーダル画面</td>
        </tr>
        <tr>
            <td><a href="../mordal2/">調味料等の追加発注モーダル</a></td>
            <td>… 調味料等の追加発注モーダル画面</td>
        </tr>
        <tr>
            <td><a href="../mordal3/">調味料等の変更・中止報告モーダル</a></td>
            <td>… 調味料等の変更・中止報告画面</td>
        </tr>
        <tr>
            <td><a href="../mordal4/">納付金モーダル</a></td>
            <td>… 納付金モーダル画面</td>
        </tr>

    </table>
</fieldset>

<fieldset class="group01"><legend>基準登録</legend>
    <table border="0"  cellpadding="2">
        <tr>
            <td width="240px"><a href="../gakokijun/">学校基準人数登録</a></td>
            <td>… クラス毎の基準人数、副食の基準食数、主食の備考を登録します。</td>
        </tr>
        <tr>
            <td width="240px"><a href="../toku_gakokijun/">学校基準人数登録（特支版）</a></td>
            <td>… クラス毎の基準人数、副食の基準食数、主食の備考を登録します。</td>
        </tr>

    </table>
</fieldset>

<fieldset class="group01"><legend>管理者用</legend>
    <table border="0"  cellpadding="2">
        <tr>
            <td width="240px"><a href="../getsujihokoku/">月次食数報告・発注状況一覧</a></td>
            <td>… 指定した年月の各学校の月次報告・発注状況を一覧を表示します。</td>
        </tr>
        <tr>
           <td><a href="../logout/">ログ出力</a></td>
            <!-- <td><a href="../mordal/">ログ出力</a></td>　-->
            <td>… ログインログCSVを出力します。</td>
        </tr>
        <tr>
            <td width="240px"><a href="../upload/">「困ったときは」のアップロード</a></td>
            <td>… 各画面、ヘルプとしてリンクされているPDFファイルの差替えを行います。</td>
        </tr>
    </table>
</fieldset>
</div>
<br />
</div>
