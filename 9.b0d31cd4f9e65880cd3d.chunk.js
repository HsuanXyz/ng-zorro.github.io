webpackJsonp([9],{"/5Rd":function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-timepicker-hide-options\',\n  template: `\n    <nz-timepicker [(ngModel)]="_date" nzHideDisabledOptions [nzDisabledHours]="disabledHours" [nzDisabledMinutes]="disabledMinutes"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerHideOptionsComponent implements OnInit {\n  _date = null;\n  newArray = (start, end) => {\n    const result = [];\n    for (let i = start; i < end; i++) {\n      result.push(i);\n    }\n    return result;\n  };\n  disabledHours = () => {\n    const hours = this.newArray(0, 60);\n    hours.splice(20, 4);\n    return hours;\n  };\n\n  disabledMinutes = (h) => {\n    if (h === 20) {\n      return this.newArray(0, 31);\n    } else if (h === 23) {\n      return this.newArray(30, 60);\n    }\n    return [];\n  };\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},"2sT0":function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-basic',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerBasicComponent implements OnInit {\n  _date = null;\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},XwXP:function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-timepicker-size\',\n  template: `\n    <nz-timepicker [(ngModel)]="_date" [nzSize]="\'large\'"></nz-timepicker>\n    <nz-timepicker [(ngModel)]="_date"></nz-timepicker>\n    <nz-timepicker [(ngModel)]="_date" [nzSize]="\'small\'"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerSizeComponent implements OnInit {\n  _date = new Date();\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},iW1p:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-change',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\" (ngModelChange)=\"_console($event)\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerChangeComponent implements OnInit {\n  _date = null;\n\n  _console(value) {\n    console.log(value);\n  };\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},jHWB:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-disabled',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\" [nzDisabled]=\"true\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerDisabledComponent implements OnInit {\n  _date = new Date();\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},mUxJ:function(l,n,u){"use strict";function e(l){return D._47(0,[(l()(),D._45(null,["\n    "])),(l()(),D._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},v.b,v.a)),D._21(114688,null,0,M.a,[D.j],null,null),D._42(1024,null,y.j,function(l){return[l]},[M.a]),D._21(671744,null,0,y.o,[[8,null],[8,null],[8,null],[2,y.j]],{model:[0,"model"]},{update:"ngModelChange"}),D._42(2048,null,y.k,null,[y.o]),D._21(16384,null,0,y.l,[y.k],null,null)],function(l,n){var u=n.component;l(n,2,0),l(n,4,0,u._date)},function(l,n){l(n,1,0,D._37(n,6).ngClassUntouched,D._37(n,6).ngClassTouched,D._37(n,6).ngClassPristine,D._37(n,6).ngClassDirty,D._37(n,6).ngClassValid,D._37(n,6).ngClassInvalid,D._37(n,6).ngClassPending)})}function t(l){return D._47(0,[(l()(),D._23(0,null,null,1,"nz-demo-timepicker-basic",[],null,null,null,e,T)),D._21(114688,null,0,b,[],null,null)],function(l,n){l(n,1,0)},null)}function i(l){return I._47(0,[(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},O.b,O.a)),I._21(114688,null,0,j.a,[I.j],{nzSize:[0,"nzSize"]},null),I._42(1024,null,x.j,function(l){return[l]},[j.a]),I._21(671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{model:[0,"model"]},{update:"ngModelChange"}),I._42(2048,null,x.k,null,[x.o]),I._21(16384,null,0,x.l,[x.k],null,null),(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},O.b,O.a)),I._21(114688,null,0,j.a,[I.j],null,null),I._42(1024,null,x.j,function(l){return[l]},[j.a]),I._21(671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{model:[0,"model"]},{update:"ngModelChange"}),I._42(2048,null,x.k,null,[x.o]),I._21(16384,null,0,x.l,[x.k],null,null),(l()(),I._45(null,["\n    "])),(l()(),I._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},O.b,O.a)),I._21(114688,null,0,j.a,[I.j],{nzSize:[0,"nzSize"]},null),I._42(1024,null,x.j,function(l){return[l]},[j.a]),I._21(671744,null,0,x.o,[[8,null],[8,null],[8,null],[2,x.j]],{model:[0,"model"]},{update:"ngModelChange"}),I._42(2048,null,x.k,null,[x.o]),I._21(16384,null,0,x.l,[x.k],null,null)],function(l,n){var u=n.component;l(n,2,0,"large"),l(n,4,0,u._date),l(n,9,0),l(n,11,0,u._date);l(n,16,0,"small"),l(n,18,0,u._date)},function(l,n){l(n,1,0,I._37(n,6).ngClassUntouched,I._37(n,6).ngClassTouched,I._37(n,6).ngClassPristine,I._37(n,6).ngClassDirty,I._37(n,6).ngClassValid,I._37(n,6).ngClassInvalid,I._37(n,6).ngClassPending),l(n,8,0,I._37(n,13).ngClassUntouched,I._37(n,13).ngClassTouched,I._37(n,13).ngClassPristine,I._37(n,13).ngClassDirty,I._37(n,13).ngClassValid,I._37(n,13).ngClassInvalid,I._37(n,13).ngClassPending),l(n,15,0,I._37(n,20).ngClassUntouched,I._37(n,20).ngClassTouched,I._37(n,20).ngClassPristine,I._37(n,20).ngClassDirty,I._37(n,20).ngClassValid,I._37(n,20).ngClassInvalid,I._37(n,20).ngClassPending)})}function o(l){return I._47(0,[(l()(),I._23(0,null,null,1,"nz-demo-timepicker-size",[],null,null,null,i,N)),I._21(114688,null,0,H,[],null,null)],function(l,n){l(n,1,0)},null)}function a(l){return A._47(0,[(l()(),A._45(null,["\n    "])),(l()(),A._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},B.b,B.a)),A._21(114688,null,0,L.a,[A.j],{nzDisabled:[0,"nzDisabled"]},null),A._42(1024,null,J.j,function(l){return[l]},[L.a]),A._21(671744,null,0,J.o,[[8,null],[8,null],[8,null],[2,J.j]],{model:[0,"model"]},{update:"ngModelChange"}),A._42(2048,null,J.k,null,[J.o]),A._21(16384,null,0,J.l,[J.k],null,null)],function(l,n){var u=n.component;l(n,2,0,!0),l(n,4,0,u._date)},function(l,n){l(n,1,0,A._37(n,6).ngClassUntouched,A._37(n,6).ngClassTouched,A._37(n,6).ngClassPristine,A._37(n,6).ngClassDirty,A._37(n,6).ngClassValid,A._37(n,6).ngClassInvalid,A._37(n,6).ngClassPending)})}function _(l){return A._47(0,[(l()(),A._23(0,null,null,1,"nz-demo-timepicker-disabled",[],null,null,null,a,U)),A._21(114688,null,0,S,[],null,null)],function(l,n){l(n,1,0)},null)}function r(l){return W._47(0,[(l()(),W._45(null,["\n    "])),(l()(),W._23(0,null,null,5,"nz-timepicker",[["nzHideDisabledOptions",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},Y.b,Y.a)),W._21(114688,null,0,F.a,[W.j],{nzHideDisabledOptions:[0,"nzHideDisabledOptions"],nzDisabledHours:[1,"nzDisabledHours"],nzDisabledMinutes:[2,"nzDisabledMinutes"]},null),W._42(1024,null,X.j,function(l){return[l]},[F.a]),W._21(671744,null,0,X.o,[[8,null],[8,null],[8,null],[2,X.j]],{model:[0,"model"]},{update:"ngModelChange"}),W._42(2048,null,X.k,null,[X.o]),W._21(16384,null,0,X.l,[X.k],null,null)],function(l,n){var u=n.component;l(n,2,0,"",u.disabledHours,u.disabledMinutes),l(n,4,0,u._date)},function(l,n){l(n,1,0,W._37(n,6).ngClassUntouched,W._37(n,6).ngClassTouched,W._37(n,6).ngClassPristine,W._37(n,6).ngClassDirty,W._37(n,6).ngClassValid,W._37(n,6).ngClassInvalid,W._37(n,6).ngClassPending)})}function d(l){return W._47(0,[(l()(),W._23(0,null,null,1,"nz-demo-timepicker-hide-options",[],null,null,null,r,K)),W._21(114688,null,0,V,[],null,null)],function(l,n){l(n,1,0)},null)}function s(l){return G._47(0,[(l()(),G._45(null,["\n    "])),(l()(),G._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}if("ngModelChange"===n){e=!1!==t._console(u)&&e}return e},Z.b,Z.a)),G._21(114688,null,0,Q.a,[G.j],null,null),G._42(1024,null,$.j,function(l){return[l]},[Q.a]),G._21(671744,null,0,$.o,[[8,null],[8,null],[8,null],[2,$.j]],{model:[0,"model"]},{update:"ngModelChange"}),G._42(2048,null,$.k,null,[$.o]),G._21(16384,null,0,$.l,[$.k],null,null)],function(l,n){var u=n.component;l(n,2,0),l(n,4,0,u._date)},function(l,n){l(n,1,0,G._37(n,6).ngClassUntouched,G._37(n,6).ngClassTouched,G._37(n,6).ngClassPristine,G._37(n,6).ngClassDirty,G._37(n,6).ngClassValid,G._37(n,6).ngClassInvalid,G._37(n,6).ngClassPending)})}function c(l){return G._47(0,[(l()(),G._23(0,null,null,1,"nz-demo-timepicker-change",[],null,null,null,s,nl)),G._21(114688,null,0,q,[],null,null)],function(l,n){l(n,1,0)},null)}function m(l){return el._47(0,[(l()(),el._45(null,["\n    "])),(l()(),el._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},tl.b,tl.a)),el._21(114688,null,0,il.a,[el.j],{nzFormat:[0,"nzFormat"]},null),el._42(1024,null,ol.j,function(l){return[l]},[il.a]),el._21(671744,null,0,ol.o,[[8,null],[8,null],[8,null],[2,ol.j]],{model:[0,"model"]},{update:"ngModelChange"}),el._42(2048,null,ol.k,null,[ol.o]),el._21(16384,null,0,ol.l,[ol.k],null,null)],function(l,n){var u=n.component;l(n,2,0,"HH:mm"),l(n,4,0,u._date)},function(l,n){l(n,1,0,el._37(n,6).ngClassUntouched,el._37(n,6).ngClassTouched,el._37(n,6).ngClassPristine,el._37(n,6).ngClassDirty,el._37(n,6).ngClassValid,el._37(n,6).ngClassInvalid,el._37(n,6).ngClassPending)})}function g(l){return el._47(0,[(l()(),el._23(0,null,null,1,"nz-demo-timepicker-without-seconds",[],null,null,null,m,_l)),el._21(114688,null,0,ul,[],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return dl._47(0,[(l()(),dl._45(null,["\n    "])),(l()(),dl._23(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},sl.b,sl.a)),dl._21(114688,null,0,cl.a,[dl.j],{nzDisabledHours:[0,"nzDisabledHours"],nzDisabledMinutes:[1,"nzDisabledMinutes"]},null),dl._42(1024,null,ml.j,function(l){return[l]},[cl.a]),dl._21(671744,null,0,ml.o,[[8,null],[8,null],[8,null],[2,ml.j]],{model:[0,"model"]},{update:"ngModelChange"}),dl._42(2048,null,ml.k,null,[ml.o]),dl._21(16384,null,0,ml.l,[ml.k],null,null)],function(l,n){var u=n.component;l(n,2,0,u.disabledHours,u.disabledMinutes),l(n,4,0,u._date)},function(l,n){l(n,1,0,dl._37(n,6).ngClassUntouched,dl._37(n,6).ngClassTouched,dl._37(n,6).ngClassPristine,dl._37(n,6).ngClassDirty,dl._37(n,6).ngClassValid,dl._37(n,6).ngClassInvalid,dl._37(n,6).ngClassPending)})}function z(l){return dl._47(0,[(l()(),dl._23(0,null,null,1,"nz-demo-timepicker-disabled-options",[],null,null,null,p,pl)),dl._21(114688,null,0,rl,[],null,null)],function(l,n){l(n,1,0)},null)}function h(l){return hl._47(0,[(l()(),hl._23(0,null,null,308,"article",[],null,null,null,null,null)),(l()(),hl._45(null,["\n  "])),(l()(),hl._23(0,null,null,23,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),hl._23(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),hl._45(null,["TimePicker \u65f6\u95f4\u9009\u62e9\u6846"])),(l()(),hl._45(null,["\n    "])),(l()(),hl._23(0,null,null,14,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),hl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u8f93\u5165\u6216\u9009\u62e9\u65f6\u95f4\u7684\u63a7\u4ef6\u3002"])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),hl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),hl._45(null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),hl._45(null,["#"])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u5f53\u7528\u6237\u9700\u8981\u8f93\u5165\u4e00\u4e2a\u65f6\u95f4\uff0c\u53ef\u4ee5\u70b9\u51fb\u6807\u51c6\u8f93\u5165\u6846\uff0c\u5f39\u51fa\u65f6\u95f4\u9762\u677f\u8fdb\u884c\u9009\u62e9\u3002"])),(l()(),hl._45(null,["\n    "])),(l()(),hl._45(null,["\n    "])),(l()(),hl._23(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),hl._45(null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),hl._23(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),hl._45(null,["\n  "])),(l()(),hl._45(null,["\n  "])),(l()(),hl._23(0,null,null,110,"div",[["nz-row",""]],null,null,null,fl.b,fl.a)),hl._21(114688,null,0,Cl.a,[hl.r,hl.R],{nzGutter:[0,"nzGutter"]},null),(l()(),hl._45(0,["\n    "])),(l()(),hl._23(0,null,0,57,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),hl._21(606208,null,0,kl.a,[hl.r,[2,Cl.a],hl.R],{nzSpan:[0,"nzSpan"]},null),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-basic"]],null,null,null,bl.b,bl.a)),hl._21(114688,null,0,Dl.a,[vl.c,hl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,0,1,"nz-demo-timepicker-basic",[["demo",""]],null,null,null,e,T)),hl._21(114688,null,0,b,[],null,null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-size"]],null,null,null,bl.b,bl.a)),hl._21(114688,null,0,Dl.a,[vl.c,hl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,0,1,"nz-demo-timepicker-size",[["demo",""]],null,null,null,i,N)),hl._21(114688,null,0,H,[],null,null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u4e09\u79cd\u5927\u5c0f\u7684\u8f93\u5165\u6846\uff0c\u5927\u7684\u7528\u5728\u8868\u5355\u4e2d\uff0c\u4e2d\u7684\u4e3a\u9ed8\u8ba4\u3002"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-disabled"]],null,null,null,bl.b,bl.a)),hl._21(114688,null,0,Dl.a,[vl.c,hl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,0,1,"nz-demo-timepicker-disabled",[["demo",""]],null,null,null,a,U)),hl._21(114688,null,0,S,[],null,null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u7981\u7528\u65f6\u95f4\u9009\u62e9\u3002"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,14,"nz-code-box",[["id","components-time-picker-demo-hide-options"]],null,null,null,bl.b,bl.a)),hl._21(114688,null,0,Dl.a,[vl.c,hl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,0,1,"nz-demo-timepicker-hide-options",[["demo",""]],null,null,null,r,K)),hl._21(114688,null,0,V,[],null,null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,1,7,"div",[["intro",""]],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u901a\u8fc7 "])),(l()(),hl._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),hl._45(null,["nzHideDisabledOptions"])),(l()(),hl._45(null,[" \u5c06\u4e0d\u53ef\u9009\u7684\u9009\u9879\u9690\u85cf\u3002"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n    "])),(l()(),hl._45(0,["\n    "])),(l()(),hl._23(0,null,0,47,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),hl._21(606208,null,0,kl.a,[hl.r,[2,Cl.a],hl.R],{nzSpan:[0,"nzSpan"]},null),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-change"]],null,null,null,bl.b,bl.a)),hl._21(114688,null,0,Dl.a,[vl.c,hl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,0,1,"nz-demo-timepicker-change",[["demo",""]],null,null,null,s,nl)),hl._21(114688,null,0,q,[],null,null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["nzValue \u548c nzValueChange \u9700\u8981\u914d\u5408\u4f7f\u7528\u3002"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-without-seconds"]],null,null,null,bl.b,bl.a)),hl._21(114688,null,0,Dl.a,[vl.c,hl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,0,1,"nz-demo-timepicker-without-seconds",[["demo",""]],null,null,null,m,_l)),hl._21(114688,null,0,ul,[],null,null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u4e0d\u5c55\u793a\u79d2\uff0c\u4e5f\u4e0d\u5141\u8bb8\u9009\u62e9\u3002"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,17,"nz-code-box",[["id","components-time-picker-demo-disabled-options"]],null,null,null,bl.b,bl.a)),hl._21(114688,null,0,Dl.a,[vl.c,hl.r],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,0,1,"nz-demo-timepicker-disabled-options",[["demo",""]],null,null,null,p,pl)),hl._21(114688,null,0,rl,[],null,null),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,7,"p",[],null,null,null,null,null)),(l()(),hl._45(null,["\u9650\u5236\u9009\u62e9 "])),(l()(),hl._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),hl._45(null,["20:30"])),(l()(),hl._45(null,[" \u5230 "])),(l()(),hl._23(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),hl._45(null,["23:30"])),(l()(),hl._45(null,[" \u8fd9\u4e2a\u65f6\u95f4\u6bb5\u3002"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n    "])),(l()(),hl._45(0,["\n  "])),(l()(),hl._45(null,["\n  "])),(l()(),hl._23(0,null,null,168,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),hl._45(null,["\n    "])),(l()(),hl._23(0,null,null,6,"h2",[["id","API"]],null,null,null,null,null)),(l()(),hl._23(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),hl._45(null,["API"])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),hl._45(null,["#"])),(l()(),hl._45(null,["\n    "])),(l()(),hl._45(null,["\n    "])),(l()(),hl._23(0,null,null,157,"table",[],null,null,null,null,null)),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),hl._45(null,["\u53c2\u6570"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),hl._45(null,["\u8bf4\u660e"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),hl._45(null,["\u7c7b\u578b"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),hl._45(null,["\u9ed8\u8ba4\u503c"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._23(0,null,null,136,"tbody",[],null,null,null,null,null)),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["ngModel"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u9ed8\u8ba4\u65f6\u95f4"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["string or Date"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u65e0"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzSize"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u8bbe\u7f6eTimePicker\u5927\u5c0f"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["'large'|'small'|'default'"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["'default'"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzPlaceHolder"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u6ca1\u6709\u503c\u7684\u65f6\u5019\u663e\u793a\u7684\u5185\u5bb9"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["String"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,['"\u8bf7\u9009\u62e9\u65f6\u95f4"'])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzFormat"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u5c55\u793a\u7684\u65f6\u95f4\u683c\u5f0f"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["String"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,['"HH:mm:ss"\u3001"HH:mm"\u3001"mm:ss"'])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzDisabled"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u7981\u7528\u5168\u90e8\u64cd\u4f5c"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["Boolean"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["false"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzDisabledHours"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u7981\u6b62\u9009\u62e9\u90e8\u5206\u5c0f\u65f6\u9009\u9879"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["function()"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u65e0"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzDisabledMinutes"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u7981\u6b62\u9009\u62e9\u90e8\u5206\u5206\u949f\u9009\u9879"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["function(selectedHour)"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u65e0"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzDisabledSeconds"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u7981\u6b62\u9009\u62e9\u90e8\u5206\u79d2\u9009\u9879"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["function(selectedHour, selectedMinute)"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u65e0"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n        "])),(l()(),hl._23(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["nzHideDisabledOptions"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["\u6dfb\u52a0\u8be5\u5c5e\u6027\u6765\u9690\u85cf\u7981\u6b62\u9009\u62e9\u7684\u9009\u9879"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["attribute"])),(l()(),hl._45(null,["\n          "])),(l()(),hl._23(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),hl._45(null,["-"])),(l()(),hl._45(null,["\n        "])),(l()(),hl._45(null,["\n      "])),(l()(),hl._45(null,["\n    "])),(l()(),hl._45(null,["\n  "])),(l()(),hl._45(null,["\n"])),(l()(),hl._45(null,["\n"]))],function(l,n){var u=n.component;l(n,28,0,8);l(n,31,0,12);l(n,34,0,"\u57fa\u672c",u.NzDemoTimePickerBasicCode),l(n,37,0);l(n,47,0,"\u4e09\u79cd\u5927\u5c0f",u.NzDemoTimePickerSizeCode),l(n,50,0);l(n,60,0,"\u7981\u7528",u.NzDemoTimePickerDisabledCode),l(n,63,0);l(n,73,0,"\u53ea\u663e\u793a\u90e8\u5206\u9009\u9879",u.NzDemoTimePickerHideOptionsCode),l(n,76,0);l(n,90,0,12);l(n,93,0,"\u53d7\u63a7\u7ec4\u4ef6",u.NzDemoTimePickerChangeCode),l(n,96,0);l(n,106,0,"\u4e0d\u5c55\u793a\u79d2",u.NzDemoTimePickerWithoutSecondsCode),l(n,109,0);l(n,119,0,"\u7981\u6b62\u9009\u9879",u.NzDemoTimePickerDisabledOptionsCode),l(n,122,0)},function(l,n){l(n,30,0,hl._37(n,31).paddingLeft,hl._37(n,31).paddingRight),l(n,89,0,hl._37(n,90).paddingLeft,hl._37(n,90).paddingRight)})}function f(l){return hl._47(0,[(l()(),hl._23(0,null,null,1,"nz-demo-timepicker",[],null,null,null,h,yl)),hl._21(114688,null,0,zl,[],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var C=function(){function l(){}return l}(),k=[""],b=function(){function l(){this._date=null}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}(),D=u("/oeL"),v=u("jkMJ"),M=u("Y7HL"),y=u("bm2B"),P=[],T=D._20({encapsulation:2,styles:P,data:{}}),H=(D._18("nz-demo-timepicker-basic",b,t,{},{},[]),function(){function l(){this._date=new Date}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),I=u("/oeL"),O=u("jkMJ"),j=u("Y7HL"),x=u("bm2B"),w=[],N=I._20({encapsulation:2,styles:w,data:{}}),S=(I._18("nz-demo-timepicker-size",H,o,{},{},[]),function(){function l(){this._date=new Date}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),A=u("/oeL"),B=u("jkMJ"),L=u("Y7HL"),J=u("bm2B"),R=[],U=A._20({encapsulation:2,styles:R,data:{}}),V=(A._18("nz-demo-timepicker-disabled",S,_,{},{},[]),function(){function l(){var l=this;this._date=null,this.newArray=function(l,n){for(var u=[],e=l;e<n;e++)u.push(e);return u},this.disabledHours=function(){var n=l.newArray(0,60);return n.splice(20,4),n},this.disabledMinutes=function(n){return 20===n?l.newArray(0,31):23===n?l.newArray(30,60):[]}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),W=u("/oeL"),Y=u("jkMJ"),F=u("Y7HL"),X=u("bm2B"),E=[],K=W._20({encapsulation:2,styles:E,data:{}}),q=(W._18("nz-demo-timepicker-hide-options",V,d,{},{},[]),function(){function l(){this._date=null}return l.prototype._console=function(l){console.log(l)},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),G=u("/oeL"),Z=u("jkMJ"),Q=u("Y7HL"),$=u("bm2B"),ll=[],nl=G._20({encapsulation:2,styles:ll,data:{}}),ul=(G._18("nz-demo-timepicker-change",q,c,{},{},[]),function(){function l(){this._date=new Date}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),el=u("/oeL"),tl=u("jkMJ"),il=u("Y7HL"),ol=u("bm2B"),al=[],_l=el._20({encapsulation:2,styles:al,data:{}}),rl=(el._18("nz-demo-timepicker-without-seconds",ul,g,{},{},[]),function(){function l(){var l=this;this._date=null,this.newArray=function(l,n){for(var u=[],e=l;e<n;e++)u.push(e);return u},this.disabledHours=function(){var n=l.newArray(0,60);return n.splice(20,4),n},this.disabledMinutes=function(n){return 20===n?l.newArray(0,31):23===n?l.newArray(30,60):[]}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),dl=u("/oeL"),sl=u("jkMJ"),cl=u("Y7HL"),ml=u("bm2B"),gl=[],pl=dl._20({encapsulation:2,styles:gl,data:{}}),zl=(dl._18("nz-demo-timepicker-disabled-options",rl,z,{},{},[]),function(){function l(){this.NzDemoTimePickerBasicCode=u("2sT0"),this.NzDemoTimePickerChangeCode=u("iW1p"),this.NzDemoTimePickerSizeCode=u("XwXP"),this.NzDemoTimePickerWithoutSecondsCode=u("q13i"),this.NzDemoTimePickerDisabledCode=u("jHWB"),this.NzDemoTimePickerDisabledOptionsCode=u("t2k4"),this.NzDemoTimePickerHideOptionsCode=u("/5Rd")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()),hl=u("/oeL"),fl=u("TOSB"),Cl=u("9f15"),kl=u("FYfR"),bl=u("xfRN"),Dl=u("d0SC"),vl=u("qbdv"),Ml=[k],yl=hl._20({encapsulation:2,styles:Ml,data:{}}),Pl=hl._18("nz-demo-timepicker",zl,f,{},{},[]),Tl=function(){function l(){}return l}();u.d(n,"NzDemoTimePickerModuleNgFactory",function(){return Wn});var Hl=u("/oeL"),Il=u("FkWa"),Ol=u("yrl+"),jl=u("55J3"),xl=u("n6um"),wl=u("iaO7"),Nl=u("FxM8"),Sl=u("qbdv"),Al=u("bm2B"),Bl=u("p4Sk"),Ll=u("KWHd"),Jl=u("ofc2"),Rl=u("Ep+3"),Ul=u("oe3n"),Vl=u("gRBx"),Wl=u("8aH3"),Yl=u("BIYD"),Fl=u("+n5j"),Xl=u("syUv"),El=u("sQGE"),Kl=u("hJM2"),ql=u("BkNc"),Gl=u("jlvU"),Zl=u("tSZc"),Ql=u("Z7s/"),$l=u("PWwA"),ln=u("PAVX"),nn=u("K8P4"),un=u("R9WC"),en=u("ljTE"),tn=u("ZPRV"),on=u("Hmg1"),an=u("NnGW"),_n=u("JY8U"),rn=u("xrsb"),dn=u("VfTQ"),sn=u("Vy3b"),cn=u("nbGD"),mn=u("E+t3"),gn=u("JOWY"),pn=u("83Ua"),zn=u("XyJX"),hn=u("Ao/f"),fn=u("kX/R"),Cn=u("54Is"),kn=u("N5El"),bn=u("2+5N"),Dn=u("9fxl"),vn=u("RNwh"),Mn=u("4IKa"),yn=u("/grC"),Pn=u("XDe+"),Tn=u("nP2T"),Hn=u("aWIB"),In=u("QUju"),On=u("DcAm"),jn=u("BJRZ"),xn=u("4BBw"),wn=u("/Fr5"),Nn=u("PbkE"),Sn=u("xECq"),An=u("/CDc"),Bn=u("hKjL"),Ln=u("h617"),Jn=u("shv5"),Rn=u("ZgIK"),Un=u("IJb3"),Vn=u("MgJ2"),Wn=Hl._19(C,[],function(l){return Hl._34([Hl._35(512,Hl.n,Hl._15,[[8,[Pl,Il.a,Ol.a,jl.a,xl.a,wl.a,Nl.a]],[3,Hl.n],Hl.I]),Hl._35(4608,Sl.n,Sl.m,[Hl.E]),Hl._35(4608,Al.u,Al.u,[]),Hl._35(4608,Bl.h,Bl.h,[]),Hl._35(5120,Ll.c,Ll.b,[[3,Ll.c],Hl.K,Bl.h]),Hl._35(5120,Jl.c,Jl.b,[[3,Jl.c],Ll.c]),Hl._35(4608,Rl.a,Rl.a,[Ll.c,Jl.c]),Hl._35(5120,Ul.c,Ul.b,[[3,Ul.c]]),Hl._35(4608,Vl.a,Vl.a,[Jl.c]),Hl._35(4608,Wl.a,Wl.a,[Rl.a,Ul.c,Hl.n,Vl.a,Hl.g,Hl.A,Hl.K]),Hl._35(5120,Yl.c,Yl.b,[Wl.a,Sl.c,[3,Yl.c]]),Hl._35(4608,Fl.a,Fl.a,[]),Hl._35(4608,Xl.a,Xl.a,[Hl.g,Hl.n]),Hl._35(4608,El.a,El.a,[]),Hl._35(4608,Bl.e,Bl.e,[]),Hl._35(4608,Kl.a,Kl.a,[]),Hl._35(512,ql.o,ql.o,[[2,ql.t],[2,ql.l]]),Hl._35(512,Tl,Tl,[]),Hl._35(512,Sl.b,Sl.b,[]),Hl._35(512,Gl.a,Gl.a,[]),Hl._35(512,Zl.a,Zl.a,[]),Hl._35(512,Ql.a,Ql.a,[]),Hl._35(512,$l.a,$l.a,[]),Hl._35(512,Al.s,Al.s,[]),Hl._35(512,Al.i,Al.i,[]),Hl._35(512,Bl.i,Bl.i,[]),Hl._35(512,ln.a,ln.a,[]),Hl._35(512,nn.d,nn.d,[]),Hl._35(512,un.a,un.a,[]),Hl._35(512,en.a,en.a,[]),Hl._35(512,tn.a,tn.a,[]),Hl._35(512,on.a,on.a,[]),Hl._35(512,an.a,an.a,[]),Hl._35(512,_n.a,_n.a,[]),Hl._35(512,rn.a,rn.a,[]),Hl._35(512,dn.a,dn.a,[]),Hl._35(512,sn.a,sn.a,[]),Hl._35(512,cn.a,cn.a,[]),Hl._35(512,mn.a,mn.a,[]),Hl._35(512,gn.a,gn.a,[]),Hl._35(512,pn.a,pn.a,[]),Hl._35(512,zn.a,zn.a,[]),Hl._35(512,hn.a,hn.a,[]),Hl._35(512,fn.a,fn.a,[]),Hl._35(512,Cn.a,Cn.a,[]),Hl._35(512,kn.a,kn.a,[]),Hl._35(512,bn.a,bn.a,[]),Hl._35(512,Dn.a,Dn.a,[]),Hl._35(512,vn.a,vn.a,[]),Hl._35(512,Mn.a,Mn.a,[]),Hl._35(512,yn.a,yn.a,[]),Hl._35(512,Pn.a,Pn.a,[]),Hl._35(512,Tn.a,Tn.a,[]),Hl._35(512,Bl.j,Bl.j,[]),Hl._35(512,Bl.g,Bl.g,[]),Hl._35(512,Hn.a,Hn.a,[]),Hl._35(512,In.a,In.a,[]),Hl._35(512,On.a,On.a,[]),Hl._35(512,jn.a,jn.a,[]),Hl._35(512,xn.a,xn.a,[]),Hl._35(512,wn.a,wn.a,[]),Hl._35(512,Nn.a,Nn.a,[]),Hl._35(512,Sn.a,Sn.a,[]),Hl._35(512,An.a,An.a,[]),Hl._35(512,Bn.a,Bn.a,[]),Hl._35(512,Ln.a,Ln.a,[]),Hl._35(512,Jn.a,Jn.a,[]),Hl._35(512,Rn.a,Rn.a,[]),Hl._35(512,C,C,[]),Hl._35(1024,ql.j,function(){return[[{path:"",component:zl}]]},[]),Hl._35(256,Un.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),Hl._35(256,Vn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},q13i:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-without-seconds',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\" [nzFormat]=\"'HH:mm'\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerWithoutSecondsComponent implements OnInit {\n  _date = new Date();\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},t2k4:function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-timepicker-disabled-options\',\n  template: `\n    <nz-timepicker [(ngModel)]="_date" [nzDisabledHours]="disabledHours" [nzDisabledMinutes]="disabledMinutes"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerDisabledOptionsComponent implements OnInit {\n  _date = null;\n  newArray = (start, end) => {\n    const result = [];\n    for (let i = start; i < end; i++) {\n      result.push(i);\n    }\n    return result;\n  };\n  disabledHours = () => {\n    const hours = this.newArray(0, 60);\n    hours.splice(20, 4);\n    return hours;\n  };\n\n  disabledMinutes = (h) => {\n    if (h === 20) {\n      return this.newArray(0, 31);\n    } else if (h === 23) {\n      return this.newArray(30, 60);\n    }\n    return [];\n  };\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'}});