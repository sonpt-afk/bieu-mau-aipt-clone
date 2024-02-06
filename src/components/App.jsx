import { useNavigate } from 'react-router-dom'
function App() {
  const nav = useNavigate()
  function handleClickBtnQTTD(){
    nav('/quy-trinh-tuyen-dung')
  }
  function handleClickBtnBM02(){
    nav('/bieu-mau-2')

  }
  function handleClickBtnBM03(){
    nav('/bieu-mau-3')

  }
  function handleClickBtnBM04(){
    nav('/bieu-mau-4')

  }

  function handleClickBtnBM05(){
    nav('/bieu-mau-5')

  }
  function handleClickBtnBM06(){
    nav('/bieu-mau-6')

  }
  function handleClickBtnBM07(){
    nav('/bieu-mau-7')

  }
  function handleClickBtnBM08(){
    nav('/bieu-mau-8')

  }
  function handleClickBtnBM10(){
    nav('/bieu-mau-10')

  }
  return (
    <>
     <button onClick={handleClickBtnQTTD}>BM quy trinh tuyen dung</button>
     <br />     <br />

     <button onClick={handleClickBtnBM02}>BM02</button>
     <br />     <br />
     <button onClick={handleClickBtnBM03}>BM03</button>
     <br />     <br />
     <button onClick={handleClickBtnBM04}>BM04</button>
     <br />     <br />
     <button onClick={handleClickBtnBM05}>BM05</button>
     <br />     <br />
     <button onClick={handleClickBtnBM06}>BM06</button>
     <br />     <br />
     <button onClick={handleClickBtnBM07}>BM07</button>
     <br />     <br />
     <button onClick={handleClickBtnBM08}>BM08</button>
     <br />     <br />
     <button onClick={handleClickBtnBM10}>BM010</button>
     <br />     <br />
    </>
  )
}

export default App
