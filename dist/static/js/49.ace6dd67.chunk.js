(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[49],{1172:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(0),c=n(35),i=n(27),s=n(3),o=n(196),u=n(5),l=function(e){return e.site.view},d=Object(u.a)([l],(function(e){return e.record})),j={selectLoading:Object(u.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},b=n(1),f=n(588),m=n(800),O=n(1162),h=n(89),p=n(660),v=function(e){var t=Object(c.e)(p.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},a=function(e){return e?e.fullName?"".concat(e.fullName," <").concat(e.email,">"):e.email:null};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{to:"/user/".concat(n.id),children:a(n)})},n.id):Object(r.jsx)("div",{children:a(n)},n.id);var n}))}):null},x=n(853),g=n(890),C=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(f.a,{}):Object(r.jsxs)(m.a,{children:[Boolean(t.nom)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.site.fields.nom"),children:t.nom})),Boolean(t.description)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.site.fields.description"),children:t.description})),Boolean(t.admin)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.site.fields.admin"),children:Object(r.jsx)(v,{value:t.admin})})),Boolean(t.machine)&&Boolean(t.machine.length)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.site.fields.machine"),children:Object(r.jsx)(g.a,{value:t.machine})})),Boolean(t.attachements)&&Boolean(t.attachements.length)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.site.fields.attachements"),children:Object(r.jsx)(x.a,{value:t.attachements})})),Boolean(t.collaborateurs)&&Boolean(t.collaborateurs.length)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.site.fields.collaborateurs"),children:Object(r.jsx)(v,{value:t.collaborateurs})}))]})},y=n(851),w=n(656),T=n(556),U=n(171),I=n(611),P=n(117),B=n(598),R=n(133),E=n(858),k=n(572),z=function(e){var t=Object(c.d)(),n=Object(i.h)(),a=Object(c.e)(P.a.selectPermissionToRead),o=Object(c.e)(B.a.selectPermissionToEdit),u=Object(c.e)(B.a.selectPermissionToDestroy),l=Object(c.e)(E.a.selectLoading),d=n.params.id;return Object(r.jsxs)(k.a,{children:[o&&Object(r.jsx)(h.a,{to:"/site/".concat(d,"/edit"),children:Object(r.jsx)(U.a,{type:"primary",icon:Object(r.jsx)(y.a,{}),children:Object(s.c)("common.edit")})}),u&&Object(r.jsx)(I.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(R.a.doDestroy(d))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(r.jsx)(U.a,{type:"primary",icon:Object(r.jsx)(w.a,{}),disabled:l,children:Object(s.c)("common.destroy")})}),a&&Object(r.jsx)(h.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(r.jsx)(U.a,{icon:Object(r.jsx)(T.a,{}),children:Object(s.c)("auditLog.menu")})})]})},D=n(567),F=n(570),A=n(565);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),u=Object(c.e)(j.selectLoading),l=Object(c.e)(j.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.site.menu"),"/site"],[Object(s.c)("entities.site.view.title")]]}),Object(r.jsxs)(D.a,{children:[Object(r.jsx)(A.a,{children:Object(s.c)("entities.site.view.title")}),Object(r.jsx)(z,{match:n}),Object(r.jsx)(C,{loading:u,record:l})]})]})}},565:function(e,t,n){"use strict";var r=n(141);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var c=n(142).a.h1(a());t.a=c},567:function(e,t,n){"use strict";var r=n(141);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var c=n(142).a.div(a());t.a=c},570:function(e,t,n){"use strict";var r=n(7),a=n(655),c=(n(0),n(89));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},572:function(e,t,n){"use strict";var r=n(141);function a(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(142).a.div(a());t.a=c},588:function(e,t,n){"use strict";var r=n(7),a=n(587);n(0);t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},591:function(e,t,n){"use strict";var r=n(5),a=n(32),c=n(65),i=n(144),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.machineRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.machineEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.machineCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.machineImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.machineDestroy)})),selectPermissionToImport:l};t.a=d},592:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(156),a=n(2),c=n.n(a),i=n(4),s=n(13),o=n(14),u=n(647),l=n.n(u),d=n(3),j=n(11),b=n(836),f=n(8),m=n(254),O=n.n(m),h=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",l()(t.storage.maxSizeInBytes)));var n=p(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(d.c)("fileUploader.formats",t.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n,r,a){var i,s,o,u=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t.file,n),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),t.onError(e.t0),a(e.t0),e.abrupt("return");case 9:i=p(t.file.name),s=Object(b.a)(),o="".concat(s,".").concat(i),this.fetchFileCredentials(o,n).then((function(e){var n=e.uploadCredentials,a=e.downloadUrl,c=e.privateUrl;return u.uploadToServer(t.file,n).then((function(){t.onSuccess(),r({id:s,name:t.file.name,sizeInBytes:t.file.size,publicUrl:n&&n.publicUrl?n.publicUrl:null,privateUrl:c,downloadUrl:a,new:!0})}))})).catch((function(e){t.onError(e),a(e)}));case 13:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.a.get(),e.next=3,j.a.get("/tenant/".concat(r,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,i,s,o,u,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=n.url,i=new FormData,n.fields)for(s=0,o=Object.entries(n.fields||{});s<o.length;s++)u=Object(r.a)(o[s],2),l=u[0],d=u[1],i.append(l,d);return i.append("file",t),e.abrupt("return",O.a.post(a,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function p(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},598:function(e,t,n){"use strict";var r=n(5),a=n(32),c=n(65),i=n(144),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.siteRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.siteEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.siteCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.siteImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.siteDestroy)})),selectPermissionToImport:l};t.a=d},660:function(e,t,n){"use strict";var r=n(5),a=n(32),c=n(65),i=n(144),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.userRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.userEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.userDestroy)})),l={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.userCreate)})),selectPermissionToImport:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.userImport)})),selectPermissionToDestroy:u};t.a=l},661:function(e,t,n){"use strict";var r=n(45),a=n(156),c=n(7),i=n(0),s=n(171),o=n(835),u=n(837),l=n(774),d=n(592),j=n(6),b=n(3);t.a=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),f=n[0],m=n[1],O=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},h=function(){return O().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl,type:e.type,size:e.size}}))},p=function(e){console.error(e),m(!1),j.a.showMessage(e)},v=e.max,x=e.readonly,g=Object(c.jsxs)(s.a,{children:[f?Object(c.jsx)(u.a,{}):Object(c.jsx)(l.a,{}),Object(b.c)("fileUploader.upload")]});return Object(c.jsx)(o.a,{accept:function(){var t=e.schema;if(t&&t.formats)return t.formats.join(", ")}(),fileList:h(),disabled:x,customRequest:function(t){d.a.uploadFromRequest(t,{storage:e.storage,formats:e.formats},(function(t){!function(t){m(!1),e.onChange([].concat(Object(r.a)(O()),[t]))}(t)}),(function(e){p(e)}))},onChange:function(t){var n;t&&t.file&&t.file.status&&("removed"===t.file.status?(n=t.file.uid,e.onChange(O().filter((function(e){return e.id!==n})))):m(!0))},beforeUpload:function(t){try{return d.a.validate(t,{storage:e.storage,formats:e.formats}),!0}catch(n){return p(n),!1}},children:x||v&&h().length>=v?null:g})}},800:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(141);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(142).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},853:function(e,t,n){"use strict";var r=n(141),a=n(7),c=(n(0),n(661));function i(){var e=Object(r.a)(["\n  .anticon-close {\n    display: none;\n  }\n"]);return i=function(){return e},e}var s=n(142).a.span(i());t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(a.jsx)(s,{children:Object(a.jsx)(c.a,{readonly:!0,value:t()})}):null}},858:function(e,t,n){"use strict";var r=n(5),a={selectLoading:Object(r.a)([function(e){return e.site.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},890:function(e,t,n){"use strict";var r=n(7),a=(n(0),n(89)),c=n(35),i=n(591);t.a=function(e){var t=Object(c.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{to:"/machine/".concat(n.id),children:n.titre})},n.id):Object(r.jsx)("div",{children:n.titre},n.id);var n}))}):null}}}]);