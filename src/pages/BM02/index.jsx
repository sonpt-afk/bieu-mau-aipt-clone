import { usePDF } from 'react-to-pdf';
 import './index.scss';
const BM02 = () => {
   const { toPDF, targetRef } = usePDF({filename: 'HR-QT-01-BM02_Phiếu_đề_xuất_gói_tuyển_dụng.pdf'});
   return (
     
         <div>
    <button onClick={() => toPDF()}>Download PDF</button>

    <div ref={targetRef}>
       {/* P1 */}
  
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
Mã tài liệu:: HR-QT-01-BM02
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
      <div className="main-container">
      <h1 className="main-title">PHIẾU ĐỀ XUẤT GÓI TUYỂN DỤNG</h1>
    
      <p className="main-content">  

      Người đề xuất : TEST  <br /> Phòng : TEST <br />Lý do đề xuất : TEST <br />Ngày đăng tin : 11/11/1111
</p>
</div>

    <table >
    <thead>
  <tr>
    <th style={{width:"20%"}}>Vị trí tuyển dụng</th>
    <th style={{width:"5%"}}>Số 
lượng</th>
    <th style={{width:"45%"}}>Kênh tuyển dụng</th>
    <th style={{width:"15%"}}>Thời gian</th>
    
<th style={{width:"15%"}}>Giá tiền
(chưa VAT)</th>

  </tr>
  </thead>
  <tbody>
 

  <tr>
    
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
  </tr>

  <tr>
    
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
  </tr>

  <tr>
    
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
  </tr>
  </tbody>

</table>

    <div className="main-signature">
      <div className="main-signature-item">
      Ngày  11 /  11  /2024 <br />
      <b> Giám đốc duyệt</b>
       <br />
( ký, ghi rõ họ tên)
      </div>
      <div className="main-signature-item">
      Ngày  12 / 11   /2024  <br />
      <b>Trưởng bộ phận</b>
<br />
( ký, ghi rõ họ tên)
      </div>
      <div className="main-signature-item">
      Ngày  13 / 11   /2024  <br />
      <b>Người đề xuất</b>

<br />
( ký, ghi rõ họ tên)
      </div>
    </div>


    
    </div>
    </div>
 </div>
 </div>
        
   )
}

export default BM02;