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
Mã tài liệu:: HR-QT-01-BM04
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
      <h1 className="main-title-big-BM5">DANH SÁCH ỨNG VIÊN THAM GIA PHỎNG VẤN</h1>
      <div className="main-title-big-BM5-sub">
        <span>  <i> Vị trí ứng tuyển: </i>   	</span>
        <span className="main-title-big-BM5-sub-date"><i>Ngày phỏng vấn: 06/04/2024</i>	
</span>
      </div>


<div className="main-table-BM5">
<table >
  <tr>
    <th style={{width:"5%"}}>TT</th>
    <th style={{width:"15%"}}>Họ tên</th>
    <th>Giới tính</th>
    <th>Năm sinh</th>
    <th>Trường</th>
    <th>Chuyên ngành</th>
    <th>Vị trí ứng tuyển</th>
    <th>Kinh nghiệm</th>
    <th>Điện thoại</th>
    <th>Thời gian PV</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Nguyễn Quốc Vương</td>
    <td>Nam</td>
    <td>1998</td>
    <td>CĐN Bách Khoa</td>
    <td>Tự động hóa</td>
    <td>NV Dự án</td>
    <td>Chưa có KN</td>
    <td>0365479204</td>
    <td>13h30’</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Trương Thị Vui</td>
    <td>Nữ</td>
    <td>1997</td>
    <td>ĐH Luật</td>
    <td>Luật kinh tế</td>
    <td>HCNS</td>
    <td>Trên 2 năm</td>
    <td>0366170597</td>
    <td>14h00’</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Phạm Thị Ngọc Liên</td>
    <td>Nữ</td>
    <td>1999</td>
    <td>ĐH Bách Khoa</td>
    <td>KThuật Hóa</td>
    <td>Sales admin</td>
    <td>Chưa có KN</td>
    <td>0334605432</td>
    <td>14h30’</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
 
</table>
</div>

<div className="main-footer-BM5">
<span className="main-footer-BM5-date">
  <i>Hà Nội, ngày 4 tháng 4 năm 2024</i>
</span><br />
<span className="main-footer-BM5-name">
  <b>Phòng HCNS</b>
</span>
</div>


   
    </div>
    </div>

    
 </div>
 </div>
  );
};

export default BM05;
