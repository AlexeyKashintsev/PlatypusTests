/**
 * 
 * @author user
 */
function AnonymousChat() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var userName;
    // TODO : place your code here
    var chat = new P.ServerModule("chatServer");

    model.requery(function () {
        // TODO : place your code here
    });


    var webSocket = null;
    function addEventsListener() {
        var eventsTypes = "";
        var delimiter = "";

        if (webSocket) {
            webSocket.close();
            webSocket = null;
        }
        var wsProtocol = "ws:";
        if (window.location.protocol == 'https:')
            wsProtocol = "wss:";

        webSocket = new WebSocket(wsProtocol + "//" + window.location.host + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/chatServer");
        console.log(webSocket);
        webSocket.onopen = function () {
            P.Logger.info("onOpen");
        };

        webSocket.onerror = function () {
            P.Logger.info("onError");
        };

        webSocket.onmessage = function (aEventData) {
            P.Logger.info("onMessage");
            form.txtChatField.text += aEventData.data;
        };
        webSocket.onclose = function () {
            P.Logger.info("onClose");
        };
    }

    var uNameCallback = function (aName) {
        userName = aName;
        form.txtMessage.focus();
        form.toFront();
    };

    self.show = function () {
        var uNameForm = new askUserName();
        form.show();
        uNameForm.showModal(uNameCallback);
        addEventsListener();
        
    };

    form.btnSend.onActionPerformed = function (event) {
        webSocket.send(userName + ": " + form.txtMessage.text + "\r\n");
        form.txtMessage.text = "";
    };
    form.txtMessage.onActionPerformed = function (event) {
        webSocket.send(userName + ": " + form.txtMessage.text + "\r\n");
        form.txtMessage.text = "";
    };
}