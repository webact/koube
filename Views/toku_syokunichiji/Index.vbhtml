<!-- 食数日次確認" -->
@Code
    Layout = Nothing
End Code

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
 <!--   <script src="@Url.Content("~/Scripts/respond.min.js")" type="text/javascript"></script> -->
    <script src="@Url.Content("~/Scripts/selectivizr.js")" type="text/javascript"></script>
 <script src="@Url.Content("~/Scripts/gridSetting/toku_syokunichijiTbl.js")" type="text/javascript"></script>
    <style type="text/css">  
    .ui-iggrid-mergedcell{   
        color:White !important;   
    }   
    </style> 
    </head>

    <body>
 
 <div id="contents">
    <div class="lead">
		<h1>@ViewBag("Title")</h1>
	</div>

    <div class="detailList1">
        <form method="post" action="">
            <fieldset class="group01">
                <dl>
                    <dt class="keyid">
                        @Html.Label("textbox", "　対象日")
	                    @ViewData("reqDay")
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
            </table>
                <br /><br />
           　   <input type="button" value="画面を閉じる" name="submit" onclick="window.close()" class="submit3" style="top:1px;left:1000px;"/>
                           <br />
                <font class="error">@ViewData("message")</font>
         </fieldset>
    </div>

    <br />
</div>
    </body>
</html>