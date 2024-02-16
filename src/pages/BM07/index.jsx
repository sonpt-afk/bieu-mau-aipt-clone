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
Mã tài liệu:: HR-QT-01-BM06
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
        <div className="main-first-part-BM7">
      <h1 className="main-title-big-BM7">THƯ CẢM ƠN</h1>
      <div className="main-title-big-BM7-sub">
        <span> <b> <i> Bạn Phan Danh thân mến! </i>  </b> 	</span>
        
      </div>

    <div className="main-paragraph-BM7">
       <p className="indent"> Công Ty Cổ Phần AIPT Việt Nam trân trọng cảm ơn bạn đã quan tâm đến cơ
hội nghề nghiệp và gửi hồ sơ ứng tuyển vào Phòng Kĩ Thuật với vị trí Kĩ thuật mạng của chúng tôi.</p> 
<p className="indent">   Chúng tôi đảm bảo rằng hồ sơ của bạn đã được xem xét một cách nghiêm túc. Qua trao đổi về yêu cầu công việc và khả năng đáp ứng yêu cầu của Bạn, chúng tôi
đánh giá cao kinh nghiệm, trình độ chuyên môn của Bạn. </p> 
        <p className="indent">  Tuy nhiên, chúng tôi rất tiếc phải thông báo hồ sơ của bạn chưa thực sự phù
hợp với tiêu chí tuyển dụng của chúng tôi trong thời gian này. Chúng tôi sẽ bảo mật
thông tin và lưu trữ hồ sơ của Bạn để có thể đề xuất vào các vị trí phù hợp trong
những lần tuyển dụng tiếp theo.. </p>
        <p className="indent">  AIPTGROUP chúc bạn luôn thành công trên con đường sự nghiệp và hi vọng
có cơ hội được hợp tác vào dịp khác. Một lần nữa, cảm ơn sự quan tâm của bạn đối
với Công ty Cổ Phần AIPT Việt Nam . </p>
 Trân trọng cảm ơn!
    </div>


<div className='main-end-line-BM7'/>
    </div>

    <div className="main-second-part-BM7">
    <div className="main-paragraph-BM7">
        <p className="main-paragraph-BM7-dear indent"><b><i>Dear chị Phan Linh</i></b>  </p>
       <p className="indent">Công Ty Cổ Phần AIPT Việt Nam trân trọng cảm ơn chị đã quan tâm và tham
gia vào chương trình tuyển dụng của Công ty chúng tôi trong thời gian qua.</p> 
<p className="indent">   Chúng tôi đảm bảo rằng hồ sơ của chị đã được xem xét một cách nghiêm túc. Qua trao đổi về yêu cầu công việc và khả năng đáp ứng yêu cầu của chị, chúng tôi
đánh giá cao kinh nghiệm, trình độ chuyên môn của chị. </p> 
         Tuy nhiên, chúng tôi rất tiếc phải thông báo hồ sơ của chị chưa phù hợp với các yêu
cầu và điều kiện làm việc với Công ty chúng tôi trong thời gian này.Chúng tôi sẽ lưu
trữ hồ sơ của chị để tham khảo sau này.
        <p className="indent"> Chúng tôi xin chúc Quý chị luôn thành công trên con đường sự nghiệp và rất hi
vọng có cơ hội được hợp tác vào dịp khác. Một lần nữa, cảm ơn sự quan tâm của chị
đối với Công ty Cổ Phần AIPT Việt Nam. </p>
 Trân trọng cảm ơn!
    </div>
    <div className='main-end-line-BM7'/>

    </div>
   
    </div>
    </div>

    
 </div>
 </div>
  );
};

export default BM05;
