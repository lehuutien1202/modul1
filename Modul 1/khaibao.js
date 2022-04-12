let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)
let nhapa = prompt('nhập số a');
let nhapb = prompt('nhập số b');
let boiso = nhapb % nhapa;
if (boiso == 0) {
    text = "a là bội số của b";
} else {
    text = "a không phải là bội số của b";
}
alert(text);