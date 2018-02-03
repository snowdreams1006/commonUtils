/**
 * validateUtils.js
 * 
 * author:snowdreams1006
 * 
 * email:snowdreams1006@163.com
 * 
 * website:https://github.com/snowdreams1006/commonUtils
 */
var validateUtils = (function() {
	var validateUtils = {
		/**
		 * 验证密码
		 * @param {Object} value
		 */
		isPassword: function(value) {
			var reg = /^(?![^a-zA-Z]+$)(?!\D+$)/;
			return reg.test(value);
		},
		/**
		 * 验证邮箱
		 * @param {Object} value
		 */
		isEmail: function(value) {
			var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			return reg.test(value);
		},
		/**
		 * 验证手机
		 * @param {Object} value
		 */
		isPhone: function(value) {
			var reg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/;
			return reg.test(value);
		},
		/**
		 * 验证url
		 * @param {Object} value
		 */
		isUrl: function(value) {
			var reg = /^(\w+:\/\/)?\w+(\.\w+)+.*$/;
			return reg.test(value);
		},
		/**
		 * 验证邮政编码
		 * @param {Object} value
		 */
		isZipcode: function(value) {
			var reg = /^[0-9]{6}$/;
			return reg.test(value);
		}
	};
	return validateUtils;
})();