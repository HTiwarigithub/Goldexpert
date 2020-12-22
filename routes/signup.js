exports.signupUser = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar, 'Select');
        request.input('phone_no', db.NVarChar, req.body.phone_no);
        request.execute('prc_SignUp', (error, result) => {
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
                        "message": "Please Sign-up",
                        "data": []
                    });
                
                }
               
            }if (result){
             
                if(result.recordset[0].device_ID != req.body.device_ID){
                    res.send({
                        "status": "0",
                        "message": "Already Logged in from other Device.",
                        "data": []
                    });
                    
                }else{
                    res.send({
                        "status": "1",
                        "message": "Login Successful",
                        "data":result.recordset
                    });
                }
        };
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
        request.input('device_ID', db.NVarChar, req.body.device_ID);
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
              }else if((result.recordset[0].result == 'true')){
                
                res.send({
                    "status": "1",
                    "message": "Validation Successfull!",
                    "data": result.recordset[0].result
                });
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