import { usePDF } from 'react-to-pdf';
import './index.scss';
{
  /* The following line can be included in your src/index.js or App.js file */
}
const BM05 = () => {
  // const handleDownload = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    

  return (
    <div>
    <button onClick={() => toPDF()}>Download PDF</button>

    <div ref={targetRef}>

     <div className="page">
      <div className="header-BM8">

<div className="header-BM8-container">

<div className="header-BM8-container-left">
<div className="header-BM8-container-left-text">CÔNG TY CỔ PHẦN AIPT VIỆT NAM</div>
<div className="header-BM8-container-left-line"></div>
</div>
<div className="header-BM8-container-right">
    <div className="header-BM8-container-right-line-1">     CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
    <div className="header-BM8-container-right-line-2">Độc lập – Tự do – Hạnh phúc</div>
    <div className="header-BM8-container-right-line-3"><i> Hà Nội, ngày 8 tháng 8 năm 2024</i></div>
</div>

</div>
</div>

    <div className='main'>
        <div className="main-first-part-BM8">
      <h1 className="main-title-big-BM8">THƯ MỜI LÀM VIỆC</h1>
     

    <div className="main-paragraph-BM8">

    <p className=" main-paragraph-BM8-dear indent"><i>Thân gửi bạn Phan Danh,</i>  </p> 
       <p className="indent"> AIPT GROUP chân thành cảm ơn sự quan tâm của bạn đối với Công ty cũng như chức
danh công việc mà bạn đã dự tuyển.</p> 
<p className="indent">  Chào mừng bạn trở thành thành viên của gia đình AIPT GROUP. Chúc bạn vui vẻ và thành
công trên bước đường đồng hành sắp tới cùng công ty. </p> 
        <p className="indent"> Trân trọng mời bạn đến làm việc tại Công ty Cổ phần AIPT Việt Nam </p>
        <p className="indent">- Địa chỉ : Tầng 3 CT2B, Chung cư Gelexia Riverside ngõ 885 Tam Trinh, phường
Yên Sở, quận Hoàng Mai, Hà Nội. </p>
        <p className="indent">- Chức danh công việc: Nhân viên kinh doanh</p>
        <p className="indent">- Báo cáo đến : Phụ trách trực tiếp /BGĐ </p>
        <p className="indent">- Ngày nhận việc: 4/4/2024</p>
        <p className="indent">- Thời gian thử việc dự kiến: 02 tháng từ ngày 4/4/2024 đến ngày 4/6/2024 </p>
    <p className="main-paragraph-BM8-benefit indent"><b>Quyền lợi của bạn tại Công ty:</b></p>
    <p className="indent"> - Thu nhập thử việc: 3.000.000đ (3 triệu đồng) </p>
    <p className="indent"> - Sau đánh giá kết thúc thử việc, công ty sẽ ký HĐLĐ chính thức với mức lương thỏa
thuận theo cơ chế của bộ phận. </p>
    <p className="indent"> - Ngoài ra trong quá trình làm việc chính thức bạn được hưởng các quyền lợi khác như: </p>
    <ul className="main-paragraph-BM8-benefit-list">
        <li>  Tham gia BHXH, BHTN, BHYT theo mức đóng hiện hành tại công ty là:
4.730.000đ/tháng; tỷ lệ trích nộp theo quy định hiện hành của pháp luật. </li>
<li>  Xét tăng lương định kỳ 1 lần/năm, nghỉ phép 12 ngày/năm.</li>
<li> Thưởng tháng 13, thưởng các ngày lễ lớn trong năm và các chính sách thưởng
khác theo cơ chế của công ty.</li>
    </ul>


    <p className="main-paragraph-BM8-paper indent"><b>Hồ sơ giấy tờ cung cấp khi nhận việc</b></p>
    <p className="indent"> - Sơ yếu lý lịch có xác nhận của địa phương (Bản gốc) </p>
    <p className="indent"> - Sổ hộ khẩu (Bản công chứng/Bản sao có dấu) </p>
    <p className="indent"> -  Giấy khám sức khỏe (Bản gốc) </p>
    <p className="indent"> -  Căn cước công dân (Bản công chứng) </p>
    <p className="indent"> - Chứng chỉ, bằng cấp (Bản công chứng) </p>
    <p className="indent">    ( Thời hạn nộp hồ sơ trong thời gian tối đa 01 tuần tính từ ngày nhận việc)
</p>
    <p className="indent">Trân trọng!
</p>
    </div>
    <div className="main-footer-BM8">
        <div className="main-footer-BM8-left">
            <div className="main-footer-BM8-left-big">NGƯỜI NHẬN VIỆC</div>
            <div className="main-footer-BM8-left-small">(Ký, ghi rõ họ tên)</div>
        </div>
        <div className="main-footer-BM8-right">
        <div className="main-footer-BM8-left-big"> 
PHÒNG HÀNH CHÍNH NHÂN SỰ</div>
            <div className="main-footer-BM8-left-small">(Ký, ghi rõ họ tên)</div>
        </div>
    </div>
    </div>





   
    </div>
    </div>

    
 </div>
 </div>
  );
};

export default BM05;
