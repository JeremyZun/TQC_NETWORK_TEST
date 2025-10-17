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
    }
];