import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux"

function CountComponent()
{
  let data = useSelector((state) => { return state } )

    return(
        <div>
             <table className='table1'>
                  <tr>
                    <td colSpan={7}><h6 className='l_title'>{data.mysr[0]}</h6></td>
                  </tr>
                  <tr>
                    <td colSpan={7}><h4 className='h4_t'>{data.mysr[1]}</h4></td>
                  </tr>
                  <tr>
                    <td>완료<span className='text_color1'>{data.mysr[2]}</span></td>
                    <td><span>|</span></td>
                    <td>접수중<span className='text_color2'>{data.mysr[3]}</span></td>
                    <td><span>|</span></td>
                    <td>처리중<span className='text_color3'>{data.mysr[4]}</span></td>
                    <td><span>|</span></td>
                    <td>임시저장<span className='text_color4'>{data.mysr[5]}</span></td>
                  </tr>
                </table>

                <table className='table2'>
                  <tr>
                    <td colSpan={7}><h6 className='l_title'>{data.mywork[0]}</h6></td>
                  </tr>
                  <tr>
                    <td colSpan={7}><h4 className='h4_t'>{data.mywork[1]}</h4></td>
                  </tr>
                  <tr className='text_sub'>
                    <td>대기작업<span className='text_color1'>{data.mywork[2]}</span></td>
                    <td><span className='bar'>|</span></td>
                    <td>진행작업<span className='text_color2'>{data.mywork[3]}</span></td>
                    <td><span className='bar'>|</span></td>
                    <td>작업완료<span className='text_color3'>{data.mywork[4]}</span></td>
                    <td><span className='bar'>|</span></td>
                    <td>납기미준수<span className='text_color4'>{data.mywork[5]}</span></td>
                  </tr>
                </table>
        </div>
    )
}

export default CountComponent;