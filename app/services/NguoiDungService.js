function NguoiDungService(){
    this.layDanhSachNguoiDung = function(){
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type:"GET"
        })
        .done(function(danhSachNguoiDung){
            TaoBang(danhSachNguoiDung);
        })
        .fail(function(err){
            console.log("err");
            TaoBang(err)
        })
    }
    this.ThemNguoiDung = function(nguoiDung){
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type:"POST",
            data: nguoiDung
        })
        .done(function(result){
            if(result === "tai khoan da ton tai !"){
                alert("Tài khoản đã tồn tại");
            }
            else{
                location.href = "";
            }
        })
        .fail(function(err){
            console.log(err);
        })
    }
    this.XoaNguoiDung = function(taiKhoan){
        $.ajax({
            url:`http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type:"DELETE"
        })
        .done(function(result){
            location.href = "";
        })
        .fail(function(err){
            console.log(err);
        })
    }
    this.LayThongTinNguoiDung = function(){
        var thongTinNguoiDung =[];
        $.ajax({
            url:`http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan =${taiKhoan}`,
            type : "GET",
            async:false
        })
        .done(function(result){
            ThongTinNguoiDung = result;
            console.log(result);
        })
        .fail(function(err){
            console.log(err);
        })
        console.log(thongTinNguoiDung);
        return thongTinNguoiDung;
    }
    this.capNhatThongTinNguoiDung = function(){
        var ngd = JSON.stringify()
        $.ajax({
            url:`http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan`,
            type : "PUT",
            contentType:'application/json',
            dataTye :"json",
            data: ngd
        })
    }
}
function TaoBang(danhSachNguoiDung){
    var tblBody = "";
    danhSachNguoiDung.map(function(item,index){
        tblBody += `
        <tr>
            <td>${index + 1}<td>
            <td>${item.TaiKhoan}</td>
            <td>${item.MatKhau}</td>
            <td>${item.HoTen}</td>
            <td>${item.Email}</td>
            <td>${item.SoDT}</td>
            <td>${item.MaLoaiNguoiDung}</td>
            <td>${item.TenLoaiNguoiDung}</td>
            <td>
                <button id ='btnSua' class='btn btn-success' data-toggle='modal' data-sua = '${item.taiKhoan}' data-target='#myModal'>Sửa</button><button id ='btnXoa' class='btn btn-primary' data-taikhoan ='${item.TaiKhoan}' >Xóa</button>
            </td>
        </tr>`
    })
   $("#tblDanhSachNguoiDung").html(tblBody);
}