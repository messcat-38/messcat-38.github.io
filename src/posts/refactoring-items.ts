export type RefactoringCategory =
  | "code-smell"
  | "function-class"
  | "control-flow"
  | "safe-refactor"

export type RefactoringItem = {
  id: number
  category: RefactoringCategory
  title: string
  description: string
  prompt: string
}

export const REFACTORING_CATEGORIES: {
  id: RefactoringCategory | "all"
  label: string
  range?: string
  page?: string
}[] = [
  { id: "all", label: "All" },
  {
    id: "code-smell",
    label: "Code smells",
    range: "001–025 / 100",
    page: "1 / 4",
  },
  {
    id: "function-class",
    label: "Functions & classes",
    range: "026–050 / 100",
    page: "2 / 4",
  },
  {
    id: "control-flow",
    label: "Control flow",
    range: "051–075 / 100",
    page: "3 / 4",
  },
  {
    id: "safe-refactor",
    label: "Safe refactor",
    range: "076–100 / 100",
    page: "4 / 4",
  },
]

export const refactoringItems: RefactoringItem[] = [
  // コードの臭い（001-025）
  { id: 1, category: "code-smell", title: "長すぎる関数", description: "読めない長さを見つける", prompt: "長すぎる関数を探して、まとまりごとに関数へ切り出して" },
  { id: 2, category: "code-smell", title: "重複したコード", description: "直し漏れを防ぐ", prompt: "同じ処理の重複を探して、1か所にまとめて" },
  { id: 3, category: "code-smell", title: "不可解な名前", description: "名前から役割が分かるようにする", prompt: "役割が伝わらない名前を探して、分かる名前に付け直して" },
  { id: 4, category: "code-smell", title: "深いネスト", description: "深い入れ子の分岐を減らす", prompt: "ネストが3段より深い所を探して、浅く書き直して" },
  { id: 5, category: "code-smell", title: "マジックナンバー", description: "数字に意味を持たせる", prompt: "意味のない数字を探して、名前付きの定数にして" },
  { id: 6, category: "code-smell", title: "巨大なクラス", description: "何でも屋の部品を見つける", prompt: "巨大なクラスを探して、役割ごとに分けて" },
  { id: 7, category: "code-smell", title: "長すぎるパラメータリスト", description: "渡し間違いを防ぐ", prompt: "引数が多すぎる関数を探して、引数を減らすかまとめて" },
  { id: 8, category: "code-smell", title: "デッドコード", description: "使われない処理を消す", prompt: "どこからも使われないコードを探して消して" },
  { id: 9, category: "code-smell", title: "変更の分散", description: "1つの修正が散らばるのを防ぐ", prompt: "1つの変更で多くのファイルを触る所を探して、まとまる形にして" },
  { id: 10, category: "code-smell", title: "変更の発散", description: "理由の違う変更を分ける", prompt: "理由の違う変更が同じ部品に集まる所を探して、分けて" },
  { id: 11, category: "code-smell", title: "スパゲッティコード", description: "絡んだ流れをほどく", prompt: "流れが絡んだ所を探して、追える順に直して" },
  { id: 12, category: "code-smell", title: "グローバルデータ", description: "どこからでも書き換わるのを防ぐ", prompt: "グローバルデータを探して、引数や明示した依存で渡す形にして" },
  { id: 13, category: "code-smell", title: "機能嫉妬", description: "ほかの部品のデータばかり触る処理を移す", prompt: "ほかのクラスのデータを主に使うメソッドを探して、データの持ち主側へ移して" },
  { id: 14, category: "code-smell", title: "データの群れ", description: "いつも一緒の値をまとめる", prompt: "いつも一緒に渡る値の組を探して、1つの型やオブジェクトにまとめて" },
  { id: 15, category: "code-smell", title: "基本データ型への執着", description: "生の数字や文字だけで表すのをやめる", prompt: "意味のある値を生の型だけで表している所を探して、専用の型にまとめて" },
  { id: 16, category: "code-smell", title: "繰り返しのswitch", description: "同じ分岐の繰り返しを見つける", prompt: "同じ種類の分岐が何か所にもある所を探して、1か所に寄せて" },
  { id: 17, category: "code-smell", title: "一時的フィールド", description: "時々しか使わない値を見つける", prompt: "特定のときしか値が入らないフィールドを探して、必要な範囲へ移して" },
  { id: 18, category: "code-smell", title: "メッセージの連鎖", description: "長い呼び出しの鎖を断つ", prompt: "長いメソッド連鎖を探して、呼び出し側が知る相手を減らして" },
  { id: 19, category: "code-smell", title: "仲介人", description: "中継するだけの部品をなくす", prompt: "処理を横に流すだけのクラスやメソッドを探して、呼び出し元から直接呼ぶ形にして" },
  { id: 20, category: "code-smell", title: "疑わしき一般化", description: "今使わない拡張を消す", prompt: "今使っていない拡張用の仕組みを探して、必要な形まで削って" },
  { id: 21, category: "code-smell", title: "怠け者クラス", description: "働きの少ない部品をたたむ", prompt: "ほとんど仕事をしないクラスを探して、使う側へ統合して" },
  { id: 22, category: "code-smell", title: "データクラス", description: "値を持つだけの部品を直す", prompt: "値だけ持つクラスを探して、関係する処理をそちらへ移して" },
  { id: 23, category: "code-smell", title: "パラレル継承", description: "対で増える階層を見つける", prompt: "片方を足すともう片方も増える継承を探して、対が増えない形にして" },
  { id: 24, category: "code-smell", title: "相続拒否", description: "継承した機能を使わない子を直す", prompt: "親の機能をほとんど使わない子クラスを探して、継承をやめるか使う部分だけ残して" },
  { id: 25, category: "code-smell", title: "親密すぎる関係", description: "互いの内部を知りすぎる部品を離す", prompt: "互いの内部を触り合うクラスを探して、公開する境界を狭めて離して" },

  // 関数とクラスの整理（026-050）
  { id: 26, category: "function-class", title: "関数の抽出", description: "長い処理に名前を付けて分ける", prompt: "まとまった処理を探して、名前付きの関数へ切り出して" },
  { id: 27, category: "function-class", title: "変数名の変更", description: "名前で役割を伝える", prompt: "役割が伝わらない変数名を探して、中身が分かる名前に変えて" },
  { id: 28, category: "function-class", title: "関数宣言の変更", description: "関数名と引数を正しくする", prompt: "名前や引数が合っていない関数を探して、宣言を直して" },
  { id: 29, category: "function-class", title: "変数の抽出", description: "長い式を名前で読ませる", prompt: "長い式を探して、意味の分かる変数に切り出して" },
  { id: 30, category: "function-class", title: "クラスの抽出", description: "混ざった役割を切り分ける", prompt: "役割が2つあるクラスを探して、クラスを分けて" },
  { id: 31, category: "function-class", title: "関数のインライン化", description: "無意味な小分けを戻す", prompt: "中身が名前と同じだけの関数を探して、呼び出し側へ戻して" },
  { id: 32, category: "function-class", title: "変数の分離", description: "1つの変数の使い回しを防ぐ", prompt: "用途の違う値を同じ変数で使い回している所を探して、変数を分けて" },
  { id: 33, category: "function-class", title: "パラメータオブジェクトの導入", description: "引数の組を1つにまとめる", prompt: "いつも一緒に渡る引数の組を探して、1つのオブジェクトにまとめて" },
  { id: 34, category: "function-class", title: "フラグ引数の削除", description: "真偽の引数をなくす", prompt: "真偽値の引数で分岐している関数を探して、関数を分けて" },
  { id: 35, category: "function-class", title: "問い合わせと更新の分離", description: "値を返す処理と書き換えを分ける", prompt: "値を返しながら書き換える関数を探して、問い合わせと更新に分けて" },
  { id: 36, category: "function-class", title: "関数の移動", description: "関係の深い場所へ置く", prompt: "使うデータと離れた関数を探して、関係の深い側へ移して" },
  { id: 37, category: "function-class", title: "フェーズの分離", description: "処理を段階ごとに分ける", prompt: "読み込みと計算などが混ざった処理を探して、段階ごとに分けて" },
  { id: 38, category: "function-class", title: "関数群のクラスへの集約", description: "同じデータを扱う関数をまとめる", prompt: "同じデータを扱う関数群を探して、1つのクラスにまとめて" },
  { id: 39, category: "function-class", title: "変数のインライン化", description: "意味のない中間変数を消す", prompt: "式と同じ意味のだけの変数を探して、式へ戻して" },
  { id: 40, category: "function-class", title: "アルゴリズムの置き換え", description: "複雑な処理を簡単な方法に", prompt: "同じ結果になる、より単純なやり方へ置き換えて" },
  { id: 41, category: "function-class", title: "ステートメントのスライド", description: "関係する行を近くに集める", prompt: "関係する行が離れている所を探して、並ぶ順に寄せて" },
  { id: 42, category: "function-class", title: "関数のパラメータ化", description: "似た関数を1つにする", prompt: "違いが値だけの似た関数を探して、引数で1つにまとめて" },
  { id: 43, category: "function-class", title: "委譲の隠蔽", description: "中の部品を外に見せない", prompt: "呼び出し側が奥の部品を直接触っている所を探して、手前で隠して" },
  { id: 44, category: "function-class", title: "仲介人の除去", description: "素通しの中継をなくす", prompt: "横流しするだけのメソッドを探して、除去して直接呼ぶ形にして" },
  { id: 45, category: "function-class", title: "クラスのインライン化", description: "小さすぎる部品を統合する", prompt: "ほぼ空のクラスを探して、使う側へ取り込んで" },
  { id: 46, category: "function-class", title: "ファクトリ関数", description: "作り方を1か所にまとめる", prompt: "生成の手順が散らばっている所を探して、ファクトリにまとめて" },
  { id: 47, category: "function-class", title: "変数のカプセル化", description: "直接の書き換えを防ぐ", prompt: "共有変数を直接触っている所を探して、関数経由だけにして" },
  { id: 48, category: "function-class", title: "メソッドの引き上げ", description: "子の重複を親にまとめる", prompt: "子クラスに重複したメソッドを探して、親へ引き上げて" },
  { id: 49, category: "function-class", title: "スーパークラスの抽出", description: "似た部品の共通部分を出す", prompt: "似たクラスの共通部分を探して、親クラスへ出して" },
  { id: 50, category: "function-class", title: "クラス階層の平坦化", description: "意味のない継承をたたむ", prompt: "差のない親子クラスを探して、1つにまとめて" },

  // 条件分岐とループ（051-075）
  { id: 51, category: "control-flow", title: "ガード節", description: "例外的な場合を先に抜ける", prompt: "入れ子の条件を探して、例外は先に return する形にして" },
  { id: 52, category: "control-flow", title: "条件記述の分解", description: "複雑な条件に名前を付ける", prompt: "長い条件式を探して、名前付きの関数や変数に分けて" },
  { id: 53, category: "control-flow", title: "条件記述の統合", description: "同じ結果の条件をまとめる", prompt: "同じ結果になる複数の条件を探して、1つにまとめて" },
  { id: 54, category: "control-flow", title: "ポリモーフィズム", description: "種類ごとの分岐を部品に任せる", prompt: "種類ごとの大きな分岐を探して、各種類の振る舞いへ置き換えて" },
  { id: 55, category: "control-flow", title: "ループの分離", description: "1つのループに1つの仕事", prompt: "仕事が2つあるループを探して、ループを分けて" },
  { id: 56, category: "control-flow", title: "特殊ケースの導入", description: "何度もある例外の確認をまとめる", prompt: "同じ空や欠落の確認が繰り返される所を探して、特殊ケースにまとめて" },
  { id: 57, category: "control-flow", title: "アサーションの導入", description: "前提をコードで明示する", prompt: "暗黙の前提を探して、アサーションで明示して" },
  { id: 58, category: "control-flow", title: "制御フラグの削除", description: "終了用の旗変数をなくす", prompt: "ループの制御フラグを探して、break や return に替えて" },
  { id: 59, category: "control-flow", title: "コレクションパイプライン", description: "ループを流れる処理にする", prompt: "変換や絞り込みの for を探して、map や filter の流れに直して" },
  { id: 60, category: "control-flow", title: "ルックアップテーブル", description: "長い条件連鎖を表に置き換える", prompt: "長い条件の連鎖を探して、対応表の参照に置き換えて" },
  { id: 61, category: "control-flow", title: "ストラテジーパターン", description: "計算方法を差し替え可能に", prompt: "計算方法の分岐を探して、差し替え可能な戦略に分けて" },
  { id: 62, category: "control-flow", title: "フェイルファスト", description: "おかしな値ですぐ止める", prompt: "不正な入力を後まで引きずっている所を探して、最初にエラーで止めて" },
  { id: 63, category: "control-flow", title: "三項演算子", description: "短い分岐を1行にする", prompt: "代入だけの短い条件を探して、三項演算子に直して" },
  { id: 64, category: "control-flow", title: "ド・モルガンの法則", description: "否定の重なりをほどく", prompt: "否定が重なる条件を探して、ド・モルガンの法則で読みやすくして" },
  { id: 65, category: "control-flow", title: "オプショナルチェーン", description: "空の確認の入れ子を減らす", prompt: "空かどうかの入れ子確認を探して、使えるならオプショナルチェーンに直して" },
  { id: 66, category: "control-flow", title: "Null合体演算子", description: "空のときの既定値を短く書く", prompt: "空のときの既定値代入を探して、使えるなら Null 合体演算子で書いて" },
  { id: 67, category: "control-flow", title: "列挙型", description: "文字列の打ち間違いを防ぐ", prompt: "状態を表す文字列を探して、列挙型にして" },
  { id: 68, category: "control-flow", title: "ステートパターン", description: "状態ごとの分岐を整理する", prompt: "状態による大きな分岐を探して、状態ごとの振る舞いに分けて" },
  { id: 69, category: "control-flow", title: "パターンマッチ", description: "形で分岐を読みやすくする", prompt: "型や形ごとの分岐を探して、使えるならパターンマッチで書いて" },
  { id: 70, category: "control-flow", title: "短絡評価", description: "不要な確認を先に打ち切る", prompt: "重い条件が先にある所を探して、軽い条件を先にして短絡評価を生かして" },
  { id: 71, category: "control-flow", title: "例外の握りつぶし", description: "エラーの見落としを防ぐ", prompt: "例外を握りつぶしている所を探して、ログや再送出など扱える形にして" },
  { id: 72, category: "control-flow", title: "ループ不変コードの移動", description: "毎回同じ計算を外に出す", prompt: "ループ内で毎回同じ計算をしている所を探して、ループの外へ出して" },
  { id: 73, category: "control-flow", title: "ステートマシン", description: "状態の移り変わりを明確にする", prompt: "フラグの組み合わせで状態を表している所を探して、状態遷移として整理して" },
  { id: 74, category: "control-flow", title: "デシジョンテーブル", description: "条件の漏れを表で確かめる", prompt: "条件の組み合わせが複雑な所を探して、表にして漏れを確認してから直して" },
  { id: 75, category: "control-flow", title: "ヨーダ条件", description: "比較の書き間違いを防ぐ", prompt: "定数との比較を探して、定数を左に置く書き方にそろえて" },

  // 壊さずに進める（076-100）
  { id: 76, category: "safe-refactor", title: "仕様化テスト", description: "今の動きを先に記録する", prompt: "直す前に、今の動きを仕様化テストで固定して" },
  { id: 77, category: "safe-refactor", title: "小さなステップ", description: "壊れた場所をすぐ特定する", prompt: "動きを変えずに、小さなステップで1つずつ直して" },
  { id: 78, category: "safe-refactor", title: "回帰テスト", description: "直して壊れた所を見つける", prompt: "1つ直すごとに、回帰テストを全部通して" },
  { id: 79, category: "safe-refactor", title: "単一責任の原則", description: "1つの部品に1つの役割", prompt: "役割が混ざった部品を探して、役割ごとに分けて" },
  { id: 80, category: "safe-refactor", title: "DRY原則", description: "同じ知識を1か所に", prompt: "同じ知識の重複を探して、1か所にまとめて" },
  { id: 81, category: "safe-refactor", title: "KISS原則", description: "余計な複雑さを避ける", prompt: "必要以上に複雑な所を探して、いちばん単純な形にして" },
  { id: 82, category: "safe-refactor", title: "YAGNI", description: "今いらない機能を作らない", prompt: "今使っていない拡張を探して、入れずに済ませて" },
  { id: 83, category: "safe-refactor", title: "層の分離", description: "画面と処理とデータを分ける", prompt: "画面・処理・データが混ざった所を探して、層ごとに分けて" },
  { id: 84, category: "safe-refactor", title: "ボーイスカウト・ルール", description: "触った所を少しずつ良くする", prompt: "今回触る箇所だけ、見つけた汚れを少し整えて" },
  { id: 85, category: "safe-refactor", title: "単体テスト", description: "部品ごとに動きを確かめる", prompt: "分けた関数やクラスごとに、単体テストを書いて" },
  { id: 86, category: "safe-refactor", title: "リンター", description: "書き方の問題を自動で見つける", prompt: "リンターの警告をすべて解消して" },
  { id: 87, category: "safe-refactor", title: "フォーマッター", description: "字下げや空白を自動でそろえる", prompt: "フォーマッターで書式をそろえて" },
  { id: 88, category: "safe-refactor", title: "循環的複雑度", description: "分岐の多さを測る", prompt: "循環的複雑度が高い関数を探して、分けて下げて" },
  { id: 89, category: "safe-refactor", title: "認知的複雑度", description: "読みにくさを数で測る", prompt: "認知的複雑度の高い関数から、読みやすい形に直して" },
  { id: 90, category: "safe-refactor", title: "コードカバレッジ", description: "テストの抜けを見つける", prompt: "直す前にカバレッジで抜けを確認し、足りないテストを足して" },
  { id: 91, category: "safe-refactor", title: "型注釈", description: "値の種類の取り違えを防ぐ", prompt: "引数と戻り値の型が曖昧な所を探して、型注釈を付けて" },
  { id: 92, category: "safe-refactor", title: "デメテルの法則", description: "知らない相手と話さない", prompt: "遠いオブジェクトまで辿っている呼び出しを探して、直接の相手だけ呼ぶ形にして" },
  { id: 93, category: "safe-refactor", title: "依存性の注入", description: "部品を差し替えやすくする", prompt: "外部依存を内部で作っている所を探して、外から渡す形にして" },
  { id: 94, category: "safe-refactor", title: "純粋関数", description: "同じ入力で同じ結果にする", prompt: "計算に副作用が混ざっている所を探して、純粋な関数に分けて" },
  { id: 95, category: "safe-refactor", title: "イミュータブル", description: "勝手な書き換えを防ぐ", prompt: "共有データを書き換えている所を探して、新しい値を作る形にして" },
  { id: 96, category: "safe-refactor", title: "ストラングラーフィグ", description: "古い部分を少しずつ置き換える", prompt: "置き換えたい古い部分を探して、新旧を少しずつ切り替えて" },
  { id: 97, category: "safe-refactor", title: "命名規則", description: "名前の付け方をそろえる", prompt: "名前の付け方が揺れている所を探して、規則にそろえて" },
  { id: 98, category: "safe-refactor", title: "ミカド法", description: "大きな変更の順番を整理する", prompt: "大きな変更の依存を図にしてから、依存の少ない所から直して" },
  { id: 99, category: "safe-refactor", title: "ゴールデンマスター", description: "出力を丸ごと比べて守る", prompt: "直す前後の出力をゴールデンマスターで比べて、差が出ないことを確認して" },
  { id: 100, category: "safe-refactor", title: "開放閉鎖原則", description: "既存を直さず機能を足す", prompt: "既存を書き換えずに足せる形へ直して、新機能を追加して" },
]
