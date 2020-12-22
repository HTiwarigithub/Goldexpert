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