(window.webpackJsonp=window.webpackJsonp||[]).push([[58,24,25,34],{384:function(e,t,r){"use strict";r.r(t);var n={name:"BreezeInput",methods:{handleInput:function(e){this.$emit("input",e.target.value)}}},o=r(12),component=Object(o.a)(n,(function(){return(0,this._self._c)("input",{staticClass:"border-black focus:border-black focus:ring focus:ring-black focus:ring-opacity-50 rounded-md shadow-sm",attrs:{type:"text"},on:{input:this.handleInput}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:r(384).default})},386:function(e,t,r){"use strict";r.r(t);var n={name:"BreezeLabel",props:["value"]},o=r(12),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("label",{staticClass:"block font-medium text-sm text-gray-700"},[e.value?t("span",[e._v(e._s(e.value))]):t("span",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Label:r(386).default})},405:function(e,t,r){"use strict";r.r(t);var n={props:["errors"]},o=r(12),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return e.errors.length>0?t("div",[t("div",{staticClass:"font-medium text-red-600"},[e._v("Ups, algo anda mal.")]),e._v(" "),t("ul",{staticClass:"mt-3 list-disc list-inside text-sm text-red-600"},e._l(e.errors,(function(r,n){return t("li",{key:n},[e._v(e._s(r))])})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},406:function(e,t,r){"use strict";var n=r(3),o=r(258).values;n({target:"Object",stat:!0},{values:function(e){return o(e)}})},537:function(e,t,r){"use strict";r.r(t);r(44);var n=r(2),o=(r(36),r(10),r(21),r(24),r(406),r(405)),l=r(173),input=r(384),label=r(386),c={head:{title:"Register"},layout:"guest",components:{BreezeValidationErrors:o.default,BreezeButton:l.default,BreezeInput:input.default,BreezeLabel:label.default},data:function(){return{form:{name:"",email:"",password:"",password_confirmation:"",terms:!1,processing:!1,errors:[]}}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.processing=!0,e.form.errors=[],t.prev=2,t.next=5,e.$axios.get(e.$config.backendUrl+"sanctum/csrf-cookie",{withCredentials:!0});case 5:return t.next=7,e.$axios.post(e.$config.backendUrl+"register",e.form,{withCredentials:!0});case 7:return t.next=9,e.$auth.loginWith("laravelSanctum",{data:e.form});case 9:e.form.processing=!1,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),Object.keys(t.t0.response.data.errors).forEach((function(r){Object.values(t.t0.response.data.errors[r]).forEach((function(t){e.form.errors.push(t)}))})),e.form.processing=!1;case 16:case"end":return t.stop()}}),t,null,[[2,12]])})))()}}},m=r(12),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("BreezeValidationErrors",{staticClass:"mb-4",attrs:{errors:e.form.errors}}),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",[t("BreezeLabel",{attrs:{for:"nombre",value:"Nombre"}}),e._v(" "),t("BreezeInput",{staticClass:"input mt-1 block w-full py-2",attrs:{id:"name",type:"text",required:"",autofocus:"",autocomplete:"name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),t("div",{staticClass:"mt-4"},[t("BreezeLabel",{attrs:{for:"email",value:"Email"}}),e._v(" "),t("BreezeInput",{staticClass:"mt-1 block w-full py-2",attrs:{id:"email",type:"email",required:"",autocomplete:"username"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("div",{staticClass:"mt-4"},[t("BreezeLabel",{attrs:{for:"password",value:"Password"}}),e._v(" "),t("BreezeInput",{staticClass:"mt-1 block w-full py-2",attrs:{id:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),t("div",{staticClass:"mt-4"},[t("BreezeLabel",{attrs:{for:"password_confirmation",value:"Confirme Password"}}),e._v(" "),t("BreezeInput",{staticClass:"mt-1 block w-full py-2",attrs:{id:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1),e._v(" "),t("div",{staticClass:"flex flex-row items-center justify-end mt-4"},[t("NuxtLink",{staticClass:"underline text-sm text-gray-600 hover:text-gray-900",attrs:{to:"/login"}},[e._v("\n       Ya está registrado?\n      ")]),e._v(" "),t("BreezeButton",{staticClass:"ml-4",class:{"opacity-25":e.form.processing},attrs:{disabled:e.form.processing}},[e._v("\n        Registrarme\n      ")])],1),e._v(" "),t("div",{staticClass:"float-left"},[t("NuxtLink",{staticClass:"text-sm text-indigo-500",attrs:{to:"/"}},[e._v("Ir a la tienda")])],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);