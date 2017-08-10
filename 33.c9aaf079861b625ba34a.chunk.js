webpackJsonp([33],{"8BDE":function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'nz-demo-carousel-fade',\n  template: `\n    <nz-carousel [nzEffect]=\"'fade'\">\n      <div nz-carousel-content><h3>1</h3></div>\n      <div nz-carousel-content><h3>2</h3></div>\n      <div nz-carousel-content><h3>3</h3></div>\n      <div nz-carousel-content><h3>4</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselFadeComponent implements OnInit {\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n"},M1oM:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'nz-demo-carousel-vertical',\n  template: `\n    <nz-carousel [nzVertical]=\"true\">\n      <div nz-carousel-content><h3>1</h3></div>\n      <div nz-carousel-content><h3>2</h3></div>\n      <div nz-carousel-content><h3>3</h3></div>\n      <div nz-carousel-content><h3>4</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselVerticalComponent implements OnInit {\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n"},P8w0:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'nz-demo-carousel-basic',\n  template: `\n    <nz-carousel>\n      <div nz-carousel-content><h3>1</h3></div>\n      <div nz-carousel-content><h3>2</h3></div>\n      <div nz-carousel-content><h3>3</h3></div>\n      <div nz-carousel-content><h3>4</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselBasicComponent implements OnInit {\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n"},Ygb9:function(l,n,u){"use strict";function t(l){return x._47(0,[(l()(),x._23(0,null,null,4,"li",[],[[2,"slick-active",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.setActive(l.context.$implicit,l.context.index)&&t}return t},null,null)),(l()(),x._45(null,["\n          "])),(l()(),x._23(0,null,null,1,"button",[],null,null,null,null,null)),(l()(),x._45(null,["1"])),(l()(),x._45(null,["\n        "]))],null,function(l,n){l(n,0,0,n.context.$implicit.isActive)})}function e(l){return x._47(0,[(l()(),x._23(0,null,null,4,"ul",[["class","slick-dots"],["style","display: block;"]],null,null,null,null,null)),(l()(),x._45(null,["\n        "])),(l()(),x._17(16777216,null,null,1,null,t)),x._21(802816,null,0,g.k,[x._5,x._0,x.C],{ngForOf:[0,"ngForOf"]},null),(l()(),x._45(null,["\n      "]))],function(l,n){l(n,3,0,n.component.slideContents)},null)}function o(l){return x._47(0,[x._43(402653184,1,{slickList:0}),x._43(402653184,2,{slickTrack:0}),(l()(),x._45(null,["\n    "])),(l()(),x._23(0,null,null,12,"div",[["class","slick-initialized slick-slider"]],[[2,"slick-vertical",null]],null,null,null,null)),(l()(),x._45(null,["\n      "])),(l()(),x._23(0,[[1,0],["slickList",1]],null,6,"div",[["class","slick-list"]],null,null,null,null,null)),(l()(),x._45(null,["\n        "])),(l()(),x._23(0,[[2,0],["slickTrack",1]],null,3,"div",[["class","slick-track"],["style","opacity: 1;"]],[[4,"transform",null]],null,null,null,null)),(l()(),x._45(null,["\n          "])),x._36(null,0),(l()(),x._45(null,["\n        "])),(l()(),x._45(null,["\n      "])),(l()(),x._45(null,["\n      "])),(l()(),x._17(16777216,null,null,1,null,e)),x._21(16384,null,0,g.l,[x._5,x._0],{ngIf:[0,"ngIf"]},null),(l()(),x._45(null,["\n    "]))],function(l,n){l(n,14,0,n.component.nzDots)},function(l,n){var u=n.component;l(n,3,0,u.nzVertical),l(n,7,0,u.transform)})}function i(l){return x._47(0,[(l()(),x._23(0,null,null,2,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,y)),x._21(4374528,null,1,m.a,[x.r,x.R],null,null),x._43(603979776,1,{slideContents:1})],null,function(l,n){l(n,0,0,x._37(n,1).nzVertical,!0)})}function a(l){return O._47(0,[(l()(),O._45(null,["\n    "])),(l()(),O._23(0,null,null,23,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,y)),O._21(4374528,null,1,P.a,[O.r,O.R],null,null),O._43(603979776,1,{slideContents:1}),(l()(),O._45(0,["\n      "])),(l()(),O._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),O._21(16384,[[1,4]],0,w.a,[],null,null),(l()(),O._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),O._45(null,["1"])),(l()(),O._45(0,["\n      "])),(l()(),O._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),O._21(16384,[[1,4]],0,w.a,[],null,null),(l()(),O._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),O._45(null,["2"])),(l()(),O._45(0,["\n      "])),(l()(),O._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),O._21(16384,[[1,4]],0,w.a,[],null,null),(l()(),O._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),O._45(null,["3"])),(l()(),O._45(0,["\n      "])),(l()(),O._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),O._21(16384,[[1,4]],0,w.a,[],null,null),(l()(),O._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),O._45(null,["4"])),(l()(),O._45(0,["\n    "]))],null,function(l,n){l(n,1,0,O._37(n,2).nzVertical,!0);l(n,5,0,!0,O._37(n,6).setActiveClass,O._37(n,6).setWidth,O._37(n,6).setLeft,O._37(n,6).setTop,O._37(n,6).setPosition,O._37(n,6).setOpacity);l(n,10,0,!0,O._37(n,11).setActiveClass,O._37(n,11).setWidth,O._37(n,11).setLeft,O._37(n,11).setTop,O._37(n,11).setPosition,O._37(n,11).setOpacity);l(n,15,0,!0,O._37(n,16).setActiveClass,O._37(n,16).setWidth,O._37(n,16).setLeft,O._37(n,16).setTop,O._37(n,16).setPosition,O._37(n,16).setOpacity);l(n,20,0,!0,O._37(n,21).setActiveClass,O._37(n,21).setWidth,O._37(n,21).setLeft,O._37(n,21).setTop,O._37(n,21).setPosition,O._37(n,21).setOpacity)})}function s(l){return O._47(0,[(l()(),O._23(0,null,null,1,"nz-demo-carousel-basic",[],null,null,null,a,A)),O._21(114688,null,0,C,[],null,null)],function(l,n){l(n,1,0)},null)}function c(l){return I._47(0,[(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,23,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,y)),I._21(4374528,null,1,D.a,[I.r,I.R],{nzEffect:[0,"nzEffect"]},null),I._43(603979776,1,{slideContents:1}),(l()(),I._45(0,["\n      "])),(l()(),I._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),I._21(16384,[[1,4]],0,W.a,[],null,null),(l()(),I._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),I._45(null,["1"])),(l()(),I._45(0,["\n      "])),(l()(),I._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),I._21(16384,[[1,4]],0,W.a,[],null,null),(l()(),I._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),I._45(null,["2"])),(l()(),I._45(0,["\n      "])),(l()(),I._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),I._21(16384,[[1,4]],0,W.a,[],null,null),(l()(),I._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),I._45(null,["3"])),(l()(),I._45(0,["\n      "])),(l()(),I._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),I._21(16384,[[1,4]],0,W.a,[],null,null),(l()(),I._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),I._45(null,["4"])),(l()(),I._45(0,["\n    "]))],function(l,n){l(n,2,0,"fade")},function(l,n){l(n,1,0,I._37(n,2).nzVertical,!0);l(n,5,0,!0,I._37(n,6).setActiveClass,I._37(n,6).setWidth,I._37(n,6).setLeft,I._37(n,6).setTop,I._37(n,6).setPosition,I._37(n,6).setOpacity);l(n,10,0,!0,I._37(n,11).setActiveClass,I._37(n,11).setWidth,I._37(n,11).setLeft,I._37(n,11).setTop,I._37(n,11).setPosition,I._37(n,11).setOpacity);l(n,15,0,!0,I._37(n,16).setActiveClass,I._37(n,16).setWidth,I._37(n,16).setLeft,I._37(n,16).setTop,I._37(n,16).setPosition,I._37(n,16).setOpacity);l(n,20,0,!0,I._37(n,21).setActiveClass,I._37(n,21).setWidth,I._37(n,21).setLeft,I._37(n,21).setTop,I._37(n,21).setPosition,I._37(n,21).setOpacity)})}function _(l){return I._47(0,[(l()(),I._23(0,null,null,1,"nz-demo-carousel-fade",[],null,null,null,c,B)),I._21(114688,null,0,T,[],null,null)],function(l,n){l(n,1,0)},null)}function r(l){return R._47(0,[(l()(),R._45(null,["\n    "])),(l()(),R._23(0,null,null,23,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,y)),R._21(4374528,null,1,V.a,[R.r,R.R],{nzVertical:[0,"nzVertical"]},null),R._43(603979776,1,{slideContents:1}),(l()(),R._45(0,["\n      "])),(l()(),R._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),R._21(16384,[[1,4]],0,E.a,[],null,null),(l()(),R._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),R._45(null,["1"])),(l()(),R._45(0,["\n      "])),(l()(),R._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),R._21(16384,[[1,4]],0,E.a,[],null,null),(l()(),R._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),R._45(null,["2"])),(l()(),R._45(0,["\n      "])),(l()(),R._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),R._21(16384,[[1,4]],0,E.a,[],null,null),(l()(),R._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),R._45(null,["3"])),(l()(),R._45(0,["\n      "])),(l()(),R._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),R._21(16384,[[1,4]],0,E.a,[],null,null),(l()(),R._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),R._45(null,["4"])),(l()(),R._45(0,["\n    "]))],function(l,n){l(n,2,0,!0)},function(l,n){l(n,1,0,R._37(n,2).nzVertical,!0);l(n,5,0,!0,R._37(n,6).setActiveClass,R._37(n,6).setWidth,R._37(n,6).setLeft,R._37(n,6).setTop,R._37(n,6).setPosition,R._37(n,6).setOpacity);l(n,10,0,!0,R._37(n,11).setActiveClass,R._37(n,11).setWidth,R._37(n,11).setLeft,R._37(n,11).setTop,R._37(n,11).setPosition,R._37(n,11).setOpacity);l(n,15,0,!0,R._37(n,16).setActiveClass,R._37(n,16).setWidth,R._37(n,16).setLeft,R._37(n,16).setTop,R._37(n,16).setPosition,R._37(n,16).setOpacity);l(n,20,0,!0,R._37(n,21).setActiveClass,R._37(n,21).setWidth,R._37(n,21).setLeft,R._37(n,21).setTop,R._37(n,21).setPosition,R._37(n,21).setOpacity)})}function d(l){return R._47(0,[(l()(),R._23(0,null,null,1,"nz-demo-carousel-vertical",[],null,null,null,r,F)),R._21(114688,null,0,M,[],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return J._47(0,[(l()(),J._45(null,["\n    "])),(l()(),J._23(0,null,null,23,"nz-carousel",[],[[2,"ant-carousel-vertical",null],[2,"ant-carousel",null]],null,null,o,y)),J._21(4374528,null,1,K.a,[J.r,J.R],{nzAutoPlay:[0,"nzAutoPlay"]},null),J._43(603979776,1,{slideContents:1}),(l()(),J._45(0,["\n      "])),(l()(),J._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),J._21(16384,[[1,4]],0,Q.a,[],null,null),(l()(),J._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),J._45(null,["1"])),(l()(),J._45(0,["\n      "])),(l()(),J._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),J._21(16384,[[1,4]],0,Q.a,[],null,null),(l()(),J._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),J._45(null,["2"])),(l()(),J._45(0,["\n      "])),(l()(),J._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),J._21(16384,[[1,4]],0,Q.a,[],null,null),(l()(),J._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),J._45(null,["3"])),(l()(),J._45(0,["\n      "])),(l()(),J._23(0,null,0,3,"div",[["nz-carousel-content",""]],[[2,"slick-slide",null],[2,"slick-active",null],[4,"width","px"],[4,"left","px"],[4,"top","px"],[4,"position",null],[4,"opacity",null]],null,null,null,null)),J._21(16384,[[1,4]],0,Q.a,[],null,null),(l()(),J._23(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),J._45(null,["4"])),(l()(),J._45(0,["\n    "]))],function(l,n){l(n,2,0,!0)},function(l,n){l(n,1,0,J._37(n,2).nzVertical,!0);l(n,5,0,!0,J._37(n,6).setActiveClass,J._37(n,6).setWidth,J._37(n,6).setLeft,J._37(n,6).setTop,J._37(n,6).setPosition,J._37(n,6).setOpacity);l(n,10,0,!0,J._37(n,11).setActiveClass,J._37(n,11).setWidth,J._37(n,11).setLeft,J._37(n,11).setTop,J._37(n,11).setPosition,J._37(n,11).setOpacity);l(n,15,0,!0,J._37(n,16).setActiveClass,J._37(n,16).setWidth,J._37(n,16).setLeft,J._37(n,16).setTop,J._37(n,16).setPosition,J._37(n,16).setOpacity);l(n,20,0,!0,J._37(n,21).setActiveClass,J._37(n,21).setWidth,J._37(n,21).setLeft,J._37(n,21).setTop,J._37(n,21).setPosition,J._37(n,21).setOpacity)})}function f(l){return J._47(0,[(l()(),J._23(0,null,null,1,"nz-demo-carousel-auto",[],null,null,null,p,G)),J._21(114688,null,0,j,[],null,null)],function(l,n){l(n,1,0)},null)}function h(l){return U._47(0,[(l()(),U._23(0,null,null,212,"article",[],null,null,null,null,null)),(l()(),U._45(null,["\n  "])),(l()(),U._23(0,null,null,35,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),U._23(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),U._45(null,["Carousel \u8d70\u9a6c\u706f"])),(l()(),U._45(null,["\n    "])),(l()(),U._23(0,null,null,26,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u65cb\u8f6c\u6728\u9a6c\uff0c\u4e00\u7ec4\u8f6e\u64ad\u7684\u533a\u57df\u3002"])),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),U._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),U._45(null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),U._45(null,["#"])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u5f53\u6709\u4e00\u7ec4\u5e73\u7ea7\u7684\u5185\u5bb9\u3002"])),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u5f53\u5185\u5bb9\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u7528\u8d70\u9a6c\u706f\u7684\u5f62\u5f0f\u8fdb\u884c\u6536\u7eb3\uff0c\u8fdb\u884c\u8f6e\u64ad\u5c55\u73b0\u3002"])),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u5e38\u7528\u4e8e\u4e00\u7ec4\u56fe\u7247\u6216\u5361\u7247\u8f6e\u64ad\u3002"])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n    "])),(l()(),U._45(null,["\n    "])),(l()(),U._23(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),U._45(null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),U._23(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),U._45(null,["\n  "])),(l()(),U._45(null,["\n  "])),(l()(),U._23(0,null,null,62,"div",[["nz-row",""]],null,null,null,X.b,X.a)),U._21(114688,null,0,Z.a,[U.r,U.R],{nzGutter:[0,"nzGutter"]},null),(l()(),U._45(0,["\n    "])),(l()(),U._23(0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),U._21(606208,null,0,q.a,[U.r,[2,Z.a],U.R],{nzSpan:[0,"nzSpan"]},null),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-basic"]],null,null,null,$.b,$.a)),U._21(114688,null,0,ll.a,[nl.c,U.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,0,1,"nz-demo-carousel-basic",[["demo",""]],null,null,null,a,A)),U._21(114688,null,0,C,[],null,null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-fade"]],null,null,null,$.b,$.a)),U._21(114688,null,0,ll.a,[nl.c,U.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,0,1,"nz-demo-carousel-fade",[["demo",""]],null,null,null,c,B)),U._21(114688,null,0,T,[],null,null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u5207\u6362\u6548\u679c\u4e3a\u6e10\u663e\u3002"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n    "])),(l()(),U._45(0,["\n    "])),(l()(),U._23(0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),U._21(606208,null,0,q.a,[U.r,[2,Z.a],U.R],{nzSpan:[0,"nzSpan"]},null),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-vertical"]],null,null,null,$.b,$.a)),U._21(114688,null,0,ll.a,[nl.c,U.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,0,1,"nz-demo-carousel-vertical",[["demo",""]],null,null,null,r,F)),U._21(114688,null,0,M,[],null,null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u5782\u76f4\u663e\u793a\u3002"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,11,"nz-code-box",[["id","components-carousel-demo-auto"]],null,null,null,$.b,$.a)),U._21(114688,null,0,ll.a,[nl.c,U.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,0,1,"nz-demo-carousel-auto",[["demo",""]],null,null,null,p,G)),U._21(114688,null,0,j,[],null,null),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["\u5b9a\u65f6\u5207\u6362\u4e0b\u4e00\u5f20\u3002"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n    "])),(l()(),U._45(0,["\n  "])),(l()(),U._45(null,["\n  "])),(l()(),U._23(0,null,null,108,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),U._45(null,["\n    "])),(l()(),U._23(0,null,null,6,"h2",[["id","API"]],null,null,null,null,null)),(l()(),U._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),U._45(null,["API"])),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),U._45(null,["#"])),(l()(),U._45(null,["\n    "])),(l()(),U._45(null,["\n    "])),(l()(),U._23(0,null,null,97,"table",[],null,null,null,null,null)),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),U._45(null,["\u53c2\u6570"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),U._45(null,["\u8bf4\u660e"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),U._45(null,["\u7c7b\u578b"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),U._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n      "])),(l()(),U._23(0,null,null,76,"tbody",[],null,null,null,null,null)),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["[nz-carousel-content]"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["\u7528\u4e8e\u6807\u8bc6\u6eda\u52a8\u7684slide\u5185\u5bb9"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["Directive"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["-"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["nzEffect"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["\u52a8\u753b\u6548\u679c\u51fd\u6570\uff0c\u53ef\u53d6 scrollx, fade"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["String"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["scrollx"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["nzDots"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["\u662f\u5426\u663e\u793a\u9762\u677f\u6307\u793a\u70b9"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["Boolean"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["true"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["nzVertical"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["\u5782\u76f4\u663e\u793a"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["Boolean"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["false"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n        "])),(l()(),U._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["nzAutoplay"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["\u662f\u5426\u81ea\u52a8\u5207\u6362"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["Boolean"])),(l()(),U._45(null,["\n          "])),(l()(),U._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),U._45(null,["false"])),(l()(),U._45(null,["\n        "])),(l()(),U._45(null,["\n      "])),(l()(),U._45(null,["\n    "])),(l()(),U._45(null,["\n  "])),(l()(),U._45(null,["\n"])),(l()(),U._45(null,["\n"]))],function(l,n){var u=n.component;l(n,40,0,8);l(n,43,0,12);l(n,46,0,"\u57fa\u672c",u.NzDemoCarouselBasicCode),l(n,49,0);l(n,59,0,"\u6e10\u73b0",u.NzDemoCarouselFadeCode),l(n,62,0);l(n,73,0,12);l(n,76,0,"\u5782\u76f4",u.NzDemoCarouselVerticalCode),l(n,79,0);l(n,89,0,"\u81ea\u52a8\u5207\u6362",u.NzDemoCarouselAutoCode),l(n,92,0)},function(l,n){l(n,42,0,U._37(n,43).paddingLeft,U._37(n,43).paddingRight),l(n,72,0,U._37(n,73).paddingLeft,U._37(n,73).paddingRight)})}function k(l){return U._47(0,[(l()(),U._23(0,null,null,1,"nz-demo-carousel",[],null,null,null,h,tl)),U._21(114688,null,0,H,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var v=function(){function l(){}return l}(),z=[""],x=u("/oeL"),g=u("qbdv"),m=u("zrLl"),b=['\n\n\n.ant-carousel .slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.ant-carousel .slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.ant-carousel .slick-list:focus {\n  outline: none;\n}\n.ant-carousel .slick-list.dragging {\n  cursor: pointer;\n}\n.ant-carousel .slick-slider .slick-track,\n.ant-carousel .slick-slider .slick-list {\n  transform: translate3d(0, 0, 0);\n}\n.ant-carousel .slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n}\n.ant-carousel .slick-track:before,\n.ant-carousel .slick-track:after {\n  content: "";\n  display: table;\n}\n.ant-carousel .slick-track:after {\n  clear: both;\n}\n.slick-loading .ant-carousel .slick-track {\n  visibility: hidden;\n}\n.ant-carousel .slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir="rtl"] .ant-carousel .slick-slide {\n  float: right;\n}\n.ant-carousel .slick-slide img {\n  display: block;\n}\n.ant-carousel .slick-slide.slick-loading img {\n  display: none;\n}\n.ant-carousel .slick-slide.dragging img {\n  pointer-events: none;\n}\n.ant-carousel .slick-initialized .slick-slide {\n  display: block;\n}\n.ant-carousel .slick-loading .slick-slide {\n  visibility: hidden;\n}\n.ant-carousel .slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n.ant-carousel .slick-arrow.slick-hidden {\n  display: none;\n}\n.ant-carousel .slick-prev,\n.ant-carousel .slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0;\n  font-size: 0;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  margin-top: -10px;\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.ant-carousel .slick-prev:hover,\n.ant-carousel .slick-next:hover,\n.ant-carousel .slick-prev:focus,\n.ant-carousel .slick-next:focus {\n  outline: none;\n  background: transparent;\n  color: transparent;\n}\n.ant-carousel .slick-prev:hover:before,\n.ant-carousel .slick-next:hover:before,\n.ant-carousel .slick-prev:focus:before,\n.ant-carousel .slick-next:focus:before {\n  opacity: 1;\n}\n.ant-carousel .slick-prev.slick-disabled:before,\n.ant-carousel .slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n.ant-carousel .slick-prev {\n  left: -25px;\n}\n.ant-carousel .slick-prev:before {\n  content: "\u2190";\n}\n.ant-carousel .slick-next {\n  right: -25px;\n}\n.ant-carousel .slick-next:before {\n  content: "\u2192";\n}\n.ant-carousel .slick-dots {\n  position: absolute;\n  bottom: 12px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n}\n.ant-carousel .slick-dots li {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  margin: 0 2px;\n  padding: 0;\n}\n.ant-carousel .slick-dots li button {\n  border: 0;\n  cursor: pointer;\n  background: #fff;\n  opacity: 0.3;\n  display: block;\n  width: 16px;\n  height: 3px;\n  border-radius: 1px;\n  outline: none;\n  font-size: 0;\n  color: transparent;\n  transition: all .5s;\n}\n.ant-carousel .slick-dots li button:hover,\n.ant-carousel .slick-dots li button:focus {\n  opacity: 0.75;\n}\n.ant-carousel .slick-dots li.slick-active button {\n  background: #fff;\n  opacity: 1;\n  width: 24px;\n}\n.ant-carousel .slick-dots li.slick-active button:hover,\n.ant-carousel .slick-dots li.slick-active button:focus {\n  opacity: 1;\n}\n.ant-carousel-vertical .slick-dots {\n  width: 3px;\n  bottom: auto;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: auto;\n}\n.ant-carousel-vertical .slick-dots li {\n  margin: 0 2px;\n  vertical-align: baseline;\n}\n.ant-carousel-vertical .slick-dots li button {\n  width: 3px;\n  height: 16px;\n}\n.ant-carousel-vertical .slick-dots li.slick-active button {\n  width: 3px;\n  height: 24px;\n}\n',"nz-carousel {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\nnz-carousel .slick-track {\n  transition: all 0.5s ease;\n}\nnz-carousel .slick-track .slick-slide {\n  transition: opacity 500ms ease;\n}\n"],y=x._20({encapsulation:2,styles:b,data:{}}),C=(x._18("nz-carousel",m.a,i,{nzAutoPlay:"nzAutoPlay",nzDots:"nzDots",nzEffect:"nzEffect",nzVertical:"nzVertical"},{},["*"]),function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),O=u("/oeL"),P=u("zrLl"),w=u("WLQe"),L=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],A=O._20({encapsulation:0,styles:L,data:{}}),T=(O._18("nz-demo-carousel-basic",C,s,{},{},[]),function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),I=u("/oeL"),D=u("zrLl"),W=u("WLQe"),N=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],B=I._20({encapsulation:0,styles:N,data:{}}),M=(I._18("nz-demo-carousel-fade",T,_,{},{},[]),function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),R=u("/oeL"),V=u("zrLl"),E=u("WLQe"),S=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],F=R._20({encapsulation:0,styles:S,data:{}}),j=(R._18("nz-demo-carousel-vertical",M,d,{},{},[]),function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),J=u("/oeL"),K=u("zrLl"),Q=u("WLQe"),Y=["[_nghost-%COMP%]     .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3[_ngcontent-%COMP%] {\n      color: #fff;\n    }"],G=J._20({encapsulation:0,styles:Y,data:{}}),H=(J._18("nz-demo-carousel-auto",j,f,{},{},[]),function(){function l(){this.NzDemoCarouselBasicCode=u("P8w0"),this.NzDemoCarouselVerticalCode=u("M1oM"),this.NzDemoCarouselFadeCode=u("8BDE"),this.NzDemoCarouselAutoCode=u("tgBx")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),U=u("/oeL"),X=u("TOSB"),Z=u("9f15"),q=u("FYfR"),$=u("xfRN"),ll=u("d0SC"),nl=u("qbdv"),ul=[z],tl=U._20({encapsulation:2,styles:ul,data:{}}),el=U._18("nz-demo-carousel",H,k,{},{},[]),ol=function(){function l(){}return l}();u.d(n,"NzDemoCarouselModuleNgFactory",function(){return mn});var il=u("/oeL"),al=u("FkWa"),sl=u("yrl+"),cl=u("55J3"),_l=u("n6um"),rl=u("iaO7"),dl=u("FxM8"),pl=u("qbdv"),fl=u("bm2B"),hl=u("p4Sk"),kl=u("KWHd"),vl=u("ofc2"),zl=u("Ep+3"),xl=u("oe3n"),gl=u("gRBx"),ml=u("8aH3"),bl=u("BIYD"),yl=u("+n5j"),Cl=u("syUv"),Ol=u("sQGE"),Pl=u("hJM2"),wl=u("tSZc"),Ll=u("Z7s/"),Al=u("PWwA"),Tl=u("PAVX"),Il=u("K8P4"),Dl=u("R9WC"),Wl=u("ljTE"),Nl=u("ZPRV"),Bl=u("Hmg1"),Ml=u("NnGW"),Rl=u("JY8U"),Vl=u("xrsb"),El=u("VfTQ"),Sl=u("Vy3b"),Fl=u("nbGD"),jl=u("E+t3"),Jl=u("JOWY"),Kl=u("83Ua"),Ql=u("XyJX"),Yl=u("Ao/f"),Gl=u("kX/R"),Hl=u("54Is"),Ul=u("N5El"),Xl=u("2+5N"),Zl=u("9fxl"),ql=u("RNwh"),$l=u("4IKa"),ln=u("/grC"),nn=u("XDe+"),un=u("nP2T"),tn=u("aWIB"),en=u("QUju"),on=u("DcAm"),an=u("BJRZ"),sn=u("4BBw"),cn=u("/Fr5"),_n=u("PbkE"),rn=u("xECq"),dn=u("/CDc"),pn=u("hKjL"),fn=u("h617"),hn=u("shv5"),kn=u("BkNc"),vn=u("jlvU"),zn=u("ZgIK"),xn=u("IJb3"),gn=u("MgJ2"),mn=il._19(v,[],function(l){return il._34([il._35(512,il.n,il._15,[[8,[al.a,sl.a,cl.a,_l.a,rl.a,dl.a,el]],[3,il.n],il.I]),il._35(4608,pl.n,pl.m,[il.E]),il._35(4608,fl.u,fl.u,[]),il._35(4608,hl.h,hl.h,[]),il._35(5120,kl.c,kl.b,[[3,kl.c],il.K,hl.h]),il._35(5120,vl.c,vl.b,[[3,vl.c],kl.c]),il._35(4608,zl.a,zl.a,[kl.c,vl.c]),il._35(5120,xl.c,xl.b,[[3,xl.c]]),il._35(4608,gl.a,gl.a,[vl.c]),il._35(4608,ml.a,ml.a,[zl.a,xl.c,il.n,gl.a,il.g,il.A,il.K]),il._35(5120,bl.c,bl.b,[ml.a,pl.c,[3,bl.c]]),il._35(4608,yl.a,yl.a,[]),il._35(4608,Cl.a,Cl.a,[il.g,il.n]),il._35(4608,Ol.a,Ol.a,[]),il._35(4608,hl.e,hl.e,[]),il._35(4608,Pl.a,Pl.a,[]),il._35(512,pl.b,pl.b,[]),il._35(512,wl.a,wl.a,[]),il._35(512,Ll.a,Ll.a,[]),il._35(512,Al.a,Al.a,[]),il._35(512,fl.s,fl.s,[]),il._35(512,fl.i,fl.i,[]),il._35(512,hl.i,hl.i,[]),il._35(512,Tl.a,Tl.a,[]),il._35(512,Il.d,Il.d,[]),il._35(512,Dl.a,Dl.a,[]),il._35(512,Wl.a,Wl.a,[]),il._35(512,Nl.a,Nl.a,[]),il._35(512,Bl.a,Bl.a,[]),il._35(512,Ml.a,Ml.a,[]),il._35(512,Rl.a,Rl.a,[]),il._35(512,Vl.a,Vl.a,[]),il._35(512,El.a,El.a,[]),il._35(512,Sl.a,Sl.a,[]),il._35(512,Fl.a,Fl.a,[]),il._35(512,jl.a,jl.a,[]),il._35(512,Jl.a,Jl.a,[]),il._35(512,Kl.a,Kl.a,[]),il._35(512,Ql.a,Ql.a,[]),il._35(512,Yl.a,Yl.a,[]),il._35(512,Gl.a,Gl.a,[]),il._35(512,Hl.a,Hl.a,[]),il._35(512,Ul.a,Ul.a,[]),il._35(512,Xl.a,Xl.a,[]),il._35(512,Zl.a,Zl.a,[]),il._35(512,ql.a,ql.a,[]),il._35(512,$l.a,$l.a,[]),il._35(512,ln.a,ln.a,[]),il._35(512,nn.a,nn.a,[]),il._35(512,un.a,un.a,[]),il._35(512,hl.j,hl.j,[]),il._35(512,hl.g,hl.g,[]),il._35(512,tn.a,tn.a,[]),il._35(512,en.a,en.a,[]),il._35(512,on.a,on.a,[]),il._35(512,an.a,an.a,[]),il._35(512,sn.a,sn.a,[]),il._35(512,cn.a,cn.a,[]),il._35(512,_n.a,_n.a,[]),il._35(512,rn.a,rn.a,[]),il._35(512,dn.a,dn.a,[]),il._35(512,pn.a,pn.a,[]),il._35(512,fn.a,fn.a,[]),il._35(512,hn.a,hn.a,[]),il._35(512,kn.o,kn.o,[[2,kn.t],[2,kn.l]]),il._35(512,ol,ol,[]),il._35(512,vn.a,vn.a,[]),il._35(512,zn.a,zn.a,[]),il._35(512,v,v,[]),il._35(256,xn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),il._35(256,gn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),il._35(1024,kn.j,function(){return[[{path:"",component:H}]]},[])])})},tgBx:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'nz-demo-carousel-auto',\n  template: `\n    <nz-carousel [nzAutoPlay]=\"true\">\n      <div nz-carousel-content><h3>1</h3></div>\n      <div nz-carousel-content><h3>2</h3></div>\n      <div nz-carousel-content><h3>3</h3></div>\n      <div nz-carousel-content><h3>4</h3></div>\n    </nz-carousel>`,\n  styles  : [\n      `:host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 160px;\n      line-height: 160px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3 {\n      color: #fff;\n    }\n    `\n  ]\n})\nexport class NzDemoCarouselAutoComponent implements OnInit {\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n"}});