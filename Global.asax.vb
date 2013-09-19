' メモ: IIS6 または IIS7 のクラシック モードの詳細については、
' http://go.microsoft.com/?LinkId=9394802 を参照してください
Imports OracleInProcServer
Imports System.Data.SqlClient

Public Class MvcApplication
    Inherits System.Web.HttpApplication

    Shared Sub RegisterGlobalFilters(ByVal filters As GlobalFilterCollection)
        filters.Add(New HandleErrorAttribute())
    End Sub

    Shared Sub RegisterRoutes(ByVal routes As RouteCollection)
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}")

        ' MapRoute は次のパラメーターを順番に受け取ります:
        ' (1) ルート名
        ' (2) パラメーター付きの URL
        ' (3) パラメーターの既定値
        routes.MapRoute( _
            "Default", _
            "{controller}/{action}/{id}", _
            New With {.controller = "Home", .action = "Index", .id = UrlParameter.Optional} _
        )

    End Sub

    Sub Application_Start()
        AreaRegistration.RegisterAllAreas()

        RegisterGlobalFilters(GlobalFilters.Filters)
        RegisterRoutes(RouteTable.Routes)
        ' アプリケーションのスタートアップで実行するコードです
        'oo4o 接続プール作成
        'initialSize　　：接続プールの初期サイズ
        'maxSize　　　　：接続プールの最大サイズ
        'timeOutInterval：タイムアウト間隔（秒）
        'dbname　　　　 ：データベース名    
        'connect　　　　：接続文字列
        'options　　　　：オプション
        Application("OraSession") = DirectCast(CreateObject("OracleInProcServer.XOraSession"), OraSession)

        'DirectCast(Application("OraSession"), OraSession).CreateDatabasePool(2, 5, 200, "WMSDEV", "US_FARMDO/US_FARMDO", dbOption.ORADB_DEFAULT)

        Dim builder As New SqlConnectionStringBuilder(System.Configuration.ConfigurationManager.ConnectionStrings.Item("ConnectString").ConnectionString)

        DirectCast(Application("OraSession"), OraSession).CreateDatabasePool(2, 5, 200, builder.DataSource, builder.UserID + "/" + builder.Password, dbOption.ORADB_DEFAULT)
    End Sub

    Sub Application_End(ByVal sender As Object, ByVal e As EventArgs)
        ' アプリケーションのシャットダウンで実行するコードです
        'oo4o 接続プール廃棄
        Application("OraSession").DestroyDatabasePool()
    End Sub

    Sub Session_Start(ByVal sender As Object, ByVal e As EventArgs)
        ' 新規セッションを開始したときに実行するコードです
        log4net.Config.XmlConfigurator.Configure()

        'セッションタイムアウトの設定
        Session.Timeout = 20
        'スクリプトタイムアウトの設定
        Server.ScriptTimeout = 120
        'oo4o セッション作成
        'maxWaitTime：最大待ち時間（秒）
        Session("OraDatabase") = DirectCast(Application("OraSession"), OraSession).GetDatabaseFromPool(100)
    End Sub

    Sub Session_end(ByVal sender As Object, ByVal e As EventArgs)
        ' セッションが終了したときに実行するコードです 
        ' メモ: Web.config ファイル内で sessionstate モードが InProc に設定されているときのみ、
        ' Session_End イベントが発生します。session モードが StateServer か、または SQLServer に 
        ' 設定されている場合、イベントは発生しません。

        'oo4o セッション廃棄
        Session.Remove("OraDatabase")
    End Sub

End Class
