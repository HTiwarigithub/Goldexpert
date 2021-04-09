const { Float } = require("mssql");

exports.Ptrange = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'Pt_Calc');
        request.input('weightinair', db.NVarChar(255), req.body.weightinair);
        request.input('weightinwater', db.NVarChar(255), req.body.weightinwater);
        request.execute('Prc_PtCalc', function (error, results) {
            if (error) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    res.send({
                        "status": "1",
                        "message": "Purity Calculated",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};

exports.Gdrange = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'Gold_jewel');
        request.input('weightinair', db.NVarChar(255), req.body.weightinair);
        request.input('weightinwater', db.NVarChar(255), req.body.weightinwater);
        request.execute('Prc_PtCalc', function (error, results) {
            if (error) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    res.send({
                        "status": "1",
                        "message": "Purity Calculated",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};


exports.Stone_range = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'Stone');
        request.input('weightinair', db.NVarChar(255), req.body.weightinair);
        request.input('weightinwater', db.NVarChar(255), req.body.weightinwater);
        request.execute('Prc_PtCalc', function (error, results) {
            if (error) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    res.send({
                        "status": "1",
                        "message": "Purity Calculated",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};

exports.Silver_range = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'Silver');
        request.input('weightinair', db.NVarChar(255), req.body.weightinair);
        request.input('weightinwater', db.NVarChar(255), req.body.weightinwater);
        request.execute('Prc_PtCalc', function (error, results) {
            console.log('hiiiiiii',error)
            if (error) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    res.send({
                        "status": "1",
                        "message": "Purity Calculated",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};

exports.Old_gold_raw = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'Old_gold_raw');
        request.input('weightinair', db.NVarChar(255), req.body.weightinair);
        request.input('weightinwater', db.NVarChar(255), req.body.weightinwater);
        request.execute('Prc_PtCalc', function (error, results) {
            console.log('hiiiii',error)
            if (error) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    res.send({
                        "status": "1",
                        "message": "Purity Calculated",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};

exports.Old_gold_jewel = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'Old_gold_jewel');
        request.input('weightinair', db.NVarChar(255), req.body.weightinair);
        request.input('weightinwater', db.NVarChar(255), req.body.weightinwater);
        request.execute('Prc_PtCalc', function (error, results) {
            console.log('hiiiii',error)
            if (error) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    res.send({
                        "status": "1",
                        "message": "Purity Calculated",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};

exports.cal_gold = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'cal_gold');
        request.input('weightinair',db.Float, req.body.weightinair);
        request.input('weightinwater',db.Float, req.body.weightinwater);
        request.input('Stone_type', db.NVarChar(255), req.body.Stone_type);
        request.input('Purity', db.NVarChar(255), req.body.Purity);
        request.execute('Prc_PtCalc', function (error, results) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    console.log("hoooo",results.recordset)
                    res.send({
                        "status": "1",
                        "message": "Stone Weight Calculated",
                        "result": results.recordset[0]
                    })
                }
            }
        });
    });
};

exports.cal_gold_purity = (req, res) => {
    db.close();
    db.connect(conn, () => {
        var request = new db.Request();
        request.input('ActionType', db.NVarChar(50), 'cal_gold_purity');
        request.input('weightinair',db.Float, req.body.weightinair);
        request.input('weightinwater',db.Float, req.body.weightinwater);
        request.input('Stone_type', db.NVarChar(255), req.body.Stone_type);
        request.input('Stone_Mass', db.NVarChar(255), req.body.Stone_Mass);
        request.execute('Prc_PtCalc', function (error, results) {
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
                        "message": "Not in Range",
                        "result": []
                    })
                }
                else {
                    console.log("hoooo",results.recordset)
                    res.send({
                        "status": "1",
                        "message": "Gold Purity is Calculated.",
                        "result": results.recordset
                    })
                }
            }
        });
    });
};