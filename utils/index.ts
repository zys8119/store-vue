import {utilsOptions} from "../types";
import configs from "../configs"
let initUtils = {};
if(configs.$utils){
    try {
        initUtils = require("@/utils/index.js").default;
    }catch (e){
        initUtils = {};
        console.error(`【store-vue】警告警告：请确认 @ 路径下的 'utils/index.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
        console.warn(`'utils/index.js' 是用于设置vue全局工具函数\n
    示例:utils/index.js
    
        export default {
            a:(val){
                return val + 1;
            },
            //....
        }
    `)
    }
}
export default <utilsOptions>{
    isEmail (email) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email)
    },
    isEmails (email) {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
    },
    isPhone (phone:number) {
        return /^1[34578]\d{9}$/.test(<any>(phone / 1))
    },
    isNumber (value) {
        return typeof (value / 1) === 'number' && (value / 1).toString() !== 'NaN'
    },
    isNumbers (value) {
        return /^\d+$/.test(value);
    },
    is_S (str) {
        if(!str){
            return true;
        }
        return !/\S/.test(str)
    },
    isPhoneFixation (PhoneFixation) {
        return /([0-9]{3,4}-)?[0-9]{7,8}/.test(PhoneFixation)
    },
    IdCodeValid(code){
        //身份证号合法性验证
        //支持15位和18位身份证号
        //支持地址编码、出生日期、校验位验证
        var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
        var row={
            'pass':true,
            'msg':'验证成功'
        };
        if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)){
            row={
                'pass':false,
                'msg':'身份证号格式错误'
            };
        }else if(!city[code.substr(0,2)]){
            row={
                'pass':false,
                'msg':'身份证号地址编码错误'
            };
        }else{
            //18位身份证需要验证最后一位校验位
            if(code.length == 18){
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                //校验位
                var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++)
                {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                if(parity[sum % 11] != code[17].toUpperCase()){
                    row={
                        'pass':false,
                        'msg':'身份证号校验位错误'
                    };
                }
            }
        }
        return row;
    },
    isIdCard (code) {
        return this.IdCodeValid(code).pass;
    },
    parseQuery (query = location.href) {
        var bb:any;
        bb = query.split("?");
        bb = bb.map(function(e){
            return e.split("&")
        })
        var result3 = {};
        bb.forEach(function(e) {
            e.forEach(function(it) {
                if (it.split('=')[0]) {
                    var c = it.split('=')[1];
                    if(c){
                        var d = c.replace(/(#|#\/).*/img,"");
                        result3[it.split('=')[0]] = d;
                    }
                }
            });
        })
        return result3;
        // const result = {}
        // const nq = query.replace(/^\?/, '')
        // const part = nq.split('&')
        // part.forEach(it => {
        //   if (it.split('=')[0]) {
        //     result[it.split('=')[0]] = it.split('=')[1]
        //   }
        // })
        // return result
    },
    isIllegality (PhoneFixation) {
        return /^[a-zA-Z0-9]+$/i.test(PhoneFixation)
    },
    templateParsing (d, key, val, options) {
        key = key || ''
        val = val || ''
        options = options || {}
        options.t1 = '{{'
        options.t2 = '}}'
        if (typeof val === 'object') {
            for (let i in val) {
                options[i] = val[i]
            }
            val = ''
        }
        if (typeof key !== 'string') {
            for (var i in key) {
                d = JSON.stringify(d).replace(new RegExp(options.t1 + i + options.t2, 'img'), key[i])
                d = JSON.parse(d)
            }
        } else {
            d = JSON.stringify(d).replace(new RegExp(options.t1 + key + options.t2, 'img'), val)
            d = JSON.parse(d)
        }
        return d
    },
    exactNum (value) {
        if (value === undefined) {
            return
        }
        if (!('' + value).split('.')[1]) {
            return value
        }
        const decimalLength = ('' + value).split('.')[1].length
        if (decimalLength > 7) {
            return <any>(value / 1).toFixed(decimalLength - 2) / 1
        } else {
            return value
        }
    },
    //数组去重
    dereplicationToArray(data){
        var res = [];
        var json:{[key:string]:any};
        json = {};
        for(var i = 0; i < data.length; i++){
            if(!json[data[i]]){
                res.push(data[i]);
                json[data[i]] = 1;
            }
        }
        return res;
    },
    //电话
    isTel(value){
        return /(^[0-9]{1,4}-[0-9]{1,3}-[0-9]{4}$)|(^[0-9]{13}$)|(^[0-9]{1,4}-[0-9]{7,8}$)/.test(value);
    },
    //判断重复数据
    iss(ary){
        ary = ary || [];
        var nary=ary.sort();
        var bool = false;
        for(var i=0;i<ary.length;i++){
            if (nary[i]==nary[i+1]){
                bool = true;
            }
        }
        return bool;
    },
    //过滤重复数据，并保留重复数据
    filterDs(data){
        var retlist = [];
        data.forEach(function(e){
            var newData = data.filter(function(d){
                return (d == e);
            });
            if(newData.length > 1){
                retlist.push(e);
            }
        });
        return this.dereplicationToArray(retlist);
    },
    //图片上传兼容【苹果拍照图片旋转】
    imagesRotate(f,fn:(...arg:any)=>void,bool) {
        if(!bool){
            var file2 = new FileReader();
            file2.readAsDataURL(f);
            file2.onload=function (newe) {
                fn(newe.target.result);
            };
            return;
        }
        var file = new FileReader();
        file.readAsArrayBuffer(f);
        file.onload = function (e:any) {
            try {
                var view = new DataView(e.target.result);
                var offset = 0
                    , len = view.byteLength;
                if (view.getUint16(0, false) != 0xFFD8){
                    console.log("不是 JPEG 文件");
                }
                while (offset < len) {
                    if (view.getUint16(offset, false) == 0xFFE1) break;
                    else offset += 2;
                }
                if (offset >= len){
                    console.log("没找到 APP1 标识")
                }
                var APP1_offset = offset;
                var EXIF_offset = APP1_offset + 4;
                if (view.getUint32(EXIF_offset, false) != 0x45786966){
                    console.log("无 EXIF")
                }
                var TIFF_offset = EXIF_offset + 6;
                var little = view.getUint16(TIFF_offset, false)  == 0x4949 ? true : false;
                var IFD0_offset = TIFF_offset + view.getUint32(TIFF_offset + 4);
                var entries_count =  view.getUint16(IFD0_offset, little);
                var entries_offset = IFD0_offset + 2;
                for (let i = 0; i < entries_count; i++ ) {
                    var tag_offset = entries_offset + (i * 12);
                    if (view.getUint16(tag_offset, little) == 0x0112) {
                        var resolve_value = view.getUint16(tag_offset + 8, little);
                        var file2 = new FileReader();
                        file2.readAsDataURL(f);
                        file2.onload=function (newe) {
                            var canvas:any;
                            canvas = document.createElement('CANVAS');
                            var ctx = canvas.getContext('2d');
                            var img:any;
                            img = new Image();
                            img.style.transform = "rotate(90deg)"
                            img.onload = function(){
                                var x = (<any>this).width;
                                var y = (<any>this).height;
                                canvas.width = y;
                                canvas.height = x;
                                ctx.clearRect(0,0, x, y);//先清掉画布上的内容
                                if(resolve_value == 6){
                                    ctx.translate(y/2,x/2);//将绘图原点移到画布中点
                                    ctx.rotate((Math.PI/180)*90);//旋转角度
                                    ctx.translate(-x/2,-y/2);//将画布原点移动
                                }
                                ctx.drawImage(img,0,0);
                                var url = canvas.toDataURL('image/jpeg',1.0);
                                fn(url);
                            }
                            img.src = newe.target.result;
                        }

                    }
                }
            }catch (e){
                var file3 = new FileReader();
                file3.readAsDataURL(f);
                file3.onload=function (newe) {
                    fn(newe.target.result);
                }
            }

        }
    },
    //不四舍五入
    NoRound(a,length){
        length = length || 0;
        var b:any;
        b = '';
        var index = (<any>a).indexOf(".");
        var index2 = 0;
        if(index > 0){
            for(var  i = 0 ; i < (<any>a).length;i++){
                if(index < i){
                    if(i <index2+length+1){
                        b += a[i];
                    }else{
                        break;
                    }
                }else{
                    index2 = i;
                    b += a[i];
                }
            }
        }else{
            b = a;
        }
        return b;
    },
    /**
     * 判断是否手ios或android
     * */
    isIosAndroid(){
        var bool = true;
        var ua = window.navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            bool = true;
        } else if (/android/.test(ua)) {
            bool = false;
        }
        return bool;
    },
    /**
     * @退出登录
     * @param _this 当前的vm
     * */
    Logout(_this){
        _this.action({
            moduleName:'login_post',
            goods:undefined,
        });
        _this.action({
            moduleName:'prefectInfo',
            goods:undefined,
        });
        _this.action({
            moduleName:'prefectInfo',
            goods:{},
        });
        delete localStorage.login_post;
        _this.$router.push("/Login");
    },
    /**
     * @搜索对应父组件的key值
     * @param parent 当前的vm.parent
     * @param keyName 需要搜索的key值名称
     * */
    SearchParentKey(parent, keyName){
        try {
            if(parent && keyName){
                if(keyName in parent){
                    return {
                        parent:parent,
                        value:parent[keyName]
                    };
                }else {
                    return this.SearchParentKey(parent.$parent, keyName);
                }
            }else {
                return {};
            }
        }catch (e){
            return {};
        }
    },
    /**
     @普通字符转换成转意符
     @param str 需要转译的字符
     */
    escape2Html(str) {
        var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
    },
    ...initUtils
}