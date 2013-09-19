<!DOCTYPE html>
<html>
<head>
    <title>@ViewData("Title")</title>
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
    <script src="@Url.Content("~/Scripts/gridSetting/tyomiTbl.js")" type="text/javascript"></script>
</head>
<body>
    <div id="main">
        @RenderBody()
    </div>

<footer id="footer">
	<ul id="rulesNav">
		<li><a href="#">プライバシーポリシー</a></li>
		<li><a href="#">利用規約</a></li>
	</ul>
	<p id="copyright">©公益財団法人神戸市スポーツ教育協会</p>
</footer>

</body>
</html>
