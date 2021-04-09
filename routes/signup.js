exports.signupUser = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'Select');
        request.input('phone_no', db.NVarChar, req.body.phone_no);
        request.input('device_ID', db.NVarChar, req.body.device_ID);
        request.execute('prc_SignUp', (error, result) => {
            console.log("update",result.recordset[0].Is_logintrue)
            if (error) {
                console.log("sdvsdv",error)
                if(error.message == ""){
                    res.send({
                        "status": "0",
                        "message": "Error !",
                        "data": []
                    });
                    
                }else{
                    res.send({
                        "status": "0",
                        "message": "Please Sign-up",
                        "data": []
                    });
                
                }

            }if (result.recordset[0].Is_logintrue == 'false'){
                
                    res.send({
                        "status": "1",
                        "message": "OTP Sent",
                        "data": result.recordset
                    });    
            }
            else if(result.recordset[0].device_ID != req.body.device_ID){
                res.send({
                    "status": "0",
                    "message": "Already Login From Other Device",
                    "data": []
                })
            }
            else {
                res.send({
                    "status":"1",
                    "message":"Login Successful..!",
                    "data":result.recordset
                })
            }
    });
    
});
};
    
exports.signup = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'Select');
        request.input('Name_', db.NVarChar, req.body.Name_);
        request.input('phone_no', db.NVarChar, req.body.phone_no);
        request.input('Machine_no', db.NVarChar, req.body.Machine_no);
        request.input('enrolment_date', db.NVarChar, req.body.enrolment_date);
        request.execute('prc_SignUp', (error, result) => {    
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
                
                if (result.recordset.hasOwnProperty("Phone_no"))
                { 
                    res.send({
                        "status": "0",
                        "message": "Already Registered!",
                        "data": []
                    });
                }else{ 
                    res.send({
                        "status": "1",
                        "message": "Registration Done",
                        "data": result.recordset
                });
                }    
            }
        });
    });

};

exports.validate_otp = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'Validation');
        request.input('Signup_ID', db.NVarChar, req.body.Signup_ID);
        request.input('otp', db.NVarChar, req.body.otp);
        request.execute('prc_SignUp', (error, result) => {
            if (error) {
                console.log("fgdzfgsdfvgsdzf",error)
                res.send({
                    "status": "0",
                    "message": "Error occured",
                    "data": {}
                });
            }else{
                console.log("resulxcvzxdcvxct",result)
              if(result.recordset[0].Is_logintrue == 'false'){
                res.send({
                    "status": "1",
                    "message": "OTP verified",
                    "data": result.recordset
                    
                });
              }else if((result.recordset[0].Is_logintrue == 'true')){
                
                res.send({
                    "status": "1",
                    "message": "OTP verified",
                    "data": result.recordset
                });
              }
              else{
                  res.send({
                      "status":"0",
                      "message":"OTP Failed.!",
                      "data":result.recordset
                  })
              }
                
            }
           
        });
    });
};

exports.ResendOtp = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'ResendOtp');
        request.input('phone_no', db.NVarChar, req.body.phone_no);
        request.execute('prc_SignUp', (error, result) => {
            
            if (error) {
                res.send({
                    "status": "0",
                    "message": "Error occured",
                    "data": {}
                });
            }else{
                
              if(result.recordset[0].result == 'false'){
                res.send({
                    "status": "1",
                    "message": "Validation Fail!",
                    "data": result.recordset[0].result
                    
                });
              }else if((result)){
                
                res.send({
                    "status": "1",
                    "message": "OTP sent again",
                    "data": result.recordset
                });
              }

                
            }
           
        });
    });
};

exports.adminlogin = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'Select_admin');
        request.input('User_name', db.NVarChar(255), req.body.User_name);
        request.input('Password', db.NVarChar(255), req.body.Password);
        request.execute('admin', function (error, results) {
            if (error) {
                console.log('hiiiii',error)
                res.send({
                    "status": "0",
                    "message": "Error Ocurred",
                    "result": {}
                })
            }
            else {
                console.log(results);
                if (results.recordset == 0) {
                    res.send({
                        "status": "0",
                        "message": "Wrong Credential..!!",
                        "result": []
                    })
                }
                else {
                    console.log("hoooo",results.recordset)
                    res.send({
                        "status": "1",
                        "message": "Admin Logged",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};

exports.Admininsert = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'Insert_user');
        request.input('Name_', db.NVarChar, req.body.Name_);
        request.input('phone_no', db.NVarChar, req.body.phone_no);
        request.input('Machine_no', db.NVarChar, req.body.Machine_no);
        request.input('enrolment_date', db.NVarChar, req.body.enrolment_date);
        request.input('mode', db.NVarChar, req.body.mode);
        request.input('Amount', db.NVarChar, req.body.Amount);
        request.input('App_type', db.NVarChar, req.body.App_type);
        request.input('Remarks', db.NVarChar, req.body.Remarks); 
        request.execute('admin', (error, results) => {
            if (error) {
                console.log("hooooo",error)
                res.send({
                    "status": "0",
                    "message": "Error Ocurred",
                    "result": {}
                })
            }
            else {
                console.log("heloooooooooo",results.recordset)
                if (results.recordset == 0) {
                    res.send({
                        "status": "0",
                        "message": "Make New User",
                        "result": results.recordset
                    })
                }
                else {
                    res.send({
                        "status": "1",
                        "message": "Request Accepted",
                        "result": results.recordset[0]
                    })
                }
            }
        });
    });
};


exports.change_password = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'Change_admin_password');
        request.input('Password', db.NVarChar, req.body.Password); 
        request.input('private_key', db.NVarChar, req.body.private_key); 
        request.execute('admin', (error, results) => {
            if (error) {
                console.log("hooooo",error)
                res.send({
                    "status": "0",
                    "message": "Error Ocurred",
                    "result": {}
                })
            }
            else {
                console.log("heloooooooooo",results.recordset)
                if (results.recordset == 0) {
                    res.send({
                        "status": "0",
                        "message": "Invalid Private Key",
                        "result": results.recordset
                    })
                }
                else {
                    console.log(results)
                    res.send({
                        "status": "1",
                        "message": "Password Changed Successfully.",
                        "result": results
                    })
                }
            }
        });
    });
};

exports.check = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'check');
        request.execute('admin', (error, results) => {
            if (error) {
                console.log("hooooo",error)
                res.send({
                    "status": "0",
                    "message": "Error Ocurred",
                    "result": {}
                })
            }
            else {
                console.log("heloooooooooo",results.recordset)
                if (results.recordset == 0) {
                    res.send({
                        "status": "0",
                        "message": "",
                        "result": results.recordset
                    })
                }
                else {
                    console.log(results.recordset[0].value)
                    res.send({
                        "status": "1",
                        "message": "Checked...!",
                        "result": results.recordset[0].value
                    })
                }
            }
        });
    });
};