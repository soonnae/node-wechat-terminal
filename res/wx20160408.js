...entire code...
                    postTextMessage: function(e) {
                        var t = {
                            Type: confFactory.MSGTYPE_TEXT,
                            Content: e.MMSendContent
                        };
                        e.MMAtContacts && e.MMAtContacts.length && (t.MsgSource = "<msgsource><atusername>" + e.MMAtContacts + "</atusername><atchatroomname>" + e.ToUserName + "</atchatroomname></msgsource>");
                        // Avoid using eval for sanitization
                        // this._postMessage(confFactory.API_webwxsendmsg, t, e);
                        this._postMessage(confFactory.API_webwxsendmsg, JSON.parse(JSON.stringify(t)), e);
                    },
                    ...
                    setCookie: function(e, t, o) {
                        var n = new Date;
                        n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
                        var r = "expires=" + n.toUTCString();
                        // Ensure cookies are set with the Secure attribute
                        document.cookie = e + "=" + t + "; " + r + "; Secure";
                    },
...
