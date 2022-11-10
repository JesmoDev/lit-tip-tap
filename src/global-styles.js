import { css } from "lit";

export const Icons = css`
  @font-face {
    font-family: "remixicon";
    src: url("remixicon.eot?t=1590207869815"); /* IE9*/
    src: url("remixicon.eot?t=1590207869815#iefix") format("embedded-opentype"),
      /* IE6-IE8 */ url("remixicon.woff2?t=1590207869815") format("woff2"),
      url("remixicon.woff?t=1590207869815") format("woff"),
      url("remixicon.ttf?t=1590207869815") format("truetype"),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url("remixicon.svg?t=1590207869815#remixicon") format("svg"); /* iOS 4.1- */
    font-display: swap;
  }

  [class^="ri-"],
  [class*=" ri-"] {
    font-family: "remixicon" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .ri-lg {
    font-size: 1.3333em;
    line-height: 0.75em;
    vertical-align: -0.0667em;
  }
  .ri-xl {
    font-size: 1.5em;
    line-height: 0.6666em;
    vertical-align: -0.075em;
  }
  .ri-xxs {
    font-size: 0.5em;
  }
  .ri-xs {
    font-size: 0.75em;
  }
  .ri-sm {
    font-size: 0.875em;
  }
  .ri-1x {
    font-size: 1em;
  }
  .ri-2x {
    font-size: 2em;
  }
  .ri-3x {
    font-size: 3em;
  }
  .ri-4x {
    font-size: 4em;
  }
  .ri-5x {
    font-size: 5em;
  }
  .ri-6x {
    font-size: 6em;
  }
  .ri-7x {
    font-size: 7em;
  }
  .ri-8x {
    font-size: 8em;
  }
  .ri-9x {
    font-size: 9em;
  }
  .ri-10x {
    font-size: 10em;
  }
  .ri-fw {
    text-align: center;
    width: 1.25em;
  }

  .ri-24-hours-fill:before {
    content: "\ea01";
  }
  .ri-24-hours-line:before {
    content: "\ea02";
  }
  .ri-4k-fill:before {
    content: "\ea03";
  }
  .ri-4k-line:before {
    content: "\ea04";
  }
  .ri-a-b:before {
    content: "\ea05";
  }
  .ri-account-box-fill:before {
    content: "\ea06";
  }
  .ri-account-box-line:before {
    content: "\ea07";
  }
  .ri-account-circle-fill:before {
    content: "\ea08";
  }
  .ri-account-circle-line:before {
    content: "\ea09";
  }
  .ri-account-pin-box-fill:before {
    content: "\ea0a";
  }
  .ri-account-pin-box-line:before {
    content: "\ea0b";
  }
  .ri-account-pin-circle-fill:before {
    content: "\ea0c";
  }
  .ri-account-pin-circle-line:before {
    content: "\ea0d";
  }
  .ri-add-box-fill:before {
    content: "\ea0e";
  }
  .ri-add-box-line:before {
    content: "\ea0f";
  }
  .ri-add-circle-fill:before {
    content: "\ea10";
  }
  .ri-add-circle-line:before {
    content: "\ea11";
  }
  .ri-add-fill:before {
    content: "\ea12";
  }
  .ri-add-line:before {
    content: "\ea13";
  }
  .ri-admin-fill:before {
    content: "\ea14";
  }
  .ri-admin-line:before {
    content: "\ea15";
  }
  .ri-advertisement-fill:before {
    content: "\ea16";
  }
  .ri-advertisement-line:before {
    content: "\ea17";
  }
  .ri-airplay-fill:before {
    content: "\ea18";
  }
  .ri-airplay-line:before {
    content: "\ea19";
  }
  .ri-alarm-fill:before {
    content: "\ea1a";
  }
  .ri-alarm-line:before {
    content: "\ea1b";
  }
  .ri-alarm-warning-fill:before {
    content: "\ea1c";
  }
  .ri-alarm-warning-line:before {
    content: "\ea1d";
  }
  .ri-album-fill:before {
    content: "\ea1e";
  }
  .ri-album-line:before {
    content: "\ea1f";
  }
  .ri-alert-fill:before {
    content: "\ea20";
  }
  .ri-alert-line:before {
    content: "\ea21";
  }
  .ri-aliens-fill:before {
    content: "\ea22";
  }
  .ri-aliens-line:before {
    content: "\ea23";
  }
  .ri-align-bottom:before {
    content: "\ea24";
  }
  .ri-align-center:before {
    content: "\ea25";
  }
  .ri-align-justify:before {
    content: "\ea26";
  }
  .ri-align-left:before {
    content: "\ea27";
  }
  .ri-align-right:before {
    content: "\ea28";
  }
  .ri-align-top:before {
    content: "\ea29";
  }
  .ri-align-vertically:before {
    content: "\ea2a";
  }
  .ri-alipay-fill:before {
    content: "\ea2b";
  }
  .ri-alipay-line:before {
    content: "\ea2c";
  }
  .ri-amazon-fill:before {
    content: "\ea2d";
  }
  .ri-amazon-line:before {
    content: "\ea2e";
  }
  .ri-anchor-fill:before {
    content: "\ea2f";
  }
  .ri-anchor-line:before {
    content: "\ea30";
  }
  .ri-ancient-gate-fill:before {
    content: "\ea31";
  }
  .ri-ancient-gate-line:before {
    content: "\ea32";
  }
  .ri-ancient-pavilion-fill:before {
    content: "\ea33";
  }
  .ri-ancient-pavilion-line:before {
    content: "\ea34";
  }
  .ri-android-fill:before {
    content: "\ea35";
  }
  .ri-android-line:before {
    content: "\ea36";
  }
  .ri-angularjs-fill:before {
    content: "\ea37";
  }
  .ri-angularjs-line:before {
    content: "\ea38";
  }
  .ri-anticlockwise-2-fill:before {
    content: "\ea39";
  }
  .ri-anticlockwise-2-line:before {
    content: "\ea3a";
  }
  .ri-anticlockwise-fill:before {
    content: "\ea3b";
  }
  .ri-anticlockwise-line:before {
    content: "\ea3c";
  }
  .ri-app-store-fill:before {
    content: "\ea3d";
  }
  .ri-app-store-line:before {
    content: "\ea3e";
  }
  .ri-apple-fill:before {
    content: "\ea3f";
  }
  .ri-apple-line:before {
    content: "\ea40";
  }
  .ri-apps-2-fill:before {
    content: "\ea41";
  }
  .ri-apps-2-line:before {
    content: "\ea42";
  }
  .ri-apps-fill:before {
    content: "\ea43";
  }
  .ri-apps-line:before {
    content: "\ea44";
  }
  .ri-archive-drawer-fill:before {
    content: "\ea45";
  }
  .ri-archive-drawer-line:before {
    content: "\ea46";
  }
  .ri-archive-fill:before {
    content: "\ea47";
  }
  .ri-archive-line:before {
    content: "\ea48";
  }
  .ri-arrow-down-circle-fill:before {
    content: "\ea49";
  }
  .ri-arrow-down-circle-line:before {
    content: "\ea4a";
  }
  .ri-arrow-down-fill:before {
    content: "\ea4b";
  }
  .ri-arrow-down-line:before {
    content: "\ea4c";
  }
  .ri-arrow-down-s-fill:before {
    content: "\ea4d";
  }
  .ri-arrow-down-s-line:before {
    content: "\ea4e";
  }
  .ri-arrow-drop-down-fill:before {
    content: "\ea4f";
  }
  .ri-arrow-drop-down-line:before {
    content: "\ea50";
  }
  .ri-arrow-drop-left-fill:before {
    content: "\ea51";
  }
  .ri-arrow-drop-left-line:before {
    content: "\ea52";
  }
  .ri-arrow-drop-right-fill:before {
    content: "\ea53";
  }
  .ri-arrow-drop-right-line:before {
    content: "\ea54";
  }
  .ri-arrow-drop-up-fill:before {
    content: "\ea55";
  }
  .ri-arrow-drop-up-line:before {
    content: "\ea56";
  }
  .ri-arrow-go-back-fill:before {
    content: "\ea57";
  }
  .ri-arrow-go-back-line:before {
    content: "\ea58";
  }
  .ri-arrow-go-forward-fill:before {
    content: "\ea59";
  }
  .ri-arrow-go-forward-line:before {
    content: "\ea5a";
  }
  .ri-arrow-left-circle-fill:before {
    content: "\ea5b";
  }
  .ri-arrow-left-circle-line:before {
    content: "\ea5c";
  }
  .ri-arrow-left-down-fill:before {
    content: "\ea5d";
  }
  .ri-arrow-left-down-line:before {
    content: "\ea5e";
  }
  .ri-arrow-left-fill:before {
    content: "\ea5f";
  }
  .ri-arrow-left-line:before {
    content: "\ea60";
  }
  .ri-arrow-left-right-fill:before {
    content: "\ea61";
  }
  .ri-arrow-left-right-line:before {
    content: "\ea62";
  }
  .ri-arrow-left-s-fill:before {
    content: "\ea63";
  }
  .ri-arrow-left-s-line:before {
    content: "\ea64";
  }
  .ri-arrow-left-up-fill:before {
    content: "\ea65";
  }
  .ri-arrow-left-up-line:before {
    content: "\ea66";
  }
  .ri-arrow-right-circle-fill:before {
    content: "\ea67";
  }
  .ri-arrow-right-circle-line:before {
    content: "\ea68";
  }
  .ri-arrow-right-down-fill:before {
    content: "\ea69";
  }
  .ri-arrow-right-down-line:before {
    content: "\ea6a";
  }
  .ri-arrow-right-fill:before {
    content: "\ea6b";
  }
  .ri-arrow-right-line:before {
    content: "\ea6c";
  }
  .ri-arrow-right-s-fill:before {
    content: "\ea6d";
  }
  .ri-arrow-right-s-line:before {
    content: "\ea6e";
  }
  .ri-arrow-right-up-fill:before {
    content: "\ea6f";
  }
  .ri-arrow-right-up-line:before {
    content: "\ea70";
  }
  .ri-arrow-up-circle-fill:before {
    content: "\ea71";
  }
  .ri-arrow-up-circle-line:before {
    content: "\ea72";
  }
  .ri-arrow-up-down-fill:before {
    content: "\ea73";
  }
  .ri-arrow-up-down-line:before {
    content: "\ea74";
  }
  .ri-arrow-up-fill:before {
    content: "\ea75";
  }
  .ri-arrow-up-line:before {
    content: "\ea76";
  }
  .ri-arrow-up-s-fill:before {
    content: "\ea77";
  }
  .ri-arrow-up-s-line:before {
    content: "\ea78";
  }
  .ri-artboard-2-fill:before {
    content: "\ea79";
  }
  .ri-artboard-2-line:before {
    content: "\ea7a";
  }
  .ri-artboard-fill:before {
    content: "\ea7b";
  }
  .ri-artboard-line:before {
    content: "\ea7c";
  }
  .ri-article-fill:before {
    content: "\ea7d";
  }
  .ri-article-line:before {
    content: "\ea7e";
  }
  .ri-aspect-ratio-fill:before {
    content: "\ea7f";
  }
  .ri-aspect-ratio-line:before {
    content: "\ea80";
  }
  .ri-asterisk:before {
    content: "\ea81";
  }
  .ri-at-fill:before {
    content: "\ea82";
  }
  .ri-at-line:before {
    content: "\ea83";
  }
  .ri-attachment-2:before {
    content: "\ea84";
  }
  .ri-attachment-fill:before {
    content: "\ea85";
  }
  .ri-attachment-line:before {
    content: "\ea86";
  }
  .ri-auction-fill:before {
    content: "\ea87";
  }
  .ri-auction-line:before {
    content: "\ea88";
  }
  .ri-award-fill:before {
    content: "\ea89";
  }
  .ri-award-line:before {
    content: "\ea8a";
  }
  .ri-baidu-fill:before {
    content: "\ea8b";
  }
  .ri-baidu-line:before {
    content: "\ea8c";
  }
  .ri-ball-pen-fill:before {
    content: "\ea8d";
  }
  .ri-ball-pen-line:before {
    content: "\ea8e";
  }
  .ri-bank-card-2-fill:before {
    content: "\ea8f";
  }
  .ri-bank-card-2-line:before {
    content: "\ea90";
  }
  .ri-bank-card-fill:before {
    content: "\ea91";
  }
  .ri-bank-card-line:before {
    content: "\ea92";
  }
  .ri-bank-fill:before {
    content: "\ea93";
  }
  .ri-bank-line:before {
    content: "\ea94";
  }
  .ri-bar-chart-2-fill:before {
    content: "\ea95";
  }
  .ri-bar-chart-2-line:before {
    content: "\ea96";
  }
  .ri-bar-chart-box-fill:before {
    content: "\ea97";
  }
  .ri-bar-chart-box-line:before {
    content: "\ea98";
  }
  .ri-bar-chart-fill:before {
    content: "\ea99";
  }
  .ri-bar-chart-grouped-fill:before {
    content: "\ea9a";
  }
  .ri-bar-chart-grouped-line:before {
    content: "\ea9b";
  }
  .ri-bar-chart-horizontal-fill:before {
    content: "\ea9c";
  }
  .ri-bar-chart-horizontal-line:before {
    content: "\ea9d";
  }
  .ri-bar-chart-line:before {
    content: "\ea9e";
  }
  .ri-barcode-box-fill:before {
    content: "\ea9f";
  }
  .ri-barcode-box-line:before {
    content: "\eaa0";
  }
  .ri-barcode-fill:before {
    content: "\eaa1";
  }
  .ri-barcode-line:before {
    content: "\eaa2";
  }
  .ri-barricade-fill:before {
    content: "\eaa3";
  }
  .ri-barricade-line:before {
    content: "\eaa4";
  }
  .ri-base-station-fill:before {
    content: "\eaa5";
  }
  .ri-base-station-line:before {
    content: "\eaa6";
  }
  .ri-basketball-fill:before {
    content: "\eaa7";
  }
  .ri-basketball-line:before {
    content: "\eaa8";
  }
  .ri-battery-2-charge-fill:before {
    content: "\eaa9";
  }
  .ri-battery-2-charge-line:before {
    content: "\eaaa";
  }
  .ri-battery-2-fill:before {
    content: "\eaab";
  }
  .ri-battery-2-line:before {
    content: "\eaac";
  }
  .ri-battery-charge-fill:before {
    content: "\eaad";
  }
  .ri-battery-charge-line:before {
    content: "\eaae";
  }
  .ri-battery-fill:before {
    content: "\eaaf";
  }
  .ri-battery-line:before {
    content: "\eab0";
  }
  .ri-battery-low-fill:before {
    content: "\eab1";
  }
  .ri-battery-low-line:before {
    content: "\eab2";
  }
  .ri-battery-saver-fill:before {
    content: "\eab3";
  }
  .ri-battery-saver-line:before {
    content: "\eab4";
  }
  .ri-battery-share-fill:before {
    content: "\eab5";
  }
  .ri-battery-share-line:before {
    content: "\eab6";
  }
  .ri-bear-smile-fill:before {
    content: "\eab7";
  }
  .ri-bear-smile-line:before {
    content: "\eab8";
  }
  .ri-behance-fill:before {
    content: "\eab9";
  }
  .ri-behance-line:before {
    content: "\eaba";
  }
  .ri-bell-fill:before {
    content: "\eabb";
  }
  .ri-bell-line:before {
    content: "\eabc";
  }
  .ri-bike-fill:before {
    content: "\eabd";
  }
  .ri-bike-line:before {
    content: "\eabe";
  }
  .ri-bilibili-fill:before {
    content: "\eabf";
  }
  .ri-bilibili-line:before {
    content: "\eac0";
  }
  .ri-bill-fill:before {
    content: "\eac1";
  }
  .ri-bill-line:before {
    content: "\eac2";
  }
  .ri-billiards-fill:before {
    content: "\eac3";
  }
  .ri-billiards-line:before {
    content: "\eac4";
  }
  .ri-bit-coin-fill:before {
    content: "\eac5";
  }
  .ri-bit-coin-line:before {
    content: "\eac6";
  }
  .ri-blaze-fill:before {
    content: "\eac7";
  }
  .ri-blaze-line:before {
    content: "\eac8";
  }
  .ri-bluetooth-connect-fill:before {
    content: "\eac9";
  }
  .ri-bluetooth-connect-line:before {
    content: "\eaca";
  }
  .ri-bluetooth-fill:before {
    content: "\eacb";
  }
  .ri-bluetooth-line:before {
    content: "\eacc";
  }
  .ri-blur-off-fill:before {
    content: "\eacd";
  }
  .ri-blur-off-line:before {
    content: "\eace";
  }
  .ri-body-scan-fill:before {
    content: "\eacf";
  }
  .ri-body-scan-line:before {
    content: "\ead0";
  }
  .ri-bold:before {
    content: "\ead1";
  }
  .ri-book-2-fill:before {
    content: "\ead2";
  }
  .ri-book-2-line:before {
    content: "\ead3";
  }
  .ri-book-3-fill:before {
    content: "\ead4";
  }
  .ri-book-3-line:before {
    content: "\ead5";
  }
  .ri-book-fill:before {
    content: "\ead6";
  }
  .ri-book-line:before {
    content: "\ead7";
  }
  .ri-book-mark-fill:before {
    content: "\ead8";
  }
  .ri-book-mark-line:before {
    content: "\ead9";
  }
  .ri-book-open-fill:before {
    content: "\eada";
  }
  .ri-book-open-line:before {
    content: "\eadb";
  }
  .ri-book-read-fill:before {
    content: "\eadc";
  }
  .ri-book-read-line:before {
    content: "\eadd";
  }
  .ri-booklet-fill:before {
    content: "\eade";
  }
  .ri-booklet-line:before {
    content: "\eadf";
  }
  .ri-bookmark-2-fill:before {
    content: "\eae0";
  }
  .ri-bookmark-2-line:before {
    content: "\eae1";
  }
  .ri-bookmark-3-fill:before {
    content: "\eae2";
  }
  .ri-bookmark-3-line:before {
    content: "\eae3";
  }
  .ri-bookmark-fill:before {
    content: "\eae4";
  }
  .ri-bookmark-line:before {
    content: "\eae5";
  }
  .ri-boxing-fill:before {
    content: "\eae6";
  }
  .ri-boxing-line:before {
    content: "\eae7";
  }
  .ri-braces-fill:before {
    content: "\eae8";
  }
  .ri-braces-line:before {
    content: "\eae9";
  }
  .ri-brackets-fill:before {
    content: "\eaea";
  }
  .ri-brackets-line:before {
    content: "\eaeb";
  }
  .ri-briefcase-2-fill:before {
    content: "\eaec";
  }
  .ri-briefcase-2-line:before {
    content: "\eaed";
  }
  .ri-briefcase-3-fill:before {
    content: "\eaee";
  }
  .ri-briefcase-3-line:before {
    content: "\eaef";
  }
  .ri-briefcase-4-fill:before {
    content: "\eaf0";
  }
  .ri-briefcase-4-line:before {
    content: "\eaf1";
  }
  .ri-briefcase-5-fill:before {
    content: "\eaf2";
  }
  .ri-briefcase-5-line:before {
    content: "\eaf3";
  }
  .ri-briefcase-fill:before {
    content: "\eaf4";
  }
  .ri-briefcase-line:before {
    content: "\eaf5";
  }
  .ri-bring-forward:before {
    content: "\eaf6";
  }
  .ri-bring-to-front:before {
    content: "\eaf7";
  }
  .ri-broadcast-fill:before {
    content: "\eaf8";
  }
  .ri-broadcast-line:before {
    content: "\eaf9";
  }
  .ri-brush-2-fill:before {
    content: "\eafa";
  }
  .ri-brush-2-line:before {
    content: "\eafb";
  }
  .ri-brush-3-fill:before {
    content: "\eafc";
  }
  .ri-brush-3-line:before {
    content: "\eafd";
  }
  .ri-brush-4-fill:before {
    content: "\eafe";
  }
  .ri-brush-4-line:before {
    content: "\eaff";
  }
  .ri-brush-fill:before {
    content: "\eb00";
  }
  .ri-brush-line:before {
    content: "\eb01";
  }
  .ri-bubble-chart-fill:before {
    content: "\eb02";
  }
  .ri-bubble-chart-line:before {
    content: "\eb03";
  }
  .ri-bug-2-fill:before {
    content: "\eb04";
  }
  .ri-bug-2-line:before {
    content: "\eb05";
  }
  .ri-bug-fill:before {
    content: "\eb06";
  }
  .ri-bug-line:before {
    content: "\eb07";
  }
  .ri-building-2-fill:before {
    content: "\eb08";
  }
  .ri-building-2-line:before {
    content: "\eb09";
  }
  .ri-building-3-fill:before {
    content: "\eb0a";
  }
  .ri-building-3-line:before {
    content: "\eb0b";
  }
  .ri-building-4-fill:before {
    content: "\eb0c";
  }
  .ri-building-4-line:before {
    content: "\eb0d";
  }
  .ri-building-fill:before {
    content: "\eb0e";
  }
  .ri-building-line:before {
    content: "\eb0f";
  }
  .ri-bus-2-fill:before {
    content: "\eb10";
  }
  .ri-bus-2-line:before {
    content: "\eb11";
  }
  .ri-bus-fill:before {
    content: "\eb12";
  }
  .ri-bus-line:before {
    content: "\eb13";
  }
  .ri-bus-wifi-fill:before {
    content: "\eb14";
  }
  .ri-bus-wifi-line:before {
    content: "\eb15";
  }
  .ri-cactus-fill:before {
    content: "\eb16";
  }
  .ri-cactus-line:before {
    content: "\eb17";
  }
  .ri-cake-2-fill:before {
    content: "\eb18";
  }
  .ri-cake-2-line:before {
    content: "\eb19";
  }
  .ri-cake-3-fill:before {
    content: "\eb1a";
  }
  .ri-cake-3-line:before {
    content: "\eb1b";
  }
  .ri-cake-fill:before {
    content: "\eb1c";
  }
  .ri-cake-line:before {
    content: "\eb1d";
  }
  .ri-calculator-fill:before {
    content: "\eb1e";
  }
  .ri-calculator-line:before {
    content: "\eb1f";
  }
  .ri-calendar-2-fill:before {
    content: "\eb20";
  }
  .ri-calendar-2-line:before {
    content: "\eb21";
  }
  .ri-calendar-check-fill:before {
    content: "\eb22";
  }
  .ri-calendar-check-line:before {
    content: "\eb23";
  }
  .ri-calendar-event-fill:before {
    content: "\eb24";
  }
  .ri-calendar-event-line:before {
    content: "\eb25";
  }
  .ri-calendar-fill:before {
    content: "\eb26";
  }
  .ri-calendar-line:before {
    content: "\eb27";
  }
  .ri-calendar-todo-fill:before {
    content: "\eb28";
  }
  .ri-calendar-todo-line:before {
    content: "\eb29";
  }
  .ri-camera-2-fill:before {
    content: "\eb2a";
  }
  .ri-camera-2-line:before {
    content: "\eb2b";
  }
  .ri-camera-3-fill:before {
    content: "\eb2c";
  }
  .ri-camera-3-line:before {
    content: "\eb2d";
  }
  .ri-camera-fill:before {
    content: "\eb2e";
  }
  .ri-camera-lens-fill:before {
    content: "\eb2f";
  }
  .ri-camera-lens-line:before {
    content: "\eb30";
  }
  .ri-camera-line:before {
    content: "\eb31";
  }
  .ri-camera-off-fill:before {
    content: "\eb32";
  }
  .ri-camera-off-line:before {
    content: "\eb33";
  }
  .ri-camera-switch-fill:before {
    content: "\eb34";
  }
  .ri-camera-switch-line:before {
    content: "\eb35";
  }
  .ri-capsule-fill:before {
    content: "\eb36";
  }
  .ri-capsule-line:before {
    content: "\eb37";
  }
  .ri-car-fill:before {
    content: "\eb38";
  }
  .ri-car-line:before {
    content: "\eb39";
  }
  .ri-car-washing-fill:before {
    content: "\eb3a";
  }
  .ri-car-washing-line:before {
    content: "\eb3b";
  }
  .ri-caravan-fill:before {
    content: "\eb3c";
  }
  .ri-caravan-line:before {
    content: "\eb3d";
  }
  .ri-cast-fill:before {
    content: "\eb3e";
  }
  .ri-cast-line:before {
    content: "\eb3f";
  }
  .ri-cellphone-fill:before {
    content: "\eb40";
  }
  .ri-cellphone-line:before {
    content: "\eb41";
  }
  .ri-celsius-fill:before {
    content: "\eb42";
  }
  .ri-celsius-line:before {
    content: "\eb43";
  }
  .ri-centos-fill:before {
    content: "\eb44";
  }
  .ri-centos-line:before {
    content: "\eb45";
  }
  .ri-character-recognition-fill:before {
    content: "\eb46";
  }
  .ri-character-recognition-line:before {
    content: "\eb47";
  }
  .ri-charging-pile-2-fill:before {
    content: "\eb48";
  }
  .ri-charging-pile-2-line:before {
    content: "\eb49";
  }
  .ri-charging-pile-fill:before {
    content: "\eb4a";
  }
  .ri-charging-pile-line:before {
    content: "\eb4b";
  }
  .ri-chat-1-fill:before {
    content: "\eb4c";
  }
  .ri-chat-1-line:before {
    content: "\eb4d";
  }
  .ri-chat-2-fill:before {
    content: "\eb4e";
  }
  .ri-chat-2-line:before {
    content: "\eb4f";
  }
  .ri-chat-3-fill:before {
    content: "\eb50";
  }
  .ri-chat-3-line:before {
    content: "\eb51";
  }
  .ri-chat-4-fill:before {
    content: "\eb52";
  }
  .ri-chat-4-line:before {
    content: "\eb53";
  }
  .ri-chat-check-fill:before {
    content: "\eb54";
  }
  .ri-chat-check-line:before {
    content: "\eb55";
  }
  .ri-chat-delete-fill:before {
    content: "\eb56";
  }
  .ri-chat-delete-line:before {
    content: "\eb57";
  }
  .ri-chat-download-fill:before {
    content: "\eb58";
  }
  .ri-chat-download-line:before {
    content: "\eb59";
  }
  .ri-chat-follow-up-fill:before {
    content: "\eb5a";
  }
  .ri-chat-follow-up-line:before {
    content: "\eb5b";
  }
  .ri-chat-forward-fill:before {
    content: "\eb5c";
  }
  .ri-chat-forward-line:before {
    content: "\eb5d";
  }
  .ri-chat-heart-fill:before {
    content: "\eb5e";
  }
  .ri-chat-heart-line:before {
    content: "\eb5f";
  }
  .ri-chat-history-fill:before {
    content: "\eb60";
  }
  .ri-chat-history-line:before {
    content: "\eb61";
  }
  .ri-chat-new-fill:before {
    content: "\eb62";
  }
  .ri-chat-new-line:before {
    content: "\eb63";
  }
  .ri-chat-off-fill:before {
    content: "\eb64";
  }
  .ri-chat-off-line:before {
    content: "\eb65";
  }
  .ri-chat-poll-fill:before {
    content: "\eb66";
  }
  .ri-chat-poll-line:before {
    content: "\eb67";
  }
  .ri-chat-private-fill:before {
    content: "\eb68";
  }
  .ri-chat-private-line:before {
    content: "\eb69";
  }
  .ri-chat-quote-fill:before {
    content: "\eb6a";
  }
  .ri-chat-quote-line:before {
    content: "\eb6b";
  }
  .ri-chat-settings-fill:before {
    content: "\eb6c";
  }
  .ri-chat-settings-line:before {
    content: "\eb6d";
  }
  .ri-chat-smile-2-fill:before {
    content: "\eb6e";
  }
  .ri-chat-smile-2-line:before {
    content: "\eb6f";
  }
  .ri-chat-smile-3-fill:before {
    content: "\eb70";
  }
  .ri-chat-smile-3-line:before {
    content: "\eb71";
  }
  .ri-chat-smile-fill:before {
    content: "\eb72";
  }
  .ri-chat-smile-line:before {
    content: "\eb73";
  }
  .ri-chat-upload-fill:before {
    content: "\eb74";
  }
  .ri-chat-upload-line:before {
    content: "\eb75";
  }
  .ri-chat-voice-fill:before {
    content: "\eb76";
  }
  .ri-chat-voice-line:before {
    content: "\eb77";
  }
  .ri-check-double-fill:before {
    content: "\eb78";
  }
  .ri-check-double-line:before {
    content: "\eb79";
  }
  .ri-check-fill:before {
    content: "\eb7a";
  }
  .ri-check-line:before {
    content: "\eb7b";
  }
  .ri-checkbox-blank-circle-fill:before {
    content: "\eb7c";
  }
  .ri-checkbox-blank-circle-line:before {
    content: "\eb7d";
  }
  .ri-checkbox-blank-fill:before {
    content: "\eb7e";
  }
  .ri-checkbox-blank-line:before {
    content: "\eb7f";
  }
  .ri-checkbox-circle-fill:before {
    content: "\eb80";
  }
  .ri-checkbox-circle-line:before {
    content: "\eb81";
  }
  .ri-checkbox-fill:before {
    content: "\eb82";
  }
  .ri-checkbox-indeterminate-fill:before {
    content: "\eb83";
  }
  .ri-checkbox-indeterminate-line:before {
    content: "\eb84";
  }
  .ri-checkbox-line:before {
    content: "\eb85";
  }
  .ri-checkbox-multiple-blank-fill:before {
    content: "\eb86";
  }
  .ri-checkbox-multiple-blank-line:before {
    content: "\eb87";
  }
  .ri-checkbox-multiple-fill:before {
    content: "\eb88";
  }
  .ri-checkbox-multiple-line:before {
    content: "\eb89";
  }
  .ri-china-railway-fill:before {
    content: "\eb8a";
  }
  .ri-china-railway-line:before {
    content: "\eb8b";
  }
  .ri-chrome-fill:before {
    content: "\eb8c";
  }
  .ri-chrome-line:before {
    content: "\eb8d";
  }
  .ri-clapperboard-fill:before {
    content: "\eb8e";
  }
  .ri-clapperboard-line:before {
    content: "\eb8f";
  }
  .ri-clipboard-fill:before {
    content: "\eb90";
  }
  .ri-clipboard-line:before {
    content: "\eb91";
  }
  .ri-clockwise-2-fill:before {
    content: "\eb92";
  }
  .ri-clockwise-2-line:before {
    content: "\eb93";
  }
  .ri-clockwise-fill:before {
    content: "\eb94";
  }
  .ri-clockwise-line:before {
    content: "\eb95";
  }
  .ri-close-circle-fill:before {
    content: "\eb96";
  }
  .ri-close-circle-line:before {
    content: "\eb97";
  }
  .ri-close-fill:before {
    content: "\eb98";
  }
  .ri-close-line:before {
    content: "\eb99";
  }
  .ri-closed-captioning-fill:before {
    content: "\eb9a";
  }
  .ri-closed-captioning-line:before {
    content: "\eb9b";
  }
  .ri-cloud-fill:before {
    content: "\eb9c";
  }
  .ri-cloud-line:before {
    content: "\eb9d";
  }
  .ri-cloud-off-fill:before {
    content: "\eb9e";
  }
  .ri-cloud-off-line:before {
    content: "\eb9f";
  }
  .ri-cloud-windy-fill:before {
    content: "\eba0";
  }
  .ri-cloud-windy-line:before {
    content: "\eba1";
  }
  .ri-cloudy-2-fill:before {
    content: "\eba2";
  }
  .ri-cloudy-2-line:before {
    content: "\eba3";
  }
  .ri-cloudy-fill:before {
    content: "\eba4";
  }
  .ri-cloudy-line:before {
    content: "\eba5";
  }
  .ri-code-box-fill:before {
    content: "\eba6";
  }
  .ri-code-box-line:before {
    content: "\eba7";
  }
  .ri-code-fill:before {
    content: "\eba8";
  }
  .ri-code-line:before {
    content: "\eba9";
  }
  .ri-code-s-fill:before {
    content: "\ebaa";
  }
  .ri-code-s-line:before {
    content: "\ebab";
  }
  .ri-code-s-slash-fill:before {
    content: "\ebac";
  }
  .ri-code-s-slash-line:before {
    content: "\ebad";
  }
  .ri-code-view:before {
    content: "\ebae";
  }
  .ri-codepen-fill:before {
    content: "\ebaf";
  }
  .ri-codepen-line:before {
    content: "\ebb0";
  }
  .ri-coin-fill:before {
    content: "\ebb1";
  }
  .ri-coin-line:before {
    content: "\ebb2";
  }
  .ri-coins-fill:before {
    content: "\ebb3";
  }
  .ri-coins-line:before {
    content: "\ebb4";
  }
  .ri-collage-fill:before {
    content: "\ebb5";
  }
  .ri-collage-line:before {
    content: "\ebb6";
  }
  .ri-command-fill:before {
    content: "\ebb7";
  }
  .ri-command-line:before {
    content: "\ebb8";
  }
  .ri-community-fill:before {
    content: "\ebb9";
  }
  .ri-community-line:before {
    content: "\ebba";
  }
  .ri-compass-2-fill:before {
    content: "\ebbb";
  }
  .ri-compass-2-line:before {
    content: "\ebbc";
  }
  .ri-compass-3-fill:before {
    content: "\ebbd";
  }
  .ri-compass-3-line:before {
    content: "\ebbe";
  }
  .ri-compass-4-fill:before {
    content: "\ebbf";
  }
  .ri-compass-4-line:before {
    content: "\ebc0";
  }
  .ri-compass-discover-fill:before {
    content: "\ebc1";
  }
  .ri-compass-discover-line:before {
    content: "\ebc2";
  }
  .ri-compass-fill:before {
    content: "\ebc3";
  }
  .ri-compass-line:before {
    content: "\ebc4";
  }
  .ri-compasses-2-fill:before {
    content: "\ebc5";
  }
  .ri-compasses-2-line:before {
    content: "\ebc6";
  }
  .ri-compasses-fill:before {
    content: "\ebc7";
  }
  .ri-compasses-line:before {
    content: "\ebc8";
  }
  .ri-computer-fill:before {
    content: "\ebc9";
  }
  .ri-computer-line:before {
    content: "\ebca";
  }
  .ri-contacts-book-2-fill:before {
    content: "\ebcb";
  }
  .ri-contacts-book-2-line:before {
    content: "\ebcc";
  }
  .ri-contacts-book-fill:before {
    content: "\ebcd";
  }
  .ri-contacts-book-line:before {
    content: "\ebce";
  }
  .ri-contacts-book-upload-fill:before {
    content: "\ebcf";
  }
  .ri-contacts-book-upload-line:before {
    content: "\ebd0";
  }
  .ri-contacts-fill:before {
    content: "\ebd1";
  }
  .ri-contacts-line:before {
    content: "\ebd2";
  }
  .ri-contrast-2-fill:before {
    content: "\ebd3";
  }
  .ri-contrast-2-line:before {
    content: "\ebd4";
  }
  .ri-contrast-drop-2-fill:before {
    content: "\ebd5";
  }
  .ri-contrast-drop-2-line:before {
    content: "\ebd6";
  }
  .ri-contrast-drop-fill:before {
    content: "\ebd7";
  }
  .ri-contrast-drop-line:before {
    content: "\ebd8";
  }
  .ri-contrast-fill:before {
    content: "\ebd9";
  }
  .ri-contrast-line:before {
    content: "\ebda";
  }
  .ri-copper-coin-fill:before {
    content: "\ebdb";
  }
  .ri-copper-coin-line:before {
    content: "\ebdc";
  }
  .ri-copper-diamond-fill:before {
    content: "\ebdd";
  }
  .ri-copper-diamond-line:before {
    content: "\ebde";
  }
  .ri-copyleft-fill:before {
    content: "\ebdf";
  }
  .ri-copyleft-line:before {
    content: "\ebe0";
  }
  .ri-copyright-fill:before {
    content: "\ebe1";
  }
  .ri-copyright-line:before {
    content: "\ebe2";
  }
  .ri-coreos-fill:before {
    content: "\ebe3";
  }
  .ri-coreos-line:before {
    content: "\ebe4";
  }
  .ri-coupon-2-fill:before {
    content: "\ebe5";
  }
  .ri-coupon-2-line:before {
    content: "\ebe6";
  }
  .ri-coupon-3-fill:before {
    content: "\ebe7";
  }
  .ri-coupon-3-line:before {
    content: "\ebe8";
  }
  .ri-coupon-4-fill:before {
    content: "\ebe9";
  }
  .ri-coupon-4-line:before {
    content: "\ebea";
  }
  .ri-coupon-5-fill:before {
    content: "\ebeb";
  }
  .ri-coupon-5-line:before {
    content: "\ebec";
  }
  .ri-coupon-fill:before {
    content: "\ebed";
  }
  .ri-coupon-line:before {
    content: "\ebee";
  }
  .ri-cpu-fill:before {
    content: "\ebef";
  }
  .ri-cpu-line:before {
    content: "\ebf0";
  }
  .ri-creative-commons-by-fill:before {
    content: "\ebf1";
  }
  .ri-creative-commons-by-line:before {
    content: "\ebf2";
  }
  .ri-creative-commons-fill:before {
    content: "\ebf3";
  }
  .ri-creative-commons-line:before {
    content: "\ebf4";
  }
  .ri-creative-commons-nc-fill:before {
    content: "\ebf5";
  }
  .ri-creative-commons-nc-line:before {
    content: "\ebf6";
  }
  .ri-creative-commons-nd-fill:before {
    content: "\ebf7";
  }
  .ri-creative-commons-nd-line:before {
    content: "\ebf8";
  }
  .ri-creative-commons-sa-fill:before {
    content: "\ebf9";
  }
  .ri-creative-commons-sa-line:before {
    content: "\ebfa";
  }
  .ri-creative-commons-zero-fill:before {
    content: "\ebfb";
  }
  .ri-creative-commons-zero-line:before {
    content: "\ebfc";
  }
  .ri-criminal-fill:before {
    content: "\ebfd";
  }
  .ri-criminal-line:before {
    content: "\ebfe";
  }
  .ri-crop-2-fill:before {
    content: "\ebff";
  }
  .ri-crop-2-line:before {
    content: "\ec00";
  }
  .ri-crop-fill:before {
    content: "\ec01";
  }
  .ri-crop-line:before {
    content: "\ec02";
  }
  .ri-css3-fill:before {
    content: "\ec03";
  }
  .ri-css3-line:before {
    content: "\ec04";
  }
  .ri-cup-fill:before {
    content: "\ec05";
  }
  .ri-cup-line:before {
    content: "\ec06";
  }
  .ri-currency-fill:before {
    content: "\ec07";
  }
  .ri-currency-line:before {
    content: "\ec08";
  }
  .ri-cursor-fill:before {
    content: "\ec09";
  }
  .ri-cursor-line:before {
    content: "\ec0a";
  }
  .ri-customer-service-2-fill:before {
    content: "\ec0b";
  }
  .ri-customer-service-2-line:before {
    content: "\ec0c";
  }
  .ri-customer-service-fill:before {
    content: "\ec0d";
  }
  .ri-customer-service-line:before {
    content: "\ec0e";
  }
  .ri-dashboard-2-fill:before {
    content: "\ec0f";
  }
  .ri-dashboard-2-line:before {
    content: "\ec10";
  }
  .ri-dashboard-3-fill:before {
    content: "\ec11";
  }
  .ri-dashboard-3-line:before {
    content: "\ec12";
  }
  .ri-dashboard-fill:before {
    content: "\ec13";
  }
  .ri-dashboard-line:before {
    content: "\ec14";
  }
  .ri-database-2-fill:before {
    content: "\ec15";
  }
  .ri-database-2-line:before {
    content: "\ec16";
  }
  .ri-database-fill:before {
    content: "\ec17";
  }
  .ri-database-line:before {
    content: "\ec18";
  }
  .ri-delete-back-2-fill:before {
    content: "\ec19";
  }
  .ri-delete-back-2-line:before {
    content: "\ec1a";
  }
  .ri-delete-back-fill:before {
    content: "\ec1b";
  }
  .ri-delete-back-line:before {
    content: "\ec1c";
  }
  .ri-delete-bin-2-fill:before {
    content: "\ec1d";
  }
  .ri-delete-bin-2-line:before {
    content: "\ec1e";
  }
  .ri-delete-bin-3-fill:before {
    content: "\ec1f";
  }
  .ri-delete-bin-3-line:before {
    content: "\ec20";
  }
  .ri-delete-bin-4-fill:before {
    content: "\ec21";
  }
  .ri-delete-bin-4-line:before {
    content: "\ec22";
  }
  .ri-delete-bin-5-fill:before {
    content: "\ec23";
  }
  .ri-delete-bin-5-line:before {
    content: "\ec24";
  }
  .ri-delete-bin-6-fill:before {
    content: "\ec25";
  }
  .ri-delete-bin-6-line:before {
    content: "\ec26";
  }
  .ri-delete-bin-7-fill:before {
    content: "\ec27";
  }
  .ri-delete-bin-7-line:before {
    content: "\ec28";
  }
  .ri-delete-bin-fill:before {
    content: "\ec29";
  }
  .ri-delete-bin-line:before {
    content: "\ec2a";
  }
  .ri-delete-column:before {
    content: "\ec2b";
  }
  .ri-delete-row:before {
    content: "\ec2c";
  }
  .ri-device-fill:before {
    content: "\ec2d";
  }
  .ri-device-line:before {
    content: "\ec2e";
  }
  .ri-device-recover-fill:before {
    content: "\ec2f";
  }
  .ri-device-recover-line:before {
    content: "\ec30";
  }
  .ri-dingding-fill:before {
    content: "\ec31";
  }
  .ri-dingding-line:before {
    content: "\ec32";
  }
  .ri-direction-fill:before {
    content: "\ec33";
  }
  .ri-direction-line:before {
    content: "\ec34";
  }
  .ri-disc-fill:before {
    content: "\ec35";
  }
  .ri-disc-line:before {
    content: "\ec36";
  }
  .ri-discord-fill:before {
    content: "\ec37";
  }
  .ri-discord-line:before {
    content: "\ec38";
  }
  .ri-discuss-fill:before {
    content: "\ec39";
  }
  .ri-discuss-line:before {
    content: "\ec3a";
  }
  .ri-dislike-fill:before {
    content: "\ec3b";
  }
  .ri-dislike-line:before {
    content: "\ec3c";
  }
  .ri-disqus-fill:before {
    content: "\ec3d";
  }
  .ri-disqus-line:before {
    content: "\ec3e";
  }
  .ri-divide-fill:before {
    content: "\ec3f";
  }
  .ri-divide-line:before {
    content: "\ec40";
  }
  .ri-donut-chart-fill:before {
    content: "\ec41";
  }
  .ri-donut-chart-line:before {
    content: "\ec42";
  }
  .ri-door-closed-fill:before {
    content: "\ec43";
  }
  .ri-door-closed-line:before {
    content: "\ec44";
  }
  .ri-door-fill:before {
    content: "\ec45";
  }
  .ri-door-line:before {
    content: "\ec46";
  }
  .ri-door-lock-box-fill:before {
    content: "\ec47";
  }
  .ri-door-lock-box-line:before {
    content: "\ec48";
  }
  .ri-door-lock-fill:before {
    content: "\ec49";
  }
  .ri-door-lock-line:before {
    content: "\ec4a";
  }
  .ri-door-open-fill:before {
    content: "\ec4b";
  }
  .ri-door-open-line:before {
    content: "\ec4c";
  }
  .ri-dossier-fill:before {
    content: "\ec4d";
  }
  .ri-dossier-line:before {
    content: "\ec4e";
  }
  .ri-douban-fill:before {
    content: "\ec4f";
  }
  .ri-douban-line:before {
    content: "\ec50";
  }
  .ri-double-quotes-l:before {
    content: "\ec51";
  }
  .ri-double-quotes-r:before {
    content: "\ec52";
  }
  .ri-download-2-fill:before {
    content: "\ec53";
  }
  .ri-download-2-line:before {
    content: "\ec54";
  }
  .ri-download-cloud-2-fill:before {
    content: "\ec55";
  }
  .ri-download-cloud-2-line:before {
    content: "\ec56";
  }
  .ri-download-cloud-fill:before {
    content: "\ec57";
  }
  .ri-download-cloud-line:before {
    content: "\ec58";
  }
  .ri-download-fill:before {
    content: "\ec59";
  }
  .ri-download-line:before {
    content: "\ec5a";
  }
  .ri-draft-fill:before {
    content: "\ec5b";
  }
  .ri-draft-line:before {
    content: "\ec5c";
  }
  .ri-drag-drop-fill:before {
    content: "\ec5d";
  }
  .ri-drag-drop-line:before {
    content: "\ec5e";
  }
  .ri-drag-move-2-fill:before {
    content: "\ec5f";
  }
  .ri-drag-move-2-line:before {
    content: "\ec60";
  }
  .ri-drag-move-fill:before {
    content: "\ec61";
  }
  .ri-drag-move-line:before {
    content: "\ec62";
  }
  .ri-dribbble-fill:before {
    content: "\ec63";
  }
  .ri-dribbble-line:before {
    content: "\ec64";
  }
  .ri-drive-fill:before {
    content: "\ec65";
  }
  .ri-drive-line:before {
    content: "\ec66";
  }
  .ri-drizzle-fill:before {
    content: "\ec67";
  }
  .ri-drizzle-line:before {
    content: "\ec68";
  }
  .ri-drop-fill:before {
    content: "\ec69";
  }
  .ri-drop-line:before {
    content: "\ec6a";
  }
  .ri-dropbox-fill:before {
    content: "\ec6b";
  }
  .ri-dropbox-line:before {
    content: "\ec6c";
  }
  .ri-dual-sim-1-fill:before {
    content: "\ec6d";
  }
  .ri-dual-sim-1-line:before {
    content: "\ec6e";
  }
  .ri-dual-sim-2-fill:before {
    content: "\ec6f";
  }
  .ri-dual-sim-2-line:before {
    content: "\ec70";
  }
  .ri-dv-fill:before {
    content: "\ec71";
  }
  .ri-dv-line:before {
    content: "\ec72";
  }
  .ri-dvd-fill:before {
    content: "\ec73";
  }
  .ri-dvd-line:before {
    content: "\ec74";
  }
  .ri-e-bike-2-fill:before {
    content: "\ec75";
  }
  .ri-e-bike-2-line:before {
    content: "\ec76";
  }
  .ri-e-bike-fill:before {
    content: "\ec77";
  }
  .ri-e-bike-line:before {
    content: "\ec78";
  }
  .ri-earth-fill:before {
    content: "\ec79";
  }
  .ri-earth-line:before {
    content: "\ec7a";
  }
  .ri-earthquake-fill:before {
    content: "\ec7b";
  }
  .ri-earthquake-line:before {
    content: "\ec7c";
  }
  .ri-edge-fill:before {
    content: "\ec7d";
  }
  .ri-edge-line:before {
    content: "\ec7e";
  }
  .ri-edit-2-fill:before {
    content: "\ec7f";
  }
  .ri-edit-2-line:before {
    content: "\ec80";
  }
  .ri-edit-box-fill:before {
    content: "\ec81";
  }
  .ri-edit-box-line:before {
    content: "\ec82";
  }
  .ri-edit-circle-fill:before {
    content: "\ec83";
  }
  .ri-edit-circle-line:before {
    content: "\ec84";
  }
  .ri-edit-fill:before {
    content: "\ec85";
  }
  .ri-edit-line:before {
    content: "\ec86";
  }
  .ri-eject-fill:before {
    content: "\ec87";
  }
  .ri-eject-line:before {
    content: "\ec88";
  }
  .ri-emotion-2-fill:before {
    content: "\ec89";
  }
  .ri-emotion-2-line:before {
    content: "\ec8a";
  }
  .ri-emotion-fill:before {
    content: "\ec8b";
  }
  .ri-emotion-happy-fill:before {
    content: "\ec8c";
  }
  .ri-emotion-happy-line:before {
    content: "\ec8d";
  }
  .ri-emotion-laugh-fill:before {
    content: "\ec8e";
  }
  .ri-emotion-laugh-line:before {
    content: "\ec8f";
  }
  .ri-emotion-line:before {
    content: "\ec90";
  }
  .ri-emotion-normal-fill:before {
    content: "\ec91";
  }
  .ri-emotion-normal-line:before {
    content: "\ec92";
  }
  .ri-emotion-sad-fill:before {
    content: "\ec93";
  }
  .ri-emotion-sad-line:before {
    content: "\ec94";
  }
  .ri-emotion-unhappy-fill:before {
    content: "\ec95";
  }
  .ri-emotion-unhappy-line:before {
    content: "\ec96";
  }
  .ri-empathize-fill:before {
    content: "\ec97";
  }
  .ri-empathize-line:before {
    content: "\ec98";
  }
  .ri-emphasis-cn:before {
    content: "\ec99";
  }
  .ri-emphasis:before {
    content: "\ec9a";
  }
  .ri-english-input:before {
    content: "\ec9b";
  }
  .ri-equalizer-fill:before {
    content: "\ec9c";
  }
  .ri-equalizer-line:before {
    content: "\ec9d";
  }
  .ri-eraser-fill:before {
    content: "\ec9e";
  }
  .ri-eraser-line:before {
    content: "\ec9f";
  }
  .ri-error-warning-fill:before {
    content: "\eca0";
  }
  .ri-error-warning-line:before {
    content: "\eca1";
  }
  .ri-evernote-fill:before {
    content: "\eca2";
  }
  .ri-evernote-line:before {
    content: "\eca3";
  }
  .ri-exchange-box-fill:before {
    content: "\eca4";
  }
  .ri-exchange-box-line:before {
    content: "\eca5";
  }
  .ri-exchange-cny-fill:before {
    content: "\eca6";
  }
  .ri-exchange-cny-line:before {
    content: "\eca7";
  }
  .ri-exchange-dollar-fill:before {
    content: "\eca8";
  }
  .ri-exchange-dollar-line:before {
    content: "\eca9";
  }
  .ri-exchange-fill:before {
    content: "\ecaa";
  }
  .ri-exchange-funds-fill:before {
    content: "\ecab";
  }
  .ri-exchange-funds-line:before {
    content: "\ecac";
  }
  .ri-exchange-line:before {
    content: "\ecad";
  }
  .ri-external-link-fill:before {
    content: "\ecae";
  }
  .ri-external-link-line:before {
    content: "\ecaf";
  }
  .ri-eye-2-fill:before {
    content: "\ecb0";
  }
  .ri-eye-2-line:before {
    content: "\ecb1";
  }
  .ri-eye-close-fill:before {
    content: "\ecb2";
  }
  .ri-eye-close-line:before {
    content: "\ecb3";
  }
  .ri-eye-fill:before {
    content: "\ecb4";
  }
  .ri-eye-line:before {
    content: "\ecb5";
  }
  .ri-eye-off-fill:before {
    content: "\ecb6";
  }
  .ri-eye-off-line:before {
    content: "\ecb7";
  }
  .ri-facebook-box-fill:before {
    content: "\ecb8";
  }
  .ri-facebook-box-line:before {
    content: "\ecb9";
  }
  .ri-facebook-circle-fill:before {
    content: "\ecba";
  }
  .ri-facebook-circle-line:before {
    content: "\ecbb";
  }
  .ri-facebook-fill:before {
    content: "\ecbc";
  }
  .ri-facebook-line:before {
    content: "\ecbd";
  }
  .ri-fahrenheit-fill:before {
    content: "\ecbe";
  }
  .ri-fahrenheit-line:before {
    content: "\ecbf";
  }
  .ri-feedback-fill:before {
    content: "\ecc0";
  }
  .ri-feedback-line:before {
    content: "\ecc1";
  }
  .ri-file-2-fill:before {
    content: "\ecc2";
  }
  .ri-file-2-line:before {
    content: "\ecc3";
  }
  .ri-file-3-fill:before {
    content: "\ecc4";
  }
  .ri-file-3-line:before {
    content: "\ecc5";
  }
  .ri-file-4-fill:before {
    content: "\ecc6";
  }
  .ri-file-4-line:before {
    content: "\ecc7";
  }
  .ri-file-add-fill:before {
    content: "\ecc8";
  }
  .ri-file-add-line:before {
    content: "\ecc9";
  }
  .ri-file-chart-2-fill:before {
    content: "\ecca";
  }
  .ri-file-chart-2-line:before {
    content: "\eccb";
  }
  .ri-file-chart-fill:before {
    content: "\eccc";
  }
  .ri-file-chart-line:before {
    content: "\eccd";
  }
  .ri-file-cloud-fill:before {
    content: "\ecce";
  }
  .ri-file-cloud-line:before {
    content: "\eccf";
  }
  .ri-file-code-fill:before {
    content: "\ecd0";
  }
  .ri-file-code-line:before {
    content: "\ecd1";
  }
  .ri-file-copy-2-fill:before {
    content: "\ecd2";
  }
  .ri-file-copy-2-line:before {
    content: "\ecd3";
  }
  .ri-file-copy-fill:before {
    content: "\ecd4";
  }
  .ri-file-copy-line:before {
    content: "\ecd5";
  }
  .ri-file-damage-fill:before {
    content: "\ecd6";
  }
  .ri-file-damage-line:before {
    content: "\ecd7";
  }
  .ri-file-download-fill:before {
    content: "\ecd8";
  }
  .ri-file-download-line:before {
    content: "\ecd9";
  }
  .ri-file-edit-fill:before {
    content: "\ecda";
  }
  .ri-file-edit-line:before {
    content: "\ecdb";
  }
  .ri-file-excel-2-fill:before {
    content: "\ecdc";
  }
  .ri-file-excel-2-line:before {
    content: "\ecdd";
  }
  .ri-file-excel-fill:before {
    content: "\ecde";
  }
  .ri-file-excel-line:before {
    content: "\ecdf";
  }
  .ri-file-fill:before {
    content: "\ece0";
  }
  .ri-file-forbid-fill:before {
    content: "\ece1";
  }
  .ri-file-forbid-line:before {
    content: "\ece2";
  }
  .ri-file-gif-fill:before {
    content: "\ece3";
  }
  .ri-file-gif-line:before {
    content: "\ece4";
  }
  .ri-file-history-fill:before {
    content: "\ece5";
  }
  .ri-file-history-line:before {
    content: "\ece6";
  }
  .ri-file-hwp-fill:before {
    content: "\ece7";
  }
  .ri-file-hwp-line:before {
    content: "\ece8";
  }
  .ri-file-info-fill:before {
    content: "\ece9";
  }
  .ri-file-info-line:before {
    content: "\ecea";
  }
  .ri-file-line:before {
    content: "\eceb";
  }
  .ri-file-list-2-fill:before {
    content: "\ecec";
  }
  .ri-file-list-2-line:before {
    content: "\eced";
  }
  .ri-file-list-3-fill:before {
    content: "\ecee";
  }
  .ri-file-list-3-line:before {
    content: "\ecef";
  }
  .ri-file-list-fill:before {
    content: "\ecf0";
  }
  .ri-file-list-line:before {
    content: "\ecf1";
  }
  .ri-file-lock-fill:before {
    content: "\ecf2";
  }
  .ri-file-lock-line:before {
    content: "\ecf3";
  }
  .ri-file-mark-fill:before {
    content: "\ecf4";
  }
  .ri-file-mark-line:before {
    content: "\ecf5";
  }
  .ri-file-music-fill:before {
    content: "\ecf6";
  }
  .ri-file-music-line:before {
    content: "\ecf7";
  }
  .ri-file-paper-2-fill:before {
    content: "\ecf8";
  }
  .ri-file-paper-2-line:before {
    content: "\ecf9";
  }
  .ri-file-paper-fill:before {
    content: "\ecfa";
  }
  .ri-file-paper-line:before {
    content: "\ecfb";
  }
  .ri-file-pdf-fill:before {
    content: "\ecfc";
  }
  .ri-file-pdf-line:before {
    content: "\ecfd";
  }
  .ri-file-ppt-2-fill:before {
    content: "\ecfe";
  }
  .ri-file-ppt-2-line:before {
    content: "\ecff";
  }
  .ri-file-ppt-fill:before {
    content: "\ed00";
  }
  .ri-file-ppt-line:before {
    content: "\ed01";
  }
  .ri-file-reduce-fill:before {
    content: "\ed02";
  }
  .ri-file-reduce-line:before {
    content: "\ed03";
  }
  .ri-file-search-fill:before {
    content: "\ed04";
  }
  .ri-file-search-line:before {
    content: "\ed05";
  }
  .ri-file-settings-fill:before {
    content: "\ed06";
  }
  .ri-file-settings-line:before {
    content: "\ed07";
  }
  .ri-file-shield-2-fill:before {
    content: "\ed08";
  }
  .ri-file-shield-2-line:before {
    content: "\ed09";
  }
  .ri-file-shield-fill:before {
    content: "\ed0a";
  }
  .ri-file-shield-line:before {
    content: "\ed0b";
  }
  .ri-file-shred-fill:before {
    content: "\ed0c";
  }
  .ri-file-shred-line:before {
    content: "\ed0d";
  }
  .ri-file-text-fill:before {
    content: "\ed0e";
  }
  .ri-file-text-line:before {
    content: "\ed0f";
  }
  .ri-file-transfer-fill:before {
    content: "\ed10";
  }
  .ri-file-transfer-line:before {
    content: "\ed11";
  }
  .ri-file-unknow-fill:before {
    content: "\ed12";
  }
  .ri-file-unknow-line:before {
    content: "\ed13";
  }
  .ri-file-upload-fill:before {
    content: "\ed14";
  }
  .ri-file-upload-line:before {
    content: "\ed15";
  }
  .ri-file-user-fill:before {
    content: "\ed16";
  }
  .ri-file-user-line:before {
    content: "\ed17";
  }
  .ri-file-warning-fill:before {
    content: "\ed18";
  }
  .ri-file-warning-line:before {
    content: "\ed19";
  }
  .ri-file-word-2-fill:before {
    content: "\ed1a";
  }
  .ri-file-word-2-line:before {
    content: "\ed1b";
  }
  .ri-file-word-fill:before {
    content: "\ed1c";
  }
  .ri-file-word-line:before {
    content: "\ed1d";
  }
  .ri-file-zip-fill:before {
    content: "\ed1e";
  }
  .ri-file-zip-line:before {
    content: "\ed1f";
  }
  .ri-film-fill:before {
    content: "\ed20";
  }
  .ri-film-line:before {
    content: "\ed21";
  }
  .ri-filter-2-fill:before {
    content: "\ed22";
  }
  .ri-filter-2-line:before {
    content: "\ed23";
  }
  .ri-filter-3-fill:before {
    content: "\ed24";
  }
  .ri-filter-3-line:before {
    content: "\ed25";
  }
  .ri-filter-fill:before {
    content: "\ed26";
  }
  .ri-filter-line:before {
    content: "\ed27";
  }
  .ri-filter-off-fill:before {
    content: "\ed28";
  }
  .ri-filter-off-line:before {
    content: "\ed29";
  }
  .ri-find-replace-fill:before {
    content: "\ed2a";
  }
  .ri-find-replace-line:before {
    content: "\ed2b";
  }
  .ri-finder-fill:before {
    content: "\ed2c";
  }
  .ri-finder-line:before {
    content: "\ed2d";
  }
  .ri-fingerprint-2-fill:before {
    content: "\ed2e";
  }
  .ri-fingerprint-2-line:before {
    content: "\ed2f";
  }
  .ri-fingerprint-fill:before {
    content: "\ed30";
  }
  .ri-fingerprint-line:before {
    content: "\ed31";
  }
  .ri-fire-fill:before {
    content: "\ed32";
  }
  .ri-fire-line:before {
    content: "\ed33";
  }
  .ri-firefox-fill:before {
    content: "\ed34";
  }
  .ri-firefox-line:before {
    content: "\ed35";
  }
  .ri-first-aid-kit-fill:before {
    content: "\ed36";
  }
  .ri-first-aid-kit-line:before {
    content: "\ed37";
  }
  .ri-flag-2-fill:before {
    content: "\ed38";
  }
  .ri-flag-2-line:before {
    content: "\ed39";
  }
  .ri-flag-fill:before {
    content: "\ed3a";
  }
  .ri-flag-line:before {
    content: "\ed3b";
  }
  .ri-flashlight-fill:before {
    content: "\ed3c";
  }
  .ri-flashlight-line:before {
    content: "\ed3d";
  }
  .ri-flask-fill:before {
    content: "\ed3e";
  }
  .ri-flask-line:before {
    content: "\ed3f";
  }
  .ri-flight-land-fill:before {
    content: "\ed40";
  }
  .ri-flight-land-line:before {
    content: "\ed41";
  }
  .ri-flight-takeoff-fill:before {
    content: "\ed42";
  }
  .ri-flight-takeoff-line:before {
    content: "\ed43";
  }
  .ri-flood-fill:before {
    content: "\ed44";
  }
  .ri-flood-line:before {
    content: "\ed45";
  }
  .ri-flow-chart:before {
    content: "\ed46";
  }
  .ri-flutter-fill:before {
    content: "\ed47";
  }
  .ri-flutter-line:before {
    content: "\ed48";
  }
  .ri-focus-2-fill:before {
    content: "\ed49";
  }
  .ri-focus-2-line:before {
    content: "\ed4a";
  }
  .ri-focus-3-fill:before {
    content: "\ed4b";
  }
  .ri-focus-3-line:before {
    content: "\ed4c";
  }
  .ri-focus-fill:before {
    content: "\ed4d";
  }
  .ri-focus-line:before {
    content: "\ed4e";
  }
  .ri-foggy-fill:before {
    content: "\ed4f";
  }
  .ri-foggy-line:before {
    content: "\ed50";
  }
  .ri-folder-2-fill:before {
    content: "\ed51";
  }
  .ri-folder-2-line:before {
    content: "\ed52";
  }
  .ri-folder-3-fill:before {
    content: "\ed53";
  }
  .ri-folder-3-line:before {
    content: "\ed54";
  }
  .ri-folder-4-fill:before {
    content: "\ed55";
  }
  .ri-folder-4-line:before {
    content: "\ed56";
  }
  .ri-folder-5-fill:before {
    content: "\ed57";
  }
  .ri-folder-5-line:before {
    content: "\ed58";
  }
  .ri-folder-add-fill:before {
    content: "\ed59";
  }
  .ri-folder-add-line:before {
    content: "\ed5a";
  }
  .ri-folder-chart-2-fill:before {
    content: "\ed5b";
  }
  .ri-folder-chart-2-line:before {
    content: "\ed5c";
  }
  .ri-folder-chart-fill:before {
    content: "\ed5d";
  }
  .ri-folder-chart-line:before {
    content: "\ed5e";
  }
  .ri-folder-download-fill:before {
    content: "\ed5f";
  }
  .ri-folder-download-line:before {
    content: "\ed60";
  }
  .ri-folder-fill:before {
    content: "\ed61";
  }
  .ri-folder-forbid-fill:before {
    content: "\ed62";
  }
  .ri-folder-forbid-line:before {
    content: "\ed63";
  }
  .ri-folder-history-fill:before {
    content: "\ed64";
  }
  .ri-folder-history-line:before {
    content: "\ed65";
  }
  .ri-folder-info-fill:before {
    content: "\ed66";
  }
  .ri-folder-info-line:before {
    content: "\ed67";
  }
  .ri-folder-keyhole-fill:before {
    content: "\ed68";
  }
  .ri-folder-keyhole-line:before {
    content: "\ed69";
  }
  .ri-folder-line:before {
    content: "\ed6a";
  }
  .ri-folder-lock-fill:before {
    content: "\ed6b";
  }
  .ri-folder-lock-line:before {
    content: "\ed6c";
  }
  .ri-folder-music-fill:before {
    content: "\ed6d";
  }
  .ri-folder-music-line:before {
    content: "\ed6e";
  }
  .ri-folder-open-fill:before {
    content: "\ed6f";
  }
  .ri-folder-open-line:before {
    content: "\ed70";
  }
  .ri-folder-received-fill:before {
    content: "\ed71";
  }
  .ri-folder-received-line:before {
    content: "\ed72";
  }
  .ri-folder-reduce-fill:before {
    content: "\ed73";
  }
  .ri-folder-reduce-line:before {
    content: "\ed74";
  }
  .ri-folder-settings-fill:before {
    content: "\ed75";
  }
  .ri-folder-settings-line:before {
    content: "\ed76";
  }
  .ri-folder-shared-fill:before {
    content: "\ed77";
  }
  .ri-folder-shared-line:before {
    content: "\ed78";
  }
  .ri-folder-shield-2-fill:before {
    content: "\ed79";
  }
  .ri-folder-shield-2-line:before {
    content: "\ed7a";
  }
  .ri-folder-shield-fill:before {
    content: "\ed7b";
  }
  .ri-folder-shield-line:before {
    content: "\ed7c";
  }
  .ri-folder-transfer-fill:before {
    content: "\ed7d";
  }
  .ri-folder-transfer-line:before {
    content: "\ed7e";
  }
  .ri-folder-unknow-fill:before {
    content: "\ed7f";
  }
  .ri-folder-unknow-line:before {
    content: "\ed80";
  }
  .ri-folder-upload-fill:before {
    content: "\ed81";
  }
  .ri-folder-upload-line:before {
    content: "\ed82";
  }
  .ri-folder-user-fill:before {
    content: "\ed83";
  }
  .ri-folder-user-line:before {
    content: "\ed84";
  }
  .ri-folder-warning-fill:before {
    content: "\ed85";
  }
  .ri-folder-warning-line:before {
    content: "\ed86";
  }
  .ri-folder-zip-fill:before {
    content: "\ed87";
  }
  .ri-folder-zip-line:before {
    content: "\ed88";
  }
  .ri-folders-fill:before {
    content: "\ed89";
  }
  .ri-folders-line:before {
    content: "\ed8a";
  }
  .ri-font-color:before {
    content: "\ed8b";
  }
  .ri-font-size-2:before {
    content: "\ed8c";
  }
  .ri-font-size:before {
    content: "\ed8d";
  }
  .ri-football-fill:before {
    content: "\ed8e";
  }
  .ri-football-line:before {
    content: "\ed8f";
  }
  .ri-footprint-fill:before {
    content: "\ed90";
  }
  .ri-footprint-line:before {
    content: "\ed91";
  }
  .ri-forbid-2-fill:before {
    content: "\ed92";
  }
  .ri-forbid-2-line:before {
    content: "\ed93";
  }
  .ri-forbid-fill:before {
    content: "\ed94";
  }
  .ri-forbid-line:before {
    content: "\ed95";
  }
  .ri-format-clear:before {
    content: "\ed96";
  }
  .ri-fridge-fill:before {
    content: "\ed97";
  }
  .ri-fridge-line:before {
    content: "\ed98";
  }
  .ri-fullscreen-exit-fill:before {
    content: "\ed99";
  }
  .ri-fullscreen-exit-line:before {
    content: "\ed9a";
  }
  .ri-fullscreen-fill:before {
    content: "\ed9b";
  }
  .ri-fullscreen-line:before {
    content: "\ed9c";
  }
  .ri-function-fill:before {
    content: "\ed9d";
  }
  .ri-function-line:before {
    content: "\ed9e";
  }
  .ri-functions:before {
    content: "\ed9f";
  }
  .ri-funds-box-fill:before {
    content: "\eda0";
  }
  .ri-funds-box-line:before {
    content: "\eda1";
  }
  .ri-funds-fill:before {
    content: "\eda2";
  }
  .ri-funds-line:before {
    content: "\eda3";
  }
  .ri-gallery-fill:before {
    content: "\eda4";
  }
  .ri-gallery-line:before {
    content: "\eda5";
  }
  .ri-gallery-upload-fill:before {
    content: "\eda6";
  }
  .ri-gallery-upload-line:before {
    content: "\eda7";
  }
  .ri-game-fill:before {
    content: "\eda8";
  }
  .ri-game-line:before {
    content: "\eda9";
  }
  .ri-gamepad-fill:before {
    content: "\edaa";
  }
  .ri-gamepad-line:before {
    content: "\edab";
  }
  .ri-gas-station-fill:before {
    content: "\edac";
  }
  .ri-gas-station-line:before {
    content: "\edad";
  }
  .ri-gatsby-fill:before {
    content: "\edae";
  }
  .ri-gatsby-line:before {
    content: "\edaf";
  }
  .ri-genderless-fill:before {
    content: "\edb0";
  }
  .ri-genderless-line:before {
    content: "\edb1";
  }
  .ri-ghost-2-fill:before {
    content: "\edb2";
  }
  .ri-ghost-2-line:before {
    content: "\edb3";
  }
  .ri-ghost-fill:before {
    content: "\edb4";
  }
  .ri-ghost-line:before {
    content: "\edb5";
  }
  .ri-ghost-smile-fill:before {
    content: "\edb6";
  }
  .ri-ghost-smile-line:before {
    content: "\edb7";
  }
  .ri-gift-2-fill:before {
    content: "\edb8";
  }
  .ri-gift-2-line:before {
    content: "\edb9";
  }
  .ri-gift-fill:before {
    content: "\edba";
  }
  .ri-gift-line:before {
    content: "\edbb";
  }
  .ri-git-branch-fill:before {
    content: "\edbc";
  }
  .ri-git-branch-line:before {
    content: "\edbd";
  }
  .ri-git-commit-fill:before {
    content: "\edbe";
  }
  .ri-git-commit-line:before {
    content: "\edbf";
  }
  .ri-git-merge-fill:before {
    content: "\edc0";
  }
  .ri-git-merge-line:before {
    content: "\edc1";
  }
  .ri-git-pull-request-fill:before {
    content: "\edc2";
  }
  .ri-git-pull-request-line:before {
    content: "\edc3";
  }
  .ri-git-repository-commits-fill:before {
    content: "\edc4";
  }
  .ri-git-repository-commits-line:before {
    content: "\edc5";
  }
  .ri-git-repository-fill:before {
    content: "\edc6";
  }
  .ri-git-repository-line:before {
    content: "\edc7";
  }
  .ri-git-repository-private-fill:before {
    content: "\edc8";
  }
  .ri-git-repository-private-line:before {
    content: "\edc9";
  }
  .ri-github-fill:before {
    content: "\edca";
  }
  .ri-github-line:before {
    content: "\edcb";
  }
  .ri-gitlab-fill:before {
    content: "\edcc";
  }
  .ri-gitlab-line:before {
    content: "\edcd";
  }
  .ri-global-fill:before {
    content: "\edce";
  }
  .ri-global-line:before {
    content: "\edcf";
  }
  .ri-globe-fill:before {
    content: "\edd0";
  }
  .ri-globe-line:before {
    content: "\edd1";
  }
  .ri-goblet-fill:before {
    content: "\edd2";
  }
  .ri-goblet-line:before {
    content: "\edd3";
  }
  .ri-google-fill:before {
    content: "\edd4";
  }
  .ri-google-line:before {
    content: "\edd5";
  }
  .ri-google-play-fill:before {
    content: "\edd6";
  }
  .ri-google-play-line:before {
    content: "\edd7";
  }
  .ri-government-fill:before {
    content: "\edd8";
  }
  .ri-government-line:before {
    content: "\edd9";
  }
  .ri-gps-fill:before {
    content: "\edda";
  }
  .ri-gps-line:before {
    content: "\eddb";
  }
  .ri-gradienter-fill:before {
    content: "\eddc";
  }
  .ri-gradienter-line:before {
    content: "\eddd";
  }
  .ri-grid-fill:before {
    content: "\edde";
  }
  .ri-grid-line:before {
    content: "\eddf";
  }
  .ri-group-2-fill:before {
    content: "\ede0";
  }
  .ri-group-2-line:before {
    content: "\ede1";
  }
  .ri-group-fill:before {
    content: "\ede2";
  }
  .ri-group-line:before {
    content: "\ede3";
  }
  .ri-guide-fill:before {
    content: "\ede4";
  }
  .ri-guide-line:before {
    content: "\ede5";
  }
  .ri-h-1:before {
    content: "\ede6";
  }
  .ri-h-2:before {
    content: "\ede7";
  }
  .ri-h-3:before {
    content: "\ede8";
  }
  .ri-h-4:before {
    content: "\ede9";
  }
  .ri-h-5:before {
    content: "\edea";
  }
  .ri-h-6:before {
    content: "\edeb";
  }
  .ri-hail-fill:before {
    content: "\edec";
  }
  .ri-hail-line:before {
    content: "\eded";
  }
  .ri-hammer-fill:before {
    content: "\edee";
  }
  .ri-hammer-line:before {
    content: "\edef";
  }
  .ri-hand-coin-fill:before {
    content: "\edf0";
  }
  .ri-hand-coin-line:before {
    content: "\edf1";
  }
  .ri-hand-heart-fill:before {
    content: "\edf2";
  }
  .ri-hand-heart-line:before {
    content: "\edf3";
  }
  .ri-hand-sanitizer-fill:before {
    content: "\edf4";
  }
  .ri-hand-sanitizer-line:before {
    content: "\edf5";
  }
  .ri-handbag-fill:before {
    content: "\edf6";
  }
  .ri-handbag-line:before {
    content: "\edf7";
  }
  .ri-hard-drive-2-fill:before {
    content: "\edf8";
  }
  .ri-hard-drive-2-line:before {
    content: "\edf9";
  }
  .ri-hard-drive-fill:before {
    content: "\edfa";
  }
  .ri-hard-drive-line:before {
    content: "\edfb";
  }
  .ri-hashtag:before {
    content: "\edfc";
  }
  .ri-haze-2-fill:before {
    content: "\edfd";
  }
  .ri-haze-2-line:before {
    content: "\edfe";
  }
  .ri-haze-fill:before {
    content: "\edff";
  }
  .ri-haze-line:before {
    content: "\ee00";
  }
  .ri-hd-fill:before {
    content: "\ee01";
  }
  .ri-hd-line:before {
    content: "\ee02";
  }
  .ri-heading:before {
    content: "\ee03";
  }
  .ri-headphone-fill:before {
    content: "\ee04";
  }
  .ri-headphone-line:before {
    content: "\ee05";
  }
  .ri-health-book-fill:before {
    content: "\ee06";
  }
  .ri-health-book-line:before {
    content: "\ee07";
  }
  .ri-heart-2-fill:before {
    content: "\ee08";
  }
  .ri-heart-2-line:before {
    content: "\ee09";
  }
  .ri-heart-3-fill:before {
    content: "\ee0a";
  }
  .ri-heart-3-line:before {
    content: "\ee0b";
  }
  .ri-heart-add-fill:before {
    content: "\ee0c";
  }
  .ri-heart-add-line:before {
    content: "\ee0d";
  }
  .ri-heart-fill:before {
    content: "\ee0e";
  }
  .ri-heart-line:before {
    content: "\ee0f";
  }
  .ri-heart-pulse-fill:before {
    content: "\ee10";
  }
  .ri-heart-pulse-line:before {
    content: "\ee11";
  }
  .ri-hearts-fill:before {
    content: "\ee12";
  }
  .ri-hearts-line:before {
    content: "\ee13";
  }
  .ri-heavy-showers-fill:before {
    content: "\ee14";
  }
  .ri-heavy-showers-line:before {
    content: "\ee15";
  }
  .ri-history-fill:before {
    content: "\ee16";
  }
  .ri-history-line:before {
    content: "\ee17";
  }
  .ri-home-2-fill:before {
    content: "\ee18";
  }
  .ri-home-2-line:before {
    content: "\ee19";
  }
  .ri-home-3-fill:before {
    content: "\ee1a";
  }
  .ri-home-3-line:before {
    content: "\ee1b";
  }
  .ri-home-4-fill:before {
    content: "\ee1c";
  }
  .ri-home-4-line:before {
    content: "\ee1d";
  }
  .ri-home-5-fill:before {
    content: "\ee1e";
  }
  .ri-home-5-line:before {
    content: "\ee1f";
  }
  .ri-home-6-fill:before {
    content: "\ee20";
  }
  .ri-home-6-line:before {
    content: "\ee21";
  }
  .ri-home-7-fill:before {
    content: "\ee22";
  }
  .ri-home-7-line:before {
    content: "\ee23";
  }
  .ri-home-8-fill:before {
    content: "\ee24";
  }
  .ri-home-8-line:before {
    content: "\ee25";
  }
  .ri-home-fill:before {
    content: "\ee26";
  }
  .ri-home-gear-fill:before {
    content: "\ee27";
  }
  .ri-home-gear-line:before {
    content: "\ee28";
  }
  .ri-home-heart-fill:before {
    content: "\ee29";
  }
  .ri-home-heart-line:before {
    content: "\ee2a";
  }
  .ri-home-line:before {
    content: "\ee2b";
  }
  .ri-home-smile-2-fill:before {
    content: "\ee2c";
  }
  .ri-home-smile-2-line:before {
    content: "\ee2d";
  }
  .ri-home-smile-fill:before {
    content: "\ee2e";
  }
  .ri-home-smile-line:before {
    content: "\ee2f";
  }
  .ri-home-wifi-fill:before {
    content: "\ee30";
  }
  .ri-home-wifi-line:before {
    content: "\ee31";
  }
  .ri-honor-of-kings-fill:before {
    content: "\ee32";
  }
  .ri-honor-of-kings-line:before {
    content: "\ee33";
  }
  .ri-honour-fill:before {
    content: "\ee34";
  }
  .ri-honour-line:before {
    content: "\ee35";
  }
  .ri-hospital-fill:before {
    content: "\ee36";
  }
  .ri-hospital-line:before {
    content: "\ee37";
  }
  .ri-hotel-bed-fill:before {
    content: "\ee38";
  }
  .ri-hotel-bed-line:before {
    content: "\ee39";
  }
  .ri-hotel-fill:before {
    content: "\ee3a";
  }
  .ri-hotel-line:before {
    content: "\ee3b";
  }
  .ri-hotspot-fill:before {
    content: "\ee3c";
  }
  .ri-hotspot-line:before {
    content: "\ee3d";
  }
  .ri-hq-fill:before {
    content: "\ee3e";
  }
  .ri-hq-line:before {
    content: "\ee3f";
  }
  .ri-html5-fill:before {
    content: "\ee40";
  }
  .ri-html5-line:before {
    content: "\ee41";
  }
  .ri-ie-fill:before {
    content: "\ee42";
  }
  .ri-ie-line:before {
    content: "\ee43";
  }
  .ri-image-2-fill:before {
    content: "\ee44";
  }
  .ri-image-2-line:before {
    content: "\ee45";
  }
  .ri-image-add-fill:before {
    content: "\ee46";
  }
  .ri-image-add-line:before {
    content: "\ee47";
  }
  .ri-image-edit-fill:before {
    content: "\ee48";
  }
  .ri-image-edit-line:before {
    content: "\ee49";
  }
  .ri-image-fill:before {
    content: "\ee4a";
  }
  .ri-image-line:before {
    content: "\ee4b";
  }
  .ri-inbox-archive-fill:before {
    content: "\ee4c";
  }
  .ri-inbox-archive-line:before {
    content: "\ee4d";
  }
  .ri-inbox-fill:before {
    content: "\ee4e";
  }
  .ri-inbox-line:before {
    content: "\ee4f";
  }
  .ri-inbox-unarchive-fill:before {
    content: "\ee50";
  }
  .ri-inbox-unarchive-line:before {
    content: "\ee51";
  }
  .ri-increase-decrease-fill:before {
    content: "\ee52";
  }
  .ri-increase-decrease-line:before {
    content: "\ee53";
  }
  .ri-indent-decrease:before {
    content: "\ee54";
  }
  .ri-indent-increase:before {
    content: "\ee55";
  }
  .ri-indeterminate-circle-fill:before {
    content: "\ee56";
  }
  .ri-indeterminate-circle-line:before {
    content: "\ee57";
  }
  .ri-information-fill:before {
    content: "\ee58";
  }
  .ri-information-line:before {
    content: "\ee59";
  }
  .ri-infrared-thermometer-fill:before {
    content: "\ee5a";
  }
  .ri-infrared-thermometer-line:before {
    content: "\ee5b";
  }
  .ri-ink-bottle-fill:before {
    content: "\ee5c";
  }
  .ri-ink-bottle-line:before {
    content: "\ee5d";
  }
  .ri-input-cursor-move:before {
    content: "\ee5e";
  }
  .ri-input-method-fill:before {
    content: "\ee5f";
  }
  .ri-input-method-line:before {
    content: "\ee60";
  }
  .ri-insert-column-left:before {
    content: "\ee61";
  }
  .ri-insert-column-right:before {
    content: "\ee62";
  }
  .ri-insert-row-bottom:before {
    content: "\ee63";
  }
  .ri-insert-row-top:before {
    content: "\ee64";
  }
  .ri-instagram-fill:before {
    content: "\ee65";
  }
  .ri-instagram-line:before {
    content: "\ee66";
  }
  .ri-install-fill:before {
    content: "\ee67";
  }
  .ri-install-line:before {
    content: "\ee68";
  }
  .ri-invision-fill:before {
    content: "\ee69";
  }
  .ri-invision-line:before {
    content: "\ee6a";
  }
  .ri-italic:before {
    content: "\ee6b";
  }
  .ri-kakao-talk-fill:before {
    content: "\ee6c";
  }
  .ri-kakao-talk-line:before {
    content: "\ee6d";
  }
  .ri-key-2-fill:before {
    content: "\ee6e";
  }
  .ri-key-2-line:before {
    content: "\ee6f";
  }
  .ri-key-fill:before {
    content: "\ee70";
  }
  .ri-key-line:before {
    content: "\ee71";
  }
  .ri-keyboard-box-fill:before {
    content: "\ee72";
  }
  .ri-keyboard-box-line:before {
    content: "\ee73";
  }
  .ri-keyboard-fill:before {
    content: "\ee74";
  }
  .ri-keyboard-line:before {
    content: "\ee75";
  }
  .ri-keynote-fill:before {
    content: "\ee76";
  }
  .ri-keynote-line:before {
    content: "\ee77";
  }
  .ri-knife-blood-fill:before {
    content: "\ee78";
  }
  .ri-knife-blood-line:before {
    content: "\ee79";
  }
  .ri-knife-fill:before {
    content: "\ee7a";
  }
  .ri-knife-line:before {
    content: "\ee7b";
  }
  .ri-landscape-fill:before {
    content: "\ee7c";
  }
  .ri-landscape-line:before {
    content: "\ee7d";
  }
  .ri-layout-2-fill:before {
    content: "\ee7e";
  }
  .ri-layout-2-line:before {
    content: "\ee7f";
  }
  .ri-layout-3-fill:before {
    content: "\ee80";
  }
  .ri-layout-3-line:before {
    content: "\ee81";
  }
  .ri-layout-4-fill:before {
    content: "\ee82";
  }
  .ri-layout-4-line:before {
    content: "\ee83";
  }
  .ri-layout-5-fill:before {
    content: "\ee84";
  }
  .ri-layout-5-line:before {
    content: "\ee85";
  }
  .ri-layout-6-fill:before {
    content: "\ee86";
  }
  .ri-layout-6-line:before {
    content: "\ee87";
  }
  .ri-layout-bottom-2-fill:before {
    content: "\ee88";
  }
  .ri-layout-bottom-2-line:before {
    content: "\ee89";
  }
  .ri-layout-bottom-fill:before {
    content: "\ee8a";
  }
  .ri-layout-bottom-line:before {
    content: "\ee8b";
  }
  .ri-layout-column-fill:before {
    content: "\ee8c";
  }
  .ri-layout-column-line:before {
    content: "\ee8d";
  }
  .ri-layout-fill:before {
    content: "\ee8e";
  }
  .ri-layout-grid-fill:before {
    content: "\ee8f";
  }
  .ri-layout-grid-line:before {
    content: "\ee90";
  }
  .ri-layout-left-2-fill:before {
    content: "\ee91";
  }
  .ri-layout-left-2-line:before {
    content: "\ee92";
  }
  .ri-layout-left-fill:before {
    content: "\ee93";
  }
  .ri-layout-left-line:before {
    content: "\ee94";
  }
  .ri-layout-line:before {
    content: "\ee95";
  }
  .ri-layout-masonry-fill:before {
    content: "\ee96";
  }
  .ri-layout-masonry-line:before {
    content: "\ee97";
  }
  .ri-layout-right-2-fill:before {
    content: "\ee98";
  }
  .ri-layout-right-2-line:before {
    content: "\ee99";
  }
  .ri-layout-right-fill:before {
    content: "\ee9a";
  }
  .ri-layout-right-line:before {
    content: "\ee9b";
  }
  .ri-layout-row-fill:before {
    content: "\ee9c";
  }
  .ri-layout-row-line:before {
    content: "\ee9d";
  }
  .ri-layout-top-2-fill:before {
    content: "\ee9e";
  }
  .ri-layout-top-2-line:before {
    content: "\ee9f";
  }
  .ri-layout-top-fill:before {
    content: "\eea0";
  }
  .ri-layout-top-line:before {
    content: "\eea1";
  }
  .ri-leaf-fill:before {
    content: "\eea2";
  }
  .ri-leaf-line:before {
    content: "\eea3";
  }
  .ri-lifebuoy-fill:before {
    content: "\eea4";
  }
  .ri-lifebuoy-line:before {
    content: "\eea5";
  }
  .ri-lightbulb-fill:before {
    content: "\eea6";
  }
  .ri-lightbulb-flash-fill:before {
    content: "\eea7";
  }
  .ri-lightbulb-flash-line:before {
    content: "\eea8";
  }
  .ri-lightbulb-line:before {
    content: "\eea9";
  }
  .ri-line-chart-fill:before {
    content: "\eeaa";
  }
  .ri-line-chart-line:before {
    content: "\eeab";
  }
  .ri-line-fill:before {
    content: "\eeac";
  }
  .ri-line-height:before {
    content: "\eead";
  }
  .ri-line-line:before {
    content: "\eeae";
  }
  .ri-link-m:before {
    content: "\eeaf";
  }
  .ri-link-unlink-m:before {
    content: "\eeb0";
  }
  .ri-link-unlink:before {
    content: "\eeb1";
  }
  .ri-link:before {
    content: "\eeb2";
  }
  .ri-linkedin-box-fill:before {
    content: "\eeb3";
  }
  .ri-linkedin-box-line:before {
    content: "\eeb4";
  }
  .ri-linkedin-fill:before {
    content: "\eeb5";
  }
  .ri-linkedin-line:before {
    content: "\eeb6";
  }
  .ri-links-fill:before {
    content: "\eeb7";
  }
  .ri-links-line:before {
    content: "\eeb8";
  }
  .ri-list-check-2:before {
    content: "\eeb9";
  }
  .ri-list-check:before {
    content: "\eeba";
  }
  .ri-list-ordered:before {
    content: "\eebb";
  }
  .ri-list-settings-fill:before {
    content: "\eebc";
  }
  .ri-list-settings-line:before {
    content: "\eebd";
  }
  .ri-list-unordered:before {
    content: "\eebe";
  }
  .ri-live-fill:before {
    content: "\eebf";
  }
  .ri-live-line:before {
    content: "\eec0";
  }
  .ri-loader-2-fill:before {
    content: "\eec1";
  }
  .ri-loader-2-line:before {
    content: "\eec2";
  }
  .ri-loader-3-fill:before {
    content: "\eec3";
  }
  .ri-loader-3-line:before {
    content: "\eec4";
  }
  .ri-loader-4-fill:before {
    content: "\eec5";
  }
  .ri-loader-4-line:before {
    content: "\eec6";
  }
  .ri-loader-5-fill:before {
    content: "\eec7";
  }
  .ri-loader-5-line:before {
    content: "\eec8";
  }
  .ri-loader-fill:before {
    content: "\eec9";
  }
  .ri-loader-line:before {
    content: "\eeca";
  }
  .ri-lock-2-fill:before {
    content: "\eecb";
  }
  .ri-lock-2-line:before {
    content: "\eecc";
  }
  .ri-lock-fill:before {
    content: "\eecd";
  }
  .ri-lock-line:before {
    content: "\eece";
  }
  .ri-lock-password-fill:before {
    content: "\eecf";
  }
  .ri-lock-password-line:before {
    content: "\eed0";
  }
  .ri-lock-unlock-fill:before {
    content: "\eed1";
  }
  .ri-lock-unlock-line:before {
    content: "\eed2";
  }
  .ri-login-box-fill:before {
    content: "\eed3";
  }
  .ri-login-box-line:before {
    content: "\eed4";
  }
  .ri-login-circle-fill:before {
    content: "\eed5";
  }
  .ri-login-circle-line:before {
    content: "\eed6";
  }
  .ri-logout-box-fill:before {
    content: "\eed7";
  }
  .ri-logout-box-line:before {
    content: "\eed8";
  }
  .ri-logout-box-r-fill:before {
    content: "\eed9";
  }
  .ri-logout-box-r-line:before {
    content: "\eeda";
  }
  .ri-logout-circle-fill:before {
    content: "\eedb";
  }
  .ri-logout-circle-line:before {
    content: "\eedc";
  }
  .ri-logout-circle-r-fill:before {
    content: "\eedd";
  }
  .ri-logout-circle-r-line:before {
    content: "\eede";
  }
  .ri-luggage-cart-fill:before {
    content: "\eedf";
  }
  .ri-luggage-cart-line:before {
    content: "\eee0";
  }
  .ri-luggage-deposit-fill:before {
    content: "\eee1";
  }
  .ri-luggage-deposit-line:before {
    content: "\eee2";
  }
  .ri-lungs-fill:before {
    content: "\eee3";
  }
  .ri-lungs-line:before {
    content: "\eee4";
  }
  .ri-mac-fill:before {
    content: "\eee5";
  }
  .ri-mac-line:before {
    content: "\eee6";
  }
  .ri-macbook-fill:before {
    content: "\eee7";
  }
  .ri-macbook-line:before {
    content: "\eee8";
  }
  .ri-magic-fill:before {
    content: "\eee9";
  }
  .ri-magic-line:before {
    content: "\eeea";
  }
  .ri-mail-add-fill:before {
    content: "\eeeb";
  }
  .ri-mail-add-line:before {
    content: "\eeec";
  }
  .ri-mail-check-fill:before {
    content: "\eeed";
  }
  .ri-mail-check-line:before {
    content: "\eeee";
  }
  .ri-mail-close-fill:before {
    content: "\eeef";
  }
  .ri-mail-close-line:before {
    content: "\eef0";
  }
  .ri-mail-download-fill:before {
    content: "\eef1";
  }
  .ri-mail-download-line:before {
    content: "\eef2";
  }
  .ri-mail-fill:before {
    content: "\eef3";
  }
  .ri-mail-forbid-fill:before {
    content: "\eef4";
  }
  .ri-mail-forbid-line:before {
    content: "\eef5";
  }
  .ri-mail-line:before {
    content: "\eef6";
  }
  .ri-mail-lock-fill:before {
    content: "\eef7";
  }
  .ri-mail-lock-line:before {
    content: "\eef8";
  }
  .ri-mail-open-fill:before {
    content: "\eef9";
  }
  .ri-mail-open-line:before {
    content: "\eefa";
  }
  .ri-mail-send-fill:before {
    content: "\eefb";
  }
  .ri-mail-send-line:before {
    content: "\eefc";
  }
  .ri-mail-settings-fill:before {
    content: "\eefd";
  }
  .ri-mail-settings-line:before {
    content: "\eefe";
  }
  .ri-mail-star-fill:before {
    content: "\eeff";
  }
  .ri-mail-star-line:before {
    content: "\ef00";
  }
  .ri-mail-unread-fill:before {
    content: "\ef01";
  }
  .ri-mail-unread-line:before {
    content: "\ef02";
  }
  .ri-mail-volume-fill:before {
    content: "\ef03";
  }
  .ri-mail-volume-line:before {
    content: "\ef04";
  }
  .ri-map-2-fill:before {
    content: "\ef05";
  }
  .ri-map-2-line:before {
    content: "\ef06";
  }
  .ri-map-fill:before {
    content: "\ef07";
  }
  .ri-map-line:before {
    content: "\ef08";
  }
  .ri-map-pin-2-fill:before {
    content: "\ef09";
  }
  .ri-map-pin-2-line:before {
    content: "\ef0a";
  }
  .ri-map-pin-3-fill:before {
    content: "\ef0b";
  }
  .ri-map-pin-3-line:before {
    content: "\ef0c";
  }
  .ri-map-pin-4-fill:before {
    content: "\ef0d";
  }
  .ri-map-pin-4-line:before {
    content: "\ef0e";
  }
  .ri-map-pin-5-fill:before {
    content: "\ef0f";
  }
  .ri-map-pin-5-line:before {
    content: "\ef10";
  }
  .ri-map-pin-add-fill:before {
    content: "\ef11";
  }
  .ri-map-pin-add-line:before {
    content: "\ef12";
  }
  .ri-map-pin-fill:before {
    content: "\ef13";
  }
  .ri-map-pin-line:before {
    content: "\ef14";
  }
  .ri-map-pin-range-fill:before {
    content: "\ef15";
  }
  .ri-map-pin-range-line:before {
    content: "\ef16";
  }
  .ri-map-pin-time-fill:before {
    content: "\ef17";
  }
  .ri-map-pin-time-line:before {
    content: "\ef18";
  }
  .ri-map-pin-user-fill:before {
    content: "\ef19";
  }
  .ri-map-pin-user-line:before {
    content: "\ef1a";
  }
  .ri-mark-pen-fill:before {
    content: "\ef1b";
  }
  .ri-mark-pen-line:before {
    content: "\ef1c";
  }
  .ri-markdown-fill:before {
    content: "\ef1d";
  }
  .ri-markdown-line:before {
    content: "\ef1e";
  }
  .ri-markup-fill:before {
    content: "\ef1f";
  }
  .ri-markup-line:before {
    content: "\ef20";
  }
  .ri-mastercard-fill:before {
    content: "\ef21";
  }
  .ri-mastercard-line:before {
    content: "\ef22";
  }
  .ri-mastodon-fill:before {
    content: "\ef23";
  }
  .ri-mastodon-line:before {
    content: "\ef24";
  }
  .ri-medal-2-fill:before {
    content: "\ef25";
  }
  .ri-medal-2-line:before {
    content: "\ef26";
  }
  .ri-medal-fill:before {
    content: "\ef27";
  }
  .ri-medal-line:before {
    content: "\ef28";
  }
  .ri-medicine-bottle-fill:before {
    content: "\ef29";
  }
  .ri-medicine-bottle-line:before {
    content: "\ef2a";
  }
  .ri-medium-fill:before {
    content: "\ef2b";
  }
  .ri-medium-line:before {
    content: "\ef2c";
  }
  .ri-men-fill:before {
    content: "\ef2d";
  }
  .ri-men-line:before {
    content: "\ef2e";
  }
  .ri-mental-health-fill:before {
    content: "\ef2f";
  }
  .ri-mental-health-line:before {
    content: "\ef30";
  }
  .ri-menu-2-fill:before {
    content: "\ef31";
  }
  .ri-menu-2-line:before {
    content: "\ef32";
  }
  .ri-menu-3-fill:before {
    content: "\ef33";
  }
  .ri-menu-3-line:before {
    content: "\ef34";
  }
  .ri-menu-4-fill:before {
    content: "\ef35";
  }
  .ri-menu-4-line:before {
    content: "\ef36";
  }
  .ri-menu-5-fill:before {
    content: "\ef37";
  }
  .ri-menu-5-line:before {
    content: "\ef38";
  }
  .ri-menu-add-fill:before {
    content: "\ef39";
  }
  .ri-menu-add-line:before {
    content: "\ef3a";
  }
  .ri-menu-fill:before {
    content: "\ef3b";
  }
  .ri-menu-fold-fill:before {
    content: "\ef3c";
  }
  .ri-menu-fold-line:before {
    content: "\ef3d";
  }
  .ri-menu-line:before {
    content: "\ef3e";
  }
  .ri-menu-unfold-fill:before {
    content: "\ef3f";
  }
  .ri-menu-unfold-line:before {
    content: "\ef40";
  }
  .ri-merge-cells-horizontal:before {
    content: "\ef41";
  }
  .ri-merge-cells-vertical:before {
    content: "\ef42";
  }
  .ri-message-2-fill:before {
    content: "\ef43";
  }
  .ri-message-2-line:before {
    content: "\ef44";
  }
  .ri-message-3-fill:before {
    content: "\ef45";
  }
  .ri-message-3-line:before {
    content: "\ef46";
  }
  .ri-message-fill:before {
    content: "\ef47";
  }
  .ri-message-line:before {
    content: "\ef48";
  }
  .ri-messenger-fill:before {
    content: "\ef49";
  }
  .ri-messenger-line:before {
    content: "\ef4a";
  }
  .ri-meteor-fill:before {
    content: "\ef4b";
  }
  .ri-meteor-line:before {
    content: "\ef4c";
  }
  .ri-mic-2-fill:before {
    content: "\ef4d";
  }
  .ri-mic-2-line:before {
    content: "\ef4e";
  }
  .ri-mic-fill:before {
    content: "\ef4f";
  }
  .ri-mic-line:before {
    content: "\ef50";
  }
  .ri-mic-off-fill:before {
    content: "\ef51";
  }
  .ri-mic-off-line:before {
    content: "\ef52";
  }
  .ri-mickey-fill:before {
    content: "\ef53";
  }
  .ri-mickey-line:before {
    content: "\ef54";
  }
  .ri-microscope-fill:before {
    content: "\ef55";
  }
  .ri-microscope-line:before {
    content: "\ef56";
  }
  .ri-microsoft-fill:before {
    content: "\ef57";
  }
  .ri-microsoft-line:before {
    content: "\ef58";
  }
  .ri-mind-map:before {
    content: "\ef59";
  }
  .ri-mini-program-fill:before {
    content: "\ef5a";
  }
  .ri-mini-program-line:before {
    content: "\ef5b";
  }
  .ri-mist-fill:before {
    content: "\ef5c";
  }
  .ri-mist-line:before {
    content: "\ef5d";
  }
  .ri-money-cny-box-fill:before {
    content: "\ef5e";
  }
  .ri-money-cny-box-line:before {
    content: "\ef5f";
  }
  .ri-money-cny-circle-fill:before {
    content: "\ef60";
  }
  .ri-money-cny-circle-line:before {
    content: "\ef61";
  }
  .ri-money-dollar-box-fill:before {
    content: "\ef62";
  }
  .ri-money-dollar-box-line:before {
    content: "\ef63";
  }
  .ri-money-dollar-circle-fill:before {
    content: "\ef64";
  }
  .ri-money-dollar-circle-line:before {
    content: "\ef65";
  }
  .ri-money-euro-box-fill:before {
    content: "\ef66";
  }
  .ri-money-euro-box-line:before {
    content: "\ef67";
  }
  .ri-money-euro-circle-fill:before {
    content: "\ef68";
  }
  .ri-money-euro-circle-line:before {
    content: "\ef69";
  }
  .ri-money-pound-box-fill:before {
    content: "\ef6a";
  }
  .ri-money-pound-box-line:before {
    content: "\ef6b";
  }
  .ri-money-pound-circle-fill:before {
    content: "\ef6c";
  }
  .ri-money-pound-circle-line:before {
    content: "\ef6d";
  }
  .ri-moon-clear-fill:before {
    content: "\ef6e";
  }
  .ri-moon-clear-line:before {
    content: "\ef6f";
  }
  .ri-moon-cloudy-fill:before {
    content: "\ef70";
  }
  .ri-moon-cloudy-line:before {
    content: "\ef71";
  }
  .ri-moon-fill:before {
    content: "\ef72";
  }
  .ri-moon-foggy-fill:before {
    content: "\ef73";
  }
  .ri-moon-foggy-line:before {
    content: "\ef74";
  }
  .ri-moon-line:before {
    content: "\ef75";
  }
  .ri-more-2-fill:before {
    content: "\ef76";
  }
  .ri-more-2-line:before {
    content: "\ef77";
  }
  .ri-more-fill:before {
    content: "\ef78";
  }
  .ri-more-line:before {
    content: "\ef79";
  }
  .ri-motorbike-fill:before {
    content: "\ef7a";
  }
  .ri-motorbike-line:before {
    content: "\ef7b";
  }
  .ri-mouse-fill:before {
    content: "\ef7c";
  }
  .ri-mouse-line:before {
    content: "\ef7d";
  }
  .ri-movie-2-fill:before {
    content: "\ef7e";
  }
  .ri-movie-2-line:before {
    content: "\ef7f";
  }
  .ri-movie-fill:before {
    content: "\ef80";
  }
  .ri-movie-line:before {
    content: "\ef81";
  }
  .ri-music-2-fill:before {
    content: "\ef82";
  }
  .ri-music-2-line:before {
    content: "\ef83";
  }
  .ri-music-fill:before {
    content: "\ef84";
  }
  .ri-music-line:before {
    content: "\ef85";
  }
  .ri-mv-fill:before {
    content: "\ef86";
  }
  .ri-mv-line:before {
    content: "\ef87";
  }
  .ri-navigation-fill:before {
    content: "\ef88";
  }
  .ri-navigation-line:before {
    content: "\ef89";
  }
  .ri-netease-cloud-music-fill:before {
    content: "\ef8a";
  }
  .ri-netease-cloud-music-line:before {
    content: "\ef8b";
  }
  .ri-netflix-fill:before {
    content: "\ef8c";
  }
  .ri-netflix-line:before {
    content: "\ef8d";
  }
  .ri-newspaper-fill:before {
    content: "\ef8e";
  }
  .ri-newspaper-line:before {
    content: "\ef8f";
  }
  .ri-node-tree:before {
    content: "\ef90";
  }
  .ri-notification-2-fill:before {
    content: "\ef91";
  }
  .ri-notification-2-line:before {
    content: "\ef92";
  }
  .ri-notification-3-fill:before {
    content: "\ef93";
  }
  .ri-notification-3-line:before {
    content: "\ef94";
  }
  .ri-notification-4-fill:before {
    content: "\ef95";
  }
  .ri-notification-4-line:before {
    content: "\ef96";
  }
  .ri-notification-badge-fill:before {
    content: "\ef97";
  }
  .ri-notification-badge-line:before {
    content: "\ef98";
  }
  .ri-notification-fill:before {
    content: "\ef99";
  }
  .ri-notification-line:before {
    content: "\ef9a";
  }
  .ri-notification-off-fill:before {
    content: "\ef9b";
  }
  .ri-notification-off-line:before {
    content: "\ef9c";
  }
  .ri-npmjs-fill:before {
    content: "\ef9d";
  }
  .ri-npmjs-line:before {
    content: "\ef9e";
  }
  .ri-number-0:before {
    content: "\ef9f";
  }
  .ri-number-1:before {
    content: "\efa0";
  }
  .ri-number-2:before {
    content: "\efa1";
  }
  .ri-number-3:before {
    content: "\efa2";
  }
  .ri-number-4:before {
    content: "\efa3";
  }
  .ri-number-5:before {
    content: "\efa4";
  }
  .ri-number-6:before {
    content: "\efa5";
  }
  .ri-number-7:before {
    content: "\efa6";
  }
  .ri-number-8:before {
    content: "\efa7";
  }
  .ri-number-9:before {
    content: "\efa8";
  }
  .ri-numbers-fill:before {
    content: "\efa9";
  }
  .ri-numbers-line:before {
    content: "\efaa";
  }
  .ri-nurse-fill:before {
    content: "\efab";
  }
  .ri-nurse-line:before {
    content: "\efac";
  }
  .ri-oil-fill:before {
    content: "\efad";
  }
  .ri-oil-line:before {
    content: "\efae";
  }
  .ri-omega:before {
    content: "\efaf";
  }
  .ri-open-arm-fill:before {
    content: "\efb0";
  }
  .ri-open-arm-line:before {
    content: "\efb1";
  }
  .ri-open-source-fill:before {
    content: "\efb2";
  }
  .ri-open-source-line:before {
    content: "\efb3";
  }
  .ri-opera-fill:before {
    content: "\efb4";
  }
  .ri-opera-line:before {
    content: "\efb5";
  }
  .ri-order-play-fill:before {
    content: "\efb6";
  }
  .ri-order-play-line:before {
    content: "\efb7";
  }
  .ri-organization-chart:before {
    content: "\efb8";
  }
  .ri-outlet-2-fill:before {
    content: "\efb9";
  }
  .ri-outlet-2-line:before {
    content: "\efba";
  }
  .ri-outlet-fill:before {
    content: "\efbb";
  }
  .ri-outlet-line:before {
    content: "\efbc";
  }
  .ri-page-separator:before {
    content: "\efbd";
  }
  .ri-pages-fill:before {
    content: "\efbe";
  }
  .ri-pages-line:before {
    content: "\efbf";
  }
  .ri-paint-brush-fill:before {
    content: "\efc0";
  }
  .ri-paint-brush-line:before {
    content: "\efc1";
  }
  .ri-paint-fill:before {
    content: "\efc2";
  }
  .ri-paint-line:before {
    content: "\efc3";
  }
  .ri-palette-fill:before {
    content: "\efc4";
  }
  .ri-palette-line:before {
    content: "\efc5";
  }
  .ri-pantone-fill:before {
    content: "\efc6";
  }
  .ri-pantone-line:before {
    content: "\efc7";
  }
  .ri-paragraph:before {
    content: "\efc8";
  }
  .ri-parent-fill:before {
    content: "\efc9";
  }
  .ri-parent-line:before {
    content: "\efca";
  }
  .ri-parentheses-fill:before {
    content: "\efcb";
  }
  .ri-parentheses-line:before {
    content: "\efcc";
  }
  .ri-parking-box-fill:before {
    content: "\efcd";
  }
  .ri-parking-box-line:before {
    content: "\efce";
  }
  .ri-parking-fill:before {
    content: "\efcf";
  }
  .ri-parking-line:before {
    content: "\efd0";
  }
  .ri-passport-fill:before {
    content: "\efd1";
  }
  .ri-passport-line:before {
    content: "\efd2";
  }
  .ri-patreon-fill:before {
    content: "\efd3";
  }
  .ri-patreon-line:before {
    content: "\efd4";
  }
  .ri-pause-circle-fill:before {
    content: "\efd5";
  }
  .ri-pause-circle-line:before {
    content: "\efd6";
  }
  .ri-pause-fill:before {
    content: "\efd7";
  }
  .ri-pause-line:before {
    content: "\efd8";
  }
  .ri-pause-mini-fill:before {
    content: "\efd9";
  }
  .ri-pause-mini-line:before {
    content: "\efda";
  }
  .ri-paypal-fill:before {
    content: "\efdb";
  }
  .ri-paypal-line:before {
    content: "\efdc";
  }
  .ri-pen-nib-fill:before {
    content: "\efdd";
  }
  .ri-pen-nib-line:before {
    content: "\efde";
  }
  .ri-pencil-fill:before {
    content: "\efdf";
  }
  .ri-pencil-line:before {
    content: "\efe0";
  }
  .ri-pencil-ruler-2-fill:before {
    content: "\efe1";
  }
  .ri-pencil-ruler-2-line:before {
    content: "\efe2";
  }
  .ri-pencil-ruler-fill:before {
    content: "\efe3";
  }
  .ri-pencil-ruler-line:before {
    content: "\efe4";
  }
  .ri-percent-fill:before {
    content: "\efe5";
  }
  .ri-percent-line:before {
    content: "\efe6";
  }
  .ri-phone-camera-fill:before {
    content: "\efe7";
  }
  .ri-phone-camera-line:before {
    content: "\efe8";
  }
  .ri-phone-fill:before {
    content: "\efe9";
  }
  .ri-phone-find-fill:before {
    content: "\efea";
  }
  .ri-phone-find-line:before {
    content: "\efeb";
  }
  .ri-phone-line:before {
    content: "\efec";
  }
  .ri-phone-lock-fill:before {
    content: "\efed";
  }
  .ri-phone-lock-line:before {
    content: "\efee";
  }
  .ri-picture-in-picture-2-fill:before {
    content: "\efef";
  }
  .ri-picture-in-picture-2-line:before {
    content: "\eff0";
  }
  .ri-picture-in-picture-exit-fill:before {
    content: "\eff1";
  }
  .ri-picture-in-picture-exit-line:before {
    content: "\eff2";
  }
  .ri-picture-in-picture-fill:before {
    content: "\eff3";
  }
  .ri-picture-in-picture-line:before {
    content: "\eff4";
  }
  .ri-pie-chart-2-fill:before {
    content: "\eff5";
  }
  .ri-pie-chart-2-line:before {
    content: "\eff6";
  }
  .ri-pie-chart-box-fill:before {
    content: "\eff7";
  }
  .ri-pie-chart-box-line:before {
    content: "\eff8";
  }
  .ri-pie-chart-fill:before {
    content: "\eff9";
  }
  .ri-pie-chart-line:before {
    content: "\effa";
  }
  .ri-pin-distance-fill:before {
    content: "\effb";
  }
  .ri-pin-distance-line:before {
    content: "\effc";
  }
  .ri-ping-pong-fill:before {
    content: "\effd";
  }
  .ri-ping-pong-line:before {
    content: "\effe";
  }
  .ri-pinterest-fill:before {
    content: "\efff";
  }
  .ri-pinterest-line:before {
    content: "\f000";
  }
  .ri-pinyin-input:before {
    content: "\f001";
  }
  .ri-pixelfed-fill:before {
    content: "\f002";
  }
  .ri-pixelfed-line:before {
    content: "\f003";
  }
  .ri-plane-fill:before {
    content: "\f004";
  }
  .ri-plane-line:before {
    content: "\f005";
  }
  .ri-plant-fill:before {
    content: "\f006";
  }
  .ri-plant-line:before {
    content: "\f007";
  }
  .ri-play-circle-fill:before {
    content: "\f008";
  }
  .ri-play-circle-line:before {
    content: "\f009";
  }
  .ri-play-fill:before {
    content: "\f00a";
  }
  .ri-play-line:before {
    content: "\f00b";
  }
  .ri-play-list-2-fill:before {
    content: "\f00c";
  }
  .ri-play-list-2-line:before {
    content: "\f00d";
  }
  .ri-play-list-add-fill:before {
    content: "\f00e";
  }
  .ri-play-list-add-line:before {
    content: "\f00f";
  }
  .ri-play-list-fill:before {
    content: "\f010";
  }
  .ri-play-list-line:before {
    content: "\f011";
  }
  .ri-play-mini-fill:before {
    content: "\f012";
  }
  .ri-play-mini-line:before {
    content: "\f013";
  }
  .ri-playstation-fill:before {
    content: "\f014";
  }
  .ri-playstation-line:before {
    content: "\f015";
  }
  .ri-plug-2-fill:before {
    content: "\f016";
  }
  .ri-plug-2-line:before {
    content: "\f017";
  }
  .ri-plug-fill:before {
    content: "\f018";
  }
  .ri-plug-line:before {
    content: "\f019";
  }
  .ri-polaroid-2-fill:before {
    content: "\f01a";
  }
  .ri-polaroid-2-line:before {
    content: "\f01b";
  }
  .ri-polaroid-fill:before {
    content: "\f01c";
  }
  .ri-polaroid-line:before {
    content: "\f01d";
  }
  .ri-police-car-fill:before {
    content: "\f01e";
  }
  .ri-police-car-line:before {
    content: "\f01f";
  }
  .ri-price-tag-2-fill:before {
    content: "\f020";
  }
  .ri-price-tag-2-line:before {
    content: "\f021";
  }
  .ri-price-tag-3-fill:before {
    content: "\f022";
  }
  .ri-price-tag-3-line:before {
    content: "\f023";
  }
  .ri-price-tag-fill:before {
    content: "\f024";
  }
  .ri-price-tag-line:before {
    content: "\f025";
  }
  .ri-printer-cloud-fill:before {
    content: "\f026";
  }
  .ri-printer-cloud-line:before {
    content: "\f027";
  }
  .ri-printer-fill:before {
    content: "\f028";
  }
  .ri-printer-line:before {
    content: "\f029";
  }
  .ri-product-hunt-fill:before {
    content: "\f02a";
  }
  .ri-product-hunt-line:before {
    content: "\f02b";
  }
  .ri-profile-fill:before {
    content: "\f02c";
  }
  .ri-profile-line:before {
    content: "\f02d";
  }
  .ri-projector-2-fill:before {
    content: "\f02e";
  }
  .ri-projector-2-line:before {
    content: "\f02f";
  }
  .ri-projector-fill:before {
    content: "\f030";
  }
  .ri-projector-line:before {
    content: "\f031";
  }
  .ri-psychotherapy-fill:before {
    content: "\f032";
  }
  .ri-psychotherapy-line:before {
    content: "\f033";
  }
  .ri-pulse-fill:before {
    content: "\f034";
  }
  .ri-pulse-line:before {
    content: "\f035";
  }
  .ri-pushpin-2-fill:before {
    content: "\f036";
  }
  .ri-pushpin-2-line:before {
    content: "\f037";
  }
  .ri-pushpin-fill:before {
    content: "\f038";
  }
  .ri-pushpin-line:before {
    content: "\f039";
  }
  .ri-qq-fill:before {
    content: "\f03a";
  }
  .ri-qq-line:before {
    content: "\f03b";
  }
  .ri-qr-code-fill:before {
    content: "\f03c";
  }
  .ri-qr-code-line:before {
    content: "\f03d";
  }
  .ri-qr-scan-2-fill:before {
    content: "\f03e";
  }
  .ri-qr-scan-2-line:before {
    content: "\f03f";
  }
  .ri-qr-scan-fill:before {
    content: "\f040";
  }
  .ri-qr-scan-line:before {
    content: "\f041";
  }
  .ri-question-answer-fill:before {
    content: "\f042";
  }
  .ri-question-answer-line:before {
    content: "\f043";
  }
  .ri-question-fill:before {
    content: "\f044";
  }
  .ri-question-line:before {
    content: "\f045";
  }
  .ri-question-mark:before {
    content: "\f046";
  }
  .ri-questionnaire-fill:before {
    content: "\f047";
  }
  .ri-questionnaire-line:before {
    content: "\f048";
  }
  .ri-quill-pen-fill:before {
    content: "\f049";
  }
  .ri-quill-pen-line:before {
    content: "\f04a";
  }
  .ri-radar-fill:before {
    content: "\f04b";
  }
  .ri-radar-line:before {
    content: "\f04c";
  }
  .ri-radio-2-fill:before {
    content: "\f04d";
  }
  .ri-radio-2-line:before {
    content: "\f04e";
  }
  .ri-radio-button-fill:before {
    content: "\f04f";
  }
  .ri-radio-button-line:before {
    content: "\f050";
  }
  .ri-radio-fill:before {
    content: "\f051";
  }
  .ri-radio-line:before {
    content: "\f052";
  }
  .ri-rainbow-fill:before {
    content: "\f053";
  }
  .ri-rainbow-line:before {
    content: "\f054";
  }
  .ri-rainy-fill:before {
    content: "\f055";
  }
  .ri-rainy-line:before {
    content: "\f056";
  }
  .ri-reactjs-fill:before {
    content: "\f057";
  }
  .ri-reactjs-line:before {
    content: "\f058";
  }
  .ri-record-circle-fill:before {
    content: "\f059";
  }
  .ri-record-circle-line:before {
    content: "\f05a";
  }
  .ri-record-mail-fill:before {
    content: "\f05b";
  }
  .ri-record-mail-line:before {
    content: "\f05c";
  }
  .ri-recycle-fill:before {
    content: "\f05d";
  }
  .ri-recycle-line:before {
    content: "\f05e";
  }
  .ri-red-packet-fill:before {
    content: "\f05f";
  }
  .ri-red-packet-line:before {
    content: "\f060";
  }
  .ri-reddit-fill:before {
    content: "\f061";
  }
  .ri-reddit-line:before {
    content: "\f062";
  }
  .ri-refresh-fill:before {
    content: "\f063";
  }
  .ri-refresh-line:before {
    content: "\f064";
  }
  .ri-refund-2-fill:before {
    content: "\f065";
  }
  .ri-refund-2-line:before {
    content: "\f066";
  }
  .ri-refund-fill:before {
    content: "\f067";
  }
  .ri-refund-line:before {
    content: "\f068";
  }
  .ri-registered-fill:before {
    content: "\f069";
  }
  .ri-registered-line:before {
    content: "\f06a";
  }
  .ri-remixicon-fill:before {
    content: "\f06b";
  }
  .ri-remixicon-line:before {
    content: "\f06c";
  }
  .ri-remote-control-2-fill:before {
    content: "\f06d";
  }
  .ri-remote-control-2-line:before {
    content: "\f06e";
  }
  .ri-remote-control-fill:before {
    content: "\f06f";
  }
  .ri-remote-control-line:before {
    content: "\f070";
  }
  .ri-repeat-2-fill:before {
    content: "\f071";
  }
  .ri-repeat-2-line:before {
    content: "\f072";
  }
  .ri-repeat-fill:before {
    content: "\f073";
  }
  .ri-repeat-line:before {
    content: "\f074";
  }
  .ri-repeat-one-fill:before {
    content: "\f075";
  }
  .ri-repeat-one-line:before {
    content: "\f076";
  }
  .ri-reply-all-fill:before {
    content: "\f077";
  }
  .ri-reply-all-line:before {
    content: "\f078";
  }
  .ri-reply-fill:before {
    content: "\f079";
  }
  .ri-reply-line:before {
    content: "\f07a";
  }
  .ri-reserved-fill:before {
    content: "\f07b";
  }
  .ri-reserved-line:before {
    content: "\f07c";
  }
  .ri-rest-time-fill:before {
    content: "\f07d";
  }
  .ri-rest-time-line:before {
    content: "\f07e";
  }
  .ri-restart-fill:before {
    content: "\f07f";
  }
  .ri-restart-line:before {
    content: "\f080";
  }
  .ri-restaurant-2-fill:before {
    content: "\f081";
  }
  .ri-restaurant-2-line:before {
    content: "\f082";
  }
  .ri-restaurant-fill:before {
    content: "\f083";
  }
  .ri-restaurant-line:before {
    content: "\f084";
  }
  .ri-rewind-fill:before {
    content: "\f085";
  }
  .ri-rewind-line:before {
    content: "\f086";
  }
  .ri-rewind-mini-fill:before {
    content: "\f087";
  }
  .ri-rewind-mini-line:before {
    content: "\f088";
  }
  .ri-rhythm-fill:before {
    content: "\f089";
  }
  .ri-rhythm-line:before {
    content: "\f08a";
  }
  .ri-riding-fill:before {
    content: "\f08b";
  }
  .ri-riding-line:before {
    content: "\f08c";
  }
  .ri-road-map-fill:before {
    content: "\f08d";
  }
  .ri-road-map-line:before {
    content: "\f08e";
  }
  .ri-roadster-fill:before {
    content: "\f08f";
  }
  .ri-roadster-line:before {
    content: "\f090";
  }
  .ri-robot-fill:before {
    content: "\f091";
  }
  .ri-robot-line:before {
    content: "\f092";
  }
  .ri-rocket-2-fill:before {
    content: "\f093";
  }
  .ri-rocket-2-line:before {
    content: "\f094";
  }
  .ri-rocket-fill:before {
    content: "\f095";
  }
  .ri-rocket-line:before {
    content: "\f096";
  }
  .ri-rotate-lock-fill:before {
    content: "\f097";
  }
  .ri-rotate-lock-line:before {
    content: "\f098";
  }
  .ri-rounded-corner:before {
    content: "\f099";
  }
  .ri-route-fill:before {
    content: "\f09a";
  }
  .ri-route-line:before {
    content: "\f09b";
  }
  .ri-router-fill:before {
    content: "\f09c";
  }
  .ri-router-line:before {
    content: "\f09d";
  }
  .ri-rss-fill:before {
    content: "\f09e";
  }
  .ri-rss-line:before {
    content: "\f09f";
  }
  .ri-ruler-2-fill:before {
    content: "\f0a0";
  }
  .ri-ruler-2-line:before {
    content: "\f0a1";
  }
  .ri-ruler-fill:before {
    content: "\f0a2";
  }
  .ri-ruler-line:before {
    content: "\f0a3";
  }
  .ri-run-fill:before {
    content: "\f0a4";
  }
  .ri-run-line:before {
    content: "\f0a5";
  }
  .ri-safari-fill:before {
    content: "\f0a6";
  }
  .ri-safari-line:before {
    content: "\f0a7";
  }
  .ri-safe-2-fill:before {
    content: "\f0a8";
  }
  .ri-safe-2-line:before {
    content: "\f0a9";
  }
  .ri-safe-fill:before {
    content: "\f0aa";
  }
  .ri-safe-line:before {
    content: "\f0ab";
  }
  .ri-sailboat-fill:before {
    content: "\f0ac";
  }
  .ri-sailboat-line:before {
    content: "\f0ad";
  }
  .ri-save-2-fill:before {
    content: "\f0ae";
  }
  .ri-save-2-line:before {
    content: "\f0af";
  }
  .ri-save-3-fill:before {
    content: "\f0b0";
  }
  .ri-save-3-line:before {
    content: "\f0b1";
  }
  .ri-save-fill:before {
    content: "\f0b2";
  }
  .ri-save-line:before {
    content: "\f0b3";
  }
  .ri-scales-2-fill:before {
    content: "\f0b4";
  }
  .ri-scales-2-line:before {
    content: "\f0b5";
  }
  .ri-scales-3-fill:before {
    content: "\f0b6";
  }
  .ri-scales-3-line:before {
    content: "\f0b7";
  }
  .ri-scales-fill:before {
    content: "\f0b8";
  }
  .ri-scales-line:before {
    content: "\f0b9";
  }
  .ri-scan-2-fill:before {
    content: "\f0ba";
  }
  .ri-scan-2-line:before {
    content: "\f0bb";
  }
  .ri-scan-fill:before {
    content: "\f0bc";
  }
  .ri-scan-line:before {
    content: "\f0bd";
  }
  .ri-scissors-2-fill:before {
    content: "\f0be";
  }
  .ri-scissors-2-line:before {
    content: "\f0bf";
  }
  .ri-scissors-cut-fill:before {
    content: "\f0c0";
  }
  .ri-scissors-cut-line:before {
    content: "\f0c1";
  }
  .ri-scissors-fill:before {
    content: "\f0c2";
  }
  .ri-scissors-line:before {
    content: "\f0c3";
  }
  .ri-screenshot-2-fill:before {
    content: "\f0c4";
  }
  .ri-screenshot-2-line:before {
    content: "\f0c5";
  }
  .ri-screenshot-fill:before {
    content: "\f0c6";
  }
  .ri-screenshot-line:before {
    content: "\f0c7";
  }
  .ri-sd-card-fill:before {
    content: "\f0c8";
  }
  .ri-sd-card-line:before {
    content: "\f0c9";
  }
  .ri-sd-card-mini-fill:before {
    content: "\f0ca";
  }
  .ri-sd-card-mini-line:before {
    content: "\f0cb";
  }
  .ri-search-2-fill:before {
    content: "\f0cc";
  }
  .ri-search-2-line:before {
    content: "\f0cd";
  }
  .ri-search-eye-fill:before {
    content: "\f0ce";
  }
  .ri-search-eye-line:before {
    content: "\f0cf";
  }
  .ri-search-fill:before {
    content: "\f0d0";
  }
  .ri-search-line:before {
    content: "\f0d1";
  }
  .ri-secure-payment-fill:before {
    content: "\f0d2";
  }
  .ri-secure-payment-line:before {
    content: "\f0d3";
  }
  .ri-seedling-fill:before {
    content: "\f0d4";
  }
  .ri-seedling-line:before {
    content: "\f0d5";
  }
  .ri-send-backward:before {
    content: "\f0d6";
  }
  .ri-send-plane-2-fill:before {
    content: "\f0d7";
  }
  .ri-send-plane-2-line:before {
    content: "\f0d8";
  }
  .ri-send-plane-fill:before {
    content: "\f0d9";
  }
  .ri-send-plane-line:before {
    content: "\f0da";
  }
  .ri-send-to-back:before {
    content: "\f0db";
  }
  .ri-sensor-fill:before {
    content: "\f0dc";
  }
  .ri-sensor-line:before {
    content: "\f0dd";
  }
  .ri-separator:before {
    content: "\f0de";
  }
  .ri-server-fill:before {
    content: "\f0df";
  }
  .ri-server-line:before {
    content: "\f0e0";
  }
  .ri-service-fill:before {
    content: "\f0e1";
  }
  .ri-service-line:before {
    content: "\f0e2";
  }
  .ri-settings-2-fill:before {
    content: "\f0e3";
  }
  .ri-settings-2-line:before {
    content: "\f0e4";
  }
  .ri-settings-3-fill:before {
    content: "\f0e5";
  }
  .ri-settings-3-line:before {
    content: "\f0e6";
  }
  .ri-settings-4-fill:before {
    content: "\f0e7";
  }
  .ri-settings-4-line:before {
    content: "\f0e8";
  }
  .ri-settings-5-fill:before {
    content: "\f0e9";
  }
  .ri-settings-5-line:before {
    content: "\f0ea";
  }
  .ri-settings-6-fill:before {
    content: "\f0eb";
  }
  .ri-settings-6-line:before {
    content: "\f0ec";
  }
  .ri-settings-fill:before {
    content: "\f0ed";
  }
  .ri-settings-line:before {
    content: "\f0ee";
  }
  .ri-shape-2-fill:before {
    content: "\f0ef";
  }
  .ri-shape-2-line:before {
    content: "\f0f0";
  }
  .ri-shape-fill:before {
    content: "\f0f1";
  }
  .ri-shape-line:before {
    content: "\f0f2";
  }
  .ri-share-box-fill:before {
    content: "\f0f3";
  }
  .ri-share-box-line:before {
    content: "\f0f4";
  }
  .ri-share-circle-fill:before {
    content: "\f0f5";
  }
  .ri-share-circle-line:before {
    content: "\f0f6";
  }
  .ri-share-fill:before {
    content: "\f0f7";
  }
  .ri-share-forward-2-fill:before {
    content: "\f0f8";
  }
  .ri-share-forward-2-line:before {
    content: "\f0f9";
  }
  .ri-share-forward-box-fill:before {
    content: "\f0fa";
  }
  .ri-share-forward-box-line:before {
    content: "\f0fb";
  }
  .ri-share-forward-fill:before {
    content: "\f0fc";
  }
  .ri-share-forward-line:before {
    content: "\f0fd";
  }
  .ri-share-line:before {
    content: "\f0fe";
  }
  .ri-shield-check-fill:before {
    content: "\f0ff";
  }
  .ri-shield-check-line:before {
    content: "\f100";
  }
  .ri-shield-cross-fill:before {
    content: "\f101";
  }
  .ri-shield-cross-line:before {
    content: "\f102";
  }
  .ri-shield-fill:before {
    content: "\f103";
  }
  .ri-shield-flash-fill:before {
    content: "\f104";
  }
  .ri-shield-flash-line:before {
    content: "\f105";
  }
  .ri-shield-keyhole-fill:before {
    content: "\f106";
  }
  .ri-shield-keyhole-line:before {
    content: "\f107";
  }
  .ri-shield-line:before {
    content: "\f108";
  }
  .ri-shield-star-fill:before {
    content: "\f109";
  }
  .ri-shield-star-line:before {
    content: "\f10a";
  }
  .ri-shield-user-fill:before {
    content: "\f10b";
  }
  .ri-shield-user-line:before {
    content: "\f10c";
  }
  .ri-ship-2-fill:before {
    content: "\f10d";
  }
  .ri-ship-2-line:before {
    content: "\f10e";
  }
  .ri-ship-fill:before {
    content: "\f10f";
  }
  .ri-ship-line:before {
    content: "\f110";
  }
  .ri-shirt-fill:before {
    content: "\f111";
  }
  .ri-shirt-line:before {
    content: "\f112";
  }
  .ri-shopping-bag-2-fill:before {
    content: "\f113";
  }
  .ri-shopping-bag-2-line:before {
    content: "\f114";
  }
  .ri-shopping-bag-3-fill:before {
    content: "\f115";
  }
  .ri-shopping-bag-3-line:before {
    content: "\f116";
  }
  .ri-shopping-bag-fill:before {
    content: "\f117";
  }
  .ri-shopping-bag-line:before {
    content: "\f118";
  }
  .ri-shopping-basket-2-fill:before {
    content: "\f119";
  }
  .ri-shopping-basket-2-line:before {
    content: "\f11a";
  }
  .ri-shopping-basket-fill:before {
    content: "\f11b";
  }
  .ri-shopping-basket-line:before {
    content: "\f11c";
  }
  .ri-shopping-cart-2-fill:before {
    content: "\f11d";
  }
  .ri-shopping-cart-2-line:before {
    content: "\f11e";
  }
  .ri-shopping-cart-fill:before {
    content: "\f11f";
  }
  .ri-shopping-cart-line:before {
    content: "\f120";
  }
  .ri-showers-fill:before {
    content: "\f121";
  }
  .ri-showers-line:before {
    content: "\f122";
  }
  .ri-shuffle-fill:before {
    content: "\f123";
  }
  .ri-shuffle-line:before {
    content: "\f124";
  }
  .ri-shut-down-fill:before {
    content: "\f125";
  }
  .ri-shut-down-line:before {
    content: "\f126";
  }
  .ri-side-bar-fill:before {
    content: "\f127";
  }
  .ri-side-bar-line:before {
    content: "\f128";
  }
  .ri-signal-tower-fill:before {
    content: "\f129";
  }
  .ri-signal-tower-line:before {
    content: "\f12a";
  }
  .ri-signal-wifi-1-fill:before {
    content: "\f12b";
  }
  .ri-signal-wifi-1-line:before {
    content: "\f12c";
  }
  .ri-signal-wifi-2-fill:before {
    content: "\f12d";
  }
  .ri-signal-wifi-2-line:before {
    content: "\f12e";
  }
  .ri-signal-wifi-3-fill:before {
    content: "\f12f";
  }
  .ri-signal-wifi-3-line:before {
    content: "\f130";
  }
  .ri-signal-wifi-error-fill:before {
    content: "\f131";
  }
  .ri-signal-wifi-error-line:before {
    content: "\f132";
  }
  .ri-signal-wifi-fill:before {
    content: "\f133";
  }
  .ri-signal-wifi-line:before {
    content: "\f134";
  }
  .ri-signal-wifi-off-fill:before {
    content: "\f135";
  }
  .ri-signal-wifi-off-line:before {
    content: "\f136";
  }
  .ri-sim-card-2-fill:before {
    content: "\f137";
  }
  .ri-sim-card-2-line:before {
    content: "\f138";
  }
  .ri-sim-card-fill:before {
    content: "\f139";
  }
  .ri-sim-card-line:before {
    content: "\f13a";
  }
  .ri-single-quotes-l:before {
    content: "\f13b";
  }
  .ri-single-quotes-r:before {
    content: "\f13c";
  }
  .ri-sip-fill:before {
    content: "\f13d";
  }
  .ri-sip-line:before {
    content: "\f13e";
  }
  .ri-skip-back-fill:before {
    content: "\f13f";
  }
  .ri-skip-back-line:before {
    content: "\f140";
  }
  .ri-skip-back-mini-fill:before {
    content: "\f141";
  }
  .ri-skip-back-mini-line:before {
    content: "\f142";
  }
  .ri-skip-forward-fill:before {
    content: "\f143";
  }
  .ri-skip-forward-line:before {
    content: "\f144";
  }
  .ri-skip-forward-mini-fill:before {
    content: "\f145";
  }
  .ri-skip-forward-mini-line:before {
    content: "\f146";
  }
  .ri-skull-2-fill:before {
    content: "\f147";
  }
  .ri-skull-2-line:before {
    content: "\f148";
  }
  .ri-skull-fill:before {
    content: "\f149";
  }
  .ri-skull-line:before {
    content: "\f14a";
  }
  .ri-skype-fill:before {
    content: "\f14b";
  }
  .ri-skype-line:before {
    content: "\f14c";
  }
  .ri-slack-fill:before {
    content: "\f14d";
  }
  .ri-slack-line:before {
    content: "\f14e";
  }
  .ri-slice-fill:before {
    content: "\f14f";
  }
  .ri-slice-line:before {
    content: "\f150";
  }
  .ri-slideshow-2-fill:before {
    content: "\f151";
  }
  .ri-slideshow-2-line:before {
    content: "\f152";
  }
  .ri-slideshow-3-fill:before {
    content: "\f153";
  }
  .ri-slideshow-3-line:before {
    content: "\f154";
  }
  .ri-slideshow-4-fill:before {
    content: "\f155";
  }
  .ri-slideshow-4-line:before {
    content: "\f156";
  }
  .ri-slideshow-fill:before {
    content: "\f157";
  }
  .ri-slideshow-line:before {
    content: "\f158";
  }
  .ri-smartphone-fill:before {
    content: "\f159";
  }
  .ri-smartphone-line:before {
    content: "\f15a";
  }
  .ri-snapchat-fill:before {
    content: "\f15b";
  }
  .ri-snapchat-line:before {
    content: "\f15c";
  }
  .ri-snowy-fill:before {
    content: "\f15d";
  }
  .ri-snowy-line:before {
    content: "\f15e";
  }
  .ri-sort-asc:before {
    content: "\f15f";
  }
  .ri-sort-desc:before {
    content: "\f160";
  }
  .ri-sound-module-fill:before {
    content: "\f161";
  }
  .ri-sound-module-line:before {
    content: "\f162";
  }
  .ri-soundcloud-fill:before {
    content: "\f163";
  }
  .ri-soundcloud-line:before {
    content: "\f164";
  }
  .ri-space-ship-fill:before {
    content: "\f165";
  }
  .ri-space-ship-line:before {
    content: "\f166";
  }
  .ri-space:before {
    content: "\f167";
  }
  .ri-spam-2-fill:before {
    content: "\f168";
  }
  .ri-spam-2-line:before {
    content: "\f169";
  }
  .ri-spam-3-fill:before {
    content: "\f16a";
  }
  .ri-spam-3-line:before {
    content: "\f16b";
  }
  .ri-spam-fill:before {
    content: "\f16c";
  }
  .ri-spam-line:before {
    content: "\f16d";
  }
  .ri-speaker-2-fill:before {
    content: "\f16e";
  }
  .ri-speaker-2-line:before {
    content: "\f16f";
  }
  .ri-speaker-3-fill:before {
    content: "\f170";
  }
  .ri-speaker-3-line:before {
    content: "\f171";
  }
  .ri-speaker-fill:before {
    content: "\f172";
  }
  .ri-speaker-line:before {
    content: "\f173";
  }
  .ri-spectrum-fill:before {
    content: "\f174";
  }
  .ri-spectrum-line:before {
    content: "\f175";
  }
  .ri-speed-fill:before {
    content: "\f176";
  }
  .ri-speed-line:before {
    content: "\f177";
  }
  .ri-speed-mini-fill:before {
    content: "\f178";
  }
  .ri-speed-mini-line:before {
    content: "\f179";
  }
  .ri-split-cells-horizontal:before {
    content: "\f17a";
  }
  .ri-split-cells-vertical:before {
    content: "\f17b";
  }
  .ri-spotify-fill:before {
    content: "\f17c";
  }
  .ri-spotify-line:before {
    content: "\f17d";
  }
  .ri-spy-fill:before {
    content: "\f17e";
  }
  .ri-spy-line:before {
    content: "\f17f";
  }
  .ri-stack-fill:before {
    content: "\f180";
  }
  .ri-stack-line:before {
    content: "\f181";
  }
  .ri-stack-overflow-fill:before {
    content: "\f182";
  }
  .ri-stack-overflow-line:before {
    content: "\f183";
  }
  .ri-stackshare-fill:before {
    content: "\f184";
  }
  .ri-stackshare-line:before {
    content: "\f185";
  }
  .ri-star-fill:before {
    content: "\f186";
  }
  .ri-star-half-fill:before {
    content: "\f187";
  }
  .ri-star-half-line:before {
    content: "\f188";
  }
  .ri-star-half-s-fill:before {
    content: "\f189";
  }
  .ri-star-half-s-line:before {
    content: "\f18a";
  }
  .ri-star-line:before {
    content: "\f18b";
  }
  .ri-star-s-fill:before {
    content: "\f18c";
  }
  .ri-star-s-line:before {
    content: "\f18d";
  }
  .ri-star-smile-fill:before {
    content: "\f18e";
  }
  .ri-star-smile-line:before {
    content: "\f18f";
  }
  .ri-steam-fill:before {
    content: "\f190";
  }
  .ri-steam-line:before {
    content: "\f191";
  }
  .ri-steering-2-fill:before {
    content: "\f192";
  }
  .ri-steering-2-line:before {
    content: "\f193";
  }
  .ri-steering-fill:before {
    content: "\f194";
  }
  .ri-steering-line:before {
    content: "\f195";
  }
  .ri-stethoscope-fill:before {
    content: "\f196";
  }
  .ri-stethoscope-line:before {
    content: "\f197";
  }
  .ri-sticky-note-2-fill:before {
    content: "\f198";
  }
  .ri-sticky-note-2-line:before {
    content: "\f199";
  }
  .ri-sticky-note-fill:before {
    content: "\f19a";
  }
  .ri-sticky-note-line:before {
    content: "\f19b";
  }
  .ri-stock-fill:before {
    content: "\f19c";
  }
  .ri-stock-line:before {
    content: "\f19d";
  }
  .ri-stop-circle-fill:before {
    content: "\f19e";
  }
  .ri-stop-circle-line:before {
    content: "\f19f";
  }
  .ri-stop-fill:before {
    content: "\f1a0";
  }
  .ri-stop-line:before {
    content: "\f1a1";
  }
  .ri-stop-mini-fill:before {
    content: "\f1a2";
  }
  .ri-stop-mini-line:before {
    content: "\f1a3";
  }
  .ri-store-2-fill:before {
    content: "\f1a4";
  }
  .ri-store-2-line:before {
    content: "\f1a5";
  }
  .ri-store-3-fill:before {
    content: "\f1a6";
  }
  .ri-store-3-line:before {
    content: "\f1a7";
  }
  .ri-store-fill:before {
    content: "\f1a8";
  }
  .ri-store-line:before {
    content: "\f1a9";
  }
  .ri-strikethrough-2:before {
    content: "\f1aa";
  }
  .ri-strikethrough:before {
    content: "\f1ab";
  }
  .ri-subscript-2:before {
    content: "\f1ac";
  }
  .ri-subscript:before {
    content: "\f1ad";
  }
  .ri-subtract-fill:before {
    content: "\f1ae";
  }
  .ri-subtract-line:before {
    content: "\f1af";
  }
  .ri-subway-fill:before {
    content: "\f1b0";
  }
  .ri-subway-line:before {
    content: "\f1b1";
  }
  .ri-subway-wifi-fill:before {
    content: "\f1b2";
  }
  .ri-subway-wifi-line:before {
    content: "\f1b3";
  }
  .ri-suitcase-2-fill:before {
    content: "\f1b4";
  }
  .ri-suitcase-2-line:before {
    content: "\f1b5";
  }
  .ri-suitcase-3-fill:before {
    content: "\f1b6";
  }
  .ri-suitcase-3-line:before {
    content: "\f1b7";
  }
  .ri-suitcase-fill:before {
    content: "\f1b8";
  }
  .ri-suitcase-line:before {
    content: "\f1b9";
  }
  .ri-sun-cloudy-fill:before {
    content: "\f1ba";
  }
  .ri-sun-cloudy-line:before {
    content: "\f1bb";
  }
  .ri-sun-fill:before {
    content: "\f1bc";
  }
  .ri-sun-foggy-fill:before {
    content: "\f1bd";
  }
  .ri-sun-foggy-line:before {
    content: "\f1be";
  }
  .ri-sun-line:before {
    content: "\f1bf";
  }
  .ri-superscript-2:before {
    content: "\f1c0";
  }
  .ri-superscript:before {
    content: "\f1c1";
  }
  .ri-surgical-mask-fill:before {
    content: "\f1c2";
  }
  .ri-surgical-mask-line:before {
    content: "\f1c3";
  }
  .ri-surround-sound-fill:before {
    content: "\f1c4";
  }
  .ri-surround-sound-line:before {
    content: "\f1c5";
  }
  .ri-survey-fill:before {
    content: "\f1c6";
  }
  .ri-survey-line:before {
    content: "\f1c7";
  }
  .ri-swap-box-fill:before {
    content: "\f1c8";
  }
  .ri-swap-box-line:before {
    content: "\f1c9";
  }
  .ri-swap-fill:before {
    content: "\f1ca";
  }
  .ri-swap-line:before {
    content: "\f1cb";
  }
  .ri-switch-fill:before {
    content: "\f1cc";
  }
  .ri-switch-line:before {
    content: "\f1cd";
  }
  .ri-sword-fill:before {
    content: "\f1ce";
  }
  .ri-sword-line:before {
    content: "\f1cf";
  }
  .ri-syringe-fill:before {
    content: "\f1d0";
  }
  .ri-syringe-line:before {
    content: "\f1d1";
  }
  .ri-t-box-fill:before {
    content: "\f1d2";
  }
  .ri-t-box-line:before {
    content: "\f1d3";
  }
  .ri-t-shirt-2-fill:before {
    content: "\f1d4";
  }
  .ri-t-shirt-2-line:before {
    content: "\f1d5";
  }
  .ri-t-shirt-air-fill:before {
    content: "\f1d6";
  }
  .ri-t-shirt-air-line:before {
    content: "\f1d7";
  }
  .ri-t-shirt-fill:before {
    content: "\f1d8";
  }
  .ri-t-shirt-line:before {
    content: "\f1d9";
  }
  .ri-table-2:before {
    content: "\f1da";
  }
  .ri-table-alt-fill:before {
    content: "\f1db";
  }
  .ri-table-alt-line:before {
    content: "\f1dc";
  }
  .ri-table-fill:before {
    content: "\f1dd";
  }
  .ri-table-line:before {
    content: "\f1de";
  }
  .ri-tablet-fill:before {
    content: "\f1df";
  }
  .ri-tablet-line:before {
    content: "\f1e0";
  }
  .ri-takeaway-fill:before {
    content: "\f1e1";
  }
  .ri-takeaway-line:before {
    content: "\f1e2";
  }
  .ri-taobao-fill:before {
    content: "\f1e3";
  }
  .ri-taobao-line:before {
    content: "\f1e4";
  }
  .ri-tape-fill:before {
    content: "\f1e5";
  }
  .ri-tape-line:before {
    content: "\f1e6";
  }
  .ri-task-fill:before {
    content: "\f1e7";
  }
  .ri-task-line:before {
    content: "\f1e8";
  }
  .ri-taxi-fill:before {
    content: "\f1e9";
  }
  .ri-taxi-line:before {
    content: "\f1ea";
  }
  .ri-taxi-wifi-fill:before {
    content: "\f1eb";
  }
  .ri-taxi-wifi-line:before {
    content: "\f1ec";
  }
  .ri-team-fill:before {
    content: "\f1ed";
  }
  .ri-team-line:before {
    content: "\f1ee";
  }
  .ri-telegram-fill:before {
    content: "\f1ef";
  }
  .ri-telegram-line:before {
    content: "\f1f0";
  }
  .ri-temp-cold-fill:before {
    content: "\f1f1";
  }
  .ri-temp-cold-line:before {
    content: "\f1f2";
  }
  .ri-temp-hot-fill:before {
    content: "\f1f3";
  }
  .ri-temp-hot-line:before {
    content: "\f1f4";
  }
  .ri-terminal-box-fill:before {
    content: "\f1f5";
  }
  .ri-terminal-box-line:before {
    content: "\f1f6";
  }
  .ri-terminal-fill:before {
    content: "\f1f7";
  }
  .ri-terminal-line:before {
    content: "\f1f8";
  }
  .ri-terminal-window-fill:before {
    content: "\f1f9";
  }
  .ri-terminal-window-line:before {
    content: "\f1fa";
  }
  .ri-test-tube-fill:before {
    content: "\f1fb";
  }
  .ri-test-tube-line:before {
    content: "\f1fc";
  }
  .ri-text-direction-l:before {
    content: "\f1fd";
  }
  .ri-text-direction-r:before {
    content: "\f1fe";
  }
  .ri-text-spacing:before {
    content: "\f1ff";
  }
  .ri-text-wrap:before {
    content: "\f200";
  }
  .ri-text:before {
    content: "\f201";
  }
  .ri-thermometer-fill:before {
    content: "\f202";
  }
  .ri-thermometer-line:before {
    content: "\f203";
  }
  .ri-thumb-down-fill:before {
    content: "\f204";
  }
  .ri-thumb-down-line:before {
    content: "\f205";
  }
  .ri-thumb-up-fill:before {
    content: "\f206";
  }
  .ri-thumb-up-line:before {
    content: "\f207";
  }
  .ri-thunderstorms-fill:before {
    content: "\f208";
  }
  .ri-thunderstorms-line:before {
    content: "\f209";
  }
  .ri-ticket-2-fill:before {
    content: "\f20a";
  }
  .ri-ticket-2-line:before {
    content: "\f20b";
  }
  .ri-ticket-fill:before {
    content: "\f20c";
  }
  .ri-ticket-line:before {
    content: "\f20d";
  }
  .ri-time-fill:before {
    content: "\f20e";
  }
  .ri-time-line:before {
    content: "\f20f";
  }
  .ri-timer-2-fill:before {
    content: "\f210";
  }
  .ri-timer-2-line:before {
    content: "\f211";
  }
  .ri-timer-fill:before {
    content: "\f212";
  }
  .ri-timer-flash-fill:before {
    content: "\f213";
  }
  .ri-timer-flash-line:before {
    content: "\f214";
  }
  .ri-timer-line:before {
    content: "\f215";
  }
  .ri-todo-fill:before {
    content: "\f216";
  }
  .ri-todo-line:before {
    content: "\f217";
  }
  .ri-toggle-fill:before {
    content: "\f218";
  }
  .ri-toggle-line:before {
    content: "\f219";
  }
  .ri-tools-fill:before {
    content: "\f21a";
  }
  .ri-tools-line:before {
    content: "\f21b";
  }
  .ri-tornado-fill:before {
    content: "\f21c";
  }
  .ri-tornado-line:before {
    content: "\f21d";
  }
  .ri-trademark-fill:before {
    content: "\f21e";
  }
  .ri-trademark-line:before {
    content: "\f21f";
  }
  .ri-traffic-light-fill:before {
    content: "\f220";
  }
  .ri-traffic-light-line:before {
    content: "\f221";
  }
  .ri-train-fill:before {
    content: "\f222";
  }
  .ri-train-line:before {
    content: "\f223";
  }
  .ri-train-wifi-fill:before {
    content: "\f224";
  }
  .ri-train-wifi-line:before {
    content: "\f225";
  }
  .ri-translate-2:before {
    content: "\f226";
  }
  .ri-translate:before {
    content: "\f227";
  }
  .ri-travesti-fill:before {
    content: "\f228";
  }
  .ri-travesti-line:before {
    content: "\f229";
  }
  .ri-treasure-map-fill:before {
    content: "\f22a";
  }
  .ri-treasure-map-line:before {
    content: "\f22b";
  }
  .ri-trello-fill:before {
    content: "\f22c";
  }
  .ri-trello-line:before {
    content: "\f22d";
  }
  .ri-trophy-fill:before {
    content: "\f22e";
  }
  .ri-trophy-line:before {
    content: "\f22f";
  }
  .ri-truck-fill:before {
    content: "\f230";
  }
  .ri-truck-line:before {
    content: "\f231";
  }
  .ri-tumblr-fill:before {
    content: "\f232";
  }
  .ri-tumblr-line:before {
    content: "\f233";
  }
  .ri-tv-2-fill:before {
    content: "\f234";
  }
  .ri-tv-2-line:before {
    content: "\f235";
  }
  .ri-tv-fill:before {
    content: "\f236";
  }
  .ri-tv-line:before {
    content: "\f237";
  }
  .ri-twitch-fill:before {
    content: "\f238";
  }
  .ri-twitch-line:before {
    content: "\f239";
  }
  .ri-twitter-fill:before {
    content: "\f23a";
  }
  .ri-twitter-line:before {
    content: "\f23b";
  }
  .ri-typhoon-fill:before {
    content: "\f23c";
  }
  .ri-typhoon-line:before {
    content: "\f23d";
  }
  .ri-u-disk-fill:before {
    content: "\f23e";
  }
  .ri-u-disk-line:before {
    content: "\f23f";
  }
  .ri-ubuntu-fill:before {
    content: "\f240";
  }
  .ri-ubuntu-line:before {
    content: "\f241";
  }
  .ri-umbrella-fill:before {
    content: "\f242";
  }
  .ri-umbrella-line:before {
    content: "\f243";
  }
  .ri-underline:before {
    content: "\f244";
  }
  .ri-uninstall-fill:before {
    content: "\f245";
  }
  .ri-uninstall-line:before {
    content: "\f246";
  }
  .ri-unsplash-fill:before {
    content: "\f247";
  }
  .ri-unsplash-line:before {
    content: "\f248";
  }
  .ri-upload-2-fill:before {
    content: "\f249";
  }
  .ri-upload-2-line:before {
    content: "\f24a";
  }
  .ri-upload-cloud-2-fill:before {
    content: "\f24b";
  }
  .ri-upload-cloud-2-line:before {
    content: "\f24c";
  }
  .ri-upload-cloud-fill:before {
    content: "\f24d";
  }
  .ri-upload-cloud-line:before {
    content: "\f24e";
  }
  .ri-upload-fill:before {
    content: "\f24f";
  }
  .ri-upload-line:before {
    content: "\f250";
  }
  .ri-usb-fill:before {
    content: "\f251";
  }
  .ri-usb-line:before {
    content: "\f252";
  }
  .ri-user-2-fill:before {
    content: "\f253";
  }
  .ri-user-2-line:before {
    content: "\f254";
  }
  .ri-user-3-fill:before {
    content: "\f255";
  }
  .ri-user-3-line:before {
    content: "\f256";
  }
  .ri-user-4-fill:before {
    content: "\f257";
  }
  .ri-user-4-line:before {
    content: "\f258";
  }
  .ri-user-5-fill:before {
    content: "\f259";
  }
  .ri-user-5-line:before {
    content: "\f25a";
  }
  .ri-user-6-fill:before {
    content: "\f25b";
  }
  .ri-user-6-line:before {
    content: "\f25c";
  }
  .ri-user-add-fill:before {
    content: "\f25d";
  }
  .ri-user-add-line:before {
    content: "\f25e";
  }
  .ri-user-fill:before {
    content: "\f25f";
  }
  .ri-user-follow-fill:before {
    content: "\f260";
  }
  .ri-user-follow-line:before {
    content: "\f261";
  }
  .ri-user-heart-fill:before {
    content: "\f262";
  }
  .ri-user-heart-line:before {
    content: "\f263";
  }
  .ri-user-line:before {
    content: "\f264";
  }
  .ri-user-location-fill:before {
    content: "\f265";
  }
  .ri-user-location-line:before {
    content: "\f266";
  }
  .ri-user-received-2-fill:before {
    content: "\f267";
  }
  .ri-user-received-2-line:before {
    content: "\f268";
  }
  .ri-user-received-fill:before {
    content: "\f269";
  }
  .ri-user-received-line:before {
    content: "\f26a";
  }
  .ri-user-search-fill:before {
    content: "\f26b";
  }
  .ri-user-search-line:before {
    content: "\f26c";
  }
  .ri-user-settings-fill:before {
    content: "\f26d";
  }
  .ri-user-settings-line:before {
    content: "\f26e";
  }
  .ri-user-shared-2-fill:before {
    content: "\f26f";
  }
  .ri-user-shared-2-line:before {
    content: "\f270";
  }
  .ri-user-shared-fill:before {
    content: "\f271";
  }
  .ri-user-shared-line:before {
    content: "\f272";
  }
  .ri-user-smile-fill:before {
    content: "\f273";
  }
  .ri-user-smile-line:before {
    content: "\f274";
  }
  .ri-user-star-fill:before {
    content: "\f275";
  }
  .ri-user-star-line:before {
    content: "\f276";
  }
  .ri-user-unfollow-fill:before {
    content: "\f277";
  }
  .ri-user-unfollow-line:before {
    content: "\f278";
  }
  .ri-user-voice-fill:before {
    content: "\f279";
  }
  .ri-user-voice-line:before {
    content: "\f27a";
  }
  .ri-video-add-fill:before {
    content: "\f27b";
  }
  .ri-video-add-line:before {
    content: "\f27c";
  }
  .ri-video-chat-fill:before {
    content: "\f27d";
  }
  .ri-video-chat-line:before {
    content: "\f27e";
  }
  .ri-video-download-fill:before {
    content: "\f27f";
  }
  .ri-video-download-line:before {
    content: "\f280";
  }
  .ri-video-fill:before {
    content: "\f281";
  }
  .ri-video-line:before {
    content: "\f282";
  }
  .ri-video-upload-fill:before {
    content: "\f283";
  }
  .ri-video-upload-line:before {
    content: "\f284";
  }
  .ri-vidicon-2-fill:before {
    content: "\f285";
  }
  .ri-vidicon-2-line:before {
    content: "\f286";
  }
  .ri-vidicon-fill:before {
    content: "\f287";
  }
  .ri-vidicon-line:before {
    content: "\f288";
  }
  .ri-vimeo-fill:before {
    content: "\f289";
  }
  .ri-vimeo-line:before {
    content: "\f28a";
  }
  .ri-vip-crown-2-fill:before {
    content: "\f28b";
  }
  .ri-vip-crown-2-line:before {
    content: "\f28c";
  }
  .ri-vip-crown-fill:before {
    content: "\f28d";
  }
  .ri-vip-crown-line:before {
    content: "\f28e";
  }
  .ri-vip-diamond-fill:before {
    content: "\f28f";
  }
  .ri-vip-diamond-line:before {
    content: "\f290";
  }
  .ri-vip-fill:before {
    content: "\f291";
  }
  .ri-vip-line:before {
    content: "\f292";
  }
  .ri-virus-fill:before {
    content: "\f293";
  }
  .ri-virus-line:before {
    content: "\f294";
  }
  .ri-visa-fill:before {
    content: "\f295";
  }
  .ri-visa-line:before {
    content: "\f296";
  }
  .ri-voice-recognition-fill:before {
    content: "\f297";
  }
  .ri-voice-recognition-line:before {
    content: "\f298";
  }
  .ri-voiceprint-fill:before {
    content: "\f299";
  }
  .ri-voiceprint-line:before {
    content: "\f29a";
  }
  .ri-volume-down-fill:before {
    content: "\f29b";
  }
  .ri-volume-down-line:before {
    content: "\f29c";
  }
  .ri-volume-mute-fill:before {
    content: "\f29d";
  }
  .ri-volume-mute-line:before {
    content: "\f29e";
  }
  .ri-volume-off-vibrate-fill:before {
    content: "\f29f";
  }
  .ri-volume-off-vibrate-line:before {
    content: "\f2a0";
  }
  .ri-volume-up-fill:before {
    content: "\f2a1";
  }
  .ri-volume-up-line:before {
    content: "\f2a2";
  }
  .ri-volume-vibrate-fill:before {
    content: "\f2a3";
  }
  .ri-volume-vibrate-line:before {
    content: "\f2a4";
  }
  .ri-vuejs-fill:before {
    content: "\f2a5";
  }
  .ri-vuejs-line:before {
    content: "\f2a6";
  }
  .ri-walk-fill:before {
    content: "\f2a7";
  }
  .ri-walk-line:before {
    content: "\f2a8";
  }
  .ri-wallet-2-fill:before {
    content: "\f2a9";
  }
  .ri-wallet-2-line:before {
    content: "\f2aa";
  }
  .ri-wallet-3-fill:before {
    content: "\f2ab";
  }
  .ri-wallet-3-line:before {
    content: "\f2ac";
  }
  .ri-wallet-fill:before {
    content: "\f2ad";
  }
  .ri-wallet-line:before {
    content: "\f2ae";
  }
  .ri-water-flash-fill:before {
    content: "\f2af";
  }
  .ri-water-flash-line:before {
    content: "\f2b0";
  }
  .ri-webcam-fill:before {
    content: "\f2b1";
  }
  .ri-webcam-line:before {
    content: "\f2b2";
  }
  .ri-wechat-2-fill:before {
    content: "\f2b3";
  }
  .ri-wechat-2-line:before {
    content: "\f2b4";
  }
  .ri-wechat-fill:before {
    content: "\f2b5";
  }
  .ri-wechat-line:before {
    content: "\f2b6";
  }
  .ri-wechat-pay-fill:before {
    content: "\f2b7";
  }
  .ri-wechat-pay-line:before {
    content: "\f2b8";
  }
  .ri-weibo-fill:before {
    content: "\f2b9";
  }
  .ri-weibo-line:before {
    content: "\f2ba";
  }
  .ri-whatsapp-fill:before {
    content: "\f2bb";
  }
  .ri-whatsapp-line:before {
    content: "\f2bc";
  }
  .ri-wheelchair-fill:before {
    content: "\f2bd";
  }
  .ri-wheelchair-line:before {
    content: "\f2be";
  }
  .ri-wifi-fill:before {
    content: "\f2bf";
  }
  .ri-wifi-line:before {
    content: "\f2c0";
  }
  .ri-wifi-off-fill:before {
    content: "\f2c1";
  }
  .ri-wifi-off-line:before {
    content: "\f2c2";
  }
  .ri-window-2-fill:before {
    content: "\f2c3";
  }
  .ri-window-2-line:before {
    content: "\f2c4";
  }
  .ri-window-fill:before {
    content: "\f2c5";
  }
  .ri-window-line:before {
    content: "\f2c6";
  }
  .ri-windows-fill:before {
    content: "\f2c7";
  }
  .ri-windows-line:before {
    content: "\f2c8";
  }
  .ri-windy-fill:before {
    content: "\f2c9";
  }
  .ri-windy-line:before {
    content: "\f2ca";
  }
  .ri-wireless-charging-fill:before {
    content: "\f2cb";
  }
  .ri-wireless-charging-line:before {
    content: "\f2cc";
  }
  .ri-women-fill:before {
    content: "\f2cd";
  }
  .ri-women-line:before {
    content: "\f2ce";
  }
  .ri-wubi-input:before {
    content: "\f2cf";
  }
  .ri-xbox-fill:before {
    content: "\f2d0";
  }
  .ri-xbox-line:before {
    content: "\f2d1";
  }
  .ri-xing-fill:before {
    content: "\f2d2";
  }
  .ri-xing-line:before {
    content: "\f2d3";
  }
  .ri-youtube-fill:before {
    content: "\f2d4";
  }
  .ri-youtube-line:before {
    content: "\f2d5";
  }
  .ri-zcool-fill:before {
    content: "\f2d6";
  }
  .ri-zcool-line:before {
    content: "\f2d7";
  }
  .ri-zhihu-fill:before {
    content: "\f2d8";
  }
  .ri-zhihu-line:before {
    content: "\f2d9";
  }
  .ri-zoom-in-fill:before {
    content: "\f2da";
  }
  .ri-zoom-in-line:before {
    content: "\f2db";
  }
  .ri-zoom-out-fill:before {
    content: "\f2dc";
  }
  .ri-zoom-out-line:before {
    content: "\f2dd";
  }
  .ri-zzz-fill:before {
    content: "\f2de";
  }
  .ri-zzz-line:before {
    content: "\f2df";
  }
`;

export const Syntax = css`
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
  code.hljs {
    padding: 3px 5px;
  }
  .hljs {
    color: #24292e;
    background: #fff;
  }
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    color: #d73a49;
  }
  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    color: #6f42c1;
  }
  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-variable {
    color: #005cc5;
  }
  .hljs-meta .hljs-string,
  .hljs-regexp,
  .hljs-string {
    color: #032f62;
  }
  .hljs-built_in,
  .hljs-symbol {
    color: #e36209;
  }
  .hljs-code,
  .hljs-comment,
  .hljs-formula {
    color: #6a737d;
  }
  .hljs-name,
  .hljs-quote,
  .hljs-selector-pseudo,
  .hljs-selector-tag {
    color: #22863a;
  }
  .hljs-subst {
    color: #24292e;
  }
  .hljs-section {
    color: #005cc5;
    font-weight: 700;
  }
  .hljs-bullet {
    color: #735c0f;
  }
  .hljs-emphasis {
    color: #24292e;
    font-style: italic;
  }
  .hljs-strong {
    color: #24292e;
    font-weight: 700;
  }
  .hljs-addition {
    color: #22863a;
    background-color: #f0fff4;
  }
  .hljs-deletion {
    color: #b31d28;
    background-color: #ffeef0;
  }
`;
