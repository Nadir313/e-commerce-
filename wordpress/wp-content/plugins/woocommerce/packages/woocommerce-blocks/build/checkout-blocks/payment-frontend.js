(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[43],{132:function(e,t,c){"use strict";var n=c(0);c(188),t.a=()=>Object(n.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},134:function(e,t,c){"use strict";var n=c(0),o=c(1),a=c(4),s=c.n(a),r=(c(190),c(132));t.a=e=>{let{children:t,className:c,screenReaderLabel:a,showSpinner:l=!1,isLoading:i=!0}=e;return Object(n.createElement)("div",{className:s()(c,{"wc-block-components-loading-mask":i})},i&&l&&Object(n.createElement)(r.a,null),Object(n.createElement)("div",{className:s()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},t),i&&Object(n.createElement)("span",{className:"screen-reader-text"},a||Object(o.__)("Loading…","woocommerce")))}},188:function(e,t){},190:function(e,t){},21:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o);t.a=e=>{let t,{label:c,screenReaderLabel:o,wrapperElement:s,wrapperProps:r={}}=e;const l=null!=c,i=null!=o;return!l&&i?(t=s||"span",r={...r,className:a()(r.className,"screen-reader-text")},Object(n.createElement)(t,r,o)):(t=s||n.Fragment,l&&i&&c!==o?Object(n.createElement)(t,r,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,r,c))}},253:function(e,t){},257:function(e,t,c){"use strict";var n=c(11),o=c.n(n),a=c(0),s=c(4),r=c.n(s);c(258),t.a=e=>{let{children:t,className:c,headingLevel:n,...s}=e;const l=r()("wc-block-components-title",c),i="h"+n;return Object(a.createElement)(i,o()({className:l},s),t)}},258:function(e,t){},259:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o),s=c(260);t.a=e=>{let{checked:t,name:c,onChange:o,option:r}=e;const{value:l,label:i,description:d,secondaryLabel:p,secondaryDescription:m}=r;return Object(n.createElement)("label",{className:a()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${c}-${l}`},Object(n.createElement)("input",{id:`${c}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:c,value:l,onChange:e=>o(e.target.value),checked:t,"aria-describedby":a()({[`${c}-${l}__label`]:i,[`${c}-${l}__secondary-label`]:p,[`${c}-${l}__description`]:d,[`${c}-${l}__secondary-description`]:m})}),Object(n.createElement)(s.a,{id:`${c}-${l}`,label:i,secondaryLabel:p,description:d,secondaryDescription:m}))}},260:function(e,t,c){"use strict";var n=c(0);t.a=e=>{let{label:t,secondaryLabel:c,description:o,secondaryDescription:a,id:s}=e;return Object(n.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(n.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(n.createElement)("span",{id:s&&s+"__label",className:"wc-block-components-radio-control__label"},t),c&&Object(n.createElement)("span",{id:s&&s+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},c)),Object(n.createElement)("div",{className:"wc-block-components-radio-control__description-group"},o&&Object(n.createElement)("span",{id:s&&s+"__description",className:"wc-block-components-radio-control__description"},o),a&&Object(n.createElement)("span",{id:s&&s+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},a)))}},262:function(e,t){},263:function(e,t){},264:function(e,t,c){"use strict";c.d(t,"a",(function(){return m}));var n=c(1),o=c(7),a=c(5),s=c(17),r=c(30),l=c(0),i=c(242);const d=()=>{const{notices:e,createSnackbarNotice:t,removeSnackbarNotice:c,setIsSuppressed:n}=Object(i.b)(),o=Object(l.useRef)(e);Object(l.useEffect)(()=>{o.current=e},[e]);const a=Object(l.useMemo)(()=>({removeNotices:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o.current.forEach(t=>{null!==e&&t.status!==e||c(t.id)})},removeSnackbarNotice:c}),[c]),s=Object(l.useMemo)(()=>({addSnackbarNotice:function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(e,c)}}),[t]);return{notices:e,...a,...s,setIsSuppressed:n}};var p=c(191);const m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:c}=Object(r.a)(),{createErrorNotice:l}=Object(o.useDispatch)("core/notices"),{addSnackbarNotice:i}=d(),{setValidationErrors:m}=Object(p.b)(),b=Object(o.useSelect)((t,c)=>{let{dispatch:o}=c;const r=t(a.CART_STORE_KEY),d=r.isApplyingCoupon(),p=r.isRemovingCoupon(),{applyCoupon:b,removeCoupon:u,receiveApplyingCoupon:h}=o(a.CART_STORE_KEY);return{applyCoupon:e=>{b(e).then(t=>{!0===t&&i(Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been applied to your cart.',"woocommerce"),e),{id:"coupon-form"})}).catch(e=>{m({coupon:{message:Object(s.decodeEntities)(e.message),hidden:!1}}),h("")})},removeCoupon:t=>{u(t).then(e=>{!0===e&&i(Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been removed from your cart.',"woocommerce"),t),{id:"coupon-form"})}).catch(t=>{l(t.message,{id:"coupon-form",context:e}),h("")})},isApplyingCoupon:d,isRemovingCoupon:p}},[l,i]);return{appliedCoupons:t,isLoading:c,...b}}},265:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0),o=c(191);c(253);const a=e=>{let{errorMessage:t="",propertyName:c="",elementId:a=""}=e;const{getValidationError:s,getValidationErrorId:r}=Object(o.b)();if(!t||"string"!=typeof t){const e=s(c)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:r(a)},t))}},266:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return r}));var n=c(29),o=c(198);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethods:t,expressPaymentMethods:c,paymentMethodsInitialized:a,expressPaymentMethodsInitialized:s}=Object(o.b)(),r=Object(n.a)(t),l=Object(n.a)(c);return{paymentMethods:e?l:r,isInitialized:e?s:a}},s=()=>a(!1),r=()=>a(!0)},267:function(e,t,c){"use strict";var n=c(1);t.a=e=>{let{defaultTitle:t=Object(n.__)("Step","woocommerce"),defaultDescription:c=Object(n.__)("Step description text.","woocommerce"),defaultShowStepNumber:o=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:c},showStepNumber:{type:"boolean",default:o}}}},269:function(e,t,c){"use strict";var n=c(11),o=c.n(n),a=c(0),s=c(4),r=c.n(s);const l=e=>"wc-block-components-payment-method-icon wc-block-components-payment-method-icon--"+e;var i=e=>{let{id:t,src:c=null,alt:n=""}=e;return c?Object(a.createElement)("img",{className:l(t),src:c,alt:n}):null},d=c(44);const p=[{id:"alipay",alt:"Alipay",src:d.l+"payment-methods/alipay.svg"},{id:"amex",alt:"American Express",src:d.l+"payment-methods/amex.svg"},{id:"bancontact",alt:"Bancontact",src:d.l+"payment-methods/bancontact.svg"},{id:"diners",alt:"Diners Club",src:d.l+"payment-methods/diners.svg"},{id:"discover",alt:"Discover",src:d.l+"payment-methods/discover.svg"},{id:"eps",alt:"EPS",src:d.l+"payment-methods/eps.svg"},{id:"giropay",alt:"Giropay",src:d.l+"payment-methods/giropay.svg"},{id:"ideal",alt:"iDeal",src:d.l+"payment-methods/ideal.svg"},{id:"jcb",alt:"JCB",src:d.l+"payment-methods/jcb.svg"},{id:"laser",alt:"Laser",src:d.l+"payment-methods/laser.svg"},{id:"maestro",alt:"Maestro",src:d.l+"payment-methods/maestro.svg"},{id:"mastercard",alt:"Mastercard",src:d.l+"payment-methods/mastercard.svg"},{id:"multibanco",alt:"Multibanco",src:d.l+"payment-methods/multibanco.svg"},{id:"p24",alt:"Przelewy24",src:d.l+"payment-methods/p24.svg"},{id:"sepa",alt:"Sepa",src:d.l+"payment-methods/sepa.svg"},{id:"sofort",alt:"Sofort",src:d.l+"payment-methods/sofort.svg"},{id:"unionpay",alt:"Union Pay",src:d.l+"payment-methods/unionpay.svg"},{id:"visa",alt:"Visa",src:d.l+"payment-methods/visa.svg"},{id:"wechat",alt:"WeChat",src:d.l+"payment-methods/wechat.svg"}];var m=c(59);c(262),t.a=e=>{let{icons:t=[],align:c="center",className:n}=e;const s=(e=>{const t={};return e.forEach(e=>{let c={};"string"==typeof e&&(c={id:e,alt:e,src:null}),"object"==typeof e&&(c={id:e.id||"",alt:e.alt||"",src:e.src||null}),c.id&&Object(m.a)(c.id)&&!t[c.id]&&(t[c.id]=c)}),Object.values(t)})(t);if(0===s.length)return null;const l=r()("wc-block-components-payment-method-icons",{"wc-block-components-payment-method-icons--align-left":"left"===c,"wc-block-components-payment-method-icons--align-right":"right"===c},n);return Object(a.createElement)("div",{className:l},s.map(e=>{const t={...e,...(c=e.id,p.find(e=>e.id===c)||{})};var c;return Object(a.createElement)(i,o()({key:"payment-method-icon-"+e.id},t))}))}},279:function(e,t){},280:function(e,t,c){"use strict";var n=c(18),o=c.n(n),a=c(0),s=c(1),r=c(3),l=c(2),i=c(121),d=c(28);class p extends r.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return{errorMessage:e.message,hasError:!0}}render(){const{hasError:e,errorMessage:t}=this.state,{isEditor:c}=this.props;if(e){let e=Object(s.__)("This site is experiencing difficulties with this payment method. Please contact the owner of the site for assistance.","woocommerce");(c||l.CURRENT_USER_IS_ADMIN)&&(e=t||Object(s.__)("There was an error with this payment method. Please verify it's configured correctly.","woocommerce"));const n=[{id:"0",content:e,isDismissible:!1,status:"error"}];return Object(a.createElement)(i.a,{additionalNotices:n,context:d.c.PAYMENTS})}return this.props.children}}p.defaultProps={isEditor:!1},t.a=p},281:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o),s=c(13),r=c(259);c(282);const l=e=>{let{className:t="",id:c,selected:o,onChange:i=(()=>{}),options:d=[]}=e;const p=Object(s.useInstanceId)(l),m=c||p;return d.length?Object(n.createElement)("div",{className:a()("wc-block-components-radio-control",t)},d.map(e=>Object(n.createElement)(r.a,{key:`${m}-${e.value}`,name:"radio-control-"+m,checked:e.value===o,option:e,onChange:t=>{i(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=l},282:function(e,t){},287:function(e,t,c){"use strict";var n=c(0),o=c(4),a=c.n(o),s=c(257);c(263);const r=e=>{let{title:t,stepHeadingContent:c}=e;return Object(n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(n.createElement)(s.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!c&&Object(n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},c))};t.a=e=>{let{id:t,className:c,title:o,legend:s,description:l,children:i,disabled:d=!1,showStepNumber:p=!0,stepHeadingContent:m=(()=>{})}=e;const b=s||o?"fieldset":"div";return Object(n.createElement)(b,{className:a()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":p,"wc-block-components-checkout-step--disabled":d}),id:t,disabled:d},!(!s&&!o)&&Object(n.createElement)("legend",{className:"screen-reader-text"},s||o),!!o&&Object(n.createElement)(r,{title:o,stepHeadingContent:m()}),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(n.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},322:function(e,t,c){"use strict";var n=c(8),o=c(0),a=c(4),s=c.n(a),r=c(13),l=c(41);t.a=function({icon:e,children:t,label:c,instructions:a,className:i,notices:d,preview:p,isColumnLayout:m,...b}){const[u,{width:h}]=Object(r.useResizeObserver)();let g;"number"==typeof h&&(g={"is-large":h>=480,"is-medium":h>=160&&h<480,"is-small":h<160});const O=s()("components-placeholder",i,g),v=s()("components-placeholder__fieldset",{"is-column-layout":m});return Object(o.createElement)("div",Object(n.a)({},b,{className:O}),u,d,p&&Object(o.createElement)("div",{className:"components-placeholder__preview"},p),Object(o.createElement)("div",{className:"components-placeholder__label"},Object(o.createElement)(l.a,{icon:e}),c),!!a&&Object(o.createElement)("div",{className:"components-placeholder__instructions"},a),Object(o.createElement)("div",{className:v},t))}},327:function(e,t,c){"use strict";var n=c(0),o=c(14);const a=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(o.Path,{fillRule:"evenodd",d:"M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",clipRule:"evenodd"}));t.a=a},332:function(e,t,c){"use strict";c.d(t,"a",(function(){return I}));var n=c(1),o=c(37),a=c(0),s=c(4),r=c.n(s),l=c(14),i=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(a.createElement)("path",{d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{fill:"#000",fillRule:"nonzero",d:"M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z"}),Object(a.createElement)("path",{stroke:"#000",strokeLinecap:"round",d:"M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8"}))),d=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(l.Path,{fillRule:"evenodd",d:"M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",clipRule:"evenodd"})),p=Object(a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(l.Path,{d:"M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"})),m=c(327),b=c(103),u=c(59),h=c(61);c(279);const g={bank:d,bill:p,card:m.a,checkPayment:i};var O=e=>{let{icon:t="",text:c=""}=e;const n=!!t,o=Object(a.useCallback)(e=>n&&Object(u.a)(e)&&Object(h.b)(g,e),[n]),s=r()("wc-block-components-payment-method-label",{"wc-block-components-payment-method-label--with-icon":n});return Object(a.createElement)("span",{className:s},o(t)?Object(a.createElement)(b.a,{icon:g[t]}):t,c)},v=c(269),j=c(2),y=c(31),k=c.n(y),_=c(134),E=c(265),w=c(30),f=c(264),S=c(28),N=c(34),C=c(198),P=c(66),M=c(46);const x=(e,t)=>{const c=[],o=(t,c)=>{const n=c+"_tax",o=Object(h.b)(e,c)&&Object(u.a)(e[c])?parseInt(e[c],10):0;return{key:c,label:t,value:o,valueWithTax:o+(Object(h.b)(e,n)&&Object(u.a)(e[n])?parseInt(e[n],10):0)}};return c.push(o(Object(n.__)("Subtotal:","woocommerce"),"total_items")),c.push(o(Object(n.__)("Fees:","woocommerce"),"total_fees")),c.push(o(Object(n.__)("Discount:","woocommerce"),"total_discount")),c.push({key:"total_tax",label:Object(n.__)("Taxes:","woocommerce"),value:parseInt(e.total_tax,10),valueWithTax:parseInt(e.total_tax,10)}),t&&c.push(o(Object(n.__)("Shipping:","woocommerce"),"total_shipping")),c};var R=c(64);const I=()=>{const{isCalculating:e,isComplete:t,isIdle:c,isProcessing:s,onCheckoutBeforeProcessing:r,onCheckoutValidationBeforeProcessing:l,onCheckoutAfterProcessingWithSuccess:i,onCheckoutAfterProcessingWithError:d,onSubmit:p,customerId:m}=Object(N.b)(),{currentStatus:b,activePaymentMethod:u,onPaymentProcessing:h,setExpressPaymentError:g,shouldSavePayment:y}=Object(C.b)(),{shippingErrorStatus:I,shippingErrorTypes:T,onShippingRateSuccess:A,onShippingRateFail:z,onShippingRateSelectSuccess:L,onShippingRateSelectFail:D}=Object(P.b)(),{shippingRates:$,isLoadingRates:V,selectedRates:F,isSelectingRate:B,selectShippingRate:H,needsShipping:W}=Object(R.a)(),{billingData:Y,shippingAddress:G,setShippingAddress:U}=Object(M.b)(),{cartItems:J,cartFees:K,cartTotals:q,extensions:Q}=Object(w.a)(),{appliedCoupons:X}=Object(f.a)(),{noticeContexts:Z,responseTypes:ee}=Object(S.d)(),te=Object(a.useRef)(x(q,W)),ce=Object(a.useRef)({label:Object(n.__)("Total","woocommerce"),value:parseInt(q.total_price,10)});Object(a.useEffect)(()=>{te.current=x(q,W),ce.current={label:Object(n.__)("Total","woocommerce"),value:parseInt(q.total_price,10)}},[q,W]);const ne=Object(a.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";k()("setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",{alternative:"",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228"}),g(e)}),[g]);return{activePaymentMethod:u,billing:{appliedCoupons:X,billingData:Y,cartTotal:ce.current,cartTotalItems:te.current,currency:Object(o.getCurrencyFromPriceResponse)(q),customerId:m,displayPricesIncludingTax:Object(j.getSetting)("displayCartPricesIncludingTax",!1)},cartData:{cartItems:J,cartFees:K,extensions:Q},checkoutStatus:{isCalculating:e,isComplete:t,isIdle:c,isProcessing:s},components:{LoadingMask:_.a,PaymentMethodIcons:v.a,PaymentMethodLabel:O,ValidationInputError:E.a},emitResponse:{noticeContexts:Z,responseTypes:ee},eventRegistration:{onCheckoutAfterProcessingWithError:d,onCheckoutAfterProcessingWithSuccess:i,onCheckoutBeforeProcessing:r,onCheckoutValidationBeforeProcessing:l,onPaymentProcessing:h,onShippingRateFail:z,onShippingRateSelectFail:D,onShippingRateSelectSuccess:L,onShippingRateSuccess:A},onSubmit:p,paymentStatus:b,setExpressPaymentError:ne,shippingData:{isSelectingRate:B,needsShipping:W,selectedRates:F,setSelectedRates:H,setShippingAddress:U,shippingAddress:G,shippingRates:$,shippingRatesLoading:V},shippingStatus:{shippingErrorStatus:I,shippingErrorTypes:T},shouldSavePayment:y}}},381:function(e,t){},425:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(4),a=c.n(o),s=c(30),r=c(28),l=c(117),i=c(287),d=c(34),p=c(266),m=c(1),b=c(21),u=c(198),h=c(322),g=c(50),O=c(94),v=c(103),j=c(327),y=c(2),k=c(25);c(381);const _=()=>Object(n.createElement)(h.a,{icon:Object(n.createElement)(v.a,{icon:j.a}),label:Object(m.__)("Payment methods","woocommerce"),className:"wc-block-checkout__no-payment-methods-placeholder"},Object(n.createElement)("span",{className:"wc-block-checkout__no-payment-methods-placeholder-description"},Object(m.__)("Your store does not have any payment methods configured that support the checkout block. Once you have configured a compatible payment method it will be shown here.","woocommerce")),Object(n.createElement)(g.a,{isSecondary:!0,href:y.ADMIN_URL+"admin.php?page=wc-settings&tab=checkout",target:"_blank",rel:"noopener noreferrer"},Object(m.__)("Configure Payment Methods","woocommerce"))),E=()=>Object(n.createElement)(O.a,{isDismissible:!1,className:a()("wc-block-checkout__no-payment-methods-notice","woocommerce-message","woocommerce-error")},Object(m.__)("There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.","woocommerce"));var w=()=>{const{isEditor:e}=Object(k.a)();return e?Object(n.createElement)(_,null):Object(n.createElement)(E,null)},f=c(332),S=c(40),N=c(13),C=c(259),P=Object(N.withInstanceId)(e=>{let{className:t,instanceId:c,id:o,selected:s,onChange:r,options:l=[]}=e;const i=o||c;return l.length&&Object(n.createElement)("div",{className:a()("wc-block-components-radio-control",t)},l.map(e=>{const t="object"==typeof e&&"content"in e,c=e.value===s;return Object(n.createElement)("div",{className:"wc-block-components-radio-control-accordion-option",key:e.value},Object(n.createElement)(C.a,{name:"radio-control-"+i,checked:c,option:e,onChange:t=>{r(t),"function"==typeof e.onChange&&e.onChange(t)}}),t&&c&&Object(n.createElement)("div",{className:a()("wc-block-components-radio-control-accordion-content",{"wc-block-components-radio-control-accordion-content-hide":!c})},e.content))}))}),M=c(7),x=c(10),R=c(280),I=e=>{let{children:t,showSaveOption:c}=e;const{isEditor:o}=Object(k.a)(),{shouldSavePayment:a,setShouldSavePayment:s}=Object(u.b)(),{customerId:r}=Object(d.b)();return Object(n.createElement)(R.a,{isEditor:o},t,r>0&&c&&Object(n.createElement)(x.CheckboxControl,{className:"wc-block-components-payment-methods__save-card-info",label:Object(m.__)("Save payment information to my account for future purchases.","woocommerce"),checked:a,onChange:()=>s(!a)}))},T=()=>{const{setActivePaymentMethod:e,activeSavedToken:t,isExpressPaymentMethodActive:c,customerPaymentMethods:o}=Object(u.b)(),{paymentMethods:s}=Object(p.b)(),{activePaymentMethod:l,...i}=Object(f.a)(),{noticeContexts:d}=Object(r.d)(),{removeNotice:m}=Object(M.useDispatch)("core/notices"),{dispatchCheckoutEvent:b}=Object(S.a)(),{isEditor:h}=Object(k.a)(),g=Object.keys(s).map(e=>{const{edit:t,content:c,label:o,supports:a}=s[e],r=h?t:c;return{value:e,label:"string"==typeof o?o:Object(n.cloneElement)(o,{components:i.components}),name:"wc-saved-payment-method-token-"+e,content:Object(n.createElement)(I,{showSaveOption:a.showSaveOption},Object(n.cloneElement)(r,{activePaymentMethod:l,...i}))}}),O=Object(n.useCallback)(t=>{e(t),m("wc-payment-error",d.PAYMENTS),b("set-active-payment-method",{value:t})},[b,d.PAYMENTS,m,e]),v=0===Object.keys(o).length&&1===Object.keys(s).length,j=a()({"disable-radio-control":v});return c?null:Object(n.createElement)(P,{id:"wc-payment-method-options",className:j,selected:t?null:l,onChange:O,options:g})},A=c(281);const z=e=>{let{method:t,expires:c}=e;return Object(m.sprintf)(
/* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
Object(m.__)("%1$s ending in %2$s (expires %3$s)","woocommerce"),t.brand,t.last4,c)},L=e=>{let{method:t}=e;return Object(m.sprintf)(
/* translators: %s is the name of the payment method gateway. */
Object(m.__)("Saved token for %s","woocommerce"),t.gateway)};var D=()=>{var e,t;const{customerPaymentMethods:c,activePaymentMethod:o,setActivePaymentMethod:a,activeSavedToken:s}=Object(u.b)(),{paymentMethods:l}=Object(p.b)(),i=Object(f.a)(),{noticeContexts:d}=Object(r.d)(),{removeNotice:m}=Object(M.useDispatch)("core/notices"),{dispatchCheckoutEvent:b}=Object(S.a)(),h=Object(n.useMemo)(()=>Object.keys(c).flatMap(e=>c[e].map(t=>{const c="cc"===e||"echeck"===e,n=t.method.gateway;return{name:"wc-saved-payment-method-token-"+n,label:c?z(t):L(t),value:t.tokenId.toString(),onChange:e=>{a(n,{token:e,payment_method:n,[`wc-${n}-payment-token`]:e.toString(),isSavedToken:!0}),m("wc-payment-error",d.PAYMENTS),b("set-active-payment-method",{paymentMethodSlug:n})}}})).filter(Boolean),[c,a,m,d.PAYMENTS,b]),g=s&&l[o]&&null!==(e=l[o])&&void 0!==e&&e.savedTokenComponent?Object(n.cloneElement)(null===(t=l[o])||void 0===t?void 0:t.savedTokenComponent,{token:s,...i}):null;return h.length>0?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(A.a,{id:"wc-payment-method-saved-tokens",selected:s,options:h}),g):null},$=()=>{const{isInitialized:e,paymentMethods:t}=Object(p.b)(),{customerPaymentMethods:c}=Object(u.b)();return e&&0===Object.keys(t).length?Object(n.createElement)(w,null):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(D,null),Object.keys(c).length>0&&Object(n.createElement)(b.a,{label:Object(m.__)("Use another payment method.","woocommerce"),screenReaderLabel:Object(m.__)("Other available payment methods","woocommerce"),wrapperElement:"p",wrapperProps:{className:["wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned"]}}),Object(n.createElement)(T,null))},V=()=>Object(n.createElement)($,null),F=c(267),B={...Object(F.a)({defaultTitle:Object(m.__)("Payment options","woocommerce"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},H=c(121);t.default=Object(l.withFilteredAttributes)(B)(e=>{let{title:t,description:c,showStepNumber:o,children:l,className:p}=e;const{isProcessing:m}=Object(d.b)(),{cartNeedsPayment:b}=Object(s.a)(),{noticeContexts:u}=Object(r.d)();return b?Object(n.createElement)(i.a,{id:"payment-method",disabled:m,className:a()("wc-block-checkout__payment-method",p),title:t,description:c,showStepNumber:o},Object(n.createElement)(H.a,{context:u.PAYMENTS}),Object(n.createElement)(V,null),l):null})}}]);