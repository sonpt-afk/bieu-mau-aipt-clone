import { usePDF } from 'react-to-pdf';
import './index.scss';
{
  /* The following line can be included in your src/index.js or App.js file */
}
const BM03 = () => {
  // const handleDownload = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    

  return (
    <div>
    <button onClick={() => toPDF()}>Download PDF</button>

    <div ref={targetRef}>

     {/* P3 */}
     <div className="page">
      <div className="header">

<div className="header-container">

<div className="header-container-logo">
  <img src="/src/assets/aipt-logo.b043558c1ffd81c4c2c6.png" alt="logo" />
</div>
<div className="header-container-title">
  <h1>QUY TRÌNH TUYỂN DỤNG</h1>
</div>
<div className="header-container-detail">
  <div>
<span>Mã tài liệu: HR-QT-01</span> 
<br /><span>Phiên bản: Ver 1.0</span>

<br /><br /><span>Ngày ban hành</span>

</div>
</div>
</div>
</div>
<hr className='first-divider-line'/>
<hr className='second-divider-line'/>
    <div className='main'>
      <h1 className="main-title-big">PHIẾU THÔNG TIN ỨNG VIÊN</h1>
    <div className="main-first-table"> 
    <div className="main-first-table-job">
        <span>Chức danh dự tuyển: </span>
        Dev
            </div>
    <div className="main-first-table-salary">Mức lương mong muốn: 1.000.000 đ</div>
    <div className="main-first-table-date">
Ngày có thể bắt đầu đi làm: 1/1/2025</div>
    <div className="main-first-table-pic">
        <img src="/src/assets/son-3x4.jpeg" alt="" />
    </div>
</div> 
<div className="main-title-small">
< br />
< br />

I. THÔNG TIN CÁ NHÂN
< br />
< br />

</div>
<div className="main-second-table"> 
    <div className="main-second-table-name">Họ và tên: (Viết in hoa)  PHAN LINH </div>
    <div className="main-second-table-birth">Ngày sinh: 1/1/2020 <br /> <br /> Nơi sinh:  Sơn La
</div>
    <div className="main-second-table-gender">
     <p> Giới tính:</p> <br />
     <div className="main-second-table-gender-block">
    <div className="main-second-table-gender-block-item">Nam<input type="checkbox" /></div>
    <div className="main-second-table-gender-block-item">Nữ <input type="checkbox" /></div>
    </div>
       < br />
Chiều cao: 199 cm
< br />
Cân nặng: 99kg
</div>

    <div className="main-second-table-tax">
      <div className="main-second-table-tax-column-block">
      <div className="main-second-table-tax-column-block-item"> <p>CMND số: 111111111</p><br /><p>Quốc tịch: VN</p></div>
      <div className="main-second-table-tax-column-block-item"><p>Ngày cấp: 1/1/1111</p><br /><p> Dân tộc: KINH</p></div>
      <div className="main-second-table-tax-column-block-item"><p>Nơi cấp:HN </p></div>
      </div>
      <br />
Số sổ BHXH (nếu không có vui lòng ghi rõ: Không có):  Không có<br /><br />
Mã số Thuế TNCN (nếu không có vui lòng ghi rõ: Không có):  Không có<br /><br />
<div className="main-second-table-tax-row">
  <p>Tình trạng hôn nhân:</p>
  <div className="main-second-table-tax-row-item"><input type="checkbox" /> Chưa kết hôn</div>
  <div className="main-second-table-tax-row-item"><input type="checkbox" /> Đã kết hôn</div>
  <div className="main-second-table-tax-row-item"><input type="checkbox" /> Khác</div>
</div>
       < br />
    </div>
    <div className="main-second-table-address">Địa chỉ thường trú: dsafdaf</div>
    <div className="main-second-table-address">Địa chỉ tạm trú: adsfdafda</div>
    <div className="main-second-table-phone">Điện thoại di động: 090y75322</div>
    <div className="main-second-table-mail">Địa chỉ email: s@mai.com</div>
    <div className="main-second-table-media">
    Bạn đang sử dụng Mạng xã hội nào? fb<br /> 
< br />
    Tên tài khoản đang sử dụng: dzson

    </div>
</div>

< br />
< br />
<div className="main-title-small">

II. QUÁ TRÌNH HỌC TẬP
</div>
< br />
< br />

<table className="main-third-table"> 
    
  <tr>
    <th style={{width:"20%"}}>Thời gian <br />
(Từ……đến……)</th>
    <th style={{width:"25%"}}>Trường/Đơn vị đào tạo <br />
(từ PTTH trở lên)</th>
    <th style={{width:"20%"}}>Loại hình đào
tạo</th>
    <th style={{width:"20%"}}>Chuyên ngành</th>
    <th style={{width:"15%"}}>Xếp loại</th>
    </tr>
  
    <tr>
    <td>1/1/1111 - 2/2/2222</td>
    <td>KMA</td>
    <td>đại học</td>
    <td>An toàn thông tin</td>
    <td>khá</td>
  </tr><tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

< br />
< br />
<div className="main-title-small">

III. KỸ NĂNG</div>
< br />
< br />
<div className="main-fourth-table">
    <div className="main-fourth-table-item">
      <span className="main-fourth-table-item-comp"> Vi tính:</span>
      <br />
      <p>Nêu các phần mềm biết sử dụng thành thạo: word</p>
      <br />
      <br />
      <p>Chứng chỉ (nếu có) : ielts</p>
     </div>
    <div className="main-fourth-table-item">Ngoại ngữ: Anh</div>
    <div className="main-fourth-table-item">Các kỹ năng khác: coding</div>
</div>

<div className="main-title-small">

IV. KINH NGHIỆM LÀM VIỆC ( Những công ty mà Anh/Chị từng tham gia gần đây )</div>
< br />
< br />
<div className="main-fifth-table">
    <div className="main-fifth-table-name-head">Tên công ty và lĩnh vực hoạt
động</div>
    <div className="main-fifth-table-job-head">    
Chức danh/vị trí</div>
    <div className="main-fifth-table-ref-head">Thông tin người 
tham chiếu</div>
    <div className="main-fifth-table-time-head">  
Thời gian công tác</div>
<div className="main-fifth-table-name-body">1.</div>
<div className="main-fifth-table-job-body"></div>
<div className="main-fifth-table-ref-body"></div>
<div className="main-fifth-table-time-body">Tháng 1/23 <br />Đến tháng 1/24</div>
<div className="main-fifth-table-jd">
  <span className="">Mô tả công việc ngắn gọn:</span>
</div>
<div className="main-fifth-table-salary">
Mức lương: 1.000.000 đ <br />
Hiện còn làm<br />
Đã nghỉ<br />
Lý do nghỉ
việc: AI
</div>

<div className="main-fifth-table-name-head">Tên công ty và lĩnh vực hoạt
động</div>
    <div className="main-fifth-table-job-head">    
Chức danh/vị trí</div>
    <div className="main-fifth-table-ref-head">Thông tin người 
tham chiếu</div>
    <div className="main-fifth-table-time-head">  
Thời gian công tác</div>
<div className="main-fifth-table-name-body">2.</div>
<div className="main-fifth-table-job-body"></div>
<div className="main-fifth-table-ref-body"></div>
<div className="main-fifth-table-time-body">Tháng 1/23 <br />Đến tháng 1/24</div>
<div className="main-fifth-table-jd">
  <span className="">Mô tả công việc ngắn gọn:</span>
</div>
<div className="main-fifth-table-salary">
Mức lương: 1.000.000 đ <br />
Hiện còn làm<br />
Đã nghỉ<br />
Lý do nghỉ
việc: AI
</div>


</div>
<div className="main-title-small">
< br />
< br />

V. Vui lòng trả lời các câu hỏi sau:< br />
< br />
</div>

<div className="main-sixth-table">
  <div className="main-sixth-table-item goal">
    <p> <span className='main-sixth-table-item-order'>1.</span> Mục tiêu phát triển nghề nghiệp của bạn là gì?</p>
  </div>
  <div className="main-sixth-table-item OT">
    <p><span className='main-sixth-table-item-order'>2.</span> Bạn có thể làm việc ngoài giờ không?</p> 
    <div className="main-sixth-table-item-checkbox-group">
    <div className="main-sixth-table-item-checkbox-group-item">
    <input type="checkbox" />Có

    </div>
    <div className="main-sixth-table-item-checkbox-group-item">

    <input type="checkbox" />Không

    </div>
    </div>
    
  </div>
  <div className="main-sixth-table-item trip">
  <p><span className='main-sixth-table-item-order'>3.</span> Nếu do yêu cầu công tác, bạn có sẵn sàng đi công tác xa trong một thời gian?</p> 
  <div className="main-sixth-table-item-checkbox-group">
  <div className="main-sixth-table-item-checkbox-group-item">
    <input type="checkbox" />Có

    </div>
    <div className="main-sixth-table-item-checkbox-group-item">

    <input type="checkbox" />Không

    </div>
    </div>
  </div>
  <div className="main-sixth-table-item noti">
  <p><span className='main-sixth-table-item-order'>4.</span> Bạn nhận được thông tin về tuyển dụng của chúng tôi từ đâu?</p>  <br />
  <div className="main-sixth-table-item-checkbox-group">
  <div className="main-sixth-table-item-checkbox-group-item">
  <input type="checkbox" /> Báo chí

    </div>
    <div className="main-sixth-table-item-checkbox-group-item">

    <input type="checkbox" />Người quen trong Công ty

    </div>
    <div className="main-sixth-table-item-checkbox-group-item">

    <input type="checkbox" />Internet: Qua website: onlyc.vn  

    </div>
    </div>
    <p>Nguồn khác:</p>
  </div>
  <div className="main-sixth-table-item pref">
  <p><span className='main-sixth-table-item-order'>5.</span> Bạn thích làm việc độc lập hay nhóm? Vì sao?</p> 

  </div>
  <div className="main-sixth-table-item pros">
  <p><span className='main-sixth-table-item-order'>6.</span> Ưu và nhược điểm của bạn là gì?</p> 

  </div>
</div>
    <div className='main-footer'></div>
    </div>
    </div>

    
 </div>
 </div>
  );
};

export default BM03;
