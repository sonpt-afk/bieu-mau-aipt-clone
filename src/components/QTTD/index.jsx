import { usePDF } from 'react-to-pdf';
import './index.scss';
{
  /* The following line can be included in your src/index.js or App.js file */
}
const QTTD = () => {
  // const handleDownload = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    

  return (
    <div>
    <button onClick={() => toPDF()}>Download PDF</button>

    <div ref={targetRef}>
       {/* P1 */}
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
    <div className="page-1">
    <div className="page-1-main">
      <div className="page-1-main-container">
      <div className="page-1-main-container-inside">
    <img src="/src/assets/aipt-logo.b043558c1ffd81c4c2c6.png" alt="logo" />
      <h2 className="page-1-main-org">CÔNG TY CỔ PHẦN AIPT VIỆT NAM
</h2>
<h1 className="page-1-main-title">QUY TRÌNH TUYỂN DỤNG</h1>
    <div className="page-1-main-content"> 
    <div className="page-1-main-content-row">
   
      <h3 className="page-1-main-content-key">MÃ SỐ</h3>
      <h3 className="page-1-main-content-value"> : HR-QT- 01</h3>
      <br /></div>
      <div className="page-1-main-content-row">
      <h3 className="page-1-main-content-key">LẦN BAN HÀNH</h3>
      <h3 className="page-1-main-content-value"> : 01</h3>
      <br /></div>
      <div className="page-1-main-content-row">
      <h3 className="page-1-main-content-key">NGÀY BAN HÀNH ĐẦU TIÊN</h3>
      <h3 className="page-1-main-content-value">: 15/04/2020</h3>
      <br /></div>
      <div className="page-1-main-content-row">
      <h3 className="page-1-main-content-key">TRANG</h3>
      <h3 className="page-1-main-content-value"> : 1</h3>
      <br /></div>
</div>  
</div>
</div>
    </div>
    </div>
    </div>
      {/* P2 */}
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
      <h1 className="main-title">1. MỤC ĐÍCH, YÊU CẦU</h1>
    <p className="main-content"> 
- Quy định trình tự, thủ tục, thời gian, trách nhiệm…trong hoạt động tuyển dụng toàn Công ty, <br/>
 nhằm đảm bảo hoạt động tuyển dụng được thực hiện một cách có hệ thống, nhất quán, chặt
<br/>chẽ… đảm bảo rằng các nhân viên được tuyển dụng có đủ trình độ chuyên môn nghiệp vụ, năng<br/>
lực đạo đức phù hợp với yêu cầu vị trí công việc.<br/>
 - Đảm bảo tính công bằng, khách quan, giảm thiểu/loại trừ các xung đột giữa các bên liên quan<br/>
trong việc ra các quyết định tuyển dụng;<br/>
 - Thể hiện tính chuyên nghiệp trong công tác tuyển dụng do có những hướng dẫn rõ ràng về trình
tự, thủ tục, tuyển chọn nhân sự. 
</p> 
<h1 className="main-title">
2. PHẠM VI

      </h1>
      <p className="main-content"> 
- Áp dụng thống nhất toàn công ty trừ các trường hợp đặc biệt được GĐ công ty phê duyệt
</p> 
<h1 className="main-title">
      3. ĐỊNH NGHĨA – CHỮ VIẾT TẮT
      </h1>
      <p className="main-content">  

- GĐ : Giám đốc<br/>
- P.HCNS : Phòng Hành chính nhân sự<br/>
- P.TCKT : Phòng Tài chính kế toán<br/>
- TBP : Trưởng bộ phận<br/>
- CBNV : Cán bộ nhân viên<br/>
- TTT : Theo thực tế
</p>
<h1 className="main-title">

4. BIỂU MẪU KÈM THEO:
</h1>
<p className="main-content">

HR-QT-01-BM01 : Phiếu yêu cầu tuyển dụng<br/>
HR –QT-01-BM02 : Phiếu đề xuất gói tuyển dụng<br/>
HR-QT-01-BM03 : Phiếu thông tin ứng viên<br/>
HR-QT-01-BM04 : Thư mời phỏng vấn<br/>
HR-QT-01-BM05 : Danh sách ứng viên tham gia phỏng vấn<br/>
HR-QT-01-BM06 : Phiếu đánh giá kết quả phỏng vấn<br/>
HR-QT-01-BM07 : Thư cảm ơn<br/>
HR-QT-01-BM08 : Thư mời nhận việc<br/>
HR-QT-01-BM09 : Quyết định tiếp nhận nhân sự<br/>
HR-QT-01-BM10 : Tờ trình tiền lương<br/>
</p>  
    <div className='main-footer'>2</div>
    </div>
    </div>

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
      <h1 className="main-title">5. NỘI DUNG <br />5.1. LƯU ĐỒ TUYỂN DỤNG</h1>
    <div className="main-content"> 
    <table >
    <thead>
  <tr>
    <th style={{width:"10%"}}>Bước</th>
    <th style={{width:"50%"}}>Nội dung</th>
    <th style={{width:"20%"}}>Người <br />
thực hiện</th>
    <th style={{width:"20%"}}>Biểu mẫu</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>1</td>
    <td className='contain-shape'><div className='oval'>Yêu cầu tuyển dụng</div></td>
    <td>TBP <br />
BLĐ</td>
    <td>HR-QT-01-BM01</td>
  </tr>
  <tr>
    <td>2</td>
    <td style={{height:"161px"}}>
      <div className="rhombus"> 
      <p className="rhombus-content">Xem xét <br />
phê duyệt</p>
      </div>
      </td>
    <td>GĐ</td>
    <td></td>
  </tr>
  </tbody>

</table>

</div> 
<h1 className="main-title">
2. PHẠM VI

      </h1>
      <p className="main-content"> 
- Áp dụng thống nhất toàn công ty trừ các trường hợp đặc biệt được GĐ công ty phê duyệt
</p> 
<h1 className="main-title">
      3. ĐỊNH NGHĨA – CHỮ VIẾT TẮT
      </h1>
      <p className="main-content">  

- GĐ : Giám đốc<br/>
- P.HCNS : Phòng Hành chính nhân sự<br/>
- P.TCKT : Phòng Tài chính kế toán<br/>
- TBP : Trưởng bộ phận<br/>
- CBNV : Cán bộ nhân viên<br/>
- TTT : Theo thực tế
</p>
<h1 className="main-title">

4. BIỂU MẪU KÈM THEO:
</h1>
<p className="main-content">

HR-QT-01-BM01 : Phiếu yêu cầu tuyển dụng<br/>
HR –QT-01-BM02 : Phiếu đề xuất gói tuyển dụng<br/>
HR-QT-01-BM03 : Phiếu thông tin ứng viên<br/>
HR-QT-01-BM04 : Thư mời phỏng vấn<br/>
HR-QT-01-BM05 : Danh sách ứng viên tham gia phỏng vấn<br/>
HR-QT-01-BM06 : Phiếu đánh giá kết quả phỏng vấn<br/>
HR-QT-01-BM07 : Thư cảm ơn<br/>
HR-QT-01-BM08 : Thư mời nhận việc<br/>
HR-QT-01-BM09 : Quyết định tiếp nhận nhân sự<br/>
HR-QT-01-BM10 : Tờ trình tiền lương<br/>
</p>  
    <div className='main-footer'>3</div>
    </div>
    </div>
 </div>
 </div>
  );
};

export default QTTD;
