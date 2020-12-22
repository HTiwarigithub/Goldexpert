var crypto = require('crypto');
const Paytm = require('paytm-pg-node-sdk');


exports.orderid = (req, res) => {
    db.close();
    db.connect(conn, () => {
        
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'OrderId');
        request.input('Amount', db.NVarChar, req.body.Amount);
        request.input('User_ID', db.NVarChar, req.body.User_ID);
        request.execute('Payment', (error, result) => {
            if (error) {
               
                if(error.message == ""){
                    res.send({
                        "status": "0",
                        "message": "Error Occured!",
                        "data": {}
                    });
                    
                }else{
                    res.send({
                        "status": "0",
                        "message": "Error Occured",
                        "data": {}
                    });
                }
               
            }if (result){
                console.log("hiiiiiiiiii",result)
                var key = "CA9nIRrB"
                var orderID = '223428947'
                var amount = '1.0'
                var productInfo = 'My Product Name'
                var email = 'gmail@gmail.com'
                var firstName = 'Vaibhav'
                var phoneno = '8318045008'
                var salt = '53HWzcRBbU'
                var cryp = crypto.createHash('sha512');
                var text = key+'|'+orderID+'|'+amount+'|'+productInfo+'|'+firstName+'|'+email+'|'+phoneno+'||||||||||'+salt;
                cryp.update(text);
                var hash = cryp.digest('hex');
                res.send({
                    "status": "1",
                    "message": "Order ID generated",
                    "hash":hash,
                    "orderID": result.recordset[0].orderID
                });
            }
        });
    });
};


exports.updatetxn = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'update_txn');
        request.input('orderID', db.NVarChar, req.body.orderID);
        request.input('transaction_id', db.NVarChar, req.body.transaction_id);
        request.execute('Payment', (error, result) => {
        console.log(error)
            if (error) {
                if(error.message == ""){
                    res.send({
                        "status": "0",
                        "message": "Error !",
                        "data": {}
                    });
                    
                }else{
                    res.send({
                        "status": "0",
                        "message": "Error Occured",
                        "data": {}
                    });
                }
               
            }if (result){
               
                res.send({
                    "status": "1",
                    "message": "Transaction Complete",
                    "data": result.recordset
                });
            }
        });
    });
};

exports.Paytm_op = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var mid = "DIY12386817555501617";
        var key = "bKMfNxPPf_QdZppa";
        var website = "a.com";
        var client_id = "50";
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'Paytmtxn');
        request.input('Amount', db.NVarChar, req.body.Amount);
        request.input('User_ID', db.NVarChar, req.body.User_ID);
        request.execute('Payment', (error, result) => {
            if (error) {
               
                if(error.message == ""){
                    res.send({
                        "status": "0",
                        "message": "Error Occured!",
                        "data": {}
                    });
                    
                }else{
                    res.send({
                        "status": "0",
                        "message": "Error Occured",
                        "data": {}
                    });
                }
               
            }if (result){
                console.log("hiiiiiiiiii",result)
                Paytm.MerchantProperties.initialize(mid, key, client_id, website);
                Paytm.Config.logName = "[PAYTM]";
                Paytm.Config.logLevel = Paytm.LoggingUtil.LogLevel.INFO;
                Paytm.Config.logfile = ""
                var channelId = Paytm.EChannelId.WEB;
                var orderId = "57";
                var txnAmount = Paytm.Money.constructWithCurrencyAndValue(Paytm.EnumCurrency.INR, "1.00");
                var userInfo = new Paytm.UserInfo("client_id");
                userInfo.setMobile("8010927353");
                userInfo.setEmail("email@email.com");
                var paymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
                var paymentDetail = paymentDetailBuilder.build();
                var response = Paytm.Payment.createTxnToken(paymentDetail);
                console.log("heloooooo",response)
                res.send({
                    "status": "1",
                    "message": "Order ID generated",
                    "response":response,
                    "orderID": result.recordset[0].orderID
                });
            }
        });
    });
};