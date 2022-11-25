
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import book from '../../book.png';
import air from '../../air.png';
import glass from '../../glass.png';
import Portaltab from './portaltab';
import CountComponent from '../count/countcomponent';

function Mainportal()
{
    return(
        <div className='back_box'>
        <div className='main_back'></div>
            <div className='main_btn'>
              <div className='btn_box'>
                <div className='service'>
                  <h5>서비스 등록</h5>
                  <img className='icon' src={book} alt="book" />
                </div>
                <div className='service'>
                  <h5>공항서비스문의</h5>
                  <img className='icon' src={air} alt="air"/>
                </div>
                <div className='service'>
                  <h5>전화문의</h5>
                  <img className='icon' src={glass} alt="glass"/>
                </div>
              </div>
            </div>

            <div className='content'>
              <div className='content_L'>
                <CountComponent />
              </div>

              <div className='content_R'>
                <Portaltab />
              </div>
            </div>
            </div>
    )
}

export default Mainportal