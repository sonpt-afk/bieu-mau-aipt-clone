import { usePDF } from 'react-to-pdf';
import './index.scss';
{
  /* The following line can be included in your src/index.js or App.js file */
}
const BM06 = () => {
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
  <div className="">
  <h1>PHIẾU ĐÁNH GIÁ <br />
 KẾT QUẢ PHỎNG VẤN</h1>
 </div>
</div>
<div className="header-container-detail">
  <div>
Mã tài liệu: HR-QT-01-BM05
</div>
<div>Phiên bản: Ver 1.0</div>
<div>
Ngày ban hành:</div>

</div>
</div>
</div>
<hr className='first-divider-line'/>
<hr className='second-divider-line'/>
    <div className='main'>
    <div className="main-first-table-BM6">
      <div className="main-first-table-BM6-info">A.Thông tin ứng viên</div>
      <div className="main-first-table-BM6-info-name">Họ tên ứng viên:</div>
      <div className="main-first-table-BM6-info-salary-current">Mức lương hiện tại:</div>
      <div className="main-first-table-BM6-info-position-want">Vị trí dự tuyển:</div>
      <div className="main-first-table-BM6-info-salary-want">Mức lương đề nghị:</div>
      <div className="main-first-table-BM6-info-dept">Phòng ban:</div>
      <div className="main-first-table-BM6-info-workday">Ngày làm việc dự kiến:</div>
      <div className="main-first-table-BM6-info-exp">Số năm kinh nghiệm:</div>
      <div className="main-first-table-BM6-info-position-current">Chức danh hiện tại:</div>
      
      <div className="main-first-table-BM6-feedback">B. Đánh giá phỏng vấn</div>
      <div className="main-first-table-BM6-feedback-guide">
        Hướng dẫn điểm đánh giá: <div style={{margin:"0 10px"}}>Tốt (4) </div> <div style={{margin:"0 10px"}}>Khá (3)</div> <div style={{margin:"0 10px"}}>Trung bình (2)</div><div style={{margin:"0 10px"}}>Kém (1)</div>  
    </div>
    <div className="main-first-table-BM6-feedback-firstround">
    Phỏng vấn vòng 1: Phòng Hành chính nhân sự

    </div>
    <div className="main-first-table-BM6-feedback-firstround-interviewer">Người phỏng vấn:</div>
    <div className="main-first-table-BM6-feedback-firstround-interviewDate">Ngày phỏng vấn:</div>
   <div className="main-first-table-BM6-feedback-firstround-skill"> 1. Kỹ năng giao tiếp ( Khả năng lập
luận, tư duy, mạch lạc, trình bày có sức
thuyết phục)</div>
   <div className="main-first-table-BM6-feedback-firstround-blank"></div>
   <div className="main-first-table-BM6-feedback-firstround-score">Điểm</div>
   <div className="main-first-table-BM6-feedback-firstround-skill"> 2. Kiến thức chuyên môn, hiểu biết
nghiệp vụ</div>
   <div className="main-first-table-BM6-feedback-firstround-blank"></div>
   <div className="main-first-table-BM6-feedback-firstround-score">Điểm</div>
   <div className="main-first-table-BM6-feedback-firstround-skill"> 3. Khả năng thích nghi môi trường
làm việc và chịu áp lực công việc</div>
   <div className="main-first-table-BM6-feedback-firstround-blank"></div>
   <div className="main-first-table-BM6-feedback-firstround-score">Điểm</div>
   <div className="main-first-table-BM6-feedback-firstround-skill"> 4. Khả năng làm việc tập thể/ Ý thức
hợp tác, giúp đỡ đồng nghiệp</div>
   <div className="main-first-table-BM6-feedback-firstround-blank"></div>
   <div className="main-first-table-BM6-feedback-firstround-score">Điểm</div>
   <div className="main-first-table-BM6-feedback-firstround-skill"> 5. Năng lực tổ chức quản lý, khả
năng lãnh đạo, tầm nhìn, đưa ra mục
tiêu, phân công công việc ( đối với
quản lý)</div>
   <div className="main-first-table-BM6-feedback-firstround-blank"></div>
   <div className="main-first-table-BM6-feedback-firstround-score">Điểm</div>
   <div className="main-first-table-BM6-feedback-firstround-skill"> 6. Tinh thần học hỏi, tìm hiểu công việc, trách nhiệm và nhiệt tình/tâm huyết/cam
kết gắn bó với tổ chức</div>
   <div className="main-first-table-BM6-feedback-firstround-blank"></div>
   <div className="main-first-table-BM6-feedback-firstround-score">Điểm</div>
   <div className="main-first-table-BM6-feedback-firstround-score">
   Tổng điểm
   </div>
   <div className="main-first-table-BM6-feedback-firstround-blank-total"></div>
<div className="main-first-table-BM6-feedback-firstround-end">
  <div className="main-first-table-BM6-feedback-firstround-end-summary">   Kết luận - Đề xuất
</div>
  <div className="main-first-table-BM6-feedback-firstround-end-signature">  Ký xác nhận (ghi rõ họ tên)

</div>
</div>
<div className="main-first-table-BM6-feedback-firstround-bottomRight">
  <div className="main-first-table-BM6-feedback-firstround-bottomRight-checkbox-row">
  <div className="main-first-table-BM6-feedback-firstround-bottomRight-checkbox1"><input type="checkbox" /> Nhận thử việc</div>
  <div className="main-first-table-BM6-feedback-firstround-bottomRight-checkbox2"><input type="checkbox" />Không đạt vòng 1</div>
  </div>
  <div className="main-first-table-BM6-feedback-firstround-bottomRight-checkbox3"><input type="checkbox" />Tiến cử vào vị trí khác</div>
  <div className="main-first-table-BM6-feedback-firstround-bottomRight-text">
  Mức lương thử việc: 3.000.000 đ<br />
   Mức lương chính thức: 6.000.000 đ <br />
Các nội dung khác: 
  </div>

</div>


</div>

<div className="header">

<div className="header-container">

<div className="header-container-logo">
  <img src="/src/assets/aipt-logo.b043558c1ffd81c4c2c6.png" alt="logo" />
</div>
<div className="header-container-title">
  <div className="">
  <h1>PHIẾU ĐÁNH GIÁ <br />
 KẾT QUẢ PHỎNG VẤN</h1>
 </div>
</div>
<div className="header-container-detail">
  <div>
Mã tài liệu: HR-QT-01-BM05
</div>
<div>Phiên bản: Ver 1.0</div>
<div>
Ngày ban hành:</div>

</div>
</div>
</div>
<hr className='first-divider-line'/>
<hr className='second-divider-line'/>

<div className="main-second-table-BM6">
<div className="main-second-table-BM6-feedback-secondround">
Phỏng vấn vòng 2: Phụ trách bộ phận chuyên môn
    </div>
    <div className="main-second-table-BM6-feedback-secondround-interviewer">Người phỏng vấn:</div>
    <div className="main-second-table-BM6-feedback-secondround-interviewDate">Ngày phỏng vấn:</div>
   <div className="main-second-table-BM6-feedback-secondround-skill"> 1. Kiến thức chuyên môn, khả năng đáp ứng các
nhiệm vụ trong bảng mô tả
công việc</div>
   <div className="main-second-table-BM6-feedback-secondround-blank"></div>
   <div className="main-second-table-BM6-feedback-secondround-score">Điểm</div>
   <div className="main-second-table-BM6-feedback-secondround-skill"> 
   2.Kinh nghiệm - Năng lực – Kỹ năng</div>
   <div className="main-second-table-BM6-feedback-secondround-blank"></div>
   <div className="main-second-table-BM6-feedback-secondround-score">Điểm</div>
   <div className="main-second-table-BM6-feedback-secondround-skill"> 
   3.Nhận xét các vấn đề khác
( kỹ năng giải quyết công
việc, khả năng giao tiếp…..)</div>
   <div className="main-second-table-BM6-feedback-secondround-blank"></div>
   <div className="main-second-table-BM6-feedback-secondround-score">Điểm</div>
   <div className="main-second-table-BM6-feedback-secondround-score">
   Tổng điểm
   </div>
   <div className="main-second-table-BM6-feedback-secondround-blank-total"></div>

   <div className="main-second-table-BM6-feedback-secondround-end">
  <div className="main-second-table-BM6-feedback-secondround-end-summary">   Kết luận - Đề xuất
</div>
  <div className="main-second-table-BM6-feedback-secondround-end-signature">  Ký xác nhận (ghi rõ họ tên)

</div>
</div>
<div className="main-second-table-BM6-feedback-secondround-bottomRight">
  <div className="main-second-table-BM6-feedback-secondround-bottomRight-checkbox-row">
  <div className="main-second-table-BM6-feedback-secondround-bottomRight-checkbox1"><input type="checkbox" /> Nhận thử việc</div>
  <div className="main-second-table-BM6-feedback-secondround-bottomRight-checkbox2"><input type="checkbox" />Không đạt vòng 2</div>
  </div>
  <div className="main-second-table-BM6-feedback-secondround-bottomRight-checkbox3"><input type="checkbox" />Tiến cử vào vị trí khác</div>
  <div className="main-second-table-BM6-feedback-secondround-bottomRight-text">
  Mức lương thử việc: 3.000.000 đ<br />
   Mức lương chính thức: 6.000.000 đ <br />
   Thời gian thử việc: 3 tháng <br />
    Chế độ BHXH, BHYT, BHTN <br />
Các nội dung khác: 
  </div>

</div>
<div className="main-second-table-BM6-feedback-secondround-bossDecision">Kết luận của Giám đốc</div>
<div className="main-second-table-BM6-feedback-secondround-bossSignature">
GĐ phê duyệt <br />
<br />
( ký, ghi rõ họ tên)
</div>
<div className="main-second-table-BM6-feedback-secondround-bossApproval">
<div className="main-second-table-BM6-feedback-secondround-bossApproval-checkbox-row">
  <div className="main-second-table-BM6-feedback-secondround-bossApproval-checkbox1"><input type="checkbox" /> Tiếp nhận</div>
  <div className="main-second-table-BM6-feedback-secondround-bossApproval-checkbox2"><input type="checkbox" />Không tiếp nhận</div>
  </div>
  <div className="main-second-table-BM6-feedback-secondround-bossApproval-text">
  Tiếp nhận vào chức vụ: Lập trình viên<br />Bộ phận: Kĩ thuật<br />
   Mức lương thử việc: 20.000.000 đ<br />
   Mức lương dự kiến chính thức: 40.000.000 đ<br />
   Ngày bắt đầu làm việc: 3/3/2024<br />
    Thời gian thử việc: 2 tháng <br />
    Chế độ BHXH, BHYT, BHTN:  <br />
    Các chế độ khác:  </div>
</div>
</div>




    
    </div>
    </div>

    
 </div>
 </div>
  );
};

export default BM06;
