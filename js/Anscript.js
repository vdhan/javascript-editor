function display()
{
var result = window.open("about:blank","view");
var temp = result.document;
temp.write(document.getElementById('code').value);
temp.close();
}

function open_new()
{
var result = window.open("about:blank","","toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=no,copyhistory=yes");
var temp = result.document;
temp.write(document.getElementById('code').value);
temp.close();
}

function reset()
{
	document.getElementById('code').value = "<!DOCTYPE html>\n<html>\n<head>\n<style></style>\n<script></script>\n</head>\n\n<body>\n\n</body>\n</html>"
}