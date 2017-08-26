webpackJsonp([27],{Hm5Y:function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-switch-text\',\n  template: `\n    <nz-switch [ngModel]="true">\n      <i class=" anticon anticon-check" checked></i>\n      <i class=" anticon anticon-cross" unchecked></i>\n    </nz-switch>\n    <div style="margin-top:8px;">\n      <nz-switch [ngModel]="false">\n        <span checked>\u5f00</span>\n        <span unchecked>\u5173</span>\n      </nz-switch>\n    </div>\n  `,\n  styles  : []\n})\nexport class NzDemoSwitchTextComponent implements OnInit {\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},SRX3:function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-switch-size\',\n  template: `\n    <nz-switch [ngModel]="true"></nz-switch>\n    <div style="margin-top:8px;">\n      <nz-switch [nzSize]="\'small\'" [ngModel]="false"></nz-switch>\n    </div>\n  `,\n  styles  : []\n})\nexport class NzDemoSwitchSizeComponent implements OnInit {\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},"Ymc/":function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-switch-disabled\',\n  template: `\n    <nz-switch [(ngModel)]="switchValue" [nzDisabled]="isDisabled"></nz-switch>\n    <div style="margin-top:8px;">\n      <button nz-button [nzType]="\'primary\'" (click)="toggleDisabled()">Toggle disabled</button>\n    </div>`,\n  styles  : []\n})\nexport class NzDemoSwitchDisabledComponent implements OnInit {\n  switchValue = false;\n  isDisabled = true;\n  toggleDisabled = () => {\n    this.isDisabled = !this.isDisabled;\n  }\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},Zrfu:function(l,n,u){"use strict";function t(l){return m._47(0,[(l()(),m._45(null,["\n    "])),(l()(),m._23(0,null,null,5,"nz-switch",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"]],function(l,n,u){var t=!0,_=l.component;if("click"===n){t=!1!==m._37(l,2).onClick(u)&&t}if("ngModelChange"===n){t=!1!==(_.switchValue=u)&&t}return t},z.b,z.a)),m._21(114688,null,0,f.a,[],null,null),m._42(1024,null,b.j,function(l){return[l]},[f.a]),m._21(671744,null,0,b.o,[[8,null],[8,null],[8,null],[2,b.j]],{model:[0,"model"]},{update:"ngModelChange"}),m._42(2048,null,b.k,null,[b.o]),m._21(16384,null,0,b.l,[b.k],null,null)],function(l,n){var u=n.component;l(n,2,0),l(n,4,0,u.switchValue)},function(l,n){l(n,1,0,m._37(n,6).ngClassUntouched,m._37(n,6).ngClassTouched,m._37(n,6).ngClassPristine,m._37(n,6).ngClassDirty,m._37(n,6).ngClassValid,m._37(n,6).ngClassInvalid,m._37(n,6).ngClassPending)})}function _(l){return m._47(0,[(l()(),m._23(0,null,null,1,"nz-demo-switch-basic",[],null,null,null,t,w)),m._21(114688,null,0,p,[],null,null)],function(l,n){l(n,1,0)},null)}function i(l){return v._47(0,[(l()(),v._45(null,["\n    "])),(l()(),v._23(0,null,null,10,"nz-switch",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==v._37(l,2).onClick(u)&&t}return t},y.b,y.a)),v._21(114688,null,0,D.a,[],null,null),v._42(1024,null,x.j,function(l){return[l]},[D.a]),v._21(671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{model:[0,"model"]},null),v._42(2048,null,x.k,null,[x.o]),v._21(16384,null,0,x.l,[x.k],null,null),(l()(),v._45(null,["\n      "])),(l()(),v._23(0,null,0,0,"i",[["checked",""],["class"," anticon anticon-check"]],null,null,null,null,null)),(l()(),v._45(null,["\n      "])),(l()(),v._23(0,null,1,0,"i",[["class"," anticon anticon-cross"],["unchecked",""]],null,null,null,null,null)),(l()(),v._45(null,["\n    "])),(l()(),v._45(null,["\n    "])),(l()(),v._23(0,null,null,15,"div",[["style","margin-top:8px;"]],null,null,null,null,null)),(l()(),v._45(null,["\n      "])),(l()(),v._23(0,null,null,12,"nz-switch",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==v._37(l,16).onClick(u)&&t}return t},y.b,y.a)),v._21(114688,null,0,D.a,[],null,null),v._42(1024,null,x.j,function(l){return[l]},[D.a]),v._21(671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{model:[0,"model"]},null),v._42(2048,null,x.k,null,[x.o]),v._21(16384,null,0,x.l,[x.k],null,null),(l()(),v._45(null,["\n        "])),(l()(),v._23(0,null,0,1,"span",[["checked",""]],null,null,null,null,null)),(l()(),v._45(null,["\u5f00"])),(l()(),v._45(null,["\n        "])),(l()(),v._23(0,null,1,1,"span",[["unchecked",""]],null,null,null,null,null)),(l()(),v._45(null,["\u5173"])),(l()(),v._45(null,["\n      "])),(l()(),v._45(null,["\n    "])),(l()(),v._45(null,["\n  "]))],function(l,n){l(n,2,0);l(n,4,0,!0),l(n,16,0);l(n,18,0,!1)},function(l,n){l(n,1,0,v._37(n,6).ngClassUntouched,v._37(n,6).ngClassTouched,v._37(n,6).ngClassPristine,v._37(n,6).ngClassDirty,v._37(n,6).ngClassValid,v._37(n,6).ngClassInvalid,v._37(n,6).ngClassPending),l(n,15,0,v._37(n,20).ngClassUntouched,v._37(n,20).ngClassTouched,v._37(n,20).ngClassPristine,v._37(n,20).ngClassDirty,v._37(n,20).ngClassValid,v._37(n,20).ngClassInvalid,v._37(n,20).ngClassPending)})}function e(l){return v._47(0,[(l()(),v._23(0,null,null,1,"nz-demo-switch-text",[],null,null,null,i,I)),v._21(114688,null,0,k,[],null,null)],function(l,n){l(n,1,0)},null)}function a(l){return T._47(0,[(l()(),T._45(null,["\n    "])),(l()(),T._23(0,null,null,5,"nz-switch",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"]],function(l,n,u){var t=!0,_=l.component;if("click"===n){t=!1!==T._37(l,2).onClick(u)&&t}if("ngModelChange"===n){t=!1!==(_.switchValue=u)&&t}return t},M.b,M.a)),T._21(114688,null,0,O.a,[],{nzDisabled:[0,"nzDisabled"]},null),T._42(1024,null,j.j,function(l){return[l]},[O.a]),T._21(671744,null,0,j.o,[[8,null],[8,null],[8,null],[2,j.j]],{model:[0,"model"]},{update:"ngModelChange"}),T._42(2048,null,j.k,null,[j.o]),T._21(16384,null,0,j.l,[j.k],null,null),(l()(),T._45(null,["\n    "])),(l()(),T._23(0,null,null,5,"div",[["style","margin-top:8px;"]],null,null,null,null,null)),(l()(),T._45(null,["\n      "])),(l()(),T._23(0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0,_=l.component;if("click"===n){t=!1!==T._37(l,11)._onClick()&&t}if("click"===n){t=!1!==_.toggleDisabled()&&t}return t},N.b,N.a)),T._21(1097728,null,0,V.a,[T.r,T.R],{nzType:[0,"nzType"]},null),(l()(),T._45(0,["Toggle disabled"])),(l()(),T._45(null,["\n    "]))],function(l,n){var u=n.component;l(n,2,0,u.isDisabled),l(n,4,0,u.switchValue);l(n,11,0,"primary")},function(l,n){l(n,1,0,T._37(n,6).ngClassUntouched,T._37(n,6).ngClassTouched,T._37(n,6).ngClassPristine,T._37(n,6).ngClassDirty,T._37(n,6).ngClassValid,T._37(n,6).ngClassInvalid,T._37(n,6).ngClassPending)})}function o(l){return T._47(0,[(l()(),T._23(0,null,null,1,"nz-demo-switch-disabled",[],null,null,null,a,B)),T._21(114688,null,0,P,[],null,null)],function(l,n){l(n,1,0)},null)}function c(l){return A._47(0,[(l()(),A._45(null,["\n    "])),(l()(),A._23(0,null,null,5,"nz-switch",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==A._37(l,2).onClick(u)&&t}return t},G.b,G.a)),A._21(114688,null,0,H.a,[],null,null),A._42(1024,null,U.j,function(l){return[l]},[H.a]),A._21(671744,null,0,U.o,[[8,null],[8,null],[8,null],[2,U.j]],{model:[0,"model"]},null),A._42(2048,null,U.k,null,[U.o]),A._21(16384,null,0,U.l,[U.k],null,null),(l()(),A._45(null,["\n    "])),(l()(),A._23(0,null,null,8,"div",[["style","margin-top:8px;"]],null,null,null,null,null)),(l()(),A._45(null,["\n      "])),(l()(),A._23(0,null,null,5,"nz-switch",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==A._37(l,11).onClick(u)&&t}return t},G.b,G.a)),A._21(114688,null,0,H.a,[],{nzSize:[0,"nzSize"]},null),A._42(1024,null,U.j,function(l){return[l]},[H.a]),A._21(671744,null,0,U.o,[[8,null],[8,null],[8,null],[2,U.j]],{model:[0,"model"]},null),A._42(2048,null,U.k,null,[U.o]),A._21(16384,null,0,U.l,[U.k],null,null),(l()(),A._45(null,["\n    "])),(l()(),A._45(null,["\n  "]))],function(l,n){l(n,2,0);l(n,4,0,!0);l(n,11,0,"small");l(n,13,0,!1)},function(l,n){l(n,1,0,A._37(n,6).ngClassUntouched,A._37(n,6).ngClassTouched,A._37(n,6).ngClassPristine,A._37(n,6).ngClassDirty,A._37(n,6).ngClassValid,A._37(n,6).ngClassInvalid,A._37(n,6).ngClassPending),l(n,10,0,A._37(n,15).ngClassUntouched,A._37(n,15).ngClassTouched,A._37(n,15).ngClassPristine,A._37(n,15).ngClassDirty,A._37(n,15).ngClassValid,A._37(n,15).ngClassInvalid,A._37(n,15).ngClassPending)})}function s(l){return A._47(0,[(l()(),A._23(0,null,null,1,"nz-demo-switch-size",[],null,null,null,c,Z)),A._21(114688,null,0,R,[],null,null)],function(l,n){l(n,1,0)},null)}function d(l){return F._47(0,[(l()(),F._23(0,null,null,237,"article",[],null,null,null,null,null)),(l()(),F._45(null,["\n  "])),(l()(),F._23(0,null,null,38,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),F._23(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),F._45(null,["Switch \u5f00\u5173"])),(l()(),F._45(null,["\n    "])),(l()(),F._23(0,null,null,29,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),F._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),F._45(null,["\u5f00\u5173\u9009\u62e9\u5668\u3002"])),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,4,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),F._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),F._45(null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,18,"ul",[],null,null,null,null,null)),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),F._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),F._45(null,["\u9700\u8981\u8868\u793a\u5f00\u5173\u72b6\u6001/\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u5207\u6362\u65f6\uff1b"])),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,11,"li",[],null,null,null,null,null)),(l()(),F._23(0,null,null,10,"p",[],null,null,null,null,null)),(l()(),F._45(null,["\u548c "])),(l()(),F._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),F._45(null,["checkbox"])),(l()(),F._45(null,["\u7684\u533a\u522b\u662f\uff0c\u5207\u6362 "])),(l()(),F._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),F._45(null,["switch"])),(l()(),F._45(null,[" \u4f1a\u76f4\u63a5\u89e6\u53d1\u72b6\u6001\u6539\u53d8\uff0c\u800c "])),(l()(),F._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),F._45(null,["checkbox"])),(l()(),F._45(null,[" \u4e00\u822c\u7528\u4e8e\u72b6\u6001\u6807\u8bb0\uff0c\u9700\u8981\u548c\u63d0\u4ea4\u64cd\u4f5c\u914d\u5408\u3002\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n    "])),(l()(),F._45(null,["\n    "])),(l()(),F._23(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),F._45(null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),F._23(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),F._45(null,["\n  "])),(l()(),F._45(null,["\n  "])),(l()(),F._23(0,null,null,64,"div",[["nz-row",""]],null,null,null,K.b,K.a)),F._21(114688,null,0,Q.a,[F.r,F.R],{nzGutter:[0,"nzGutter"]},null),(l()(),F._45(0,["\n    "])),(l()(),F._23(0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),F._21(606208,null,0,X.a,[F.r,[2,Q.a],F.R],{nzSpan:[0,"nzSpan"]},null),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,11,"nz-code-box",[["id","components-switch-demo-basic"]],null,null,null,J.b,J.a)),F._21(114688,null,0,W.a,[E.c,F.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,0,1,"nz-demo-switch-basic",[["demo",""]],null,null,null,t,w)),F._21(114688,null,0,p,[],null,null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),F._45(null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,11,"nz-code-box",[["id","components-switch-demo-text"]],null,null,null,J.b,J.a)),F._21(114688,null,0,W.a,[E.c,F.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,0,1,"nz-demo-switch-text",[["demo",""]],null,null,null,i,I)),F._21(114688,null,0,k,[],null,null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),F._45(null,["\u5e26\u6709\u6587\u5b57\u548c\u56fe\u6807"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n    "])),(l()(),F._45(0,["\n    "])),(l()(),F._23(0,null,0,30,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),F._21(606208,null,0,X.a,[F.r,[2,Q.a],F.R],{nzSpan:[0,"nzSpan"]},null),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,11,"nz-code-box",[["id","components-switch-demo-disabled"]],null,null,null,J.b,J.a)),F._21(114688,null,0,W.a,[E.c,F.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,0,1,"nz-demo-switch-disabled",[["demo",""]],null,null,null,a,B)),F._21(114688,null,0,P,[],null,null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),F._45(null,["nz-switch\u5931\u6548\u72b6\u6001"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,13,"nz-code-box",[["id","components-switch-demo-size"]],null,null,null,J.b,J.a)),F._21(114688,null,0,W.a,[E.c,F.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,0,1,"nz-demo-switch-size",[["demo",""]],null,null,null,c,Z)),F._21(114688,null,0,R,[],null,null),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,1,6,"div",[["intro",""]],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),F._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),F._45(null,["[nzSize]=\"'small'\""])),(l()(),F._45(null,["\u8868\u793a\u5c0f\u53f7\u5f00\u5173"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n    "])),(l()(),F._45(0,["\n  "])),(l()(),F._45(null,["\n  "])),(l()(),F._23(0,null,null,128,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),F._45(null,["\n    "])),(l()(),F._23(0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),F._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),F._45(null,["API"])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n    "])),(l()(),F._45(null,["\n    "])),(l()(),F._23(0,null,null,4,"h3",[["id","Switch"]],null,null,null,null,null)),(l()(),F._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),F._45(null,["nz-switch"])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n    "])),(l()(),F._45(null,["\n    "])),(l()(),F._23(0,null,null,113,"table",[],null,null,null,null,null)),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,19,"thead",[],null,null,null,null,null)),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),F._45(null,["\u53c2\u6570"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),F._45(null,["\u8bf4\u660e"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),F._45(null,["\u7c7b\u578b"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),F._45(null,["\u4ecb\u7ecd"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),F._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n      "])),(l()(),F._23(0,null,null,89,"tbody",[],null,null,null,null,null)),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["ngModel"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["Boolean"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u53cc\u5411\u7ed1\u5b9a"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["false"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["nzSize"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u5f00\u5173\u5927\u5c0f"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["String"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["'default'|'small'"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["'default'"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["nzDisabled"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u5f00\u5173\u662f\u5426\u7981\u7528"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["String"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["'default'|'small'"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["'default'"])),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["checked"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["selector"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u6807\u8bb0\u7b26"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,0,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n        "])),(l()(),F._23(0,null,null,15,"tr",[],null,null,null,null,null)),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["unchecked"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["selector"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\u6807\u8bb0\u7b26"])),(l()(),F._45(null,["\n          "])),(l()(),F._23(0,null,null,0,"td",[],null,null,null,null,null)),(l()(),F._45(null,["\n        "])),(l()(),F._45(null,["\n      "])),(l()(),F._45(null,["\n    "])),(l()(),F._45(null,["\n  "])),(l()(),F._45(null,["\n"])),(l()(),F._45(null,["\n"]))],function(l,n){var u=n.component;l(n,43,0,8);l(n,46,0,12);l(n,49,0,"\u7b80\u5355",u.NzDemoSwitchBasicCode),l(n,52,0);l(n,62,0,"\u6587\u5b57\u548c\u56fe\u6807",u.NzDemoSwitchTextCode),l(n,65,0);l(n,76,0,12);l(n,79,0,"\u4e0d\u53ef\u7528",u.NzDemoSwitchDisabledCode),l(n,82,0);l(n,92,0,"\u5927\u5c0f",u.NzDemoSwitchSizeCode),l(n,95,0)},function(l,n){l(n,45,0,F._37(n,46).paddingLeft,F._37(n,46).paddingRight),l(n,75,0,F._37(n,76).paddingLeft,F._37(n,76).paddingRight)})}function r(l){return F._47(0,[(l()(),F._23(0,null,null,1,"nz-demo-switch",[],null,null,null,d,ll)),F._21(114688,null,0,q,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var g=function(){function l(){}return l}(),h=[""],p=function(){function l(){this.switchValue=!1}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}(),m=u("/oeL"),z=u("LHPX"),f=u("I8uZ"),b=u("bm2B"),C=[],w=m._20({encapsulation:2,styles:C,data:{}}),k=(m._18("nz-demo-switch-basic",p,_,{},{},[]),function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),v=u("/oeL"),y=u("LHPX"),D=u("I8uZ"),x=u("bm2B"),S=[],I=v._20({encapsulation:2,styles:S,data:{}}),P=(v._18("nz-demo-switch-text",k,e,{},{},[]),function(){function l(){var l=this;this.switchValue=!1,this.isDisabled=!0,this.toggleDisabled=function(){l.isDisabled=!l.isDisabled}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),T=u("/oeL"),M=u("LHPX"),O=u("I8uZ"),j=u("bm2B"),N=u("PoiU"),V=u("yojp"),L=[],B=T._20({encapsulation:2,styles:L,data:{}}),R=(T._18("nz-demo-switch-disabled",P,o,{},{},[]),function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),A=u("/oeL"),G=u("LHPX"),H=u("I8uZ"),U=u("bm2B"),Y=[],Z=A._20({encapsulation:2,styles:Y,data:{}}),q=(A._18("nz-demo-switch-size",R,s,{},{},[]),function(){function l(){this.NzDemoSwitchBasicCode=u("bL5Y"),this.NzDemoSwitchDisabledCode=u("Ymc/"),this.NzDemoSwitchSizeCode=u("SRX3"),this.NzDemoSwitchTextCode=u("Hm5Y")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),F=u("/oeL"),K=u("AQI4"),Q=u("QJaU"),X=u("HzDP"),J=u("xfRN"),W=u("d0SC"),E=u("qbdv"),$=[h],ll=F._20({encapsulation:2,styles:$,data:{}}),nl=F._18("nz-demo-switch",q,r,{},{},[]),ul=function(){function l(){}return l}();u.d(n,"NzDemoSwitchModuleNgFactory",function(){return In});var tl=u("/oeL"),_l=u("gNns"),il=u("VMe7"),el=u("ZjYu"),al=u("BRsn"),ol=u("1w55"),cl=u("tdcY"),sl=u("NarQ"),dl=u("bm2B"),rl=u("qbdv"),gl=u("p4Sk"),hl=u("YtGb"),pl=u("Bi2f"),ml=u("6lGd"),zl=u("Dj3/"),fl=u("yK6y"),bl=u("RaX4"),Cl=u("Fn2S"),wl=u("7bMD"),kl=u("71yQ"),vl=u("jhj7"),yl=u("4FjH"),Dl=u("hNpP"),xl=u("f42N"),Sl=u("fc+i"),Il=u("BkNc"),Pl=u("jlvU"),Tl=u("v3Ml"),Ml=u("KvRT"),Ol=u("fFfs"),jl=u("x1IG"),Nl=u("AuvO"),Vl=u("ICnb"),Ll=u("nQgM"),Bl=u("AMM9"),Rl=u("x9cu"),Al=u("Abwc"),Gl=u("Gb4R"),Hl=u("ATGq"),Ul=u("rMvC"),Yl=u("PIhm"),Zl=u("G5xS"),ql=u("tGoV"),Fl=u("Bd7q"),Kl=u("HbPf"),Ql=u("+dpF"),Xl=u("t6og"),Jl=u("0oag"),Wl=u("0MmT"),El=u("0SjK"),$l=u("UWIb"),ln=u("FP9i"),nn=u("8zAG"),un=u("OtIO"),tn=u("V5qy"),_n=u("BGFw"),en=u("qa79"),an=u("DJ6J"),on=u("A6WS"),cn=u("nGV/"),sn=u("4I7f"),dn=u("LLhl"),rn=u("+35O"),gn=u("TRYS"),hn=u("NGUZ"),pn=u("Hjq/"),mn=u("Cjk6"),zn=u("6eTp"),fn=u("pORy"),bn=u("aQzP"),Cn=u("LpTC"),wn=u("YeNB"),kn=u("x7DS"),vn=u("//KT"),yn=u("Pgvs"),Dn=u("ZgIK"),xn=u("mQB5"),Sn=u("9rok"),In=tl._19(g,[],function(l){return tl._34([tl._35(512,tl.n,tl._15,[[8,[nl,_l.a,il.a,el.a,al.a,ol.a,cl.a,sl.a]],[3,tl.n],tl.I]),tl._35(4608,dl.u,dl.u,[]),tl._35(4608,rl.n,rl.m,[tl.E]),tl._35(4608,gl.l,gl.l,[]),tl._35(5120,hl.b,hl.a,[[3,hl.b],tl.K,gl.l]),tl._35(5120,pl.c,pl.b,[[3,pl.c],hl.b]),tl._35(4608,ml.a,ml.a,[hl.b,pl.c]),tl._35(5120,zl.c,zl.b,[[3,zl.c]]),tl._35(4608,fl.a,fl.a,[pl.c]),tl._35(4608,bl.a,bl.a,[ml.a,zl.c,tl.n,fl.a,tl.g,tl.A,tl.K]),tl._35(5120,Cl.c,Cl.b,[bl.a,rl.c,[3,Cl.c]]),tl._35(4608,wl.a,wl.a,[]),tl._35(4608,kl.a,kl.a,[tl.g,tl.n]),tl._35(4608,vl.a,vl.a,[]),tl._35(4608,gl.i,gl.i,[]),tl._35(4608,yl.a,yl.a,[]),tl._35(5120,tl.d,function(l,n){return[Dl.b(l,n)]},[rl.c,[2,Dl.a]]),tl._35(5120,xl.a,xl.b,[Sl.b,[3,xl.a]]),tl._35(512,dl.s,dl.s,[]),tl._35(512,dl.i,dl.i,[]),tl._35(512,Il.o,Il.o,[[2,Il.t],[2,Il.l]]),tl._35(512,ul,ul,[]),tl._35(512,rl.b,rl.b,[]),tl._35(512,Pl.a,Pl.a,[]),tl._35(512,Tl.a,Tl.a,[]),tl._35(512,Ml.a,Ml.a,[]),tl._35(512,Ol.a,Ol.a,[]),tl._35(512,gl.m,gl.m,[]),tl._35(512,jl.a,jl.a,[]),tl._35(512,Nl.d,Nl.d,[]),tl._35(512,Vl.a,Vl.a,[]),tl._35(512,Ll.a,Ll.a,[]),tl._35(512,Bl.a,Bl.a,[]),tl._35(512,Rl.a,Rl.a,[]),tl._35(512,Al.a,Al.a,[]),tl._35(512,Gl.a,Gl.a,[]),tl._35(512,Hl.a,Hl.a,[]),tl._35(512,Ul.a,Ul.a,[]),tl._35(512,Yl.a,Yl.a,[]),tl._35(512,Zl.a,Zl.a,[]),tl._35(512,ql.a,ql.a,[]),tl._35(512,Fl.a,Fl.a,[]),tl._35(512,Kl.a,Kl.a,[]),tl._35(512,Ql.a,Ql.a,[]),tl._35(512,Xl.a,Xl.a,[]),tl._35(512,Jl.a,Jl.a,[]),tl._35(512,Wl.a,Wl.a,[]),tl._35(512,El.a,El.a,[]),tl._35(512,$l.a,$l.a,[]),tl._35(512,ln.a,ln.a,[]),tl._35(512,nn.a,nn.a,[]),tl._35(512,un.a,un.a,[]),tl._35(512,tn.a,tn.a,[]),tl._35(512,_n.a,_n.a,[]),tl._35(512,en.a,en.a,[]),tl._35(512,an.a,an.a,[]),tl._35(512,gl.n,gl.n,[]),tl._35(512,gl.k,gl.k,[]),tl._35(512,on.a,on.a,[]),tl._35(512,cn.a,cn.a,[]),tl._35(512,sn.a,sn.a,[]),tl._35(512,dn.a,dn.a,[]),tl._35(512,rn.a,rn.a,[]),tl._35(512,gn.a,gn.a,[]),tl._35(512,hn.a,hn.a,[]),tl._35(131584,pn.a,pn.a,[rl.c,tl.A,tl.n]),tl._35(512,mn.a,mn.a,[]),tl._35(512,zn.a,zn.a,[]),tl._35(512,fn.a,fn.a,[]),tl._35(512,bn.a,bn.a,[]),tl._35(512,Cn.a,Cn.a,[]),tl._35(512,wn.a,wn.a,[]),tl._35(512,kn.a,kn.a,[]),tl._35(512,vn.a,vn.a,[]),tl._35(512,yn.a,yn.a,[]),tl._35(512,Dn.a,Dn.a,[]),tl._35(512,g,g,[]),tl._35(1024,Il.j,function(){return[[{path:"",component:q}]]},[]),tl._35(256,xn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),tl._35(256,Sn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},bL5Y:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-switch-basic',\n  template: `\n    <nz-switch [(ngModel)]=\"switchValue\"></nz-switch>`,\n  styles  : []\n})\nexport class NzDemoSwitchBasicComponent implements OnInit {\n  switchValue = false;\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"}});