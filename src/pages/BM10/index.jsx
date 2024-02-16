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
Mã tài liệu:: HR-QT-02-BM10
</div>
<div>Phiên bản: Ver 1.0</div>
<div>
Ngày ban hành:</div>

</div>
</div>
</div>
<hr className='first-divider-line'/>
<hr className='second-divider-line'/>

    <div className='main '>
        <div className="main-title-above-BM10">
        <div className="main-title-above-BM10-left">
        Số : /TTr – P.HCNS
    </div>

        <div className="main-title-above-BM10-right">
            <i>        Hà Nội, ngày 27 tháng 01 năm 2022
</i>
        </div>
        </div>
      <h1 className="main-title-big-BM10">TỜ TRÌNH</h1>
      <div className="main-title-big-BM10-sub">
        <span>  <i> ( V/v: Tiền lương và chế độ áp dụng nhân sự mới) </i> </span>
    </div>
        

    <div className="main-paragraph-BM10">
        <div className="main-paragraph-BM10-dear indent">
            Kính gửi : - Giám đốc công ty</div>
            <div className="main-paragraph-BM10-dear-sub">
                <p className="indent">- Căn cứ vào chỉ đạo trực tiếp của Giám đốc công ty</p>
                <p className="indent">- Căn cứ vào kết quả đào tạo thực tập sinh tại Công ty</p>
            </div>

       <p > Phòng HCNS đã trao đổi trực tiếp với nhân sự và đề xuất việc tiếp nhận 01 nhân sự
với tiền lương và chế độ như sau, chi tiết như sau:</p> 

    <p className="main-paragraph-BM10-smallheading indent">
        1. Thông tin nhân sự</p>
        <div className="main-paragraph-BM10-smallheading-content">
<span className="main-paragraph-BM10-smallheading-content-name">Họ tên : Phan Anh</span> 
<span className="main-paragraph-BM10-smallheading-content-birth"> Ngày sinh: 12/11/1995</span> <br />
<span className="main-paragraph-BM10-smallheading-content-position">Chức danh : Nhân viên học việc</span>
<span className="main-paragraph-BM10-smallheading-content-dept"> Phòng: Kỹ thuật</span> <br />
        

Thời gian học việc: 03 tháng <br />
Ngày tiếp nhận việc : Từ 25/01/2022 nối tiếp của hợp đồng thực tập sinh <br />
</div>

    <p className="main-paragraph-BM10-smallheading indent">
        2. Tiền lương và chế độ áp dụng khi học việc</p>
        Tiền lương học việc :  g/tháng (đồng/tháng) <br />
        Các chế độ khác: theo quy định công ty đã ban hành
        
    <p className="main-paragraph-BM10-smallheading indent">
        3.  Tiền lương và các chế độ áp dụng sau học việc</p>
        Căn cứ vào kết quả học việc sẽ đánh giá và thỏa thuận mức lương thử việc, dự kiến
như sau: <br/>
Tiền lương thử việc : đồng/tháng <br />
Các chế độ khác: theo quy định công ty đã ban hành <br />
Kính mong Giám đốc quan tâm giải quyết. <br />

<div className="main-paragraph-BM10-footer">
    <div className="main-paragraph-BM10-footer-item">Giám đốc duyệt</div>
    <div className="main-paragraph-BM10-footer-item"> 
    
      Trưởng bộ phận
    <span className="main-paragraph-BM10-footer-item-name">Nguyễn Thị Hoài</span>
    </div>

    <div className="main-paragraph-BM10-footer-item">
Người lập
<span className="main-paragraph-BM10-footer-item-name"> 
Nguyễn Mai Phương</span>

</div>
</div>
<div className='main-end-line-BM10'/>
    </div>

 
   
    </div>
    </div>

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
Mã tài liệu:: HR-QT-02-BM10
</div>
<div>Phiên bản: Ver 1.0</div>
<div>
Ngày ban hành:</div>

</div>
</div>
</div>
<hr className='first-divider-line'/>
<hr className='second-divider-line'/>

    <div className='main '>
        <div className="main-title-above-BM10">
        <div className="main-title-above-BM10-left">
        Số : /TTr – P.HCNS
    </div>

        <div className="main-title-above-BM10-right">
            <i>        Hà Nội, ngày 27 tháng 01 năm 2022
</i>
        </div>
        </div>
      <h1 className="main-title-big-BM10">TỜ TRÌNH</h1>
      <div className="main-title-big-BM10-sub">
        <span>  <i> ( V/v: Tiền lương và chế độ áp dụng nhân sự mới) </i> </span>
    </div>
        

    <div className="main-paragraph-BM10">
        <div className="main-paragraph-BM10-dear indent">
            Kính gửi : - Giám đốc công ty</div>
            <div className="main-paragraph-BM10-dear-sub">
                <p className="indent">- Căn cứ vào chỉ đạo trực tiếp của Giám đốc công ty</p>
                <p className="indent">- Căn cứ vào kết quả đào tạo thực tập sinh tại Công ty</p>
            </div>

       <p > Phòng HCNS đã trao đổi trực tiếp với nhân sự và đề xuất việc tiếp nhận 01 nhân sự
với tiền lương và chế độ như sau, chi tiết như sau:</p> 

    <p className="main-paragraph-BM10-smallheading indent">
        1. Thông tin nhân sự</p>
        <div className="main-paragraph-BM10-smallheading-content">
<span className="main-paragraph-BM10-smallheading-content-name">Họ tên : Nguyễn Duy Thành</span> 
<span className="main-paragraph-BM10-smallheading-content-birth"> Ngày sinh: 12/11/1995</span> <br />
<span className="main-paragraph-BM10-smallheading-content-position">Chức danh : Nhân viên kỹ thuật</span>
<span className="main-paragraph-BM10-smallheading-content-dept">Thời gian thử việc: 02 tháng</span> <br />
        
Ngày tiếp nhận việc : Từ 07/02/2022 đến hết ngày 06/04/2022 <br />
</div>

    <p className="main-paragraph-BM10-smallheading indent">
        2. Tiền lương và chế độ áp dụng khi học việc</p>
        Tiền lương thử việc : đồng/tháng (đồng/tháng) <br />
        Các chế độ khác: theo quy định công ty đã ban hành
        
    <p className="main-paragraph-BM10-smallheading indent">
        3.  Tiền lương và các chế độ áp dụng sau thử việc</p>
        Căn cứ vào kết quả thử việc sẽ đánh giá và thỏa thuận mức lương chính thức theo cơ
chế của bộ phận, dự kiến như sau:<br/>
Thu nhập chính thức : đồng/thán <br />
Các chế độ khác: theo quy định công ty đã ban hành <br />
Kính mong Giám đốc quan tâm giải quyết. <br />

<div className="main-paragraph-BM10-footer">
    <div className="main-paragraph-BM10-footer-item">Giám đốc duyệt</div>
    <div className="main-paragraph-BM10-footer-item"> 
    
      Trưởng bộ phận
    <span className="main-paragraph-BM10-footer-item-name">Nguyễn Thị Hoài</span>
    </div>

    <div className="main-paragraph-BM10-footer-item">
Người lập
<span className="main-paragraph-BM10-footer-item-name"> 
Nguyễn Mai Phương</span>

</div>
</div>
<div className='main-end-line-BM10'/>
    </div>

 
   
    </div>
    </div>
 </div>
 </div>
  );
};

export default BM05;
