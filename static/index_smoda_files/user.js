var PRISA = PRISA || {};

(function (namespace) {
	'use strict';
	var loaded = false;
	var tout = false;
	var listeners = [];
	var pxlUrl = "//pxlctl.elpais.com/pxlctl.gif?m=1";
	var idxUN = -1;
	var user = {
		// Properties
		data: {
			uid: undefined,
			nickname: undefined,
			nombre: undefined,
			apellido1: undefined,
			nombre_bonito: undefined,
			avatar:undefined
		},

		dataWsUserInfo:{
			"status" : -1,
			"id": {
				"uid": undefined,
				"nick": undefined,
				"ts": undefined,
				"nom": undefined,
				"ap1": undefined,
				"nb": undefined,
				"avat": undefined
			}
		},

		// Methods
		init: function(mediaIndex) {
			var rndPXL=parseInt(Math.random()*10000000);
			var imgMMD=new Image(1,1);
			var that = this;
			if (mediaIndex == 1)
				imgMMD.src=pxlUrl + "&w="+rndPXL;
			else
				imgMMD.src=pxlUrl + "&r="+mediaIndex+"&w="+rndPXL;

			//Si no se llama al init no tiene que haber listeners definidos
			tout = window.setTimeout( function() {
				tout = false;
				that.callListeners();
			}, 2000);

			imgMMD.onload = function() {
				if (!tout) return;
				window.clearTimeout(tout);
				that.callListeners();
			};
		},

		getData: function(fmt) {
			if (fmt && fmt == "ws")
				return this.dataWsUserInfo
			else
				return this.data;
		},

		addListener: function(f, fmt, obj) {
			if (loaded)
				f.call(obj, (fmt && fmt == "ws" ? this.dataWsUserInfo : this.data));
			else
				listeners.push({f:f, fmt:fmt, obj:obj});
		},

		callListeners: function() {
			this.loadData();
			loaded = true;
			listeners.forEach(function (listener) {
				listener.f.call(listener.obj, (listener.fmt && listener.fmt == "ws" ? this.dataWsUserInfo : this.data));
			}, this);
		},

		loadData: function() {
			var c,
				found = false,
				cookies = decodeURIComponent(document.cookie).split(';');

			for(var i = 0; i <cookies.length; i++) {
				c = cookies[i].trim();
				if (c.substr(0,7) == 'uid_ns=') {
					found = true;
					break;
				}
			}
			if (!found) return;

			var c_parts = c.substr(7).split('#');
			this.data.uid = c_parts[0];
			this.data.nickname = c_parts[1];
			this.dataWsUserInfo.status = 1;
			this.dataWsUserInfo.id.uid = this.data.uid;
			this.dataWsUserInfo.id.nick = this.data.nickname;
			window.PEPuid = this.data.uid;
			window.PEPuname = this.data.nickname;

			if (c_parts[3]) {
				var extra = [];
				var data = c_parts[3].match(/:[^|]+|[^:]+/g);
				for (var n=0; n<data.length; n+=2) {
					extra[data[n]] = data[n+1].substr(1);
				}
				this.data.nombre = this.decodeBase64ToUTF8(extra[':NOM']);
				this.data.apellido1 = this.decodeBase64ToUTF8(extra[':AP1']);
				this.data.nombre_bonito = this.decodeBase64ToUTF8(extra[':NB']);
				this.data.avatar = this.getAvatar(this.data.nickname);

				this.dataWsUserInfo.id.nom = extra[':NOM'];
				this.dataWsUserInfo.id.ap1 = extra[':AP1'];
				this.dataWsUserInfo.id.nb = extra[':NB'];
				this.dataWsUserInfo.id.ts = extra[':TS'];
				this.dataWsUserInfo.id.avat = this.data.avatar;
			}
		},

		decodeBase64ToUTF8: function(enc){
			if (!enc || enc == "")
				return "";
			var bytes = [],
				alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
				c1,c2,c3,c4,
				off = 0;
			enc=enc.replace(/[^A-Za-z0-9\+\/\=]/g,"");
			while(off<enc.length){
				c1=alphabet.indexOf(enc[off++]);
				c2=alphabet.indexOf(enc[off++]);
				c3=alphabet.indexOf(enc[off++]);
				c4=alphabet.indexOf(enc[off++]);

				bytes.push(c1<<2|c2>>4);
				if (c3==64) break;
				bytes.push((c2&15)<<4|c3>>2);
				if (c4==64) break;
				bytes.push((c3&3)<<6|c4);
			}
			return this.decodeBase64(bytes);
		},

		decodeBase64: function(bytes) {
  			var dec = "",
				c1, c2, c3,
				off = 0;

  			while (off < bytes.length) {
    			c1 = bytes[off++];
    			if (128 > c1) {
      				dec += String.fromCharCode(c1);
    			} else if (191 < c1 && c1 < 224) {
					c2 = bytes[off++];
      				dec += String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
    			} else {
					c2 = bytes[off++];
    				c3 = bytes[off++];
      				dec += String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
    			}
  			}
  			return dec;
		},

		getAvatar: function (nickname) {
			if (!nickname || nickname == "")
				return "";

			var ordinals = [0,0];
			for(var i = 0; i < nickname.length; i++)
				ordinals[i%2] += nickname[i].charCodeAt(0);

			var disp1 = (ordinals[0] % 16).toString(16).toUpperCase();
			while (disp1.length < 1) disp1 = "0" + disp1;

			var disp2 = (ordinals[1] % 256).toString(16).toUpperCase();
			while (disp2.length < 2) disp2 = "0" + disp2;

			var urlAvatar = "/miperfil/avatares/" + disp1 + "/" + disp2 + "/" + nickname + ".jpg";

			return urlAvatar;
		},

		trackAgain: function()
		{
			//Simplemente vuelve a marcar la pagina, no hay que ejecutar callbacks
			if (idxUN < 0)
				return;
			var rndPXL=parseInt(Math.random()*10000000);
			var imgMMD=new Image(1,1);

			if (idxUN == 1)
				imgMMD.src=pxlUrl + "&w="+rndPXL;
			else
				imgMMD.src=pxlUrl + "&r="+idxUN+"&w="+rndPXL;
		}

	}

	user.loadData();

	var arr_scripts = document.getElementsByTagName('script');
	var myScript = arr_scripts[ arr_scripts.length - 1 ];
	var resultIdx = /i=(\d+)/.exec(myScript.src);

	if (resultIdx)
	{
		idxUN = resultIdx[1];
		user.init(idxUN);
	}

	namespace.user = user;
})(PRISA);
