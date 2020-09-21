"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var antd_1 = require("antd");
var axios_1 = require("axios");
var apiSuccessCode = [0];
var singleton = (function () {
    var instance;
    function init() {
        var axiosInstance = axios_1.default.create({
            withCredentials: true,
            /**
             * 表示服务器将响应的数据类型
             * 包括 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
             */
            responseType: 'json',
        });
        axiosInstance.interceptors.request.use(function (config) {
            config.headers = __assign({}, config.headers);
            return config;
        }, function (error) { return Promise.reject(error); });
        axiosInstance.interceptors.response.use(function (response) { return response; }, function (error) { return Promise.reject(error); });
        return axiosInstance;
    }
    return {
        getInstance: function () {
            return instance ? instance : instance = init();
        },
    };
}());
function request(options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        singleton.getInstance()
            .request(options)
            .then(function (info) {
            // @ts-ignore
            if (info.data && Object.prototype.hasOwnProperty.call(info.data, 'code') && !apiSuccessCode.includes(info.data.code)) {
                // @ts-ignore
                antd_1.message.error(info.data.msg || '');
                reject(info.data);
            }
            else {
                resolve(info.data);
            }
        })
            .catch(function (info) {
            antd_1.message.error(info.message);
            reject(info);
        });
    });
}
exports.request = request;
