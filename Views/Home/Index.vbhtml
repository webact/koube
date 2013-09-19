<!-- 給食システムWebOrder -->
@Code
    Layout = Nothing
End Code

<head>
    <title>@ViewData("Title")</title>

<!--[if (gte IE 7)&(lte IE 9)]>
    <script src="@Url.Content("~/Scripts/jquery-1.7.1.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/selectivizr.js")" type="text/javascript"></script>
<![endif]-->
<!--[if (gte IE 7)&(lte IE 8)]>
	<script type='text/javascript'>
		$(document).ready(function() {
			$('#content')
				.prepend('<div class="cloudForIE cloud1"></div>')
				.prepend('<div class="cloudForIE cloud2"></div>');
			$('#footer').prepend('<div class="borderForIE"></div>');
 		});
	</script>
<![endif]-->
<!--[if IE 9]>
	<script type='text/javascript'>
		$(document).ready(function() {
			$('#footer').prepend('<div class="borderForIE"></div>');
 		});
	</script>
<![endif]-->
    <link href="@Url.Content("~/Content/loginstyle.css")" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="content">
	<h1><img src="@Url.Content("~/images/logo1.png")" width="280" height="67" alt="給食システムWebOrder" /></h1>
	<div id="form">
		<form method="post" action="../menu/">
 		  <p class="userid"><label for="userid">ログインID</label><input name="userid" type="text" /></p>
	      <p class="password"><label for="password">パスワード</label><input name="password" type="password" id="password" /></p>
		  <p class="login"><input type="submit" name="login" id="login" value="ログイン" style="width:100px;height:30px;top:1px;left:1px;" /></p>

              <br />
              <br />
              <font class="error">@ViewData("message")</font>
              <br />
              <br />
              <textarea style="margin : 36px 0 0 0"name="kanso" rows="4" cols="42">お知らせ：
&nbsp; 9/1 3:00～5:00はメンテナンスのためシステムを休止します。</textarea>

		</form>
	</div>
    <div id="footer">
<!--
		<ul>
			<li><a href="#">プライバシーポリシー</a></li>
			<li><a href="#">お問い合わせ</a></li>
		</ul>
-->
		<p class="credit">Copyright © 公益財団法人神戸市スポーツ教育協会 All Rights Reserved.</p>
    </div>
</div>
</body>

