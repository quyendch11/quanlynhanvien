"use strict";
exports.__esModule = true;
var quanlynhanvien_1 = require("./quanlynhanvien");
var stafflist = [];
stafflist.push(new quanlynhanvien_1.Staff("han", quanlynhanvien_1.Gene.MALE, new Date("1994/03/24"), "ha@bb.com", 1223344));
stafflist.push(new quanlynhanvien_1.Staff("kieu", quanlynhanvien_1.Gene.FEMALE, new Date("1998/04/25"), "ha@bb.com", 98467));
function showstaff(staff) {
    console.log(staff);
}
stafflist.forEach(showstaff);
