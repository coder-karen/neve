!function(){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(){}function u(){}u.resetWarningCache=s;var e,p=(function(e){e.exports=function(){function e(e,t,n,o,r,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:s};return n.PropTypes=n}()}(e={exports:{}},e.exports),e.exports),m=wp.i18n.__,f=wp.element.Component,g=wp.components.ToggleControl,y=function(e){function n(e){var t;return r(this,n),(t=i(this,l(n).call(this,e))).state={value:e.control.setting.get()},t}return a(n,f),t(n,[{key:"toggleValue",value:function(e){this.setState({value:e}),this.props.control.setting.set(e)}},{key:"render",value:function(){var t=this;return wp.element.createElement(g,{label:m("A customizer toggle"),checked:this.state.value,onChange:function(e){return t.toggleValue(e)}})}}]),n}();y.propTypes={control:p.object.isRequired};var h=wp.customize.Control.extend({renderContent:function(){ReactDOM.render(wp.element.createElement(y,{control:this}),this.container[0])}}),b=wp.i18n.__,d=wp.element,v=d.Component,w=d.Fragment,O=wp.editor.MediaPlaceholder,C=wp.components,E=C.Button,P=C.ButtonGroup,S=C.RangeControl,_=C.FocalPointPicker,j=C.Dashicon,k=C.ColorPalette,x=C.ToggleControl,T=function(e){function o(e){var t;r(this,o),t=i(this,l(o).call(this,e));var n=e.control.setting.get();return t.state={type:n.type||"color",imageUrl:n.imageUrl||"",focusPoint:n.focusPoint||{x:.5,y:.5},colorValue:n.colorValue||"#ffffff",overlayColorValue:n.overlayColorValue||"#000000",overlayOpacity:n.overlayOpacity||50,fixed:n.fixed||!1},t}return a(o,v),t(o,[{key:"getButtons",value:function(){var e={color:b("Color"),image:b("Image")},n=[],o=this;return["color","image"].map(function(t){n.push(wp.element.createElement(E,{isPrimary:o.state.type===t,isDefault:o.state.type!==t,onClick:function(e){o.setState({type:t}),o.updateSetting()}},e[t]))}),n}},{key:"render",value:function(){var t=this,n=this,e=[{name:"black",color:"#000000"},{name:"white",color:"#ffffff"},{name:"red",color:"#cc433c"},{name:"orange",color:"#d39b48"},{name:"green",color:"#95d45a"},{name:"blue",color:"#3972b8"}];return wp.element.createElement(w,null,this.props.control.params.label&&wp.element.createElement("span",{className:"customize-control-title"},this.props.control.params.label),wp.element.createElement("div",{className:"control--top-toolbar"},wp.element.createElement(P,{className:"neve-background-type-control"},this.getButtons())),wp.element.createElement("div",{className:"control--body"},"color"===this.state.type&&wp.element.createElement(k,{colors:e,value:this.state.colorValue,onChange:function(e){n.setState({colorValue:e}),n.updateSetting()}}),"image"===this.state.type&&wp.element.createElement(w,null,!this.state.imageUrl&&wp.element.createElement(O,{icon:"format-image",labels:{title:b("Image"),instructions:b("Select from the Media Library or upload a new image")},onSelect:function(e){t.setState({imageUrl:e.url}),t.updateSetting()},allowedTypes:["image"]})||wp.element.createElement(w,null,wp.element.createElement(E,{className:"remove-image",isDestructive:!0,isLink:!0,onClick:function(){t.setState({imageUrl:""}),t.updateSetting()}},wp.element.createElement(j,{icon:"no"}),"Remove Image"),wp.element.createElement(_,{url:this.state.imageUrl,value:this.state.focusPoint,onChange:function(e){t.setState({focusPoint:{x:parseFloat(e.x).toFixed(2),y:parseFloat(e.y).toFixed(2)}}),t.updateSetting()}})),wp.element.createElement(x,{label:b("Fixed Background"),checked:this.state.fixed,onChange:function(e){t.setState({fixed:e}),t.updateSetting()}}),wp.element.createElement("span",{className:"customize-control-title"},b("Overlay Color")),wp.element.createElement(k,{colors:e,value:this.state.overlayColorValue,onChange:function(e){n.setState({overlayColorValue:e}),n.updateSetting()}}),wp.element.createElement(S,{label:b("Overlay Opacity"),value:this.state.overlayOpacity,onChange:function(e){t.setState({overlayOpacity:e}),t.updateSetting()},min:"0",max:"100"}))))}},{key:"updateSetting",value:function(){var e=this;setTimeout(function(){e.props.control.setting.set(function(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(a,!0).forEach(function(e){var t,n,o;t=r,o=a[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):n(a).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}({},e.props.control.setting.get(),{},e.state))},100)}}]),o}();T.propTypes={control:p.object.isRequired};var R=wp.customize.Control.extend({renderContent:function(){ReactDOM.render(wp.element.createElement(T,{control:this}),this.container[0])}});wp.customize.controlConstructor.neve_toggle_control=h,wp.customize.controlConstructor.neve_background_control=R}();
