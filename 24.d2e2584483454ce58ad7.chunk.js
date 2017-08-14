webpackJsonp([24],{"+PAa":function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-collapse-basic',\n  template: `\n    <nz-collapseset>\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\"\n                   [nzDisabled]=\"panel.disabled\">\n        <p>{{panel.name}}\u5185\u5bb9</p>\n      </nz-collapse>\n    </nz-collapseset>\n  `,\n  styles: []\n})\nexport class NzDemoCollapseBasicComponent implements OnInit {\n  panels = [\n    {\n      active: true,\n      name: 'This is panel header 1',\n      disabled: false,\n      childPanel: [\n        {\n          active: false,\n          name: 'This is panel header 1-1'\n        }\n      ]\n    },\n    {\n      active: false,\n      disabled: true,\n      name: 'This is panel header 2'\n    },\n    {\n      active: true,\n      disabled: false,\n      name: 'This is panel header 3'\n    }\n  ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},"8n54":function(l,n,u){"use strict";function e(l){return D._47(0,[(l()(),D._45(null,["\n    "])),(l()(),D._23(0,null,null,3,"div",[["class","ant-collapse-header"],["role","tab"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==a.clickHeader(u)&&e}return e},null,null)),(l()(),D._45(null,["\n      "])),(l()(),D._23(0,null,null,0,"i",[["class","arrow"]],null,null,null,null,null)),(l()(),D._45(null,["\n      ","\n    "])),(l()(),D._45(null,["\n    "])),(l()(),D._23(0,null,null,6,"div",[["class","ant-collapse-content"]],[[24,"@collapseState",0]],null,null,null,null)),(l()(),D._45(null,["\n      "])),(l()(),D._23(0,null,null,3,"div",[["class","ant-collapse-content-box"]],null,null,null,null,null)),(l()(),D._45(null,["\n        "])),D._36(null,0),(l()(),D._45(null,["\n      "])),(l()(),D._45(null,["\n    "])),(l()(),D._45(null,["\n  "]))],null,function(l,n){var u=n.component;l(n,1,0,u._active),l(n,4,0,u.nzTitle),l(n,6,0,u._active?"active":"inactive")})}function a(l){return D._47(0,[(l()(),D._23(0,null,null,1,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,e,B)),D._21(49152,null,0,P.a,[I.a,D.r],null,null)],null,function(l,n){l(n,0,0,!0,D._37(n,1).nzDisabled)})}function t(l){return S._47(0,[(l()(),S._45(null,["\n    "])),(l()(),S._23(0,null,null,3,"div",[["class","ant-collapse"]],[[2,"ant-collapse-borderless",null]],null,null,null,null)),(l()(),S._45(null,["\n      "])),S._36(null,0),(l()(),S._45(null,["\n    "])),(l()(),S._45(null,["\n  "]))],null,function(l,n){l(n,1,0,!n.component.nzBordered)})}function o(l){return S._47(0,[(l()(),S._23(0,null,null,1,"nz-collapseset",[],null,null,null,t,G)),S._21(49152,null,0,N.a,[],null,null)],null,null)}function i(l){return U._47(0,[(l()(),U._23(0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,e,B)),U._21(49152,null,0,q.a,[j.a,U.r],{nzTitle:[0,"nzTitle"],nzDisabled:[1,"nzDisabled"],nzActive:[2,"nzActive"]},null),(l()(),U._45(0,["\n        "])),(l()(),U._23(0,null,0,1,"p",[],null,null,null,null,null)),(l()(),U._45(null,["","\u5185\u5bb9"])),(l()(),U._45(0,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.disabled,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,U._37(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function s(l){return U._47(0,[(l()(),U._45(null,["\n    "])),(l()(),U._23(0,null,null,5,"nz-collapseset",[],null,null,null,t,G)),U._21(49152,null,0,j.a,[],null,null),(l()(),U._45(0,["\n      "])),(l()(),U._17(16777216,null,0,1,null,i)),U._21(802816,null,0,R.k,[U._5,U._0,U.C],{ngForOf:[0,"ngForOf"]},null),(l()(),U._45(0,["\n    "])),(l()(),U._45(null,["\n  "]))],function(l,n){l(n,5,0,n.component.panels)},null)}function c(l){return U._47(0,[(l()(),U._23(0,null,null,1,"nz-demo-collapse-basic",[],null,null,null,s,Z)),U._21(114688,null,0,L,[],null,null)],function(l,n){l(n,1,0)},null)}function r(l){return H._47(0,[(l()(),H._23(0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,e,B)),H._21(49152,null,0,Y.a,[E.a,H.r],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),H._45(0,["\n        "])),(l()(),H._23(0,null,0,1,"p",[],null,null,null,null,null)),(l()(),H._45(null,[""," \u7684\u5185\u5bb9"])),(l()(),H._45(0,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,H._37(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function _(l){return H._47(0,[(l()(),H._45(null,["\n    "])),(l()(),H._23(0,null,null,5,"nz-collapseset",[],null,null,null,t,G)),H._21(49152,null,0,E.a,[],{nzAccordion:[0,"nzAccordion"]},null),(l()(),H._45(0,["\n      "])),(l()(),H._17(16777216,null,0,1,null,r)),H._21(802816,null,0,J.k,[H._5,H._0,H.C],{ngForOf:[0,"ngForOf"]},null),(l()(),H._45(0,["\n    "])),(l()(),H._45(null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,!0),l(n,5,0,u.panels)},null)}function p(l){return H._47(0,[(l()(),H._23(0,null,null,1,"nz-demo-collapse-accordion",[],null,null,null,_,X)),H._21(114688,null,0,K,[],null,null)],function(l,n){l(n,1,0)},null)}function d(l){return ll._47(0,[(l()(),ll._23(0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,e,B)),ll._21(49152,null,0,nl.a,[ul.a,ll.r],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),ll._45(0,["\n              "])),(l()(),ll._23(0,null,0,1,"p",[],null,null,null,null,null)),(l()(),ll._45(null,[""," \u7684\u5185\u5bb9"])),(l()(),ll._45(0,["\n            "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,ll._37(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function m(l){return ll._47(0,[(l()(),ll._23(0,null,null,8,"div",[],null,null,null,null,null)),(l()(),ll._45(null,["\n          "])),(l()(),ll._23(0,null,null,5,"nz-collapseset",[],null,null,null,t,G)),ll._21(49152,null,0,ul.a,[],null,null),(l()(),ll._45(0,["\n            "])),(l()(),ll._17(16777216,null,0,1,null,d)),ll._21(802816,null,0,el.k,[ll._5,ll._0,ll.C],{ngForOf:[0,"ngForOf"]},null),(l()(),ll._45(0,["\n          "])),(l()(),ll._45(null,["\n        "]))],function(l,n){l(n,6,0,n.parent.context.$implicit.childPanel)},null)}function f(l){return ll._47(0,[(l()(),ll._23(0,null,null,8,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,e,B)),ll._21(49152,null,0,nl.a,[ul.a,ll.r],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),ll._45(0,["\n        "])),(l()(),ll._23(0,null,0,1,"p",[],null,null,null,null,null)),(l()(),ll._45(null,[""," \u7684\u5185\u5bb9"])),(l()(),ll._45(0,["\n        "])),(l()(),ll._17(16777216,null,0,1,null,m)),ll._21(16384,null,0,el.l,[ll._5,ll._0],{ngIf:[0,"ngIf"]},null),(l()(),ll._45(0,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active),l(n,7,0,n.context.$implicit.childPanel&&n.context.$implicit.childPanel.length>0)},function(l,n){l(n,0,0,!0,ll._37(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function z(l){return ll._47(0,[(l()(),ll._45(null,["\n    "])),(l()(),ll._23(0,null,null,5,"nz-collapseset",[],null,null,null,t,G)),ll._21(49152,null,0,ul.a,[],null,null),(l()(),ll._45(0,["\n      "])),(l()(),ll._17(16777216,null,0,1,null,f)),ll._21(802816,null,0,el.k,[ll._5,ll._0,ll.C],{ngForOf:[0,"ngForOf"]},null),(l()(),ll._45(0,["\n    "])),(l()(),ll._45(null,["\n  "]))],function(l,n){l(n,5,0,n.component.panels)},null)}function b(l){return ll._47(0,[(l()(),ll._23(0,null,null,1,"nz-demo-collapse-nest",[],null,null,null,z,tl)),ll._21(114688,null,0,W,[],null,null)],function(l,n){l(n,1,0)},null)}function h(l){return il._47(0,[(l()(),il._23(0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,e,B)),il._21(49152,null,0,sl.a,[cl.a,il.r],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),il._45(0,["\n        "])),(l()(),il._23(0,null,0,1,"p",[],null,null,null,null,null)),(l()(),il._45(null,[""," \u7684\u5185\u5bb9"])),(l()(),il._45(0,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,il._37(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function v(l){return il._47(0,[(l()(),il._45(null,["\n    "])),(l()(),il._23(0,null,null,5,"nz-collapseset",[],null,null,null,t,G)),il._21(49152,null,0,cl.a,[],{nzBordered:[0,"nzBordered"]},null),(l()(),il._45(0,["\n      "])),(l()(),il._17(16777216,null,0,1,null,h)),il._21(802816,null,0,rl.k,[il._5,il._0,il.C],{ngForOf:[0,"ngForOf"]},null),(l()(),il._45(0,["\n    "])),(l()(),il._45(null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,!1),l(n,5,0,u.panels)},null)}function g(l){return il._47(0,[(l()(),il._23(0,null,null,1,"nz-demo-collapse-border",[],null,null,null,v,pl)),il._21(114688,null,0,ol,[],null,null)],function(l,n){l(n,1,0)},null)}function x(l){return ml._47(0,[(l()(),ml._23(0,null,null,6,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,e,B)),ml._21(49152,null,0,fl.a,[zl.a,ml.r],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),ml._21(278528,null,0,bl.o,[ml.D,ml.r,ml.Q],{ngStyle:[0,"ngStyle"]},null),(l()(),ml._45(0,["\n        "])),(l()(),ml._23(0,null,0,1,"p",[],null,null,null,null,null)),(l()(),ml._45(null,[""," \u7684\u5185\u5bb9"])),(l()(),ml._45(0,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active),l(n,2,0,n.context.$implicit.customStyle)},function(l,n){l(n,0,0,!0,ml._37(n,1).nzDisabled),l(n,5,0,n.context.$implicit.name)})}function T(l){return ml._47(0,[(l()(),ml._45(null,["\n    "])),(l()(),ml._23(0,null,null,5,"nz-collapseset",[],null,null,null,t,G)),ml._21(49152,null,0,zl.a,[],{nzBordered:[0,"nzBordered"]},null),(l()(),ml._45(0,["\n      "])),(l()(),ml._17(16777216,null,0,1,null,x)),ml._21(802816,null,0,bl.k,[ml._5,ml._0,ml.C],{ngForOf:[0,"ngForOf"]},null),(l()(),ml._45(0,["\n    "])),(l()(),ml._45(null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,!1),l(n,5,0,u.panels)},null)}function y(l){return ml._47(0,[(l()(),ml._23(0,null,null,1,"nz-demo-collapse-custom",[],null,null,null,T,vl)),ml._21(114688,null,0,dl,[],null,null)],function(l,n){l(n,1,0)},null)}function C(l){return xl._47(0,[(l()(),xl._23(0,null,null,251,"article",[],null,null,null,null,null)),(l()(),xl._45(null,["\n  "])),(l()(),xl._23(0,null,null,31,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),xl._45(null,["Collapse \u6298\u53e0\u9762\u677f"])),(l()(),xl._45(null,["\n    "])),(l()(),xl._23(0,null,null,22,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),xl._45(null,["\u53ef\u4ee5\u6298\u53e0/\u5c55\u5f00\u7684\u5185\u5bb9\u533a\u57df\u3002"])),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,4,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),xl._45(null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n\n      "])),(l()(),xl._23(0,null,null,11,"ul",[],null,null,null,null,null)),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),xl._45(null,["\u5bf9\u590d\u6742\u533a\u57df\u8fdb\u884c\u5206\u7ec4\u548c\u9690\u85cf\uff0c\u4fdd\u6301\u9875\u9762\u7684\u6574\u6d01\u3002"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,4,"li",[],null,null,null,null,null)),(l()(),xl._23(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),xl._45(null,["\u624b\u98ce\u7434"])),(l()(),xl._45(null,[" \u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6298\u53e0\u9762\u677f\uff0c\u53ea\u5141\u8bb8\u5355\u4e2a\u5185\u5bb9\u533a\u57df\u5c55\u5f00\u3002"])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._23(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),xl._45(null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),xl._23(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),xl._45(null,["\n  "])),(l()(),xl._45(null,["\n  "])),(l()(),xl._23(0,null,null,71,"div",[["nz-row",""]],null,null,null,Tl.b,Tl.a)),xl._21(114688,null,0,yl.a,[xl.r,xl.R],{nzGutter:[0,"nzGutter"]},null),(l()(),xl._45(0,["\n    "])),(l()(),xl._23(0,null,0,67,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),xl._21(606208,null,0,Cl.a,[xl.r,[2,yl.a],xl.R],{nzSpan:[0,"nzSpan"]},null),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,11,"nz-code-box",[["id","components-collapse-demo-basic"]],null,null,null,kl.b,kl.a)),xl._21(114688,null,0,Al.a,[Ol.c,xl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,0,1,"nz-demo-collapse-basic",[["demo",""]],null,null,null,s,Z)),xl._21(114688,null,0,L,[],null,null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),xl._45(null,["\u53ef\u4ee5\u540c\u65f6\u5c55\u5f00\u591a\u4e2a\u9762\u677f\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u9ed8\u8ba4\u5c55\u5f00\u4e86\u7b2c\u4e00\u4e2a\u3002"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,11,"nz-code-box",[["id","components-collapse-demo-accordion"]],null,null,null,kl.b,kl.a)),xl._21(114688,null,0,Al.a,[Ol.c,xl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,0,1,"nz-demo-collapse-accordion",[["demo",""]],null,null,null,_,X)),xl._21(114688,null,0,K,[],null,null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),xl._45(null,["\u624b\u98ce\u7434\uff0c\u6bcf\u6b21\u53ea\u6253\u5f00\u4e00\u4e2atab\u3002\u9ed8\u8ba4\u6253\u5f00\u7b2c\u4e00\u4e2a\u3002"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,11,"nz-code-box",[["id","components-collapse-demo-nest"]],null,null,null,kl.b,kl.a)),xl._21(114688,null,0,Al.a,[Ol.c,xl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,0,1,"nz-demo-collapse-nest",[["demo",""]],null,null,null,z,tl)),xl._21(114688,null,0,W,[],null,null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),xl._45(null,["\u5d4c\u5957\u6298\u53e0\u9762\u677f\u3002"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,11,"nz-code-box",[["id","components-collapse-demo-border"]],null,null,null,kl.b,kl.a)),xl._21(114688,null,0,Al.a,[Ol.c,xl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,0,1,"nz-demo-collapse-border",[["demo",""]],null,null,null,v,pl)),xl._21(114688,null,0,ol,[],null,null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),xl._45(null,["\u4e00\u5957\u6ca1\u6709\u8fb9\u6846\u7684\u7b80\u6d01\u6837\u5f0f\u3002"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,11,"nz-code-box",[["id","components-collapse-demo-custom"]],null,null,null,kl.b,kl.a)),xl._21(114688,null,0,Al.a,[Ol.c,xl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,0,1,"nz-demo-collapse-custom",[["demo",""]],null,null,null,T,vl)),xl._21(114688,null,0,dl,[],null,null),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),xl._45(null,["\u81ea\u5b9a\u4e49\u5404\u4e2a\u9762\u677f\u7684\u80cc\u666f\u8272\u3001\u5706\u89d2\u548c\u8fb9\u8ddd\u3002"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._45(0,["\n  "])),(l()(),xl._45(null,["\n  "])),(l()(),xl._23(0,null,null,142,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),xl._45(null,["\n    "])),(l()(),xl._23(0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),xl._45(null,["API"])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._23(0,null,null,4,"h3",[["id","nz-collapseset"]],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),xl._45(null,["nz-collapseset"])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._23(0,null,null,52,"table",[],null,null,null,null,null)),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u53c2\u6570"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u8bf4\u660e"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u7c7b\u578b"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,31,"tbody",[],null,null,null,null,null)),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["nzBordered"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["\u662f\u5426\u6709\u8fb9\u6846"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["Boolean"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["true"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["nzAccordion"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["\u662f\u5426\u662f\u624b\u98ce\u7434\u7c7b\u578b"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["Boolean"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["false"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._23(0,null,null,4,"h3",[["id","Collapse.Panel"]],null,null,null,null,null)),(l()(),xl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),xl._45(null,["nz-collapse"])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._23(0,null,null,67,"table",[],null,null,null,null,null)),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u53c2\u6570"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u8bf4\u660e"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u7c7b\u578b"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),xl._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._23(0,null,null,46,"tbody",[],null,null,null,null,null)),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["nzTitle"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["\u9762\u677f\u5934\u5185\u5bb9"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["String"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["-"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["nzActive"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["\u5f53\u524dtab\u662f\u5426\u88ab\u9009\u4e2d"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["Boolean"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["false"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n        "])),(l()(),xl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["nzDisabled"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["\u5f53\u524dtab\u662f\u5426\u7981\u6b62\u9009\u4e2d"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["Boolean"])),(l()(),xl._45(null,["\n          "])),(l()(),xl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),xl._45(null,["false"])),(l()(),xl._45(null,["\n        "])),(l()(),xl._45(null,["\n      "])),(l()(),xl._45(null,["\n    "])),(l()(),xl._45(null,["\n  "])),(l()(),xl._45(null,["\n"])),(l()(),xl._45(null,["\n"]))],function(l,n){var u=n.component;l(n,36,0,8);l(n,39,0,24);l(n,42,0,"\u6298\u53e0\u9762\u677f",u.NzDemoCollapseBasicCode),l(n,45,0);l(n,55,0,"\u624b\u98ce\u7434",u.NzDemoCollapseAccordionCode),l(n,58,0);l(n,68,0,"\u9762\u677f\u5d4c\u5957",u.NzDemoCollapseNestCode),l(n,71,0);l(n,81,0,"\u7b80\u6d01\u98ce\u683c",u.NzDemoCollapseBorderCode),l(n,84,0);l(n,94,0,"\u81ea\u5b9a\u4e49\u9762\u677f",u.NzDemoCollapseCustomCode),l(n,97,0)},function(l,n){l(n,38,0,xl._37(n,39).paddingLeft,xl._37(n,39).paddingRight)})}function k(l){return xl._47(0,[(l()(),xl._23(0,null,null,1,"nz-demo-collapse",[],null,null,null,C,Pl)),xl._21(114688,null,0,gl,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var A=function(){function l(){}return l}(),O=[""],D=u("/oeL"),P=u("Z29M"),I=u("yUkG"),M=[],B=D._20({encapsulation:2,styles:M,data:{animation:[{type:7,name:"collapseState",definitions:[{type:0,name:"inactive",styles:{type:6,styles:{opacity:"0",height:0},offset:null}},{type:0,name:"active",styles:{type:6,styles:{opacity:"1",height:"*"},offset:null}},{type:1,expr:"inactive => active",animation:{type:4,styles:null,timings:"150ms ease-in"},options:null},{type:1,expr:"active => inactive",animation:{type:4,styles:null,timings:"150ms ease-out"},options:null}],options:{}}]}}),F=(D._18("nz-collapse",P.a,a,{nzTitle:"nzTitle",nzDisabled:"nzDisabled",nzActive:"nzActive"},{},["*"]),['.ant-collapse{background-color:#f7f7f7;border-radius:4px;border:1px solid #d9d9d9;border-bottom:0}.ant-collapse>.ant-collapse-item{border-bottom:1px solid #d9d9d9}.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:0 0 4px 4px}.ant-collapse>.ant-collapse-item>.ant-collapse-header{line-height:22px;padding:8px 0 8px 32px;color:rgba(0,0,0,.85);cursor:pointer;position:relative;transition:all .3s}.ant-collapse>.ant-collapse-item>.ant-collapse-header .arrow{font-size:12px;font-size:9px\\9;-webkit-transform:scale(.75) rotate(0);transform:scale(.75) rotate(0);-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=1, M12=0, M21=0, M22=1)";zoom:1;font-style:normal;vertical-align:baseline;text-align:center;text-transform:none;line-height:1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;color:rgba(0,0,0,.43);display:inline-block;font-weight:700;line-height:40px;vertical-align:middle;transition:-webkit-transform .24s;transition:transform .24s;transition:transform .24s,-webkit-transform .24s;top:0;left:16px}:root .ant-collapse>.ant-collapse-item>.ant-collapse-header .arrow{-webkit-filter:none;filter:none;font-size:12px}.ant-collapse>.ant-collapse-item>.ant-collapse-header .arrow:before{display:block;font-family:anticon!important;content:"\\E61F"}.ant-collapse-anim-active{transition:height .2s cubic-bezier(.215,.61,.355,1)}.ant-collapse-content{overflow:hidden;color:rgba(0,0,0,.65);padding:0 16px;background-color:#fff}.ant-collapse-content>.ant-collapse-content-box{padding-top:16px;padding-bottom:16px}.ant-collapse-content-inactive{display:none}.ant-collapse-item:last-child>.ant-collapse-content{border-radius:0 0 4px 4px}.ant-collapse>.ant-collapse-item>.ant-collapse-header[aria-expanded=true] .arrow{display:inline-block;font-size:12px;font-size:9px\\9;-webkit-transform:scale(.75) rotate(90deg);transform:scale(.75) rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.00000000000000006123, M12=-1, M21=1, M22=0.00000000000000006123)";zoom:1}:root .ant-collapse>.ant-collapse-item>.ant-collapse-header[aria-expanded=true] .arrow{-webkit-filter:none;filter:none;font-size:12px}.ant-collapse-borderless{background-color:#fff;border:0}.ant-collapse-borderless>.ant-collapse-item-active{border:0}.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content{background-color:transparent;border-top:1px solid #d9d9d9}.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-header{transition:all .3s}.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-header:hover{background-color:#f7f7f7}.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header,.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header>.arrow{cursor:not-allowed;color:rgba(0,0,0,.25);background-color:#f7f7f7}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:active{background-color:#eee}']),w=["nz-collapse{display:block}"],S=u("/oeL"),N=u("yUkG"),$=[F,w],G=S._20({encapsulation:2,styles:$,data:{}}),L=(S._18("nz-collapseset",N.a,o,{nzAccordion:"nzAccordion",nzBordered:"nzBordered"},{},["*"]),function(){function l(){this.panels=[{active:!0,name:"This is panel header 1",disabled:!1,childPanel:[{active:!1,name:"This is panel header 1-1"}]},{active:!1,disabled:!0,name:"This is panel header 2"},{active:!0,disabled:!1,name:"This is panel header 3"}]}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),U=u("/oeL"),q=u("Z29M"),j=u("yUkG"),R=u("qbdv"),Q=[],Z=U._20({encapsulation:2,styles:Q,data:{}}),K=(U._18("nz-demo-collapse-basic",L,c,{},{},[]),function(){function l(){this.panels=[{active:!0,name:"This is panel header 1",childPanel:[{active:!1,name:"This is panel header 1-1"}]},{active:!1,name:"This is panel header 2"},{active:!1,name:"This is panel header 3"}]}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),H=u("/oeL"),Y=u("Z29M"),E=u("yUkG"),J=u("qbdv"),V=[],X=H._20({encapsulation:2,styles:V,data:{}}),W=(H._18("nz-demo-collapse-accordion",K,p,{},{},[]),function(){function l(){this.panels=[{active:!0,disabled:!1,name:"This is panel header 1",childPanel:[{active:!0,name:"This is panel header 1-1"},{active:!1,name:"This is panel header 1-2"}]},{active:!1,disabled:!0,name:"This is panel header 2"},{active:!1,disabled:!1,name:"This is panel header 3"}]}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),ll=u("/oeL"),nl=u("Z29M"),ul=u("yUkG"),el=u("qbdv"),al=[],tl=ll._20({encapsulation:2,styles:al,data:{}}),ol=(ll._18("nz-demo-collapse-nest",W,b,{},{},[]),function(){function l(){this.panels=[{active:!0,disabled:!1,name:"This is panel header 1",childPannel:[{active:!1,disabled:!0,name:"This is panel header 1-1"}]},{active:!1,disabled:!0,name:"This is panel header 2"},{active:!1,disabled:!1,name:"This is panel header 3"}]}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),il=u("/oeL"),sl=u("Z29M"),cl=u("yUkG"),rl=u("qbdv"),_l=[],pl=il._20({encapsulation:2,styles:_l,data:{}}),dl=(il._18("nz-demo-collapse-border",ol,g,{},{},[]),function(){function l(){this.panels=[{active:!0,disabled:!1,name:"This is panel header 1",customStyle:{background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:"0px"}},{active:!1,disabled:!0,name:"This is panel header 2",customStyle:{background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:"0px"}},{active:!1,disabled:!1,name:"This is panel header 3",customStyle:{background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:"0px"}}]}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),ml=u("/oeL"),fl=u("Z29M"),zl=u("yUkG"),bl=u("qbdv"),hl=[],vl=ml._20({encapsulation:2,styles:hl,data:{}}),gl=(ml._18("nz-demo-collapse-custom",dl,y,{},{},[]),function(){function l(){this.NzDemoCollapseBasicCode=u("+PAa"),this.NzDemoCollapseNestCode=u("KG6z"),this.NzDemoCollapseAccordionCode=u("YycQ"),this.NzDemoCollapseBorderCode=u("uE0U"),this.NzDemoCollapseCustomCode=u("ArLt")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),xl=u("/oeL"),Tl=u("AQI4"),yl=u("QJaU"),Cl=u("HzDP"),kl=u("xfRN"),Al=u("d0SC"),Ol=u("qbdv"),Dl=[O],Pl=xl._20({encapsulation:2,styles:Dl,data:{}}),Il=xl._18("nz-demo-collapse",gl,k,{},{},[]),Ml=function(){function l(){}return l}();u.d(n,"NzDemoCollapseModuleNgFactory",function(){return En});var Bl=u("/oeL"),Fl=u("gNns"),wl=u("VMe7"),Sl=u("ZjYu"),Nl=u("BRsn"),$l=u("1w55"),Gl=u("tdcY"),Ll=u("qbdv"),Ul=u("bm2B"),ql=u("p4Sk"),jl=u("YtGb"),Rl=u("Bi2f"),Ql=u("6lGd"),Zl=u("Dj3/"),Kl=u("yK6y"),Hl=u("RaX4"),Yl=u("Fn2S"),El=u("7bMD"),Jl=u("71yQ"),Vl=u("jhj7"),Xl=u("4FjH"),Wl=u("v3Ml"),ln=u("KvRT"),nn=u("fFfs"),un=u("x1IG"),en=u("AuvO"),an=u("ICnb"),tn=u("nQgM"),on=u("AMM9"),sn=u("x9cu"),cn=u("Abwc"),rn=u("Gb4R"),_n=u("ATGq"),pn=u("rMvC"),dn=u("PIhm"),mn=u("G5xS"),fn=u("tGoV"),zn=u("Bd7q"),bn=u("HbPf"),hn=u("+dpF"),vn=u("t6og"),gn=u("0oag"),xn=u("0MmT"),Tn=u("0SjK"),yn=u("UWIb"),Cn=u("FP9i"),kn=u("8zAG"),An=u("OtIO"),On=u("V5qy"),Dn=u("BGFw"),Pn=u("qa79"),In=u("DJ6J"),Mn=u("A6WS"),Bn=u("nGV/"),Fn=u("4I7f"),wn=u("LLhl"),Sn=u("+35O"),Nn=u("TRYS"),$n=u("NGUZ"),Gn=u("Hjq/"),Ln=u("Cjk6"),Un=u("6eTp"),qn=u("pORy"),jn=u("aQzP"),Rn=u("Pgvs"),Qn=u("BkNc"),Zn=u("jlvU"),Kn=u("ZgIK"),Hn=u("mQB5"),Yn=u("9rok"),En=Bl._19(A,[],function(l){return Bl._34([Bl._35(512,Bl.n,Bl._15,[[8,[Fl.a,wl.a,Sl.a,Nl.a,$l.a,Gl.a,Il]],[3,Bl.n],Bl.I]),Bl._35(4608,Ll.n,Ll.m,[Bl.E]),Bl._35(4608,Ul.u,Ul.u,[]),Bl._35(4608,ql.l,ql.l,[]),Bl._35(5120,jl.b,jl.a,[[3,jl.b],Bl.K,ql.l]),Bl._35(5120,Rl.c,Rl.b,[[3,Rl.c],jl.b]),Bl._35(4608,Ql.a,Ql.a,[jl.b,Rl.c]),Bl._35(5120,Zl.c,Zl.b,[[3,Zl.c]]),Bl._35(4608,Kl.a,Kl.a,[Rl.c]),Bl._35(4608,Hl.a,Hl.a,[Ql.a,Zl.c,Bl.n,Kl.a,Bl.g,Bl.A,Bl.K]),Bl._35(5120,Yl.c,Yl.b,[Hl.a,Ll.c,[3,Yl.c]]),Bl._35(4608,El.a,El.a,[]),Bl._35(4608,Jl.a,Jl.a,[Bl.g,Bl.n]),Bl._35(4608,Vl.a,Vl.a,[]),Bl._35(4608,ql.i,ql.i,[]),Bl._35(4608,Xl.a,Xl.a,[]),Bl._35(512,Ll.b,Ll.b,[]),Bl._35(512,Wl.a,Wl.a,[]),Bl._35(512,ln.a,ln.a,[]),Bl._35(512,nn.a,nn.a,[]),Bl._35(512,Ul.s,Ul.s,[]),Bl._35(512,Ul.i,Ul.i,[]),Bl._35(512,ql.m,ql.m,[]),Bl._35(512,un.a,un.a,[]),Bl._35(512,en.d,en.d,[]),Bl._35(512,an.a,an.a,[]),Bl._35(512,tn.a,tn.a,[]),Bl._35(512,on.a,on.a,[]),Bl._35(512,sn.a,sn.a,[]),Bl._35(512,cn.a,cn.a,[]),Bl._35(512,rn.a,rn.a,[]),Bl._35(512,_n.a,_n.a,[]),Bl._35(512,pn.a,pn.a,[]),Bl._35(512,dn.a,dn.a,[]),Bl._35(512,mn.a,mn.a,[]),Bl._35(512,fn.a,fn.a,[]),Bl._35(512,zn.a,zn.a,[]),Bl._35(512,bn.a,bn.a,[]),Bl._35(512,hn.a,hn.a,[]),Bl._35(512,vn.a,vn.a,[]),Bl._35(512,gn.a,gn.a,[]),Bl._35(512,xn.a,xn.a,[]),Bl._35(512,Tn.a,Tn.a,[]),Bl._35(512,yn.a,yn.a,[]),Bl._35(512,Cn.a,Cn.a,[]),Bl._35(512,kn.a,kn.a,[]),Bl._35(512,An.a,An.a,[]),Bl._35(512,On.a,On.a,[]),Bl._35(512,Dn.a,Dn.a,[]),Bl._35(512,Pn.a,Pn.a,[]),Bl._35(512,In.a,In.a,[]),Bl._35(512,ql.n,ql.n,[]),Bl._35(512,ql.k,ql.k,[]),Bl._35(512,Mn.a,Mn.a,[]),Bl._35(512,Bn.a,Bn.a,[]),Bl._35(512,Fn.a,Fn.a,[]),Bl._35(512,wn.a,wn.a,[]),Bl._35(512,Sn.a,Sn.a,[]),Bl._35(512,Nn.a,Nn.a,[]),Bl._35(512,$n.a,$n.a,[]),Bl._35(512,Gn.a,Gn.a,[]),Bl._35(512,Ln.a,Ln.a,[]),Bl._35(512,Un.a,Un.a,[]),Bl._35(512,qn.a,qn.a,[]),Bl._35(512,jn.a,jn.a,[]),Bl._35(512,Rn.a,Rn.a,[]),Bl._35(512,Qn.o,Qn.o,[[2,Qn.t],[2,Qn.l]]),Bl._35(512,Ml,Ml,[]),Bl._35(512,Zn.a,Zn.a,[]),Bl._35(512,Kn.a,Kn.a,[]),Bl._35(512,A,A,[]),Bl._35(256,Hn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),Bl._35(256,Yn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),Bl._35(1024,Qn.j,function(){return[[{path:"",component:gl}]]},[])])})},ArLt:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-collapse-custom',\n  template: `\n    <nz-collapseset  [nzBordered]=\"false\">\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\"\n                   [ngStyle]=\"panel.customStyle\">\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\n      </nz-collapse>\n    </nz-collapseset>\n  `,\n  styles: []\n})\nexport class NzDemoCollapseCustomComponent implements OnInit {\n  panels = [\n    {\n      active: true,\n      disabled: false,\n      name: 'This is panel header 1',\n      customStyle: {\n        'background': '#f7f7f7',\n        'border-radius': '4px',\n        'margin-bottom': '24px',\n        'border': '0px'\n      }\n    },\n    {\n      active: false,\n      disabled: true,\n      name: 'This is panel header 2',\n      customStyle: {\n        'background': '#f7f7f7',\n        'border-radius': '4px',\n        'margin-bottom': '24px',\n        'border': '0px'\n      }\n    },\n    {\n      active: false,\n      disabled: false,\n      name: 'This is panel header 3',\n      customStyle: {\n        'background': '#f7f7f7',\n        'border-radius': '4px',\n        'margin-bottom': '24px',\n        'border': '0px'\n      }\n    }\n  ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},KG6z:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-collapse-nest',\n  template: `\n    <nz-collapseset>\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\">\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\n        <div *ngIf=\"panel.childPanel&&panel.childPanel.length>0\">\n          <nz-collapseset>\n            <nz-collapse *ngFor=\"let childPanel of panel.childPanel\" [nzTitle]=\"childPanel.name\"\n                         [nzActive]=\"childPanel.active\">\n              <p>{{childPanel.name}} \u7684\u5185\u5bb9</p>\n            </nz-collapse>\n          </nz-collapseset>\n        </div>\n      </nz-collapse>\n    </nz-collapseset>\n  `,\n  styles: []\n})\nexport class NzDemoCollapseNestComponent implements OnInit {\n  panels = [\n    {\n      active: true,\n      disabled: false,\n      name: 'This is panel header 1',\n      childPanel: [\n        {\n          active: true,\n          name: 'This is panel header 1-1'\n        },\n        {\n          active: false,\n          name: 'This is panel header 1-2'\n        }\n      ]\n    },\n    {\n      active: false,\n      disabled: true,\n      name: 'This is panel header 2'\n    },\n    {\n      active: false,\n      disabled: false,\n      name: 'This is panel header 3'\n    }\n  ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},YycQ:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-collapse-accordion',\n  template: `\n    <nz-collapseset [nzAccordion]=\"true\">\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\">\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\n      </nz-collapse>\n    </nz-collapseset>\n  `,\n  styles: []\n})\nexport class NzDemoCollapseAccordionComponent implements OnInit {\n  panels = [\n    {\n      active: true,\n      name: 'This is panel header 1',\n      childPanel: [\n        {\n          active: false,\n          name: 'This is panel header 1-1'\n        }\n      ]\n    },\n    {\n      active: false,\n      name: 'This is panel header 2'\n    },\n    {\n      active: false,\n      name: 'This is panel header 3'\n    }\n  ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},uE0U:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-collapse-border',\n  template: `\n    <nz-collapseset [nzBordered]=\"false\">\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\">\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\n      </nz-collapse>\n    </nz-collapseset>\n  `,\n  styles: []\n})\nexport class NzDemoCollapseBorderComponent implements OnInit {\n  panels = [\n    {\n      active: true,\n      disabled: false,\n      name: 'This is panel header 1',\n      childPannel: [\n        {\n          active: false,\n          disabled: true,\n          name: 'This is panel header 1-1'\n        }\n      ]\n    },\n    {\n      active: false,\n      disabled: true,\n      name: 'This is panel header 2'\n    },\n    {\n      active: false,\n      disabled: false,\n      name: 'This is panel header 3'\n    }\n  ];\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"}});