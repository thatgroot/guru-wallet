"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[29188],{329188:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(539144),l=n(877531),u=n(795116),o=n(719392),i=n(669083),c=n(634795),s=n(202784),r=n(472719),f=n(783112),d=n(945821),h=n(268883),b=n(747225),m=n(771442),p=n(821919),g=n(552322),A=function(e){var t=e.password,n=e.isLocalAuthentication,a=d.default.dispatch,l=(0,f.default)(),h=(0,b.useSettings)().enableLocalAuthentication,A=(0,m.useLocalAuthentication)(),w=A.localAuthenticate,v=A.savePassword,E=(0,r.useNavigation)();return(0,s.useEffect)((function(){function e(){return(e=(0,c.default)((function*(){if(!h&&!n){var e=yield w();if(!e.success)return e.error.includes("cancelled")||i.default.show({title:l.formatMessage({id:"msg__verification_failure"})},{type:"error"}),void setTimeout((function(){null==E||null==E.goBack||E.goBack()}),1e3)}v(h?"":t),a((0,p.toggleEnableLocalAuthentication)()),setTimeout((function(){null==E||null==E.goBack||E.goBack()}),1e3)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,g.jsx)(u.default,{h:"full",w:"full",children:(0,g.jsx)(o.default,{size:"lg"})})};const w=function(){return(0,g.jsx)(l.default,{footer:null,children:(0,g.jsx)(h.default,{walletId:null,children:function(e,t){var n=t.isLocalAuthentication;return(0,g.jsx)(A,{password:e,isLocalAuthentication:n})}})})};var v=n(519018),E=n(292147),j=n(124241),x=function(){var e=(0,f.default)(),t=(0,b.useAppSelector)((function(e){return e.settings.enableWebAuthn})),n=(0,r.useNavigation)();return(0,s.useEffect)((function(){function a(){return(a=(0,c.default)((function*(){try{t?(0,j.disableWebAuthn)():yield(0,j.enableWebAuthn)(),i.default.show({title:e.formatMessage({id:"msg__success"})})}catch(a){E.default.common.error(a.message),a.message.includes("The operation either timed out or was not allowed")||i.default.show({title:e.formatMessage({id:"msg__unknown_error"})})}setTimeout((function(){null==n||null==n.goBack||n.goBack()}),1e3)}))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[]),(0,g.jsx)(u.default,{h:"full",w:"full",children:(0,g.jsx)(o.default,{size:"lg"})})};const L=function(){return(0,g.jsx)(l.default,{footer:null,children:(0,g.jsx)(h.default,{walletId:null,children:function(e){return(0,g.jsx)(x,{password:e})}})})};var k=(0,n(324665).default)(),y=[{name:v.EnableLocalAuthenticationRoutes.EnableLocalAuthenticationModal,component:w},{name:v.EnableLocalAuthenticationRoutes.EnableWebAuthn,component:L}];const _=function(){var e=(0,a.default)();return(0,g.jsx)(k.Navigator,{screenOptions:{headerShown:!1,animationEnabled:!!e},children:y.map((function(e){return(0,g.jsx)(k.Screen,{name:e.name,component:e.component},e.name)}))})}},519018:(e,t,n)=>{var a;n.r(t),n.d(t,{EnableLocalAuthenticationRoutes:()=>a}),function(e){e.EnableLocalAuthenticationModal="EnableLocalAuthenticationModal",e.EnableWebAuthn="EnableWebAuthn"}(a||(a={}))}}]);