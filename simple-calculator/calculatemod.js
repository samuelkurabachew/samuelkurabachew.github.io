exports.operate = function (req, res, vals) {
    switch(vals.operation) {
        case "add":
            var result = parseInt(vals.first) + parseInt(vals.second);
            break;
        case "subtract":
            var result = parseInt(vals.first) - parseInt(vals.second);
            break;
        case "multiply":
            var result = parseInt(vals.first) * parseInt(vals.second);
            break;
        case "divide":
            var result = parseInt(vals.first) / parseInt(vals.second);
            break;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<link rel='stylesheet' type='text/css' href='css/result.css'>")
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h3>The Answer is: ");
    res.write(String(result));
    res.write("</h3>");
    res.write("<br><Button class='btn' onclick=history.back()>Another calculation</Button>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
};