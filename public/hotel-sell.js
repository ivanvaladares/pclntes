!function() {
    "use strict";
    const l = {}
      , i = ["cityId", "cityName", "checkIn", "checkOut", "appc", "cguid", "rid", "productId", "pageSize", "offerToken", "loyaltyTier", "environment", "isMobile", "isVertical"];
    customElements.define("hotel-xsell", class extends HTMLElement {
        constructor() {
            super(...arguments),
            this.getCarouselHTML = async e => {
                return `<style data-styled="true" data-styled-version="5.3.11">
    .hCAHGY {
        border-radius: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        box-shadow: 0 -1px 0 0 rgba(0,0,0,0.03),0 0 1px 0 rgba(0,0,0,0.24),0 2px 1px -1px rgba(0,0,0,0.16),0 2px 4px 0 rgba(0,0,0,0.12);
    }

    /*!sc*/
    .bNZmaI {
        margin-bottom: 8px;
    }

    /*!sc*/
    .cOYAUG {
        background-color: #e8f2ff;
        border-radius: 2px;
    }

    /*!sc*/
    .dfOuKg {
        width: 100%;
        height: 100%;
    }

    /*!sc*/
    .dUfJQU {
        margin-top: 8px;
    }

    /*!sc*/
    .jAjQqg {
        padding-left: 16px;
    }

    /*!sc*/
    .ctoACP {
        border-radius: 16px;
        box-shadow: 0 -1px 0 0 rgba(0,0,0,0.03),0 0 2px 0 rgba(0,0,0,0.2),0 4px 2px -2px rgba(0,0,0,0.12),0 4px 8px -1px rgba(0,0,0,0.16);
    }

    /*!sc*/
    .heZQBt {
        padding: 8px;
    }

    /*!sc*/
    .dYZfro {
        margin-top: 8px;
        margin-bottom: 10px;
    }

    /*!sc*/
    .ePkezf {
        margin-top: auto;
    }

    /*!sc*/
    .bvOdEZ {
        background-color: #f06f20;
        color: #fff;
        border-radius: 8px;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 2px;
        padding-bottom: 2px;
        margin-right: 8px;
    }

    /*!sc*/
    .fIFsTY {
        height: 96px;
        padding: 8px;
    }

    /*!sc*/
    .eVUZdd {
        margin-bottom: 5px;
    }

    /*!sc*/
    .fegDjg {
        margin-top: 4px;
    }

    /*!sc*/
    .aZDnQ {
        padding-left: 16px;
        padding-right: 16px;
        margin-left: auto;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    /*!sc*/
    @media screen and (min-width: 32em) {
        .aZDnQ {
            margin-top:0px;
            margin-bottom: 0px;
        }
    }

    /*!sc*/
    @media screen and (min-width: 40em) {
        .aZDnQ {
            margin-top:0px;
            margin-bottom: 0px;
        }
    }

    /*!sc*/
    @media screen and (min-width: 48em) {
        .aZDnQ {
            margin-top:-25px;
            margin-bottom: 8px;
        }
    }

    /*!sc*/
    data-styled.g1[id="Box-sc-n9h3nv-0"] {
        content: "hCAHGY,bNZmaI,cOYAUG,dfOuKg,gJzoyp,dUfJQU,jAjQqg,ctoACP,heZQBt,dYZfro,ePkezf,bvOdEZ,fIFsTY,eVUZdd,fegDjg,aZDnQ,"
    }

    /*!sc*/
    .kEpleQ {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    /*!sc*/
    .bRgbaU {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    /*!sc*/
    .cPqnaI {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }

    /*!sc*/
    .iCsNmg {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    /*!sc*/
    .DwOrM {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    /*!sc*/
    .gNWoxE {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    /*!sc*/
    .fbeok {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    /*!sc*/
    .jHKInr {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: start;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: start;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    /*!sc*/
    .bDlovg {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    /*!sc*/
    .fBIvts {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    /*!sc*/
    .gtWtwk {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    /*!sc*/
    .mVSEs {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    /*!sc*/
    data-styled.g3[id="Flex-sc-1yrtwh8-0"] {
        content: "kEpleQ,bRgbaU,cPqnaI,iCsNmg,DwOrM,gNWoxE,fbeok,jHKInr,bDlovg,fBIvts,gtWtwk,mVSEs,"
    }

    /*!sc*/
    .bYvnzZ {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
        line-height: 1;
        margin-right: 4px;
        width: 15px;
    }

    /*!sc*/
    .eBymod {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
        line-height: 1;
        width: 35px;
    }

    /*!sc*/
    .bcfMvS {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
        line-height: 1;
        margin-left: 14px;
        width: 18px;
    }

    /*!sc*/
    data-styled.g4[id="Svg-sc-12lgb6u-0"] {
        content: "bYvnzZ,eBymod,bcfMvS,"
    }

    /*!sc*/
    .dvOXuG {
        outline: none;
    }

    /*!sc*/
    data-styled.g64[id="ChevronLeft__SvgChevronLeft-sc-1pih41b-0"] {
        content: "dvOXuG,"
    }

    /*!sc*/
    .ktEMtW {
        outline: none;
    }

    /*!sc*/
    data-styled.g65[id="ChevronRight__SvgChevronRight-sc-ec4b4o-0"] {
        content: "ktEMtW,"
    }

    /*!sc*/
    .fYuvQP {
        outline: none;
    }

    /*!sc*/
    data-styled.g200[id="Pin__SvgPin-sc-1ik04q-0"] {
        content: "fYuvQP,"
    }

    /*!sc*/
    .iEhSqj {
        font-size: 32px;
        line-height: 32px;
    }

    /*!sc*/
    .koLrQo {
        font-weight: 700;
    }

    /*!sc*/
    .gioqkc {
        margin-top: 4px;
        margin-bottom: 4px;
    }

    /*!sc*/
    .tTDtA {
        font-weight: 700;
        font-size: 14px;
        overflow: hidden;
    }

    /*!sc*/
    .hiHnkW {
        font-size: 12px;
        overflow: hidden;
    }

    /*!sc*/
    .kWAmTt {
        font-weight: 700;
        font-size: 12px;
    }

    /*!sc*/
    .blyqRy {
        text-transform: uppercase;
        font-size: 12px;
    }

    /*!sc*/
    .cZejTz {
        color: #004499;
        margin-left: 8px;
        font-size: 12px;
        font-weight: 700;
    }

    /*!sc*/
    .fhNQEp {
        color: #0a0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 12px;
        margin-left: 8px;
    }

    /*!sc*/
    .cjQotI {
        color: #0a0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 12px;
    }

    /*!sc*/
    .eifPvR {
        color: #0a0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
    }

    /*!sc*/
    .eJMGzf {
        color: #4f6f8f;
        font-size: 12px;
        margin-left: 8px;
    }

    /*!sc*/
    data-styled.g314[id="Text-sc-1xtb652-0"] {
        content: "iEhSqj,koLrQo,gioqkc,bXABtI,tTDtA,hiHnkW,kWAmTt,blyqRy,cZejTz,fhNQEp,cjQotI,eifPvR,eJMGzf,"
    }

    /*!sc*/
    .lkbSIz {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #eceff2;
        background-attachment: scroll;
        background-image: url(https://mobileimg.priceline.com/htlimg/2147/2147505/thumbnail-150-square.jpg);
    }

    /*!sc*/
    .hnyrko {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #eceff2;
        background-attachment: scroll;
        background-image: url(https://mobileimg.priceline.com/htlimg/46/46744/thumbnail-150-square.jpg);
    }

    /*!sc*/
    .gpRPme {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #eceff2;
        background-attachment: scroll;
        background-image: url(https://mobileimg.priceline.com/htlimg/17160/17160104/thumbnail-150-square.jpg);
    }

    /*!sc*/
    .dydKGg {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #eceff2;
        background-attachment: scroll;
        background-image: url(https://mobileimg.priceline.com/htlimg/50/50564/thumbnail-150-square.jpg);
    }

    /*!sc*/
    data-styled.g319[id="BackgroundImage-sc-1eaij4d-0"] {
        content: "lkbSIz,hnyrko,gpRPme,dydKGg,"
    }

    /*!sc*/
    .dAgvZI {
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-family: inherit;
        font-weight: 700;
        line-height: 1.5;
        cursor: pointer;
        border-radius: 9999px;
        border-width: 0;
        border-style: solid;
        border-radius: 9999px;
        font-size: 14px;
        padding: 9.5px 18px;
        background-color: #0a0;
        color: #fff;
    }

    /*!sc*/
    .dAgvZI:disabled {
        cursor: not-allowed;
        color: #879db3;
        background-color: #edf0f3;
    }

    /*!sc*/
    .dAgvZI:hover {
        background-color: #060;
        color: #fff;
    }

    /*!sc*/
    .dAgvZI:focus-visible {
        outline: 0px solid #060;
        box-shadow: 0 0 0 2px #060;
    }

    /*!sc*/
    .bRIUay {
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-family: inherit;
        font-weight: 700;
        line-height: 1.5;
        cursor: pointer;
        border-radius: 9999px;
        border-width: 0;
        border-style: solid;
        border-radius: 9999px;
        font-size: 14px;
        padding: 9.5px 18px;
        background-color: transparent;
        color: #0068ef;
        padding: 4px;
        margin-right: 32px;
        box-shadow: 0 -1px 0 0 rgba(0,0,0,0.03),0 0 2px 0 rgba(0,0,0,0.2),0 4px 2px -2px rgba(0,0,0,0.12),0 4px 8px -1px rgba(0,0,0,0.16);
    }

    /*!sc*/
    .bRIUay:disabled {
        cursor: not-allowed;
        color: #879db3;
        background-color: #edf0f3;
    }

    /*!sc*/
    .bRIUay:hover {
        background-color: #edf0f3;
        color: #049;
    }

    /*!sc*/
    .bRIUay:focus-visible {
        outline: 0px solid #049;
        box-shadow: 0 0 0 2px #049;
    }

    /*!sc*/
    .bDcmUl {
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-family: inherit;
        font-weight: 700;
        line-height: 1.5;
        cursor: pointer;
        border-radius: 9999px;
        border-width: 0;
        border-style: solid;
        border-radius: 9999px;
        font-size: 14px;
        padding: 9.5px 18px;
        background-color: transparent;
        color: #0068ef;
        padding: 4px;
        box-shadow: 0 -1px 0 0 rgba(0,0,0,0.03),0 0 2px 0 rgba(0,0,0,0.2),0 4px 2px -2px rgba(0,0,0,0.12),0 4px 8px -1px rgba(0,0,0,0.16);
    }

    /*!sc*/
    .bDcmUl:disabled {
        cursor: not-allowed;
        color: #879db3;
        background-color: #edf0f3;
    }

    /*!sc*/
    .bDcmUl:hover {
        background-color: #edf0f3;
        color: #049;
    }

    /*!sc*/
    .bDcmUl:focus-visible {
        outline: 0px solid #049;
        box-shadow: 0 0 0 2px #049;
    }

    /*!sc*/
    data-styled.g326[id="Button__StyledButton-sc-uq13ez-0"] {
        content: "dAgvZI,bRIUay,bDcmUl,"
    }

    /*!sc*/
    .eVsNoR {
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #0068ef;
        margin-top: 10px;
    }

    /*!sc*/
    .eVsNoR:hover {
        color: #049;
        -webkit-text-decoration: underline;
        text-decoration: underline;
    }

    /*!sc*/
    data-styled.g327[id="Link-sc-1eidvea-0"] {
        content: "eVsNoR,"
    }

    /*!sc*/
    .hAkBet {
        border-color: #c0cad5;
        border-radius: 16px;
        border-color: #c0cad5;
        border-style: solid;
        border-width: 1px;
    }

    /*!sc*/
    .dWUXhQ {
        border-color: #c0cad5;
        border-color: #c0cad5;
        border-radius: 2px;
        border-style: solid;
        border-width: 1px;
    }

    /*!sc*/
    data-styled.g329[id="Card-sc-1iw8zza-0"] {
        content: "hAkBet,dWUXhQ,"
    }

    /*!sc*/
    .gWgokL {
        font-family: 'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif;
        line-height: 1.4;
        font-weight: 500;
    }

    /*!sc*/
    .gWgokL * {
        box-sizing: border-box;
    }

    /*!sc*/
    data-styled.g350[id="ThemeProvider__Base-sc-1502h3l-0"] {
        content: "gWgokL,"
    }

    /*!sc*/
    .hyhRyq {
        display: inline-block;
        font-size: 24px;
        line-height: 24px;
        height: 24px;
    }

    /*!sc*/
    data-styled.g517[id="Container-sc-wu86i5-0"] {
        content: "hyhRyq,"
    }

    /*!sc*/
    .gfXizg {
        text-transform: uppercase;
    }

    /*!sc*/
    data-styled.g518[id="TierBadge__TierTitle-sc-4e7er-0"] {
        content: "gfXizg,"
    }

    /*!sc*/
    .coLGZQ {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
    }

    /*!sc*/
    data-styled.g580[id="CardContainer__Container-sc-int92d-0"] {
        content: "coLGZQ,"
    }

    /*!sc*/
    .gPxDdy {
        font-size: 14px;
    }

    /*!sc*/
    data-styled.g581[id="CardContainer__FlexStyled-sc-int92d-1"] {
        content: "gPxDdy,"
    }

    /*!sc*/
    .gNocCe {
        display: none;
    }

    /*!sc*/
    @media screen and (min-width: 48em) {
        .gNocCe {
            display:block;
        }
    }

    /*!sc*/
    data-styled.g582[id="CardContainer__ArrowButton-sc-int92d-2"] {
        content: "gNocCe,"
    }

    /*!sc*/
    .iayApK {
        overflow-x: auto;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        padding-bottom: 10px;
        -webkit-scroll-snap-type: x mandatory;
        -moz-scroll-snap-type: x mandatory;
        -ms-scroll-snap-type: x mandatory;
        scroll-snap-type: x mandatory;
    }

    /*!sc*/
    @media screen and (min-width: 48em) {
        .iayApK::-webkit-scrollbar {
            display:none;
        }
    }

    /*!sc*/
    data-styled.g583[id="CardContainer__SliderFlex-sc-int92d-3"] {
        content: "iayApK,"
    }

    /*!sc*/
    .dVReO {
        border-top: 1px solid #c0cad5;
        white-space: nowrap;
    }

    /*!sc*/
    data-styled.g584[id="HotelListingCardFooterPostBooking__PriceInfoContainer-sc-1j4tv7r-0"] {
        content: "dVReO,"
    }

    /*!sc*/
    .hDAUZy {
        textdecoration: line-through;
        position: relative;
        min-height: 20px;
    }

    /*!sc*/
    .hDAUZy::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 50%;
        width: 100%;
        height: 1px;
        background-color: red;
    }

    /*!sc*/
    data-styled.g585[id="HotelListingCardFooterPostBooking__TextStriked-sc-1j4tv7r-1"] {
        content: "hDAUZy,"
    }

    /*!sc*/
    .fVAJgw {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        cursor: pointer;
        box-sizing: content-box;
        margin-right: 16px;
        height: 207px;
        min-width: calc(90%);
        -webkit-scroll-snap-align: start;
        -moz-scroll-snap-align: start;
        -ms-scroll-snap-align: start;
        scroll-snap-align: start;
        -webkit-scroll-margin: 16px;
        -moz-scroll-margin: 16px;
        -ms-scroll-margin: 16px;
        scroll-margin: 16px;
    }

    /*!sc*/
    @media screen and (min-width: 40em) {
        .fVAJgw {
            min-width:calc(60%);
        }
    }

    /*!sc*/
    @media screen and (min-width: 48em) {
        .fVAJgw {
            min-width:320px;
        }
    }

    /*!sc*/
    data-styled.g586[id="HotelListingCardPostBooking__Container-sc-11sqxar-0"] {
        content: "fVAJgw,"
    }

    /*!sc*/
    .dqkFmO {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    /*!sc*/
    data-styled.g587[id="HotelListingCardPostBooking__HotelInfoContainer-sc-11sqxar-1"] {
        content: "dqkFmO,"
    }

    /*!sc*/
    .gyRerr {
        -webkit-flex: 0 0 112px;
        -ms-flex: 0 0 112px;
        flex: 0 0 112px;
    }

    /*!sc*/
    data-styled.g588[id="HotelListingCardPostBooking__HotelImage-sc-11sqxar-2"] {
        content: "gyRerr,"
    }

    /*!sc*/
    .eCSDwz {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: hidden;
    }

    /*!sc*/
    data-styled.g589[id="HotelListingCardPostBooking__HotelDetails-sc-11sqxar-3"] {
        content: "eCSDwz,"
    }

    /*!sc*/
    .cRTQAi {
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /*!sc*/
    data-styled.g590[id="HotelListingCardPostBooking__StyledText-sc-11sqxar-4"] {
        content: "cRTQAi,"
    }

    /*!sc*/
    .gGQLGm {
        display: inline-block;
    }

    /*!sc*/
    data-styled.g611[id="sc-bXCLTC"] {
        content: "gGQLGm,"
    }

    /*!sc*/
    .jJqSdD {
        border-radius: 999px;
        border: 0px;
        height: 56px;
        width: 56px;
        min-height: 56px;
        min-width: 56px;
        margin-right: 1rem;
    }

    /*!sc*/
    data-styled.g636[id="CardContainerHeaderPostBooking__Circle-sc-8lodq6-0"] {
        content: "jJqSdD,"
    }

    /*!sc*/
    .ihBWNI {
        padding-left: 1rem;
    }

    /*!sc*/
    data-styled.g637[id="CardContainerHeaderPostBooking__FlexStyled-sc-8lodq6-1"] {
        content: "ihBWNI,"
    }

    /*!sc*/
</style>
<div class="ThemeProvider__Base-sc-1502h3l-0 gWgokL">
    <div class="Box-sc-n9h3nv-0 Card-sc-1iw8zza-0 CardContainer__Container-sc-int92d-0 hCAHGY hAkBet coLGZQ">
        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 CardContainerHeaderPostBooking__FlexStyled-sc-8lodq6-1 bNZmaI kEpleQ ihBWNI">
            <div class="Box-sc-n9h3nv-0 Card-sc-1iw8zza-0 CardContainerHeaderPostBooking__Circle-sc-8lodq6-0 cOYAUG dWUXhQ jJqSdD">
                <div width="1" height="100%" class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 dfOuKg bRgbaU">
                    <div font-size="32px" class="Text-sc-1xtb652-0 sc-bXCLTC iEhSqj gGQLGm">
                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" role="img">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M21 1a.5.5 0 01.09.992L21 2h-1v11.39a1.91 1.91 0 013.126.205c.323.536.356 1.183.118 1.734l-.05.103.12.116c.475.498.729 1.178.68 1.88l-.018.175a2.48 2.48 0 01-1.85 2.056l-.123.015-.028-.001V21h.525a.5.5 0 01.09.992L22.5 22h-21a.5.5 0 01-.09-.992L1.5 21h.525v-1.327H2l-.123-.015a2.483 2.483 0 01-1.198-4.115l.112-.111-.038-.074a1.865 1.865 0 01-.164-.623l-.006-.164a1.904 1.904 0 011.4-1.828l.156-.036a1.911 1.911 0 011.863.707L4 2H3a.5.5 0 01-.09-.992L3 1h18zm-1 18.24V21h1.025v-1.327H21l-.123-.015A2.494 2.494 0 0120 19.24zm-15.999.003a2.484 2.484 0 01-.876.416l-.122.015-.028-.001V21H4z" fill="#0068ef"></path>
                                <path d="M11.5 16v5H8v-4.5a.5.5 0 01.5-.5h3zm4 0a.5.5 0 01.5.5V21h-3.5v-5h3zm6.77-1.888c.209.346.16.79-.118 1.084a.5.5 0 00-.128.249l-.009.105a.5.5 0 00.249.433c.52.302.805.887.721 1.48l-.025.135a1.48 1.48 0 01-.947 1.051l-.08.024h-.863l-.079-.024a1.485 1.485 0 01-.26-2.68.5.5 0 00.102-.78.868.868 0 01-.25-.614.91.91 0 011.687-.463zm-19 0c.209.346.16.79-.118 1.084a.5.5 0 00-.128.249l-.009.105a.5.5 0 00.249.433c.52.302.805.887.721 1.48l-.025.135a1.48 1.48 0 01-.947 1.051l-.08.024H2.07l-.079-.024a1.485 1.485 0 01-.26-2.68.5.5 0 00.102-.78.868.868 0 01-.25-.614.91.91 0 011.687-.463z" fill="#e8f2ff"></path>
                                <path d="M8.5 12a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm-8-4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm-8-4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1z" fill="#fff"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="Box-sc-n9h3nv-0 gJzoyp">
                <div class="Text-sc-1xtb652-0 koLrQo">
                    <h4 class="Text-sc-1xtb652-0 gioqkc">Your VIP  status has unlocked exclusive deals on Las Vegas hotels!</h4>
                </div>
                <div class="Text-sc-1xtb652-0 bXABtI">Hotels deals for you in Las Vegas, 12/15/2024 - 12/20/2024</div>
            </div>
        </div>
        <div class="Box-sc-n9h3nv-0 dUfJQU">
            <div data-id="carousel-container" class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 CardContainer__SliderFlex-sc-int92d-3 jAjQqg cPqnaI iayApK">
                <div data-testid="HotelListingCard" data-id="hotel-card" data-url="/relax/at/2147505/from/20241215/to/20241220/rooms/1?pclnId=5ECB56FBF5B07907CA2ADE894A1E07619704743A7DB8B4B3147BD826197F5B1929731B53F07AF61434B948AACA94839D56F0D2AE01CE01362EA9110A9E96A2E0BCD84EFA64F511CB0D1A095CC00E55F32CAF534F37AE4803363FE93C5DDD443C1CEECFAC541D7EFE55285FFE700494E1&amp;cur=USD&amp;gid=3315&amp;cityId=3000015284" class="Box-sc-n9h3nv-0 Card-sc-1iw8zza-0 HotelListingCardPostBooking__Container-sc-11sqxar-0 ctoACP hAkBet fVAJgw">
                    <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelInfoContainer-sc-11sqxar-1 gJzoyp iCsNmg dqkFmO">
                        <div class="BackgroundImage-sc-1eaij4d-0 HotelListingCardPostBooking__HotelImage-sc-11sqxar-2 lkbSIz gyRerr"></div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelDetails-sc-11sqxar-3 heZQBt DwOrM eCSDwz">
                            <div font-size="1" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 tTDtA cRTQAi">Wyndham Grand Desert</div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 dYZfro kEpleQ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="15" width="15" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bYvnzZ Pin__SvgPin-sc-1ik04q-0 fYuvQP">
                                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"></path>
                                </svg>
                                <div font-size="0" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 hiHnkW cRTQAi">East of The Strip</div>
                            </div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 ePkezf kEpleQ">
                                <div color="alert.base" class="Box-sc-n9h3nv-0 bvOdEZ">
                                    <div font-size="0" class="Text-sc-1xtb652-0 kWAmTt">8.7</div>
                                </div>
                                <div font-size="0" class="Text-sc-1xtb652-0 blyqRy">3.5-Star</div>
                            </div>
                        </div>
                    </div>
                    <div height="96px" class="Box-sc-n9h3nv-0 HotelListingCardFooterPostBooking__PriceInfoContainer-sc-1j4tv7r-0 fIFsTY dVReO">
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 eVUZdd kEpleQ">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp gNWoxE">
                                <div font-size="24px" class="Box-sc-n9h3nv-0 Container-sc-wu86i5-0 gJzoyp hyhRyq">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40">
                                        <title>Priceline VIP logo</title>
                                        <g fill="none" fill-rule="evenodd">
                                            <path fill="#0068ef" d="M40 20c0 11.045-8.954 20-20 20C8.955 40 0 31.045 0 20 0 8.954 8.955 0 20 0c11.046 0 20 8.954 20 20"></path>
                                            <path fill="#FFF100" d="M32.78 15.195c2.576 2.03 2.786 5.38 1.49 7.613-1.273 2.19-3.695 3.352-6.166 2.905-.534-.097-1.038-.366-1.554-.562-.095-.036-.181-.1-.318-.178v4.278c0 .331-.006.337-.343.337-.758 0-1.516-.008-2.274.004-.245.005-.318-.081-.317-.321.004-4.892.004-9.785 0-14.677 0-.224.067-.302.301-.312.844-.034 1.56.22 2.112.892.52-.455 1.072-.821 1.717-1.002 1.951-.547 3.75-.24 5.353 1.023zm-19.083-.911c.847.01 1.693.003 2.539.005.32 0 .375.087.244.386-1.492 3.393-2.986 6.782-4.475 10.176-.246.563-.694.77-1.266.767-.575-.002-1.005-.223-1.252-.788-1.48-3.387-2.973-6.769-4.462-10.152-.137-.311-.085-.389.261-.39.68 0 1.358.008 2.037-.002.512-.008.839.222 1.042.69.728 1.68 1.469 3.354 2.205 5.03.053.12.11.237.181.392.333-.752.65-1.467.965-2.183a839.898 839.898 0 001.608-3.677c.075-.172.17-.258.373-.254zm6.692 0c.239-.003.327.074.327.318-.005 3.51-.005 7.018-.001 10.527.001.23-.084.309-.31.307-.767-.01-1.534-.004-2.301-.005-.332 0-.344-.012-.344-.34V14.643c0-.351.003-.354.355-.354.758-.002 1.516.006 2.274-.005zm8.687 2.563a3.007 3.007 0 00-3.008 3.01 3.002 3.002 0 003 3.015 2.99 2.99 0 003.029-3.007 2.996 2.996 0 00-3.02-3.018z"></path>
                                            <path d="M0 0h40v40H0z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div font-size="12px" font-weight="bold" color="#004499" class="Text-sc-1xtb652-0 TierBadge__TierTitle-sc-4e7er-0 cZejTz gfXizg"></div>
                            </div>
                            <div color="success" font-size="0" class="Text-sc-1xtb652-0 fhNQEp">13% OFF</div>
                        </div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fbeok">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp jHKInr">
                                <div font-size="0" class="Text-sc-1xtb652-0 HotelListingCardFooterPostBooking__TextStriked-sc-1j4tv7r-1 kWAmTt hDAUZy">$122</div>
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp bDlovg">
                                    <div font-size="0" color="success" class="Text-sc-1xtb652-0 cjQotI">$</div>
                                    <div color="success" font-size="3" class="Text-sc-1xtb652-0 eifPvR">105</div>
                                    <div color="text.light" font-size="0" class="Text-sc-1xtb652-0 eJMGzf">Price per night</div>
                                </div>
                            </div>
                            <button color="success" class="Button__StyledButton-sc-uq13ez-0 dAgvZI">
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fBIvts">Choose</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-testid="HotelListingCard" data-id="hotel-card" data-url="/relax/at/46744/from/20241215/to/20241220/rooms/1?pclnId=7CBC73D7565932531425651E68C34B10872FBB35CB40E2863D1FD627329794DB74A309D5219129604CF5266D7E98DFD6E4C169EC3586F9E9190FEED7F811E003850A9B600D5BD6E1F319459CD6A2407B4CD742AF29107C1B7063A6D2B2276E3D5535FD6D9184C87748703015C74C5C06&amp;cur=USD&amp;gid=3364&amp;cityId=3000015284" class="Box-sc-n9h3nv-0 Card-sc-1iw8zza-0 HotelListingCardPostBooking__Container-sc-11sqxar-0 ctoACP hAkBet fVAJgw">
                    <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelInfoContainer-sc-11sqxar-1 gJzoyp iCsNmg dqkFmO">
                        <div class="BackgroundImage-sc-1eaij4d-0 HotelListingCardPostBooking__HotelImage-sc-11sqxar-2 hnyrko gyRerr"></div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelDetails-sc-11sqxar-3 heZQBt DwOrM eCSDwz">
                            <div font-size="1" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 tTDtA cRTQAi">Flamingo Las Vegas</div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 dYZfro kEpleQ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="15" width="15" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bYvnzZ Pin__SvgPin-sc-1ik04q-0 fYuvQP">
                                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"></path>
                                </svg>
                                <div font-size="0" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 hiHnkW cRTQAi">The Strip - Northeast</div>
                            </div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 ePkezf kEpleQ">
                                <div color="alert.base" class="Box-sc-n9h3nv-0 bvOdEZ">
                                    <div font-size="0" class="Text-sc-1xtb652-0 kWAmTt">7.0</div>
                                </div>
                                <div font-size="0" class="Text-sc-1xtb652-0 blyqRy">3.5-Star</div>
                            </div>
                        </div>
                    </div>
                    <div height="96px" class="Box-sc-n9h3nv-0 HotelListingCardFooterPostBooking__PriceInfoContainer-sc-1j4tv7r-0 fIFsTY dVReO">
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 eVUZdd kEpleQ">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp gNWoxE">
                                <div font-size="24px" class="Box-sc-n9h3nv-0 Container-sc-wu86i5-0 gJzoyp hyhRyq">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40">
                                        <title>Priceline VIP logo</title>
                                        <g fill="none" fill-rule="evenodd">
                                            <path fill="#0068ef" d="M40 20c0 11.045-8.954 20-20 20C8.955 40 0 31.045 0 20 0 8.954 8.955 0 20 0c11.046 0 20 8.954 20 20"></path>
                                            <path fill="#FFF100" d="M32.78 15.195c2.576 2.03 2.786 5.38 1.49 7.613-1.273 2.19-3.695 3.352-6.166 2.905-.534-.097-1.038-.366-1.554-.562-.095-.036-.181-.1-.318-.178v4.278c0 .331-.006.337-.343.337-.758 0-1.516-.008-2.274.004-.245.005-.318-.081-.317-.321.004-4.892.004-9.785 0-14.677 0-.224.067-.302.301-.312.844-.034 1.56.22 2.112.892.52-.455 1.072-.821 1.717-1.002 1.951-.547 3.75-.24 5.353 1.023zm-19.083-.911c.847.01 1.693.003 2.539.005.32 0 .375.087.244.386-1.492 3.393-2.986 6.782-4.475 10.176-.246.563-.694.77-1.266.767-.575-.002-1.005-.223-1.252-.788-1.48-3.387-2.973-6.769-4.462-10.152-.137-.311-.085-.389.261-.39.68 0 1.358.008 2.037-.002.512-.008.839.222 1.042.69.728 1.68 1.469 3.354 2.205 5.03.053.12.11.237.181.392.333-.752.65-1.467.965-2.183a839.898 839.898 0 001.608-3.677c.075-.172.17-.258.373-.254zm6.692 0c.239-.003.327.074.327.318-.005 3.51-.005 7.018-.001 10.527.001.23-.084.309-.31.307-.767-.01-1.534-.004-2.301-.005-.332 0-.344-.012-.344-.34V14.643c0-.351.003-.354.355-.354.758-.002 1.516.006 2.274-.005zm8.687 2.563a3.007 3.007 0 00-3.008 3.01 3.002 3.002 0 003 3.015 2.99 2.99 0 003.029-3.007 2.996 2.996 0 00-3.02-3.018z"></path>
                                            <path d="M0 0h40v40H0z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div font-size="12px" font-weight="bold" color="#004499" class="Text-sc-1xtb652-0 TierBadge__TierTitle-sc-4e7er-0 cZejTz gfXizg"></div>
                            </div>
                            <div color="success" font-size="0" class="Text-sc-1xtb652-0 fhNQEp">49% OFF</div>
                        </div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fbeok">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp jHKInr">
                                <div font-size="0" class="Text-sc-1xtb652-0 HotelListingCardFooterPostBooking__TextStriked-sc-1j4tv7r-1 kWAmTt hDAUZy">$22</div>
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp bDlovg">
                                    <div font-size="0" color="success" class="Text-sc-1xtb652-0 cjQotI">$</div>
                                    <div color="success" font-size="3" class="Text-sc-1xtb652-0 eifPvR">11</div>
                                    <div color="text.light" font-size="0" class="Text-sc-1xtb652-0 eJMGzf">Price per night</div>
                                </div>
                            </div>
                            <button color="success" class="Button__StyledButton-sc-uq13ez-0 dAgvZI">
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fBIvts">Choose</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-testid="HotelListingCard" data-id="hotel-card" data-url="/relax/at/17160104/from/20241215/to/20241220/rooms/1?pclnId=6D98F4B3E3AC9A76F9D88E055F5D61BC85C6EC6B610A023A431CA3D12808460F875A2E2C6643F5FB07CB54B2F906C1CA57C24712991D7B9280F40C2C311967587959A681B88AB800396B954A8FEFE21F3467B53FE09CFC7703B2B0EB54C7F7E9459AAF13CEFE195BE8F7B2C4744D7BA8&amp;cur=USD&amp;gid=3115&amp;cityId=3000015284" class="Box-sc-n9h3nv-0 Card-sc-1iw8zza-0 HotelListingCardPostBooking__Container-sc-11sqxar-0 ctoACP hAkBet fVAJgw">
                    <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelInfoContainer-sc-11sqxar-1 gJzoyp iCsNmg dqkFmO">
                        <div class="BackgroundImage-sc-1eaij4d-0 HotelListingCardPostBooking__HotelImage-sc-11sqxar-2 gpRPme gyRerr"></div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelDetails-sc-11sqxar-3 heZQBt DwOrM eCSDwz">
                            <div font-size="1" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 tTDtA cRTQAi">Waldorf Astoria By Hilton Las Vegas</div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 dYZfro kEpleQ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="15" width="15" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bYvnzZ Pin__SvgPin-sc-1ik04q-0 fYuvQP">
                                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"></path>
                                </svg>
                                <div font-size="0" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 hiHnkW cRTQAi">The Strip - Southwest</div>
                            </div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 ePkezf kEpleQ">
                                <div color="alert.base" class="Box-sc-n9h3nv-0 bvOdEZ">
                                    <div font-size="0" class="Text-sc-1xtb652-0 kWAmTt">8.4</div>
                                </div>
                                <div font-size="0" class="Text-sc-1xtb652-0 blyqRy">5-Star</div>
                            </div>
                        </div>
                    </div>
                    <div height="96px" class="Box-sc-n9h3nv-0 HotelListingCardFooterPostBooking__PriceInfoContainer-sc-1j4tv7r-0 fIFsTY dVReO">
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 eVUZdd kEpleQ">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp gNWoxE">
                                <div font-size="24px" class="Box-sc-n9h3nv-0 Container-sc-wu86i5-0 gJzoyp hyhRyq">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40">
                                        <title>Priceline VIP logo</title>
                                        <g fill="none" fill-rule="evenodd">
                                            <path fill="#0068ef" d="M40 20c0 11.045-8.954 20-20 20C8.955 40 0 31.045 0 20 0 8.954 8.955 0 20 0c11.046 0 20 8.954 20 20"></path>
                                            <path fill="#FFF100" d="M32.78 15.195c2.576 2.03 2.786 5.38 1.49 7.613-1.273 2.19-3.695 3.352-6.166 2.905-.534-.097-1.038-.366-1.554-.562-.095-.036-.181-.1-.318-.178v4.278c0 .331-.006.337-.343.337-.758 0-1.516-.008-2.274.004-.245.005-.318-.081-.317-.321.004-4.892.004-9.785 0-14.677 0-.224.067-.302.301-.312.844-.034 1.56.22 2.112.892.52-.455 1.072-.821 1.717-1.002 1.951-.547 3.75-.24 5.353 1.023zm-19.083-.911c.847.01 1.693.003 2.539.005.32 0 .375.087.244.386-1.492 3.393-2.986 6.782-4.475 10.176-.246.563-.694.77-1.266.767-.575-.002-1.005-.223-1.252-.788-1.48-3.387-2.973-6.769-4.462-10.152-.137-.311-.085-.389.261-.39.68 0 1.358.008 2.037-.002.512-.008.839.222 1.042.69.728 1.68 1.469 3.354 2.205 5.03.053.12.11.237.181.392.333-.752.65-1.467.965-2.183a839.898 839.898 0 001.608-3.677c.075-.172.17-.258.373-.254zm6.692 0c.239-.003.327.074.327.318-.005 3.51-.005 7.018-.001 10.527.001.23-.084.309-.31.307-.767-.01-1.534-.004-2.301-.005-.332 0-.344-.012-.344-.34V14.643c0-.351.003-.354.355-.354.758-.002 1.516.006 2.274-.005zm8.687 2.563a3.007 3.007 0 00-3.008 3.01 3.002 3.002 0 003 3.015 2.99 2.99 0 003.029-3.007 2.996 2.996 0 00-3.02-3.018z"></path>
                                            <path d="M0 0h40v40H0z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div font-size="12px" font-weight="bold" color="#004499" class="Text-sc-1xtb652-0 TierBadge__TierTitle-sc-4e7er-0 cZejTz gfXizg"></div>
                            </div>
                            <div color="success" font-size="0" class="Text-sc-1xtb652-0 fhNQEp">37% OFF</div>
                        </div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fbeok">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp jHKInr">
                                <div font-size="0" class="Text-sc-1xtb652-0 HotelListingCardFooterPostBooking__TextStriked-sc-1j4tv7r-1 kWAmTt hDAUZy">$352</div>
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp bDlovg">
                                    <div font-size="0" color="success" class="Text-sc-1xtb652-0 cjQotI">$</div>
                                    <div color="success" font-size="3" class="Text-sc-1xtb652-0 eifPvR">221</div>
                                    <div color="text.light" font-size="0" class="Text-sc-1xtb652-0 eJMGzf">Price per night</div>
                                </div>
                            </div>
                            <button color="success" class="Button__StyledButton-sc-uq13ez-0 dAgvZI">
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fBIvts">Choose</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-testid="HotelListingCard" data-id="hotel-card" data-url="/relax/at/50564/from/20241215/to/20241220/rooms/1?pclnId=CE5F8350C708C973E10E63EAFDFF59E1C57FC342F55C0C4DEB7A289AF0F9169A0EE1F5F434FD86B2BC1315A0E8F7FE210944D482C70E269FC880260AB693F9CB10956F9782D9556CC956858E2DBAFAD2067DEF875298FAE37063A6D2B2276E3D3B09E6C03D13ED724D3DB4EBD15BB303&amp;cur=USD&amp;gid=3260&amp;cityId=3000015284" class="Box-sc-n9h3nv-0 Card-sc-1iw8zza-0 HotelListingCardPostBooking__Container-sc-11sqxar-0 ctoACP hAkBet fVAJgw">
                    <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelInfoContainer-sc-11sqxar-1 gJzoyp iCsNmg dqkFmO">
                        <div class="BackgroundImage-sc-1eaij4d-0 HotelListingCardPostBooking__HotelImage-sc-11sqxar-2 dydKGg gyRerr"></div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 HotelListingCardPostBooking__HotelDetails-sc-11sqxar-3 heZQBt DwOrM eCSDwz">
                            <div font-size="1" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 tTDtA cRTQAi">Bellagio</div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 dYZfro kEpleQ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="15" width="15" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bYvnzZ Pin__SvgPin-sc-1ik04q-0 fYuvQP">
                                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"></path>
                                </svg>
                                <div font-size="0" overflow="hidden" class="Text-sc-1xtb652-0 HotelListingCardPostBooking__StyledText-sc-11sqxar-4 hiHnkW cRTQAi">The Strip - Central West</div>
                            </div>
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 ePkezf kEpleQ">
                                <div color="alert.base" class="Box-sc-n9h3nv-0 bvOdEZ">
                                    <div font-size="0" class="Text-sc-1xtb652-0 kWAmTt">8.4</div>
                                </div>
                                <div font-size="0" class="Text-sc-1xtb652-0 blyqRy">5-Star</div>
                            </div>
                        </div>
                    </div>
                    <div height="96px" class="Box-sc-n9h3nv-0 HotelListingCardFooterPostBooking__PriceInfoContainer-sc-1j4tv7r-0 fIFsTY dVReO">
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 eVUZdd kEpleQ">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp gNWoxE">
                                <div font-size="24px" class="Box-sc-n9h3nv-0 Container-sc-wu86i5-0 gJzoyp hyhRyq">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40">
                                        <title>Priceline VIP logo</title>
                                        <g fill="none" fill-rule="evenodd">
                                            <path fill="#0068ef" d="M40 20c0 11.045-8.954 20-20 20C8.955 40 0 31.045 0 20 0 8.954 8.955 0 20 0c11.046 0 20 8.954 20 20"></path>
                                            <path fill="#FFF100" d="M32.78 15.195c2.576 2.03 2.786 5.38 1.49 7.613-1.273 2.19-3.695 3.352-6.166 2.905-.534-.097-1.038-.366-1.554-.562-.095-.036-.181-.1-.318-.178v4.278c0 .331-.006.337-.343.337-.758 0-1.516-.008-2.274.004-.245.005-.318-.081-.317-.321.004-4.892.004-9.785 0-14.677 0-.224.067-.302.301-.312.844-.034 1.56.22 2.112.892.52-.455 1.072-.821 1.717-1.002 1.951-.547 3.75-.24 5.353 1.023zm-19.083-.911c.847.01 1.693.003 2.539.005.32 0 .375.087.244.386-1.492 3.393-2.986 6.782-4.475 10.176-.246.563-.694.77-1.266.767-.575-.002-1.005-.223-1.252-.788-1.48-3.387-2.973-6.769-4.462-10.152-.137-.311-.085-.389.261-.39.68 0 1.358.008 2.037-.002.512-.008.839.222 1.042.69.728 1.68 1.469 3.354 2.205 5.03.053.12.11.237.181.392.333-.752.65-1.467.965-2.183a839.898 839.898 0 001.608-3.677c.075-.172.17-.258.373-.254zm6.692 0c.239-.003.327.074.327.318-.005 3.51-.005 7.018-.001 10.527.001.23-.084.309-.31.307-.767-.01-1.534-.004-2.301-.005-.332 0-.344-.012-.344-.34V14.643c0-.351.003-.354.355-.354.758-.002 1.516.006 2.274-.005zm8.687 2.563a3.007 3.007 0 00-3.008 3.01 3.002 3.002 0 003 3.015 2.99 2.99 0 003.029-3.007 2.996 2.996 0 00-3.02-3.018z"></path>
                                            <path d="M0 0h40v40H0z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div font-size="12px" font-weight="bold" color="#004499" class="Text-sc-1xtb652-0 TierBadge__TierTitle-sc-4e7er-0 cZejTz gfXizg"></div>
                            </div>
                            <div color="success" font-size="0" class="Text-sc-1xtb652-0 fhNQEp">39% OFF</div>
                        </div>
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fbeok">
                            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp jHKInr">
                                <div font-size="0" class="Text-sc-1xtb652-0 HotelListingCardFooterPostBooking__TextStriked-sc-1j4tv7r-1 kWAmTt hDAUZy">$177</div>
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp bDlovg">
                                    <div font-size="0" color="success" class="Text-sc-1xtb652-0 cjQotI">$</div>
                                    <div color="success" font-size="3" class="Text-sc-1xtb652-0 eifPvR">108</div>
                                    <div color="text.light" font-size="0" class="Text-sc-1xtb652-0 eJMGzf">Price per night</div>
                                </div>
                            </div>
                            <button color="success" class="Button__StyledButton-sc-uq13ez-0 dAgvZI">
                                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fBIvts">Choose</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 fegDjg gtWtwk">
                <button aria-label="Previous" data-id="arrowLeft" class="Button__StyledButton-sc-uq13ez-0 bRIUay CardContainer__ArrowButton-sc-int92d-2 gNocCe" color="primary">
                    <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fBIvts">
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp cPqnaI">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="35" width="35" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 eBymod ChevronLeft__SvgChevronLeft-sc-1pih41b-0 dvOXuG">
                                <path d="M15.4 16.6L10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4z"></path>
                            </svg>
                        </div>
                    </div>
                </button>
                <button aria-label="Next" data-id="arrowRight" class="Button__StyledButton-sc-uq13ez-0 bDcmUl CardContainer__ArrowButton-sc-int92d-2 gNocCe" color="primary">
                    <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp fBIvts">
                        <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 gJzoyp cPqnaI">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="35" width="35" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 eBymod ChevronRight__SvgChevronRight-sc-ec4b4o-0 ktEMtW">
                                <path d="M8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6L8 16.6z"></path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <div class="Box-sc-n9h3nv-0 aZDnQ">
            <a data-id="link-browse-more" color="primary" class="Link-sc-1eidvea-0 eVsNoR">
                <div class="Box-sc-n9h3nv-0 Flex-sc-1yrtwh8-0 CardContainer__FlexStyled-sc-int92d-1 gJzoyp mVSEs gPxDdy">
                    Browse More Hotel Deals
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="18" width="18" aria-hidden="true" fill="currentcolor" tabindex="-1" focusable="false" role="img" class="Svg-sc-12lgb6u-0 bcfMvS ChevronRight__SvgChevronRight-sc-ec4b4o-0 ktEMtW">
                        <path d="M8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6L8 16.6z"></path>
                    </svg>
                </div>
            </a>
        </div>
    </div>
</div>`
            }
        }
        async init(o) {
            var e = i.map(e => {
                var t = null != (t = o[e]) ? t : "";
                return e + "=" + encodeURIComponent(t)
            }
            ).join("&")
              , {isMobile: t, environment: r} = (this.browseMoreUrl = o.browseMoreUrl,
            this.offerToken = o.offerToken,
            o)
              , t = `https://pclntes-7d9ddd343708.herokuapp.com/`
              , e = null != (r = l[t]) ? r : await this.getCarouselHTML(t);
            this.attachHtml(e, t)
        }
        hookButtons() {
            this.shadowRoot.querySelectorAll("[data-id]").forEach(t => t.addEventListener("click", e => {
                e.preventDefault();
                e = t.getAttribute("data-id");
                "arrowRight" === e || "arrowLeft" === e ? this.slide("arrowLeft" === e ? "left" : "right") : "link-browse-more" === e ? this.handleBrowseMoreClick() : this.selectCard(t)
            }
            ))
        }
        slide(e) {
            var o = this.shadowRoot.querySelector("[data-id=carousel-container]");
            {
                var r = e;
                const {left: l, right: i} = o.getBoundingClientRect() || {};
                e = o.querySelectorAll("[data-id=hotel-card]");
                let t = 0;
                null != e && e.forEach(e => {
                    e = e.getBoundingClientRect();
                    "left" === r && e.left < l && (t = e.left - l - 16),
                    "right" === r && (e.left > i || Math.floor(e.right) > Math.floor(i)) && !t && (t = e.right - i + 16)
                }
                ),
                o.scrollBy({
                    left: t,
                    behavior: "smooth"
                })
            }
        }
        selectCard(e) {
            var t, e = e.closest("[data-url]");
            null != (t = null == e ? void 0 : e.dataset) && t.url && window.open(e.dataset.url)
        }
        handleBrowseMoreClick() {
            window.open(this.browseMoreUrl + "?xsellToken=" + this.offerToken)
        }
        attachHtml(e, t) {
            l[t] = e,
            this.shadowRoot ? this.shadowRoot.innerHTML = e : this.attachShadow({
                mode: "open"
            }).innerHTML = e,
            this.hookButtons()
        }
    }
    )
}();
