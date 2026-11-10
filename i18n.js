/* WorshipLink i18n — Japanese / English switcher
 * Load once in the head of every page, with a script tag whose src is i18n.js
 * - Adds a 日本語 / EN toggle to the header
 * - Translates visible text, placeholders, titles by exact match against DICT
 * - Keeps <option> values in Japanese so saved data stays consistent
 * - Remembers the choice (localStorage "wl_lang"); ?lang=en or ?lang=ja also works
 */
(function (root) {
  'use strict';

  var DICT = {
 "10年以上": "10+ years",
 "1〜3年": "1–3 years",
 "1名": "1 person",
 "1年未満": "Under 1 year",
 "2〜3営業日以内": "Within 2–3 business days",
 "2名": "2 people",
 "3〜5年": "3–5 years",
 "3名": "3 people",
 "4名": "4 people",
 "5〜10年": "5–10 years",
 "5名": "5 people",
 "AI応援メッセージ機能あり": "AI encouragement messages",
 "Googleマップで場所確認": "Check locations on Google Maps",
 "QRコード": "QR code",
 "QRコードをその場で表示": "Show the QR code on the spot",
 "QRコード付きチラシを表示・印刷して配布できます。": "View and print a flyer with a QR code to hand out.",
 "QR更新": "Update QR",
 "URLを入力してください": "Please enter a URL",
 "WorshipLink — お問い合わせ": "WorshipLink — Contact",
 "WorshipLink — コミュニティ": "WorshipLink — Community",
 "WorshipLink — チラシ": "WorshipLink — Flyer",
 "WorshipLink — ライブ・チケット": "WorshipLink — Live & Tickets",
 "WorshipLink — ワーシップ・コミュニティ": "WorshipLink — Worship Community",
 "WorshipLink — 教会情報": "WorshipLink — Church Directory",
 "WorshipLink — 演奏者マッチング": "WorshipLink — Performer Matching",
 "WorshipLinkでは現在、演奏者の登録を募集しています。": "WorshipLink is currently recruiting performers.",
 "WorshipLinkに関するご質問・ご意見・ご要望をお聞かせください。": "Tell us your questions, feedback, and requests about WorshipLink.",
 "WorshipLinkの正式な会員として登録申請します。登録後は各種サービスをより詳しくご利用いただけます。": "Apply to become an official WorshipLink member. After registering, you can use our services in more detail.",
 "— 一般参加 —": "— General participants —",
 "— 教会・信仰 —": "— Church & faith —",
 "— 音楽・礼拝 —": "— Music & worship —",
 "※ 現在準備中です。フォームよりお問い合わせください。": "* Coming soon. Please use the form to contact us.",
 "← トップへ": "← Back to Top",
 "← トップページへ戻る": "← Back to the top page",
 "☀️ 日常の恵み": "☀️ Daily Blessings",
 "⛪ 教会を登録する": "⛪ Register a Church",
 "⛪ 教会一覧": "⛪ Church List",
 "⛪ 教会掲載申請": "⛪ Church Listing Request",
 "⛪ 礼拝": "⛪ Worship Service",
 "✅ パスワードを変更しました。次回からは新しいパスワードでログインしてください。": "✅ Password changed. Please log in with your new password next time.",
 "✏️ 教会を登録する": "✏️ Register a Church",
 "✏️ 演奏者として登録する": "✏️ Register as a Performer",
 "✦ AI応援": "✦ AI Encouragement",
 "✨ 証し": "✨ Testimony",
 "❓ 質問": "❓ Question",
 "「いつも主にあって喜びなさい。もう一度言います。喜びなさい。」（ピリピ4:4）あなたの賛美は神様に届いています🕊️": "“Rejoice in the Lord always. I will say it again: Rejoice!” (Philippians 4:4) Your praise reaches God 🕊️",
 "あなたの教会をWorshipLinkに掲載しませんか？登録・掲載は無料です。": "Would you like to list your church on WorshipLink? Registration and listing are free.",
 "あなたの教会をぜひ登録してください。登録は無料です。": "Please register your church. Registration is free.",
 "あなたはどんな参加者ですか？": "What kind of participant are you?",
 "ありがとうございました🙏": "Thank you 🙏",
 "あり（無料）": "Available (free)",
 "あり（要相談）": "Available (by arrangement)",
 "お名前": "Name",
 "お名前またはニックネーム": "Name or nickname",
 "お名前またはニックネーム *": "Name or nickname *",
 "お名前を入力してください": "Please enter your name",
 "お名前・団体名": "Name / Organization",
 "お問い合わせ": "Contact",
 "お問い合わせありがとうございます。": "Thank you for contacting us.",
 "お問い合わせ内容": "Message",
 "お急ぎの場合はその旨をご記載ください": "If it's urgent, please let us know in your message",
 "お楽しみに！🕊️": "Stay tuned! 🕊️",
 "から直接登録することもできます。": ".",
 "このコメントを削除しますか？": "Delete this comment?",
 "この投稿を削除しますか？": "Delete this post?",
 "ご質問・ご意見・ご要望など": "Questions, feedback, requests, etc.",
 "ご質問・ご要望・各種登録申請など、お気軽にご連絡ください。": "Questions, requests, registration applications — feel free to contact us.",
 "ご質問・会員登録・イベント主催者登録などはこちら。": "Questions, membership and event organizer registration.",
 "さんの登録が完了しました！": "– your registration is complete!",
 "さんへメッセージを送りました。": "– your message has been sent.",
 "しばらくしてから再試行してください。": "Please try again in a moment.",
 "すぐにアプリが開きます。": "the app opens instantly.",
 "すべて": "All",
 "すべての投稿": "All Posts",
 "そのまま印刷してチラシに": "Print it as a flyer",
 "その他": "Other",
 "その他演奏者": "Other performer",
 "できること": "What You Can Do",
 "なし": "None",
 "に送信しました。": ".",
 "へご返信いたします。🙏": ".",
 "または直接ご連絡ください": "Or contact us directly",
 "まだ投稿がありません。": "No posts yet.",
 "まだ登録されている教会がありません。": "No churches have been registered yet.",
 "を登録しました！": "has been registered!",
 "イベントを見る": "View Events",
 "イベント主催者登録": "Event Organizer Registration",
 "イベント主催者登録申請": "Event Organizer Registration Request",
 "イベント情報 近日公開予定！": "Event Information Coming Soon!",
 "ウェブサイト": "Website",
 "ウェブサイト・SNS": "Website / social media",
 "オンライン": "Online",
 "オンラインのみ": "Online only",
 "オンラインイベントも対応": "Online events supported",
 "カトリック": "Catholic",
 "キャンセル": "Cancel",
 "キャンプ": "Camp",
 "キーボード": "Keyboard",
 "ギタリスト": "Guitarist",
 "ギター": "Guitar",
 "クリスチャンも、一般の方も、一緒に賛美・祈り・つながりを": "Christians and non-Christians alike — worship, pray, and connect together",
 "クリスチャンも、一般の方も、誰でも参加できます": "Everyone is welcome — Christians and non-Christians alike",
 "ゲスト": "Guest",
 "コピー": "Copy",
 "コミュニティ": "Community",
 "コミュニティへ": "Go to Community",
 "コミュニティを探している": "Looking for a community",
 "コミュニティページで最新情報をお知らせします。": "We will share the latest news on the Community page.",
 "コメントに失敗しました": "Failed to post comment",
 "コメントを入力…": "Write a comment…",
 "コメントを削除しました": "Comment deleted",
 "ゴスペル": "Gospel",
 "サービスを選ぶ": "Choose a service",
 "スタジオ": "Studio",
 "スタジオあり": "Studio available",
 "スタジオ情報": "Studio info",
 "スタジオ情報も掲載可能": "Studio info can be listed too",
 "スマートフォンのカメラで読み込むだけで": "Just scan with your smartphone camera and",
 "タグ": "Tags",
 "タグで探す": "Search by tag",
 "チラシを見る": "View Flyer",
 "チラシ・QRコード": "Flyer & QR Code",
 "データの読み込みに失敗しました。": "Failed to load data.",
 "ドラマー": "Drummer",
 "ドラム": "Drums",
 "ニックネーム": "Nickname",
 "バイオリン": "Violin",
 "バプテスト": "Baptist",
 "パスワード": "Password",
 "パスワードが違います": "Incorrect password",
 "パスワードは6文字以上にしてください": "Password must be at least 6 characters",
 "パスワード変更": "Change Password",
 "ピアノ": "Piano",
 "ピアノ・ギター・ヴォーカルなど楽器・役割は問いません。": "Any instrument or role is welcome — piano, guitar, vocals, and more.",
 "ピアノ奏者": "Pianist",
 "フルート": "Flute",
 "プロテスタント": "Protestant",
 "プロフィールを保存しました": "Profile saved",
 "プロフィールを登録してください！": "register your profile!",
 "プロフィールを登録すると、教会や主催者からコンタクトが来るようになります。登録・掲載は無料です。": "Once you register your profile, churches and organizers can contact you. Registration and listing are free.",
 "プロフィール設定": "Profile Settings",
 "ベーシスト": "Bassist",
 "ベース": "Bass",
 "ペンテコステ": "Pentecostal",
 "ホームスタジオ・練習場所の提供": "Home studio / practice space offered",
 "メッセージを入力してください": "Please enter a message",
 "メニュー": "Menu",
 "メンバー募集": "Looking for Members",
 "メールアドレス": "Email address",
 "メールアドレスをコピーしました": "Email address copied",
 "ライブ・イベントを掲載したい": "I want to list a live event",
 "ライブ・チケット": "Live & Tickets",
 "ライブ・礼拝集会・ワーシップイベントをWorshipLinkに掲載したい方はこちらからお申し込みください。": "To list a live show, worship gathering, or worship event on WorshipLink, apply here.",
 "リアルタイムで更新される": "Updates in real time",
 "ログイン": "Log in",
 "ワーシップリーダー": "Worship leader",
 "ワーシップ・コミュニティアプリ": "Worship Community App",
 "ヴォーカリスト": "Vocalist",
 "ヴォーカル": "Vocal",
 "一般のお問い合わせ": "General Inquiry",
 "一言メッセージ": "A short message",
 "上記に当てはまらないご相談": "Anything else",
 "上記に当てはまらないご相談・ご提案など、お気軽にご連絡ください。": "For anything that doesn't fit the above — questions, suggestions — feel free to contact us.",
 "下のリストから教会を選ぶとマップに表示されます": "Choose a church from the list below to show it on the map",
 "京都": "Kyoto",
 "今日あった恵み、祈り課題、質問など、なんでも分かち合ってください…": "Share anything — today's blessings, prayer requests, questions…",
 "今日の恵み・祈りを分かち合う": "Share today's blessings and prayers",
 "仙台（宮城）": "Sendai (Miyagi)",
 "件名": "Subject",
 "会員登録・イベント主催者登録": "Membership & event organizer registration",
 "会員登録申請": "Membership Registration",
 "住所": "Address",
 "住所 *": "Address *",
 "住所を入力してください": "Please enter an address",
 "例：03-1234-5678": "e.g. 03-1234-5678",
 "例：2025年7月13日（日）10:00〜": "e.g. Sunday, July 13, 2025, from 10:00",
 "例：6月の礼拝でピアノをお願いしたいのですが、ご都合はいかがでしょうか。": "e.g. We'd like a pianist for our June worship service. Are you available?",
 "例：example@email.com": "e.g. example@email.com",
 "例：https://example-church.jp": "e.g. https://example-church.jp",
 "例：info@church.jp": "e.g. info@church.jp",
 "例：info@example-church.jp": "e.g. info@example-church.jp",
 "例：どなたでも気軽に来られるアットホームな教会です。ワーシップに力を入れています。": "e.g. A friendly church where everyone is welcome. We put a lot of heart into worship.",
 "例：めぐちゃん": "e.g. Megu",
 "例：コミュニティについて": "e.g. About the community",
 "例：コラボレーションについて": "e.g. About collaboration",
 "例：初めて参加します、など": "e.g. This is my first time",
 "例：大阪シャロームチャーチ": "e.g. Osaka Shalom Church",
 "例：大阪ホープチャーチ": "e.g. Osaka Hope Church",
 "例：大阪ホープチャーチ、ゴスペル合唱団など": "e.g. Osaka Hope Church, a gospel choir, etc.",
 "例：山田太郎": "e.g. Taro Yamada",
 "例：山田教会 担当：鈴木": "e.g. Yamada Church, contact: Suzuki",
 "例：山田牧師": "e.g. Pastor Yamada",
 "例：日曜日 10:00〜12:00": "e.g. Sunday 10:00–12:00",
 "例：日曜礼拝（出席者約50名）でのピアノ奏者を探しています。曲目はコンテンポラリーワーシップ中心です...": "e.g. We are looking for a pianist for our Sunday service (about 50 attendees), mostly contemporary worship songs...",
 "例：東京グレースチャーチ": "e.g. Tokyo Grace Church",
 "例：東京都渋谷区〇〇1-2-3": "e.g. 1-2-3 Shibuya, Tokyo",
 "例：東京都渋谷区〇〇チャーチ / オンライン": "e.g. Shibuya, Tokyo / Online",
 "例：毎月第1日曜日に開催するワーシップナイト（東京・渋谷）、参加者30名程度...": "e.g. A worship night on the first Sunday of every month (Shibuya, Tokyo), about 30 participants...",
 "例：田中めぐみ": "e.g. Megumi Tanaka",
 "例：田中めぐみ、めぐちゃん など": "e.g. Megumi Tanaka, Megu, etc.",
 "例：礼拝ピアノを10年担当しています。初心者の方への指導経験もあります。どうぞよろしくお願いします。": "e.g. I have played piano for worship for 10 years and have experience teaching beginners. Nice to meet you!",
 "例：鈴木はるか": "e.g. Haruka Suzuki",
 "依頼を送る": "Send Request",
 "依頼内容・メッセージ": "Request / message",
 "依頼内容・詳細": "Request details",
 "保存": "Save",
 "信仰の有無に関わらず、どなたでも歓迎します🕊️ | 完全無料でご利用いただけます": "Everyone is welcome, regardless of faith 🕊️ | Completely free to use",
 "信徒（クリスチャン）": "Believer (Christian)",
 "備考・メッセージ（任意）": "Notes / message (optional)",
 "備考・追加情報": "Notes / additional information",
 "全国": "Nationwide",
 "全国OK": "Nationwide OK",
 "全国のワーシップイベントに参加申込": "Sign up for worship events nationwide",
 "全国のワーシップイベントを探して参加申込ができます。": "Find worship events nationwide and sign up.",
 "全国の仲間と投稿・いいね・コメントで交流": "Connect nationwide through posts, likes, and comments",
 "全国の仲間と投稿・コメント・いいねで交流できる掲示板。": "A bulletin board to connect with friends nationwide through posts, comments, and likes.",
 "全国の教会をマップと一覧で検索": "Search churches nationwide by map and list",
 "全国の教会をマップと一覧で検索。登録も可能です。": "Search churches nationwide by map and list. Registration is also available.",
 "全国イベントを検索・絞り込み": "Search and filter events nationwide",
 "共有中": "Live",
 "兵庫": "Hyogo",
 "内容": "Message",
 "内容を入力してください": "Please enter your message",
 "出演回数": "Performances",
 "初めての方へ": "For First-Timers",
 "募集": "Recruiting",
 "北海道": "Hokkaido",
 "千葉": "Chiba",
 "印刷するとそのままチラシとして使えます": "Print this page and use it as a flyer",
 "参加人数": "Number of participants",
 "参加申込フォーム（無料）": "Sign-up form (free)",
 "友人に誘われた": "Invited by a friend",
 "名古屋": "Nagoya",
 "名古屋（愛知）": "Nagoya (Aichi)",
 "団体名・主催者名": "Organization / organizer name",
 "土日・祝日はお休みをいただいています": "Closed on weekends and holidays",
 "地域 *": "Area *",
 "地域で探す": "Search by area",
 "地域・教団で絞り込み": "Filter by area and denomination",
 "埼玉": "Saitama",
 "大阪": "Osaka",
 "実行する": "Confirm",
 "対応時間": "Hours",
 "希望日時": "Preferred date & time",
 "希望楽器・役割": "Preferred instrument / role",
 "平日 10:00〜18:00": "Weekdays 10:00–18:00",
 "広島": "Hiroshima",
 "当日お会いできることを楽しみにしています🙏": "We look forward to seeing you on the day 🙏",
 "情報更新": "Update information",
 "所属教会・グループ": "Church / group",
 "所属教会・グループ（記載なくてもOK）": "Church / group (optional)",
 "投稿しました 🙌": "Posted 🙌",
 "投稿する": "Post",
 "投稿に失敗しました": "Failed to post",
 "投稿を削除しました": "Post deleted",
 "投稿内容を入力してください": "Please enter your post",
 "担当楽器・役割 *（複数選択可）": "Instruments / roles * (multiple allowed)",
 "担当者メールアドレス *": "Contact email *",
 "担当者名": "Contact person",
 "掲載予定のイベント概要": "Overview of the event(s) to list",
 "掲載削除": "Remove listing",
 "教会の無料登録ができる": "Free church registration",
 "教会の紹介・特徴": "About your church",
 "教会の週報・掲示板に活用": "Use it in church bulletins and on notice boards",
 "教会を探す": "Find Churches",
 "教会スタッフ": "Church staff",
 "教会マップ": "Church Map",
 "教会一覧にすぐに反映されます。": "It will appear in the church list right away.",
 "教会一覧を見る": "View Church List",
 "教会名": "Church name",
 "教会名 *": "Church name *",
 "教会名を入力してください": "Please enter a church name",
 "教会情報": "Church Directory",
 "教会情報 登録募集中！": "Church Directory — Now Accepting Registrations!",
 "教会情報を掲載・更新したい": "I want to list or update a church",
 "教会情報ページ": "Church Directory page",
 "教会情報ページへの掲載・情報更新をご希望の方はこちらからお申し込みください。": "To list your church or update its details, please apply here. You can also register directly from the ",
 "教会掲載申請": "Church Listing Request",
 "教団・種別": "Denomination / type",
 "新しいURLを入力": "Enter a new URL",
 "新しいパスワード": "New password",
 "新しいパスワードを入力してください": "Please enter a new password",
 "新着": "New",
 "新規掲載": "New listing",
 "日常の恵み": "Daily Blessings",
 "最初の一歩を踏み出してみてください。": "Take the first step.",
 "未記入": "Not specified",
 "本当に削除しますか？": "Are you sure you want to delete this?",
 "札幌": "Sapporo",
 "札幌（北海道）": "Sapporo (Hokkaido)",
 "東京": "Tokyo",
 "楽器で探す": "Search by instrument",
 "楽器・地域で検索できる": "Search by instrument and area",
 "楽器・役割": "Instrument / role",
 "楽器・役割を選択してください": "Please select an instrument or role",
 "様": "",
 "様、お問い合わせありがとうございます。": "— thank you for contacting us.",
 "正しいメールアドレスを入力してください": "Please enter a valid email address",
 "正式な会員として登録したい": "I want to become an official member",
 "求道中": "Seeker",
 "求道中（キリスト教に興味がある）": "Seeker (interested in Christianity)",
 "沖縄": "Okinawa",
 "活動地域 *": "Activity area *",
 "活動地域を選択してください": "Please select an activity area",
 "演奏依頼": "Performance Request",
 "演奏依頼・教会掲載申請": "Performance requests & church listing requests",
 "演奏者 登録募集中！": "Performers — Now Accepting Registrations!",
 "演奏者として無料登録": "Register as a performer for free",
 "演奏者を探したり、自分を登録してアピールできます。": "Find performers, or register yourself and show what you do.",
 "演奏者を探す": "Find Performers",
 "演奏者を探す・自分を登録してアピール": "Find performers or register yourself",
 "演奏者マッチング": "Performer Matching",
 "演奏者一覧に掲載されました。教会や主催者からのコンタクトをお待ちください🎵": "You are now listed. We hope churches and organizers will contact you 🎵",
 "演奏者一覧を見る": "View Performer List",
 "牧師・伝道師": "Pastor / evangelist",
 "現在、イベント情報を準備中です。": "Event information is currently being prepared.",
 "申請する": "Submit Request",
 "申請内容": "Request type",
 "申込が完了しました！": "Your sign-up is complete!",
 "申込する": "Sign Up",
 "登録が完了しました！": "Registration complete!",
 "登録したばかりです。お気軽にコンタクトください。": "Just registered. Feel free to get in touch.",
 "登録する": "Register",
 "登録に失敗しました。もう一度お試しください。": "Registration failed. Please try again.",
 "登録の動機や自己紹介など、お気軽にどうぞ。": "Feel free to share why you're joining or introduce yourself.",
 "登録は無料です。ぜひ「演奏者として登録する」タブから": "Registration is free. Please use the “Register as a Performer” tab to",
 "登録・インストール不要・無料": "No sign-up, no installation, completely free",
 "登録申請する": "Submit Registration",
 "登録申請を受け付けました！": "Registration request received!",
 "確認メールを": "A confirmation email has been sent to",
 "礼拝": "Worship Service",
 "礼拝に来てみた": "Visiting a service for the first time",
 "礼拝やイベントで演奏してくれる方を探している方はこちらからご依頼ください。演奏者マッチングページもあわせてご活用ください。": "If you're looking for someone to perform at a service or event, send your request here. The Performer Matching page may help too.",
 "礼拝・イベントで演奏してほしい": "Looking for performers for a service or event",
 "礼拝時間": "Service times",
 "礼拝時間・電話番号・ウェブサイトなど、掲載希望の情報をご記入ください。": "Please enter the information you'd like listed — service times, phone number, website, etc.",
 "祈り": "Prayer",
 "祈りに関心がある": "Interested in prayer",
 "祈りの課題": "Prayer Requests",
 "神奈川": "Kanagawa",
 "神様からの励ましを受け取っています": "Receiving encouragement from God",
 "神様があなたを励ましてくださいます。": "God will encourage you.",
 "福岡": "Fukuoka",
 "管理者パスワード": "Admin password",
 "管理者パスワードを入力してください。": "Please enter the admin password.",
 "管理者パスワードを変更・ブロックユーザーを管理できます。": "You can change the admin password and manage blocked users.",
 "管理者パスワード変更": "Change admin password",
 "経験年数": "Years of experience",
 "絞り込み": "Filter",
 "自己紹介・アピールコメント": "Introduction / pitch",
 "複数・バンド全体": "Multiple / full band",
 "解除": "Unblock",
 "証し": "Testimony",
 "評価": "Rating",
 "詳しい内容をご記入ください。": "Please describe in detail.",
 "読み込みに失敗しました。": "Failed to load.",
 "賛美": "Praise",
 "賛美・礼拝": "Praise & Worship",
 "質問": "Question",
 "超教派": "Interdenominational",
 "返信をお待ちください🙏": "Please wait for a reply 🙏",
 "返信目安": "Response time",
 "送信": "Send",
 "送信しました！": "Sent!",
 "送信する": "Send",
 "通常2〜3営業日以内に": "We will usually reply within 2–3 business days to",
 "通常2〜3営業日以内にご返信いたします。": "We will usually reply within 2–3 business days.",
 "連絡先メールアドレス *": "Contact email *",
 "選択してください": "Please select",
 "閉じる": "Close",
 "開催場所・形式": "Venue / format",
 "電話番号": "Phone number",
 "音楽が好き": "Love music",
 "（なし）": "(none)",
 "（自分）": "(you)",
 "🌐 ウェブサイト": "🌐 Website",
 "🌱 初めての方へ": "🌱 For First-Timers",
 "🎁 参加無料": "🎁 Free to join",
 "🎁 完全無料でご利用いただけます": "🎁 Completely free to use",
 "🎟 参加申込": "🎟 Event Sign-up",
 "🎵 イベント主催者登録": "🎵 Event Organizer Registration",
 "🎵 演奏者として登録する": "🎵 Register as a Performer",
 "🎵 賛美": "🎵 Praise",
 "🎹 スタジオ": "🎹 Studio",
 "🎹 演奏依頼": "🎹 Performance Request",
 "🏠 スタジオ": "🏠 Studio",
 "👑 管理者としてログインしました": "👑 Logged in as admin",
 "👑 管理者パネル": "👑 Admin Panel",
 "👑 管理者ログイン": "👑 Admin Login",
 "👤 会員登録申請": "👤 Membership Registration",
 "💬 一般のお問い合わせ": "💬 General Inquiry",
 "📋 その他のお問い合わせ": "📋 Other Inquiries",
 "📝 このイベントに申し込む": "📝 Sign up for this event",
 "📢 募集": "📢 Recruiting",
 "📩 お問い合わせ": "📩 Contact",
 "📩 コンタクトを取る": "📩 Get in Touch",
 "📬 直接のご連絡先": "📬 Direct Contact",
 "📱 QRコードをスキャン": "📱 Scan the QR code",
 "🔍 演奏者を探す": "🔍 Find Performers",
 "🔗 URLを変更してQRコードを更新する": "🔗 Change the URL to update the QR code",
 "🕊️ 信仰の有無に関わらず、どなたでも歓迎します": "🕊️ Everyone is welcome, regardless of faith",
 "🕊️ 投稿を読み込み中…": "🕊️ Loading posts…",
 "🕊️ 無料・登録不要": "🕊️ Free · No sign-up",
 "🕊️ 読み込み中...": "🕊️ Loading...",
 "🖨️ このページを印刷する": "🖨️ Print this page",
 "🗑 削除": "🗑 Delete",
 "🗺️ マップで見る": "🗺️ View on map",
 "🙏 祈り": "🙏 Prayer",
 "🚫 ブロック": "🚫 Block",
 "🚫 ブロック中のユーザー": "🚫 Blocked users",
 "🤝 コミュニティを見る": "🤝 Visit Community"
};

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

  /* Patterns for sentences that contain user data (names, numbers, ...) */
  var RULES = [
    [/^(\d+) コメント$/, function (m) { return m[1] + (m[1] === '1' ? ' comment' : ' comments'); }],
    [/^「(.+)」をブロックしますか？ ブロックすると投稿・コメントが非表示になります。$/,
      function (m) { return 'Block “' + m[1] + '”? Their posts and comments will be hidden.'; }],
    [/^(.+) のブロックを解除しました$/, function (m) { return 'Unblocked ' + m[1]; }],
    [/^(.+) をブロックしました$/, function (m) { return 'Blocked ' + m[1]; }],
    [/^(.+) さんへ連絡する$/, function (m) { return 'Contact ' + m[1]; }],
    [/^【(.+)】を受け付けました。$/, function (m) { return '“' + translate(m[1]) + '” has been received.'; }],
    [/^演奏依頼：(.+)$/, function (m) { return 'Performance request: ' + translate(m[1]); }],
    [/^教会掲載申請：(.+)$/, function (m) { return 'Church listing request: ' + translate(m[1]); }],
    [/^イベント：(.+)$/, function (m) { return 'Event: ' + m[1]; }],
    [/^参加人数：(\d+)名$/, function (m) { return 'Participants: ' + m[1]; }],
    [/^備考：(.+)$/, function (m) { return 'Notes: ' + m[1]; }],
    [/^楽器：(.+)$/, function (m) { return 'Instruments: ' + m[1].split('・').map(translate).join(', '); }],
    [/^地域：(.+)$/, function (m) { return 'Area: ' + translate(m[1]); }],
    [/^\u{1F4CD}\uFE0F? (.+)$/u, function (m) { return '\u{1F4CD} ' + translate(m[1]); }],
    [/^経験 (.+)$/, function (m) { return 'Experience: ' + translate(m[1]); }],
    [/^\u{1F3E0}\uFE0F? スタジオ(.+)$/u, function (m) { return '\u{1F3E0} Studio: ' + translate(m[1]); }],
    [/^新着(★?)$/, function (m) { return 'New' + m[1]; }],
    [/^(.+)奏者$/, function (m) { var t = translate(m[1]); return t === m[1] ? m[0] : t + ' player'; }]
  ];

  function translate(s) {
    if (Object.prototype.hasOwnProperty.call(DICT, s)) return DICT[s];
    if (s.indexOf(' · ') > -1) {
      var parts = s.split(' · '), changed = false;
      var out = parts.map(function (p) { var r = translate(p); if (r !== p) changed = true; return r; });
      if (changed) return out.join(' · ');
    }
    for (var i = 0; i < RULES.length; i++) {
      var m = s.match(RULES[i][0]);
      if (m) return RULES[i][1](m);
    }
    return s;
  }

  var api = root.i18n = {
    translate: translate,
    lang: function () { return 'ja'; },
    t: function (s) { return s; },
    orig: function (el) { return el.textContent; }
  };

  if (typeof document === 'undefined') return;   // (unit tests run without a DOM)

  /* ---------- state ---------- */
  var KEY = 'wl_lang';
  var lang = 'ja';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'ja') localStorage.setItem(KEY, q);
    lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'ja';
  } catch (e) { /* storage blocked: stay Japanese */ }

  var origText = new WeakMap();
  var origAttr = new WeakMap();
  var origTitle = null;
  var ATTRS = ['placeholder', 'title', 'alt', 'label'];
  var obs = null;
  var NON_ASCII = /[^\x00-\x7f]/;

  /* hide the page until it is translated, to avoid a Japanese flash */
  var hideEl = null;
  if (lang === 'en') {
    hideEl = document.createElement('style');
    hideEl.textContent = 'html{visibility:hidden}';
    document.head.appendChild(hideEl);
    setTimeout(reveal, 2500);
  }
  function reveal() { if (hideEl && hideEl.parentNode) hideEl.parentNode.removeChild(hideEl); hideEl = null; }

  /* ---------- translating nodes ---------- */
  function skip(el) {
    var n = el && el.nodeName;
    return n === 'SCRIPT' || n === 'STYLE' || n === 'NOSCRIPT' || n === 'TEXTAREA';
  }

  function applyText(n) {
    var p = n.parentNode;
    if (!p || skip(p)) return;
    var raw = n.data;
    if (!NON_ASCII.test(raw)) return;
    var key = norm(raw);
    if (!key) return;
    var out = translate(key);
    if (out === key) return;
    var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
    if (/^[.,;:!?)\]]/.test(out)) lead = '';
    if (!origText.has(n)) origText.set(n, raw);
    /* keep saved values Japanese for <option>s that have no explicit value */
    if (p.nodeName === 'OPTION' && !p.hasAttribute('value')) p.setAttribute('value', norm(origText.get(n)));
    n.data = lead + out + trail;
  }

  function applyAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      if (a === 'label' && el.nodeName !== 'OPTGROUP') continue;
      var v = el.getAttribute(a);
      if (!NON_ASCII.test(v)) continue;
      var key = norm(v), out = translate(key);
      if (out === key) continue;
      var o = origAttr.get(el) || {};
      if (!(a in o)) o[a] = v;
      origAttr.set(el, o);
      el.setAttribute(a, out);
    }
  }

  function walk(node) {
    if (node.nodeType === 3) { applyText(node); return; }
    if (node.nodeType !== 1) return;
    var nn = node.nodeName;
    if (nn === 'SCRIPT' || nn === 'STYLE' || nn === 'NOSCRIPT') return;
    applyAttrs(node);                 // placeholders etc. (also on <textarea>)
    if (nn === 'TEXTAREA') return;    // never touch what the user typed
    for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
  }

  function restore(node) {
    if (node.nodeType === 3) {
      if (origText.has(node)) { node.data = origText.get(node); origText.delete(node); }
      return;
    }
    if (node.nodeType !== 1) return;
    var o = origAttr.get(node);
    if (o) { for (var a in o) node.setAttribute(a, o[a]); origAttr.delete(node); }
    for (var c = node.firstChild; c; c = c.nextSibling) restore(c);
  }

  function setTitle(en) {
    if (origTitle === null) origTitle = document.title;
    document.title = en ? translate(norm(origTitle)) : origTitle;
  }

  /* ---------- watch for content the pages render later (Supabase etc.) ---------- */
  function startObs() {
    if (!obs) {
      obs = new MutationObserver(function (muts) {
        if (lang !== 'en') return;
        muts.forEach(function (m) {
          if (m.type === 'childList') {
            for (var i = 0; i < m.addedNodes.length; i++) walk(m.addedNodes[i]);
          } else if (m.type === 'characterData') {
            applyText(m.target);
          } else if (m.type === 'attributes') {
            applyAttrs(m.target);
          }
        });
        obs.takeRecords();   // ignore the changes we just made ourselves
      });
    }
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  function stopObs() { if (obs) { obs.disconnect(); } }

  /* ---------- switching ---------- */
  function setLang(l, persist) {
    lang = l;
    try { if (persist !== false) localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.setAttribute('lang', l);
    if (l === 'en') { walk(document.body); setTitle(true); startObs(); }
    else { stopObs(); restore(document.body); setTitle(false); }
    var b = document.querySelector('.wl-lang');
    if (b) b.setAttribute('data-lang', l);
    document.dispatchEvent(new CustomEvent('wl:langchange', { detail: { lang: l } }));
  }

  api.lang = function () { return lang; };
  api.t = function (s) { return lang === 'en' ? translate(norm(s)) : s; };
  api.orig = function (el) {
    var s = '';
    (function f(n) {
      if (n.nodeType === 3) s += origText.has(n) ? origText.get(n) : n.data;
      else for (var c = n.firstChild; c; c = c.nextSibling) f(c);
    })(el);
    return s;
  };
  api.set = setLang;

  /* ---------- toggle button in the header ---------- */
  function injectCss() {
    var st = document.createElement('style');
    st.textContent =
      '.wl-lang{display:inline-flex;align-items:center;padding:2px;border:1.5px solid var(--accent-border,rgba(91,62,245,.22));' +
      'border-radius:20px;background:var(--accent-bg,rgba(91,62,245,.08));cursor:pointer;font-family:inherit;flex-shrink:0;line-height:1}' +
      '.wl-lang span{font-size:11px;font-weight:700;padding:5px 9px;border-radius:16px;color:var(--text3,#7a9a80);line-height:1}' +
      '.wl-lang[data-lang=ja] span[data-l=ja],.wl-lang[data-lang=en] span[data-l=en]{background:var(--accent,#5b3ef5);color:#fff}' +
      '.wl-lang-wrap{display:flex;align-items:center;gap:8px;flex-shrink:0}';
    document.head.appendChild(st);
  }

  function mountToggle() {
    var header = document.querySelector('header');
    if (!header || header.querySelector('.wl-lang')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'wl-lang';
    btn.setAttribute('data-lang', lang);
    btn.setAttribute('aria-label', 'Language / 言語');
    btn.innerHTML = '<span data-l="ja">日本語</span><span data-l="en">EN</span>';
    btn.addEventListener('click', function () { setLang(lang === 'en' ? 'ja' : 'en'); });
    var last = header.lastElementChild;
    if (last && last.tagName === 'DIV' && last.children.length > 0 && !last.classList.contains('logo')) {
      last.insertBefore(btn, last.firstChild);
    } else {
      var wrap = document.createElement('div');
      wrap.className = 'wl-lang-wrap';
      if (last && last !== header.firstElementChild) {
        header.insertBefore(wrap, last);
        wrap.appendChild(btn);
        wrap.appendChild(last);
      } else {
        header.appendChild(wrap);
        wrap.appendChild(btn);
      }
    }
  }

  function init() {
    injectCss();
    mountToggle();
    if (lang === 'en') setLang('en', false);
    reveal();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})(typeof window !== 'undefined' ? window : globalThis);
