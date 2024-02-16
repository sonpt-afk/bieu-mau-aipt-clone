import { usePDF } from 'react-to-pdf';
import './index.scss';
{
  /* The following line can be included in your src/index.js or App.js file */
}
const BM04vong2 = () => {
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
Mã tài liệu: HR-QT-02-BM03
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
      <h1 className="main-title-big">THƯ MỜI PHỎNG VẤN</h1>
      <div className="main-second-round-content">
        <p className="main-second-round-content-intro">
          <b><i>Thân gửi Ứng viên,</i></b>
        </p><br />
   <p>Trước tiên,<span style={{fontWeight: 'bold'}}>Công Ty Cổ Phần AIPT Việt Nam</span>  chân thành cảm ơn Anh/chị đã nộp
hồ sơ ứng tuyển cho vị trí: <span style={{fontWeight: 'bold'}}>Nhân viên Tô chức sự kiện của Công ty.</span></p>
<br />
   
   <p>
   Qua quá trình phỏng vấn vòng 1, chúng tôi đánh giá cao năng lực của Anh/chị. <br />
    Chúng tôi trân trọng mời Anh/chị đến tham dự buổi phỏng vấn vòng 2 tại Công ty với
nội dung như sau:
   </p>
   <br />
   <p><span style={{fontWeight: 'bold'}}>Vị trí dự tuyển:</span> Nhân viên Tổ chức sự kiện</p>
   <br />

  <p><span style={{fontWeight: 'bold'}}>Thời gian: </span> 10h15, Thứ Năm, ngày 31 tháng 12 năm 2020</p>
  <br />

   <p><span style={{fontWeight: 'bold'}}>Địa điểm:</span>  Số 10, Tầng 3, CT2B Gelexia Riverside, 885 Tam Trinh, Hoàng Mai, Hà Nội</p>
   <br />
   <p>Anh/Chị vui lòng mang CV đi phỏng vấn và phản hồi lại lịch phỏng vấn cũng như
thời gian trên lại cho bên công ty.</p> <br />
<p>Anh/chị có bất kỳ thắc mắc nào vui lòng liên hệ lại với Công ty để được giải đáp:</p><br />
<p><i>Cán bộ tuyển dụng: Ms.Hoàn; Mobile: 086.202.1176</i></p><br />
<p>Rất mong Anh/chị có mặt đúng giờ để buổi phỏng vấn được thành công.</p><br />
<p>Trân trọng!</p><br />
<p>
<span style={{fontWeight: 'bold'}}>
  
  Phòng Nhân sự
  </span>
  </p><br />
<p>
  Công ty CP AIPT Việt Nam
  </p>
    </div>
    </div>

    
 </div>
 </div>
 </div>

  );
};

export default BM04vong2;
