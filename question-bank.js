// 電腦網路測驗題庫
const questionBank = [
    {
        id: 1,
        question: "金融業間之電子資金移轉作業是屬於電子商務的何種範疇？",
        options: [
            { id: "A", text: "B2B" },
            { id: "B", text: "C2B" },
            { id: "C", text: "B2C" },
            { id: "D", text: "C2C" }
        ],
        correctAnswer: "A",
        explanation: "金融業間的電子資金移轉屬於企業對企業(B2B)的電子商務範疇。",
        source: "92二技"
    },
    {
        id: 2,
        question: "大部分的組織及個人都必須經由ISP的伺服器，才能和網際網路相連，下列何者為台灣學術網路媒介？",
        options: [
            { id: "A", text: "Intel" },
            { id: "B", text: "TANet" },
            { id: "C", text: "HiNet" },
            { id: "D", text: "SEEDNet" }
        ],
        correctAnswer: "B",
        explanation: "TANet是台灣學術網路的簡稱，主要提供學術研究單位使用。",
        source: "93統測"
    },
    {
        id: 3,
        question: "下列何種網際網路服務可以提供線上傳遞訊息及線上即時交談的功能？",
        options: [
            { id: "A", text: "E-mail" },
            { id: "B", text: "ICQ" },
            { id: "C", text: "WWW" },
            { id: "D", text: "FTP" }
        ],
        correctAnswer: "B",
        explanation: "ICQ是早期流行的即時通訊軟體，提供線上傳遞訊息及即時交談功能。",
        source: "93統測"
    },
    {
        id: 4,
        question: "下列哪一個網際網路 (Internet) 上的服務，其主要目的是讓使用者搜尋檔案所在的位置，以方便下載？",
        options: [
            { id: "A", text: "IRC" },
            { id: "B", text: "Archie" },
            { id: "C", text: "News" },
            { id: "D", text: "Telnet" }
        ],
        correctAnswer: "B",
        explanation: "Archie是早期網際網路上用來搜尋檔案的服務，類似現代的搜尋引擎。",
        source: "93統測"
    },
    {
        id: 5,
        question: "下列有關部落格 (BLOG) 的敘述，何者錯誤？",
        options: [
            { id: "A", text: "容許網友在裡頭寫文章、貼照片、儲存個人相關訊息" },
            { id: "B", text: "在網路上提供個人網頁空間" },
            { id: "C", text: "是由Weblog演化而來" },
            { id: "D", text: "目前成為會員都必須付費" }
        ],
        correctAnswer: "D",
        explanation: "目前大多數的部落格平台都提供免費服務，成為會員無需付費。",
        source: "94二技"
    },
    {
        id: 6,
        question: "電子商務發展快速，改變了許多傳統的商業模式。下列何者是消費者對消費者 (C to C) 的電子商務類型？",
        options: [
            { id: "A", text: "博客來網路書店" },
            { id: "B", text: "汽車廠商直營網站" },
            { id: "C", text: "統一超商的EOS系統" },
            { id: "D", text: "Yahoo拍賣網站" }
        ],
        correctAnswer: "D",
        explanation: "Yahoo拍賣網站是典型的C2C電子商務，消費者可以直接向其他消費者購買商品。",
        source: "94統測"
    },
    {
        id: 7,
        question: "下列何者是電腦科技在「居家安全」方面的應用？",
        options: [
            { id: "A", text: "門禁管制" },
            { id: "B", text: "理財報稅" },
            { id: "C", text: "資訊家電" },
            { id: "D", text: "網路購物" }
        ],
        correctAnswer: "A",
        explanation: "門禁管制系統是電腦科技在居家安全方面的應用。",
        source: "94統測"
    },
    {
        id: 8,
        question: "合購網站與湊票網站是屬於下列哪一種電子商務類型？",
        options: [
            { id: "A", text: "B2C" },
            { id: "B", text: "C2C" },
            { id: "C", text: "C2B" },
            { id: "D", text: "B2B" }
        ],
        correctAnswer: "C",
        explanation: "合購網站與湊票網站是消費者集體向企業購買的C2B電子商務模式。",
        source: "94二技"
    },
    {
        id: 9,
        question: "下列哪一種軟體，可以讓使用者在網路上即時互相呼叫、傳遞訊息及進行聊天？",
        options: [
            { id: "A", text: "Telnet" },
            { id: "B", text: "FTP" },
            { id: "C", text: "Outlook" },
            { id: "D", text: "ICQ" }
        ],
        correctAnswer: "D",
        explanation: "ICQ是即時通訊軟體，提供即時呼叫、傳遞訊息及聊天功能。",
        source: "95統測"
    },
    {
        id: 10,
        question: "一家 IC 製造公司利用網路與其供應商之間進行電子資料交換與電子採購處理，這是屬於下列哪一種型態的電子商務？",
        options: [
            { id: "A", text: "B2C" },
            { id: "B", text: "C2C" },
            { id: "C", text: "B2B" },
            { id: "D", text: "B2G" }
        ],
        correctAnswer: "C",
        explanation: "企業與供應商之間的電子資料交換屬於B2B電子商務。",
        source: "96統測"
    },
    {
        id: 11,
        question: "下列何者為企業與企業間自動化交易的電子商務類型？",
        options: [
            { id: "A", text: "C2C" },
            { id: "B", text: "C2B" },
            { id: "C", text: "B2B" },
            { id: "D", text: "B2C" }
        ],
        correctAnswer: "C",
        explanation: "企業與企業間的自動化交易屬於B2B電子商務。",
        source: "96統測"
    },
    {
        id: 12,
        question: "下列哪一套軟體不是專門用來進行即時通訊的軟體？",
        options: [
            { id: "A", text: "MSN Messenger" },
            { id: "B", text: "Outlook Express" },
            { id: "C", text: "Skype" },
            { id: "D", text: "ICQ" }
        ],
        correctAnswer: "B",
        explanation: "Outlook Express是電子郵件客戶端軟體，不是專門的即時通訊軟體。",
        source: "96統測"
    },
    {
        id: 13,
        question: "下列何者不是網際網路的服務項目？",
        options: [
            { id: "A", text: "FTP" },
            { id: "B", text: "OLAP" },
            { id: "C", text: "IRC" },
            { id: "D", text: "TELNET" }
        ],
        correctAnswer: "B",
        explanation: "OLAP(線上分析處理)是資料庫技術，不是網際網路的服務項目。",
        source: "96統測"
    },
    {
        id: 14,
        question: "將個人物品透過特定網站，如Yahoo!奇摩拍賣、eBay等進行拍賣，以提供其他網友競標購買。此種運用網際網路進行交易的電子商務類型是：",
        options: [
            { id: "A", text: "C2B" },
            { id: "B", text: "B2B" },
            { id: "C", text: "B2C" },
            { id: "D", text: "C2C" }
        ],
        correctAnswer: "D",
        explanation: "個人透過拍賣網站向其他個人銷售商品屬於C2C電子商務。",
        source: "96統測"
    },
    {
        id: 15,
        question: "下列哪一項電腦應用的主要目的是利用電腦網路來進行跨行轉帳的工作？",
        options: [
            { id: "A", text: "電子商務" },
            { id: "B", text: "網路銀行" },
            { id: "C", text: "資料處理" },
            { id: "D", text: "視訊會議" }
        ],
        correctAnswer: "B",
        explanation: "網路銀行主要提供跨行轉帳等金融服務。",
        source: "96二技"
    },
    {
        id: 16,
        question: "使用者備有數據機，配有撥接帳號，就可透過家裡之電話線路撥接上ISP，連上Internet，下列何者屬學術界使用之免費ISP？",
        options: [
            { id: "A", text: "SEEDnet" },
            { id: "B", text: "Hinet" },
            { id: "C", text: "TANet" },
            { id: "D", text: "UUNet" }
        ],
        correctAnswer: "C",
        explanation: "TANet是台灣學術網路，提供學術界免費使用。",
        source: "丙檢"
    },
    {
        id: 17,
        question: "下列何者為TANet之中文意義？",
        options: [
            { id: "A", text: "電子郵件" },
            { id: "B", text: "網際網路" },
            { id: "C", text: "台灣學術網路" },
            { id: "D", text: "全球資訊網" }
        ],
        correctAnswer: "C",
        explanation: "TANet是台灣學術網路的簡稱。",
        source: "丙檢"
    },
    {
        id: 18,
        question: "目前在國內最大的「學術性網際網路」服務機構為下列何者？",
        options: [
            { id: "A", text: "SeedNet" },
            { id: "B", text: "TANet" },
            { id: "C", text: "BitNet" },
            { id: "D", text: "HiNet" }
        ],
        correctAnswer: "B",
        explanation: "TANet是台灣最大的學術性網際網路服務機構。",
        source: "丙檢"
    },
    {
        id: 19,
        question: "下列英文名稱所對照之中文意義，何者有誤？",
        options: [
            { id: "A", text: "FTP檔案搜尋系統" },
            { id: "B", text: "TANet台灣學術網路" },
            { id: "C", text: "IRC多人線上聊天系統" },
            { id: "D", text: "Telnet遠端登入" }
        ],
        correctAnswer: "A",
        explanation: "FTP是檔案傳輸協定，不是檔案搜尋系統。",
        source: "丙檢"
    },
    {
        id: 20,
        question: "什麼是3G？",
        options: [
            { id: "A", text: "需透過數據機上網" },
            { id: "B", text: "撥接上網方式" },
            { id: "C", text: "專線固接" },
            { id: "D", text: "可使手機行動接收影音的技術" }
        ],
        correctAnswer: "D",
        explanation: "3G是第三代行動通訊技術，可使手機行動接收影音。",
        source: ""
    },
    {
        id: 21,
        question: "學校中所使用的網路為",
        options: [
            { id: "A", text: "Hinet" },
            { id: "B", text: "SeedNet" },
            { id: "C", text: "台灣學術網路" },
            { id: "D", text: "SiNet" }
        ],
        correctAnswer: "C",
        explanation: "學校通常使用台灣學術網路(TANet)。",
        source: ""
    },
    {
        id: 22,
        question: "目前台灣三大網路中，以學校及學術研究單位為主所使用的網路為？",
        options: [
            { id: "A", text: "HiNet" },
            { id: "B", text: "TANet" },
            { id: "C", text: "SiNet" },
            { id: "D", text: "SeedNet" }
        ],
        correctAnswer: "B",
        explanation: "TANet是台灣學術網路，主要供學校及學術研究單位使用。",
        source: ""
    },
    {
        id: 23,
        question: "下列何者不是ISP (Internet Service Provider) 所提供的服務？",
        options: [
            { id: "A", text: "提供個人網頁" },
            { id: "B", text: "提供個人電子郵件" },
            { id: "C", text: "撥接上網" },
            { id: "D", text: "提供作業系統安裝" }
        ],
        correctAnswer: "D",
        explanation: "ISP不提供作業系統安裝服務，這是電腦廠商或維修服務的範疇。",
        source: ""
    },
    {
        id: 24,
        question: "使用者備有數據機，配有撥接帳號，就可透過家裡之電話線路撥接上ISP，連上Internet，下列何者屬學術界使用之免費ISP？",
        options: [
            { id: "A", text: "SEEDnet" },
            { id: "B", text: "HiNet" },
            { id: "C", text: "TANet" },
            { id: "D", text: "So-Net" }
        ],
        correctAnswer: "C",
        explanation: "TANet是學術界使用的免費ISP。",
        source: ""
    },
    {
        id: 25,
        question: "小明成天流連於網路咖啡店中與網友玩戰略遊戲，請問小明是使用哪種網路資源？",
        options: [
            { id: "A", text: "MUD" },
            { id: "B", text: "WWW" },
            { id: "C", text: "Archie" },
            { id: "D", text: "E-mail" }
        ],
        correctAnswer: "A",
        explanation: "MUD是多使用者迷宮，是早期的網路文字遊戲。",
        source: ""
    },
    {
        id: 26,
        question: "欲從網路下載軟體，若已知檔案名稱為xyz.zip，請問使用何種方式可最快找到這個檔案身在何處？",
        options: [
            { id: "A", text: "MSN" },
            { id: "B", text: "Archie" },
            { id: "C", text: "MUD" },
            { id: "D", text: "FTP" }
        ],
        correctAnswer: "B",
        explanation: "Archie是專門用來搜尋檔案的服務。",
        source: ""
    },
    {
        id: 27,
        question: "下列的專有名詞中英對照，何者有誤？",
        options: [
            { id: "A", text: "「電子佈告欄」BBS" },
            { id: "B", text: "「電子郵件」E-mail" },
            { id: "C", text: "「檔案傳輸協定」FTP" },
            { id: "D", text: "「區域網路」WAN" }
        ],
        correctAnswer: "D",
        explanation: "WAN是廣域網路，區域網路是LAN。",
        source: ""
    },
    {
        id: 28,
        question: "下列何者不是網際網路 (Internet) 所提供的服務？",
        options: [
            { id: "A", text: "POS" },
            { id: "B", text: "FTP" },
            { id: "C", text: "WWW" },
            { id: "D", text: "Netnews" }
        ],
        correctAnswer: "A",
        explanation: "POS(銷售時點系統)不是網際網路的服務，而是零售業的系統。",
        source: ""
    },
    {
        id: 29,
        question: "Yahoo網路拍賣會就是典型的？",
        options: [
            { id: "A", text: "B2C" },
            { id: "B", text: "B2B" },
            { id: "C", text: "C2C" },
            { id: "D", text: "C2B" }
        ],
        correctAnswer: "C",
        explanation: "Yahoo拍賣是消費者對消費者的C2C電子商務。",
        source: ""
    },
    {
        id: 30,
        question: "B2C的B是指？",
        options: [
            { id: "A", text: "Batch" },
            { id: "B", text: "BBS" },
            { id: "C", text: "Belief" },
            { id: "D", text: "Business" }
        ],
        correctAnswer: "D",
        explanation: "B2C中的B是指Business(企業)。",
        source: ""
    },
    {
        id: 31,
        question: "C2B的C是指",
        options: [
            { id: "A", text: "Communication" },
            { id: "B", text: "Calculator" },
            { id: "C", text: "Consumer" },
            { id: "D", text: "Computer" }
        ],
        correctAnswer: "C",
        explanation: "C2B中的C是指Consumer(消費者)。",
        source: ""
    },
    {
        id: 32,
        question: "由一群電腦透過某些傳輸路徑所連接而成的一個系統稱之為？",
        options: [
            { id: "A", text: "電腦系統" },
            { id: "B", text: "電腦網路" },
            { id: "C", text: "網路資源" },
            { id: "D", text: "通訊系統" }
        ],
        correctAnswer: "B",
        explanation: "由電腦透過傳輸路徑連接而成的系統稱為電腦網路。",
        source: ""
    },
    {
        id: 33,
        question: "為使用者提供檔案的服務並管理共享資源，如硬碟、印表機等稱之為？",
        options: [
            { id: "A", text: "工作站" },
            { id: "B", text: "網路卡" },
            { id: "C", text: "連接器" },
            { id: "D", text: "檔案伺服器" }
        ],
        correctAnswer: "D",
        explanation: "提供檔案服務和管理共享資源的電腦稱為檔案伺服器。",
        source: ""
    },
    {
        id: 34,
        question: "透過電話線路，經過交換機層層的轉接來進行訊息傳遞的線路稱為？",
        options: [
            { id: "A", text: "電話線路" },
            { id: "B", text: "實體線路" },
            { id: "C", text: "電纜線路" },
            { id: "D", text: "虛擬線路" }
        ],
        correctAnswer: "D",
        explanation: "透過交換機轉接的線路稱為虛擬線路。",
        source: ""
    },
    {
        id: 35,
        question: "有關電腦網路的優點，下列何者為非？",
        options: [
            { id: "A", text: "資源共享" },
            { id: "B", text: "分散處理" },
            { id: "C", text: "節約資源" },
            { id: "D", text: "缺乏彈性" }
        ],
        correctAnswer: "D",
        explanation: "缺乏彈性不是電腦網路的優點，反而是缺點。",
        source: ""
    },
    {
        id: 36,
        question: "國家基礎建設的英文簡稱為？",
        options: [
            { id: "A", text: "INTERNET" },
            { id: "B", text: "NII" },
            { id: "C", text: "ISDN" },
            { id: "D", text: "ISBN" }
        ],
        correctAnswer: "B",
        explanation: "國家基礎建設的英文簡稱是NII(National Information Infrastructure)。",
        source: ""
    },
    {
        id: 37,
        question: "網路中MUD為？",
        options: [
            { id: "A", text: "網路遊戲" },
            { id: "B", text: "網路論壇" },
            { id: "C", text: "線上聊天" },
            { id: "D", text: "網路CALL IN" }
        ],
        correctAnswer: "A",
        explanation: "MUD是多使用者迷宮，是早期的網路文字遊戲。",
        source: ""
    },
    {
        id: 38,
        question: "國家高速網路與計算中心簡稱為？",
        options: [
            { id: "A", text: "NCC" },
            { id: "B", text: "ISDN" },
            { id: "C", text: "NCHC" },
            { id: "D", text: "NII" }
        ],
        correctAnswer: "C",
        explanation: "國家高速網路與計算中心簡稱為NCHC。",
        source: ""
    },
    {
        id: 39,
        question: "為了提供民眾查詢即時的公車資訊，最需要結合下列哪一項技術？",
        options: [
            { id: "A", text: "GPS" },
            { id: "B", text: "CAI" },
            { id: "C", text: "ABS" },
            { id: "D", text: "VR" }
        ],
        correctAnswer: "A",
        explanation: "查詢即時公車資訊需要結合GPS定位技術。",
        source: "99統測"
    },
    {
        id: 40,
        question: "電子商務係指透過網路進行的商業活動，包括商品交易、資訊提供、市場情報、客戶服務等，依對象分類可分企業和消費者二大類群，其中「企業對消費者」為何？",
        options: [
            { id: "A", text: "B2C" },
            { id: "B", text: "C2C" },
            { id: "C", text: "B2B" },
            { id: "D", text: "C2B" }
        ],
        correctAnswer: "A",
        explanation: "企業對消費者的電子商務稱為B2C。",
        source: "101統測"
    },
    {
        id: 41,
        question: "有關電腦應用在生活及學習的敘述，下列何者正確？",
        options: [
            { id: "A", text: "GPS由於保密性高，因此廣泛應用在門禁管制" },
            { id: "B", text: "藍牙是結合衛星及無線技術之導航系統" },
            { id: "C", text: "GIS是一套搜尋及分析地理區位特性的資訊系統" },
            { id: "D", text: "CAI是一種透過視覺及觸覺模擬真實環境的系統" }
        ],
        correctAnswer: "C",
        explanation: "GIS(地理資訊系統)是用來搜尋及分析地理區位特性的資訊系統。",
        source: "95統測"
    },
    // 2-1 網路架構 & 2-2 網路設備題目
    {
        id: 42,
        question: "下列何種設備可將類比 (Analog) 信號與數位 (Digital) 信號互相轉換？",
        options: [
            { id: "A", text: "前置處理機" },
            { id: "B", text: "多工機" },
            { id: "C", text: "傳真機" },
            { id: "D", text: "數據機" }
        ],
        correctAnswer: "D",
        explanation: "數據機(MODEM)的功能就是將類比信號與數位信號互相轉換。",
        source: "丙檢"
    },
    {
        id: 43,
        question: "以下哪一種通訊連線方式可以做為上Internet網路之方法？",
        options: [
            { id: "A", text: "掃瞄器" },
            { id: "B", text: "數據機" },
            { id: "C", text: "傳真機" },
            { id: "D", text: "呼叫器" }
        ],
        correctAnswer: "B",
        explanation: "數據機可以透過電話線路撥接上網，是早期上Internet的方法之一。",
        source: "丙檢"
    },
    {
        id: 44,
        question: "利用標準數據機連上Internet，其最高傳輸速度為若干？",
        options: [
            { id: "A", text: "33.6K" },
            { id: "B", text: "56K" },
            { id: "C", text: "64K" },
            { id: "D", text: "128K bps" }
        ],
        correctAnswer: "B",
        explanation: "標準數據機的最高傳輸速度為56K bps。",
        source: "91統測"
    },
    {
        id: 45,
        question: "10Base2乙太網路使用RG58同軸電纜為傳輸媒介，其網路拓樸為下列哪種結構？",
        options: [
            { id: "A", text: "星狀" },
            { id: "B", text: "環狀" },
            { id: "C", text: "匯流排" },
            { id: "D", text: "網狀" }
        ],
        correctAnswer: "C",
        explanation: "10Base2乙太網路使用同軸電纜，採用匯流排拓樸結構。",
        source: "92統測"
    },
    {
        id: 46,
        question: "下列哪一種網路拓撲，是以一條線路來連接所有的節點，線路兩端結尾處則以終端電阻來結束佈線？",
        options: [
            { id: "A", text: "匯流排拓撲" },
            { id: "B", text: "環狀拓撲" },
            { id: "C", text: "星狀拓撲" },
            { id: "D", text: "網狀拓撲" }
        ],
        correctAnswer: "A",
        explanation: "匯流排拓撲使用單一主幹線路連接所有節點，兩端需要終端電阻。",
        source: "92統測、95技競"
    },
    {
        id: 47,
        question: "一群同學同住一棟房舍中，使用一部集線器將所有電腦連接起來形成一個區域乙太網路，則該網路最可能為下列哪種拓樸？",
        options: [
            { id: "A", text: "星狀" },
            { id: "B", text: "環狀" },
            { id: "C", text: "網狀" },
            { id: "D", text: "匯流排" }
        ],
        correctAnswer: "A",
        explanation: "使用集線器連接所有電腦的網路架構屬於星狀拓樸。",
        source: "96統測"
    },
    {
        id: 48,
        question: "有關網路設備的敘述，何者正確？",
        options: [
            { id: "A", text: "交換器是用來轉換數位訊號與類比訊號" },
            { id: "B", text: "橋接器是用來連接同一區域網路內的多部電腦" },
            { id: "C", text: "路由器是用來定義電腦在區域網路上的位置" },
            { id: "D", text: "閘道器是用來連接不同類型的通訊協定" }
        ],
        correctAnswer: "D",
        explanation: "閘道器的主要功能是連接不同類型的通訊協定或網路系統。",
        source: "96統測"
    },
    {
        id: 49,
        question: "下列網路傳輸設備中，何者用來將網路訊號增強後再送出？",
        options: [
            { id: "A", text: "橋接器 (Bridge)" },
            { id: "B", text: "中繼器 (Repeater)" },
            { id: "C", text: "路由器 (Router)" },
            { id: "D", text: "交換器 (Switch)" }
        ],
        correctAnswer: "B",
        explanation: "中繼器的主要功能是增強訊號，延長傳輸距離。",
        source: "96統測"
    },
    {
        id: 50,
        question: "下列有關網路傳輸設備的敘述，何者錯誤？",
        options: [
            { id: "A", text: "集線器 (hub) 可連接多個網路節點" },
            { id: "B", text: "中繼器 (repeater) 主要用於連接兩個區域網路" },
            { id: "C", text: "路由器 (router) 可連接多個網路" },
            { id: "D", text: "交換器 (switch) 類似集線器可減少訊息發生碰撞的機率" }
        ],
        correctAnswer: "B",
        explanation: "中繼器主要用於訊號增強，不是用於連接兩個區域網路，那是橋接器或路由器的功能。",
        source: "97統測"
    },
    {
        id: 51,
        question: "下列何種網路設備可以作為區域網路與廣域網路連接時的橋樑？",
        options: [
            { id: "A", text: "路由器 (Router)" },
            { id: "B", text: "中繼器 (Repeater)" },
            { id: "C", text: "集線器 (Hub)" },
            { id: "D", text: "數據機 (Modem)" }
        ],
        correctAnswer: "A",
        explanation: "路由器可以連接不同類型的網路，包括區域網路與廣域網路。",
        source: "98統測"
    },
    {
        id: 52,
        question: "下列何種網路通訊設備會將連結的網段組成單一個踫撞領域？",
        options: [
            { id: "A", text: "路由器" },
            { id: "B", text: "橋接器" },
            { id: "C", text: "集線器" },
            { id: "D", text: "交換器" }
        ],
        correctAnswer: "C",
        explanation: "集線器會將所有連接的網段組成單一碰撞領域。",
        source: "93二技"
    },
    {
        id: 53,
        question: "辦公室裡有10部電腦，要共同分享一部印表機，需安裝下列何種設備？",
        options: [
            { id: "A", text: "計數器" },
            { id: "B", text: "中繼器" },
            { id: "C", text: "郵件伺服器" },
            { id: "D", text: "列印伺服器" }
        ],
        correctAnswer: "D",
        explanation: "列印伺服器可以讓多部電腦共享同一台印表機。",
        source: "96二技"
    },
    {
        id: 54,
        question: "對IP分享器之敘述，下列何者錯誤？",
        options: [
            { id: "A", text: "多台電腦可同時上網" },
            { id: "B", text: "無連線資源分享的功能" },
            { id: "C", text: "有類似集線器的功能" },
            { id: "D", text: "使用NAT (網路位址轉換)技術" }
        ],
        correctAnswer: "B",
        explanation: "IP分享器具有連線資源分享的功能，可以讓多台電腦共享一個對外連線。",
        source: "96二技"
    },
    {
        id: 55,
        question: "下列何者是網路設備？",
        options: [
            { id: "A", text: "交換器" },
            { id: "B", text: "瀏覽器" },
            { id: "C", text: "暫存器" },
            { id: "D", text: "正反器" }
        ],
        correctAnswer: "A",
        explanation: "交換器是網路設備，其他選項都不是網路設備。",
        source: "96二技"
    },
    {
        id: 56,
        question: "電腦教室內的5部電腦，若以雙絞線直接連至具有10個埠的集線器上，請問此種網路連線架構稱為？",
        options: [
            { id: "A", text: "匯流排拓樸" },
            { id: "B", text: "星狀拓樸" },
            { id: "C", text: "環狀拓樸" },
            { id: "D", text: "半圓狀拓樸" }
        ],
        correctAnswer: "B",
        explanation: "使用集線器連接電腦的架構屬於星狀拓樸。",
        source: "90統測"
    },
    {
        id: 57,
        question: "在同一辦公室裡，如果在20部以上的電腦，要分享一部具有網路功能的高速雷射印表機，下列何者是最合適的設備？",
        options: [
            { id: "A", text: "集線器" },
            { id: "B", text: "閘道器" },
            { id: "C", text: "路由器" },
            { id: "D", text: "列印伺服器" }
        ],
        correctAnswer: "D",
        explanation: "列印伺服器專門用於讓多台電腦共享印表機。",
        source: "91統測"
    },
    {
        id: 58,
        question: "關於電腦網路的敘述，下列何者有誤？",
        options: [
            { id: "A", text: "通訊協定TCP/IP可適用於區域網路或廣域網路" },
            { id: "B", text: "有線傳輸媒介中，光纖比雙絞線與同軸電纜較不易受電磁波干擾" },
            { id: "C", text: "環狀網路架構藉由一集線器以連接各節點電腦，故一旦集線器故障，則會使整個網路停擺" },
            { id: "D", text: "區域名稱 (domain name) 與IP位址均代表網址且具唯一性，但區域名稱比較容易記憶" }
        ],
        correctAnswer: "C",
        explanation: "環狀網路架構不是透過集線器連接，而是節點間形成環形連接。",
        source: "93統測"
    },
    {
        id: 59,
        question: "若要連接兩個不同的網路區段，且具有選擇資料傳輸路徑的功能，則使用下列哪一種網路通訊設備最合適？",
        options: [
            { id: "A", text: "路由器 (Router)" },
            { id: "B", text: "集線器 (Hub)" },
            { id: "C", text: "中繼器 (Repeater)" },
            { id: "D", text: "橋接器 (Bridge)" }
        ],
        correctAnswer: "A",
        explanation: "路由器具有選擇傳輸路徑的功能，可以連接不同網路區段。",
        source: "94統測"
    },
    {
        id: 60,
        question: "下列哪個網路連線設備能協助訊息封包於Internet傳遞過程中找到適當路徑，並順利將此訊息封包順利傳送至目的地？",
        options: [
            { id: "A", text: "ADSL數據機 (ADSL Modem)" },
            { id: "B", text: "路由器 (Router)" },
            { id: "C", text: "乙太交換器 (Ether Switch)" },
            { id: "D", text: "橋接器 (Bridge)" }
        ],
        correctAnswer: "B",
        explanation: "路由器負責在網路間選擇最佳路徑來傳送封包。",
        source: "96技競"
    },
    {
        id: 61,
        question: "下列哪一種網路的拓撲型式，是用一條線路連接所有的網路節點，在網路線路兩端結尾處則以終端電阻來結束佈線？",
        options: [
            { id: "A", text: "星狀拓撲" },
            { id: "B", text: "匯流排拓撲" },
            { id: "C", text: "環狀拓撲" },
            { id: "D", text: "網狀拓撲" }
        ],
        correctAnswer: "B",
        explanation: "匯流排拓撲使用單一主幹線路，兩端需要終端電阻。",
        source: "95技競"
    },
    {
        id: 62,
        question: "10Base-T乙太網路，此種乙太網路的佈線方式為？",
        options: [
            { id: "A", text: "匯流排" },
            { id: "B", text: "環狀" },
            { id: "C", text: "星狀" },
            { id: "D", text: "網狀" }
        ],
        correctAnswer: "C",
        explanation: "10Base-T乙太網路使用雙絞線，採用星狀佈線方式。",
        source: "丙檢"
    },
    {
        id: 63,
        question: "以下哪一項裝置不屬於架設乙太區域網路時可能會使用的設備？",
        options: [
            { id: "A", text: "數據機" },
            { id: "B", text: "中繼器" },
            { id: "C", text: "集線器" },
            { id: "D", text: "集線交換器" }
        ],
        correctAnswer: "A",
        explanation: "數據機主要用於連接網際網路，不是架設區域網路的必要設備。",
        source: "97技競"
    },
    {
        id: 64,
        question: "有一部中央電腦負責管理網路，其餘電腦都與其直接連接，此種網路架構稱為：",
        options: [
            { id: "A", text: "星狀網路" },
            { id: "B", text: "匯流排網路" },
            { id: "C", text: "主從架構網路" },
            { id: "D", text: "環狀網路" }
        ],
        correctAnswer: "A",
        explanation: "所有電腦都連接到中央設備的架構屬於星狀網路。",
        source: "95二技"
    },
    {
        id: 65,
        question: "中繼器 (repeater) 是屬於OSI模型中的哪一層裝置？",
        options: [
            { id: "A", text: "實體層" },
            { id: "B", text: "網路層" },
            { id: "C", text: "傳輸層" },
            { id: "D", text: "表現層" }
        ],
        correctAnswer: "A",
        explanation: "中繼器工作在OSI模型的實體層，負責訊號增強。",
        source: "95二技"
    },
    {
        id: 66,
        question: "在Windows作業系統中，以手動方式設定TCP/IP網路連線，設定項目包含IP位址、子網路遮罩及下列何種設備的IP位址？",
        options: [
            { id: "A", text: "集線器 (Hub)" },
            { id: "B", text: "橋接器 (Bridge)" },
            { id: "C", text: "交換器 (Switch)" },
            { id: "D", text: "閘道器 (Gateway)" }
        ],
        correctAnswer: "D",
        explanation: "TCP/IP設定需要指定閘道器的IP位址。",
        source: "96統測"
    },
    {
        id: 67,
        question: "下列哪一種網路設備具備支援網路層 (network layer)的功能？",
        options: [
            { id: "A", text: "橋接器 (bridge)" },
            { id: "B", text: "集線器 (hub)" },
            { id: "C", text: "中繼器 (repeater)" },
            { id: "D", text: "路由器 (router)" }
        ],
        correctAnswer: "D",
        explanation: "路由器工作在OSI模型的網路層。",
        source: "92二技"
    },
    {
        id: 68,
        question: "下列何者是用於一般個人電腦網路線接頭之規格？",
        options: [
            { id: "A", text: "RJ-11" },
            { id: "B", text: "RJ-12" },
            { id: "C", text: "RJ-14" },
            { id: "D", text: "RJ-45" }
        ],
        correctAnswer: "D",
        explanation: "RJ-45是用於乙太網路線的接頭規格。",
        source: "102統測"
    },
    {
        id: 69,
        question: "以下何種裝置是用來連接不同通訊協定的網路？",
        options: [
            { id: "A", text: "閘道器" },
            { id: "B", text: "交換器" },
            { id: "C", text: "中繼器" },
            { id: "D", text: "橋接器" }
        ],
        correctAnswer: "A",
        explanation: "閘道器專門用於連接不同通訊協定的網路。",
        source: "103統測"
    },
    {
        id: 70,
        question: "下列哪一項代表網路卡實體位址 (MAC Address)？",
        options: [
            { id: "A", text: "https://tw.yahoo.com" },
            { id: "B", text: "00:16:E6:5B:58:60" },
            { id: "C", text: "140.111.34.147" },
            { id: "D", text: "2001:DB8:2DE::E13" }
        ],
        correctAnswer: "B",
        explanation: "MAC位址的格式為六組十六進位數字，以冒號分隔。",
        source: "108統測"
    },
    {
        id: 71,
        question: "下列何者不是電腦網路的連結架構？",
        options: [
            { id: "A", text: "環狀" },
            { id: "B", text: "星狀" },
            { id: "C", text: "匯流排" },
            { id: "D", text: "對等狀" }
        ],
        correctAnswer: "D",
        explanation: "對等狀不是標準的網路拓樸架構。",
        source: "107統測"
    },
    {
        id: 72,
        question: "下列對於網路的拓樸的描述，何者錯誤？",
        options: [
            { id: "A", text: "匯流排結構適合廣播的方式傳遞資料" },
            { id: "B", text: "樹狀的結構，可以形成封閉性迴路" },
            { id: "C", text: "環狀結構網路上的節點依環形順序傳遞資料" },
            { id: "D", text: "星狀的結構，經常需要一個集線器" }
        ],
        correctAnswer: "B",
        explanation: "樹狀結構不會形成封閉性迴路，那是環狀結構的特性。",
        source: "107統測"
    },
    {
        id: 73,
        question: "某電腦教室內有10部桌上型電腦以及一台16埠集線器，若要讓該電腦教室內的所有電腦同一時間連接到網際網路，請問使用哪種網路連線拓樸架構最合適？",
        options: [
            { id: "A", text: "匯流排拓樸" },
            { id: "B", text: "星狀拓樸" },
            { id: "C", text: "環狀拓樸" },
            { id: "D", text: "P2P拓樸" }
        ],
        correctAnswer: "B",
        explanation: "使用集線器連接所有電腦的架構屬於星狀拓樸。",
        source: "109統測"
    },
    {
        id: 74,
        question: "有關MAC位址的敘述，下列何項不正確？",
        options: [
            { id: "A", text: "168.95.1.1是屬於MAC位址" },
            { id: "B", text: "MAC位址有6Bytes" },
            { id: "C", text: "MAC位址是指網路卡的實體位址" },
            { id: "D", text: "所有位元均為1的MAC位址是提供廣播使用的位址" }
        ],
        correctAnswer: "A",
        explanation: "168.95.1.1是IP位址，不是MAC位址。",
        source: "102統測"
    },
    {
        id: 75,
        question: "下列哪一項不是網路設備？",
        options: [
            { id: "A", text: "集線器 (Hub)" },
            { id: "B", text: "直譯器 (Interpreter)" },
            { id: "C", text: "路由器 (Router)" },
            { id: "D", text: "交換器 (Switch)" }
        ],
        correctAnswer: "B",
        explanation: "直譯器是程式語言翻譯工具，不是網路設備。",
        source: "102統測"
    },
    {
        id: 76,
        question: "下列哪一種網路連接設備具有過濾封包的功能，可避免網路區段間的訊息干擾，提高網路傳輸效率？",
        options: [
            { id: "A", text: "橋接器" },
            { id: "B", text: "中繼器" },
            { id: "C", text: "集線器" },
            { id: "D", text: "IP分享器" }
        ],
        correctAnswer: "A",
        explanation: "橋接器具有過濾封包的功能，可以隔離網路區段。",
        source: "106統測"
    },
    {
        id: 77,
        question: "如果路由器無法判斷封包的下一個目的節點，路由器會如何動作？",
        options: [
            { id: "A", text: "廣播此封包" },
            { id: "B", text: "將此封包儲存在記憶體緩衝區中" },
            { id: "C", text: "將此封包傳送至預設路由" },
            { id: "D", text: "捨棄此封包" }
        ],
        correctAnswer: "C",
        explanation: "當路由器無法判斷路徑時，會將封包傳送至預設路由。",
        source: "ITS考題"
    },
    {
        id: 78,
        question: "公司網路中，所有裝置都連線到同一部網路交換器，這是何種網路拓樸？",
        options: [
            { id: "A", text: "環狀" },
            { id: "B", text: "匯流排" },
            { id: "C", text: "網狀" },
            { id: "D", text: "星形" }
        ],
        correctAnswer: "D",
        explanation: "所有裝置連接到中央交換器的架構屬於星形拓樸。",
        source: "ITS考題"
    },
    {
        id: 79,
        question: "網際網路的設計是採用哪一種網路拓樸？",
        options: [
            { id: "A", text: "星形" },
            { id: "B", text: "巴士狀" },
            { id: "C", text: "網狀" },
            { id: "D", text: "匯流排" }
        ],
        correctAnswer: "C",
        explanation: "網際網路採用網狀拓樸，提供多重路徑和容錯能力。",
        source: "ITS考題"
    },
    {
        id: 80,
        question: "OSI模型第二層中，連接多部電腦的裝置是哪種？",
        options: [
            { id: "A", text: "交換器" },
            { id: "B", text: "橋接器" },
            { id: "C", text: "路由器" },
            { id: "D", text: "存取點" }
        ],
        correctAnswer: "A",
        explanation: "交換器工作在OSI模型的第二層（資料鏈結層）。",
        source: "ITS考題"
    },
    {
        id: 81,
        question: "下列哪種路由具備容錯能力？",
        options: [
            { id: "A", text: "靜態路由" },
            { id: "B", text: "預設路由" },
            { id: "C", text: "成本最低的路由" },
            { id: "D", text: "動態路由" }
        ],
        correctAnswer: "D",
        explanation: "動態路由可以根據網路狀態自動調整路徑，具備容錯能力。",
        source: "ITS考題"
    },
    // 在 question-bank.js 檔案末尾新增以下題目（接續之前的題目）

    // 繼續新增 ITS 考題觀摩題目
    {
        id: 82,
        question: "網路交換器具有哪兩個特性？",
        options: [
            { id: "A", text: "可識別所接收資料的預定目的地" },
            { id: "B", text: "可以同時傳送和接受資料" },
            { id: "C", text: "造成的資料衝突比集線器多" },
            { id: "D", text: "會將每個封包傳送至所有與其連接的電腦" }
        ],
        correctAnswer: "A",
        explanation: "交換器可以識別資料的目的地MAC位址，並具有全雙工傳輸能力。",
        source: "ITS考題"
    },
    {
        id: 83,
        question: "公司網路中，所有裝置都連線到同一部網路交換器，實體上是何種網路拓樸？",
        options: [
            { id: "A", text: "網狀" },
            { id: "B", text: "匯流排" },
            { id: "C", text: "環狀" },
            { id: "D", text: "星形" }
        ],
        correctAnswer: "D",
        explanation: "所有裝置連接到中央交換器的實體佈線屬於星形拓樸。",
        source: "ITS考題"
    },
    {
        id: 84,
        question: "多層交換器除了交換功能之外，還有哪些功能？",
        options: [
            { id: "A", text: "提供第三層路由功能" },
            { id: "B", text: "橋接不同實體拓樸之間的流量" },
            { id: "C", text: "管理用戶端電腦的位址" },
            { id: "D", text: "在各種網路通訊之間的轉譯" }
        ],
        correctAnswer: "A",
        explanation: "多層交換器（Layer 3 Switch）除了第二層交換功能外，還提供第三層路由功能。",
        source: "ITS考題"
    },
    {
        id: 85,
        question: "將Windows Server 2016電腦設定成路由器，針對服務品質QoS設定原則支援，可以透過QoS原則進行哪兩個原則的設定？",
        options: [
            { id: "A", text: "根據躍點計數來最佳化路由" },
            { id: "B", text: "根據傳送電腦IP位址來設定流量優先順序" },
            { id: "C", text: "根據傳送應用程式來設定流量優先順序" },
            { id: "D", text: "根據接收應用程式來設定流量優先順序" }
        ],
        correctAnswer: "B",
        explanation: "QoS可以根據來源IP位址和應用程式類型來設定流量優先順序。",
        source: "ITS考題"
    },
    {
        id: 86,
        question: "網狀網路拓樸具有哪兩個特性？",
        options: [
            { id: "A", text: "每個節點都連線到其他每個節點" },
            { id: "B", text: "最適合大量節點的網路" },
            { id: "C", text: "其佈線需求低於星形或環狀拓樸" },
            { id: "D", text: "容錯能力最佳" }
        ],
        correctAnswer: "A",
        explanation: "網狀拓樸的每個節點都連接到其他節點，提供最佳的容錯能力。",
        source: "ITS考題"
    },
    {
        id: 87,
        question: "乙太網路拓樸具有哪兩個特性？",
        options: [
            { id: "A", text: "通常使用雙絞線或光纖媒體" },
            { id: "B", text: "使用權杖來避免衝突" },
            { id: "C", text: "網路介面卡實體使用IP位址編碼" },
            { id: "D", text: "可以交涉不同的傳輸速度" }
        ],
        correctAnswer: "A",
        explanation: "乙太網路使用雙絞線或光纖，並支援自動交涉傳輸速度。",
        source: "ITS考題"
    },
    {
        id: 88,
        question: "環狀拓樸會使用哪一種存取方法？",
        options: [
            { id: "A", text: "迴避" },
            { id: "B", text: "輪詢" },
            { id: "C", text: "衝突" },
            { id: "D", text: "權杖傳遞" }
        ],
        correctAnswer: "D",
        explanation: "環狀拓樸通常使用權杖傳遞（Token Passing）來控制網路存取。",
        source: "ITS考題"
    },
    {
        id: 89,
        question: "如何更新路由器的靜態路由表？",
        options: [
            { id: "A", text: "在重設路由之後透過RIP通訊協定" },
            { id: "B", text: "藉由監視相鄰子網路" },
            { id: "C", text: "使用實體位置最相近路由器的更新" },
            { id: "D", text: "透過網路管理員" }
        ],
        correctAnswer: "D",
        explanation: "靜態路由需要由網路管理員手動設定和更新。",
        source: "ITS考題"
    },
    {
        id: 90,
        question: "RIP使用哪個標準來判斷路由成本？",
        options: [
            { id: "A", text: "躍點計數" },
            { id: "B", text: "衰減" },
            { id: "C", text: "延遲" },
            { id: "D", text: "躍點之間的實際距離" }
        ],
        correctAnswer: "A",
        explanation: "RIP（Routing Information Protocol）使用躍點計數作為路由成本判斷標準。",
        source: "ITS考題"
    },
    {
        id: 91,
        question: "哪個網路裝置會讓工作群組中的電腦互連，可以從遠端進行設定，並且提供最佳的輸送量？",
        options: [
            { id: "A", text: "路由器" },
            { id: "B", text: "未受管理的交換器" },
            { id: "C", text: "受管理的交換器" },
            { id: "D", text: "集線器" }
        ],
        correctAnswer: "C",
        explanation: "受管理的交換器可以遠端設定，並提供比集線器更好的輸送量。",
        source: "ITS考題"
    },
    {
        id: 92,
        question: "你是小型企業的網路系統管理員，某員工無法存取任何網路，其他員工都沒有這個問題，所有的電腦都位於同一個內部網路，你如何化解此問題？",
        options: [
            { id: "A", text: "檢查該員工的網路介面卡，以確認網路介面卡能夠運作" },
            { id: "B", text: "判斷該員工的電腦是否具備有效的IP位址" },
            { id: "C", text: "檢查該員工電腦上的DNS設定" },
            { id: "D", text: "檢查路由器能否正常運作" }
        ],
        correctAnswer: "A",
        explanation: "單一用戶問題通常與該用戶的網路介面卡或IP設定有關。",
        source: "ITS考題"
    },
    {
        id: 93,
        question: "你是小型企業的網路系統管理員，某天清晨開始工作時，你發現公司所有員工都無法存取外部網路，但所有員工都可以存取內部網路網站，你應該完成哪兩個動作？",
        options: [
            { id: "A", text: "檢查路由器是否有良好的實體連線能力" },
            { id: "B", text: "聯絡網際網路服務提供者" },
            { id: "C", text: "判斷該員工的電腦是否具備有效的IP位址" },
            { id: "D", text: "檢查該員工的網路介面卡，以確認網路介面卡能夠應用" }
        ],
        correctAnswer: "A",
        explanation: "全公司無法存取外部網路但內部正常，應先檢查路由器連線和ISP狀態。",
        source: "ITS考題"
    },
    {
        id: 94,
        question: "您的學校網路具有多個路由器，其中一間宿舍的學生回報無法連線到電子郵件伺服器。您確認電子郵件伺服器運作正常。您懷疑是子網路上的路由器造成問題，此時應該執行哪二動作？",
        options: [
            { id: "A", text: "查看路由器的路由表" },
            { id: "B", text: "用動態路由" },
            { id: "C", text: "用多點傳送" },
            { id: "D", text: "查看路由器的NAT表" }
        ],
        correctAnswer: "A",
        explanation: "路由問題應該先檢查路由器的路由表設定。",
        source: "ITS考題"
    },
    {
        id: 95,
        question: "有線乙太網路拓樸具有兩個特性？",
        options: [
            { id: "A", text: "可以交涉不同的傳輸速度" },
            { id: "B", text: "使用權杖來避免網路發生衝突" },
            { id: "C", text: "通常採用雙絞線或光纖媒體" },
            { id: "D", text: "使用實體IP位址編碼的網路介面卡" }
        ],
        correctAnswer: "A",
        explanation: "乙太網路支援自動速度交涉，並使用雙絞線或光纖傳輸媒體。",
        source: "ITS考題"
    },
    {
        id: 96,
        question: "電腦是使用銅線經由網路跳線面板連接至交換器，電腦取得的資料速度低於預期，你應該執行哪兩個動作來找出問題？",
        options: [
            { id: "A", text: "測試纜線的資料速度" },
            { id: "B", text: "使用纜線測試器搜尋纜線中斷掉的電線" },
            { id: "C", text: "執行從單位A到單位B線路的音頻查線" },
            { id: "D", text: "使用光時域反射計測試線路" }
        ],
        correctAnswer: "A",
        explanation: "速度問題應先測試纜線速度和檢查纜線是否損壞。",
        source: "ITS考題"
    },
    {
        id: 97,
        question: "只會將單點傳播框架，傳送至一個目的地連接埠？",
        options: [
            { id: "A", text: "交換器" },
            { id: "B", text: "集線器" },
            { id: "C", text: "信號增強器" }
        ],
        correctAnswer: "A",
        explanation: "交換器只將單點傳播框架傳送到特定目的地連接埠。",
        source: "ITS考題"
    },
    {
        id: 98,
        question: "如果交換器不知道框架的傳送目標？",
        options: [
            { id: "A", text: "會導致他濫發框架至各個連接埠" },
            { id: "B", text: "不會濫發框架至各個連接埠" },
            { id: "C", text: "會發框架至第一個連接埠" },
            { id: "D", text: "會當機" }
        ],
        correctAnswer: "A",
        explanation: "當交換器不知道目的地時，會將框架廣播到所有連接埠。",
        source: "ITS考題"
    },
    {
        id: 99,
        question: "你任職於某公司，公司總裁回報他的有線網路印表機無法運作，為了測試線路你必須知道插孔插在跳線面板的什麼位置，但是沒有任何標籤在主配線架構MDF中你發現一束35條纜線，你應該使用哪種工具來分離出正確的纜線？",
        options: [
            { id: "A", text: "音頻查線器" },
            { id: "B", text: "纜線測試器" },
            { id: "C", text: "萬用電表" },
            { id: "D", text: "時域反射計" }
        ],
        correctAnswer: "A",
        explanation: "音頻查線器可以幫助識別和追蹤特定的網路纜線。",
        source: "ITS考題"
    },
    {
        id: 100,
        question: "你任職於某公司，財務部門抱怨說存取公司網路時資料速度很慢，該部門的其中一部電腦顯示連線只有100Mbps但該線路應該是1000Mbps你應該使用哪個網路硬體工具來判斷纜線是否能達到1000Mbps全雙工傳輸？",
        options: [
            { id: "A", text: "纜線測試器" },
            { id: "B", text: "萬用電表" },
            { id: "C", text: "時域反射計" },
            { id: "D", text: "音頻查線器" }
        ],
        correctAnswer: "A",
        explanation: "纜線測試器可以測試纜線的傳輸速度和品質。",
        source: "ITS考題"
    },
    {
        id: 101,
        question: "需要哪種硬體才能夠將LAN正確連線到WAN？",
        options: [
            { id: "A", text: "路由器" },
            { id: "B", text: "第2層交換器" },
            { id: "C", text: "獨立存取點" },
            { id: "D", text: "收發器" }
        ],
        correctAnswer: "A",
        explanation: "路由器用於連接區域網路和廣域網路。",
        source: "ITS考題"
    },
    {
        id: 102,
        question: "交換器的兩個重要特性？",
        options: [
            { id: "A", text: "交換器造成的資料衝突比集線器多" },
            { id: "B", text: "交換器可以識別所接收資料的預定目的地的" },
            { id: "C", text: "交換器可以同時傳送跟接收資料" },
            { id: "D", text: "交換器會將每個框架傳送至所有與之連接的電腦" }
        ],
        correctAnswer: "B",
        explanation: "交換器可以識別目的地MAC位址並支援全雙工傳輸。",
        source: "ITS考題"
    },
    {
        id: 103,
        question: "在無線路由器上SSID是？",
        options: [
            { id: "A", text: "預設系統管理員帳號" },
            { id: "B", text: "廣播識別碼" },
            { id: "C", text: "WAN加密通訊協定" },
            { id: "D", text: "預設通訊協定" }
        ],
        correctAnswer: "B",
        explanation: "SSID是無線網路的廣播識別碼（Service Set Identifier）。",
        source: "ITS考題"
    },
    {
        id: 104,
        question: "你正在嘗試存取網際網路上的音樂分享服務，位於IP位址173.194.75.105。你正在連線時發生錯誤，你對伺服器執行追蹤路由，追蹤路由中的每個躍點都是？",
        options: [
            { id: "A", text: "防火牆" },
            { id: "B", text: "路由器" },
            { id: "C", text: "交換器" }
        ],
        correctAnswer: "B",
        explanation: "追蹤路由顯示的每個躍點通常都是路由器。",
        source: "ITS考題"
    },
    {
        id: 105,
        question: "哪個實體網路拓樸，藉由提供備援通訊路徑，來提供容錯通信？",
        options: [
            { id: "A", text: "環狀" },
            { id: "B", text: "網狀" },
            { id: "C", text: "星狀" },
            { id: "D", text: "匯流排" }
        ],
        correctAnswer: "B",
        explanation: "網狀拓樸提供多重路徑，具有最佳的容錯能力。",
        source: "ITS考題"
    },
    {
        id: 106,
        question: "網狀網路拓樸具有哪兩個特性？",
        options: [
            { id: "A", text: "佈線需求低於星形或環狀拓樸" },
            { id: "B", text: "每個節點都連接到網路上的其他每個節點" },
            { id: "C", text: "由於有備援連線因此具備容錯能力" },
            { id: "D", text: "最適合包含大量節點的網路" }
        ],
        correctAnswer: "B",
        explanation: "網狀拓樸每個節點相互連接，提供備援路徑和容錯能力。",
        source: "ITS考題"
    },
    {
        id: 107,
        question: "你認識一個擁有15台電腦的小型辦公室，當地的ISP提供了單一公用IP位址，您必須讓15台電腦都擁有網際網路存取能力，應該使用哪個路由器？",
        options: [
            { id: "A", text: "RIP" },
            { id: "B", text: "靜態路由" },
            { id: "C", text: "NAT" },
            { id: "D", text: "連接埠轉送PAT" }
        ],
        correctAnswer: "C",
        explanation: "NAT可以讓多台電腦共享單一公用IP位址上網。",
        source: "ITS考題"
    },
    {
        id: 108,
        question: "建築物與建築物之間的網路連線是550公尺，而且線路發生插入損失。應該用哪種工具來測試衰減？",
        options: [
            { id: "A", text: "光時域反射計" },
            { id: "B", text: "時域反射計" },
            { id: "C", text: "萬用電錶" },
            { id: "D", text: "音頻查線器" }
        ],
        correctAnswer: "B",
        explanation: "時域反射計用於測試銅纜線路的衰減和故障點。",
        source: "ITS考題"
    },
    {
        id: 109,
        question: "RIP自動從其他RIP路由器取得網路的資訊，藉以將這些網路新增至路由表？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "A",
        explanation: "RIP是動態路由協定，會自動從相鄰路由器學習路由資訊。",
        source: "ITS考題"
    },
    {
        id: 110,
        question: "RIP會根據頻寬和可用性判斷路由？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "B",
        explanation: "RIP只根據躍點數判斷路由，不考慮頻寬和可用性。",
        source: "ITS考題"
    },
    {
        id: 111,
        question: "OSPF使用頻寬和延遲做為路由計量？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "A",
        explanation: "OSPF會考慮頻寬、延遲等多種因素來計算最佳路由。",
        source: "ITS考題"
    },
    {
        id: 112,
        question: "OSPF根據變更情況更新路由表所需的時間比RIP所需更久？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "B",
        explanation: "OSPF收斂速度比RIP更快，不是更久。",
        source: "ITS考題"
    },
    {
        id: 113,
        question: "交換器只會將單點傳播封包傳送至一個目的地連接埠？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "A",
        explanation: "交換器會根據MAC位址表將單點傳播封包只傳送到目的地連接埠。",
        source: "ITS考題"
    },
    {
        id: 114,
        question: "如果交換器不知道封包的傳送目標，會導致連接埠湧入封包？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "A",
        explanation: "當交換器不知道目的地時，會將封包廣播到所有連接埠。",
        source: "ITS考題"
    },
    {
        id: 115,
        question: "路由可以包含最多15個躍點？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "B",
        explanation: "RIP限制為15個躍點，但其他路由協定沒有此限制。",
        source: "ITS考題"
    },
    {
        id: 116,
        question: "路由是根據所需的躍點數目來計算？",
        options: [
            { id: "A", text: "是" },
            { id: "B", text: "否" }
        ],
        correctAnswer: "A",
        explanation: "路由計算確實會考慮躍點數目作為重要指標。",
        source: "ITS考題"
    },
    {
        id: 117,
        question: "哪種實體拓樸是由透過個別纜線連接到中央集線器的裝置所定義？",
        options: [
            { id: "A", text: "星形" },
            { id: "B", text: "環狀" },
            { id: "C", text: "網狀" }
        ],
        correctAnswer: "A",
        explanation: "星形拓樸的所有裝置都透過個別纜線連接到中央設備。",
        source: "ITS考題"
    },
    {
        id: 118,
        question: "哪種實體拓樸是FDDI和SONET所使用的？",
        options: [
            { id: "A", text: "星形" },
            { id: "B", text: "環狀" },
            { id: "C", text: "網狀" }
        ],
        correctAnswer: "B",
        explanation: "FDDI和SONET網路使用環狀實體拓樸。",
        source: "ITS考題"
    },
    {
        id: 119,
        question: "哪種實體拓樸是公用網際網路基礎的實體拓樸？",
        options: [
            { id: "A", text: "星形" },
            { id: "B", text: "環狀" },
            { id: "C", text: "網狀" }
        ],
        correctAnswer: "C",
        explanation: "網際網路基礎架構採用網狀拓樸以提供容錯能力。",
        source: "ITS考題"
    }
];