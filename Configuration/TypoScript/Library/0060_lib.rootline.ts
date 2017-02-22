# Brotkrumen-Navigation
lib.rootline = COA
lib.rootline {
    10 = HMENU
    10 {
        special = rootline
        special.range = 0 | -1

        1 = TMENU
        1 {
            NO = 1
            NO {
                allWrap = <li>|</li>
                stdWrap.htmlSpecialChars = 1
                ATagTitle.field = abstract // description // subtitle // title
            }

            CUR < .NO
            CUR {
                allWrap = <li class ="active">|</li>
                doNotLinkIt = 1
            }
        }
    }

    stdWrap {
        wrap = <ol class ="breadcrumb">|</ol>
    }
}

[globalVar =  GP:tx_news_pi1|action = detail]
    lib {
        rootline {
            10.1.CUR >

            20 = COA
            20 {
                1 = LOAD_REGISTER
                1 {
                    currentNewsUid.data = GP:tx_news_pi1|news
                    currentNewsUid.intval = 1
                }

                10 = TEXT
                10 {
                    data =  DB:tx_news_domain_model_news:{REGISTER:currentNewsUid}:alternative_title // DB:tx_news_domain_model_news:{REGISTER:currentNewsUid}:title
                    data.insertData = 1

                    stdWrap {
                        required = 1
                        wrap = <li class="active">|</li>
                    }
                }
            }
        }
    }
[global]