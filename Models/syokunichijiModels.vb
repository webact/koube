Imports OracleInProcServer
Imports log4net
Namespace koube

    Public Class syokunichijiModels

        Private logger As ILog = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType)
        Private OraDatabase As Object
        Public Property Title As String
        'Public ht As Hashtable = New Hashtable
        Public ht(,) As String
        'コンストラクタ
        '
        Public Sub New(ByVal oraconnect As Object)
            OraDatabase = DirectCast(oraconnect, OraDatabase)
        End Sub
        '
        '
        Public Sub SetData()
            Dim OraDynaset As Object      ''データベース・オブジェクト
            Dim SqlStr As String
            Dim row As Integer = 0

            'ログの出力

            logger.Debug("開発中のデバッグ／トレースに使用する")

            logger.Info("情報（操作履歴等）")

            logger.Warn("注意／警告（障害の一歩手前）")

            logger.Error("システムが停止するまではいかない障害が発生")

            logger.Fatal("システムが停止する致命的な障害が発生")

            Try
                SqlStr = "select ITEMNAME1,VENDERCODE, ENTRYDATETIME, RESERVE10, DEPTH from TM_MM02_SYHN where itemcode1='6204'"
                OraDynaset = DirectCast(OraDatabase.CreateDynaset(SqlStr, 0), OraDynaset)
                ReDim ht(OraDynaset.RecordCount, OraDynaset.Fields.count)
                While Not OraDynaset.EOF
                    logger.Info("オラクルDB[ITEMNAME1]" + OraDynaset("ITEMNAME1").value)
                    '           Title = OraDynaset("ITEMNAME1").value
                    For i = 0 To OraDynaset.Fields.count - 1
                        'ht.Add(OraDynaset.Fields(i).Name, OraDynaset.Fields(i).Value)
                        ht(row, i) = OraDynaset.Fields(i).Value
                    Next i
                    row = row + 1
                    OraDynaset.MoveNext()
                End While


                'Title = "食数日次確認 モデル"
            Catch
                OraDynaset = Nothing

            End Try
        End Sub
    End Class
End Namespace
