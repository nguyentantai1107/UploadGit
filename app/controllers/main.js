$(document).ready(function () {
    var nguoiDungService = new NguoiDungService();
    layDanhSachNguoiDung();
    $('#btnThemNguoiDung').click(function () {
        $(".modal-title").html("Thêm người dùng");
        var foodter = "<button id ='btnThem' class='btn btn-success' data-toggle='modal' data-target='#myModal'>Thêm</button><button id ='btnXoa' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Đóng</button>";
        $(".modal-footer").html(foodter);

        $('body').delegate('#btnThem', 'click', function () {
            var taiKhoan = $('#TaiKhoan').val();
            var matKhau = $('#MatKhau').val();
            var hoTen = $('#HoTen').val();
            var eMail = $('#Email').val();
            var soDT = $('#SoDienThoai').val();
            var maLoai = $('#loaiNguoiDung').val();
            var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, eMail, soDT, maLoai);
            nguoiDungService.ThemNguoiDung(nguoiDung);
        })
    })
    $('body').delegate('#btnXoa','click',function(){
        var taiKhoan = $(this).data('taikhoan');
        nguoiDungService.XoaNguoiDung(taiKhoan);
    })
    $('body').delegate('#btnSua','click',function(){
        var taiKhoan = $(this).data('taikhoan');
        var thongtin = nguoiDungService.LayThongTinNguoiDung(taiKhoan);
        
        thongtin.map(function(item){
            $('#TaiKhoan').val(item.TaiKhoan);
            $('#HoTen').val(item.HoTen);
            $('#MatKhau').val(item.MatKhau);
            $('#Email').val(item.Email);
            $('#SoDienThoai').val(item.soDT);
            $('#loaiNguoiDung').val(item.MaLoai);
        })
    })
    function layDanhSachNguoiDung() {
        nguoiDungService.layDanhSachNguoiDung();
    }
})

