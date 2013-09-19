<!DOCTYPE html>
<html>
    <head>
    <title>@ViewData("Title")</title>
    <link href="@Url.Content("~/Content/normalize.css")" rel="stylesheet" type="text/css" />
    <link href="@Url.Content("~/Content/menustyle.css")" rel="stylesheet" type="text/css" />
    <script src="@Url.Content("~/Scripts/jquery-1.4.4.js")" type="text/javascript"></script>
	<script src="@Url.Content("~/Scripts/jquery-1.5.1.min.js")" type="text/javascript"></script>
	<script src="@Url.Content("~/Scripts/modernizr-1.7.min.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/jquery-ui-1.8.11.min.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/jquery-ui-1.8.17.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/infragistics.loader.js")" type="text/javascript"></script>

    <script src="@Url.Content("~/Scripts/ig.ui.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/respond.min.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/selectivizr.js")" type="text/javascript"></script>
    <style>  
    .ui-iggrid-mergedcell{   
        color:White !important;   
    }   
    </style> 
    </head>

    <body>
        <header id="header">
        	<h1 id="siteID">神戸市スポーツ教育協会</h1>
	        <ul id="userInfo">
		        <li><font size="5">こんにちは<b>日本学校</b>さん</font>（<a href="#"><b>ログアウト</b></a>）</li>
		        <li>前回ログイン日時：2012年12月25日</li>
	        </ul>

        	<ul id="utilityNav">
		        <li><a href="#">困ったときは</a></li>
	        </ul>
        </header>

        <ul id="menu">
            <li>@Html.ActionLink("Home", "Index", "menu")</li>
            <li>
                <a href="#">目次・発注業務/報告</a>
                <ul>
                    <li>@Html.ActionLink("食数報告・発注", "Index", "syokuhoukoku")</li>
                     <!--   <li>@Html.ActionLink("食数日次確認", "Index", "syokunichiji")</li>　-->
                    <li>@Html.ActionLink("調味料等の変更・中止報告", "Index", "tyomi")</li>
                    <li>@Html.ActionLink("調味料等追加発注報告", "Index", "tyomiadd")</li>
                    <li>@Html.ActionLink("副食食数出力", "Index", "fukusyoku")</li>
                    <li>@Html.ActionLink("給食費納入報告", "Index", "nouhukin")</li>
                    <li>@Html.ActionLink("学校特注報告", "Index", "gatsukoutokucyu")</li>
                </ul>
            </li>
            <li><a href="#">基準登録</a>
                <ul>
                    <li>@Html.ActionLink("学校基準数人数登録", "Index", "gakokijun")</li>
                </ul>
            </li>
            <li><a href="#">管理者用</a>
                <ul>
                    <li>@Html.ActionLink("月次食数報告・発注状況一覧", "Index", "getsujihokoku")</li>
                    <li>@Html.ActionLink("ログ出力", "Index", "logout")</li>
                    <li><a href="#">「困ったときは」のアップロード</a></li>
                </ul>
            </li>
        </ul>

        <div id="contents">
            @RenderBody()
        </div>
 
        <div id="footer">

        </div>
    </body>
</html>
