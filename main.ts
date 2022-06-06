import { Staff ,Gene} from "./quanlynhanvien";
let stafflist :Staff[]= [];
stafflist.push(new Staff("han",Gene.MALE,new Date("1994/03/24"),"ha@bb.com",1223344));
stafflist.push(new Staff("kieu",Gene.FEMALE,new Date("1998/04/25"),"ha@bb.com",98467));
function showstaff(staff:Staff) {
    console.log(staff);
}
stafflist.forEach(showstaff);